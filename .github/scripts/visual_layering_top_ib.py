from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

# Keep the downloads heading readable on the dark background.
css = r'''
/* floating-contact-qr-v2 */
.section.dark .heading h2,#apps .heading h2{color:#fff}
#apps .heading p{color:#d7e4f8}
button.floating-contact-link{width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer}
.floating-contact-qr{padding:4px 2px 1px;text-align:center}
.floating-contact-qr[hidden],.floating-contact-links[hidden]{display:none}
.floating-contact-qr-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:11px}
.floating-contact-qr-head strong{color:var(--navy);font-size:15px}
.floating-contact-back{display:inline-flex;align-items:center;gap:5px;border:0;border-radius:9px;padding:7px 10px;background:#edf3fa;color:var(--navy);font-weight:850;cursor:pointer}
.floating-contact-qr img{display:block;width:210px;max-width:100%;aspect-ratio:1;object-fit:contain;margin:0 auto 9px;padding:10px;border:1px solid #dfe7f1;border-radius:14px;background:#fff}
.floating-contact-qr small{display:block;color:var(--muted);font-size:12px}
'''
if '/* floating-contact-qr-v2 */' not in s:
    s = s.replace('</style>', css + '</style>', 1)

old_wechat = '<a class="floating-contact-link wechat" href="https://u.wechat.com/kHj45VpIFXCSN5JV-zx8xUc?s=2" target="_blank" rel="noopener"><span class="floating-contact-mark">微</span><span>WeChat</span></a>'
new_wechat = '<button class="floating-contact-link wechat floating-qr-trigger" type="button" data-qr-src="assets/wechat-qr.svg" data-qr-name="WeChat" aria-expanded="false"><span class="floating-contact-mark">微</span><span>WeChat</span></button>'
old_qq = '<a class="floating-contact-link qq" href="https://qm.qq.com/q/WJBVC3uE8M" target="_blank" rel="noopener"><span class="floating-contact-mark">QQ</span><span>QQ</span></a>'
new_qq = '<button class="floating-contact-link qq floating-qr-trigger" type="button" data-qr-src="assets/qq-qr.svg" data-qr-name="QQ" aria-expanded="false"><span class="floating-contact-mark">QQ</span><span>QQ</span></button>'

s = s.replace(old_wechat, new_wechat, 1)
s = s.replace(old_qq, new_qq, 1)
s = s.replace('<div class="floating-contact-links">', '<div class="floating-contact-links" id="floatingContactLinks">', 1)

qr_html = r'''
    <div class="floating-contact-qr" id="floatingContactQr" hidden>
      <div class="floating-contact-qr-head">
        <button class="floating-contact-back" id="floatingContactQrBack" type="button">← <span data-t="contactTitle"></span></button>
        <strong id="floatingContactQrName"></strong>
      </div>
      <img id="floatingContactQrImage" src="" alt="">
      <small data-t="scan"></small>
    </div>
'''
needle = '      <a class="floating-contact-link telegram" href="https://t.me/LiangFreddy" target="_blank" rel="noopener"><span class="floating-contact-mark">T</span><span>Telegram</span></a>\n    </div>\n  </div>\n  <button class="floating-contact-toggle"'
replacement = '      <a class="floating-contact-link telegram" href="https://t.me/LiangFreddy" target="_blank" rel="noopener"><span class="floating-contact-mark">T</span><span>Telegram</span></a>\n    </div>\n' + qr_html + '  </div>\n  <button class="floating-contact-toggle"'
if 'id="floatingContactQr"' not in s:
    if needle not in s:
        raise SystemExit('Floating contact HTML anchor not found')
    s = s.replace(needle, replacement, 1)

js = r'''
const floatingContactLinks=document.getElementById('floatingContactLinks');
const floatingContactQr=document.getElementById('floatingContactQr');
const floatingContactQrImage=document.getElementById('floatingContactQrImage');
const floatingContactQrName=document.getElementById('floatingContactQrName');
const floatingContactQrBack=document.getElementById('floatingContactQrBack');
function hideFloatingQr(){if(floatingContactQr)floatingContactQr.hidden=true;if(floatingContactLinks)floatingContactLinks.hidden=false;document.querySelectorAll('.floating-qr-trigger').forEach(button=>button.setAttribute('aria-expanded','false'))}
document.querySelectorAll('.floating-qr-trigger').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();if(!floatingContactQr||!floatingContactLinks||!floatingContactQrImage||!floatingContactQrName)return;floatingContactQrImage.src=button.dataset.qrSrc||'';floatingContactQrImage.alt=(button.dataset.qrName||'Contact')+' QR code';floatingContactQrName.textContent=button.dataset.qrName||'';floatingContactLinks.hidden=true;floatingContactQr.hidden=false;button.setAttribute('aria-expanded','true')}));
if(floatingContactQrBack)floatingContactQrBack.addEventListener('click',event=>{event.stopPropagation();hideFloatingQr()});
'''
if 'const floatingContactLinks=document.getElementById' not in s:
    anchor = "const saved=localStorage.getItem('tmgm-lang');"
    if anchor not in s:
        raise SystemExit('JavaScript insertion anchor not found')
    s = s.replace(anchor, js + anchor, 1)

# Reset the QR view whenever the floating panel closes.
old_set = "function setFloatingContact(open){if(!floatingContactPanel||!floatingContactToggle)return;floatingContactPanel.hidden=!open;floatingContactToggle.setAttribute('aria-expanded',String(open))}"
new_set = "function setFloatingContact(open){if(!floatingContactPanel||!floatingContactToggle)return;floatingContactPanel.hidden=!open;floatingContactToggle.setAttribute('aria-expanded',String(open));if(!open&&typeof hideFloatingQr==='function')hideFloatingQr()}"
s = s.replace(old_set, new_set, 1)

p.write_text(s, encoding='utf-8')
