/**
 * Internationalization System (i18n)
 * Mario Vetere Marketplace
 * Supported languages: IT, EN, DE, FR, ES
 */

class I18n {
  constructor() {
    this.currentLang = 'it'; // Default language
    this.translations = {};
    this.supportedLanguages = ['it', 'en', 'de', 'fr', 'es'];
    this.init();
  }
  
  async init() {
    console.log('🌍 Inizializzazione sistema i18n...');
    
    // Get saved language from localStorage or browser
    this.currentLang = this.getSavedLanguage();
    
    // Load translations
    await this.loadTranslations(this.currentLang);
    
    // Apply translations
    this.applyTranslations();
    
    // Setup language selectors
    this.setupLanguageSelectors();
    
    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
    
    console.log(`✅ Sistema i18n pronto - Lingua: ${this.currentLang.toUpperCase()}`);
    
    // Dispatch ready event
    window.dispatchEvent(new CustomEvent('i18nReady', { 
      detail: { language: this.currentLang } 
    }));
  }
  
  getSavedLanguage() {
    // Check localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && this.supportedLanguages.includes(savedLang)) {
      return savedLang;
    }
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    if (this.supportedLanguages.includes(langCode)) {
      return langCode;
    }
    
    // Default to Italian
    return 'it';
  }
  
  async loadTranslations(lang) {
    try {
      const response = await fetch(`assets/data/translations/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load ${lang}.json`);
      }
      this.translations = await response.json();
      console.log(`📥 Traduzioni ${lang.toUpperCase()} caricate`);
    } catch (error) {
      console.error(`❌ Errore caricamento traduzioni ${lang}:`, error);
      // Fallback to Italian
      if (lang !== 'it') {
        await this.loadTranslations('it');
      }
    }
  }
  
  applyTranslations() {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      
      if (translation) {
        // Check if element has data-i18n-attr for attribute translation
        const attr = element.getAttribute('data-i18n-attr');
        
        if (attr) {
          // Translate attribute (e.g., placeholder, title, aria-label)
          element.setAttribute(attr, translation);
        } else {
          // Translate text content
          element.textContent = translation;
        }
      }
    });
    
    console.log(`✅ Traduzioni applicate: ${elements.length} elementi`);
  }
  
  getTranslation(key) {
    // Navigate nested object with dot notation
    // Example: "nav.home" -> translations.nav.home
    const keys = key.split('.');
    let value = this.translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`⚠️ Traduzione mancante: ${key}`);
        return null;
      }
    }
    
    return value;
  }
  
  async changeLang

uage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      console.error(`❌ Lingua non supportata: ${lang}`);
      return;
    }
    
    if (lang === this.currentLang) {
      return; // Already using this language
    }
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Load new translations
    await this.loadTranslations(lang);
    
    // Update current language
    this.currentLang = lang;
    
    // Apply translations
    this.applyTranslations();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active state in language selectors
    this.updateLanguageSelectors();
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: lang } 
    }));
    
    console.log(`✅ Lingua cambiata in: ${lang.toUpperCase()}`);
  }
  
  setupLanguageSelectors() {
    // Desktop language selector (dropdown)
    const desktopLinks = document.querySelectorAll('.language-selector a[data-lang]');
    desktopLinks.forEach(link => {
      const lang = link.getAttribute('data-lang');
      
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.changeLanguage(lang);
      });
    });
    
    // Mobile language selector
    const mobileLinks = document.querySelectorAll('.mobile-language-selector a[data-lang]');
    mobileLinks.forEach(link => {
      const lang = link.getAttribute('data-lang');
      
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.changeLanguage(lang);
      });
    });
    
    // Update initial active state
    this.updateLanguageSelectors();
  }
  
  updateLanguageSelectors() {
    // Remove all active classes
    document.querySelectorAll('.language-selector a, .mobile-language-selector a').forEach(link => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    });
    
    // Add active class to current language
    document.querySelectorAll(`a[data-lang="${this.currentLang}"]`).forEach(link => {
      link.classList.add('active');
      link.setAttribute('aria-current', 'true');
    });
  }
  
  // Utility method for dynamic translations in JavaScript
  t(key) {
    return this.getTranslation(key) || key;
  }
}

// Create global instance and make it available immediately
// Note: The init() is async, so translations will be applied after loading
const i18nInstance = new I18n();
window.i18n = i18nInstance;

// Mark as ready when init completes
console.log('⏳ i18n istanza creata, in attesa di inizializzazione...');

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
}

