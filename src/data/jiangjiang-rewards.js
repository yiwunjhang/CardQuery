export const MONTHLY_THRESHOLD = 3000
export const MONTHLY_CAP = 300

export const JJ_CATEGORIES = {
  ai_digital:  { name: 'AI 工具及數位工具', icon: '🤖' },
  learning:    { name: '學習平台',           icon: '📚' },
  delivery:    { name: '國內外送平台',       icon: '🛵' },
  home:        { name: '生活家居',           icon: '🏠' },
  convenience: { name: '指定超商超市',       icon: '🏪' },
  fitness:     { name: '運動健身',           icon: '💪' },
  dining:      { name: '國內餐廳',           icon: '🍽️' },
  mobile_pay:  { name: '行動支付',           icon: '📱' },
  transport:   { name: '交通',               icon: '🚆' },
}

export const JJ_PLANS = [
  {
    id: 'ai_digital',
    rate: 4.5,
    keywords: [
      'chatgpt', 'openai', 'canva', 'claude', 'anthropic', 'cursor',
      'duolingo', 'gamma', 'gemini', 'notion', 'perplexity', 'speak',
      'apple music', 'icloud', 'app store', 'apple media', 'apple 媒體',
      'google play',
    ],
    stores: ['ChatGPT', 'Canva', 'Claude', 'Cursor', 'Duolingo', 'Gamma', 'Gemini', 'Notion', 'Perplexity', 'Speak', 'Apple 媒體服務', 'Google Play'],
    note: 'Apple 媒體服務含 App Store / Apple Music / iCloud，不含 Apple Store 實體交易',
  },
  {
    id: 'learning',
    rate: 4.5,
    keywords: ['hahow', 'udemy', 'voicetube', 'pressplay', 'amazingtalker', 'readmoo', '智基科技', '學思酷'],
    stores: ['Hahow', 'Udemy', 'VoiceTube', 'PressPlay', 'AmazingTalker', 'Readmoo', '智基科技(學思酷)'],
    note: '',
  },
  {
    id: 'delivery',
    rate: 4.5,
    keywords: ['uber eats', 'ubereats', 'foodpanda'],
    stores: ['Uber Eats', 'foodpanda'],
    note: '不含會員費用',
  },
  {
    id: 'home',
    rate: 4.5,
    keywords: ['ikea', '特力屋', 'hola'],
    stores: ['IKEA 宜家家居', '特力屋', 'HOLA'],
    note: '',
  },
  {
    id: 'convenience',
    rate: 4.5,
    keywords: ['7-eleven', '7eleven', 'seven', '全家', 'familymart', '家樂福', 'carrefour'],
    stores: ['7-ELEVEN', '全家', '家樂福'],
    note: '7-ELEVEN 限 icash pay / 街口支付 / 橘子支付；全家僅限街口支付；家樂福不限支付方式',
  },
  {
    id: 'fitness',
    rate: 4.5,
    keywords: ['world gym', 'worldgym', 'being fit', 'beingfit', 'curves', '健身工廠'],
    stores: ['World Gym', 'BEING Fit', 'Curves', '健身工廠'],
    note: '',
  },
  {
    id: 'dining',
    rate: 4.5,
    keywords: ['麥當勞', "mcdonald's", 'mcdonalds'],
    stores: ['國內餐廳（MCC 5811 / 5812 / 5814 / 5462）', '麥當勞'],
    note: '麥當勞不適用餐券及設立於百貨、商場、美食街之門市',
    isDining: true,
  },
  {
    id: 'mobile_pay',
    rate: 4.5,
    keywords: [
      'line pay', 'linepay', '街口', '街口支付',
      'icash', 'icash pay', '橘子支付', '悠遊付',
      'hami pay', 'hamipay', 'pi錢包', 'pi 錢包', 'twqr',
    ],
    stores: ['LINE Pay', '街口支付', 'icash Pay', '橘子支付', '悠遊付', 'Hami Pay', 'Pi 錢包', 'TWQR'],
    note: '全支付不在指定通路',
  },
  {
    id: 'transport',
    rate: 4.5,
    keywords: ['一卡通', 'i-pass', 'ipass', '高鐵', 'thsr'],
    stores: ['一卡通（自動加值）', '高鐵（含 App 線上刷卡）'],
    note: '',
  },
]

const DINING_HINTS = [
  '餐廳', '料理', '食堂', '小吃', '麵', '火鍋', '燒烤', '壽司', '拉麵',
  '牛排', 'restaurant', 'cafe', 'bistro', 'kitchen', 'grill',
]

export function searchJiangJiang(query) {
  if (!query || query.trim() === '') return []
  const q = query.trim().toLowerCase()

  const matched = []
  for (const plan of JJ_PLANS) {
    const hit = plan.keywords.some(kw => kw.includes(q) || q.includes(kw))
    if (hit) matched.push(plan)
  }

  // Infer general dining if no match but looks like a restaurant
  if (matched.length === 0 && DINING_HINTS.some(h => q.includes(h))) {
    const diningPlan = JJ_PLANS.find(p => p.id === 'dining')
    if (diningPlan) matched.push({ ...diningPlan, inferred: true })
  }

  return matched
}
