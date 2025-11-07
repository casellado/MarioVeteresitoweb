/**
 * Auto-apply i18n attributes on page load
 * This script adds data-i18n attributes to common elements
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 Applicazione automatica attributi i18n...');
  
  // Navigation links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navTexts = ['nav.home', 'nav.artworks', 'nav.technique', 'nav.about', 'nav.contact'];
  navLinks.forEach((link, index) => {
    if (index < navTexts.length && !link.hasAttribute('data-i18n')) {
      const originalText = link.textContent.trim();
      link.setAttribute('data-i18n', navTexts[index]);
      link.setAttribute('data-original', originalText);
    }
  });
  
  // Trigger i18n update after adding attributes
  if (window.i18n) {
    setTimeout(() => {
      window.i18n.applyTranslations();
      console.log('✅ Traduzioni ri-applicate dopo aggiunta attributi');
    }, 100);
  }
});

