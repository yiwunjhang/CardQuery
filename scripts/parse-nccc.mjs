import { createRequire } from 'module'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const require = createRequire(import.meta.url)
const iconv = require('iconv-lite')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const raw = readFileSync(path.join(__dirname, '../nccc_merchants.csv'))
const text = iconv.decode(raw, 'big5')
const lines = text.split('\n').filter(l => l.trim())

// 取「對外名稱」(index 2)，過濾結束日不為 0 的（已失效）
const active = lines.slice(1).map(l => {
  const cols = l.split(',')
  return { name: cols[2]?.trim(), endDate: cols[7]?.trim(), mcc: cols[5]?.trim() }
}).filter(r => r.name && (r.endDate === '0' || r.endDate === ''))

console.log('Active records:', active.length)

// 蒐集所有對外名稱，建立搜尋 Set
// 策略：保留完整名稱 + 去除尾部分店字樣的品牌名
const nameSet = new Set()

for (const r of active) {
  const n = r.name
  if (!n || n.length < 2) continue

  // 完整名稱（最多取前 10 字避免過長）
  nameSet.add(n.slice(0, 10))

  // 去掉括號內容
  const withoutParen = n.replace(/[\(（][^）)]*[）)]/g, '').trim()

  // 去掉末尾的分店/門市/號等後綴，保留品牌主體
  const brand = withoutParen
    .replace(/(分公司|門市部|門市|分店|專賣店|旗艦店|直營店|加盟店|加盟|直營)$/, '')
    .replace(/[^一-鿿A-Za-z0-9\s\-&]+$/, '')  // 去掉末尾非字母數字
    .trim()

  if (brand.length >= 2) nameSet.add(brand)
}

console.log('Unique search keys:', nameSet.size)

// 過濾掉太短（1字）或純數字的
const names = [...nameSet].filter(n => n.length >= 2 && !/^\d+$/.test(n)).sort()

// 樣本
console.log('\nSample (first 30):')
names.slice(0, 30).forEach(n => console.log(' ', n))

// 輸出 JS 模組
const output = `// 財團法人聯合信用卡處理中心「小額支付」特約商店名稱清單
// 資料來源：https://www.nccc.com.tw - 截至 ${new Date().toLocaleDateString('zh-TW')}
// 共 ${names.length} 個品牌/商家關鍵字，Active records: ${active.length}
// 此為靜態資料，需定期更新
export const NCCC_MICRO_PAYMENT_NAMES = ${JSON.stringify(names, null, 0)}
`

writeFileSync(path.join(__dirname, '../src/data/nccc-micropayment.js'), output)
console.log('\nWrote src/data/nccc-micropayment.js')
