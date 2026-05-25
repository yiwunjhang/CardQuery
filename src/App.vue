<script setup>
import { ref, computed, watch } from 'vue'
import { searchMerchant, isDiningMerchant, isDiningExcluded, isLinePayExcluded, PLANS, PLAN_GROUP_META } from './data/rewards.js'
import { findKaohsiungMicropayment } from './data/kaohsiung-micropayment.js'
import PlanSummaryGrid from './components/PlanSummaryGrid.vue'
import JiangJiangView from './components/JiangJiangView.vue'

const selectedCard = ref('gogo')

const merchantInput = ref('')
const isHoliday = ref(isWeekendOrHoliday())
const showAllPlans = ref(false)
const amountInput = ref('')
const selectedPayment = ref(null)

const PAYMENT_METHODS = [
  { id: 'taishin_pay', short: '台新Pay', activeClass: 'bg-blue-600 text-white border-blue-600', inactiveClass: 'bg-white text-blue-600 border-blue-200' },
  { id: 'line_pay',    short: 'LINE Pay', activeClass: 'bg-green-500 text-white border-green-500', inactiveClass: 'bg-white text-green-600 border-green-200' },
  { id: 'nfc_pay',     short: '感應Pay',  activeClass: 'bg-gray-700 text-white border-gray-700',   inactiveClass: 'bg-white text-gray-600 border-gray-200' },
  { id: 'card',        short: '直刷',     activeClass: 'bg-taishin-red text-white border-taishin-red', inactiveClass: 'bg-white text-taishin-red border-red-200' },
]

function isWeekendOrHoliday() {
  const day = new Date().getDay()
  return day === 0 || day === 6
}

// Collapse plan grid when user starts typing
watch(merchantInput, (val) => {
  if (val.trim()) showAllPlans.value = false
})

const results = computed(() => {
  const q = merchantInput.value.trim()
  if (!q) return null

  const matched = searchMerchant(q)
  const diningExclusion = isDiningExcluded(q)
  const linePayExclusion = isLinePayExcluded(q)
  const kaohsiungMicropayment = findKaohsiungMicropayment(q)

  const diningPlan = PLANS.find(p => p.id === 'food_dining')
  const shouldAddDining = isDiningMerchant(q) && !matched.some(m => m.planGroup === 'food') && !diningExclusion
  if (shouldAddDining && diningPlan) {
    matched.push({ ...diningPlan, inferredDining: true })
  }

  const holidayPlan = PLANS.find(p => p.isHoliday)
  const taishinPay = PLANS.find(p => p.id === 'pay_taishin')
  const linePay = PLANS.find(p => p.id === 'pay_line')

  if (matched.length === 0) {
    return {
      type: 'none',
      matched: [],
      best: null,
      hasTaishinPayBoost: false,
      hasDiningMatch: isDiningMerchant(q),
      holiday: isHoliday.value ? holidayPlan : null,
      taishinPay,
      linePay,
      diningExclusion,
      linePayExclusion,
      kaohsiungMicropayment,
    }
  }

  const sorted = [...matched].sort((a, b) => b.rate - a.rate)
  const hasTaishinPayBoost = matched.some(m => m.id === 'pay_taishin')
  const hasDiningMatch = matched.some(m => m.planGroup === 'food')

  return {
    type: 'found',
    matched: sorted,
    best: sorted[0],
    hasTaishinPayBoost,
    hasDiningMatch,
    taishinPay,
    linePay,
    holiday: isHoliday.value ? holidayPlan : null,
    diningExclusion,
    linePayExclusion,
    kaohsiungMicropayment,
  }
})

const BASE_RATE = 1

