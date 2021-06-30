# LoginPage

# [Angular Login Page](https://github.com/Skytim/angular-login-page)

Implement login Page  develped by Angular

[Demo](https://github.com/Skytim/angular-login-page)

## 欄位重點說明 (打勾代表完成)
- [x] 帳號: 預設顯示「請輸入帳號」浮水印,輸入驗證,如果「記住登入帳號」狀態為勾選,請將 base64encode 保存的身分證字號解密後填入欄位中並進行隱碼。
- [x] 使用者名稱: 預設顯示「請輸入使用者名稱」浮水印,點擊 顯示訊息 ,輸入驗證。
- [x] 密碼: 預設顯示「請輸入密碼」浮水印,輸入驗證。
- [x] 記住登入帳號: 預設不勾選,除非之前登入時有勾選此欄位且成功登入。

### 重要邏輯說明

- [x] 在隱藏輸入串「帳號」輸入後只顯示前四與後三碼其餘字元隱碼。
- [x] 首次進入登入頁面時所需呈現的樣式。【關閉】:點擊後關閉提示訊息，保持在原畫面，【前往設定】:點擊後導向「設定使用者名稱」頁面，「使用者名稱」長度須為 6 至 20 碼英數字，「密碼」長度須為 8 至 12 碼英數字，如果長度不符合或輸入非英數字元進行錯誤訊息顯示「輸入長度不符合規則」。
- [x] 【登入】點擊後請透過 Mock API 進行登入
1. 正常登入
帳號: A123456789 使用者名稱: testuserid1 密碼: 1234abcd
2. 顯示設定新密碼
帳號: B123456789 使用者名稱: testuserid2 密碼: 1234abcd
3. 顯示下次再換與密碼變更
帳號: C123456789 使用者名稱: testuserid3 密碼: 1234abcd
- [x] 【我要設定使用者名稱】點擊後導向「設定使用者名稱」頁面。
- [x] 【我要註冊】點擊後外開瀏覽器導向「會員註冊手機版頁面」頁面。
- [x] 【忘記使用者名稱或密碼】點擊後導向「忘記使用者名稱或密碼」頁面。
- [x] 「記住登入帳號」處理邏輯說明:
1. 進行勾選: 成功登入後才進行輸入帳號加密保存。
2. 取消勾選:
無設定簡易登入: 無需顯示提示訊息直接取消勾選狀態，同時清除加密儲存的帳號。  
有設定簡易登入: 顯示警告訊息，並提供【取消】與【確定】按鈕。
-【取消】:關閉訊息視窗並保持勾選狀態。
-【確定】:關閉訊息視窗並取消勾選狀態，同時清除加密儲存的帳號與簡易登入 Token 並將簡易登入狀態改成「關閉」。
- [x] 在有「記住登入帳號」的狀態下且裝置有設定簡易登入，當使用者一修改「帳號」欄位的內容，請顯示顯示警告訊息，並提供【取消】與
【確定】按鈕。
-【取消】:關閉訊息視窗並還原「帳號」欄位的內容。
-【確定】:關閉訊息視窗並取消勾選狀態，同時清除加密儲存的帳號與簡易登入 Token 並將簡易登入狀態改成「關閉」。
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# run unit test(jest)
$ npm run test

# open new terminal and serve with hot reload at localhost:3000
$ npm run dev
# Then run e2e test(jest-puppeteer) on dev
$ npm run e2e

# run e2e test(jest-puppeteer) on gh-pages(prod)
$ npm run e2e:gh-pages

# generate static project and deply to ghpage
Have to commit all code before deploy to gh-page
$ npm run generate:gh-pages
$ npm run deploy
```

