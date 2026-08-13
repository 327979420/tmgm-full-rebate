(() => {
  'use strict';

  const REFERRAL = 'https://portal.tminvgain.com/register?sales=NjAwM19GcmVkZHlMaWFuZw==&language=zh-Hans';
  document.querySelectorAll('.referral').forEach((a) => { a.href = REFERRAL; });

  const EN = {
    brandSub:'TRADING CASHBACK', apply:'Apply', navRebate:'TMGM Rebate', navAgent:'TMGM Partner', navRates:'Rebate rates', navCalc:'Rebate calculator', navContact:'Contact us',
    tickerTitle:'Daily Top IBs', tickerNote:'Historical rebate records', heroKicker:'TMGM REBATE · INDEPENDENT SERVICE', heroTitle:'TMGM Rebate.\nLower the cost of every lot.', heroDesc:'Max Rebate provides TMGM traders with a transparent rebate service. We return 100% of the eligible client rebate we receive, with no extra deduction or added spread markup.',
    viewRates:'View TMGM rebate plan', applyNow:'Apply as client / partner', metric1:'of eligible rebate received is returned', metricPer:'/lot', metric2:'TMGM Standard Gold rebate', metricHighlight:'Highest rebate online', metric3:'added spread markup',
    whoTitle:'Who are we?', whoDesc:'We are not a trading platform. We make the rebate layer more transparent and return the eligible portion to traders.', missionTitle:'Mission', missionText:'Reduce intermediary cost and make rebates clearer.', taskTitle:'What we do', taskText:'Return 100% of the eligible rebate we receive for the client.', serviceTitle:'Service', serviceText:'Application, eligibility checks and human follow-up in one path.', aboutLink:'About Max Rebate →',
    rebateTitle:'What is a rebate?', rebateDesc:'Part of the trading cost charged by a broker may be paid back as commission. That returnable portion can go to the trader or to the IB who introduced and supports the client, rather than being withheld by an intermediary.', story1t:'Trade as usual', story1d:'Same account, platform and order process.', story2t:'Eligible rebate is generated', story2d:'Calculated from account group and eligible trading records.', story3t:'Rebate comes back to you', story3d:'We do not take an extra cut from the returnable portion.',
    howTitle:'How rebates work', howDesc:'From account setup to withdrawal, the whole process is five clear steps.',
    flow1t:'Create and verify your account', flow1d:'Open a new platform account and complete identity verification.',
    flow2t:'Apply for rebate access', flow2d:'Submit your rebate-access request through Max Rebate.',
    flow3t:'Trade as usual', flow3d:'Once access is approved, trade normally under the approved account group.',
    flow4t:'Rebate is credited automatically', flow4d:'Eligible rebates are credited automatically to your platform trading account.',
    flow5t:'Withdraw through your preferred channel', flow5d:'Withdraw from the platform using available methods such as bank cards and supported crypto channels. Availability depends on the platform, account and region.',
    platformTitle:'Our partner platforms', platformDesc:'See the platform, regulatory entities and status before choosing a rebate plan.', live:'Live', soon:'Coming soon', tmgmTitle:'Australian-origin multi-regulated CFD broker', tmgmReg:'Group entities are licensed in multiple jurisdictions; the applicable entity depends on registration.', ecTitle:'Multi-entity global CFD broker', ecReg:'Official disclosures include regulated entities in Australia, New Zealand, South Africa and Seychelles.', icTitle:'Raw Spread / ECN-style CFD broker', icReg:'IC Markets Global is operated by Raw Trading Ltd, regulated by Seychelles FSA.', exTitle:'Global multi-regulated derivatives broker', exReg:'The group holds multiple licences; retail availability differs by entity.', viewRatesSmall:'View rebates', openTMGM:'Open TMGM account', regDetails:'Regulation details ↗', platformNote:'The regulatory entity that applies to you depends on your region and final account entity.',
    livePlan:'TMGM · LIVE · 100% REBATE', ratesTitle:'TMGM rebate rates', ratesDesc:'TMGM Standard Gold rebate: $20 per lot.', accountType:'Account type', standard:'Standard', premium:'Premium', bitcoinAcc:'Bitcoin', pro:'Professional', gold:'Gold', forex:'Forex', bitcoin:'Bitcoin', highestOnline:'Highest rebate online', perLot:'/ lot', spread32:'Reference spread 32', spread27:'Reference spread 27', spread22:'Reference spread 22', spread16:'Reference spread 16', spread10:'Reference spread 10', spread13:'Reference spread 13', spread7:'Reference spread 7', spread14:'Reference spread 14', spread25:'Reference spread 25', rawGold:'Reference spread 9 · Fee 5', rawFx:'Reference spread 0 · Fee 7', tableFoot:'Figures use one standard lot. Final eligibility, rebate amount, spreads and conditions depend on the account group, executed trades and platform review.', proofNote:'“Highest rebate online” is based on publicly visible TMGM client-rebate pages reviewed on 10 Aug 2026. Publicly advertised rates can change.',
    calcTitle:'Gold rebate calculator', calcDesc:'Choose the TMGM account type and lot size to estimate the rebate on one gold trade.', yourTrade:'Your trade', chooseAccount:'Account type', lotSize:'Lot size for this trade', calcHint:'Gold rebate only. Spread, slippage, swaps and other costs are not included.', estimated:'Estimated rebate', rateLabel:'Rebate rate', feeLabel:'Listed fee reference', netFeeLabel:'RAW07 fee after rebate', calcLegal:'This is a simple estimate based on the current table, not a platform statement, trading advice or profit guarantee.',
    whyTitle:'Why work with us?', whyDesc:'More rebate, clearer rules, unchanged trading conditions.', why0t:'Highest rebate online', why0d:'Public rebate pages we reviewed commonly advertise around $18–18.4/lot; Max Rebate offers $20/lot on TMGM Standard Gold.', why0c:'Public comparison: $18–18.4 → $20 / lot', why1t:'No extra rebate cut', why1d:'100% of the eligible returnable rebate we receive goes to the client.', why2t:'No hidden spread markup', why2d:'The rebate service does not add an extra spread markup.', why3t:'Trading conditions stay unchanged', why3d:'Your account and execution conditions remain those of the platform and account group.', why4t:'Human follow-up after approval', why4d:'After approval, you can continue with the relevant account manager for follow-up.', ctaTitle:'Ready to start?', ctaDesc:'Submit an application first. Eligibility is handled based on your account situation.', contact:'Contact us',
    faqDesc:'The most common questions, kept short.', faq1q:'Does the rebate change my spread or trading conditions?', faq1a:'Under the current Max Rebate plan, the rebate service does not add a spread markup. Actual conditions still depend on the platform, account group and market.',
    faq2q:'What does “100% rebate” mean?', faq2a:'100% means that after we actually receive the broker rebate, we return 100% of the eligible client rebate portion to the client. The spread is a fixed trading cost and cannot be refunded.',
    faq3q:'Can an existing TMGM account apply?', faq3a:'You can request a review. Attribution or group changes remain subject to platform rules.',
    faq4q:'When is the rebate credited?', faq4a:'Under normal circumstances, the rebate is credited within one business day. For example, positions closed on Monday can be credited on Tuesday. Exceptional cases may take longer.',
    faq5q:'Will you ask for my trading password?', faq5a:'No. Never send passwords, verification codes, card passwords or identity-document images.', faq6q:'Does a rebate guarantee profit?', faq6a:'No. A rebate may reduce eligible costs but does not reduce market risk or guarantee profit.',
    faq7q:'What permissions does an agent receive?', faq7a:'Once agent access is activated, the agent receives a dedicated account-opening link and invitation code for business development. Agent rebates are determined by the client account group, trading instrument and eligible trading volume. Client account profits or losses do not affect agent income.',
    contactTitle:'Contact us', contactDesc:'For rebate applications, existing-account reviews, IB partnerships or follow-up, use any channel below.', contactUse:'Rebate application / account review', communityUse:'Community / service updates', openContact:'Open', join:'Join', footerIdentity:'Independent multi-platform trading rebate service. Not the official website of any trading platform.', risk:'CFDs, FX and other leveraged products are high risk and may cause rapid losses. This site does not provide personal financial advice. Platform names and marks are used only for identification.', lotWord:'lot',
    accounts:{STD:'STD · Standard · $20/lot',PM:'PM · Premium · $15/lot',DC:'DC · Bitcoin · $10/lot',PRO:'PRO · Professional · $10/lot',RAW07:'RAW07 · ECN · $2–3.5/lot'}
  };

  const ZH = {
    ...EN,
    brandSub:'满返网', apply:'提交申请', navRebate:'TMGM返佣', navAgent:'TMGM代理', navRates:'返佣标准', navCalc:'返佣计算器', navContact:'联系我们', tickerTitle:'每日 Top IB', tickerNote:'历史返佣表现', heroKicker:'TMGM REBATE · INDEPENDENT SERVICE', heroTitle:'TMGM交易返佣，\n让每一手交易成本更低', heroDesc:'满返网为 TMGM 交易者提供透明返佣服务，将我们收到并属于客户的合资格返佣 100% 返还；不额外克扣，不额外加点差。', viewRates:'查看TMGM返佣方案', applyNow:'申请TMGM代理/客户', metric1:'返还我们收到的合资格返佣，不额外抽成', metricPer:'/手', metric2:'TMGM黄金标准账户返佣', metricHighlight:'Highest rebate online', metric3:'额外点差加价',
    whoTitle:'我们是谁？', whoDesc:'我们不是交易平台。我们做一件事：让原本存在于中间层的返佣，更透明地回到交易者手里。', missionTitle:'使命', missionText:'减少中间成本，让返佣结构更透明。', taskTitle:'任务', taskText:'把我们收到的合资格返佣 100% 返还给客户。', serviceTitle:'服务', serviceText:'申请、资格核对、后续跟进，一条线完成。', aboutLink:'了解满返网 →',
    rebateTitle:'什么是返佣？', rebateDesc:'交易商收取的交易成本中，有一部分会以佣金形式返还。这部分本可返给交易用户，或返给负责开发与服务客户的 IB，不应再被中间环节克扣。', story1t:'交易商收取交易成本', story1d:'用户按照平台原有账户与交易条件正常交易。', story2t:'产生可返还的佣金', story2d:'交易商按账户组别和合资格交易手数计算。', story3t:'返给应得的一方', story3d:'合资格部分返还给用户，或负责开发客户的 IB，不被中间环节额外克扣。',
    howTitle:'返佣（返现）如何运行？', howDesc:'从开户到出金，整个流程分成 5 步。',
    flow1t:'创建并验证平台账户', flow1d:'创建新的平台账户，并完成身份验证。',
    flow2t:'在本网站申请权限', flow2d:'在满返网提交返佣权限申请。',
    flow3t:'权限通过后正常交易', flow3d:'权限审核通过以后，按照对应账户组别正常交易。',
    flow4t:'返佣自动进入交易账户', flow4d:'符合条件的返佣会自动返到平台的交易账户内。',
    flow5t:'按需要选择渠道出金', flow5d:'可从平台交易账户按需要出金，支持银行卡及主流加密渠道；具体可用方式以平台、账户和地区实际开放为准。',
    platformTitle:'我们合作的平台', platformDesc:'先看平台，再看监管，再决定进入哪个返佣方案。', live:'已上线', soon:'即将上线', tmgmTitle:'澳洲起家的多监管 CFD 经纪商', tmgmReg:'集团在多个司法辖区持牌；实际开户实体与监管以注册页面为准。', ecTitle:'多实体全球 CFD 经纪商', ecReg:'官方披露包括澳洲、新西兰、南非与塞舌尔等实体监管。', icTitle:'Raw Spread / ECN 型 CFD 经纪商', icReg:'IC Markets Global 的 Raw Trading Ltd 受塞舌尔 FSA 监管。', exTitle:'全球多监管衍生品经纪商', exReg:'集团持有多地牌照；不同实体的零售服务范围不同。', viewRatesSmall:'查看返佣', openTMGM:'开设 TMGM 账户', regDetails:'监管详情 ↗', platformNote:'监管信息仅用于识别平台实体。实际适用监管取决于注册地区与最终开户实体。',
    livePlan:'TMGM · LIVE · 100% 满返', ratesTitle:'TMGM 返佣标准', ratesDesc:'标准账户黄金返佣 $20 / 手。', accountType:'账户类型', standard:'标准账户', premium:'高级账户', bitcoinAcc:'比特账户', pro:'专业账户', gold:'黄金', forex:'外汇', bitcoin:'比特币', highestOnline:'全网最高返佣', perLot:'/ 手', spread32:'参考点差 32', spread27:'参考点差 27', spread22:'参考点差 22', spread16:'参考点差 16', spread10:'参考点差 10', spread13:'参考点差 13', spread7:'参考点差 7', spread14:'参考点差 14', spread25:'参考点差 25', rawGold:'参考点差 9 · 手续费 5', rawFx:'参考点差 0 · 手续费 7', tableFoot:'以 1 标准手为口径。返佣资格、最终金额、点差与成交条件以实际账户组别、成交记录及平台审核为准。', proofNote:'“Highest rebate online / 全网最高返佣”基于 2026-08-10 对公开可见 TMGM 客户返佣页面的比较；公开费率可能变化。',
    calcTitle:'黄金返佣计算器', calcDesc:'选择 TMGM 账户类型和每笔手数，快速估算这一笔黄金交易的返佣。', yourTrade:'你的交易', chooseAccount:'账户类型', lotSize:'这一笔交易多少手？', calcHint:'只计算黄金返佣。点差、滑点、隔夜费等不计入本计算器。', estimated:'预计这一笔返佣', rateLabel:'返佣标准', feeLabel:'表内手续费参考', netFeeLabel:'RAW07 返佣后手续费参考', calcLegal:'计算结果基于本站当前返佣表，仅作简单估算，不是平台账单、交易建议或收益保证。',
    whyTitle:'为什么和我们合作？', whyDesc:'核心很简单：返得更多、规则更透明、交易条件不变。', why0t:'Highest rebate online', why0d:'公开返佣页面中常见约 $18–18.4/手；Max Rebate 标准账户黄金提供 $20/手。', why0c:'公开比较：$18–18.4 → $20 / 手', why1t:'不克扣合资格返佣', why1d:'我们收到的可返还部分，100%返给客户。', why2t:'无隐藏点差加价', why2d:'不因为使用返佣服务而额外提高点差。', why3t:'交易条件保持不变', why3d:'账户和执行条件仍按对应平台与账户组别运行。', why4t:'申请成功后人工跟进', why4d:'可选择与对应客户经理继续处理后续事项。', ctaTitle:'准备好开始？', ctaDesc:'先提交申请，我们会根据账户情况处理返佣资格。', contact:'联系我们',
    faqDesc:'只保留最常见的问题，更具体的问题可以直接联系我们。', faq1q:'返佣会影响我的点差或交易条件吗？', faq1a:'按满返网当前方案，不因为返佣服务额外加点差；实际交易条件仍由平台、账户组别和市场环境决定。',
    faq2q:'“100%返佣”是什么意思？', faq2a:'100% 指我们在实际收到券商返佣后，把其中属于客户的合资格返佣部分 100% 返还给客户。点差属于固定的交易成本，无法返还。',
    faq3q:'已有 TMGM 账户还能申请吗？', faq3a:'可以先提交查询。能否调整归属、转组或开启返佣，需要按平台规则人工确认。',
    faq4q:'返佣什么时候到账？', faq4a:'正常情况下，实际到账时间为 1 个工作日。例如周一关单，周二即可到账；特殊情况除外。',
    faq5q:'网站会要求我的交易密码吗？', faq5a:'不会。不要提交交易密码、投资者密码、验证码、银行卡密码或证件图片。', faq6q:'返佣是不是稳赚？', faq6a:'不是。返佣只能抵减部分符合条件的交易成本，不降低市场风险，也不保证盈利。',
    faq7q:'代理有什么权限？', faq7a:'代理权限开通后，可以获得专属的开户链接和邀请码用于展业。代理返佣只和客户的账户类别、交易标的、合资格交易手数有关。客户账户的收益或亏损与代理收入无关。',
    contactTitle:'联系我们', contactDesc:'返佣申请、老账户查询、IB合作或后续跟进，可以直接通过以下渠道联系。', contactUse:'返佣申请 / 账户查询', communityUse:'社群 / 服务更新', openContact:'打开', join:'加入', footerIdentity:'独立多平台交易返佣服务，并非任何交易平台的官方网站。', risk:'CFD、外汇及其他杠杆产品具有高风险，可能导致快速亏损。本网站不提供个人投资建议。平台名称和标识仅用于识别相关产品。', lotWord:'手',
    accounts:{STD:'STD · 标准账户 · $20/手',PM:'PM · 高级账户 · $15/手',DC:'DC · 比特账户 · $10/手',PRO:'PRO · 专业账户 · $10/手',RAW07:'RAW07 · ECN · $2–3.5/手'}
  };

  const ZHT = {
    ...EN,
    brandSub:'滿返網', apply:'提交申請', navRebate:'TMGM返佣', navAgent:'TMGM代理', navRates:'返佣標準', navCalc:'返佣計算器', navContact:'聯絡我們', tickerTitle:'每日 Top IB', tickerNote:'歷史返佣表現', heroKicker:'TMGM REBATE · INDEPENDENT SERVICE', heroTitle:'TMGM交易返佣，\n讓每一手交易成本更低', heroDesc:'滿返網為 TMGM 交易者提供透明返佣服務，將我們收到並屬於客戶的合資格返佣 100% 返還；不額外克扣，不額外加點差。', viewRates:'查看TMGM返佣方案', applyNow:'申請TMGM代理／客戶', metric1:'返還我們收到的合資格返佣，不額外抽成', metricPer:'/手', metric2:'TMGM黃金標準帳戶返佣', metricHighlight:'Highest rebate online', metric3:'額外點差加價',
    whoTitle:'我們是誰？', whoDesc:'我們不是交易平台。我們讓返佣更透明地回到交易者手中。', missionTitle:'使命', missionText:'減少中間成本，讓返佣結構更透明。', taskTitle:'任務', taskText:'把合資格返佣 100% 返還給客戶。', serviceTitle:'服務', serviceText:'申請、資格核對與後續跟進。', aboutLink:'了解滿返網 →', rebateTitle:'甚麼是返佣？', rebateDesc:'交易商收取的交易成本中，有一部分會以佣金形式返還。這部分本可返給交易用戶，或返給負責開發與服務客戶的 IB，不應再被中間環節克扣。', story1t:'正常交易', story1d:'帳戶、平台及下單方式照常。', story2t:'產生合資格返佣', story2d:'按帳戶組別及有效交易記錄計算。', story3t:'返佣回到你', story3d:'不額外克扣可返還部分。',
    howTitle:'返佣（返現）如何運行？', howDesc:'從開戶到出金，整個流程分成 5 步。', flow1t:'建立並驗證平台帳戶', flow1d:'建立新的平台帳戶，並完成身份驗證。', flow2t:'在本網站申請權限', flow2d:'在滿返網提交返佣權限申請。', flow3t:'權限通過後正常交易', flow3d:'審核通過後，按照對應帳戶組別正常交易。', flow4t:'返佣自動進入交易帳戶', flow4d:'符合條件的返佣會自動返到平台交易帳戶。', flow5t:'按需要選擇渠道出金', flow5d:'可使用銀行卡及支援的加密渠道出金；實際可用方式以平台、帳戶與地區為準。',
    platformTitle:'我們合作的平台', platformDesc:'先看平台，再看監管，再選擇返佣方案。', live:'已上線', soon:'即將上線', viewRatesSmall:'查看返佣', openTMGM:'開設 TMGM 帳戶', regDetails:'監管詳情 ↗', livePlan:'TMGM · LIVE · 100% 滿返', ratesTitle:'TMGM 返佣標準', ratesDesc:'標準帳戶黃金返佣 $20 / 手。', accountType:'帳戶類型', standard:'標準帳戶', premium:'高級帳戶', bitcoinAcc:'比特帳戶', pro:'專業帳戶', gold:'黃金', forex:'外匯', bitcoin:'比特幣', highestOnline:'全網最高返佣', perLot:'/ 手', calcTitle:'黃金返佣計算器', calcDesc:'選擇帳戶類型及每筆手數，快速估算返佣。', yourTrade:'你的交易', chooseAccount:'帳戶類型', lotSize:'這一筆交易多少手？', estimated:'預計這一筆返佣', rateLabel:'返佣標準',
    whyTitle:'為甚麼和我們合作？', whyDesc:'返得更多、規則更透明、交易條件不變。', why1t:'不克扣合資格返佣', why1d:'可返還部分 100% 返給客戶。', why2t:'無隱藏點差加價', why2d:'不因返佣服務額外提高點差。', why3t:'交易條件保持不變', why3d:'按平台及帳戶組別運行。', why4t:'成功後人工跟進', why4d:'可與對應客戶經理繼續處理後續事項。', ctaTitle:'準備好開始？', ctaDesc:'先提交申請，再按帳戶情況處理資格。', contact:'聯絡我們',
    faqDesc:'保留最常見問題，更具體問題可直接聯絡。', faq1q:'返佣會影響點差嗎？', faq1a:'目前方案不因返佣服務額外加點差。', faq2q:'100%返佣是甚麼？', faq2a:'100% 指我們在實際收到券商返佣後，把屬於客戶的合資格返佣部分 100% 返還給客戶。點差屬於固定交易成本，無法返還。', faq3q:'舊 TMGM 帳戶可以申請嗎？', faq3a:'可先查詢，最終按平台規則確認。', faq4q:'返佣何時到帳？', faq4a:'正常情況下約 1 個工作日。例如週一關單，週二即可到帳；特殊情況除外。', faq5q:'會要求交易密碼嗎？', faq5a:'不會，請勿提交密碼、驗證碼或證件圖片。', faq6q:'返佣是否等於穩賺？', faq6a:'不是。返佣不降低市場風險，也不保證盈利。', faq7q:'代理有甚麼權限？', faq7a:'代理權限開通後，可獲得專屬開戶連結和邀請碼展業。代理返佣只與客戶帳戶類別、交易標的和合資格交易手數有關；客戶帳戶盈虧與代理收入無關。',
    contactTitle:'聯絡我們', contactDesc:'返佣申請、舊帳戶查詢、IB合作或後續跟進，可透過以下渠道聯絡。', contactUse:'返佣申請 / 帳戶查詢', communityUse:'社群 / 服務更新', openContact:'打開', join:'加入', footerIdentity:'獨立多平台交易返佣服務，並非任何交易平台官方網站。', risk:'CFD、外匯及其他槓桿產品具有高風險。本網站不提供個人投資建議。', lotWord:'手', accounts:{STD:'STD · 標準帳戶 · $20/手',PM:'PM · 高級帳戶 · $15/手',DC:'DC · 比特帳戶 · $10/手',PRO:'PRO · 專業帳戶 · $10/手',RAW07:'RAW07 · ECN · $2–3.5/手'}
  };

  const MS = {...EN,
    brandSub:'TRADING CASHBACK', apply:'Mohon', navRebate:'Rebat TMGM', navAgent:'Rakan TMGM', navRates:'Kadar rebat', navCalc:'Kalkulator rebat', navContact:'Hubungi kami', tickerTitle:'IB Harian Teratas', tickerNote:'Rekod rebat sejarah', heroKicker:'TMGM REBATE · INDEPENDENT SERVICE', heroTitle:'Rebat TMGM.\nKurangkan kos setiap lot.', heroDesc:'Max Rebate menyediakan perkhidmatan rebat TMGM yang telus dan memulangkan 100% bahagian rebat pelanggan yang layak kami terima, tanpa potongan tambahan atau markup spread.', viewRates:'Lihat pelan rebat TMGM', applyNow:'Mohon sebagai pelanggan / ejen', metricHighlight:'Highest rebate online', rebateTitle:'Apakah itu rebat?', rebateDesc:'Sebahagian kos dagangan yang dikenakan broker boleh dibayar semula sebagai komisen. Bahagian ini boleh dikembalikan kepada pedagang atau IB yang membangunkan dan menyokong pelanggan, tanpa dipotong oleh orang tengah.', story1t:'Kos dagangan dikenakan', story1d:'Berdagang dengan akaun dan syarat platform yang biasa.', story2t:'Komisen boleh pulang dijana', story2d:'Dikira mengikut kumpulan akaun dan volum dagangan layak.', story3t:'Dibayar kepada pihak yang berhak', story3d:'Bahagian layak dipulangkan kepada pelanggan atau IB tanpa potongan orang tengah.', howTitle:'Bagaimana rebat berfungsi', howDesc:'Dari pembukaan akaun hingga pengeluaran, proses ini mempunyai lima langkah.', flow1t:'Buka dan sahkan akaun', flow1d:'Buka akaun platform baharu dan lengkapkan pengesahan identiti.', flow2t:'Mohon akses rebat', flow2d:'Hantar permohonan akses rebat melalui Max Rebate.', flow3t:'Trade seperti biasa', flow3d:'Selepas diluluskan, berdagang seperti biasa.', flow4t:'Rebat dikreditkan automatik', flow4d:'Rebat layak dikreditkan terus ke akaun dagangan platform.', flow5t:'Keluarkan melalui saluran pilihan', flow5d:'Gunakan kaedah yang tersedia seperti kad bank atau saluran kripto yang disokong. Ketersediaan bergantung pada platform dan rantau.', faq2a:'Selepas kami menerima rebat broker, 100% bahagian rebat pelanggan yang layak dipulangkan kepada pelanggan. Spread ialah kos dagangan tetap dan tidak boleh dipulangkan.', faq4a:'Biasanya dalam satu hari bekerja. Contohnya, posisi ditutup pada Isnin boleh dikreditkan pada Selasa. Kes luar biasa mungkin mengambil masa lebih lama.', faq7q:'Apakah akses yang diterima ejen?', faq7a:'Selepas akses ejen diaktifkan, ejen menerima pautan pembukaan akaun dan kod jemputan khusus. Pendapatan ejen bergantung pada kumpulan akaun pelanggan, instrumen dan volum layak, bukan untung atau rugi akaun pelanggan.'
  };

  const TH = {...EN,
    brandSub:'TRADING CASHBACK', apply:'สมัคร', navRebate:'รีเบต TMGM', navAgent:'พาร์ทเนอร์ TMGM', navRates:'อัตรารีเบต', navCalc:'คำนวณรีเบต', navContact:'ติดต่อเรา', tickerTitle:'Top IB รายวัน', tickerNote:'ประวัติรีเบต', heroKicker:'TMGM REBATE · INDEPENDENT SERVICE', heroTitle:'รีเบต TMGM\nลดต้นทุนในทุกล็อต', heroDesc:'Max Rebate ให้บริการรีเบต TMGM อย่างโปร่งใส และคืนส่วนรีเบตของลูกค้าที่มีสิทธิ์ซึ่งเราได้รับ 100% โดยไม่มีการหักเพิ่มหรือเพิ่มสเปรด', viewRates:'ดูแผนรีเบต TMGM', applyNow:'สมัครเป็นลูกค้า / ตัวแทน', metricHighlight:'Highest rebate online', rebateTitle:'รีเบตคืออะไร?', rebateDesc:'ต้นทุนการเทรดส่วนหนึ่งที่โบรกเกอร์เรียกเก็บอาจจ่ายคืนเป็นค่าคอมมิชชัน ส่วนนี้สามารถคืนให้เทรดเดอร์หรือ IB ที่พัฒนาและดูแลลูกค้า โดยไม่ควรถูกคนกลางหักเพิ่ม', story1t:'เกิดต้นทุนการเทรด', story1d:'เทรดด้วยบัญชีและเงื่อนไขปกติของแพลตฟอร์ม', story2t:'เกิดค่าคอมมิชชันที่คืนได้', story2d:'คำนวณตามกลุ่มบัญชีและปริมาณเทรดที่มีสิทธิ์', story3t:'คืนแก่ผู้มีสิทธิ์', story3d:'คืนส่วนที่มีสิทธิ์ให้ลูกค้าหรือ IB โดยไม่มีการหักจากคนกลาง', howTitle:'รีเบตทำงานอย่างไร', howDesc:'ตั้งแต่เปิดบัญชีจนถึงถอนเงิน มีทั้งหมด 5 ขั้นตอน', flow1t:'เปิดและยืนยันบัญชี', flow1d:'เปิดบัญชีแพลตฟอร์มใหม่และยืนยันตัวตนให้เสร็จ', flow2t:'สมัครสิทธิ์รีเบต', flow2d:'ส่งคำขอสิทธิ์รีเบตผ่าน Max Rebate', flow3t:'เทรดตามปกติ', flow3d:'หลังได้รับอนุมัติ ให้เทรดตามปกติ', flow4t:'รีเบตเข้าบัญชีอัตโนมัติ', flow4d:'รีเบตที่มีสิทธิ์จะเข้าบัญชีเทรดของแพลตฟอร์มโดยอัตโนมัติ', flow5t:'ถอนผ่านช่องทางที่ต้องการ', flow5d:'ใช้วิธีที่แพลตฟอร์มรองรับ เช่น บัตรธนาคารหรือช่องทางคริปโต ทั้งนี้ขึ้นอยู่กับแพลตฟอร์มและภูมิภาค', faq2a:'หลังจากเราได้รับรีเบตจากโบรกเกอร์ เราจะคืนส่วนรีเบตที่ลูกค้ามีสิทธิ์ได้รับ 100% ส่วนสเปรดเป็นต้นทุนการเทรดคงที่และไม่สามารถคืนได้', faq4a:'โดยปกติใช้เวลา 1 วันทำการ เช่น ปิดรายการวันจันทร์ รีเบตสามารถเข้าวันอังคารได้ กรณีพิเศษอาจใช้เวลานานกว่า', faq7q:'ตัวแทนได้รับสิทธิ์อะไรบ้าง?', faq7a:'เมื่อเปิดสิทธิ์ตัวแทนแล้ว จะได้รับลิงก์เปิดบัญชีและรหัสเชิญเฉพาะ รายได้ตัวแทนขึ้นอยู่กับประเภทบัญชี สินค้าที่เทรด และปริมาณที่มีสิทธิ์ ไม่ขึ้นอยู่กับกำไรหรือขาดทุนของบัญชีลูกค้า'
  };

  Object.assign(EN, {
    heroDesc:'Max Rebate returns 100% of the rebate we receive to clients. No extra deduction and no added spread markup.'
  });
  Object.assign(ZH, {
    heroDesc:'',
    metricHighlight:'全网最高返佣',
    why0t:'全网最高返佣',
    rebateDesc:'返佣，就是从交易平台收取的点差或手续费中，额外返还给客户的一部分资金。它能直接抵减交易支出、降低交易成本，却很容易被忽略。很多新手不仅承担较高的点差成本——例如黄金每手点差可能达到 30–80 美元——还没有享受到应有的返佣。交易次数和手数累积后，这部分成本会形成很大的长期损耗。',
    flow5d:'可从平台交易账户按需要出金，支持银行卡及主流加密渠道。'
  });
  Object.assign(ZHT, {
    heroDesc:'',
    metricHighlight:'全網最高返佣',
    why0t:'全網最高返佣',
    rebateDesc:'返佣，就是從交易平台收取的點差或手續費中，額外返還給客戶的一部分資金。它能直接抵減交易支出、降低交易成本，卻很容易被忽略。很多新手不僅承擔較高的點差成本——例如黃金每手點差可能達到 30–80 美元——還沒有享受到應有的返佣。交易次數和手數累積後，這部分成本會形成很大的長期損耗。',
    flow5d:'可從平台交易帳戶按需要出金，支援銀行卡及主流加密渠道。'
  });
  Object.assign(MS, {
    heroDesc:'Max Rebate mengembalikan 100% rebat yang kami terima kepada pelanggan. Tiada potongan tambahan dan tiada markup spread tambahan.'
  });
  Object.assign(TH, {
    heroDesc:'Max Rebate คืนรีเบตที่เราได้รับให้ลูกค้า 100% โดยไม่มีการหักเพิ่มและไม่มีการเพิ่มสเปรด'
  });

  const T = {'zh-CN':ZH,'zh-TW':ZHT,en:EN,ms:MS,th:TH};
  const accountData = {STD:{min:20,max:20,fee:null},PM:{min:15,max:15,fee:null},DC:{min:10,max:10,fee:null},PRO:{min:10,max:10,fee:null},RAW07:{min:2,max:3.5,fee:5}};
  let currentLang='en';
  const langEl=document.getElementById('lang');
  const accountSelect=document.getElementById('accountSelect');
  const lotInput=document.getElementById('lotInput');
  const cashbackValue=document.getElementById('cashbackValue');
  const cashbackRule=document.getElementById('cashbackRule');
  const rateValue=document.getElementById('rateValue');
  const feeValue=document.getElementById('feeValue');
  const netFeeValue=document.getElementById('netFeeValue');

  const icons={
    account:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c.7-4 3.3-6 7-6s6.3 2 7 6"/></svg>',
    verify:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2L15.8 9"/></svg>',
    trade:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18V9m5 9V5m5 13v-7m5 7V3"/><path d="m3 14 5-4 5 2 7-7"/></svg>',
    wallet:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h14a2 2 0 0 1 2 2v10H5a2 2 0 0 1-2-2V7a3 3 0 0 1 3-3h10"/><path d="M16 11h4v4h-4a2 2 0 1 1 0-4Z"/></svg>',
    withdraw:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16M6 7l6-4 6 4M6 10v8m4-8v8m4-8v8m4-8v8M4 21h16"/><path d="m15 14 3 3 3-3"/></svg>'
  };

  function injectFlowAndFaq(){
    const style=document.createElement('style');
    style.textContent='.flow{grid-template-columns:repeat(5,minmax(0,1fr))!important}.flow-card{position:relative}.flow-icon{width:44px!important;height:44px!important;border-radius:13px!important;background:linear-gradient(135deg,#e7fbff,#eaf2ff)!important;color:#0b62a4!important}.flow-icon svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.flow-step-no{position:absolute;right:14px;top:14px;font-size:10px;font-weight:950;color:#9aa8b8;letter-spacing:.08em}@media(max-width:1000px){.flow{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:760px){.flow{grid-template-columns:1fr!important}}';
    document.head.appendChild(style);
    const flow=document.querySelector('#how .flow');
    if(flow){
      const items=[['account','flow1t','flow1d'],['verify','flow2t','flow2d'],['trade','flow3t','flow3d'],['wallet','flow4t','flow4d'],['withdraw','flow5t','flow5d']];
      flow.innerHTML=items.map((x,i)=>`<article class="flow-card"><span class="flow-step-no">0${i+1}</span><div class="flow-icon">${icons[x[0]]}</div><h3 data-i18n="${x[1]}"></h3><p data-i18n="${x[2]}"></p></article>`).join('');
    }
    const faq=document.querySelector('#faq .container');
    if(faq && !faq.querySelector('[data-i18n="faq7q"]')){
      const d=document.createElement('details');
      d.innerHTML='<summary data-i18n="faq7q"></summary><p data-i18n="faq7a"></p>';
      faq.appendChild(d);
    }
  }

  function injectDesktopAndTableFX(){
    const style=document.createElement('style');
    style.textContent=`
      @media (min-width:1280px){
        .container{width:min(1240px,90vw)!important}
        .hero-grid{gap:40px!important;grid-template-columns:minmax(0,1.05fr) minmax(390px,.95fr)!important}
        .rebate-shell{padding:28px 30px!important}
        .calc-layout{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr)!important;gap:22px!important}
      }
      @media (min-width:1700px){.container{width:min(1240px,86vw)!important}}
      .rebate-table tbody td,.rebate-table tbody th{position:relative;isolation:isolate;transition:box-shadow .16s ease,filter .16s ease;background-clip:padding-box}
      .rebate-table tbody td::after,.rebate-table tbody th::after{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;opacity:0;transition:opacity .14s ease;background:radial-gradient(circle 115px at var(--mx,50%) var(--my,50%),rgba(64,224,246,.38) 0%,rgba(22,184,215,.17) 34%,rgba(22,184,215,0) 72%)}
      .rebate-table tbody td:hover::after,.rebate-table tbody th:hover::after{opacity:1}
      .rebate-table tbody td:hover,.rebate-table tbody th:hover{z-index:5;box-shadow:inset 0 0 0 2px rgba(22,184,215,.68),0 8px 24px rgba(8,84,139,.16);filter:brightness(1.035)}
      .rebate-table tbody td>* ,.rebate-table tbody th>*{position:relative;z-index:1}
      .top-rebate:hover{box-shadow:inset 0 0 0 2px #f4b942,0 8px 28px rgba(244,185,66,.24)!important}
    `;
    document.head.appendChild(style);
    document.querySelectorAll('.rebate-table tbody td,.rebate-table tbody th').forEach((cell)=>{
      cell.addEventListener('pointermove',(e)=>{
        const r=cell.getBoundingClientRect();
        cell.style.setProperty('--mx',`${e.clientX-r.left}px`);
        cell.style.setProperty('--my',`${e.clientY-r.top}px`);
      });
    });
  }

  function money(v){return Number(v).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}
  function renderAccountOptions(){if(!accountSelect)return;const keep=accountSelect.value||'STD';accountSelect.innerHTML=Object.keys(accountData).map(k=>`<option value="${k}">${(T[currentLang].accounts||EN.accounts)[k]}</option>`).join('');accountSelect.value=accountData[keep]?keep:'STD'}
  function updateCalculator(){if(!accountSelect||!lotInput||!cashbackValue)return;const code=accountSelect.value||'STD',d=accountData[code],lots=Math.max(0,Number(lotInput.value)||0),min=d.min*lots,max=d.max*lots,rateText=d.min===d.max?'$'+d.min:'$'+d.min+'–'+d.max,lotWord=T[currentLang].lotWord||EN.lotWord;cashbackValue.innerHTML='<small>USD</small> '+(min===max?'$'+money(min):'$'+money(min)+'–$'+money(max));cashbackRule.textContent=`${code} · ${rateText} / ${lotWord} × ${lots} ${lotWord}`;rateValue.textContent=`${rateText} / ${lotWord}`;if(d.fee==null){feeValue.textContent='—';netFeeValue.textContent='—'}else{feeValue.textContent='$'+money(d.fee*lots);netFeeValue.textContent='$'+money((d.fee-d.max)*lots)+'–$'+money((d.fee-d.min)*lots)}}
  function setLang(lang){if(!T[lang])lang='en';currentLang=lang;localStorage.setItem('tmgm-lang',lang);document.documentElement.lang=lang;if(langEl)langEl.value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;const value=T[lang][key]!==undefined?T[lang][key]:EN[key];if(value===undefined)return;if(key==='heroTitle')el.innerHTML=value.replace('\n','<br>');else el.textContent=value});renderAccountOptions();updateCalculator()}

  injectFlowAndFaq();
  injectDesktopAndTableFX();
  if(langEl)langEl.addEventListener('change',e=>setLang(e.target.value));
  if(accountSelect)accountSelect.addEventListener('change',updateCalculator);
  if(lotInput)lotInput.addEventListener('input',updateCalculator);
  const saved=localStorage.getItem('tmgm-lang'),browser=(navigator.language||'en').toLowerCase();
  setLang(saved||(browser.startsWith('zh-tw')||browser.startsWith('zh-hk')?'zh-TW':browser.startsWith('zh')?'zh-CN':browser.startsWith('ms')?'ms':browser.startsWith('th')?'th':'en'));
})();
