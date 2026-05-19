# Claude Code 設定

## Commit 規則

- **不要**在 commit 訊息加上 `Co-Authored-By` 行
- Commit 訊息使用英文，格式：`type: description`

## 專案說明

台新 GOGO 卡回饋查詢工具（Vue 3 + Vite）。

### 資料檔案

- [src/data/rewards.js](src/data/rewards.js) — 方案清單、關鍵字、排除邏輯
- [src/data/kaohsiung-micropayment.js](src/data/kaohsiung-micropayment.js) — 高雄市 NCCC 小額支付名單查詢
- [src/data/高雄市小額支付平台通路名單.csv](src/data/高雄市小額支付平台通路名單.csv) — 原始 CSV 名單

### 重要業務邏輯

- NCCC 小額支付名單內的商家（如 50嵐）：**LINE Pay 2.3% 仍適用**，直刷信用卡（帳單顯示「聯信-」）才是無回饋
- LINE Pay 排除對象：四大超商、停車場、連鎖速食店、繳稅費
- 餐廳用 LINE Pay 結帳：只適用 Pay著刷 2.3%，不含好饗刷 3.3%
