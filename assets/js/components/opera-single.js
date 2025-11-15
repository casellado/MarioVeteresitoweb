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
    
    // Apply translations (i18n is guaranteed to be ready at this point)
    if (window.i18n) {
      console.log('🔄 Applicazione traduzioni iniziale...');
      window.i18n.applyTranslations();
      window.i18n.setupLanguageSelectors();
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', () => {
      console.log('🌍 Lingua cambiata, aggiorno contenuto dinamico...');
      this.updateDynamicTranslations();
      // Re-render related artworks with new translations
      this.loadRelatedArtworks();
    });
  }
  
  updateDynamicTranslations() {
    if (!this.artwork) return;
    
    // Update status badge
    const statusBadge = document.getElementById('operaStatus');
    if (statusBadge) {
      if (this.artwork.status === 'available') {
        statusBadge.textContent = window.i18n.t('opera.status_available');
      } else {
        statusBadge.textContent = window.i18n.t('opera.status_sold');
      }
    }
    
    // Update price if sold
    const priceEl = document.getElementById('operaPrice');
    if (priceEl && this.artwork.status !== 'available') {
      priceEl.textContent = window.i18n.t('opera.status_sold');
    }
    
    // Update TITLE & DESCRIPTIONS (NUOVO SISTEMA)
    const title = window.ArtworkI18n ? window.ArtworkI18n.getTranslatedField(this.artwork.title) : this.artwork.title;
    const shortDesc = window.ArtworkI18n && this.artwork.description && this.artwork.description.short ? 
      window.ArtworkI18n.getTranslatedField(this.artwork.description.short) : 
      (this.artwork.description ? this.artwork.description.short || '' : '');
    const fullDesc = window.ArtworkI18n && this.artwork.description && this.artwork.description.full ? 
      window.ArtworkI18n.getTranslatedField(this.artwork.description.full) : 
      (this.artwork.description ? this.artwork.description.full || '' : '');
    
    // Update DOM elements
    const titleEl = document.getElementById('operaTitle');
    const shortDescEl = document.getElementById('operaShortDesc');
    const fullDescEl = document.getElementById('operaDescription');
    const breadcrumbEl = document.getElementById('breadcrumbTitle');
    
    if (titleEl) titleEl.textContent = title;
    if (shortDescEl) shortDescEl.textContent = shortDesc;
    if (fullDescEl) fullDescEl.textContent = fullDesc;
    if (breadcrumbEl) breadcrumbEl.textContent = title;
    
    // Update page title
    document.title = `${title} | Mario Vetere Art`;
    
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
      console.log('📥 Caricamento opera ID:', this.operaId);
      const response = await fetch('assets/data/artworks.json?v=' + Date.now());
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ JSON caricato, opere disponibili:', data.artworks.length);
      
      this.artwork = data.artworks.find(a => a.id == this.operaId);
      
      if (!this.artwork) {
        console.error('❌ Opera non trovata con ID:', this.operaId);
        console.log('IDs disponibili:', data.artworks.map(a => a.id));
        alert('Opera non trovata. Verrai reindirizzato alla galleria.');
        window.location.href = 'opere.html';
        return;
      }
      
      console.log('✅ Opera caricata:', this.artwork.title);
      this.populatePageData();
      
      // Apply translations immediately after populating data
      if (window.i18n && window.i18n.isReady) {
        window.i18n.applyTranslations();
        console.log('🌍 Traduzioni applicate dopo caricamento dati');
      }
      
    } catch (error) {
      console.error('❌ Errore caricamento opera:', error);
      alert('Errore nel caricamento dell\'opera. Verrai reindirizzato alla galleria.');
      window.location.href = 'opere.html';
    }
  }
  
  populatePageData() {
    const art = this.artwork;
    
    // Get translated artwork data (NUOVO SISTEMA)
    const title = window.ArtworkI18n ? window.ArtworkI18n.getTranslatedField(art.title) : art.title;
    const shortDesc = window.ArtworkI18n && art.description && art.description.short ? 
      window.ArtworkI18n.getTranslatedField(art.description.short) : 
      (art.description ? art.description.short || '' : '');
    const fullDesc = window.ArtworkI18n && art.description && art.description.full ? 
      window.ArtworkI18n.getTranslatedField(art.description.full) : 
      (art.description ? art.description.full || '' : '');
    
    // Page title
    document.title = `${title} | Mario Vetere Art`;
    
    // Breadcrumb
    document.getElementById('breadcrumbTitle').textContent = title;
    
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
    
    // Title & Description (USANO TRADUZIONI)
    document.getElementById('operaTitle').textContent = title;
    document.getElementById('operaShortDesc').textContent = shortDesc;
    document.getElementById('operaDescription').textContent = fullDesc;
    
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
    document.getElementById('operaCollection').textContent = art.collection || '—';
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
      const response = await fetch('assets/data/artworks.json?v=' + Date.now());
      const data = await response.json();
      
      const container = document.getElementById('relatedArtworksContainer');
      const relatedSection = document.querySelector('.related-artworks-section');
      if (!container) return;
      
      // Get related artworks - ONLY same collection (no fallback)
      let related = [];
      
      // Only show related if collection is defined and not empty
      if (this.artwork.collection && this.artwork.collection.trim() !== '') {
        related = data.artworks
          .filter(a => a.collection === this.artwork.collection && a.id !== this.artwork.id)
          .slice(0, 3);
      }
      
      // If no related artworks found, hide the entire section
      if (related.length === 0) {
        if (relatedSection) {
          relatedSection.style.display = 'none';
        }
        console.log('ℹ️ Nessuna opera correlata trovata per questa collezione');
        return;
      }
      
      // Show section if it was hidden
      if (relatedSection) {
        relatedSection.style.display = 'block';
      }
      
      // Render related artworks
      container.innerHTML = '';
      related.forEach((art, index) => {
        container.appendChild(this.createRelatedCard(art, index));
      });
      
      // Re-init AOS
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
      
      // Re-apply translations for dynamic content
      if (window.i18n && window.i18n.isReady) {
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
    
    // Get translated title using ArtworkI18n system
    const title = window.ArtworkI18n ? window.ArtworkI18n.getTranslatedField(artwork.title) : artwork.title;
    
    // Get translated alt text
    const altText = window.i18n ? window.i18n.t('artworks.artwork_alt') : 'Opera d\'arte';
    
    // Parse technique for material and support with translations
    const techniqueParts = artwork.technique.split(' su ');
    const materialRaw = techniqueParts[0] || 'Crete colorate';
    const supportRaw = techniqueParts[1] || 'Cartoncino';
    
    // Translate materials if they match known values
    let material = materialRaw;
    let support = supportRaw;
    
    if (window.i18n) {
      if (materialRaw.toLowerCase().includes('crete colorate') || materialRaw.toLowerCase().includes('colored chalk')) {
        material = window.i18n.t('artworks.material_colored_chalks');
      }
      if (supportRaw.toLowerCase().includes('cartoncino') || supportRaw.toLowerCase().includes('cardboard')) {
        support = window.i18n.t('artworks.material_cardboard');
      }
    }
    
    // Generate badge with proper i18n
    let badge = '';
    if (artwork.featured) {
      const featuredText = window.i18n ? window.i18n.t('artworks.featured') : 'In Evidenza';
      badge = `<span class="badge bg-warning text-dark position-absolute" style="top: 8px; right: 8px; z-index: 10;">${featuredText}</span>`;
    } else if (artwork.status === 'available') {
      const availableText = window.i18n ? window.i18n.t('artworks.available') : 'Disponibile';
      badge = `<span class="badge bg-success position-absolute" style="top: 8px; right: 8px; z-index: 10;">${availableText}</span>`;
    }
    
    // Get translated texts
    const viewDetailsText = window.i18n ? window.i18n.t('artworks.view_details') : 'Vedi Dettagli';
    const techniqueText = window.i18n ? window.i18n.t('artworks.technique_label') : 'Tecnica';
    const soldText = window.i18n ? window.i18n.t('artworks.sold') : 'Venduta';
    const detailsText = window.i18n ? window.i18n.t('artworks.details') : 'Scopri';
    
    // Image source priority: negative -> thumbnail -> positive
    const imgSrc = artwork.images?.negative?.main || 
                   artwork.images?.thumbnail || 
                   artwork.images?.positive?.main || 
                   'assets/images/opere/placeholder.jpg';
    
    col.innerHTML = `
      <article class="artwork-card glass-card h-100 rounded-4 overflow-hidden" role="article">
        <div class="artwork-image position-relative artwork-image-adaptive">
          <img src="${imgSrc}" alt="${altText}" class="img-fluid" loading="lazy">
          <div class="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
            <a href="opera-single.html?id=${artwork.id}" class="btn btn-primary btn-sm">
              <i class="bi bi-eye me-2"></i>
              <span>${viewDetailsText}</span>
            </a>
          </div>
          ${badge}
        </div>
        <div class="card-body p-4">
          <h3 class="h5 mb-3 text-white" style="line-height: 1.4;">${title}</h3>
          <p class="text-secondary small mb-3" style="line-height: 1.5;">
            <span>${techniqueText}</span>: #<span style="color: #0099FF;">negativo</span><span style="color: #FFD700;">è</span><span style="color: #FF6600;">positivo</span>® | ${artwork.year}
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
                `<span class="h5 mb-0 text-danger">${soldText}</span>`
              }
            </div>
            <a href="opera-single.html?id=${artwork.id}" class="btn btn-outline-light btn-sm">${detailsText}</a>
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

// Share Functions - Social Media Sharing for Artwork
function shareOnInstagram() {
  // Instagram doesn't support direct web sharing, show instructions
  const artworkTitle = document.getElementById('operaTitle').textContent;
  const message = `📸 Per condividere "${artworkTitle}" su Instagram:\n\n1. Fai uno screenshot di questa pagina\n2. Apri Instagram e crea un nuovo post\n3. Usa l'hashtag #negativoèpositivo e tagga @mario_vetere_art\n\n✨ Grazie per condividere l'arte!`;
  alert(message);
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const artworkTitle = document.getElementById('operaTitle').textContent;
  const text = encodeURIComponent(`Guarda quest'opera d'arte: "${artworkTitle}" con la tecnica #negativoèpositivo® di Mario Vetere`);
  
  // Check if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Mobile: use WhatsApp app
    window.location.href = `whatsapp://send?text=${text}%20${url}`;
  } else {
    // Desktop: use WhatsApp Web
    window.open(`https://web.whatsapp.com/send?text=${text}%20${url}`, '_blank', 'width=600,height=600');
  }
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href);
  const artworkTitle = document.getElementById('operaTitle').textContent;
  const text = encodeURIComponent(`"${artworkTitle}" - Opera d'arte con tecnica #negativoèpositivo® di Mario Vetere`);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnPinterest() {
  const url = encodeURIComponent(window.location.href);
  const media = encodeURIComponent(document.getElementById('positiveImage').src);
  const artworkTitle = document.getElementById('operaTitle').textContent;
  const description = encodeURIComponent(`${artworkTitle} - Tecnica #negativoèpositivo® di Mario Vetere`);
  window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`, '_blank', 'width=750,height=550');
}

function shareViaEmail() {
  const artworkTitle = document.getElementById('operaTitle').textContent;
  const artworkPrice = document.getElementById('operaPrice').textContent;
  const url = window.location.href;
  
  const subject = encodeURIComponent(`Opera d'arte: ${artworkTitle} - Mario Vetere`);
  const body = encodeURIComponent(
    `Ciao!\n\nVolevo condividere con te questa splendida opera d'arte:\n\n` +
    `"${artworkTitle}"\n` +
    `Artista: Mario Vetere\n` +
    `Tecnica: #negativoèpositivo® (brevettata)\n` +
    `Prezzo: ${artworkPrice}\n\n` +
    `Guarda i dettagli qui:\n${url}\n\n` +
    `La tecnica #negativoèpositivo® è unica al mondo: l'opera viene dipinta in negativo con i polpastrelli e rivelata in positivo attraverso la fotografia.\n\n` +
    `Scopri di più su Mario Vetere: https://casellado.github.io/MarioVeteresitoweb/\n\n` +
    `Un saluto!`
  );
  
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
  const url = window.location.href;
  
  // Try modern clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      // Show success message with better UX
      const alertMsg = window.i18n ? window.i18n.t('opera.link_copied') : '✅ Link copiato negli appunti!';
      
      // Create toast notification (optional, better than alert)
      const toast = document.createElement('div');
      toast.className = 'position-fixed bottom-0 start-50 translate-middle-x mb-4 px-4 py-3 bg-success text-white rounded-3 shadow-lg';
      toast.style.zIndex = '9999';
      toast.innerHTML = '<i class="bi bi-check-circle me-2"></i>' + alertMsg;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }).catch(err => {
      console.error('Errore copia link:', err);
      fallbackCopyLink(url);
    });
  } else {
    // Fallback for older browsers
    fallbackCopyLink(url);
  }
}

