from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

# Styles
if '.rebate-proof{' not in text:
    ticker_css = ".rebate-proof{background:#071a3d;color:#fff;padding:22px 0;border-top:1px solid #ffffff12;border-bottom:1px solid #ffffff12}.proof-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:14px}.proof-head h2{margin:0;font-size:22px}.proof-head p{margin:0;color:#b9c8df;font-size:13px}.ticker-window{overflow:hidden;mask-image:linear-gradient(to right,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,#000 5%,#000 95%,transparent)}.ticker-track{display:flex;width:max-content;gap:12px;animation:rebateTicker 48s linear infinite}.ticker-window:hover .ticker-track{animation-play-state:paused}.ticker-item{display:flex;align-items:center;gap:12px;white-space:nowrap;padding:11px 16px;border:1px solid #ffffff20;border-radius:999px;background:#ffffff0d}.ticker-item b{color:#8ee9f5}.ticker-item em{font-style:normal;font-weight:900;color:#ffd978}@keyframes rebateTicker{from{transform:translateX(0)}to{transform:translateX(-50%)}}"
    text = text.replace('.section{padding:76px 0}', ticker_css + '.section{padding:76px 0}', 1)

old_forms_css = '.forms{display:grid;grid-template-columns:1fr 1fr;gap:26px}.form-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:27px;box-shadow:0 12px 32px #061a440b}'
new_forms_css = '.forms{display:block;max-width:760px;margin:auto}.form-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:30px;box-shadow:0 16px 40px #061a4410}.choice-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:8px 0 22px}.choice-card{position:relative;display:block;border:2px solid #dbe3ef;border-radius:15px;padding:17px 16px;cursor:pointer;background:#fbfdff}.choice-card:hover{border-color:#8ecfe0}.choice-card input{position:absolute;opacity:0}.choice-card strong{display:block;font-size:18px;color:var(--navy);margin-bottom:3px}.choice-card span{display:block;color:var(--muted);font-size:13px}.choice-card:has(input:checked){border-color:var(--cyan);background:#effbfe;box-shadow:0 0 0 3px #16b8d71a}.inline-contact{display:inline-block;margin-top:7px;text-decoration:underline;font-weight:900;color:#805d00}'
if old_forms_css in text:
    text = text.replace(old_forms_css, new_forms_css, 1)
if '.choice-grid{grid-template-columns:1fr}' not in text:
    text = text.replace('@media(max-width:600px){', '@media(max-width:600px){.choice-grid{grid-template-columns:1fr}', 1)

# Rebate ticker from user-provided table
entries = [
    ('7148042', '27,261'), ('9107904', '20,438'), ('9163255', '13,769'),
    ('816270', '11,053'), ('7189768', '10,208'), ('292880', '9,599'),
    ('5240177', '8,140'), ('7148015', '7,531'), ('14005360', '6,847'),
    ('7168282 / 7173701', '6,735'), ('50008158', '5,893'), ('10590025', '5,836'),
    ('596861', '5,523'), ('11033918', '5,450'), ('12053412', '4,741'),
    ('7205634', '4,609'), ('14028864', '4,543'), ('534304', '4,440'),
    ('12010426', '4,372'), ('14039399', '4,370')
]
items = ''.join(f'<span class="ticker-item"><b>IB TA {ta}</b><em>USD ${amount}</em></span>' for ta, amount in entries)
ticker = f'<section class="rebate-proof"><div class="container"><div class="proof-head"><div><span class="eyebrow" data-t="tickerKick"></span><h2 data-t="tickerTitle"></h2></div><p data-t="tickerNote"></p></div><div class="ticker-window" aria-label="Historical rebate records"><div class="ticker-track">{items}{items}</div></div></div></section>'
if 'class="rebate-proof"' not in text:
    text = text.replace('<section class="section" id="platforms">', ticker + '\n<section class="section" id="platforms">', 1)

