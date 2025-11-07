/**
 * i18n Debug & Auto-reapply on language change
 * Monitors translation system and reapplies when language changes
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 i18n Debug System attivo');
  
  // Count elements with data-i18n
  const countTranslatableElements = () => {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`📊 Elementi traducibili trovati: ${elements.length}`);
    return elements.length;
  };
  
  // Initial count
  setTimeout(() => {
    countTranslatableElements();
  }, 500);
  
  // Listen for language changes and re-count
  window.addEventListener('languageChanged', (e) => {
    console.log(`🔄 Lingua cambiata in: ${e.detail.language}`);
    setTimeout(() => {
      countTranslatableElements();
    }, 100);
  });
  
  // Debug: log when i18n is ready
  if (window.i18n) {
    console.log('✅ Sistema i18n caricato correttamente');
  } else {
    console.error('❌ Sistema i18n NON caricato');
  }
});

