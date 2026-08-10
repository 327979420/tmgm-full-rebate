(() => {
  'use strict';
  const D = {
    'zh-CN': {
      brand:'满返网', back:'返回网站', title:'关于我们', intro:'少一层中间成本，多一点透明。',
      html:'<h2>我们是谁</h2><p>满返网（Max Rebate）是一个独立的交易返佣、交易成本与经纪商合作信息服务平台。我们希望把返佣结构、账户类型、申请流程和实际交易成本用更清晰、可核对的方式呈现给用户。</p><div class="callout"><strong>我们的原则：</strong>少一层中间成本，多一点透明。</div><h2>我们在做什么</h2><p>目前网站提供 TMGM 相关的返佣申请、满返说明、开户链接、账户类型和 Introducing Broker 合作信息。未来可逐步覆盖更多经纪商和交易平台。</p><h2>我们如何工作</h2><ul><li>尽量公开返佣结构、账户类型和申请步骤。</li><li>只收集处理申请所合理需要的信息。</li><li>不会要求交易密码、验证码、银行卡密码或证件图片。</li><li>返佣资格和最终金额以对应平台的实际审核及规则为准。</li></ul><h2>独立身份</h2><p>满返网是独立的返佣及合作信息服务平台，并非 TMGM 或其他交易平台的官方网站，也不代表任何平台提供金融建议。</p><h2>我们的目标</h2><p>让用户在开户或申请返佣前，更清楚地知道账户类型、交易成本，以及返佣如何影响实际成本，而不是只看到一个开户链接。</p>'
    },
    'zh-TW': {
      brand:'滿返網', back:'返回網站', title:'關於我們', intro:'少一層中間成本，多一點透明。',
      html:'<h2>我們是誰</h2><p>滿返網（Max Rebate）是一個獨立的交易返佣、交易成本與經紀商合作資訊服務平台。我們希望把返佣結構、帳戶類型、申請流程和實際交易成本以更清晰、可核對的方式呈現。</p><div class="callout"><strong>我們的原則：</strong>少一層中間成本，多一點透明。</div><h2>我們在做甚麼</h2><p>目前提供 TMGM 相關返佣申請、滿返說明、開戶連結、帳戶類型及 Introducing Broker 合作資訊。</p><h2>獨立身份</h2><p>滿返網並非 TMGM 或其他交易平台的官方網站，也不代表任何平台提供金融建議。</p><h2>我們的目標</h2><p>讓交易成本與返佣結構更透明、更容易核對。</p>'
    },
    'en': {
      brand:'Max Rebate', back:'Back to website', title:'About Us', intro:'Less intermediary cost. More transparency.',
      html:'<h2>Who we are</h2><p>Max Rebate is an independent trading rebate, trading-cost and broker partnership information service. We aim to present rebate structures, account types, application processes and actual trading costs in a clearer and more verifiable way.</p><div class="callout"><strong>Our principle:</strong> less intermediary cost, more transparency.</div><h2>What we do</h2><p>The site currently provides information and application support relating to TMGM rebates, account opening, account types and Introducing Broker partnerships. Additional platforms may be added over time.</p><h2>How we work</h2><ul><li>Explain rebate structures and application steps clearly.</li><li>Collect only information reasonably needed to process an application.</li><li>Never request trading passwords, verification codes, bank-card passwords or identity-document images.</li><li>Eligibility and final rebate amounts remain subject to the relevant platform rules and review.</li></ul><h2>Independent status</h2><p>Max Rebate is not the official website of TMGM or any other trading platform and does not provide financial advice on behalf of any platform.</p><h2>Our goal</h2><p>Help users understand account types, trading costs and the effect of rebates before they open an account or submit an application.</p>'
    },
    'ms': {
      brand:'Max Rebate', back:'Kembali', title:'Tentang Kami', intro:'Kos perantara lebih rendah. Lebih telus.',
      html:'<h2>Siapa kami</h2><p>Max Rebate ialah perkhidmatan bebas untuk maklumat rebat dagangan, kos dagangan dan kerjasama broker.</p><h2>Apa yang kami lakukan</h2><p>Kami menerangkan struktur rebat, jenis akaun dan proses permohonan dengan lebih jelas.</p><h2>Status bebas</h2><p>Kami bukan laman rasmi TMGM atau mana-mana platform dagangan dan tidak memberi nasihat kewangan bagi pihak platform.</p>'
    },
    'th': {
      brand:'Max Rebate', back:'กลับเว็บไซต์', title:'เกี่ยวกับเรา', intro:'ลดต้นทุนตัวกลาง เพิ่มความโปร่งใส',
      html:'<h2>เราเป็นใคร</h2><p>Max Rebate เป็นบริการอิสระด้านข้อมูลรีเบต ต้นทุนการเทรด และความร่วมมือกับโบรกเกอร์</p><h2>สิ่งที่เราทำ</h2><p>เราอธิบายโครงสร้างรีเบต ประเภทบัญชี และขั้นตอนการสมัครให้ชัดเจนขึ้น</p><h2>สถานะอิสระ</h2><p>เราไม่ใช่เว็บไซต์ทางการของ TMGM หรือแพลตฟอร์มอื่น และไม่ได้ให้คำแนะนำทางการเงินในนามของแพลตฟอร์ม</p>'
    }
  };
  const langEl = document.getElementById('lang');
  const brandEl = document.getElementById('brand');
  const backEl = document.getElementById('back');
  const titleEl = document.getElementById('title');
  const introEl = document.getElementById('intro');
  const contentEl = document.getElementById('about-content');
  function setLang(lang) {
    if (!D[lang]) lang = 'en';
    const d = D[lang];
    localStorage.setItem('tmgm-lang', lang);
    document.documentElement.lang = lang;
    langEl.value = lang;
    brandEl.textContent = d.brand;
    backEl.textContent = d.back;
    titleEl.textContent = d.title;
    introEl.textContent = d.intro;
    contentEl.innerHTML = d.html;
  }
  langEl.addEventListener('change', (e) => setLang(e.target.value));
  const saved = localStorage.getItem('tmgm-lang');
  const browser = (navigator.language || 'en').toLowerCase();
  setLang(saved || (browser.startsWith('zh-tw') || browser.startsWith('zh-hk') ? 'zh-TW' : browser.startsWith('zh') ? 'zh-CN' : browser.startsWith('ms') ? 'ms' : browser.startsWith('th') ? 'th' : 'en'));
})();