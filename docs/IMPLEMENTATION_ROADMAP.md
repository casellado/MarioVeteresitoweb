# 🚀 MARIO VETERE MARKETPLACE - ROADMAP DI IMPLEMENTAZIONE

**Versione:** 1.0.0  
**Data Creazione:** 7 Novembre 2025  
**Durata Prevista:** 21 Giorni Lavorativi  
**Complessità:** Alta  

---

## 📊 STATO ATTUALE DEL PROGETTO

### ✅ Completato (35%)

```
✓ Homepage (index.html) - 100%
  ├── Hero Section con reveal effect
  ├── Featured Artworks (3 opere)
  ├── Technique Showcase
  ├── Artist Story
  ├── Contact CTA
  └── Footer completo

✓ CSS Sistema (main.css) - 100%
  ├── Design System 8pt grid
  ├── Glassmorphism components
  ├── Responsive breakpoints
  ├── Typography system
  └── Animations base

✓ JavaScript Core (app.js) - 100%
  ├── Navigation con scroll behavior
  ├── Color mode toggle
  ├── Reveal effect
  ├── Stats counter
  ├── AOS animations
  ├── GSAP scroll effects
  ├── Newsletter form
  └── Search functionality

✓ Configurazione (config.js) - 100%
  ├── Site config
  ├── Featured artworks data
  ├── Stats
  ├── Texts personalizzabili
  └── Feature flags

✓ Documentazione - 100%
  ├── README_PROJECT.md
  ├── MARIO_VETERE_MARKETPLACE_2025.md
  ├── MARIO_VETERE_ADVANCED_GUIDE.md
  ├── HOMEPAGE_STRUCTURE_PRECISE.md
  └── START_HERE.md
```

### 🔨 Da Implementare (65%)

```
☐ Pagine Secondarie (5 pagine)
☐ Sistema Immagini Completo
☐ Database JSON Opere
☐ Sistema Filtri Avanzati
☐ Lightbox Gallery
☐ 3D Gallery (Opzionale)
☐ Form Contatti Funzionante
☐ SEO Optimization
☐ Performance Optimization
☐ Testing Cross-browser
☐ Deploy & Hosting
```

---

## 🎯 OBIETTIVI FINALI

1. **Sito Completo e Funzionale** - Tutte le pagine operative
2. **Performance Eccellente** - Lighthouse score 95+
3. **UX Impeccabile** - Navigazione fluida, animazioni smooth
4. **Mobile-First** - Perfetto su tutti i dispositivi
5. **Accessibilità WCAG 2.1 AA** - Inclusivo per tutti
6. **SEO Optimized** - Prima pagina Google per keywords target
7. **Pronto per il Business** - Form funzionanti, analytics integrato

---

## 📅 SEQUENZA DI IMPLEMENTAZIONE

---

## 🔷 FASE 1: STRUTTURA ASSETS & PREPARAZIONE (Giorni 1-2)

### Giorno 1: Setup Struttura Cartelle

#### Task 1.1: Creazione Struttura Assets Completa

```bash
# Esegui questo comando nella root del progetto

mkdir -p assets/images/{logo,opere/{featured,gallery,hero},artist,technique,og,icons,placeholders}
mkdir -p assets/videos
mkdir -p assets/fonts
mkdir -p assets/data
mkdir -p assets/js/{components,animations,utils}
mkdir -p assets/css/{components,pages}
```

**Struttura Finale:**
```
SitoWebMarioVetere/
├── index.html ✓
├── main.css ✓
├── app.js ✓
├── config.js ✓
├── assets/
│   ├── css/
│   │   ├── components/      [NEW]
│   │   └── pages/           [NEW]
│   ├── js/
│   │   ├── components/      [NEW]
│   │   ├── animations/      [NEW]
│   │   └── utils/           [NEW]
│   ├── images/
│   │   ├── logo/            [NEW]
│   │   ├── opere/
│   │   │   ├── featured/    [NEW]
│   │   │   ├── gallery/     [NEW]
│   │   │   └── hero/        [NEW]
│   │   ├── artist/          [NEW]
│   │   ├── technique/       [NEW]
│   │   ├── og/              [NEW]
│   │   └── placeholders/    [NEW]
│   ├── videos/              [NEW]
│   ├── fonts/               [NEW]
│   └── data/                [NEW]
└── docs/ ✓
```

**Deliverable:** Struttura cartelle completa e pronta

---

#### Task 1.2: Database JSON Opere

**File:** `assets/data/artworks.json`

