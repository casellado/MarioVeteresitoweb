/**
 * Opera Single - Detail Page Logic
 * Mario Vetere Marketplace
 */

class OperaSingle {
  constructor() {
    this.artwork = null;
    this.operaId = null;
    this.isDragging = false;
    
    this.init();
  }
  
  async init() {
    console.log('🎨 Inizializzazione Opera Single...');
    
    // Get opera ID from URL
    this.operaId = this.getOperaIdFromURL();
    
    if (!this.operaId) {
      console.error('❌ Nessun ID opera trovato nell\'URL');
      window.location.href = 'opere.html';
      return;
    }
    
    // Load artwork data
    await this.loadArtwork();
    
    // Setup reveal effect
    this.setupRevealEffect();
    
    // Setup form
    this.setupForm();
    
    // Load related artworks
    this.loadRelatedArtworks();
    
    // Setup lightbox gallery
    this.setupLightbox();
    
    // Setup buy button
    this.setupBuyButton();
    
    // Init AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true });
    }
    
    // CRITICAL: Re-apply translations after DOM manipulation
    if (window.i18n) {
      console.log('🔄 Riapplicazione traduzioni dopo caricamento opera...');
      window.i18n.applyTranslations();
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', () => {
      console.log('🌍 Lingua cambiata, aggiorno contenuto dinamico...');
      this.updateDynamicTranslations();
    });
  }
  
  updateDynamicTranslations() {
    // Update status badge
    const statusBadge = document.getElementById('operaStatus');
    if (statusBadge && this.artwork) {
      if (this.artwork.status === 'available') {
        statusBadge.textContent = window.i18n.t('opera.status_available');
      } else {
        statusBadge.textContent = window.i18n.t('opera.status_sold');
      }
    }
    
    // Update price if sold
    const priceEl = document.getElementById('operaPrice');
    if (priceEl && this.artwork && this.artwork.status !== 'available') {
      priceEl.textContent = window.i18n.t('opera.status_sold');
    }
    
    // Update reveal button
    const revealBtn = document.getElementById('revealBtn');
    const revealText = document.getElementById('revealText');
    if (revealBtn && revealText) {
      const isRevealed = document.getElementById('positiveImage').style.opacity === '1';
      if (isRevealed) {
        revealText.textContent = window.i18n.t('opera.hide_artwork');
      } else {
        revealText.textContent = window.i18n.t('opera.reveal_button');
      }
    }
    
    // Update buy button if not available
    const buyBtn = document.getElementById('buyNowBtn');
    if (buyBtn && this.artwork && this.artwork.status !== 'available') {
      const notAvailableText = window.i18n.t('opera.not_available');
      buyBtn.innerHTML = `<i class="bi bi-x-circle me-2"></i>${notAvailableText}`;
    }
  }
  
  getOperaIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }
  
  async loadArtwork() {
    try {
      const response = await fetch('assets/data/artworks.json');
      const data = await response.json();
      
      this.artwork = data.artworks.find(a => a.id == this.operaId);
      
      if (!this.artwork) {
        console.error('❌ Opera non trovata');
        window.location.href = 'opere.html';
        return;
      }
      
      console.log('✅ Opera caricata:', this.artwork.title);
      this.populatePageData();
      
    } catch (error) {
      console.error('❌ Errore caricamento opera:', error);
    }
  }
  
  populatePageData() {
    const art = this.artwork;
    
    // Page title
    document.title = `${art.title} | Mario Vetere Art`;
    
    // Breadcrumb
    document.getElementById('breadcrumbTitle').textContent = art.title;
    
    // Status badges
    const statusBadge = document.getElementById('operaStatus');
    const featuredBadge = document.getElementById('operaFeatured');
    
    if (art.featured) {
      featuredBadge.style.display = 'inline-block';
    }
    
    if (art.status === 'available') {
      statusBadge.setAttribute('data-i18n', 'opera.status_available');
      statusBadge.textContent = window.i18n ? window.i18n.t('opera.status_available') : 'Disponibile';
      statusBadge.className = 'badge bg-success';
    } else {
      statusBadge.setAttribute('data-i18n', 'opera.status_sold');
      statusBadge.textContent = window.i18n ? window.i18n.t('opera.status_sold') : 'Venduta';
      statusBadge.className = 'badge bg-danger';
    }
    
    // Title & Description
    document.getElementById('operaTitle').textContent = art.title;
    document.getElementById('operaShortDesc').textContent = art.description.short;
    document.getElementById('operaDescription').textContent = art.description.full;
    
    // Price
    if (art.status === 'available') {
      document.getElementById('operaPrice').textContent = `€ ${art.price.toLocaleString('it-IT')}`;
    } else {
      const priceEl = document.getElementById('operaPrice');
      priceEl.setAttribute('data-i18n', 'opera.status_sold');
      priceEl.textContent = window.i18n ? window.i18n.t('opera.status_sold') : 'Venduta';
      priceEl.classList.remove('text-gradient');
      priceEl.classList.add('text-danger');
    }
    
    // Technical details
    const techniqueParts = art.technique.split(' su ');
    document.getElementById('operaMaterial').textContent = techniqueParts[0] || 'Crete colorate';
    document.getElementById('operaSupport').textContent = techniqueParts[1] || 'Cartoncino';
    document.getElementById('operaDimensions').textContent = `${art.dimensions.width}×${art.dimensions.height} ${art.dimensions.unit}`;
    document.getElementById('operaYear').textContent = art.year;
    document.getElementById('operaCertificate').textContent = art.certificate.number;
    
    // Images
    if (art.images.negative && art.images.negative.main) {
      document.getElementById('negativeImage').src = art.images.negative.main;
    }
    if (art.images.positive && art.images.positive.main) {
      document.getElementById('positiveImage').src = art.images.positive.main;
    }
    
    // Update meta tags for SEO
    this.updateMetaTags();
  }
  
  updateMetaTags() {
    const art = this.artwork;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = art.seo.metaDescription;
    }
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = art.seo.metaTitle;
  }
  
  setupRevealEffect() {
    // Reveal effect con zoom moderno
    const revealBtn = document.getElementById('revealBtn');
    const positiveImage = document.getElementById('positiveImage');
    const negativeImage = document.getElementById('negativeImage');
    const revealWrapper = document.querySelector('.reveal-canvas-wrapper');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const zoomInfo = document.getElementById('zoomInfo');
    const zoomLevelSpan = document.getElementById('zoomLevel');
    
    if (!revealBtn || !positiveImage || !revealWrapper) return;
    
    let isRevealed = false;
    let currentZoom = 1;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    
    // Touch pinch variables
    let initialDistance = 0;
    let initialZoom = 1;
    
    // Reveal toggle
    revealBtn.addEventListener('click', () => {
      isRevealed = !isRevealed;
      
      if (isRevealed) {
        positiveImage.style.opacity = '1';
        const hideText = window.i18n ? window.i18n.t('opera.hide_artwork') : 'Nascondi Opera';
        revealBtn.innerHTML = `<i class="bi bi-eye-slash me-2"></i><span>${hideText}</span>`;
      } else {
        positiveImage.style.opacity = '0';
        const revealText = window.i18n ? window.i18n.t('opera.reveal_button') : 'Rivela l\'Opera';
        revealBtn.innerHTML = `<i class="bi bi-eye me-2"></i><span>${revealText}</span>`;
      }
    });
    
    // Fullscreen toggle
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          revealWrapper.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
          });
          fullscreenBtn.innerHTML = '<i class="bi bi-fullscreen-exit"></i>';
        } else {
          document.exitFullscreen();
          fullscreenBtn.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>';
        }
      });
      
      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          fullscreenBtn.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>';
        }
      });
    }
    
    // Mouse wheel zoom (PC)
    revealWrapper.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const newZoom = Math.max(1, Math.min(5, currentZoom + delta));
      
      if (newZoom !== currentZoom) {
        currentZoom = newZoom;
        updateZoom();
      }
    }, { passive: false });
    
    // Mouse drag (PC)
    revealWrapper.addEventListener('mousedown', (e) => {
      if (currentZoom > 1) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        revealWrapper.style.cursor = 'grabbing';
        e.preventDefault();
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      
      const maxTranslate = 100 * currentZoom;
      translateX = Math.max(-maxTranslate, Math.min(maxTranslate, translateX));
      translateY = Math.max(-maxTranslate, Math.min(maxTranslate, translateY));
      
      updateTransform();
    });
    
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        revealWrapper.style.cursor = currentZoom > 1 ? 'grab' : 'default';
      }
    });
    
    // Touch pinch zoom (Mobile)
    revealWrapper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        // Pinch start
        e.preventDefault();
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        initialZoom = currentZoom;
      } else if (e.touches.length === 1 && currentZoom > 1) {
        // Drag start
        isDragging = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
      }
    }, { passive: false });
    
    revealWrapper.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        // Pinch zoom
        e.preventDefault();
        const currentDistance = getDistance(e.touches[0], e.touches[1]);
        const scale = currentDistance / initialDistance;
        currentZoom = Math.max(1, Math.min(5, initialZoom * scale));
        updateZoom();
      } else if (e.touches.length === 1 && isDragging) {
        // Drag
        e.preventDefault();
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        
        const maxTranslate = 100 * currentZoom;
        translateX = Math.max(-maxTranslate, Math.min(maxTranslate, translateX));
        translateY = Math.max(-maxTranslate, Math.min(maxTranslate, translateY));
        
        updateTransform();
      }
    }, { passive: false });
    
    revealWrapper.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        isDragging = false;
      }
    });
    
    // Helper functions
    function getDistance(touch1, touch2) {
      const dx = touch2.clientX - touch1.clientX;
      const dy = touch2.clientY - touch1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
    
    function updateZoom() {
      updateTransform();
      
      // Show/hide zoom info
      if (currentZoom > 1) {
        zoomInfo.style.display = 'block';
        zoomLevelSpan.textContent = Math.round(currentZoom * 100);
        revealWrapper.style.cursor = 'grab';
      } else {
        zoomInfo.style.display = 'none';
        revealWrapper.style.cursor = 'default';
        translateX = 0;
        translateY = 0;
      }
    }
    
    function updateTransform() {
      const transform = `scale(${currentZoom}) translate(${translateX / currentZoom}px, ${translateY / currentZoom}px)`;
      negativeImage.style.transform = transform;
      positiveImage.style.transform = transform;
      negativeImage.style.transformOrigin = 'center center';
      positiveImage.style.transformOrigin = 'center center';
    }
  }
  
  setupForm() {
    const form = document.getElementById('requestInfoForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        phone: document.getElementById('userPhone').value,
        message: document.getElementById('userMessage').value,
        artwork: this.artwork.title,
        artworkId: this.artwork.id
      };
      
      console.log('📧 Invio richiesta:', formData);
      
      // TODO: Integrate with EmailJS
      alert('Grazie per la tua richiesta! Ti contatteremo presto.');
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('requestInfoModal'));
      if (modal) modal.hide();
      
      // Reset form
      form.reset();
    });
  }
  
  async loadRelatedArtworks() {
    try {
      const response = await fetch('assets/data/artworks.json');
      const data = await response.json();
      
      // Get related artworks (same category, excluding current)
      const related = data.artworks
        .filter(a => a.category === this.artwork.category && a.id !== this.artwork.id)
        .slice(0, 3);
      
      // If not enough, add others
      if (related.length < 3) {
        const others = data.artworks
          .filter(a => a.id !== this.artwork.id && !related.find(r => r.id === a.id))
          .slice(0, 3 - related.length);
        related.push(...others);
      }
      
      const container = document.getElementById('relatedArtworksContainer');
      if (!container) return;
      
      container.innerHTML = '';
      related.forEach((art, index) => {
        container.appendChild(this.createRelatedCard(art, index));
      });
      
      // Re-init AOS
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
      
      // Re-apply translations for dynamic content
      if (window.i18n) {
        window.i18n.applyTranslations();
      }
      
    } catch (error) {
      console.error('❌ Errore caricamento opere correlate:', error);
    }
  }
  
  createRelatedCard(artwork, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', (index * 100).toString());
    
    const techniqueParts = artwork.technique.split(' su ');
    const material = techniqueParts[0] || 'Crete colorate';
    const support = techniqueParts[1] || 'Cartoncino';
    
    let badge = '';
    if (artwork.featured) {
      badge = '<span class="badge bg-warning text-dark position-absolute" style="top: 8px; right: 8px; z-index: 10;" data-i18n="artworks.featured">In Evidenza</span>';
    } else if (artwork.status === 'available') {
      badge = '<span class="badge bg-success position-absolute" style="top: 8px; right: 8px; z-index: 10;" data-i18n="artworks.available">Disponibile</span>';
    }
    
    col.innerHTML = `
      <article class="artwork-card glass-card h-100 rounded-4 overflow-hidden" role="article">
        <div class="artwork-image position-relative">
          <img src="${artwork.images.thumbnail}" alt="Opera d'arte" class="img-fluid w-100" style="aspect-ratio: 4/3; object-fit: cover;" loading="lazy">
          <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
            <a href="opera-single.html?id=${artwork.id}" class="btn btn-primary btn-sm">
              <i class="bi bi-eye me-2"></i>
              <span data-i18n="artworks.view_details">Vedi Dettagli</span>
            </a>
          </div>
          ${badge}
        </div>
        <div class="card-body p-4">
          <h3 class="h5 mb-3 text-white" style="line-height: 1.4;">${artwork.title}</h3>
          <p class="text-secondary small mb-3" style="line-height: 1.5;">
            <span data-i18n="artworks.technique_label">Tecnica</span>: #<span style="color: #0099FF;">negativo</span><span style="color: #FFD700;">è</span><span style="color: #FF6600;">positivo</span>® | ${artwork.year}
          </p>
          <div class="artwork-details d-flex flex-wrap gap-2 mb-4">
            <span class="badge bg-dark-subtle text-white-50">${artwork.dimensions.width}×${artwork.dimensions.height} cm</span>
            <span class="badge bg-dark-subtle text-white-50">${material}</span>
            <span class="badge bg-dark-subtle text-white-50">${support}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="price">
              ${artwork.status === 'available' ? 
                `<span class="h4 mb-0 text-gradient fw-bold">€ ${artwork.price.toLocaleString('it-IT')}</span>` :
                `<span class="h5 mb-0 text-danger" data-i18n="artworks.sold">Venduta</span>`
              }
            </div>
            <a href="opera-single.html?id=${artwork.id}" class="btn btn-outline-light btn-sm" data-i18n="artworks.details">Scopri</a>
          </div>
        </div>
      </article>
    `;
    
    return col;
  }
  
  setupLightbox() {
    // Create gallery items array
    const galleryItems = [];
    
    if (this.artwork.images.negative && this.artwork.images.negative.main) {
      galleryItems.push({
        src: this.artwork.images.negative.main,
        w: 1200,
        h: 900,
        title: `${this.artwork.title} - Negativo`
      });
    }
    
    if (this.artwork.images.positive && this.artwork.images.positive.main) {
      galleryItems.push({
        src: this.artwork.images.positive.main,
        w: 1200,
        h: 900,
        title: `${this.artwork.title} - Positivo`
      });
    }
    
    // Add click event to reveal container to open lightbox
    const revealContainer = document.querySelector('.reveal-container');
    if (revealContainer && typeof PhotoSwipeLightbox !== 'undefined') {
      revealContainer.style.cursor = 'pointer';
      revealContainer.addEventListener('click', (e) => {
        // Don't open if clicking on slider handle
        if (e.target.closest('.reveal-slider')) return;
        
        this.openPhotoSwipe(galleryItems, 0);
      });
    }
  }
  
  openPhotoSwipe(items, index) {
    if (typeof PhotoSwipe === 'undefined') {
      console.warn('PhotoSwipe not loaded');
      return;
    }
    
    const pswp = new PhotoSwipe({
      dataSource: items,
      index: index,
      bgOpacity: 0.95,
      showHideAnimationType: 'zoom'
    });
    
    pswp.init();
  }
  
  setupBuyButton() {
    const buyBtn = document.getElementById('buyNowBtn');
    if (!buyBtn || !this.artwork) return;
    
    // Check if artwork is available
    if (this.artwork.status !== 'available') {
      buyBtn.classList.remove('btn-primary');
      buyBtn.classList.add('btn-secondary');
      const notAvailableText = window.i18n ? window.i18n.t('opera.not_available') : 'Opera Non Disponibile';
      buyBtn.innerHTML = `<i class="bi bi-x-circle me-2"></i>${notAvailableText}`;
      buyBtn.style.pointerEvents = 'none';
      return;
    }
    
    // Add click handler
    buyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = `checkout.html?id=${this.artwork.id}`;
    });
  }
}

// Share Functions
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.getElementById('operaTitle').textContent + ' - Mario Vetere Art');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnPinterest() {
  const url = encodeURIComponent(window.location.href);
  const media = encodeURIComponent(document.getElementById('positiveImage').src);
  const description = encodeURIComponent(document.getElementById('operaTitle').textContent);
  window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`, '_blank', 'width=600,height=400');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Link copiato negli appunti!');
  }).catch(err => {
    console.error('Errore copia link:', err);
  });
}

// Initialize
let operaSingle;
document.addEventListener('DOMContentLoaded', () => {
  operaSingle = new OperaSingle();
});

