from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

# Keep the downloads heading readable.
css = '''
/* contact-anchor-fix-v1 */
.section.dark .heading h2,#apps .heading h2{color:#fff}
#apps .heading p{color:#d7e4f8}
#qq-contact,#wechat-contact{scroll-margin-top:150px}
'''
if '/* contact-anchor-fix-v1 */' not in text:
    text = text.replace('</style>', css + '</style>', 1)

# Give the existing QR cards stable destinations.
text = text.replace(
    '<article class="contact-card"><a class="qr-wrap" href="https://qm.qq.com/q/WJBVC3uE8M"',
    '<article class="contact-card" id="qq-contact"><a class="qr-wrap" href="https://qm.qq.com/q/WJBVC3uE8M"',
    1,
)
text = text.replace(
    '<article class="contact-card"><a class="qr-wrap" href="https://u.wechat.com/kHj45VpIFXCSN5JV-zx8xUc?s=2"',
    '<article class="contact-card" id="wechat-contact"><a class="qr-wrap" href="https://u.wechat.com/kHj45VpIFXCSN5JV-zx8xUc?s=2"',
    1,
)

# Replace the floating WeChat and QQ controls with simple in-page links.
text = re.sub(
    r'<button class="floating-contact-link wechat floating-qr-trigger"[^>]*>\s*<span class="floating-contact-mark">微</span><span>WeChat</span>\s*</button>',
    '<a class="floating-contact-link wechat" href="#wechat-contact"><span class="floating-contact-mark">微</span><span>WeChat</span></a>',
    text,
    count=1,
)
text = re.sub(
    r'<button class="floating-contact-link qq floating-qr-trigger"[^>]*>\s*<span class="floating-contact-mark">QQ</span><span>QQ</span>\s*</button>',
    '<a class="floating-contact-link qq" href="#qq-contact"><span class="floating-contact-mark">QQ</span><span>QQ</span></a>',
    text,
    count=1,
)

# Also handle the older external-link version if it is still present.
text = text.replace(
    '<a class="floating-contact-link wechat" href="https://u.wechat.com/kHj45VpIFXCSN5JV-zx8xUc?s=2" target="_blank" rel="noopener"><span class="floating-contact-mark">微</span><span>WeChat</span></a>',
    '<a class="floating-contact-link wechat" href="#wechat-contact"><span class="floating-contact-mark">微</span><span>WeChat</span></a>',
    1,
)
text = text.replace(
    '<a class="floating-contact-link qq" href="https://qm.qq.com/q/WJBVC3uE8M" target="_blank" rel="noopener"><span class="floating-contact-mark">QQ</span><span>QQ</span></a>',
    '<a class="floating-contact-link qq" href="#qq-contact"><span class="floating-contact-mark">QQ</span><span>QQ</span></a>',
    1,
)

# Remove the unused QR preview panel and its JavaScript.
text = re.sub(
    r'\n\s*<div class="floating-contact-qr" id="floatingContactQr" hidden>.*?</div>\s*(?=</div>\s*<button class="floating-contact-toggle")',
    '\n',
    text,
    count=1,
    flags=re.S,
)
text = re.sub(
    r'\nconst floatingContactLinks=document\.getElementById\(\'floatingContactLinks\'\);.*?if\(floatingContactQrBack\).*?;\n',
    '\n',
    text,
    count=1,
    flags=re.S,
)

# Close the floating menu after choosing WeChat or QQ.
close_js = "document.querySelectorAll('.floating-contact-link[href^=\"#\"]').forEach(link=>link.addEventListener('click',()=>setFloatingContact(false)));\n"
anchor = "const saved=localStorage.getItem('tmgm-lang');"
if close_js not in text and anchor in text:
    text = text.replace(anchor, close_js + anchor, 1)

path.write_text(text, encoding='utf-8')