```json
{
  "artworks": [
    {
      "id": 1,
      "title": "Tramonto Calabrese",
      "slug": "tramonto-calabrese",
      "year": 2024,
      "category": "paesaggi",
      "technique": "Acrilico su tela",
      "dimensions": {
        "width": 70,
        "height": 50,
        "unit": "cm"
      },
      "price": 1200,
      "currency": "EUR",
      "status": "available",
      "featured": true,
      "description": {
        "short": "Un tramonto mozzafiato sulle coste calabresi",
        "full": "Quest'opera cattura la magica atmosfera di un tramonto calabrese, dove il mare incontra il cielo in una danza di colori. Realizzata con la tecnica #negativoèpositivo®, rivela sfumature sorprendenti quando osservata in positivo.",
        "technique": "L'opera è stata dipinta interamente a mano con i polpastrelli, creando prima il negativo cromatico e poi rivelando il positivo attraverso fotografia professionale."
      },
      "images": {
        "negative": {
          "main": "assets/images/opere/gallery/1-tramonto-negative-main.jpg",
          "detail": "assets/images/opere/gallery/1-tramonto-negative-detail.jpg",
          "process": "assets/images/opere/gallery/1-tramonto-negative-process.jpg"
        },
        "positive": {
          "main": "assets/images/opere/gallery/1-tramonto-positive-main.jpg",
          "detail": "assets/images/opere/gallery/1-tramonto-positive-detail.jpg"
        },
        "thumbnail": "assets/images/opere/featured/opera-1.jpg"
      },
      "tags": ["paesaggio", "mare", "tramonto", "calabria", "natura"],
      "seo": {
        "metaTitle": "Tramonto Calabrese - Opera #negativoèpositivo® | Mario Vetere",
        "metaDescription": "Acquista 'Tramonto Calabrese', opera unica realizzata con la tecnica brevettata #negativoèpositivo®. Acrilico su tela 70x50cm.",
        "keywords": "tramonto calabrese, arte contemporanea, mario vetere, negativo positivo"
      },
      "certificate": {
        "number": "MV-2024-001",
        "authenticity": true,
        "signed": true,
        "edition": "Pezzo Unico"
      },
      "shipping": {
        "italy": 25,
        "europe": 50,
        "worldwide": 100,
        "freeShippingOver": 2000
      }
    }
    // ... altre opere seguendo questo schema
  ],
  "categories": [
    {
      "id": "paesaggi",
      "name": "Paesaggi",
      "slug": "paesaggi",
      "description": "Opere ispirate alla natura e ai paesaggi italiani",
      "count": 15
    },
    {
      "id": "ritratti",
      "name": "Ritratti",
      "slug": "ritratti",
      "description": "Volti che raccontano storie",
      "count": 8
    },
    {
      "id": "astratto",
      "name": "Astratto",
      "slug": "astratto",
      "description": "Espressioni pure di forma e colore",
      "count": 12
    },
    {
      "id": "urbano",
      "name": "Urbano",
      "slug": "urbano",
      "description": "La città e la sua anima",
      "count": 10
    }
  ],
  "stats": {
    "totalArtworks": 45,
    "availableArtworks": 32,
    "soldArtworks": 13,
    "averagePrice": 1500,
    "priceRange": {
      "min": 800,
      "max": 5000
    }
  }
}
```

**Deliverable:** File JSON con almeno 10 opere complete

---

### Giorno 2: Immagini Placeholder & Logo

#### Task 2.1: Logo SVG Professionale

**File:** `assets/images/logo/logo-gold.svg`

```svg
<svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#d4af37;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ffd700;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- MV Monogram -->
  <text x="10" y="28" font-family="Playfair Display" font-size="24" font-weight="700" fill="url(#goldGradient)">
    MV
  </text>
  
  <!-- Text -->
  <text x="45" y="22" font-family="Inter" font-size="12" font-weight="600" fill="#f5f5f5">
    Mario Vetere
  </text>
  <text x="45" y="32" font-family="Inter" font-size="8" font-weight="400" fill="#c0c0c0">
    #negativoèpositivo®
  </text>
</svg>
```

**Varianti necessarie:**
- `logo-gold.svg` - Versione standard
- `logo-white.svg` - Versione bianca per sfondi scuri
- `logo-dark.svg` - Versione scura per light mode
- `favicon.svg` - Solo monogram MV (40x40px)
- `favicon.ico` - Versione ICO multi-size

**Deliverable:** Set completo di loghi in tutte le varianti

