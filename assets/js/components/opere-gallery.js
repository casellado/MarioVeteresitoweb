/**
 * Gallery Opere - Filtri, Sort, Lazy Loading
 * Mario Vetere Marketplace
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
    console.log('🎨 Inizializzazione Gallery Opere...');
    await this.loadArtworks();
    this.setupEventListeners();
    this.renderArtworks();
    this.updateStats();
  }
  
  async loadArtworks() {
    try {
      const response = await fetch('assets/data/artworks.json');
      const data = await response.json();
      this.artworks = data.artworks;
      this.filteredArtworks = [...this.artworks];
      console.log(`✅ Caricate ${this.artworks.length} opere`);
    } catch (error) {
      console.error('❌ Errore caricamento opere:', error);
      this.showError();
    }
  }
  
  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('artworkSearch');
    if (searchInput) {
      searchInput.addEventListener('input', this.debounce((e) => {
        this.filters.search = e.target.value.toLowerCase();
        this.applyFilters();
      }, 300));
    }
    
    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        this.filters.category = e.target.value;
        this.applyFilters();
      });
    }
    
    // Price filter
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
      priceFilter.addEventListener('change', (e) => {
        this.filters.priceRange = e.target.value;
        this.applyFilters();
      });
    }
    
    // Sort filter
    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
      sortFilter.addEventListener('change', (e) => {
        this.filters.sort = e.target.value;
        this.applyFilters();
      });
    }
    
    // Reset filters
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetFilters());
    }
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
    
    // Show loading
    if (loadingState) loadingState.classList.remove('d-none');
    if (container) container.innerHTML = '';
    
    setTimeout(() => {
      if (loadingState) loadingState.classList.add('d-none');
      
      if (this.filteredArtworks.length === 0) {
        if (emptyState) emptyState.classList.remove('d-none');
        return;
      }
      
      if (emptyState) emptyState.classList.add('d-none');
      
      const toDisplay = this.filteredArtworks.slice(0, this.displayedCount + this.itemsPerPage);
      this.displayedCount = toDisplay.length;
      
      toDisplay.forEach(artwork => {
        if (container) container.appendChild(this.createArtworkCard(artwork));
      });
      
      // Re-init AOS
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 300);
  }
  
  createArtworkCard(artwork) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    col.setAttribute('data-aos', 'fade-up');
    
    // Determine badge based on status and featured
    let badge = '';
    if (artwork.featured) {
      badge = '<span class="badge bg-warning text-dark position-absolute" style="top: 8px; right: 8px; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-weight: 600;">In Evidenza</span>';
    } else if (artwork.status === 'available') {
      badge = '<span class="badge bg-success position-absolute" style="top: 8px; right: 8px; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">Disponibile</span>';
    } else {
      badge = '<span class="badge bg-danger position-absolute" style="top: 8px; right: 8px; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">Venduta</span>';
    }
    
    // Parse technique to separate material and support
    const techniqueParts = artwork.technique.split(' su ');
    const material = techniqueParts[0] || 'Crete colorate';
    const support = techniqueParts[1] || 'Cartoncino';
    
    col.innerHTML = `
      <article class="artwork-card glass-card h-100 rounded-4 overflow-hidden" role="article">
        
        <!-- Image -->
        <div class="artwork-image position-relative">
          <img src="${artwork.images.thumbnail}" 
               alt="Opera d'arte" 
               class="img-fluid w-100" 
               style="aspect-ratio: 4/3; object-fit: cover;"
               loading="lazy">
          
          <!-- Quick View Overlay -->
          <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
            <a href="opera-single.html?id=${artwork.id}" class="btn btn-primary btn-sm" aria-label="Vedi dettagli opera">
              <i class="bi bi-eye me-2"></i>
              Vedi Dettagli
            </a>
          </div>
          
          <!-- Badge -->
          ${badge}
        </div>
        
        <!-- Card Body -->
        <div class="card-body p-4">
          <h3 class="h5 mb-3 text-white" style="line-height: 1.4;">
            ${artwork.title}
          </h3>
          <p class="text-secondary small mb-3" style="line-height: 1.5;">
            Tecnica: #<span style="color: #0099FF;">negativo</span><span style="color: #FFD700;">è</span><span style="color: #FF6600;">positivo</span>® | ${artwork.year}
          </p>
          
          <!-- Details -->
          <div class="artwork-details d-flex flex-wrap gap-2 mb-4">
            <span class="badge bg-dark-subtle text-white-50">${artwork.dimensions.width}×${artwork.dimensions.height} cm</span>
            <span class="badge bg-dark-subtle text-white-50">${material}</span>
            <span class="badge bg-dark-subtle text-white-50">${support}</span>
          </div>
          
              <!-- Price & CTA -->
              <div class="d-flex align-items-center justify-content-between">
                <div class="price">
                  ${artwork.status === 'available' ?
                    `<span class="h4 mb-0 text-gradient fw-bold">€ ${artwork.price.toLocaleString('it-IT')}</span>` :
                    `<span class="h5 mb-0 text-danger">Venduta</span>`
                  }
                </div>
                <div class="d-flex gap-2">
                  ${artwork.status === 'available' ?
                    `<a href="checkout.html?id=${artwork.id}" class="btn btn-primary btn-sm">
                      <i class="bi bi-cart-check"></i>
                    </a>` : ''
                  }
                  <a href="opera-single.html?id=${artwork.id}" class="btn btn-outline-light btn-sm">
                    Dettagli
                  </a>
                </div>
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
  
  updateStats() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
      resultsCount.textContent = this.filteredArtworks.length;
    }
    
    const availableCount = document.getElementById('availableArtworksCount');
    if (availableCount) {
      const available = this.filteredArtworks.filter(a => a.status === 'available').length;
      availableCount.textContent = available;
    }
  }
  
  updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    if (!container) return;
    
    container.innerHTML = '';
    const activeFilters = [];
    
    if (this.filters.search) {
      activeFilters.push({ label: `Ricerca: "${this.filters.search}"`, type: 'search' });
    }
    if (this.filters.category !== 'all') {
      activeFilters.push({ label: this.getCategoryName(this.filters.category), type: 'category' });
    }
    if (this.filters.priceRange !== 'all') {
      activeFilters.push({ label: `Prezzo: ${this.filters.priceRange.replace('-', ' - €')}`, type: 'price' });
    }
    
    if (activeFilters.length > 0) {
      container.classList.remove('d-none');
      activeFilters.forEach(filter => {
        const badge = document.createElement('span');
        badge.className = 'badge bg-primary d-inline-flex align-items-center gap-2';
        badge.innerHTML = `
          ${filter.label}
          <i class="bi bi-x-circle" style="cursor: pointer;"></i>
        `;
        badge.querySelector('i').addEventListener('click', () => this.removeFilter(filter.type));
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
    const loadingState = document.getElementById('loadingState');
    
    if (loadingState) loadingState.classList.add('d-none');
    if (container) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-exclamation-triangle fs-1 text-danger mb-3"></i>
          <h3 class="h4 mb-2">Errore nel caricamento</h3>
          <p class="text-secondary">Non è stato possibile caricare le opere. Riprova più tardi.</p>
        </div>
      `;
    }
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

