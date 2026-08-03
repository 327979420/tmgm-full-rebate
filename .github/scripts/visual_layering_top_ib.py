from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

# Keep decorative labels and status pills removed.
text = re.sub(
    r'\s*<span class="eyebrow"[^>]*>.*?</span>\s*',
    '',
    text,
    flags=re.S,
)
text = text.replace(
    '<span class="product-kicker">TMGM · <span data-t="productLive"></span></span>',
    '',
)
text = re.sub(
    r'\s*<span class="product-kicker"[^>]*>.*?</span>\s*',
    '',
    text,
    flags=re.S,
)
text = re.sub(
    r'\s*<span class="platform-status"[^>]*>.*?</span>\s*',
    '',
    text,
    flags=re.S,
)

css = r'''
/* professional-density-v1 */
:root{--bg:#f3f6fa;--line:#d9e2ec;--muted:#5f6f82}
body{background:var(--bg);line-height:1.55}
.container{width:min(1140px,92%)}
.top{border-bottom:1px solid #ffffff12;box-shadow:0 5px 18px #03102c22}
.nav{min-height:64px}
.brand{font-size:23px}.brand small{margin-top:3px}
.navlinks{gap:18px}
.btn{border-radius:9px;padding:11px 16px}
.hero{padding:56px 0 50px;background:radial-gradient(circle at 82% 8%,#0b58a7 0,transparent 31%),linear-gradient(135deg,#041333,#08295d)}
.hero-grid{gap:32px}
.hero h1{font-size:clamp(40px,5.5vw,64px);margin:0 0 14px;letter-spacing:-.035em}
.hero p{font-size:17px;margin:0}
.hero-actions{margin-top:21px;gap:10px}
.hero-card{padding:24px;border-radius:17px;background:#ffffff0c;border-color:#ffffff20;box-shadow:0 18px 42px #020b1e28}
.hero-card h2{margin:0 0 12px;font-size:23px}.hero-card ol{margin:0;padding-left:20px}
.notice{margin-top:18px;padding:14px 17px;border-radius:9px;box-shadow:none}
.rebate-proof{top:64px;box-shadow:0 5px 16px #020b1e20}
.ticker-label{min-width:136px;padding:8px 15px}.ticker-window{padding-top:7px;padding-bottom:7px}
.section{padding:52px 0;border-top-color:#e1e7ef}
.heading{max-width:760px;margin-bottom:24px;padding-left:15px}
.heading:before{width:4px;top:5px;height:calc(100% - 8px)}
.heading h2{font-size:clamp(28px,3.6vw,40px);margin:0;letter-spacing:-.025em}
.heading p{font-size:15px;margin:8px 0 0}
.platforms{gap:15px}
.platform-card{min-height:248px;padding:19px;border-radius:16px;box-shadow:0 8px 22px #061a440b}
.platform-card:hover{transform:translateY(-2px);box-shadow:0 14px 30px #061a4414}
.platform-card.active{box-shadow:0 14px 34px #0b3f9118}
.platform-logo{height:82px;margin:0 0 14px;padding:11px;border-radius:12px}
.platform-logo img{max-height:58px}.platform-logo.ic-panel img{max-width:72px;max-height:72px}
.platform-card p{margin:0 0 14px;font-size:14px}
.platform-actions{gap:8px}.platform-card .btn{padding:10px 13px}
.product-shell{border-radius:18px;box-shadow:0 12px 34px #061a4411}
#tmgm .product-shell{box-shadow:0 14px 36px #061a4413}
#tmgm .product-head{padding:24px}
.product-head img{width:170px}
.product-body{padding:23px}
.subheading{font-size:23px;margin-bottom:15px}
.policy th,.policy td{padding:13px 11px}
.table-wrap{border-radius:13px}
.info-grid{gap:14px;margin-top:16px}
.card{padding:20px;border-radius:14px;box-shadow:0 7px 20px #061a4409}
.card h3{margin-bottom:8px}.card p{margin-bottom:0}
.step{font-size:32px;line-height:1;margin-bottom:10px}
#process .card{box-shadow:0 9px 24px #0b3f910d}
.apps{gap:12px}.app{padding:18px;border-radius:13px}.app strong{font-size:17px}.app .btn{margin-top:12px}
.tutorials{gap:14px}.tutorial-link:hover{transform:translateY(-1px)}
.forms{max-width:720px}.form-card{padding:25px;border-radius:16px;box-shadow:0 14px 36px #061a4414}
.choice-grid{gap:11px;margin-bottom:18px}.choice-card{padding:14px;border-radius:12px}.choice-card strong{font-size:17px}
.field{margin-bottom:12px}.field input,.field select,.field textarea{padding:10px;border-radius:8px}
.faq details{padding:13px 16px;border-radius:10px;margin-bottom:9px}
.contact{gap:15px}.contact-card{padding:18px;border-radius:14px;box-shadow:0 8px 22px #061a440b}
.qr-wrap{border-radius:12px;margin-bottom:11px;padding:10px}
.footer{padding:30px 0}
.floating-contact-toggle{padding:11px 15px;box-shadow:0 10px 28px #061a4438}
.floating-contact-panel{border-radius:15px;box-shadow:0 16px 42px #061a4430}
@media(max-width:900px){
  .section{padding:46px 0}.hero{padding:48px 0 44px}.hero-grid{gap:24px}
  .platform-card{min-height:230px}.apps{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:600px){
  .nav{min-height:60px}.rebate-proof{top:60px}
  .hero{padding:42px 0 38px}.hero h1{font-size:40px}.hero p{font-size:16px}
  .hero-card{padding:20px}.section{padding:40px 0}.heading{margin-bottom:20px}
  .platform-card{min-height:0}.platform-logo{height:76px}
  .product-body,#tmgm .product-head{padding:18px}.form-card{padding:20px}
  .apps{grid-template-columns:1fr}.contact-card{padding:16px}
}
'''