---

#### Task 2.2: Sistema Placeholder Immagini

**Script:** `assets/js/utils/generate-placeholders.js`

```javascript
/**
 * Script per generare placeholder temporanei
 * Usare fino a quando non hai le foto reali
 */

const PLACEHOLDER_CONFIG = {
  // Opere
  artwork: {
    width: 800,
    height: 1000,
    background: '#1a1a1a',
    text: 'Opera MV',
    textColor: '#d4af37'
  },
  
  // Portraits
  portrait: {
    width: 600,
    height: 800,
    background: '#0a0a0a',
    text: 'Mario Vetere',
    textColor: '#f5f5f5'
  },
  
  // Technique
  technique: {
    width: 1200,
    height: 675,
    background: '#141414',
    text: 'Tecnica',
    textColor: '#00f5ff'
  }
};

// Genera SVG placeholder
function generatePlaceholder(type) {
  const config = PLACEHOLDER_CONFIG[type];
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${config.width}" height="${config.height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${config.background}"/>
      <text x="50%" y="50%" font-family="Inter" font-size="32" fill="${config.textColor}" text-anchor="middle" dy=".3em">
        ${config.text}
      </text>
    </svg>
  `)}`;
}

// Export
if (typeof module !== 'undefined') {
  module.exports = { generatePlaceholder, PLACEHOLDER_CONFIG };
}
```

**Azioni Immediate:**
1. Usa placeholder URL per tutte le immagini inizialmente
2. Prepara lista immagini reali necessarie
3. Documenta specifiche tecniche per ogni tipo di foto

**Deliverable:** Sistema placeholder funzionante + lista specifiche foto

---

## 🔷 FASE 2: PAGINE PRINCIPALI (Giorni 3-10)

### Giorno 3-4: Pagina OPERE (opere.html)

#### Task 3.1: Struttura HTML Opere

**File:** `opere.html`

