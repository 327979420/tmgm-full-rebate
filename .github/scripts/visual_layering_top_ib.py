from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')

s, n = re.subn(
    r'<section class="rebate-proof"><div class="container"><div class="proof-head">.*?</div><div class="ticker-window" aria-label="Historical rebate records">',
    '<section class="rebate-proof"><div class="container ticker-shell"><div class="ticker-label"><strong data-t="tickerTitle"></strong><small data-t="tickerNote"></small></div><div class="ticker-window" aria-label="Historical rebate records">',
    s,
    count=1,
    flags=re.S,
)
if n != 1:
    raise SystemExit(f'ticker replacement count={n}')

translations = {
    "tickerTitle:'历史返佣记录',tickerNote:'历史数据，不代表未来收益。'": "tickerTitle:'每日 Top IB',tickerNote:'历史返佣表现'",
    "tickerTitle:'歷史返佣記錄',tickerNote:'歷史數據不代表未來收益。'": "tickerTitle:'每日 Top IB',tickerNote:'歷史返佣表現'",
    "tickerTitle:'Historical rebate records',tickerNote:'Past results do not guarantee future earnings.'": "tickerTitle:'Daily Top IBs',tickerNote:'Historical rebate performance'",
    "tickerTitle:'Rekod rebat sejarah',tickerNote:'Prestasi lalu tidak menjamin pendapatan masa depan.'": "tickerTitle:'IB Terbaik Harian',tickerNote:'Prestasi rebat terdahulu'",
    "tickerTitle:'ประวัติรีเบต',tickerNote:'ผลลัพธ์ในอดีตไม่ได้รับประกันรายได้ในอนาคต'": "tickerTitle:'Top IB ประจำวัน',tickerNote:'ผลงานรีเบตที่ผ่านมา'",
}
for old, new in translations.items():
    s = s.replace(old, new)

