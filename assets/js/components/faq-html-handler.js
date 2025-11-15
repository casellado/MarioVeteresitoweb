/**
 * FAQ HTML Handler
 * Gestisce le FAQ con contenuto HTML complesso (FAQ 7, 8, 9, 11)
 * Usa innerHTML per renderizzare il contenuto tradotto
 */

(function() {
  'use strict';

  const FAQ_WITH_HTML = ['7', '8', '9', '11'];

  function renderFAQHTML(faqId, lang) {
    const collapseId = `collapse${faqId}`;
    const accordionBody = document.querySelector(`#${collapseId} .accordion-body`);
    
    if (!accordionBody) return;

    const translationKey = `faq.a${faqId}`;
    const translation = window.i18n?.t(translationKey, lang);

    if (translation && translation !== translationKey) {
      accordionBody.innerHTML = translation;
    }
  }

  function applyAllFAQHTML(lang) {
    FAQ_WITH_HTML.forEach(id => {
      renderFAQHTML(id, lang);
    });
  }

  function init() {
    // Aspetta che i18n sia pronto
    function waitForI18n() {
      if (window.i18n && window.i18n.translations) {
        const currentLang = window.i18n.getCurrentLanguage();
        applyAllFAQHTML(currentLang);
        
        // Ascolta cambio lingua
        window.addEventListener('languageChanged', (e) => {
          applyAllFAQHTML(e.detail.language);
        });
      } else {
        setTimeout(waitForI18n, 50);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', waitForI18n);
    } else {
      waitForI18n();
    }
  }

  init();
})();