```html
<!DOCTYPE html>
<html lang="it" data-bs-theme="dark">
<head>
  <!-- Head identico a index.html -->
  <title>Opere Disponibili | Mario Vetere Art</title>
  <meta name="description" content="Esplora la collezione completa di opere d'arte realizzate con la tecnica #negativoèpositivo®">
</head>
<body>

  <!-- Include Navigation da index.html -->
  
  <!-- Hero Section Opere -->
  <section class="page-hero min-vh-50 d-flex align-items-center" style="padding-top: 80px;">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8" data-aos="fade-up">
          <span class="badge glass-badge mb-3">Collezione Completa</span>
          <h1 class="display-2 fw-bold mb-4">
            Le <span class="text-gradient">Opere</span>
          </h1>
          <p class="lead fs-4 text-secondary mb-5">
            Scopri l'intera collezione di opere realizzate con la tecnica brevettata 
            #negativoèpositivo®. Ogni pezzo è un'esperienza unica tra negativo e positivo.
          </p>
          
          <!-- Stats rapide -->
          <div class="d-flex justify-content-center gap-5 flex-wrap">
            <div>
              <div class="h2 text-gradient mb-0" id="totalArtworksCount">45</div>
              <div class="small text-secondary">Opere Totali</div>
            </div>
            <div>
              <div class="h2 text-gradient mb-0" id="availableArtworksCount">32</div>
              <div class="small text-secondary">Disponibili</div>
            </div>
            <div>
              <div class="h2 text-gradient mb-0">4</div>
              <div class="small text-secondary">Categorie</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Filters & Search Bar -->
  <section class="filters-section py-5 bg-surface sticky-top" style="top: 80px; z-index: 1020;">
    <div class="container">
      <div class="row g-4 align-items-center">
        
        <!-- Search -->
        <div class="col-lg-4">
          <div class="input-group">
            <span class="input-group-text bg-transparent border-secondary">
              <i class="bi bi-search"></i>
            </span>
            <input type="text" 
                   class="form-control bg-transparent border-secondary" 
                   id="artworkSearch" 
                   placeholder="Cerca per titolo, tag...">
          </div>
        </div>
        
        <!-- Category Filter -->
        <div class="col-lg-3">
          <select class="form-select bg-transparent border-secondary" id="categoryFilter">
            <option value="all">Tutte le Categorie</option>
            <option value="paesaggi">Paesaggi</option>
            <option value="ritratti">Ritratti</option>
            <option value="astratto">Astratto</option>
            <option value="urbano">Urbano</option>
          </select>
        </div>
        
        <!-- Price Range -->
        <div class="col-lg-3">
          <select class="form-select bg-transparent border-secondary" id="priceFilter">
            <option value="all">Tutte le Fasce</option>
            <option value="0-1000">€ 0 - 1.000</option>
            <option value="1000-2000">€ 1.000 - 2.000</option>
            <option value="2000-3000">€ 2.000 - 3.000</option>
            <option value="3000+">€ 3.000+</option>
          </select>
        </div>
        
        <!-- Sort -->
        <div class="col-lg-2">
          <select class="form-select bg-transparent border-secondary" id="sortFilter">
            <option value="newest">Più Recenti</option>
            <option value="oldest">Più Antiche</option>
            <option value="price-low">Prezzo: Basso-Alto</option>
            <option value="price-high">Prezzo: Alto-Basso</option>
            <option value="title">Titolo A-Z</option>
          </select>
        </div>
        
      </div>
      
      <!-- Active Filters Display -->
      <div id="activeFilters" class="mt-3 d-flex gap-2 flex-wrap"></div>
      
      <!-- Results Count -->
      <div class="mt-3 text-center">
        <span class="text-secondary">
          Visualizzando <span id="resultsCount" class="text-white fw-semibold">32</span> opere
        </span>
      </div>
      
    </div>
  </section>

  <!-- Artworks Grid -->
  <section class="artworks-grid py-6">
    <div class="container">
      
      <!-- Grid Container -->
      <div id="artworksContainer" class="row g-4">
        <!-- Le card verranno generate dinamicamente via JS -->
      </div>
      
      <!-- Loading State -->
      <div id="loadingState" class="text-center py-5 d-none">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Caricamento...</span>
        </div>
      </div>
      
      <!-- Empty State -->
      <div id="emptyState" class="text-center py-5 d-none">
        <i class="bi bi-search fs-1 text-secondary mb-3"></i>
        <h3 class="h4 mb-2">Nessuna opera trovata</h3>
        <p class="text-secondary">Prova a modificare i filtri di ricerca</p>
        <button class="btn btn-outline-primary mt-3" id="resetFilters">
          Reset Filtri
        </button>
      </div>
      
      <!-- Load More Button -->
      <div class="text-center mt-5">
        <button class="btn btn-outline-primary btn-lg px-5" id="loadMoreBtn">
          Carica Altre Opere
          <i class="bi bi-arrow-down ms-2"></i>
        </button>
      </div>
      
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section py-6 bg-surface">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="display-5 fw-bold mb-4">
            Non hai trovato quello che cerchi?
          </h2>
          <p class="lead text-secondary mb-5">
            Posso realizzare commissioni personalizzate seguendo le tue idee e preferenze
          </p>
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a href="contatti.html" class="btn btn-primary btn-lg px-5">
              <i class="bi bi-envelope me-2"></i>
              Richiedi Commissione
            </a>
            <a href="https://wa.me/393XXXXXXXXX" class="btn btn-success btn-lg px-5">
              <i class="bi bi-whatsapp me-2"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Include Footer da index.html -->

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="app.js"></script>
  <script src="assets/js/components/opere-gallery.js"></script>
</body>
</html>
```

**Deliverable:** HTML completo pagina opere con filtri

---

#### Task 3.2: JavaScript Filtri & Gallery

**File:** `assets/js/components/opere-gallery.js`

