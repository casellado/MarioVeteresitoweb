/**
 * MARIO VETERE MARKETPLACE - Configuration File
 * 
 * Modifica questo file per personalizzare rapidamente il sito
 * senza dover cercare nei file HTML/CSS/JS
 */

// ========================================
// INFORMAZIONI GENERALI
// ========================================

const SITE_CONFIG = {
  // Info base
  siteName: 'Mario Vetere Art',
  siteDescription: 'Arte dipinta in negativo, rivelata in positivo',
  siteUrl: 'https://mariovetere.com',
  
  // Contatti
  email: 'artmv.info@gmail.com',
  whatsapp: '+393XXXXXXXXX', // Sostituisci con numero reale
  phone: '+39 XXX XXX XXXX',
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/mario_vetere_art',
    facebook: 'https://facebook.com/mariovetere',
    linkedin: 'https://linkedin.com/in/mariovetere',
    youtube: 'https://youtube.com/@mariovetere'
  },
  
  // Studio/Indirizzo
  address: {
    street: 'Via Example, 123',
    city: 'Torino',
    region: 'Piemonte',
    country: 'Italia',
    zipCode: '10100'
  }
};

// ========================================
// OPERE IN EVIDENZA (Homepage)
// ========================================

const FEATURED_ARTWORKS = [
  {
    id: 1,
    title: 'Tramonto Calabrese',
    year: 2024,
    dimensions: '70×50 cm',
    technique: 'Acrilico su tela',
    price: 1200,
    status: 'available', // available | sold | reserved
    images: {
      negative: 'assets/images/opere/featured/opera-1.jpg',
      positive: 'assets/images/opere/featured/opera-1-pos.jpg'
    }
  },
  {
    id: 2,
    title: 'Riflessi Urbani',
    year: 2024,
    dimensions: '50×70 cm',
    technique: 'Acrilico su cartoncino',
    price: 950,
    status: 'available',
    images: {
      negative: 'assets/images/opere/featured/opera-2.jpg',
      positive: 'assets/images/opere/featured/opera-2-pos.jpg'
    }
  },
  {
    id: 3,
    title: 'Natura Silenziosa',
    year: 2024,
    dimensions: '100×70 cm',
    technique: 'Acrilico su tela',
    price: 2500,
    status: 'featured', // In evidenza
    images: {
      negative: 'assets/images/opere/featured/opera-3.jpg',
      positive: 'assets/images/opere/featured/opera-3-pos.jpg'
    }
  }
];

// ========================================
// STATISTICHE (Hero Section)
// ========================================

const STATS = {
  totalArtworks: 100,  // Opere realizzate
  exhibitions: 15,     // Mostre internazionali
  collectors: 500,     // Collezionisti nel mondo
  yearBrevetto: 2016   // Anno brevetto
};

// ========================================
// ORARI STUDIO (Optional)
// ========================================

const STUDIO_HOURS = {
  monday: { open: '10:00', close: '18:00' },
  tuesday: { open: '10:00', close: '18:00' },
  wednesday: { open: '10:00', close: '18:00' },
  thursday: { open: '10:00', close: '18:00' },
  friday: { open: '10:00', close: '18:00' },
  saturday: { closed: true },
  sunday: { closed: true }
};

// ========================================
// INTEGRAZIONI API (Per futuro)
// ========================================

const API_KEYS = {
  // Stripe
  stripePublishableKey: 'pk_test_YOUR_KEY_HERE',
  
  // EmailJS (per form contatti)
  emailJsServiceId: 'YOUR_SERVICE_ID',
  emailJsTemplateId: 'YOUR_TEMPLATE_ID',
  emailJsPublicKey: 'YOUR_PUBLIC_KEY',
  
  // Google Analytics GA4
  googleAnalyticsId: 'G-XXXXXXXXXX',
  
  // Google Maps (per mappa studio)
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_KEY'
};

// ========================================
// TESTI PERSONALIZZABILI
// ========================================

