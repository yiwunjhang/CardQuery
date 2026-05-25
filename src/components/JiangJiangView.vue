<script setup>
import { ref, computed } from 'vue'
import { searchJiangJiang, JJ_PLANS, JJ_CATEGORIES, MONTHLY_THRESHOLD, MONTHLY_CAP } from '../data/jiangjiang-rewards.js'

const merchantInput = ref('')
const amountInput = ref('')

const results = computed(() => {
  const q = merchantInput.value.trim()
  if (!q) return null
  const matched = searchJiangJiang(q)
  return { found: matched.length > 0, matched }
})

const calculatedPoints = computed(() => {
  const amount = parseFloat(amountInput.value)
  if (isNaN(amount) || amount <= 0) return null
  return Math.round(amount * 4.5 / 100)
})
</script>

<template>
  <div class="space-y-4">

    <!-- Monthly condition banner -->
    <div class="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3.5 flex items-start gap-3">
      <span class="text-lg shrink-0 mt-0.5">📋</span>
      <div>
        <p class="text-xs font-semibold text-amber-800">生活升級計畫加碼條件</p>
        <p class="text-xs text-amber-700 mt-0.5">
          當月累積消費滿 <strong>{{ MONTHLY_THRESHOLD.toLocaleString() }} 元</strong>，指定通路筆筆享
          <strong>4.5% N點</strong>，每人每月上限 <strong>{{ MONTHLY_CAP }} N點</strong>
        </p>
      </div>
    </div>

    <!-- Search Input -->
    <div class="relative">
      <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg">🔍</span>
      <input
        v-model="merchantInput"
        type="text"
        placeholder="輸入商家名稱，例：Notion、Uber Eats、健身工廠…"
        class="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-gray-800 text-base transition placeholder:text-gray-400"
      />
      <button
        v-if="merchantInput"
        @click="merchantInput = ''"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl leading-none transition"
      >×</button>
    </div>

    <!-- Results -->
    <template v-if="results">

      <!-- N點 Calculator -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 space-y-3">
        <p class="text-xs font-semibold text-gray-500">N點試算</p>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium pointer-events-none select-none">NT$</span>
          <input
            v-model="amountInput"
            type="number"
            min="0"
            placeholder="消費金額"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-gray-800 text-sm transition placeholder:text-gray-300"
          />
        </div>
        <div
          :class="['rounded-xl px-4 py-3 flex items-center justify-between', calculatedPoints !== null ? 'bg-amber-50 border border-amber-100' : 'bg-gray-50 border border-gray-100']"
        >
          <div>
            <p class="text-xs text-gray-500">
              {{ results.found ? '指定通路 4.5%' : '指定行動支付 4.5%（LINE Pay / 街口 / icash Pay…）' }}
            </p>
            <p v-if="calculatedPoints !== null" class="text-base font-bold text-amber-700 mt-0.5">
              獲得 {{ calculatedPoints }} N點
            </p>
            <p v-else class="text-xs text-gray-400 mt-0.5">輸入金額後顯示 N點</p>
          </div>
          <p class="text-3xl font-extrabold text-amber-600 ml-3 shrink-0">4.5<span class="text-base">%</span></p>
        </div>
      </div>

      <!-- Found -->
      <div v-if="results.found" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-between">
          <div>
            <p class="text-white/80 text-xs">查詢結果</p>
            <p class="text-white font-bold text-sm">「{{ merchantInput }}」</p>
          </div>
          <div class="text-right">
            <p class="text-white/70 text-xs">生活升級加碼</p>
            <p class="text-white text-2xl font-extrabold">4.5<span class="text-base font-bold">%</span></p>
          </div>
        </div>

        <div
          v-for="plan in results.matched"
          :key="plan.id"
          class="px-5 py-4 border-b border-gray-100 last:border-0"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center gap-1.5 mb-1">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">
                  {{ JJ_CATEGORIES[plan.id]?.icon }} {{ JJ_CATEGORIES[plan.id]?.name }}
                </span>
                <span v-if="plan.inferred" class="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">推測為餐廳</span>
              </div>
              <p class="text-sm text-gray-700">適用<strong>生活升級計畫</strong> 4.5% N點加碼回饋</p>
              <p v-if="plan.note" class="text-xs text-gray-400 mt-0.5">{{ plan.note }}</p>
            </div>
            <p class="text-3xl font-extrabold text-amber-600 shrink-0">4.5<span class="text-lg">%</span></p>
          </div>
        </div>
      </div>

      <!-- Not found -->
      <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
          <p class="text-sm font-semibold text-gray-600">「{{ merchantInput }}」非指定商家通路</p>
          <p class="text-xs text-gray-400 mt-0.5">直刷信用卡不享加碼，但可改用指定行動支付</p>
        </div>
        <div class="px-5 py-4 space-y-3">
          <!-- Direct card: no cashback -->
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
            <div>
              <p class="text-sm font-semibold text-gray-400 line-through">直刷信用卡</p>
              <p class="text-xs text-gray-400 mt-0.5">非指定通路，不適用加碼</p>
            </div>
            <span class="text-2xl font-extrabold text-gray-300">0%</span>
          </div>
          <!-- Mobile pay: 4.5% -->
          <div class="flex items-start justify-between p-3 bg-amber-50 rounded-xl border border-amber-200">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1.5 mb-1">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">📱 行動支付</span>
              </div>
              <p class="text-sm font-semibold text-amber-800">改用指定行動支付享 4.5%</p>
              <p class="text-xs text-amber-600 mt-0.5">LINE Pay、街口支付、icash Pay、橘子支付、悠遊付、Hami Pay、Pi 錢包、TWQR</p>
              <p class="text-xs text-red-500 mt-0.5">全支付不在指定通路</p>
            </div>
            <span class="text-2xl font-extrabold text-amber-600 ml-3 shrink-0">4.5%</span>
          </div>
        </div>
      </div>

    </template>

    <!-- Default: all channels overview -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-5 py-4 border-b border-gray-100">
        <p class="text-sm font-semibold text-gray-700">指定通路一覽（9 大類）</p>
      </div>
      <div class="divide-y divide-gray-100">
        <div v-for="plan in JJ_PLANS" :key="plan.id" class="px-5 py-3 flex items-start gap-3">
          <span class="text-base shrink-0 mt-0.5">{{ JJ_CATEGORIES[plan.id]?.icon }}</span>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold text-gray-700">{{ JJ_CATEGORIES[plan.id]?.name }}</p>
            <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">{{ plan.stores.join('、') }}</p>
          </div>
          <span class="text-sm font-bold text-amber-600 shrink-0">4.5%</span>
        </div>
      </div>
    </div>

    <!-- Tips -->
    <div class="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 space-y-2">
      <p class="text-xs font-semibold text-amber-800">使用提示</p>
      <ul class="text-xs text-amber-700 space-y-1 list-disc list-inside">
        <li>每月累積消費達 3,000 元後，當月所有指定通路消費才享加碼</li>
        <li>每人每月上限 300 N點，約 6,667 元消費達上限</li>
        <li>7-ELEVEN 須搭配 icash pay / 街口支付 / 橘子支付才適用</li>
        <li>全家僅限街口支付；家樂福不限支付方式</li>
        <li>N點於次月底前撥入帳戶</li>
      </ul>
    </div>

    <p class="text-xs text-center text-gray-400 pb-6">
      資料以將將卡官方公告為準，本工具僅供參考。<br/>
      回饋上限、資格條件請詳閱官網。
    </p>

  </div>
</template>