```javascript
/**
 * Gallery Opere - Filtri, Sort, Lazy Loading
 */

class ArtworksGallery {
  constructor() {
    this.artworks = [];
    this.filteredArtworks = [];
    this.displayedCount = 0;
    this.itemsPerPage = 12;
    
    this.filters = {
      search: '',
      category: 'all',
      priceRange: 'all',
      sort: 'newest'
    };
    
    this.init();
  }
  
  async init() {
    await this.loadArtworks();
    this.setupEventListeners();
    this.renderArtworks();
    this.updateStats();
  }
  
  async loadArtworks() {
    try {
      // Load from JSON
      const response = await fetch('assets/data/artworks.json');
      const data = await response.json();
      this.artworks = data.artworks;
      this.filteredArtworks = [...this.artworks];
    } catch (error) {
      console.error('Error loading artworks:', error);
      this.showError();
    }
  }
  
  setupEventListeners() {
    // Search input
    document.getElementById('artworkSearch').addEventListener('input', 
      this.debounce((e) => {
        this.filters.search = e.target.value.toLowerCase();
        this.applyFilters();
      }, 300)
    );
    
    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
      this.filters.category = e.target.value;
      this.applyFilters();
    });
    
    // Price filter
    document.getElementById('priceFilter').addEventListener('change', (e) => {
      this.filters.priceRange = e.target.value;
      this.applyFilters();
    });
    
    // Sort filter
    document.getElementById('sortFilter').addEventListener('change', (e) => {
      this.filters.sort = e.target.value;
      this.applyFilters();
    });
    
    // Load more button
    document.getElementById('loadMoreBtn')?.addEventListener('click', () => {
      this.loadMore();
    });
    
    // Reset filters
    document.getElementById('resetFilters')?.addEventListener('click', () => {
      this.resetFilters();
    });
  }
  
  applyFilters() {
    let filtered = [...this.artworks];
    
    // Search filter
    if (this.filters.search) {
      filtered = filtered.filter(artwork =>
        artwork.title.toLowerCase().includes(this.filters.search) ||
        artwork.tags.some(tag => tag.toLowerCase().includes(this.filters.search))
      );
    }
    
    // Category filter
    if (this.filters.category !== 'all') {
      filtered = filtered.filter(artwork =>
        artwork.category === this.filters.category
      );
    }
    
    // Price filter
    if (this.filters.priceRange !== 'all') {
      filtered = filtered.filter(artwork => {
        const price = artwork.price;
        if (this.filters.priceRange === '0-1000') return price < 1000;
        if (this.filters.priceRange === '1000-2000') return price >= 1000 && price < 2000;
        if (this.filters.priceRange === '2000-3000') return price >= 2000 && price < 3000;
        if (this.filters.priceRange === '3000+') return price >= 3000;
        return true;
      });
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch (this.filters.sort) {
        case 'newest':
          return b.year - a.year || b.id - a.id;
        case 'oldest':
          return a.year - b.year || a.id - b.id;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
    
    this.filteredArtworks = filtered;
    this.displayedCount = 0;
    this.renderArtworks();
    this.updateActiveFilters();
    this.updateStats();
  }
  
  renderArtworks() {
    const container = document.getElementById('artworksContainer');
    const loadingState = document.getElementById('loadingState');
    const emptyState = document.getElementById('emptyState');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // Show loading
    loadingState.classList.remove('d-none');
    container.innerHTML = '';
    
    setTimeout(() => {
      loadingState.classList.add('d-none');
      
      if (this.filteredArtworks.length === 0) {
        emptyState.classList.remove('d-none');
        loadMoreBtn.style.display = 'none';
        return;
      }
      
      emptyState.classList.add('d-none');
      
      const toDisplay = this.filteredArtworks.slice(0, this.displayedCount + this.itemsPerPage);
      this.displayedCount = toDisplay.length;
      
      toDisplay.forEach(artwork => {
        container.appendChild(this.createArtworkCard(artwork));
      });
      
      // Show/hide load more button
      if (this.displayedCount >= this.filteredArtworks.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
      
      // Re-init AOS for new elements
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 300);
  }
  
  createArtworkCard(artwork) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    col.setAttribute('data-aos', 'fade-up');
    
    const statusBadge = artwork.status === 'available' ? 
      '<span class="badge bg-success position-absolute top-0 start-0 m-3">Disponibile</span>' :
      '<span class="badge bg-danger position-absolute top-0 start-0 m-3">Venduta</span>';
    
    col.innerHTML = `
      <article class="artwork-card glass-card h-100 rounded-4 overflow-hidden">
        
        <!-- Image -->
        <div class="artwork-image position-relative" style="cursor: pointer;">
          <img src="${artwork.images.thumbnail}" 
               alt="${artwork.title}" 
               class="img-fluid w-100" 
               style="aspect-ratio: 4/3; object-fit: cover;"
               loading="lazy">
          
          <!-- Reveal Overlay -->
          <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
            <div class="d-flex gap-2">
              <button class="btn btn-primary btn-sm" onclick="window.location.href='opera-single.html?id=${artwork.id}'">
                <i class="bi bi-eye me-2"></i>
                Dettagli
              </button>
              <button class="btn btn-outline-light btn-sm reveal-btn" data-artwork-id="${artwork.id}">
                <i class="bi bi-arrows-angle-expand"></i>
              </button>
            </div>
          </div>
          
          ${statusBadge}
          
          ${artwork.featured ? '<span class="badge bg-warning text-dark position-absolute top-0 end-0 m-3">In Evidenza</span>' : ''}
        </div>
        
        <!-- Card Body -->
        <div class="card-body p-4">
          <h3 class="h5 mb-3 text-white" style="line-height: 1.4;">
            ${artwork.title}
          </h3>
          <p class="text-secondary small mb-3" style="line-height: 1.5;">
            Tecnica: #negativoèpositivo® | ${artwork.year}
          </p>
          
          <!-- Details -->
          <div class="artwork-details d-flex flex-wrap gap-2 mb-4">
            <span class="badge bg-dark-subtle text-white-50">${artwork.dimensions.width}×${artwork.dimensions.height} cm</span>
            <span class="badge bg-dark-subtle text-white-50">${artwork.technique.split(' ')[0]}</span>
            <span class="badge bg-dark-subtle text-white-50">${this.getCategoryName(artwork.category)}</span>
          </div>
          
          <!-- Price & CTA -->
          <div class="d-flex align-items-center justify-content-between">
            <div class="price">
              ${artwork.status === 'available' ?
                `<span class="h4 mb-0 text-gradient fw-bold">€ ${artwork.price.toLocaleString()}</span>` :
                `<span class="h5 mb-0 text-danger">Venduta</span>`
              }
            </div>
            <a href="opera-single.html?id=${artwork.id}" class="btn btn-outline-light btn-sm">
              Scopri
            </a>
          </div>
        </div>
        
      </article>
    `;
    
    return col;
  }
  
  getCategoryName(slug) {
    const categories = {
      'paesaggi': 'Paesaggi',
      'ritratti': 'Ritratti',
      'astratto': 'Astratto',
      'urbano': 'Urbano'
    };
    return categories[slug] || slug;
  }
  
  loadMore() {
    this.renderArtworks();
  }
  
  updateStats() {
    document.getElementById('resultsCount').textContent = this.filteredArtworks.length;
  }
  
  updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    container.innerHTML = '';
    
    const activeFilters = [];
    
    if (this.filters.search) {
      activeFilters.push({ label: `Ricerca: "${this.filters.search}"`, type: 'search' });
    }
    if (this.filters.category !== 'all') {
      activeFilters.push({ label: this.getCategoryName(this.filters.category), type: 'category' });
    }
    if (this.filters.priceRange !== 'all') {
      activeFilters.push({ label: `Prezzo: ${this.filters.priceRange}`, type: 'price' });
    }
    
    if (activeFilters.length > 0) {
      container.classList.remove('d-none');
      activeFilters.forEach(filter => {
        const badge = document.createElement('span');
        badge.className = 'badge bg-primary d-inline-flex align-items-center gap-2';
        badge.innerHTML = `
          ${filter.label}
          <i class="bi bi-x-circle" style="cursor: pointer;" onclick="gallery.removeFilter('${filter.type}')"></i>
        `;
        container.appendChild(badge);
      });
    } else {
      container.classList.add('d-none');
    }
  }
  
  removeFilter(type) {
    switch (type) {
      case 'search':
        this.filters.search = '';
        document.getElementById('artworkSearch').value = '';
        break;
      case 'category':
        this.filters.category = 'all';
        document.getElementById('categoryFilter').value = 'all';
        break;
      case 'price':
        this.filters.priceRange = 'all';
        document.getElementById('priceFilter').value = 'all';
        break;
    }
    this.applyFilters();
  }
  
  resetFilters() {
    this.filters = {
      search: '',
      category: 'all',
      priceRange: 'all',
      sort: 'newest'
    };
    
    document.getElementById('artworkSearch').value = '';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('sortFilter').value = 'newest';
    
    this.applyFilters();
  }
  
  showError() {
    const container = document.getElementById('artworksContainer');
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-exclamation-triangle fs-1 text-danger mb-3"></i>
        <h3 class="h4 mb-2">Errore nel caricamento</h3>
        <p class="text-secondary">Non è stato possibile caricare le opere. Riprova più tardi.</p>
      </div>
    `;
  }
  
  // Utility: Debounce
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Initialize
let gallery;
document.addEventListener('DOMContentLoaded', () => {
  gallery = new ArtworksGallery();
});
```

**Deliverable:** Sistema filtri completo e funzionante

---

### Giorno 5-6: Pagina OPERA SINGLE (opera-single.html)

**Feature principali:**
- Layout full-width con lightbox gallery
- Reveal effect interattivo negativo/positivo
- Slider immagini dettaglio
- Info complete opera
- Form "Richiedi Informazioni"
- Opere correlate suggerite
- Breadcrumb navigation

**Deliverable:** Pagina dettaglio opera completa

---

### Giorno 7: Pagina TECNICA (tecnica.html)

**Feature principali:**
- Timeline processo creativo
- Video tutorial integrato
- Step-by-step con animazioni GSAP
- Comparazione negativo/positivo interattiva
- FAQ sulla tecnica
- Call to action corsi/workshop

**Deliverable:** Pagina tecnica educativa e coinvolgente

---

### Giorno 8: Pagina CHI SONO (chi-sono.html)

**Feature principali:**
- Bio completa con timeline
- Galleria fotografica studio
- Mostre e riconoscimenti
- Citazioni e filosofia artistica
- Media kit download
- Form contatto diretto

**Deliverable:** Pagina biografia professionale

---

### Giorno 9-10: Pagina CONTATTI (contatti.html)

**Feature principali:**
- Form contatto con validazione
- Integrazione EmailJS
- Mappa Google Maps studio
- Info contatti complete
- FAQ veloci
- Orari studio/disponibilità

**Deliverable:** Sistema contatti completo e funzionante

---

## 🔷 FASE 3: COMPONENTI AVANZATI (Giorni 11-14)

### Giorno 11: Lightbox Gallery Professionale

**Libreria:** PhotoSwipe 5

**Implementazione:**
- Gallery con zoom
- Swipe gestures mobile
- Keyboard navigation
- Thumbnails preview
- Caption con info opera
- Share buttons social

---

### Giorno 12: Sistema Reveal Effect Avanzato

**Feature:**
- Slider comparazione drag
- Animazione transizione smooth
- Timer automatico reveal
- Controlli touch-friendly
- Accessibilità keyboard

---

### Giorno 13: Form & Validazione

**Implementazione:**
- Validazione client-side
- Integrazione EmailJS
- Anti-spam honeypot
- Success/error notifications
- Google reCAPTCHA
- Email template professionale

---

### Giorno 14: Search Globale

**Feature:**
- Autocomplete intelligente
- Search suggestions
- Recent searches
- Filtri quick-access
- Keyboard shortcuts

---

## 🔷 FASE 4: OTTIMIZZAZIONE & PERFORMANCE (Giorni 15-17)

### Giorno 15: Performance Optimization

**Tasks:**
1. Lazy loading avanzato
2. Image optimization WebP
3. Code splitting
4. Critical CSS inlining
5. Font optimization
6. Service Worker PWA

**Target:** Lighthouse score 95+

---

### Giorno 16: SEO Optimization

**Tasks:**
1. Meta tags dinamici
2. Structured data JSON-LD
3. Sitemap XML
4. Robots.txt
5. Open Graph completo
6. Twitter Cards
7. Schema.org markup

**Target:** SEO score 95+

---

### Giorno 17: Accessibilità WCAG 2.1 AA

**Tasks:**
1. ARIA labels completi
2. Keyboard navigation
3. Screen reader test
4. Focus management
5. Color contrast check
6. Skip links
7. Form accessibility

**Target:** Accessibilità 100%

---

## 🔷 FASE 5: TESTING & DEBUGGING (Giorni 18-19)

### Giorno 18: Cross-browser Testing

**Browser da testare:**
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari 14+
- Mobile Safari iOS
- Chrome Mobile Android

**Tool:** BrowserStack

---

### Giorno 19: Device Testing

**Dispositivi:**
- iPhone 12/13/14
- Samsung Galaxy S21/S22
- iPad Air/Pro
- Desktop 1920×1080
- Desktop 2560×1440

---

## 🔷 FASE 6: DEPLOY & LAUNCH (Giorni 20-21)

### Giorno 20: Hosting & Domain Setup

**Provider consigliati:**
1. **Netlify** (Consigliato)
   - Deploy automatico da Git
   - CDN globale
   - SSL gratuito
   - Form handling
   - Redirect rules

2. **Vercel** (Alternativa)
3. **Cloudflare Pages** (Alternativa)

**Domain:**
- Acquisto dominio (es: mariovetere.com)
- Configurazione DNS
- SSL certificate
- Redirect www → non-www

---

### Giorno 21: Final Checks & Launch

**Checklist Launch:**
- [ ] Tutti i link funzionanti
- [ ] Immagini ottimizzate caricate
- [ ] Form contatto testato
- [ ] Analytics configurato (GA4)
- [ ] Search Console configurato
- [ ] Sitemap submitted
- [ ] Social preview test
- [ ] Mobile test completo
- [ ] Performance audit finale
- [ ] Backup completo

**🚀 GO LIVE!**

---

## 📊 METRICHE DI SUCCESSO

### Performance Targets
```
✓ Lighthouse Performance: 95+
✓ First Contentful Paint: <1.5s
✓ Largest Contentful Paint: <2.5s
✓ Time to Interactive: <3s
✓ Cumulative Layout Shift: <0.1
✓ Total Page Size: <2MB
```

### SEO Targets
```
✓ SEO Score: 95+
✓ Mobile-Friendly Test: Pass
✓ Core Web Vitals: All Green
✓ Structured Data: Valid
✓ Page Speed: 90+
```

### Accessibility Targets
```
✓ WCAG 2.1 AA: 100%
✓ Keyboard Navigation: Full
✓ Screen Reader Compatible: Yes
✓ Color Contrast: AAA
```

---

## 🛠 TOOL & RESOURCES ESSENZIALI

### Development Tools
- **VS Code** - IDE
- **Git** - Version control
- **Live Server** - Local development
- **Chrome DevTools** - Debugging

### Design Tools
- **Figma** - UI/UX design
- **Adobe Photoshop** - Image editing
- **TinyPNG** - Image compression
- **SVGOMG** - SVG optimization

### Testing Tools
- **Lighthouse** - Performance audit
- **PageSpeed Insights** - Google metrics
- **GTmetrix** - Performance analysis
- **WAVE** - Accessibility testing
- **BrowserStack** - Cross-browser testing

### SEO Tools
- **Google Search Console** - Monitoring
- **Google Analytics 4** - Analytics
- **Schema Markup Validator** - Structured data
- **Screaming Frog** - Site crawler

---

## 💡 BEST PRACTICES REMINDER

### Durante lo Sviluppo

1. **Commit frequenti** - Git commit ogni feature completata
2. **Testing continuo** - Testa dopo ogni modifica
3. **Mobile-first** - Inizia sempre dal design mobile
4. **Accessibilità** - Pensa all'accessibilità da subito
5. **Performance** - Monitora sempre le performance
6. **Documentazione** - Commenta il codice complesso
7. **Backup** - Backup regolari del progetto

### Checklist Daily

- [ ] Test su mobile reale
- [ ] Verifica accessibilità
- [ ] Check performance
- [ ] Cross-browser test
- [ ] Git commit
- [ ] Documentazione aggiornata

---

## 🎯 MILESTONE TRACKING

```
Fase 1: Setup (Giorni 1-2)         ░░░░░░░░░░ 0%
Fase 2: Pagine (Giorni 3-10)       ░░░░░░░░░░ 0%
Fase 3: Componenti (Giorni 11-14)  ░░░░░░░░░░ 0%
Fase 4: Ottimizzazioni (15-17)     ░░░░░░░░░░ 0%
Fase 5: Testing (Giorni 18-19)     ░░░░░░░░░░ 0%
Fase 6: Deploy (Giorni 20-21)      ░░░░░░░░░░ 0%