# One unified application form
new_forms = '''<section class="section" id="forms"><div class="container"><div class="heading"><h2 data-t="formsTitle"></h2><p data-t="formsDesc"></p></div><div class="forms"><form class="form-card" data-kind="APP"><h3 data-t="unifiedFormTitle"></h3><p style="color:var(--muted);margin-top:-7px" data-t="applicationChoiceDesc"></p><div class="choice-grid"><label class="choice-card"><input type="radio" name="application_type" value="REBATE" required><strong data-t="rebateChoice"></strong><span data-t="rebateChoiceDesc"></span></label><label class="choice-card"><input type="radio" name="application_type" value="IB" required><strong data-t="ibChoice"></strong><span data-t="ibChoiceDesc"></span></label></div><div class="field"><label data-t="platform"></label><select name="platform" required><option value="TMGM">TMGM</option><option disabled data-t="ecSoon"></option><option disabled data-t="icSoon"></option><option disabled data-t="exSoon"></option></select></div><div class="field"><label data-t="registeredEmailQ"></label><input name="registered_email" type="email" autocomplete="email" required></div><div class="field"><label data-t="registeredWithinQ"></label><select name="registered_within_3_days" required><option value="" data-t="pleaseSelect"></option><option value="yes" data-t="yesOption"></option><option value="no" data-t="noOption"></option></select></div><div class="field"><label data-t="emailReachableQ"></label><select id="emailReachable" name="reachable_via_registered_email" required><option value="" data-t="pleaseSelect"></option><option value="yes" data-t="yesOption"></option><option value="no" data-t="noOption"></option></select></div><div id="contactInstruction" class="conditional-note" hidden><span data-t="contactInstruction"></span><br><a class="inline-contact" href="#contact" data-t="contactNow"></a></div><label class="check"><input type="checkbox" required><span data-t="consent"></span></label><button class="btn btn-primary" type="submit" data-t="submit"></button><div class="result"></div></form></div></div></section>'''
text, count = re.subn(r'<section class="section" id="forms">.*?</section>\s*<section class="section white faq"', new_forms + '\n<section class="section white faq"', text, count=1, flags=re.S)
if count != 1:
    raise SystemExit('Could not replace forms section')

translations = {
    'zh-CN': ('提交申请','先选择申请满返或成为Introducing Broker，之后填写同一组账户资料。','选择申请类型并填写账户资料','满返和Introducing Broker使用同一套开户注册与权限开启流程。','申请满返','申请交易返佣，降低交易成本。','成为Introducing Broker','发展客户并按合资格交易量获得佣金。','查看联系方式','历史返佣记录','成功返佣代理展示','仅展示IB TA与历史累计返佣；历史数据不代表未来收益。'),
    'zh-TW': ('提交申請','先選擇申請滿返或成為Introducing Broker，之後填寫同一組帳戶資料。','選擇申請類型並填寫帳戶資料','滿返和Introducing Broker使用同一套開戶及權限開啟流程。','申請滿返','申請交易返佣，降低交易成本。','成為Introducing Broker','發展客戶並按合資格交易量獲得佣金。','查看聯絡方式','歷史返佣記錄','成功返佣代理展示','只展示IB TA及歷史累計返佣；歷史數據不代表未來收益。'),
    'en': ('Submit an application','First choose a rebate application or an Introducing Broker application, then complete the same account-information form.','Choose an application type and provide account details','Rebates and Introducing Broker applications follow the same registration and permission-activation process.','Apply for rebates','Request trading rebates to reduce trading costs.','Become an Introducing Broker','Build a client network and earn commission on eligible trading volume.','View contact options','HISTORICAL REBATE RECORDS','Successful rebate partner records','Only IB TA numbers and historical cumulative rebates are shown. Past results do not guarantee future earnings.'),
    'ms': ('Hantar permohonan','Pilih sama ada memohon rebat atau menjadi Introducing Broker, kemudian lengkapkan borang maklumat akaun yang sama.','Pilih jenis permohonan dan isi maklumat akaun','Rebat dan Introducing Broker menggunakan proses pendaftaran serta pengaktifan kebenaran yang sama.','Mohon rebat','Mohon rebat dagangan untuk mengurangkan kos dagangan.','Menjadi Introducing Broker','Bangunkan rangkaian pelanggan dan terima komisen daripada volum dagangan yang layak.','Lihat cara menghubungi','REKOD REBAT SEJARAH','Rekod rakan kongsi rebat berjaya','Hanya nombor IB TA dan rebat terkumpul sejarah dipaparkan. Prestasi lalu tidak menjamin pendapatan masa depan.'),
    'th': ('ส่งใบสมัคร','เลือกสมัครรีเบตหรือสมัครเป็น Introducing Broker ก่อน แล้วกรอกข้อมูลบัญชีชุดเดียวกัน','เลือกประเภทใบสมัครและกรอกข้อมูลบัญชี','รีเบตและ Introducing Broker ใช้ขั้นตอนลงทะเบียนและเปิดสิทธิ์ชุดเดียวกัน','สมัครรีเบต','ขอรับรีเบตเพื่อลดต้นทุนการเทรด','สมัครเป็น Introducing Broker','สร้างเครือข่ายลูกค้าและรับค่าคอมมิชชั่นจากปริมาณการเทรดที่มีคุณสมบัติ','ดูช่องทางติดต่อ','ประวัติรีเบต','ผลงานพาร์ทเนอร์ที่ได้รับรีเบตสำเร็จ','แสดงเฉพาะหมายเลข IB TA และรีเบตสะสมในอดีต ผลงานในอดีตไม่รับประกันรายได้ในอนาคต')
}
markers = ["'zh-CN':{", "'zh-TW':{", "'en':{", "'ms':{", "'th':{"]
for i, marker in enumerate(markers):
    start = text.index(marker)
    end_marker = markers[i+1] if i+1 < len(markers) else '};\nconst P='
    end = text.index(end_marker, start + len(marker))
    segment = text[start:end]
    lang = marker.split("'")[1]
    vals = translations[lang]
    insertion = "formsTitle:'{}',formsDesc:'{}',unifiedFormTitle:'{}',applicationChoiceDesc:'{}',rebateChoice:'{}',rebateChoiceDesc:'{}',ibChoice:'{}',ibChoiceDesc:'{}',contactNow:'{}',tickerKick:'{}',tickerTitle:'{}',tickerNote:'{}',".format(*vals)
    segment, n = re.subn(r"formsTitle:'[^']*',formsDesc:'[^']*',", insertion, segment, count=1)
    if n != 1:
        raise SystemExit('Translation update failed for ' + lang)
    text = text[:start] + segment + text[end:]

