# TMGM满返网 / TMGM Full Rebate Hub

A static, multilingual TMGM referral, rebate and agent-application website built with plain HTML, CSS and JavaScript.

## Included

- Five language routes: English, Simplified Chinese, Traditional Chinese, Bahasa Melayu and Thai
- Browser-language redirect from the root URL
- TMGM referral registration link
- Rebate policy table for STD, PM, DC, PRO and RAW07
- Separate rebate and agent application forms
- Application IDs (`REB-...` and `IB-...`)
- QQ and WeChat QR codes supplied by the site owner
- Discord invite link
- Official TMGM download links for Windows, macOS, iOS, Android and WebTrader
- Four tutorial pages: referral registration, downloads, rebate application and agent-page setup
- Privacy notice and CFD risk disclaimer
- Google Apps Script / Google Sheets form receiver
- Mobile-responsive layout with no build step and no external font dependency

## Site structure

```text
.
├── index.html
├── en/
├── zh-cn/
├── zh-tw/
├── ms/
├── th/
├── assets/
│   ├── css/styles.css
│   ├── js/config.js
│   ├── js/i18n.js
│   ├── js/site.js
│   └── images/
├── google-apps-script.gs
└── README.md
```

## 1. Update links and settings

Edit `assets/js/config.js`.

Important fields:

```js
referralUrl: "your TMGM referral link",
discordUrl: "your Discord invite",
formProvider: "demo",
formEndpoint: ""
```

The current project already includes the referral URL and Discord URL supplied in the project notes.

## 2. Connect Google Sheets

1. Create a Google Sheet.
2. Open `Extensions -> Apps Script`.
3. Replace the default code with `google-apps-script.gs`.
4. In `Project Settings -> Script properties`, add:
   - `SHEET_ID`: the ID between `/d/` and `/edit` in the Google Sheet URL
   - `SHEET_NAME`: optional, default `Applications`
   - `NOTIFY_EMAIL`: optional email notification recipient
5. Deploy as a Web App.
6. Allow the web app to receive submissions from website visitors, subject to your organisation's policy.
7. Copy the deployment URL into `assets/js/config.js`:

```js
formProvider: "google-apps-script",
formEndpoint: "https://script.google.com/macros/s/.../exec"
```

Until this is configured, forms operate in demo mode and save test submissions only in the visitor's browser local storage.

## 3. Local preview

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/zh-cn/
```

## 4. GitHub Pages deployment

1. Create a repository, for example `tmgm-full-rebate`.
2. Upload all files with `index.html` at the repository root.
3. Open `Settings -> Pages`.
4. Select `Deploy from a branch`.
5. Select `main` and `/ (root)`.

A custom domain can be connected later through GitHub Pages settings and your DNS provider.

## 5. Before public launch

- Replace demo form mode with a working receiver.
- Test the referral URL and confirm account attribution.
- Confirm the rebate table, units, fees, settlement language and eligibility with TMGM compliance or management.
- Confirm permission to use TMGM branding and the supplied logo.
- Verify that the QQ and WeChat QR codes are current.
- Review Malay and Thai financial terminology with a fluent human reviewer.
- Test the website on iPhone Safari, Android Chrome, WeChat's in-app browser and desktop browsers.
- Do not collect trading passwords, verification codes, bank-card details or identity-document images.

## Source notes used for this version

- Site name: TMGM满返网
- TMGM colour direction
- New-account three-day rule and existing-account review path
- Spread/rebate policy table
- Next-day-after-close processing description
- Referral URL
- QQ and WeChat QR images
- Discord invitation
- Agent-application and Portal-agreement workflow
