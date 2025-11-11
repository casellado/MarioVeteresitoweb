/**
 * BOTTOM NAVIGATION - Mario Vetere Website
 * Native mobile bottom navigation bar
 * Version: 1.0.0
 */

class BottomNavigation {
  constructor() {
    this.nav = null;
    this.currentPage = this.getCurrentPage();
    this.init();
  }
  
  /**
   * Initialize bottom navigation
   */
  init() {
    // Solo su mobile
    if (!this.isMobile()) {
      return;
    }
    
    // Crea navigation
    this.createNav();
    
    // Set active item
    this.setActive(this.currentPage);
    
    // Bind events
    this.bindEvents();
    
    // Show/hide su scroll
    this.setupScrollBehavior();
    
    console.log('[BottomNav] Initialized');
  }
  
  /**
   * Check if mobile device
   */
  isMobile() {
    return window.innerWidth <= 768;
  }
  
  /**
   * Get current page from URL
   */
  getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page === '' ? 'index' : page;
  }
  
  /**
   * Create navigation HTML
   */
  createNav() {
    // Navigation container
    this.nav = document.createElement('nav');
    this.nav.className = 'bottom-nav';
    this.nav.setAttribute('role', 'navigation');
    this.nav.setAttribute('aria-label', 'Navigazione mobile inferiore');
    
    // Navigation items
    const items = [
      {
        id: 'index',
        icon: 'bi-house-fill',
        label: 'Home',
        href: 'index.html',
        dataI18n: 'nav.home'
      },
      {
        id: 'opere',
        icon: 'bi-palette-fill',
        label: 'Opere',
        href: 'opere.html',
        dataI18n: 'nav.artworks'
      },
      {
        id: 'tecnica',
        icon: 'bi-magic',
        label: 'Tecnica',
        href: 'tecnica.html',
        dataI18n: 'nav.technique'
      },
      {
        id: 'chi-sono',
        icon: 'bi-person-fill',
        label: 'Chi Sono',
        href: 'chi-sono.html',
        dataI18n: 'nav.about'
      },
      {
        id: 'contatti',
        icon: 'bi-envelope-fill',
        label: 'Contatti',
        href: 'contatti.html',
        dataI18n: 'nav.contact'
      }
    ];
    
    // Create items HTML
    items.forEach(item => {
      const itemEl = this.createNavItem(item);
      this.nav.appendChild(itemEl);
    });
    
    // Append to body
    document.body.appendChild(this.nav);
    
    // Add padding to body per evitare overlap
    document.body.style.paddingBottom = '70px';
  }
  
  /**
   * Create single nav item
   */
  createNavItem(item) {
    const itemEl = document.createElement('a');
    itemEl.className = 'bottom-nav-item';
    itemEl.href = item.href;
    itemEl.dataset.page = item.id;
    itemEl.setAttribute('aria-label', item.label);
    
    // Icon
    const icon = document.createElement('i');
    icon.className = `bi ${item.icon}`;
    
    // Label
    const label = document.createElement('span');
    label.className = 'bottom-nav-label';
    label.textContent = item.label;
    if (item.dataI18n) {
      label.dataset.i18n = item.dataI18n;
    }
    
    itemEl.appendChild(icon);
    itemEl.appendChild(label);
    
    return itemEl;
  }
  
  /**
   * Set active item
   */
  setActive(pageId) {
    if (!this.nav) return;
    
    // Remove all active
    this.nav.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active to current
    const activeItem = this.nav.querySelector(`[data-page="${pageId}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }
  
  /**
   * Bind click events
   */
  bindEvents() {
    this.nav.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        // Haptic feedback se disponibile
        if ('vibrate' in navigator) {
          navigator.vibrate(10);
        }
        
        // Visual feedback
        item.classList.add('active');
      });
    });
  }
  
  /**
   * Setup scroll behavior - hide/show nav
   */
  setupScrollBehavior() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateNav = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down - hide nav
        this.nav.style.transform = 'translateY(100%)';
      } else {
        // Scrolling up - show nav
        this.nav.style.transform = 'translateY(0)';
      }
      
      lastScrollY = scrollY;
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
  }
  
  /**
   * Destroy instance
   */
  destroy() {
    if (this.nav) {
      this.nav.remove();
      document.body.style.paddingBottom = '';
    }
    console.log('[BottomNav] Destroyed');
  }
}

/**
 * Initialize Bottom Navigation quando DOM è ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Solo su mobile
  const isMobile = window.innerWidth <= 768;
  
  if (!isMobile) {
    return;
  }
  
  // Crea istanza
  window.bottomNav = new BottomNavigation();
  
  console.log('[BottomNav] Ready!');
});

/**
 * Reinizializza su resize (mobile/desktop switch)
 */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile && !window.bottomNav) {
      window.bottomNav = new BottomNavigation();
    } else if (!isMobile && window.bottomNav) {
      window.bottomNav.destroy();
      window.bottomNav = null;
    }
  }, 250);
});

/**
 * Export per usage esterno
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BottomNavigation;
}

