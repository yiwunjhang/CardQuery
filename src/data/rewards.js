export const PLANS = [
  {
    id: 'pay_taishin',
    planGroup: 'pay',
    planName: 'Pay著刷',
    name: '台新Pay / 台新Pay+',
    rate: 3.8,
    paymentMethod: '台新Pay',
    color: 'blue',
    bgClass: 'bg-blue-50 border-blue-200',
    badgeClass: 'bg-blue-600 text-white',
    rateClass: 'text-blue-700',
    note: '全家、7-11 限台新Pay；台新Pay+ 享免1.5%國外手續費',
    keywords: ['全家', 'familymart', '7-11', '7eleven', 'seven', '新光三越', 'skm', 'richart mart', '康是美', 'cosmed', 'ikea', 'net', '神腦', '燦坤', '全國電子', '麥當勞', "mcdonald's", 'mcdonalds', '美廉社', '大樹藥局', 'lawson', 'bic camera', 'biccamera', 'gs25', 'daiso', '大創'],
    stores: ['全家', '7-11', '新光三越', 'Richart Mart', '康是美', 'IKEA', 'NET', '神腦', '燦坤', '全國電子', '麥當勞', '美廉社', '大樹藥局', 'LAWSON', 'BicCamera', 'GS25', 'DAISO'],
  },
  {
    id: 'pay_line',
    planGroup: 'pay',
    planName: 'Pay著刷',
    name: 'LINE Pay',
    rate: 2.3,
    paymentMethod: 'LINE Pay',
    color: 'green',
    bgClass: 'bg-green-50 border-green-200',
    badgeClass: 'bg-green-500 text-white',
    rateClass: 'text-green-700',
    note: '限臺灣、新臺幣交易；四大超商、繳稅費、停車場及連鎖速食店（小額支付特約商店）不回饋',
    keywords: [],
    stores: [],
    isUniversal: true,
  },

  // 天天刷
  {
    id: 'daily_supermarket',
    planGroup: 'daily',
    planName: '天天刷',
    name: '超商量販',
    rate: 3.3,
    color: 'orange',
    bgClass: 'bg-orange-50 border-orange-200',
    badgeClass: 'bg-orange-500 text-white',
    rateClass: 'text-orange-700',
    note: '全家及7-11 限台新Pay刷卡',
    keywords: ['全家', 'familymart', '7-11', '7eleven', 'seven', '家樂福', 'carrefour', '大買家', '唐吉訶德', 'don quijote', 'donki', 'lopia'],
    stores: ['全家', '7-11', '家樂福', '大買家', '唐吉訶德', 'LOPIA'],
  },
  {
    id: 'daily_transport',
    planGroup: 'daily',
    planName: '天天刷',
    name: '通勤交通',
    rate: 3.3,
    color: 'orange',
    bgClass: 'bg-orange-50 border-orange-200',
    badgeClass: 'bg-orange-500 text-white',
    rateClass: 'text-orange-700',
    note: '',
    keywords: ['臺鐵', '台鐵', '高鐵', 'thsr', 'tra', '台灣大車隊', 'linego', 'yoxi', 'uber', '台灣bolt', 'bolt'],
    stores: ['臺鐵', '高鐵', '台灣大車隊', 'LINEGO', 'Yoxi', 'Uber', '台灣Bolt'],
  },
  {
    id: 'daily_fuel',
    planGroup: 'daily',
    planName: '天天刷',
    name: '加油充電',
    rate: 3.3,
    color: 'orange',
    bgClass: 'bg-orange-50 border-orange-200',
    badgeClass: 'bg-orange-500 text-white',
    rateClass: 'text-orange-700',
    note: '',
    keywords: ['中油', 'cpc', '全國加油', '全國特急電', '源點', 'evoasis', '華城電能', 'evalue', 'uspace', 'autopass', '車麻吉'],
    stores: ['中油直營', '全國加油', '全國特急電', '源點EVOASIS', '華城電能EVALUE', 'USPACE', 'Autopass(車麻吉)'],
  },
  {
    id: 'daily_pharmacy',
    planGroup: 'daily',
    planName: '天天刷',
    name: '藥妝藥局',
    rate: 3.3,
    color: 'orange',
    bgClass: 'bg-orange-50 border-orange-200',
    badgeClass: 'bg-orange-500 text-white',
    rateClass: 'text-orange-700',
    note: '',
    keywords: ['寶雅', 'poya', '康是美', 'cosmed', '屈臣氏', "watson's", 'watsons', '杏一醫療', '大樹藥局', '丁丁藥局', '佑全保健藥妝', '健康人生藥局'],
    stores: ['寶雅', '康是美', '屈臣氏', '杏一醫療', '大樹藥局', '丁丁藥局', '佑全保健藥妝', '健康人生藥局'],
  },

  // 大筆刷
  {
    id: 'big_dept',
    planGroup: 'big',
    planName: '大筆刷',
    name: '指定百貨',
    rate: 3.3,
    color: 'purple',
    bgClass: 'bg-purple-50 border-purple-200',
    badgeClass: 'bg-purple-600 text-white',
    rateClass: 'text-purple-700',
    note: '',
    keywords: ['新光三越', 'skm', 'skm pay', '遠東百貨', '遠東sogo', 'sogo', '漢神巨蛋', '漢神百貨', '漢神洲際', '微風', '台北101', '遠東巨城', '廣三sogo', '南紡購物中心', '誠品生活', 'eslite', '京站', '三創生活', '夢時代', '統一時代', 'dream plaza', '中友百貨', 'lalaport', 'lalaport'],
    stores: ['新光三越', '遠東百貨', '遠東SOGO', '漢神巨蛋', '漢神百貨', '漢神洲際', '微風', '台北101', '遠東巨城', '廣三SOGO', '南紡購物中心', '誠品生活', '京站', '三創生活', '夢時代', '統一時代', '中友百貨', 'Mitsui Shopping Park LaLaport'],
  },
  {
    id: 'big_outlet',
    planGroup: 'big',
    planName: '大筆刷',
    name: '指定Outlet',
    rate: 3.3,
    color: 'purple',
    bgClass: 'bg-purple-50 border-purple-200',
    badgeClass: 'bg-purple-600 text-white',
    rateClass: 'text-purple-700',
    note: '',
    keywords: ['mitsui outlet', '華泰名品城', 'skm park outlets', 'skm park'],
    stores: ['MITSUI OUTLET PARK', '華泰名品城', 'SKM Park Outlets'],
  },
  {
    id: 'big_home',
    planGroup: 'big',
    planName: '大筆刷',
    name: '居家裝修',
    rate: 3.3,
    color: 'purple',
    bgClass: 'bg-purple-50 border-purple-200',
    badgeClass: 'bg-purple-600 text-white',
    rateClass: 'text-purple-700',
    note: '',
    keywords: ['ikea', '特力屋', 'hola', '宜得利', 'nitori', '瑪黑家居'],
    stores: ['IKEA', '特力屋', 'HOLA', '宜得利', '瑪黑家居'],
  },
  {
    id: 'big_fashion',
    planGroup: 'big',
    planName: '大筆刷',
    name: '時尚品味',
    rate: 3.3,
    color: 'purple',
    bgClass: 'bg-purple-50 border-purple-200',
    badgeClass: 'bg-purple-600 text-white',
    rateClass: 'text-purple-700',
    note: '',
    keywords: ['uniqlo', 'gu', 'zara', 'net', 'lululemon'],
    stores: ['UNIQLO', 'GU', 'ZARA', 'NET', 'lululemon'],
  },

  // 好饗刷
  {
    id: 'food_dining',
    planGroup: 'food',
    planName: '好饗刷',
    name: '全臺餐飲',
    rate: 3.3,
    color: 'red',
    bgClass: 'bg-red-50 border-red-200',
    badgeClass: 'bg-red-600 text-white',
    rateClass: 'text-red-700',
    note: '不含餐券；連鎖飲料店、連鎖速食店（透過聯合信用卡中心小額支付平台收費者）不適用；限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Pay著刷/假日刷',
    keywords: ['餐廳', '餐飲', '飲食', '小吃', '火鍋', '燒烤', '壽司', '拉麵', '牛排', '咖啡', '茶飲', '飲料', '王品'],
    stores: ['全臺餐飲(不含餐券)', '王品瘋Pay'],
    isDiningCategory: true,
  },
  {
    id: 'food_delivery',
    planGroup: 'food',
    planName: '好饗刷',
    name: '外送平台',
    rate: 3.3,
    color: 'red',
    bgClass: 'bg-red-50 border-red-200',
    badgeClass: 'bg-red-600 text-white',
    rateClass: 'text-red-700',
    note: '限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Pay著刷/假日刷',
    keywords: ['uber eats', 'ubereats', 'foodpanda'],
    stores: ['Uber Eats', 'Foodpanda'],
  },
  {
    id: 'food_ticket',
    planGroup: 'food',
    planName: '好饗刷',
    name: '購票娛樂',
    rate: 3.3,
    color: 'red',
    bgClass: 'bg-red-50 border-red-200',
    badgeClass: 'bg-red-600 text-white',
    rateClass: 'text-red-700',
    note: '限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Pay著刷/假日刷',
    keywords: ['拓元售票', 'kktix', '年代售票', '寬宏售票', 'opentix', '兩廳院', 'funnow'],
    stores: ['拓元售票', 'KKTIX', '年代售票', '寬宏售票', 'OPENTIX兩廳院文化生活', 'FunNow'],
  },
  {
    id: 'food_ktv',
    planGroup: 'food',
    planName: '好饗刷',
    name: '指定KTV',
    rate: 3.3,
    color: 'red',
    bgClass: 'bg-red-50 border-red-200',
    badgeClass: 'bg-red-600 text-white',
    rateClass: 'text-red-700',
    note: '限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Pay著刷/假日刷',
    keywords: ['錢櫃', '好樂迪', 'oncor', 'sing go', 'singgo', '享溫馨'],
    stores: ['錢櫃', '好樂迪', 'ONCOR', 'sing!go', '享溫馨'],
  },
  {
    id: 'food_hotel',
    planGroup: 'food',
    planName: '好饗刷',
    name: '指定飯店',
    rate: 3.3,
    color: 'red',
    bgClass: 'bg-red-50 border-red-200',
    badgeClass: 'bg-red-600 text-white',
    rateClass: 'text-red-700',
    note: '不含餐券、住宿券等票券；限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Pay著刷/假日刷',
    keywords: ['晶華', 'regent', '雲朗', '萬豪', 'marriott', '煙波', '老爺', '福華', '漢來', '君悅', 'grand hyatt', '洲際', 'intercontinental', '寒沐', 'mube'],
    stores: ['晶華國際酒店集團', '雲朗觀光', '台灣萬豪國際集團旗下飯店', '煙波國際觀光集團', '老爺酒店集團', '福華集團', '漢來飯店事業群', '台北君悅酒店', '高雄洲際酒店', '臺中勤美洲際酒店', '礁溪寒沐酒店'],
  },

  // 數趣刷
  {
    id: 'digital_shop',
    planGroup: 'digital',
    planName: '數趣刷',
    name: '網購平台',
    rate: 3.3,
    color: 'cyan',
    bgClass: 'bg-cyan-50 border-cyan-200',
    badgeClass: 'bg-cyan-600 text-white',
    rateClass: 'text-cyan-700',
    note: '',
    keywords: ['蝦皮', 'shopee', 'momo', '酷澎', 'coupang', 'pchome', '淘寶', 'taobao', 'amazon', '東森', '博客來', 'books.com', 'richart mart', 'payeasy', 'iherb', 'shein', 'farfetch', 'olive young'],
    stores: ['蝦皮', 'momo', '酷澎(Coupang)', 'PChome', '淘寶', 'Amazon', '東森', '博客來', 'Richart Mart', 'PayEasy', 'iHerb', 'SHEIN', 'Farfetch', 'Olive Young'],
  },
  {
    id: 'digital_course',
    planGroup: 'digital',
    planName: '數趣刷',
    name: '線上課程',
    rate: 3.3,
    color: 'cyan',
    bgClass: 'bg-cyan-50 border-cyan-200',
    badgeClass: 'bg-cyan-600 text-white',
    rateClass: 'text-cyan-700',
    note: '',
    keywords: ['知識衛星', 'amazing talker', 'amazingtalker', 'tutor abc', 'tutorabc', 'hahow', 'pressplay'],
    stores: ['知識衛星', 'Amazing Talker', 'Tutor ABC', 'Hahow', 'PressPlay'],
  },
  {
    id: 'digital_game',
    planGroup: 'digital',
    planName: '數趣刷',
    name: '遊戲影音',
    rate: 3.3,
    color: 'cyan',
    bgClass: 'bg-cyan-50 border-cyan-200',
    badgeClass: 'bg-cyan-600 text-white',
    rateClass: 'text-cyan-700',
    note: '',
    keywords: ['mycard', '遊戲橘子', 'gamania', 'steam', 'playstation', 'ps4', 'ps5', 'nintendo', '任天堂', 'netflix', 'disney+', 'disneyplus'],
    stores: ['MyCard', '遊戲橘子', 'Steam', 'PlayStation', 'Nintendo', 'Netflix', 'Disney+'],
  },
  {
    id: 'digital_ai',
    planGroup: 'digital',
    planName: '數趣刷',
    name: 'AI服務',
    rate: 3.3,
    color: 'cyan',
    bgClass: 'bg-cyan-50 border-cyan-200',
    badgeClass: 'bg-cyan-600 text-white',
    rateClass: 'text-cyan-700',
    note: '',
    keywords: ['chatgpt', 'openai', 'notion', 'canva', 'perplexity', 'claude', 'anthropic'],
    stores: ['ChatGPT', 'Notion', 'Canva', 'Perplexity', 'Claude'],
  },

  // 玩旅刷
  {
    id: 'travel_overseas',
    planGroup: 'travel',
    planName: '玩旅刷',
    name: '海外消費',
    rate: 3.3,
    color: 'indigo',
    bgClass: 'bg-indigo-50 border-indigo-200',
    badgeClass: 'bg-indigo-600 text-white',
    rateClass: 'text-indigo-700',
    note: '含實體及線上、歐洲國家交易',
    keywords: ['海外', '國外', 'overseas', '歐洲', 'europe'],
    stores: ['海外消費（含實體及線上）', '歐洲國家交易'],
  },
  {
    id: 'travel_airline',
    planGroup: 'travel',
    planName: '玩旅刷',
    name: '航空公司',
    rate: 3.3,
    color: 'indigo',
    bgClass: 'bg-indigo-50 border-indigo-200',
    badgeClass: 'bg-indigo-600 text-white',
    rateClass: 'text-indigo-700',
    note: '',
    keywords: ['中華航空', 'china airlines', 'ci', '長榮航空', 'eva air', 'br', '星宇航空', 'starlux', 'jx', '台灣虎航', 'tigerair', 'it', '國泰航空', 'cathay', 'cx', '華信航空', 'mandarin airlines', 'aw', '立榮航空', 'uni air', 'b7', '樂桃航空', 'peach', 'mm', '阿聯酋航空', 'emirates', 'ek', '亞洲航空', 'airasia', 'ak', '酷航', 'scoot', 'tr', '捷星航空', 'jetstar', 'jq', '新加坡航空', 'singapore airlines', 'sq', '日本航空', 'jal', 'jl', '越捷航空', 'vietjet', 'vj'],
    stores: ['中華航空', '長榮航空', '星宇航空', '台灣虎航', '國泰航空', '華信航空', '立榮航空', '樂桃航空', '阿聯酋航空', '亞洲航空', '酷航', '捷星航空', '新加坡航空', '日本航空', '越捷航空'],
  },
  {
    id: 'travel_transport',
    planGroup: 'travel',
    planName: '玩旅刷',
    name: '海外交通/網路',
    rate: 3.3,
    color: 'indigo',
    bgClass: 'bg-indigo-50 border-indigo-200',
    badgeClass: 'bg-indigo-600 text-white',
    rateClass: 'text-indigo-700',
    note: '',
    keywords: ['uber', 'grab', 'suica', 'icoca', 'pasmo', 'wowpass', 'airsim'],
    stores: ['Uber', 'Grab', 'SUICA', 'ICOCA', 'PASMO', 'WOWPASS', 'AIRSIM'],
  },
  {
    id: 'travel_booking',
    planGroup: 'travel',
    planName: '玩旅刷',
    name: '訂房平台',
    rate: 3.3,
    color: 'indigo',
    bgClass: 'bg-indigo-50 border-indigo-200',
    badgeClass: 'bg-indigo-600 text-white',
    rateClass: 'text-indigo-700',
    note: '',
    keywords: ['klook', 'kkday', 'agoda', 'booking.com', 'booking', 'trip.com', 'ctrip', 'airbnb', 'hotels.com', 'expedia'],
    stores: ['Klook', 'KKday', 'Agoda', 'Booking.com', 'Trip.com', 'Airbnb', 'Hotels.com', 'Expedia'],
  },
  {
    id: 'travel_agency',
    planGroup: 'travel',
    planName: '玩旅刷',
    name: '旅行社',
    rate: 3.3,
    color: 'indigo',
    bgClass: 'bg-indigo-50 border-indigo-200',
    badgeClass: 'bg-indigo-600 text-white',
    rateClass: 'text-indigo-700',
    note: '',
    keywords: ['雄獅旅遊', '易遊網', '東南旅遊', '可樂旅遊', '長汎假期', '五福旅遊', '喜鴻假期', '易飛旅遊', '燦星旅遊', '加利利旅行社', '鳳凰國際旅行社', '山富旅遊', '行健旅遊'],
    stores: ['雄獅旅遊', '易遊網', '東南旅遊', '可樂旅遊', '長汎假期', '五福旅遊', '喜鴻假期', '易飛旅遊', '燦星旅遊', '加利利旅行社', '鳳凰國際旅行社', '山富旅遊', '行健旅遊'],
  },

  // 假日刷
  {
    id: 'holiday',
    planGroup: 'holiday',
    planName: '假日刷',
    name: '節假日不限通路',
    rate: 2.0,
    color: 'pink',
    bgClass: 'bg-pink-50 border-pink-200',
    badgeClass: 'bg-pink-500 text-white',
    rateClass: 'text-pink-700',
    note: '週六日及國定假日不限通路（含保費），LINE Pay 亦享此回饋',
    keywords: [],
    stores: [],
    isHoliday: true,
  },
]

