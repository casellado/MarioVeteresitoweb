/**
 * Artwork Internationalization Helper
 * Gestisce traduzioni centralizzate per le opere d'arte
 * Mario Vetere - Sistema Unificato Traduzioni
 */

(function() {
  'use strict';

  /**
   * Ottiene il valore tradotto di un campo
   * @param {*} field - Campo che può essere string o object con traduzioni
   * @param {string} fallbackLang - Lingua di fallback (default: 'it')
   * @returns {string} - Testo tradotto
   */
  function getTranslatedField(field, fallbackLang = 'it') {
    // Se non c'è i18n, usa italiano
    const currentLang = (window.i18n && window.i18n.currentLang) || fallbackLang;
    
    // Se è una stringa, restituiscila direttamente
    if (typeof field === 'string') {
      return field;
    }
    
    // Se è null o undefined
    if (!field) {
      return '';
    }
    
    // Se è un oggetto con traduzioni
    if (typeof field === 'object') {
      // Prova lingua corrente
      if (field[currentLang]) {
        return field[currentLang];
      }
      
      // Fallback a lingua di fallback
      if (field[fallbackLang]) {
        return field[fallbackLang];
      }
      
      // Ultimo fallback: prima chiave disponibile
      const firstKey = Object.keys(field)[0];
      if (firstKey) {
        return field[firstKey];
      }
    }
    
    // Fallback finale
    return String(field);
  }

  /**
   * Ottiene opera tradotta completa
   * @param {Object} artwork - Oggetto opera
   * @returns {Object} - Opera con campi tradotti
   */
  function getTranslatedArtwork(artwork) {
    if (!artwork) return null;
    
    const translated = { ...artwork };
    
    // Traduci title
    if (artwork.title) {
      translated.title = getTranslatedField(artwork.title);
    }
    
    // Traduci description
    if (artwork.description) {
      translated.description = {
        short: getTranslatedField(artwork.description.short),
        full: getTranslatedField(artwork.description.full),
        technique: artwork.description.technique ? 
          getTranslatedField(artwork.description.technique) : 
          ''
      };
    }
    
    // Traduci SEO
    if (artwork.seo) {
      translated.seo = {
        metaTitle: getTranslatedField(artwork.seo.metaTitle),
        metaDescription: getTranslatedField(artwork.seo.metaDescription),
        keywords: getTranslatedField(artwork.seo.keywords)
      };
    }
    
    return translated;
  }

  /**
   * Aggiorna traduzioni quando cambia lingua
   * @param {Function} callback - Funzione da chiamare al cambio lingua
   */
  function onLanguageChange(callback) {
    if (typeof callback !== 'function') {
      console.error('❌ onLanguageChange richiede una funzione');
      return;
    }
    
    window.addEventListener('languageChanged', (event) => {
      const lang = event.detail ? event.detail.language : null;
      callback(lang);
    });
  }

  // Esponi funzioni globalmente
  window.ArtworkI18n = {
    getTranslatedField,
    getTranslatedArtwork,
    onLanguageChange,
    
    // Versione
    version: '1.0.0'
  };

  console.log('✅ ArtworkI18n Helper caricato (v' + window.ArtworkI18n.version + ')');

})();

