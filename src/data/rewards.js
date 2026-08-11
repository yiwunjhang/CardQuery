// 資料來源：台新Richart卡官方活動頁 WM_20251216135929999
// 7大切換方案活動期間：2026/7/1 – 2027/3/31
// Chill刷 活動期間：2026/7/8 – 2026/9/30

const CHILL_NOTE = '指定通路限獨立店或線上官網；透過其他百貨、外送平台、網購平台(如momo)、商場(如大全聯)、飯店產生之消費不加碼。可用實體卡、LINE Pay、台新Pay、Apple/Google/Samsung Pay'

export const PLANS = [
  // Chill刷（2026/7/8 新上市）
  {
    id: 'chill_party',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '歡聚微醺',
    rate: 10,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['詹記', '詹記麻辣火鍋', '萬客什鍋', '海底撈', '屋馬燒肉', '屋馬', '茶六燒肉堂', '茶六', '新村站著吃', '燒肉政宗', '碳佐麻里', '雞湯大叔', 'gonna共樂遊', 'gonna', 'brun', '不然', 'cafe acme', 'the antipodean', 'antipodean', '貳樓', '樂子', 'the diner', 'fake sober', 'draft land', '臺虎精釀', '台虎精釀', '啜飲室', 'abv', 'bar tcrc', 'tcrc', 'bar home', 'phowa', 'moonrock'],
    stores: ['詹記麻辣火鍋', '萬客什鍋', '海底撈', '屋馬燒肉', '茶六燒肉堂', '新村站著吃', '燒肉政宗', '碳佐麻里', '雞湯大叔', 'gonna共樂遊', 'BRUN 不然', 'CAFE ACME', 'The Antipodean', '貳樓', '樂子 the Diner', 'Fake Sober', 'Draft Land', '臺虎精釀(含啜飲室)', 'ABV系列', 'Bar TCRC', 'Bar Home', 'Phowa', 'MOONROCK'],
  },
  {
    id: 'chill_drink',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '日常續命',
    rate: 10,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: '連鎖飲料店切換 Chill刷可享 10%（LINE Pay 亦適用），與好饗刷排除規則不同；茶之魔手、八曜和茶已自頁面下架但仍可回饋',
    keywords: ['50嵐', '得正', '五桐號', '龜記', 'ug tea', '叮哥茶飲', '叮哥', 'cafe!n', 'cafen', '%arabica', 'arabica', 'compose coffee', 'compose', '茶之魔手', '八曜和茶'],
    stores: ['50嵐', '得正', '五桐號', '龜記', 'UG TEA', '叮哥茶飲', 'CAFE!N', '%Arabica', 'COMPOSE COFFEE', '茶之魔手', '八曜和茶'],
  },
  {
    id: 'chill_date',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '約會犒賞',
    rate: 5,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['饗饗', 'inparadise', 'nagomi'],
    stores: ['饗饗 INPARADISE', 'NAGOMI'],
  },
  {
    id: 'chill_star',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '應援追星',
    rate: 5,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['weverse', 'k-monstar', 'kmonstar', '微樂客', '五大唱片', '仙女樹', 'fanme', 'nol'],
    stores: ['WEVERSE', 'K-MONSTAR', '微樂客', '五大唱片', '仙女樹', 'FANME', 'NOL'],
  },
  {
    id: 'chill_reading',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '熬夜追更',
    rate: 5,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['巴哈姆特', '巴哈', 'book walker', 'bookwalker', 'animate', '樂天kobo', 'kobo', 'readmoo', '讀墨', 'netflix', 'disney+', 'disneyplus', '愛爾達', 'elta'],
    stores: ['巴哈姆特', 'BOOK WALKER', 'Animate', '樂天KOBO', 'Readmoo讀墨', 'Netflix', 'Disney+', '愛爾達'],
  },
  {
    id: 'chill_digital',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '數位外掛',
    rate: 3.3,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: 'Samsung 限三星商城、三星街邊店（三星智慧館），不含百貨店；透過 Uber Eats 或指定網購平台(如蝦皮)之消費最高 3.3%',
    keywords: ['samsung', '三星', '三星智慧館', 'apple', 'apple直營', 'studio a', 'studioa', 'straight a', 'dji', 'insta360', 'gopro', '蝦皮', 'shopee', '淘寶', 'taobao', '酷澎', 'coupang', 'uber eats', 'ubereats'],
    stores: ['Samsung三星智慧館(含商城)', 'Apple直營(含官網)', 'Studio A(含Straight A)', 'DJI', 'Insta360', 'GoPro', '蝦皮', '淘寶', '酷澎', 'Uber Eats'],
  },
  {
    id: 'chill_nutrition',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '營養補給',
    rate: 5,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['好好生醫', 'popcare', '好在乎', '營養師輕食', 'vitabox', 'myprotein', 'urmart', '優馬選品'],
    stores: ['好好生醫', 'POPCARE好在乎', '營養師輕食', 'VITABOX', 'MYPROTEIN', 'UrMart優馬選品'],
  },
  {
    id: 'chill_fitness',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '體態養成',
    rate: 5,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['anytime fitness', 'anytime', '健身工廠', 'world gym', 'worldgym', '超核心', 'hypercore', 'kx pilates', 'pilates', '皮拉提斯', '虎鐵健身', '17fit'],
    stores: ['Anytime Fitness', '健身工廠', 'World Gym', '超核心 Hypercore', 'KX PILATES', '虎鐵健身 X 器械皮拉提斯', '17FIT'],
  },
  {
    id: 'chill_sports',
    planGroup: 'chill',
    planName: 'Chill刷',
    name: '運動品牌',
    rate: 5,
    color: 'teal',
    bgClass: 'bg-teal-50 border-teal-200',
    badgeClass: 'bg-teal-600 text-white',
    rateClass: 'text-teal-700',
    note: CHILL_NOTE,
    keywords: ['adidas', '愛迪達', 'new balance', 'newbalance', 'nb', 'puma', 'onitsuka tiger', 'onitsuka', 'nike', '耐吉', 'hoka', 'salomon', 'lululemon'],
    stores: ['Adidas', 'New Balance', 'PUMA', 'Onitsuka Tiger', 'Nike', 'HOKA', 'Salomon', 'lululemon'],
  },

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
    name: 'LINE Pay / 全盈+Pay',
    rate: 2.3,
    paymentMethod: 'LINE Pay',
    color: 'green',
    bgClass: 'bg-green-50 border-green-200',
    badgeClass: 'bg-green-500 text-white',
    rateClass: 'text-green-700',
    note: '全盈+Pay 自 2026/7/8 起新增；限臺灣、新臺幣交易；四大超商、繳稅費、停車場及連鎖速食店（小額支付特約商店）不回饋',
    keywords: [],
    stores: [],
    isUniversal: true,
  },

  // 天天刷
  {
    id: 'daily_supermarket',
    planGroup: 'daily',
    planName: '天天刷',
    name: '日常採買',
    rate: 3.3,
    color: 'orange',
    bgClass: 'bg-orange-50 border-orange-200',
    badgeClass: 'bg-orange-500 text-white',
    rateClass: 'text-orange-700',
    note: '全家及7-11 限台新Pay（單筆上限NT$3,000，代收/售、禮物卡、儲值、菸品不回饋）；家樂福已更名為萬家福、樂家康，美食街及商店街不加碼',
    keywords: ['全家', 'familymart', '7-11', '7eleven', 'seven', '萬家福', '樂家康', '家樂福', 'carrefour', '大買家', '唐吉訶德', 'don quijote', 'donki', 'lopia', '智生活'],
    stores: ['全家', '7-11', '萬家福', '樂家康', '大買家', '唐吉訶德', 'LOPIA', '智生活'],
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
    name: '加油充電/停車',
    rate: 3.3,
    color: 'orange',
    bgClass: 'bg-orange-50 border-orange-200',
    badgeClass: 'bg-orange-500 text-white',
    rateClass: 'text-orange-700',
    note: 'USPACE 限停車費；嘟嘟房綁定 iParking App 支付不加碼',
    keywords: ['中油', 'cpc', '全國加油', '全國特急電', '源點', 'evoasis', '華城電能', 'evalue', 'uspace', 'autopass', '車麻吉', '嘟嘟房'],
    stores: ['中油直營', '全國加油', '全國特急電', '源點EVOASIS', '華城電能EVALUE', 'USPACE', 'Autopass(車麻吉)', '嘟嘟房'],
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
    note: '藥品、1歲以下奶粉、醫療器材、儲值加值不計；藥局限一般實體門市（機場店、超商/量販複合門市除外）',
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
    note: '百貨店中店（如Apple直營）不加碼；微風限廣場/南京/松高/信義/南山；誠品生活不含誠品書店；新光三越台北車站不加碼；百貨支付工具（101 Pay、微風錢包等）不適用，skm pay 除外',
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
    note: '含線上購物官網，不含蝦皮等電商平台',
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
    note: '線上限臺灣官方網站；百貨店中店不加碼（簽單商店名稱非該品牌或指定百貨者不適用）',
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
    note: '限MCC 5811/5812/5813/5814；不含餐券；連鎖飲料店、連鎖速食店（透過聯合信用卡中心小額支付平台收費者）不適用；透過菸酒、酒吧、KTV、酒店、飯店、百貨、商場(如大全聯)、外送平台產生之餐廳消費不加碼；限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Chill刷/Pay著刷/假日刷',
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
    note: '限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Chill刷/Pay著刷/假日刷',
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
    note: '限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Chill刷/Pay著刷/假日刷',
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
    note: '限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Chill刷/Pay著刷/假日刷',
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
    note: '不含餐券、住宿券等票券；限實體信用卡、台新Pay、Apple/Google/Samsung Pay；LINE Pay 限 Chill刷/Pay著刷/假日刷',
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
    note: '不含黃金等貴金屬、遊戲點數、票券及點數類商品、代扣繳費、購買廣告；蝦皮限臺灣、新臺幣交易；PChome 不含支付連、海外代購、旅遊，訂單含儲值/電子票券則整筆僅 0.3%',
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
    note: '透過 Google 服務之消費採每季結算後統一回饋',
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
    note: '透過 Google 服務之消費採每季結算後統一回饋',
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
    note: '限透過航空公司實體或官網購買機票；第三方訂票平台不認列',
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
    note: 'Uber 限交易地非臺灣或交易幣別非新臺幣；AIRSIM 限官網/APP 訂購且僅支援 Mastercard/VISA',
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
    note: '以帳單消費日之方案計算；於平台選擇「到店付款」（收單特店為飯店或民宿）不加碼',
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
    note: '限指定旅行社直營通路（含官網）；加盟店或代銷平台不加碼',
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
    note: '週六日及國定假日（依人事行政總處公告，不含天災假）不限通路，含線上投保與「手動」刷卡繳保費；LINE Pay、全盈+Pay 亦適用；四大超商、繳稅費等不回饋項目除外',
    keywords: [],
    stores: [],
    isHoliday: true,
  },
]