export const PLAN_GROUP_META = {
  pay: { name: 'Pay著刷', icon: '💳', description: '綁定支付享高回饋' },
  daily: { name: '天天刷', icon: '🛒', description: '超商、交通、加油、藥妝' },
  big: { name: '大筆刷', icon: '🏬', description: '百貨、Outlet、居家、時尚' },
  food: { name: '好饗刷', icon: '🍽️', description: '餐飲、外送、娛樂、飯店' },
  digital: { name: '數趣刷', icon: '💻', description: '網購、課程、遊戲、AI' },
  travel: { name: '玩旅刷', icon: '✈️', description: '海外、航空、訂房、旅行社' },
  holiday: { name: '假日刷', icon: '🎉', description: '節假日不限通路' },
}

export function searchMerchant(query) {
  if (!query || query.trim() === '') return []
  const q = query.trim().toLowerCase()

  const matched = []
  for (const plan of PLANS) {
    if (plan.isUniversal || plan.isHoliday) continue
    const hit = plan.keywords.some(kw => kw.includes(q) || q.includes(kw))
    if (hit) {
      matched.push(plan)
    }
  }
  return matched
}

export function isDiningMerchant(query) {
  // Check if this seems like a restaurant/dining merchant not explicitly listed
  const diningHints = ['餐廳', '料理', '食堂', '小吃', '麵', '飯', '鍋', '燒', '烤', '壽司', '拉麵', '牛排', '咖啡', '茶', '飲料', '早餐', '午餐', '晚餐', 'restaurant', 'cafe', 'bistro', 'kitchen', 'grill', 'bar']
  const q = query.trim().toLowerCase()
  return diningHints.some(hint => q.includes(hint))
}

