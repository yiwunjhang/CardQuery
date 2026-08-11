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

- 方案共 8 個（7+1）：Chill刷、Pay著刷、天天刷、大筆刷、好饗刷、數趣刷、玩旅刷、假日刷
- **Chill刷**（2026/7/8–9/30，最高 10%）：LINE Pay 也適用。50嵐、得正等連鎖飲料店在 Chill刷 享 10%，**不受**好饗刷／Pay著刷的小額支付排除條款影響
- NCCC 小額支付名單內的商家（如 50嵐）：**LINE Pay 2.3% 仍適用**，直刷信用卡（帳單顯示「聯信-」）才是無回饋
- LINE Pay 排除對象：四大超商、停車場、連鎖速食店、繳稅費（僅限 Pay著刷 2.3% 的排除，Chill刷 不受此限）
- 支付工具適用範圍：LINE Pay 限 Chill刷／Pay著刷／假日刷；全盈+Pay 限 Pay著刷／假日刷（見 `LINE_PAY_ELIGIBLE_GROUPS`）
- 餐廳用 LINE Pay 結帳：只適用 Pay著刷 2.3%，不含好饗刷 3.3%
- 好饗刷排除：透過菸酒、酒吧、KTV、酒店、飯店、百貨、商場（如大全聯）、外送平台產生之餐廳消費不加碼
