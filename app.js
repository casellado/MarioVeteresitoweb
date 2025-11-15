/**
 * MARIO VETERE MARKETPLACE - Main JavaScript
 * Version: 2.0.0
 * Date: November 2025
 */

// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
  scrollThreshold: 100,
  statsAnimationDuration: 2000,
  revealTransitionDuration: 600,
  navbarHeight: 80,
};

// ========================================
// WAIT FOR DOM READY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 Mario Vetere Marketplace initialized');
  
  // Initialize all components
  initNavigation();
  initColorMode();
  initRevealEffect();
  initStatsCounter();
  initAOS();
  initGSAP();
  initNewsletterForm();
  initSearch();
});

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;
  
  let lastScrollTop = 0;
  let ticking = false;
  
  // Scroll behavior with RAF for performance
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll(navbar, lastScrollTop);
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Active page highlight
  highlightActivePage();
  
  // Close mobile menu on link click
  const mobileMenuLinks = document.querySelectorAll('#mobileMenu .nav-link');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const offcanvasElement = document.getElementById('mobileMenu');
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) offcanvas.hide();
    });
  });
}

function handleScroll(navbar, lastScrollTop) {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const isMobile = window.innerWidth <= 991;
  
  // Add/remove glassmorphism on scroll
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Su mobile, mantieni sempre la navbar visibile per evitare problemi di scroll
  if (isMobile) {
    navbar.style.transform = 'translateY(0)';
    return;
  }
  
  // Hide/show navbar on scroll direction (solo desktop)
  if (currentScroll > lastScrollTop && currentScroll > CONFIG.scrollThreshold) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }
  
  // Prevent negative scroll (mobile bounce)
  if (currentScroll <= 0) {
    navbar.style.transform = 'translateY(0)';
  }
}

function highlightActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

// ========================================
// COLOR MODE TOGGLE
// ========================================

function initColorMode() {
  const toggle = document.getElementById('colorModeToggle');
  const icon = document.getElementById('colorModeIcon');
  
  if (!toggle || !icon) return;
  
  // Get stored preference or default to dark
  const storedMode = localStorage.getItem('colorMode') || 'dark';
  setColorMode(storedMode, icon);
  
  // Toggle on click
  toggle.addEventListener('click', () => {
    const currentMode = document.documentElement.getAttribute('data-bs-theme');
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    setColorMode(newMode, icon);
    localStorage.setItem('colorMode', newMode);
    
    // Update ARIA
    toggle.setAttribute('aria-pressed', newMode === 'light' ? 'true' : 'false');
    
    // Announce to screen readers
    announceColorModeChange(newMode);
  });
}

function setColorMode(mode, icon) {
  document.documentElement.setAttribute('data-bs-theme', mode);
  
  if (icon) {
    icon.className = mode === 'dark' ? 'bi bi-moon-stars fs-5' : 'bi bi-sun fs-5';
  }
}

function announceColorModeChange(mode) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'visually-hidden';
  announcement.textContent = `Tema cambiato a ${mode === 'dark' ? 'scuro' : 'chiaro'}`;
  document.body.appendChild(announcement);
  
  setTimeout(() => announcement.remove(), 1000);
}

// ========================================
// REVEAL EFFECT (Hero Section)
// ========================================

function initRevealEffect() {
  const revealBtn = document.getElementById('revealBtn');
  const heroPositive = document.getElementById('heroPositive');
  const revealText = document.getElementById('revealText');
  
  if (!revealBtn || !heroPositive || !revealText) return;
  
  let isRevealed = false;
  
  revealBtn.addEventListener('click', () => {
    isRevealed = !isRevealed;
    
    if (isRevealed) {
      // Show positive
      heroPositive.style.opacity = '1';
      revealText.textContent = 'Nascondi Opera';
      revealBtn.querySelector('i').className = 'bi bi-eye-slash me-2';
      revealBtn.setAttribute('aria-label', 'Nascondi opera in positivo');
    } else {
      // Show negative
      heroPositive.style.opacity = '0';
      revealText.textContent = 'Rivela l\'Opera';
      revealBtn.querySelector('i').className = 'bi bi-eye me-2';
      revealBtn.setAttribute('aria-label', 'Rivela opera in positivo');
    }
  });
  
  // Optional: Hover effect on desktop
  const revealContainer = document.querySelector('.reveal-canvas-wrapper');
  if (revealContainer && window.innerWidth > 768) {
    revealContainer.addEventListener('mouseenter', () => {
      if (!isRevealed) {
        heroPositive.style.opacity = '0.5';
      }
    });
    
    revealContainer.addEventListener('mouseleave', () => {
      if (!isRevealed) {
        heroPositive.style.opacity = '0';
      }
    });
  }
}

