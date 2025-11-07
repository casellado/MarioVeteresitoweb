/**
 * Auto-apply i18n attributes on page load
 * This script automatically translates key elements
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 Applicazione automatica i18n...');
  
  // Mapping: Testo Italiano → Chiave Traduzione
  const textMapping = {
    // Navigation
    'Home': 'nav.home',
    'Opere': 'nav.artworks',
    'Tecnica': 'nav.technique',
    'Chi Sono': 'nav.about',
    'Contatti': 'nav.contact',
    
    // Hero Section
    'Tecnica Brevettata': 'hero.subtitle',
    'Arte Contemporanea': 'hero.title',
    'Esplora le Opere': 'hero.cta_explore',
    'Scopri la Tecnica': 'hero.cta_technique',
    'Unico': 'hero.unique_badge',
    
    // Artworks Section
    'Opere Selezionate': 'artworks.featured_title',
    'Disponibile': 'artworks.available',
    'Venduta': 'artworks.sold',
    'In Evidenza': 'artworks.featured',
    'Acquista Ora': 'artworks.buy_now',
    'Scopri': 'artworks.details',
    'Vedi Tutte le Opere': 'artworks.view_all',
    
    // Contact
    'Mettiamoci in Contatto': 'contact.title',
    'Nome e Cognome': 'contact.name',
    'Email': 'contact.email',
    'Telefono': 'contact.phone',
    'Oggetto': 'contact.subject',
    'Messaggio': 'contact.message',
    'Invia Messaggio': 'contact.send',
    
    // Footer
    'Link Rapidi': 'footer.quick_links',
    'Contatti': 'footer.contact_info',
    'Seguici sui Social': 'footer.follow_us',
    
    // Common
    'Caricamento...': 'common.loading',
    'Chiudi': 'common.close',
    'Indietro': 'common.back',
    'Avanti': 'common.next',
    'Cerca': 'common.search',
    'Filtra': 'common.filter',
    'Ordina': 'common.sort'
  };
  
  // Function to apply i18n to elements
  function applyI18nToElements() {
    // Get all text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const nodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.nodeValue.trim().length > 0) {
        nodes.push(node);
      }
    }
    
    // Apply translations
    nodes.forEach(textNode => {
      const text = textNode.nodeValue.trim();
      const parent = textNode.parentElement;
      
      if (textMapping[text] && parent && !parent.hasAttribute('data-i18n')) {
        parent.setAttribute('data-i18n', textMapping[text]);
        parent.setAttribute('data-i18n-original', text);
      }
    });
    
    console.log(`✅ ${Object.keys(textMapping).length} mappature i18n disponibili`);
  }
  
  // Apply mappings
  applyI18nToElements();
  
  // Re-apply translations after adding attributes
  if (window.i18n) {
    setTimeout(() => {
      window.i18n.applyTranslations();
      console.log('✅ Traduzioni applicate automaticamente');
    }, 200);
  }
  
  // Listen for language changes and re-apply
  window.addEventListener('languageChanged', () => {
    console.log('🔄 Lingua cambiata, ri-applicazione traduzioni...');
  });
});