export const PLAN_GROUP_META = {
  chill: { name: 'Chill刷', icon: '🍻', description: '聚會、飲料、追星、運動' },
  pay: { name: 'Pay著刷', icon: '💳', description: '綁定支付享高回饋' },
  daily: { name: '天天刷', icon: '🛒', description: '採買、交通、加油、藥妝' },
  big: { name: '大筆刷', icon: '🏬', description: '百貨、Outlet、居家、時尚' },
  food: { name: '好饗刷', icon: '🍽️', description: '餐飲、外送、娛樂、飯店' },
  digital: { name: '數趣刷', icon: '💻', description: '網購、課程、遊戲、AI' },
  travel: { name: '玩旅刷', icon: '✈️', description: '海外、航空、訂房、旅行社' },
  holiday: { name: '假日刷', icon: '🎉', description: '節假日不限通路' },
}

// 指定交易限實體信用卡(含線上輸入卡號)、台新Pay、Apple Pay、Google錢包或Samsung Pay；
// LINE Pay 綁定消費限 Chill刷、Pay著刷及假日刷；全盈+Pay 綁定消費限 Pay著刷及假日刷。
export const LINE_PAY_ELIGIBLE_GROUPS = ['chill', 'pay', 'holiday']
export const GLOBAL_PAY_ELIGIBLE_GROUPS = ['pay', 'holiday']

// 短的英數關鍵字（如 net、gu、ci）用子字串比對會誤判（netflix → NET），故要求完全相符
const SHORT_LATIN = /^[a-z0-9!%+&.\- ]{1,3}$/

function keywordHit(kw, q) {
  if (SHORT_LATIN.test(kw)) return q === kw
  return kw.includes(q) || q.includes(kw)
}

export function searchMerchant(query) {
  if (!query || query.trim() === '') return []
  const q = query.trim().toLowerCase()

  const matched = []
  for (const plan of PLANS) {
    if (plan.isUniversal || plan.isHoliday) continue
    const hit = plan.keywords.some(kw => keywordHit(kw, q))
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
    label: '酒吧／KTV／飯店／百貨商場內用餐',
    reason: '透過菸酒交易、酒吧、KTV、酒店、飯店、百貨、商場(如大全聯)、外送平台產生之餐廳消費不予加碼',
    keywords: ['酒吧', 'bar ', '酒館', '居酒屋', '大全聯'],
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
// 註：自 2026/7/8 起 LINE Pay 亦適用 Chill刷，Chill刷指定通路（如 50嵐）可享 5%~10%，
//     不受此 2.3% 排除條款影響（本清單僅適用於 Pay著刷 2.3%）。
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
