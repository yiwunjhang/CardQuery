import rawCsv from './高雄市小額支付平台通路名單.csv?raw'

function toHalf(str) {
  return str
    .replace(/[Ａ-Ｚａ-ｚ０-９－＆（）【】「」『』〔〕]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
    )
    .replace(/　/g, ' ')
    .toLowerCase()
    .trim()
}

const MERCHANT_NAMES = rawCsv
  .split('\n')
  .slice(1)
  .map(line => line.split(',')[0].trim())
  .filter(name => name.length >= 2)

const NORMALIZED = MERCHANT_NAMES.map(n => ({ original: n, half: toHalf(n) }))

export function findKaohsiungMicropayment(query) {
  if (!query || query.trim().length < 2) return null
  const q = toHalf(query.trim())
  for (const { original, half } of NORMALIZED) {
    if (half.includes(q) || (half.length >= 3 && q.includes(half))) {
      return original
    }
  }
  return null
}