const effectiveResult = computed(() => {
  if (!results.value || !selectedPayment.value) return null
  const r = results.value
  const pm = selectedPayment.value
  const holidayRate = isHoliday.value ? 2.0 : 0

  let rate, planName, warning = null

  if (pm === 'taishin_pay') {
    if (r.hasTaishinPayBoost) {
      rate = 3.8
      planName = 'Pay著刷・台新Pay'
    } else {
      const plans = (r.matched || []).filter(p => p.id !== 'pay_taishin')
      const best = plans[0]
      const planRate = best?.rate ?? BASE_RATE
      rate = Math.max(planRate, holidayRate)
      planName = (isHoliday.value && holidayRate >= planRate)
        ? '假日刷'
        : (best ? `${best.planName}・${best.name}` : '一般消費（基本1%）')
    }
  } else if (pm === 'line_pay') {
    if (r.linePayExclusion) {
      rate = Math.max(BASE_RATE, holidayRate)
      planName = isHoliday.value ? '假日刷' : '一般消費'
      warning = `${r.linePayExclusion.label} — LINE Pay 不回饋`
    } else {
      rate = Math.max(2.3, holidayRate)
      planName = (isHoliday.value && holidayRate > 2.3) ? '假日刷' : 'Pay著刷・LINE Pay'
      if (r.hasDiningMatch) warning = '餐飲類僅 Pay著刷，不含好饗刷加成'
    }
  } else {
    // card / nfc_pay
    const plans = (r.matched || []).filter(p => p.id !== 'pay_taishin')
    const best = plans[0]
    if (r.kaohsiungMicropayment && !best) {
      rate = holidayRate || 0
      planName = isHoliday.value ? '假日刷' : '直刷無回饋'
      warning = '此商家直刷走 NCCC 小額支付，建議改用 LINE Pay 2.3%'
    } else {
      const planRate = best?.rate ?? BASE_RATE
      rate = Math.max(planRate, holidayRate)
      planName = (isHoliday.value && holidayRate >= planRate)
        ? '假日刷'
        : (best ? `${best.planName}・${best.name}` : '一般消費（基本1%）')
    }
  }

  const amount = parseFloat(amountInput.value)
  const cashback = (!isNaN(amount) && amount > 0) ? Math.floor(amount * rate / 100) : null
  return { rate, planName, warning, cashback, hasAmount: !isNaN(amount) && amount > 0 }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
    <!-- Header -->
    <header class="bg-white/90 backdrop-blur sticky top-0 z-10 shadow-sm border-b border-gray-100">
      <div class="max-w-xl mx-auto px-4 py-3 flex items-center gap-3">
        <div :class="['w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-sm', selectedCard === 'gogo' ? 'bg-taishin-red' : 'bg-amber-500']">
          <span class="text-white font-bold text-base leading-none">{{ selectedCard === 'gogo' ? '台' : '將' }}</span>
        </div>
        <div class="flex-1 min-w-0">
          <h1 class="text-base font-bold text-gray-900 leading-tight">
            {{ selectedCard === 'gogo' ? '台新 GOGO 卡回饋查詢' : '將將卡生活升級查詢' }}
          </h1>
          <p class="text-xs text-gray-400">輸入商家，找出最高回饋方案</p>
        </div>
        <!-- Holiday badge (GOGO only) -->
        <div
          v-if="selectedCard === 'gogo'"
          :class="['flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer select-none transition-all', isHoliday ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-500']"
          @click="isHoliday = !isHoliday"
          title="點擊切換假日/平日"
        >
          <span>{{ isHoliday ? '🎉' : '📅' }}</span>
          <span>{{ isHoliday ? '假日' : '平日' }}</span>
        </div>
      </div>
    </header>

    <main class="max-w-xl mx-auto px-4 py-5 space-y-4">

      <!-- Card selector -->
      <div class="flex gap-1.5 bg-gray-100 p-1 rounded-2xl">
        <button
          @click="selectedCard = 'gogo'"
          :class="['flex-1 py-2 rounded-xl text-sm font-semibold transition-all', selectedCard === 'gogo' ? 'bg-white text-taishin-red shadow-sm' : 'text-gray-500 hover:text-gray-700']"
        >台新 GOGO 卡</button>
        <button
          @click="selectedCard = 'jiangjiang'"
          :class="['flex-1 py-2 rounded-xl text-sm font-semibold transition-all', selectedCard === 'jiangjiang' ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-500 hover:text-gray-700']"
        >將將卡</button>
      </div>

      <!-- JiangJiang view -->
      <JiangJiangView v-if="selectedCard === 'jiangjiang'" />

      <!-- GOGO card content -->
      <template v-if="selectedCard === 'gogo'">

      <!-- Search Input -->
      <div class="relative">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg">🔍</span>
        <input
          v-model="merchantInput"
          type="text"
          placeholder="輸入商家名稱，例：全家、Netflix、麥當勞…"
          class="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm focus:border-taishin-red focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-base transition placeholder:text-gray-400"
        />
        <button
          v-if="merchantInput"
          @click="merchantInput = ''"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl leading-none transition"
        >×</button>
      </div>

      <!-- ======= RESULTS SECTION ======= -->
      <template v-if="results">

        <!-- Calculator -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 space-y-3">
          <p class="text-xs font-semibold text-gray-500">回饋試算</p>

          <!-- Amount input -->
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium pointer-events-none select-none">NT$</span>
            <input
              v-model="amountInput"
              type="number"
              min="0"
              placeholder="消費金額"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-taishin-red focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition placeholder:text-gray-300"
            />
          </div>

          <!-- Payment method buttons -->
          <div class="grid grid-cols-4 gap-1.5">
            <button
              v-for="pm in PAYMENT_METHODS"
              :key="pm.id"
              @click="selectedPayment = selectedPayment === pm.id ? null : pm.id"
              :class="['py-2 rounded-xl border text-xs font-semibold transition-all', selectedPayment === pm.id ? pm.activeClass : pm.inactiveClass]"
            >{{ pm.short }}</button>
          </div>

          <!-- Result -->
          <template v-if="effectiveResult">
            <div :class="['rounded-xl px-4 py-3 flex items-center justify-between', effectiveResult.rate > 0 ? 'bg-red-50 border border-red-100' : 'bg-gray-50 border border-gray-200']">
              <div class="flex-1 min-w-0">
                <p class="text-xs font-medium text-gray-600">{{ effectiveResult.planName }}</p>
                <p v-if="effectiveResult.warning" class="text-xs text-amber-600 mt-0.5">⚠ {{ effectiveResult.warning }}</p>
                <p v-if="effectiveResult.hasAmount" class="text-base font-bold text-taishin-red mt-1">
                  回饋 NT$ {{ effectiveResult.cashback.toLocaleString() }}
                </p>
                <p v-else class="text-xs text-gray-400 mt-0.5">輸入金額後顯示回饋</p>
              </div>
              <div class="text-right ml-3 shrink-0">
                <p :class="['text-3xl font-extrabold', effectiveResult.rate > 0 ? 'text-taishin-red' : 'text-gray-300']">
                  {{ effectiveResult.rate }}<span class="text-base font-bold">%</span>
                </p>
              </div>
            </div>
          </template>
          <p v-else class="text-xs text-gray-400 text-center py-1">選擇付款方式查看適用回饋</p>
        </div>

        <!-- FOUND results -->
        <template v-if="results.type === 'found'">
          <!-- Best rate highlight -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-5 py-3 bg-gradient-to-r from-taishin-red to-taishin-light flex items-center justify-between">
              <div>
                <p class="text-white/80 text-xs">查詢結果</p>
                <p class="text-white font-bold text-sm">「{{ merchantInput }}」</p>
              </div>
              <div class="text-right">
                <p class="text-white/70 text-xs">最高可得</p>
                <p class="text-white text-2xl font-extrabold">
                  {{ results.hasTaishinPayBoost ? '3.8' : results.best?.rate }}
                  <span class="text-base font-bold">%</span>
                </p>
              </div>
            </div>

            <!-- 台新Pay boost row (if applicable) -->
            <div v-if="results.hasTaishinPayBoost" class="px-5 py-4 border-b border-gray-100">
              <div class="flex items-start justify-between gap-3">
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-1.5 mb-1">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">💳 台新Pay</span>
                    <span class="text-xs font-semibold text-blue-700">Pay著刷</span>
                    <span class="ml-1 text-xs text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full font-medium">推薦</span>
                  </div>
                  <p class="text-sm text-gray-700">使用 <strong>台新Pay</strong> 綁定台新GOGO卡消費</p>
                  <p class="text-xs text-gray-400 mt-0.5">{{ results.taishinPay?.note }}</p>
                </div>
                <div class="text-right shrink-0">
                  <p class="text-3xl font-extrabold text-blue-700">3.8<span class="text-lg">%</span></p>
                  <p class="text-xs text-blue-400">最高回饋</p>
                </div>
              </div>
            </div>

            <!-- Other matched plans -->
            <div
              v-for="plan in results.matched.filter(p => p.id !== 'pay_taishin')"
              :key="plan.id"
              class="px-5 py-4 border-b border-gray-100 last:border-0"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-1.5 mb-1">
                    <span :class="['inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold', plan.badgeClass]">
                      {{ PLAN_GROUP_META[plan.planGroup]?.icon }} {{ plan.planName }}
                    </span>
                    <span :class="['text-xs font-semibold', plan.rateClass]">{{ plan.name }}</span>
                    <span v-if="plan.inferredDining" class="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">推測為餐飲</span>
                  </div>
                  <p class="text-sm text-gray-700">
                    切換至「<strong>{{ plan.planName }}</strong>」方案刷台新GOGO卡
                  </p>
                  <p v-if="plan.note" class="text-xs text-gray-400 mt-0.5">{{ plan.note }}</p>
                </div>
                <div class="text-right shrink-0">
                  <p :class="['text-3xl font-extrabold', plan.rateClass]">{{ plan.rate }}<span class="text-lg">%</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- LINE Pay universal option -->
          <div :class="['rounded-2xl shadow-sm border px-5 py-4', results.linePayExclusion ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-100']">
            <div class="flex items-center justify-between">
              <div>
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white">LINE Pay</span>
                  <span class="text-xs text-gray-500">Pay著刷</span>
                  <span v-if="results.linePayExclusion" class="text-xs text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full font-medium">此商家不適用</span>
                </div>
                <p :class="['text-sm', results.linePayExclusion ? 'text-gray-400 line-through' : 'text-gray-600']">LINE Pay 綁定台新GOGO卡</p>
                <p v-if="results.hasDiningMatch && !results.linePayExclusion" class="text-xs text-amber-600 mt-0.5">餐飲消費用 LINE Pay 僅適用此 2.3%，不含好饗刷加成</p>
              </div>
              <div class="text-right shrink-0 ml-3">
                <p :class="['text-2xl font-extrabold', results.linePayExclusion ? 'text-gray-300' : 'text-green-600']">2.3<span class="text-base">%</span></p>
              </div>
            </div>
            <div v-if="results.linePayExclusion" class="mt-2.5 pt-2.5 border-t border-gray-200">
              <p class="text-xs text-red-700">
                <strong>{{ results.linePayExclusion.label }}</strong> 不適用 LINE Pay 回饋。{{ results.linePayExclusion.suggestion }}
              </p>
            </div>
          </div>

          <!-- Dining exclusion warning (FOUND state) -->
          <div v-if="results.diningExclusion" class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
            <span class="text-xl shrink-0 mt-0.5">⚠️</span>
            <div>
              <p class="text-sm font-semibold text-amber-800">不適用好饗刷餐廳加碼</p>
              <p class="text-xs text-amber-700 mt-1">
                此商家屬於<strong>{{ results.diningExclusion.label }}</strong>，{{ results.diningExclusion.reason }}。
              </p>
              <p v-if="!results.linePayExclusion" class="text-xs text-amber-600 mt-1">建議改用 <strong>LINE Pay 2.3%</strong> 或確認店家是否有台新Pay優惠。</p>
              <p v-else class="text-xs text-red-700 mt-1">此商家 LINE Pay 亦不回饋，請確認是否符合台新Pay 3.8% 優惠。</p>
            </div>
          </div>

          <!-- Kaohsiung micropayment warning (FOUND state) -->
          <div v-if="results.kaohsiungMicropayment" class="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl px-5 py-4">
            <span class="text-xl shrink-0 mt-0.5">🏪</span>
            <div>
              <p class="text-sm font-semibold text-sky-800">高雄市 NCCC 小額支付特約商店</p>
              <p class="text-xs text-sky-700 mt-1">
                在名單中找到「<strong>{{ results.kaohsiungMicropayment }}</strong>」，此商家透過聯合信用卡處理中心小額支付平台收費（帳單顯示「聯信-」）。
              </p>
              <p class="text-xs text-sky-600 mt-1">
                直刷信用卡（聯信）<strong>無回饋</strong>；請改用 <strong>LINE Pay 2.3%</strong>。
                若為連鎖飲料或速食類，好饗刷 3.3% 亦不適用。
              </p>
            </div>
          </div>
        </template>

        <!-- NOT FOUND -->
        <div v-else-if="results.type === 'none'" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="px-5 py-4 bg-gray-50 border-b border-gray-100">
            <p class="text-sm font-semibold text-gray-600">找不到「{{ merchantInput }}」的專屬方案</p>
            <p class="text-xs text-gray-400 mt-0.5">可改用以下通用回饋方式</p>
          </div>
          <div class="px-5 py-4 space-y-3">
            <div :class="['flex items-center justify-between p-3 rounded-xl border', results.linePayExclusion ? 'bg-gray-50 border-gray-200' : 'bg-green-50 border-green-100']">
              <div>
                <div class="flex items-center gap-1.5">
                  <p :class="['text-sm font-semibold', results.linePayExclusion ? 'text-gray-400 line-through' : 'text-green-800']">LINE Pay 綁定刷卡</p>
                  <span v-if="results.linePayExclusion" class="text-xs text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full">不適用</span>
                </div>
                <p v-if="results.linePayExclusion" class="text-xs text-red-600 mt-0.5">{{ results.linePayExclusion.label }} — {{ results.linePayExclusion.suggestion }}</p>
                <p v-else class="text-xs text-green-600">全通路適用</p>
              </div>
              <span :class="['text-2xl font-extrabold', results.linePayExclusion ? 'text-gray-300' : 'text-green-700']">2.3%</span>
            </div>
            <div v-if="isHoliday" class="flex items-center justify-between p-3 bg-pink-50 rounded-xl border border-pink-100">
              <div>
                <p class="text-sm font-semibold text-pink-800">假日刷</p>
                <p class="text-xs text-pink-600">週六日 · 不限通路含保費</p>
              </div>
              <span class="text-2xl font-extrabold text-pink-700">2%</span>
            </div>
            <template v-if="results.diningExclusion">
              <div class="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5">
                <span class="text-sm shrink-0">⚠️</span>
                <div>
                  <p class="text-xs font-semibold text-amber-800">不適用好饗刷餐廳加碼</p>
                  <p class="text-xs text-amber-700 mt-0.5">
                    此商家屬<strong>{{ results.diningExclusion.label }}</strong>，透過聯合信用卡中心小額支付平台收費，不予回饋。
                  </p>
                </div>
              </div>
            </template>
            <template v-if="results.kaohsiungMicropayment">
              <div class="flex items-start gap-2 bg-sky-50 border border-sky-200 rounded-xl px-3 py-2.5">
                <span class="text-sm shrink-0">🏪</span>
                <div>
                  <p class="text-xs font-semibold text-sky-800">高雄市 NCCC 小額支付特約商店</p>
                  <p class="text-xs text-sky-700 mt-0.5">
                    在名單中找到「<strong>{{ results.kaohsiungMicropayment }}</strong>」，直刷信用卡（聯信）無回饋，請改用 <strong>LINE Pay 2.3%</strong>。若為連鎖飲料或速食類，好饗刷 3.3% 亦不適用。
                  </p>
                </div>
              </div>
            </template>
            <p v-if="!results.diningExclusion" class="text-xs text-gray-400 text-center">若為一般餐廳（非連鎖飲料/速食），切換「好饗刷」可享 3.3%</p>
          </div>
        </div>

        <!-- Holiday info pill (when found AND today is holiday) -->
        <div v-if="results.type === 'found' && results.holiday" class="flex items-center gap-3 bg-pink-50 border border-pink-200 rounded-2xl px-5 py-3.5">
          <span class="text-2xl shrink-0">🎉</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-pink-800">今天是假日！假日刷加碼</p>
            <p class="text-xs text-pink-600 mt-0.5">{{ results.holiday.note }}</p>
          </div>
          <span class="text-xl font-extrabold text-pink-700 shrink-0">2%</span>
        </div>

      </template>

      <!-- ======= DEFAULT: All Plans Overview ======= -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          @click="showAllPlans = !showAllPlans"
          class="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 active:bg-gray-100 transition"
        >
          <div class="flex items-center gap-2">
            <span class="text-base">📋</span>
            <span class="font-semibold text-gray-700 text-sm">所有回饋方案一覽</span>
          </div>
          <span :class="['text-gray-400 text-sm transition-transform', showAllPlans ? 'rotate-180' : '']">▼</span>
        </button>
        <div v-show="showAllPlans || !merchantInput" class="border-t border-gray-100">
          <PlanSummaryGrid />
        </div>
      </div>

      <!-- Tips -->
      <div class="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 space-y-2">
        <p class="text-xs font-semibold text-amber-800">使用提示</p>
        <ul class="text-xs text-amber-700 space-y-1 list-disc list-inside">
          <li>點擊右上角的日期標籤可切換假日/平日模式</li>
          <li>全家、7-11 在「天天刷」方案中需使用台新Pay</li>
          <li>同一商家若同時符合多個方案，以最高回饋為準</li>
          <li>假日刷（2%）適用於週六日及國定假日所有消費</li>
        </ul>
      </div>

      <p class="text-xs text-center text-gray-400 pb-6">
        資料以台新銀行官方公告為準，本工具僅供參考。<br/>
        回饋上限、資格條件請詳閱台新官網。
      </p>

      </template> <!-- end GOGO card content -->
    </main>
  </div>
</template>