// ========================================
// STATS COUNTER ANIMATION
// ========================================

function initStatsCounter() {
  const stats = document.querySelectorAll('[data-count]');
  if (stats.length === 0) return;
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCount(entry.target);
      }
    });
  }, observerOptions);
  
  stats.forEach(stat => observer.observe(stat));
}

function animateCount(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = CONFIG.statsAnimationDuration;
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }
  
  requestAnimationFrame(update);
}

// ========================================
// AOS (Animate On Scroll) INITIALIZATION
// ========================================

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
      delay: 0,
      anchorPlacement: 'top-bottom'
    });
  }
}

// ========================================
// GSAP ANIMATIONS
// ========================================

function initGSAP() {
  if (typeof gsap === 'undefined') return;
  
  // Register ScrollTrigger plugin
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect on hero background
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 200,
      opacity: 0.5,
      ease: 'none'
    });
    
    // Fade in sections on scroll
    gsap.utils.toArray('section').forEach((section, i) => {
      if (i === 0) return; // Skip hero section
      
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  }
}

// ========================================
// NEWSLETTER FORM
// ========================================

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
      showNotification('Inserisci un indirizzo email valido', 'error');
      return;
    }
    
    // Here you would normally send to your backend
    // For now, just show success message
    try {
      // Simulate API call
      await simulateAPICall();
      
      showNotification('Grazie per l\'iscrizione! Riceverai presto le nostre novità.', 'success');
      emailInput.value = '';
    } catch (error) {
      showNotification('Si è verificato un errore. Riprova più tardi.', 'error');
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function simulateAPICall() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function initSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput || !searchResults) return;
  
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    // Debounce search
    searchTimeout = setTimeout(() => {
      performSearch(query, searchResults);
    }, 300);
  });
}

function performSearch(query, resultsContainer) {
  // Mock search results - replace with actual API call
  const mockResults = [
    {
      type: 'opera',
      title: 'Tramonto Calabrese',
      description: 'Opera in tecnica #negativoèpositivo®',
      url: 'opera-single.html?id=1',
      image: 'assets/images/opere/featured/opera-1.jpg'
    },
    {
      type: 'page',
      title: 'La Tecnica #negativoèpositivo®',
      description: 'Scopri come funziona la tecnica brevettata',
      url: 'tecnica.html'
    }
  ];
  
  const filteredResults = mockResults.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filteredResults.length === 0) {
    resultsContainer.innerHTML = `
      <div class="text-center py-4">
        <i class="bi bi-search fs-1 text-secondary mb-3"></i>
        <p class="text-secondary">Nessun risultato trovato per "${query}"</p>
      </div>
    `;
    return;
  }
  
  resultsContainer.innerHTML = filteredResults.map(item => `
    <a href="${item.url}" class="d-flex gap-3 p-3 text-decoration-none text-white rounded hover-bg mb-2">
      ${item.image ? `
        <img src="${item.image}" alt="${item.title}" class="rounded" style="width: 60px; height: 60px; object-fit: cover;">
      ` : ''}
      <div class="flex-grow-1">
        <div class="fw-semibold mb-1">${item.title}</div>
        <div class="small text-secondary">${item.description}</div>
      </div>
    </a>
  `).join('');
}

// ========================================
// NOTIFICATIONS
// ========================================

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed top-0 start-50 translate-middle-x mt-5`;
  notification.style.zIndex = '9999';
  notification.setAttribute('role', 'alert');
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Fade in
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignore empty anchors and modal triggers
    if (href === '#' || href === '#!' || this.hasAttribute('data-bs-toggle')) {
      return;
    }
    
    e.preventDefault();
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Su mobile usa scroll immediato per evitare problemi
      const isMobile = window.innerWidth <= 991;
      const offsetTop = targetElement.offsetTop - CONFIG.navbarHeight;
      
      if (isMobile) {
        // Scroll immediato su mobile
        window.scrollTo({
          top: offsetTop,
          behavior: 'auto'
        });
      } else {
        // Smooth scroll su desktop
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ========================================
// LAZY LOADING IMAGES (Native + Fallback)
// ========================================

if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.src;
  });
} else {
  // Fallback to Intersection Observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  const lazyImages = document.querySelectorAll('img.lazy');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// PERFORMANCE MONITORING
// ========================================

if ('PerformanceObserver' in window) {
  try {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    console.warn('Performance monitoring not supported');
  }
}

// ========================================
// EXPORT FOR EXTERNAL USE
// ========================================

window.MarioVetereMarketplace = {
  showNotification,
  setColorMode,
  initAOS,
  version: '2.0.0'
};

console.log('✅ All components initialized successfully');
