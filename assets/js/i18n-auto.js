/**
 * i18n Debug & Auto-reapply on language change
 * Monitors translation system and reapplies when language changes
 */

// Count elements with data-i18n
const countTranslatableElements = () => {
  const elements = document.querySelectorAll('[data-i18n]');
  console.log(`📊 Elementi traducibili trovati: ${elements.length}`);
  return elements.length;
};

// Wait for i18n to be ready
window.addEventListener('i18nReady', (e) => {
  console.log(`✅ i18n PRONTO - Lingua attiva: ${e.detail.language.toUpperCase()}`);
  countTranslatableElements();
});

// Listen for language changes
window.addEventListener('languageChanged', (e) => {
  console.log(`🔄 Lingua cambiata in: ${e.detail.language.toUpperCase()}`);
  setTimeout(() => {
    countTranslatableElements();
  }, 100);
});

// Initial check
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 i18n Debug System attivo');
  
  // Check if i18n instance exists
  if (window.i18n) {
    console.log('✅ i18n istanza disponibile');
  } else {
    console.error('❌ i18n istanza NON disponibile');
  }
});

