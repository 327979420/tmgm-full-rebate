# Max Rebate / 满返网

A static multilingual referral, rebate and IB application website for `max-rebate.com`.

## Architecture

- HTML files contain page structure and default Simplified Chinese content.
- `assets/css/home.css` contains the original home-page styles.
- `assets/css/application.css` and `assets/css/success.css` contain the application-flow styles.
- `assets/home-enhancements.css` contains newer layout and interaction styles.
- `assets/site-config.js` is the single source for referral URLs, contact URLs and calculator rates.
- `assets/site-links.js` applies those shared destinations wherever a page needs them.
- `assets/home-i18n.js` is the complete home-page translation table.
- `assets/home.js` only binds language, calculator and pointer behavior.
- `assets/application.js` and `assets/success.js` contain the application-flow behavior.
- `scripts/validate-site.mjs` checks structural, resource, sitemap and translation integrity.

There is no build step and no runtime dependency.

## Important files

```text
.
├── index.html
├── apply.html
├── success.html
├── tmgm-*.html
├── tutorial-*.html
├── assets/
│   ├── css/home.css
│   ├── css/application.css
│   ├── css/success.css
│   ├── home-enhancements.css
│   ├── site-config.js
│   ├── site-links.js
│   ├── home-i18n.js
│   ├── home.js
│   ├── application.js
│   ├── success.js
│   ├── trust.css
│   └── trust-pages.js
├── scripts/validate-site.mjs
├── sitemap.xml
└── robots.txt
```

## Editing rules

1. Change referral links, contact destinations and calculator rates only in `assets/site-config.js`.
2. Change home-page translations only in `assets/home-i18n.js`.
3. Keep page structure in HTML and presentation in CSS. Do not inject layout CSS or static sections from JavaScript.
4. Add every public content page to `sitemap.xml`.
5. Run validation before committing.

## Validation

```bash
npm run check
```

The validator checks headings, metadata, duplicate IDs, local resources, external-link safety, sitemap coverage, translation completeness, core-page separation and centralized configuration.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Deployment checklist

1. Run `npm run check`.
2. Preview the home page and application flow.
3. Test all five languages.
4. Verify the calculator, referral link and contact destinations.
5. Confirm current rates and compliance language with the platform owner.

Never collect trading passwords, verification codes, bank-card credentials or identity-document images.
