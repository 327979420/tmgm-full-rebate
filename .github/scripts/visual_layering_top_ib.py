from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

# Remove decorative eyebrow labels above major headings.
text = re.sub(
    r'\s*<span class="eyebrow"[^>]*>.*?</span>\s*',
    '',
    text,
    flags=re.S,
)

# Remove the TMGM / live-status kickers above section titles.
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

# Remove platform-card status pills such as Live and Coming soon.
text = re.sub(
    r'\s*<span class="platform-status"[^>]*>.*?</span>\s*',
    '',
    text,
    flags=re.S,
)

# Tighten spacing after removing the decorative labels.
css = '''
/* concise-label-cleanup-v1 */
.hero h1{margin-top:0}
.heading h2{margin-top:0}
.platform-logo{margin-top:8px}
'''
if '/* concise-label-cleanup-v1 */' not in text:
    text = text.replace('</style>', css + '</style>', 1)

path.write_text(text, encoding='utf-8')
