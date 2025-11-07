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
    
    // Init AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true });
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
      statusBadge.textContent = 'Disponibile';
      statusBadge.className = 'badge bg-success';
    } else {
      statusBadge.textContent = 'Venduta';
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
      document.getElementById('operaPrice').textContent = 'Venduta';
      document.getElementById('operaPrice').classList.remove('text-gradient');
      document.getElementById('operaPrice').classList.add('text-danger');
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
    const revealWrapper = document.querySelector('.reveal-wrapper');
    const slider = document.querySelector('.reveal-slider');
    const positiveOverlay = document.querySelector('.positive-overlay');
    
    if (!revealWrapper || !slider || !positiveOverlay) return;
    
    // Mouse events
    slider.addEventListener('mousedown', () => {
      this.isDragging = true;
      document.body.style.cursor = 'ew-resize';
    });
    
    document.addEventListener('mouseup', () => {
      this.isDragging = false;
      document.body.style.cursor = '';
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      this.updateReveal(e.clientX, revealWrapper, slider, positiveOverlay);
    });
    
    // Touch events
    slider.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      e.preventDefault();
    });
    
    document.addEventListener('touchend', () => {
      this.isDragging = false;
    });
    
    document.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      const touch = e.touches[0];
      this.updateReveal(touch.clientX, revealWrapper, slider, positiveOverlay);
      e.preventDefault();
    });
  }
  
  updateReveal(clientX, wrapper, slider, overlay) {
    const rect = wrapper.getBoundingClientRect();
    let x = clientX - rect.left;
    
    // Clamp between 0 and width
    x = Math.max(0, Math.min(x, rect.width));
    
    const percentage = (x / rect.width) * 100;
    
    // Update slider position
    slider.style.left = `${percentage}%`;
    
    // Update clip-path
    overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
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