PROGRESSO TOTALE:                   ░░░░░░░░░░ 35%
```

---

## 📞 SUPPORT & QUESTIONS

Durante l'implementazione, consulta sempre:

1. **Documentazione ufficiale**
   - Bootstrap: https://getbootstrap.com/docs/5.3/
   - GSAP: https://greensock.com/docs/
   - AOS: https://michalsnik.github.io/aos/

2. **Community**
   - Stack Overflow
   - GitHub Issues
   - Bootstrap Forum

3. **Design Reference**
   - Dribbble per ispirazione UI
   - Awwwards per best practices
   - Behance per portfolio design

---

## 🎉 CONCLUSIONE

**Questa roadmap ti guida passo-passo** alla creazione di un marketplace d'arte digitale **professionale**, **performante** e **pronto per il business**.

**Caratteristiche Finali:**
✅ 6 pagine complete e funzionanti  
✅ Design premium e moderno  
✅ Performance eccellenti (95+ Lighthouse)  
✅ SEO optimized  
✅ Mobile-first responsive  
✅ Accessibilità WCAG 2.1 AA  
✅ Form funzionanti  
✅ Gallery professionale  
✅ Pronto per vendere arte online  

**Tempo Totale:** 21 giorni lavorativi  
**Complessità:** Alta ma gestibile  
**Risultato:** Sito web professionale di livello mondiale  

---

**Let's Build Something Amazing! 🚀**

*© 2025 - Mario Vetere Implementation Roadmap v1.0.0*

