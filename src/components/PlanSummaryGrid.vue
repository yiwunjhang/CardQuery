<script setup>
import { PLAN_GROUP_META } from '../data/rewards.js'

const plans = [
  {
    group: 'pay',
    items: [
      { label: '台新Pay / 台新Pay+', rate: '3.8%', note: '指定門市' },
      { label: 'LINE Pay', rate: '2.3%', note: '全通路' },
    ],
  },
  {
    group: 'daily',
    items: [
      { label: '超商量販', rate: '3.3%', note: '全家、7-11需台新Pay' },
      { label: '通勤交通', rate: '3.3%', note: '' },
      { label: '加油充電', rate: '3.3%', note: '' },
      { label: '藥妝藥局', rate: '3.3%', note: '' },
    ],
  },
  {
    group: 'big',
    items: [
      { label: '指定百貨', rate: '3.3%', note: '' },
      { label: '指定Outlet', rate: '3.3%', note: '' },
      { label: '居家裝修', rate: '3.3%', note: '' },
      { label: '時尚品味', rate: '3.3%', note: '' },
    ],
  },
  {
    group: 'food',
    items: [
      { label: '全臺餐飲', rate: '3.3%', note: '不含餐券' },
      { label: '外送平台', rate: '3.3%', note: '' },
      { label: '購票娛樂', rate: '3.3%', note: '' },
      { label: '指定KTV', rate: '3.3%', note: '' },
      { label: '指定飯店', rate: '3.3%', note: '' },
    ],
  },
  {
    group: 'digital',
    items: [
      { label: '網購平台', rate: '3.3%', note: '' },
      { label: '線上課程', rate: '3.3%', note: '' },
      { label: '遊戲影音', rate: '3.3%', note: '' },
      { label: 'AI服務', rate: '3.3%', note: '' },
    ],
  },
  {
    group: 'travel',
    items: [
      { label: '海外消費', rate: '3.3%', note: '含歐洲' },
      { label: '航空公司', rate: '3.3%', note: '' },
      { label: '海外交通/網路', rate: '3.3%', note: '' },
      { label: '訂房平台', rate: '3.3%', note: '' },
      { label: '旅行社', rate: '3.3%', note: '' },
    ],
  },
  {
    group: 'holiday',
    items: [
      { label: '節假日不限通路', rate: '2%', note: '含保費、LINE Pay' },
    ],
  },
]

const groupBgMap = {
  pay: 'bg-blue-50 border-blue-100',
  daily: 'bg-orange-50 border-orange-100',
  big: 'bg-purple-50 border-purple-100',
  food: 'bg-red-50 border-red-100',
  digital: 'bg-cyan-50 border-cyan-100',
  travel: 'bg-indigo-50 border-indigo-100',
  holiday: 'bg-pink-50 border-pink-100',
}

const groupTextMap = {
  pay: 'text-blue-700',
  daily: 'text-orange-700',
  big: 'text-purple-700',
  food: 'text-red-700',
  digital: 'text-cyan-700',
  travel: 'text-indigo-700',
  holiday: 'text-pink-700',
}

const groupHeaderMap = {
  pay: 'bg-blue-600',
  daily: 'bg-orange-500',
  big: 'bg-purple-600',
  food: 'bg-red-600',
  digital: 'bg-cyan-600',
  travel: 'bg-indigo-600',
  holiday: 'bg-pink-500',
}
</script>

<template>
  <div class="p-4 space-y-3">
    <div
      v-for="plan in plans"
      :key="plan.group"
      :class="['rounded-xl border overflow-hidden', groupBgMap[plan.group]]"
    >
      <div :class="['px-4 py-2 flex items-center gap-2', groupHeaderMap[plan.group]]">
        <span class="text-base">{{ PLAN_GROUP_META[plan.group].icon }}</span>
        <span class="text-white font-semibold text-sm">{{ PLAN_GROUP_META[plan.group].name }}</span>
        <span class="text-white/70 text-xs ml-auto">{{ PLAN_GROUP_META[plan.group].description }}</span>
      </div>
      <div class="divide-y divide-white/60">
        <div
          v-for="item in plan.items"
          :key="item.label"
          class="flex items-center justify-between px-4 py-2.5"
        >
          <div>
            <span class="text-sm text-gray-700">{{ item.label }}</span>
            <span v-if="item.note" class="text-xs text-gray-400 ml-2">{{ item.note }}</span>
          </div>
          <span :class="['text-lg font-bold', groupTextMap[plan.group]]">{{ item.rate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