// 好饗刷「全臺餐飲」排除條款：
// 透過財團法人聯合信用卡中心小額支付平台收費之連鎖飲料店、連鎖速食店不予回饋
// MCC 5811/5812/5813/5814 但透過小額支付平台者仍不適用
export const FOOD_DINING_EXCLUSIONS = [
  {
    type: 'beverage_chain',
    label: '連鎖飲料店',
    reason: '透過聯合信用卡中心小額支付平台收費，不適用好饗刷餐廳加碼（MCC 雖為餐廳，仍不予回饋）',
    keywords: [
      '水巷茶弄', '50嵐', '貢茶', 'gong cha', '迷客夏', 'milksha',
      '珍煮丹', 'coco都可', 'coco', '可不可', '天仁茗茶', '茶湯會', 'the alley',
      '大苑子', '歇腳亭', '春水堂', '翰林茶館', '路易莎', 'louisa',
      '85度c', '85°c', '清心福全', '日出茶太', 'chatime', '一芳',
      '老虎堂', '麻古茶坊', '丸作', '六角', '鮮茶道', '茶百道',
      '星巴克', 'starbucks',
    ],
  },
  {
    type: 'fast_food',
    label: '連鎖速食店',
    reason: '透過聯合信用卡中心小額支付平台收費，不適用好饗刷餐廳加碼',
    keywords: [
      '麥當勞', "mcdonald's", 'mcdonalds', '肯德基', 'kfc',
      '必勝客', 'pizza hut', 'pizzahut', '摩斯漢堡', 'mos burger', 'mosburger',
      '漢堡王', 'burger king', 'burgerking', '達美樂', "domino's", 'dominos',
      'subway', '頂呱呱', '拿坡里', '棒約翰', "papa john's", 'papajohns',
    ],
  },
  {
    type: 'excluded_venue',
    label: '酒吧／百貨商場內用餐',
    reason: '透過菸酒交易、酒吧、百貨、商場產生之餐廳消費不予加碼',
    keywords: ['酒吧', 'bar ', '酒館', '居酒屋'],
  },
]