const TEXTS = {
  // Hero Section
  heroTitle: 'Mario Vetere',
  heroSubtitle: 'Arte dipinta in negativo, rivelata in positivo',
  heroDescription: 'Scopri l\'unica tecnica al mondo che trasforma il modo di creare e vivere l\'arte contemporanea. Ogni opera è un viaggio sensoriale tra luce e ombra.',
  
  // Featured Section
  featuredTitle: 'Opere Selezionate',
  featuredDescription: 'Una selezione curata delle opere più significative, disponibili per l\'acquisto immediato',
  
  // Technique Section
  techniqueTitle: 'La Tecnica #negativoèpositivo®',
  techniqueDescription: 'Una rivoluzione artistica che trasforma completamente il modo di concepire e creare l\'arte contemporanea.',
  
  // Artist Section
  artistTitle: 'Mario Vetere',
  artistDescription: 'Un percorso artistico che unisce tradizione e innovazione, trasformando una tecnica leonardesca in arte contemporanea.',
  
  // Contact Section
  contactTitle: 'Hai Domande? Contattami',
  contactDescription: 'Che tu sia interessato ad acquistare un\'opera, a commissioni personalizzate o semplicemente a saperne di più sulla tecnica, sono qui per te.',
  
  // Footer
  footerDescription: 'Arte contemporanea con la tecnica brevettata #negativoèpositivo®. Un viaggio unico tra luce e ombra, tra ciò che appare e ciò che si rivela.',
  footerCopyright: '© 2025 Mario Vetere. Tutti i diritti riservati. #negativoèpositivo® è un marchio registrato.'
};

// ========================================
// DESIGN CUSTOMIZATION
// ========================================

const DESIGN = {
  // Colori primari (dark mode)
  colors: {
    primary: '#d4af37',    // Gold
    secondary: '#00f5ff',  // Cyan
    background: '#0a0a0a', // Deep Black
    surface: '#141414',    // Card Background
    text: '#f5f5f5'        // Soft White
  },
  
  // Typography
  fonts: {
    body: 'Inter',
    display: 'Playfair Display'
  },
  
  // Animations
  animations: {
    duration: 800,  // AOS duration in ms
    once: true,     // Animate only once
    easing: 'ease-out-cubic'
  }
};

// ========================================
// SEO & META TAGS
// ========================================

const SEO = {
  title: 'Mario Vetere | Arte #negativoèpositivo® | Marketplace Ufficiale',
  description: 'Scopri le opere uniche di Mario Vetere, dipinte in negativo e rivelate in positivo con la tecnica brevettata #negativoèpositivo®',
  keywords: 'Mario Vetere, arte contemporanea, negativo positivo, arte italiana, tecnica brevettata',
  author: 'Mario Vetere',
  
  // Open Graph
  ogImage: 'assets/images/og/homepage-og.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterSite: '@mariovetere'
};

// ========================================
// FEATURES FLAGS (Enable/Disable)
// ========================================

const FEATURES = {
  enableColorModeToggle: true,
  enableSearch: true,
  enableNewsletter: true,
  enableLanguageSelector: true,
  enableWhatsApp: true,
  enableRevealEffect: true,
  enableStatsCounter: true,
  enableAOSAnimations: true,
  enableGSAPAnimations: true,
  enableLazyLoading: true
};

// ========================================
// EXPORT (se usi come modulo)
// ========================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SITE_CONFIG,
    FEATURED_ARTWORKS,
    STATS,
    STUDIO_HOURS,
    API_KEYS,
    TEXTS,
    DESIGN,
    SEO,
    FEATURES
  };
}

// ========================================
// ISTRUZIONI D'USO
// ========================================

/*

COME USARE QUESTO FILE:

1. MODIFICARE I DATI
   - Cambia email, telefono, social media
   - Aggiorna le opere in FEATURED_ARTWORKS
   - Personalizza i testi in TEXTS
   - Modifica le statistiche in STATS

2. COLLEGARE AL SITO
   
   Opzione A: Script tag in HTML
   ```html
   <script src="assets/js/config.js"></script>
   <script>
     // Usa le variabili
     console.log(SITE_CONFIG.email);
   </script>
   ```
   
   Opzione B: Import come modulo (se usi bundler)
   ```javascript
   import { SITE_CONFIG, FEATURED_ARTWORKS } from './config.js';
   ```

3. AGGIORNARE app.js
   - Puoi usare FEATURED_ARTWORKS per generare le card dinamicamente
   - Usa STATS per aggiornare i numeri automaticamente
   - Collega API_KEYS per integrazioni

4. PERSONALIZZAZIONE AVANZATA
   - Modifica DESIGN per cambiare colori/font
   - Usa FEATURES per abilitare/disabilitare funzionalità
   - Aggiorna SEO per ottimizzare meta tags

ESEMPIO PRATICO:

// In app.js, invece di hardcodare le opere:
FEATURED_ARTWORKS.forEach(artwork => {
  const card = createArtworkCard(artwork);
  container.appendChild(card);
});

// Oppure per stats:
document.querySelector('[data-count]').dataset.count = STATS.totalArtworks;

*/
