(() => {
  "use strict";

  function applySiteLinks(root = document) {
    const config = window.MAX_REBATE_CONFIG;
    if (!config) throw new Error("Missing MAX_REBATE_CONFIG");

    root.querySelectorAll(".referral").forEach((link) => {
      link.href = config.referralUrl;
    });

    root.querySelectorAll("[data-contact]").forEach((link) => {
      const href = config.contacts[link.dataset.contact];
      if (!href) return;
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener";
    });
  }

  window.applyMaxRebateLinks = applySiteLinks;
  applySiteLinks();
})();