css = '''
/* visual-layering-v3 */
body{background:#edf2f8}
.hero{position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 #ffffff14}
.hero:before,.hero:after{content:"";position:absolute;border-radius:50%;pointer-events:none}
.hero:before{width:360px;height:360px;right:-100px;top:-150px;background:radial-gradient(circle,#16b8d73b,transparent 68%)}
.hero:after{width:240px;height:240px;left:-90px;bottom:-130px;background:radial-gradient(circle,#2d78d32e,transparent 70%)}
.hero .container{position:relative;z-index:1}
.rebate-proof{padding:0;background:#061735}
.ticker-shell{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:stretch;gap:0}
.ticker-label{display:flex;flex-direction:column;justify-content:center;min-width:150px;padding:9px 18px;margin-left:-1px;background:linear-gradient(135deg,#f7b733,#f26a21);color:#fff;box-shadow:10px 0 24px #020b1e38;z-index:2}
.ticker-label strong{font-size:14px;line-height:1.1;letter-spacing:.2px}
.ticker-label small{font-size:10px;opacity:.9;margin-top:3px;white-space:nowrap}
.ticker-window{padding:8px 0 8px 14px}
.ticker-track{animation-duration:110s}
.section{position:relative;border-top:1px solid #dfe7f1}
.section .container{position:relative;z-index:1}
.heading{position:relative;padding-left:18px;margin-bottom:34px}
.heading:before{content:"";position:absolute;left:0;top:7px;width:5px;height:calc(100% - 12px);min-height:34px;border-radius:999px;background:linear-gradient(180deg,var(--cyan),var(--blue))}
.heading h2{letter-spacing:-.025em;color:#10213f}
#platforms{background:linear-gradient(180deg,#f2f7fd 0%,#eaf1f9 100%)}
#platforms:after{content:"";position:absolute;right:5%;top:8%;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,#16b8d714,transparent 70%)}
.platform-card{border-color:#d7e1ed;background:rgba(255,255,255,.94)}
.platform-card.active{background:linear-gradient(180deg,#fff,#f7fcff);box-shadow:0 22px 55px #0b3f9124}
.platform-card.active:before{content:"";position:absolute;left:22px;right:22px;top:0;height:4px;border-radius:0 0 999px 999px;background:linear-gradient(90deg,var(--cyan),var(--blue))}
#tmgm{background:#fff}
#tmgm .product-shell{border:0;box-shadow:0 24px 62px #061a4417}
#tmgm .product-head{background:linear-gradient(135deg,#061a44,#0c3c7b);color:#fff;padding:34px}
#tmgm .product-head h3{color:#fff}
#tmgm .product-head p{color:#d6e4fb}
#tmgm .product-head img{background:#fff;border-radius:14px;padding:10px;box-shadow:0 10px 28px #00000020}
#tmgm .product-body{background:linear-gradient(180deg,#fff,#f8fbff)}
#tmgm .info-grid .card{border-top:4px solid var(--cyan);background:#fff}
#tmgm .info-grid .card:nth-child(2){border-top-color:#2b6fc5}
#tmgm .info-grid .card:nth-child(3){border-top-color:#d7a52a}
#process{background:linear-gradient(135deg,#eaf7fb,#f4f8fc)}
#process .card{background:#fff;border:0;box-shadow:0 16px 38px #0b3f9110;position:relative;overflow:hidden}
#process .card:after{content:"";position:absolute;right:-34px;bottom:-34px;width:95px;height:95px;border-radius:50%;background:#16b8d70d}
#process .card:nth-child(2) .step{color:#2b6fc5}
#process .card:nth-child(3) .step{color:#d49a1e}
#apps{border-top:0;background:radial-gradient(circle at 88% 15%,#155aac 0,transparent 32%),linear-gradient(135deg,#041333,#071f4a)}
#apps .app{background:#ffffff0d;border-color:#ffffff24;transition:transform .2s ease,background .2s ease}
#apps .app:hover{transform:translateY(-3px);background:#ffffff14}
#tutorials{background:#fff}
#tutorials .tutorial-link{border-top:4px solid #b8dcea;box-shadow:0 12px 30px #061a440b}
#tutorials .tutorial-link:nth-child(2){border-top-color:#7bc7db}
#tutorials .tutorial-link:nth-child(3){border-top-color:#5c94d4}
#tutorials .tutorial-link:nth-child(4){border-top-color:#d7a52a}
#forms{background:linear-gradient(145deg,#eef5fb,#fff8e8)}
#forms .form-card{border:1px solid #cfdeee;border-top:5px solid var(--cyan);box-shadow:0 24px 58px #061a4418}
#forms .choice-card{background:#fff}
#forms .choice-card:has(input:checked){background:linear-gradient(135deg,#eafcff,#edf5ff)}
#faq{background:#f2f5f9}
#faq details{border:1px solid #dbe3ed;border-left:4px solid #b7c4d4;background:#fff;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}
#faq details:hover{transform:translateY(-1px);box-shadow:0 10px 24px #061a440c}
#faq details[open]{border-left-color:var(--cyan);box-shadow:0 12px 28px #061a4410}
#contact{background:#fff}
#contact .contact-card{border:0;box-shadow:0 14px 34px #061a440d;background:linear-gradient(180deg,#fff,#f8fbff)}
#contact .contact-card:nth-child(3),#contact .contact-card:nth-child(4){border-top:4px solid var(--cyan)}
.footer{border-top:4px solid var(--cyan)}
@media(max-width:700px){.ticker-label{min-width:108px;padding:8px 10px}.ticker-label strong{font-size:12px}.ticker-label small{display:none}.ticker-window{padding-left:8px}.ticker-item{font-size:12px;padding:6px 10px}.heading{padding-left:14px}.heading:before{width:4px}}
'''
if '/* visual-layering-v3 */' not in s:
    s = s.replace('</style>', css + '</style>', 1)

p.write_text(s, encoding='utf-8')
