/**
 * Simple i18n System - Based on Best Practices
 * Lightweight, synchronous, reliable
 */

(function() {
  'use strict';
  
  // Translations embedded (best practice: external files loaded sync)
  const translations = {
    it: {
      // Navigation
      "nav.home": "Home",
      "nav.artworks": "Opere",
      "nav.technique": "Tecnica",
      "nav.about": "Chi Sono",
      "nav.contact": "Contatti",
      
      // Hero Section
      "hero.badge": "Tecnica Brevettata",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Arte dipinta in negativo, rivelata in positivo",
      "hero.description": "Scopri l'unica tecnica al mondo che trasforma il modo di creare e vivere l'arte contemporanea. Ogni opera è un viaggio sensoriale tra luce e ombra.",
      "hero.cta_explore": "Esplora le Opere",
      "hero.cta_technique": "Scopri la Tecnica",
      "hero.stats_artworks": "Opere Create",
      "hero.stats_collectors": "Collezionisti",
      "hero.stats_exhibitions": "Esposizioni",
      "hero.scroll": "Scorri per esplorare",
      
      // Artworks Section
      "artworks.badge": "Opere Selezionate",
      "artworks.title": "Una selezione curata delle opere più significative",
      "artworks.subtitle": "Disponibili per l'acquisto immediato",
      "artworks.view_all": "Vedi Tutte le Opere",
      "artworks.available": "Disponibile",
      "artworks.sold": "Venduta",
      "artworks.featured": "In Evidenza",
      "artworks.buy_now": "Acquista Ora",
      "artworks.details": "Scopri",
      "artworks.technique": "Tecnica",
      "artworks.dimensions": "Dimensioni",
      "artworks.price": "Prezzo",
      
      // Technique Section
      "technique.badge": "Tecnica Unica",
      "technique.title": "L'Arte dell'Inversione Cromatica",
      "technique.description": "Dipingo in negativo con i polpastrelli. La fotografia rivela l'opera in positivo. Una tecnica brevettata che sfida la percezione e crea opere d'arte uniche al mondo.",
      "technique.cta": "Scopri la Tecnica",
      
      // Artist Section
      "artist.badge": "L'Artista",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "Inventore della Tecnica",
      "artist.description": "Da oltre 20 anni dedico la mia vita all'arte e alla ricerca. La tecnica #negativoèpositivo® nasce dalla passione per la sperimentazione e dalla volontà di creare qualcosa di veramente unico.",
      "artist.cta": "La Mia Storia",
      
      // Contact CTA
      "contact.badge": "Contattami",
      "contact.title": "Interessato a un'Opera?",
      "contact.description": "Ogni opera è unica e realizzata a mano. Contattami per informazioni, commissioni personalizzate o per visitare lo studio.",
      "contact.cta": "Scrivimi",
      
      // Footer
      "footer.quick_links": "Link Rapidi",
      "footer.contact_info": "Contatti",
      "footer.follow": "Seguici",
      "footer.rights": "Tutti i diritti riservati",
      "footer.trademark": "è un marchio registrato"
    },
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.artworks": "Artworks",
      "nav.technique": "Technique",
      "nav.about": "About",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.badge": "Patented Technique",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Art painted in negative, revealed in positive",
      "hero.description": "Discover the only technique in the world that transforms the way contemporary art is created and experienced. Each artwork is a sensory journey between light and shadow.",
      "hero.cta_explore": "Explore Artworks",
      "hero.cta_technique": "Discover the Technique",
      "hero.stats_artworks": "Artworks Created",
      "hero.stats_collectors": "Collectors",
      "hero.stats_exhibitions": "Exhibitions",
      "hero.scroll": "Scroll to explore",
      
      // Artworks Section
      "artworks.badge": "Featured Artworks",
      "artworks.title": "A curated selection of the most significant works",
      "artworks.subtitle": "Available for immediate purchase",
      "artworks.view_all": "View All Artworks",
      "artworks.available": "Available",
      "artworks.sold": "Sold",
      "artworks.featured": "Featured",
      "artworks.buy_now": "Buy Now",
      "artworks.details": "Discover",
      "artworks.technique": "Technique",
      "artworks.dimensions": "Dimensions",
      "artworks.price": "Price",
      
      // Technique Section
      "technique.badge": "Unique Technique",
      "technique.title": "The Art of Chromatic Inversion",
      "technique.description": "I paint in negative with my fingertips. Photography reveals the artwork in positive. A patented technique that challenges perception and creates truly unique artworks.",
      "technique.cta": "Discover the Technique",
      
      // Artist Section
      "artist.badge": "The Artist",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "Inventor of the Technique",
      "artist.description": "For over 20 years I have dedicated my life to art and research. The #negativoèpositivo® technique was born from a passion for experimentation and the desire to create something truly unique.",
      "artist.cta": "My Story",
      
      // Contact CTA
      "contact.badge": "Contact Me",
      "contact.title": "Interested in an Artwork?",
      "contact.description": "Each artwork is unique and handmade. Contact me for information, custom commissions, or to visit the studio.",
      "contact.cta": "Write Me",
      
      // Footer
      "footer.quick_links": "Quick Links",
      "footer.contact_info": "Contact",
      "footer.follow": "Follow Us",
      "footer.rights": "All rights reserved",
      "footer.trademark": "is a registered trademark"
    },
    de: {
      "nav.home": "Startseite",
      "nav.artworks": "Kunstwerke",
      "nav.technique": "Technik",
      "nav.about": "Über mich",
      "nav.contact": "Kontakt",
      "hero.title": "Zeitgenössische Kunst",
      "hero.subtitle": "Patentierte Technik",
      "hero.description": "Ich male im Negativ mit meinen Fingerspitzen. Die Fotografie offenbart das Kunstwerk im Positiv.",
      "hero.cta_explore": "Kunstwerke erkunden",
      "hero.cta_technique": "Technik entdecken",
      "hero.unique_badge": "Einzigartig",
      "artworks.featured_title": "Ausgewählte Kunstwerke",
      "artworks.featured_subtitle": "Eine kuratierte Auswahl der bedeutendsten Werke",
      "artworks.view_all": "Alle Kunstwerke ansehen",
      "artworks.available": "Verfügbar",
      "artworks.sold": "Verkauft",
      "artworks.featured": "Hervorgehoben",
      "artworks.buy_now": "Jetzt kaufen",
      "artworks.details": "Details"
    },
    fr: {
      "nav.home": "Accueil",
      "nav.artworks": "Œuvres",
      "nav.technique": "Technique",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "hero.title": "Art Contemporain",
      "hero.subtitle": "Technique Brevetée",
      "hero.description": "Je peins en négatif avec mes doigts. La photographie révèle l'œuvre en positif.",
      "hero.cta_explore": "Explorer les Œuvres",
      "hero.cta_technique": "Découvrir la Technique",
      "hero.unique_badge": "Unique",
      "artworks.featured_title": "Œuvres Sélectionnées",
      "artworks.featured_subtitle": "Une sélection soignée des œuvres les plus significatives",
      "artworks.view_all": "Voir Toutes les Œuvres",
      "artworks.available": "Disponible",
      "artworks.sold": "Vendue",
      "artworks.featured": "En Vedette",
      "artworks.buy_now": "Acheter Maintenant",
      "artworks.details": "Détails"
    },
    es: {
      "nav.home": "Inicio",
      "nav.artworks": "Obras",
      "nav.technique": "Técnica",
      "nav.about": "Sobre mí",
      "nav.contact": "Contacto",
      "hero.title": "Arte Contemporáneo",
      "hero.subtitle": "Técnica Patentada",
      "hero.description": "Pinto en negativo con las yemas de los dedos. La fotografía revela la obra en positivo.",
      "hero.cta_explore": "Explorar Obras",
      "hero.cta_technique": "Descubrir la Técnica",
      "hero.unique_badge": "Único",
      "artworks.featured_title": "Obras Seleccionadas",
      "artworks.featured_subtitle": "Una selección curada de las obras más significativas",
      "artworks.view_all": "Ver Todas las Obras",
      "artworks.available": "Disponible",
      "artworks.sold": "Vendida",
      "artworks.featured": "Destacada",
      "artworks.buy_now": "Comprar Ahora",
      "artworks.details": "Detalles"
    }
  };
  
  // Simple i18n class
  class SimpleI18n {
    constructor() {
      this.supportedLanguages = ['it', 'en', 'de', 'fr', 'es'];
      this.currentLang = this.getSavedLanguage();
      this.translations = translations;
      
      console.log('✅ SimpleI18n caricato');
      this.init();
    }
    
    getSavedLanguage() {
      const saved = localStorage.getItem('preferredLanguage');
      if (saved && this.supportedLanguages.includes(saved)) {
        return saved;
      }
      
      const browserLang = (navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
      return this.supportedLanguages.includes(browserLang) ? browserLang : 'it';
    }
    
    init() {
      document.documentElement.lang = this.currentLang;
      this.applyTranslations();
      this.setupLanguageSelectors();
      console.log(`✅ Lingua attiva: ${this.currentLang.toUpperCase()}`);
    }
    
    translate(key) {
      const lang = this.translations[this.currentLang];
      return lang && lang[key] ? lang[key] : key;
    }
    
    applyTranslations() {
      const elements = document.querySelectorAll('[data-i18n]');
      console.log(`🔄 Applicazione traduzioni a ${elements.length} elementi`);
      
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = this.translate(key);
        
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) {
          el.setAttribute(attr, translation);
        } else {
          el.textContent = translation;
        }
      });
      
      console.log(`✅ Traduzioni applicate (${this.currentLang})`);
    }
    
    changeLanguage(lang) {
      if (!this.supportedLanguages.includes(lang)) {
        console.error(`❌ Lingua non supportata: ${lang}`);
        return;
      }
      
      if (lang === this.currentLang) return;
      
      console.log(`🔄 Cambio lingua: ${this.currentLang} → ${lang}`);
      
      this.currentLang = lang;
      localStorage.setItem('preferredLanguage', lang);
      document.documentElement.lang = lang;
      
      this.applyTranslations();
      this.updateLanguageSelectors();
      
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
      }));
    }
    
    setupLanguageSelectors() {
      document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = link.getAttribute('data-lang');
          this.changeLanguage(lang);
        });
      });
      
      this.updateLanguageSelectors();
    }
    
    updateLanguageSelectors() {
      document.querySelectorAll('[data-lang]').forEach(link => {
        const lang = link.getAttribute('data-lang');
        if (lang === this.currentLang) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'true');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }
  
  // Create instance and expose globally
  window.i18n = new SimpleI18n();
  
  console.log('✅ window.i18n disponibile');
  
})();