if '/* professional-density-v1 */' not in text:
    text = text.replace('</style>', css + '</style>', 1)

# Professional rebate table with row/column focus interaction.
table_css = r'''
/* rebate-table-pro-v1 */
.table-wrap{position:relative;overflow:auto;border:1px solid #cbd6e3;border-radius:12px;background:#fff;box-shadow:0 8px 24px #061a440d}
.policy{width:100%;min-width:900px;border-collapse:separate;border-spacing:0;table-layout:fixed;font-size:13px;color:#21344d}
.policy th,.policy td{height:62px;padding:10px 12px;border-right:1px solid #e1e7ef;border-bottom:1px solid #e1e7ef;text-align:center;vertical-align:middle;transition:background-color .14s ease,color .14s ease,box-shadow .14s ease}
.policy tr>*:last-child{border-right:0}
.policy tbody tr:last-child>*{border-bottom:0}
.policy thead th{position:sticky;top:0;z-index:4;height:58px;background:#0b2f5f;color:#fff;font-size:13px;font-weight:700;letter-spacing:.01em;box-shadow:inset 0 -1px 0 #ffffff1f}
.policy thead th:first-child{left:0;z-index:6;background:#08254b;text-align:left;padding-left:16px}
.policy thead th small{display:block;margin-top:3px;color:#c7d7eb;font-size:10px;font-weight:500;line-height:1.25}
.policy tbody th{position:sticky;left:0;z-index:3;width:128px;background:#eef3f8;color:#17365f;text-align:left;padding-left:16px;font-size:13px;font-weight:700}
.policy tbody td{background:#fff}
.policy tbody tr:nth-child(even) td{background:#f9fbfd}
.policy tbody tr:last-child th,.policy tbody tr:last-child td{background:#f1f6fb;color:#244568}
.policy .raw{background:#f5f8fb;font-weight:600}
.policy thead th.raw{background:#174b78;color:#fff}
.policy tbody tr:nth-child(even) td.raw{background:#f0f5f9}
.cell-main{display:block;font-size:13px;font-weight:700;line-height:1.3;color:inherit}
.cell-sub{display:block;margin-top:3px;font-size:11px;font-weight:500;line-height:1.25;color:#6a788a}
.policy thead .cell-sub,.policy thead small{color:#c7d7eb}
.policy .is-row,.policy .is-col{background:#eaf4fc!important;color:#163c68!important}
.policy thead .is-col{background:#125186!important;color:#fff!important}
.policy tbody th.is-row,.policy tbody th.is-col{background:#dceaf6!important;color:#123e6d!important}
.policy .is-active{position:relative;z-index:7;background:#d5edf9!important;color:#082f5a!important;box-shadow:inset 0 0 0 2px #16a9ca}
.policy thead .is-active{background:#0d6592!important;color:#fff!important;box-shadow:inset 0 0 0 2px #6fe3f2}
.policy td:focus-visible,.policy th:focus-visible{outline:3px solid #16b8d766;outline-offset:-3px}
@media(max-width:700px){
  .policy{min-width:820px;font-size:12px}.policy th,.policy td{height:58px;padding:9px 10px}
  .policy tbody th{width:112px;padding-left:12px}.cell-main{font-size:12px}.cell-sub{font-size:10px}
}
'''
if '/* rebate-table-pro-v1 */' not in text:
    text = text.replace('</style>', table_css + '</style>', 1)

interaction_js = r'''
function setupPolicyTableInteractions(){
  const table=document.getElementById('policyTable');
  if(!table)return;
  const cells=[...table.querySelectorAll('th,td')];
  cells.forEach(cell=>cell.setAttribute('tabindex','0'));
  const clear=()=>table.querySelectorAll('.is-row,.is-col,.is-active').forEach(cell=>cell.classList.remove('is-row','is-col','is-active'));
  const highlight=cell=>{
    if(!cell||!cell.matches('th,td'))return;
    clear();
    const column=cell.cellIndex;
    [...cell.parentElement.children].forEach(item=>item.classList.add('is-row'));
    table.querySelectorAll('tr').forEach(row=>{const item=row.children[column];if(item)item.classList.add('is-col')});
    cell.classList.add('is-active');
  };
  if(table.dataset.interactive==='true')return;
  table.dataset.interactive='true';
  table.addEventListener('pointerover',event=>highlight(event.target.closest('th,td')));
  table.addEventListener('pointerleave',clear);
  table.addEventListener('focusin',event=>highlight(event.target.closest('th,td')));
  table.addEventListener('click',event=>highlight(event.target.closest('th,td')));
}
'''
if 'function setupPolicyTableInteractions()' not in text:
    anchor='function setLang(lang)'
    if anchor not in text:
        raise SystemExit('Table interaction insertion anchor not found')
    text=text.replace(anchor,interaction_js+anchor,1)

old_render="document.getElementById('policyTable').innerHTML=h}"
new_render="document.getElementById('policyTable').innerHTML=h;setupPolicyTableInteractions()}"
if old_render in text:
    text=text.replace(old_render,new_render,1)
elif new_render not in text:
    raise SystemExit('Table render hook not found')

path.write_text(text, encoding='utf-8')