function fallbackCopyLink(url) {
  // Fallback method for older browsers
  const textArea = document.createElement('textarea');
  textArea.value = url;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('✅ Link copiato negli appunti!');
  } catch (err) {
    alert('❌ Impossibile copiare il link. Copia manualmente: ' + url);
  }
  
  document.body.removeChild(textArea);
}

// Initialize
let operaSingle;

function initOperaSingle() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      operaSingle = new OperaSingle();
    });
  } else {
    operaSingle = new OperaSingle();
  }
}

// CRITICAL: Wait for i18n to be ready FIRST
// Check both immediate state and event, because event might have already fired
if (window.i18n && (window.i18n.isReady || window.i18n.currentLang)) {
  console.log('✅ i18n già pronto, inizializzo Opera Single...');
  initOperaSingle();
} else {
  console.log('⏳ Attendo i18n ready event...');
  
  // Set timeout as fallback in case event never fires
  const fallbackTimer = setTimeout(() => {
    console.warn('⚠️ Timeout i18n, inizializzo comunque...');
    initOperaSingle();
  }, 3000);
  
  window.addEventListener('i18nReady', () => {
    clearTimeout(fallbackTimer);
    console.log('✅ i18n ready ricevuto, inizializzo Opera Single...');
    initOperaSingle();
  }, { once: true });
}

