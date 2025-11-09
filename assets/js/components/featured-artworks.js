/**
 * Featured Artworks Component for Homepage
 * Carica dinamicamente le opere featured da artworks.json
 * Usa traduzioni dal JSON per titoli e descrizioni
 */

class FeaturedArtworks {
  constructor() {
    this.artworks = [];
    this.currentLang = window.i18n ? window.i18n.currentLang : 'it';
    this.init();
  }

  async init() {
    try {
      await this.loadArtworks();
      this.renderArtworks();
      this.setupLanguageListener();
      console.log('✅ Featured Artworks caricati:', this.artworks.length);
    } catch (error) {
      console.error('❌ Errore caricamento featured artworks:', error);
      this.showError(error);
    }
  }

  showError(error) {
    const container = document.getElementById('featured-artworks-grid');
    if (container) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-exclamation-triangle-fill text-danger fs-1 mb-3 d-block"></i>
          <h3 class="h5 text-white mb-2">Errore caricamento opere</h3>
          <p class="text-secondary mb-3">${error.message}</p>
          <button class="btn btn-outline-primary" onclick="location.reload()">
            <i class="bi bi-arrow-clockwise me-2"></i>
            Riprova
          </button>
        </div>
      `;
    }
  }

  async loadArtworks() {
    console.log('🔄 Inizio caricamento artworks.json...');
    try {
      const response = await fetch('assets/data/artworks.json?v=' + Date.now());
      console.log('📡 Response ricevuta:', response.status, response.ok);
      
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      
      const data = await response.json();
      console.log('📦 JSON parsato, chiavi:', Object.keys(data));
      
      // Filtra solo opere featured (data.artworks perché il JSON ha {artworks: [...]})
      const artworksArray = data.artworks || data;
      console.log('🔍 Opere totali:', artworksArray.length);
      
      this.artworks = artworksArray.filter(art => art.featured === true).slice(0, 3);
      console.log('⭐ Opere featured trovate:', this.artworks.length);
      console.log('📋 IDs:', this.artworks.map(a => a.id));
      
      if (this.artworks.length === 0) {
        throw new Error('Nessuna opera featured trovata nel JSON');
      }
    } catch (error) {
      console.error('❌ Errore in loadArtworks():', error);
      throw error;
    }
  }

  renderArtworks() {
    console.log('🎨 Inizio rendering artworks...');
    const container = document.getElementById('featured-artworks-grid');
    if (!container) {
      console.error('❌ Container #featured-artworks-grid NON TROVATO!');
      return;
    }

    console.log('✅ Container trovato, opere da renderizzare:', this.artworks.length);
    container.innerHTML = '';

    this.artworks.forEach((artwork, index) => {
      console.log(`🖼️  Rendering opera ${artwork.id}...`);
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6';
      col.setAttribute('data-aos', 'fade-up');
      col.setAttribute('data-aos-delay', (index + 1) * 100);

      // Ottieni titolo tradotto
      const title = window.ArtworkI18n ? 
        window.ArtworkI18n.getTranslatedField(artwork.title) : 
        (typeof artwork.title === 'object' ? artwork.title.it : artwork.title);

      // Ottieni descrizione breve tradotta (se esiste)
      let shortDesc = '';
      if (window.ArtworkI18n && artwork.description && artwork.description.short) {
        shortDesc = window.ArtworkI18n.getTranslatedField(artwork.description.short);
      } else if (artwork.description && artwork.description.short) {
        // Fallback: se short è un oggetto con traduzioni, usa l'italiano
        shortDesc = typeof artwork.description.short === 'object' ? 
          (artwork.description.short.it || '') : 
          (artwork.description.short || '');
      }

      // Badge disponibilità
      const availabilityText = window.i18n ? window.i18n.t('artworks.available') : 'Disponibile';
      const badgeClass = artwork.status === 'available' ? 'bg-success' : 'bg-warning';

      // Traduzioni statiche
      const viewDetailsText = window.i18n ? window.i18n.t('artworks.view_details') : 'Vedi Dettagli';
      const techniqueLabel = window.i18n ? window.i18n.t('artworks.technique_label') : 'Tecnica';
      const materialChalks = window.i18n ? window.i18n.t('artworks.material_colored_chalks') : 'Crete colorate';
      const materialCardboard = window.i18n ? window.i18n.t('artworks.material_cardboard') : 'Cartoncino';
      const detailsText = window.i18n ? window.i18n.t('artworks.details') : 'Scopri';
      const artworkAlt = window.i18n ? window.i18n.t('artworks.artwork_alt') : 'Opera d\'arte';

      // Immagine sicura (fallback multipli)
      const imgSrc = artwork.images?.thumbnail || 
                     artwork.images?.positive?.main || 
                     artwork.images?.negative?.main || 
                     'assets/images/opere/placeholder.jpg';

      col.innerHTML = `
        <article class="artwork-card glass-card h-100 rounded-4 overflow-hidden" role="article">
          
          <!-- Image -->
          <div class="artwork-image position-relative">
            <img src="${imgSrc}" 
                 alt="${artworkAlt}" 
                 class="img-fluid w-100" 
                 style="aspect-ratio: 4/3; object-fit: cover;" 
                 loading="lazy">
            
            <!-- Quick View Overlay -->
            <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
              <a href="opera-single.html?id=${artwork.id}" class="btn btn-primary btn-sm" aria-label="${viewDetailsText}">
                <i class="bi bi-eye me-2"></i>
                <span>${viewDetailsText}</span>
              </a>
            </div>
            
            <!-- Badge -->
            <span class="badge ${badgeClass} position-absolute" style="top: 8px; right: 8px; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
              ${availabilityText}
            </span>
          </div>
          
          <!-- Card Body -->
          <div class="card-body p-4">
            <h3 class="h5 mb-3 text-white" style="line-height: 1.4;">${title}</h3>
            <p class="text-secondary small mb-3" style="line-height: 1.5;">
              <span>${techniqueLabel}:</span> #<span style="color: #0099FF;">negativo</span><span style="color: #FFD700;">è</span><span style="color: #FF6600;">positivo</span>® | ${artwork.year}
            </p>
            
            <!-- Details -->
            <div class="artwork-details d-flex flex-wrap gap-2 mb-4">
              <span class="badge bg-dark-subtle text-white-50">${artwork.dimensions.width}×${artwork.dimensions.height} ${artwork.dimensions.unit}</span>
              <span class="badge bg-dark-subtle text-white-50">${materialChalks}</span>
              <span class="badge bg-dark-subtle text-white-50">${materialCardboard}</span>
            </div>
            
            <!-- Price & CTA -->
            <div class="d-flex align-items-center justify-content-between">
              <div class="price">
                <span class="h4 mb-0 text-gradient fw-bold">€ ${artwork.price.toLocaleString()}</span>
              </div>
              <a href="opera-single.html?id=${artwork.id}" class="btn btn-outline-light btn-sm">
                <span>${detailsText}</span>
              </a>
            </div>
          </div>
          
        </article>
      `;

      container.appendChild(col);
    });
  }

  setupLanguageListener() {
    window.addEventListener('languageChanged', () => {
      this.currentLang = window.i18n ? window.i18n.currentLang : 'it';
      console.log('🌐 Lingua cambiata in featured artworks:', this.currentLang);
      this.renderArtworks();
    });
  }
}

// Inizializza quando DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.featuredArtworks = new FeaturedArtworks();
  });
} else {
  window.featuredArtworks = new FeaturedArtworks();
}