# Official JSON AJAX format plus diagnostics in localStorage
old_handler_pattern = r"document\.querySelectorAll\('form'\)\.forEach\(f=>f\.addEventListener\('submit',async e=>\{.*?\}\)\);\nconst saved="
new_handler = '''document.querySelectorAll('form[data-kind="APP"]').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();const lang=document.documentElement.lang;const t=I[lang]||I.en;const checked=f.querySelector('input[name="application_type"]:checked');const kind=checked?checked.value:'APP';const id=kind+'-'+new Date().toISOString().slice(0,10).replaceAll('-','')+'-'+Math.random().toString(36).slice(2,7).toUpperCase();const r=f.querySelector('.result');const button=f.querySelector('button[type=submit]');const oldText=button.textContent;button.disabled=true;button.textContent=t.submitting;const data=Object.fromEntries(new FormData(f).entries());data.application_id=id;data.application_type=kind;data.site_language=lang;data.submitted_at=new Date().toISOString();data.email=data.registered_email;data._replyto=data.registered_email;data._subject='Rebate Hub application '+id;data._template='table';data._captcha='false';data._url=window.location.href;const record={id,data,time:new Date().toISOString()};localStorage.setItem('last-'+kind,JSON.stringify(record));try{const response=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});const result=await response.json().catch(()=>({}));localStorage.setItem('last-submit-response',JSON.stringify({status:response.status,result,time:new Date().toISOString()}));if(!response.ok||result.success===false)throw new Error(result.message||'submit failed');sessionStorage.setItem('lastApplication',JSON.stringify({id:id,type:kind,lang:lang}));window.location.href='success.html?ref='+encodeURIComponent(id)+'&type='+encodeURIComponent(kind)+'&lang='+encodeURIComponent(lang)}catch(error){console.error(error);r.textContent=t.submitError+id;r.style.display='block';button.disabled=false;button.textContent=oldText}}));\nconst saved='''
text, count = re.subn(old_handler_pattern, new_handler, text, count=1, flags=re.S)
if count != 1:
    raise SystemExit('Could not replace submit handler')

path.write_text(text, encoding='utf-8')
print('index.html updated')