export function isDiningExcluded(query) {
  if (!query || query.trim().length < 2) return null
  const q = query.trim().toLowerCase()
  for (const excl of FOOD_DINING_EXCLUSIONS) {
    const hit = excl.keywords.some(kw => q.includes(kw) || (kw.length >= 3 && kw.includes(q)))
    if (hit) return excl
  }
  return null
}

// LINE Pay 2.3% 不回饋條款：
// 1. 四大超商（全家、7-11、萊爾富、OK）
// 2. 透過「聯合信用卡處理中心」小額支付特約商店（停車場、連鎖速食店等）
// 3. 繳稅費
export const LINE_PAY_EXCLUSIONS = [
  {
    type: 'convenience_store',
    label: '四大超商',
    suggestion: '請改用台新Pay享 3.8%',
    reason: '四大超商不適用 LINE Pay 回饋',
    keywords: [
      '全家', 'familymart', '7-11', '7eleven', 'seven',
      '萊爾富', 'hilife', 'hi-life', 'ok便利', 'ok mart', 'okmart',
    ],
  },
  {
    type: 'micropayment_chain',
    label: '小額支付特約商店',
    suggestion: '此類商家 LINE Pay 及好饗刷均不回饋',
    reason: '透過聯合信用卡處理中心小額支付特約商店（如停車場、連鎖速食店等），不適用 LINE Pay 回饋',
    keywords: [
      '停車場', 'parking', '停車',
      '麥當勞', "mcdonald's", 'mcdonalds', '肯德基', 'kfc',
      '必勝客', 'pizza hut', 'pizzahut', '摩斯漢堡', 'mos burger', 'mosburger',
      '漢堡王', 'burger king', 'burgerking', '達美樂', "domino's", 'dominos',
      'subway', '頂呱呱', '拿坡里', '棒約翰', "papa john's", 'papajohns',
    ],
  },
  {
    type: 'tax_fee',
    label: '繳稅費',
    suggestion: '繳費類交易均不計回饋',
    reason: '繳稅費不適用 LINE Pay 回饋',
    keywords: ['繳稅', '稅費', '健保費', '水費', '電費', '瓦斯費', '規費'],
  },
]

export function isLinePayExcluded(query) {
  if (!query || query.trim().length < 2) return null
  const q = query.trim().toLowerCase()
  for (const excl of LINE_PAY_EXCLUSIONS) {
    const hit = excl.keywords.some(kw => q.includes(kw) || (kw.length >= 3 && kw.includes(q)))
    if (hit) return excl
  }
  return null
}
