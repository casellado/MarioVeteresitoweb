# 🚀 Mario Vetere Marketplace - Advanced Development Guide

**Companion Document to Main Project Documentation**  
**Versione:** 2.0.0  
**Data:** 6 Novembre 2025  

---

## 📑 Table of Contents

1. [Global Components](#global-components)
2. [Animation System](#animation-system)
3. [Performance Optimization](#performance-optimization)
4. [Testing Strategy](#testing-strategy)
5. [Deployment Guide](#deployment-guide)
6. [SEO & Analytics](#seo-analytics)
7. [Maintenance & Updates](#maintenance)

---

## 🧩 GLOBAL COMPONENTS

### 1. Navigation Component - Advanced Navbar

```html
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top" id="mainNavbar">
  <div class="container-fluid px-4 px-lg-6">
    
    <!-- Logo -->
    <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
      <img src="assets/images/logo/logo-gold.svg" 
           alt="Mario Vetere" 
           height="40"
           class="logo-img">
      <span class="logo-text fw-bold d-none d-md-inline">
        Mario <span class="text-gradient">Vetere</span>
      </span>
    </a>
    
    <!-- Mobile Toggle -->
    <button class="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#mobileMenu"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Desktop Menu -->
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <!-- Center Navigation -->
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="opere.html">Opere</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="tecnica.html">Tecnica</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="chi-sono.html">Chi Sono</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contatti.html">Contatti</a>
        </li>
      </ul>
      
      <!-- Right Side Actions -->
      <div class="navbar-actions d-flex align-items-center gap-3">
        
        <!-- Search -->
        <button class="btn btn-icon" 
                data-bs-toggle="modal" 
                data-bs-target="#searchModal"
                title="Cerca">
          <i class="bi bi-search"></i>
        </button>
        
        <!-- Color Mode Toggle -->
        <button class="btn btn-icon" 
                id="colorModeToggle"
                title="Cambia tema">
          <i class="bi bi-moon-stars" id="colorModeIcon"></i>
        </button>
        
        <!-- Favorites -->
        <button class="btn btn-icon position-relative" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#favoritesPanel"
                title="Preferiti">
          <i class="bi bi-heart"></i>
          <span class="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill" 
                id="favoritesCount" 
                style="font-size: 0.65rem;">
            0
          </span>
        </button>
        
        <!-- Language (Optional) -->
        <div class="dropdown">
          <button class="btn btn-icon dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown">
            <i class="bi bi-globe"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li><a class="dropdown-item active" href="#">🇮🇹 Italiano</a></li>
            <li><a class="dropdown-item" href="#">🇬🇧 English</a></li>
            <li><a class="dropdown-item" href="#">🇩🇪 Deutsch</a></li>
          </ul>
        </div>
        
      </div>
      
    </div>
    
  </div>
</nav>

<!-- Mobile Offcanvas Menu -->
<div class="offcanvas offcanvas-end glass-offcanvas" 
     tabindex="-1" 
     id="mobileMenu">
  <div class="offcanvas-header border-bottom border-secondary">
    <h5 class="offcanvas-title">Menu</h5>
    <button type="button" 
            class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    
    <!-- Mobile Navigation -->
    <ul class="navbar-nav">
      <li class="nav-item mb-2">
        <a class="nav-link fs-5" href="index.html">
          <i class="bi bi-house me-2"></i> Home
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link fs-5" href="opere.html">
          <i class="bi bi-palette me-2"></i> Opere
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link fs-5" href="tecnica.html">
          <i class="bi bi-lightbulb me-2"></i> Tecnica
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link fs-5" href="chi-sono.html">
          <i class="bi bi-person me-2"></i> Chi Sono
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link fs-5" href="contatti.html">
          <i class="bi bi-envelope me-2"></i> Contatti
        </a>
      </li>
    </ul>
    
    <hr class="border-secondary my-4">
    
    <!-- Mobile Actions -->
    <div class="d-grid gap-2">
      <button class="btn btn-primary btn-lg" onclick="location.href='contatti.html'">
        <i class="bi bi-whatsapp me-2"></i>
        Contattami
      </button>
    </div>
    
    <!-- Social Links -->
    <div class="social-links mt-4">
      <div class="fs-7 text-secondary mb-3">Seguimi su</div>
      <div class="d-flex gap-2">
        <a href="#" class="btn btn-outline-light btn-sm">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#" class="btn btn-outline-light btn-sm">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#" class="btn btn-outline-light btn-sm">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
    
  </div>
</div>

<!-- Search Modal -->
<div class="modal fade" id="searchModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content glass-card border-0">
      <div class="modal-body p-4">
        <div class="input-group input-group-lg">
          <span class="input-group-text bg-transparent border-end-0">
            <i class="bi bi-search"></i>
          </span>
          <input type="text" 
                 class="form-control bg-transparent border-start-0 ps-0" 
                 placeholder="Cerca opere, artista, tecnica..."
                 id="globalSearchInput"
                 autofocus>
        </div>
        
        <!-- Search Results (populated dynamically) -->
        <div id="searchResults" class="mt-4">
          <!-- Results will appear here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

**JavaScript: Navigation.js**

```javascript
// components/Navigation.js
class Navigation {
  constructor() {
    this.navbar = document.getElementById('mainNavbar');
    this.lastScrollTop = 0;
    this.scrollThreshold = 100;
    
    this.init();
  }
  
  init() {
    // Scroll behavior
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Active page highlight
    this.highlightActivePage();
    
    // Close mobile menu on link click
    document.querySelectorAll('#mobileMenu .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
        if (offcanvas) offcanvas.hide();
      });
    });
  }
  
  handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove glassmorphism on scroll
    if (currentScroll > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll direction
    if (currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold) {
      // Scrolling down
      this.navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      this.navbar.style.transform = 'translateY(0)';
    }
    
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  
  highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});
```

**CSS: Navigation Styles**

```css
/* 04-layout/_header.css */

/* Glass Navbar */
.glass-navbar {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  z-index: 1030;
}

.glass-navbar.scrolled {
  background: rgba(10, 10, 10, 0.95);
  box-shadow: var(--shadow-lg);
}

/* Logo */
.logo-img {
  transition: transform 0.3s ease;
}

.navbar-brand:hover .logo-img {
  transform: scale(1.1) rotate(5deg);
}

.logo-text {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

/* Nav Links */
.nav-link {
  position: relative;
  padding: 0.75rem 1.25rem !important;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: var(--transition-colors);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transform: translateX(-50%);
  transition: width var(--duration-base) var(--ease-smooth);
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-primary) !important;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

/* Icon Buttons */
.btn-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transition: var(--transition-all);
}

.btn-icon:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-neon-gold);
}

/* Mobile Menu */
.glass-offcanvas {
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 991px) {
  .navbar-actions {
    gap: 0.5rem !important;
  }
  
  .btn-icon {
    width: 36px;
    height: 36px;
  }
}
```

---

### 2. Footer Component

```html
<!-- Footer -->
<footer class="footer py-8 bg-surface border-top border-secondary">
  <div class="container">
    
    <!-- Main Footer -->
    <div class="row g-4 mb-5">
      
      <!-- Brand Column -->
      <div class="col-lg-4 mb-4 mb-lg-0">
        <a href="index.html" class="d-inline-block mb-4">
          <img src="assets/images/logo/logo-gold.svg" 
               alt="Mario Vetere" 
               height="50">
        </a>
        <p class="text-secondary mb-4">
          Arte contemporanea con la tecnica brevettata #negativoèpositivo®. 
          Un viaggio unico tra luce e ombra, tra ciò che appare e ciò che si rivela.
        </p>
        
        <!-- Social Links -->
        <div class="social-links d-flex gap-2">
          <a href="https://instagram.com/mario_vetere_art" 
             class="btn btn-outline-light btn-sm rounded-circle"
             target="_blank"
             rel="noopener"
             title="Instagram">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com/..." 
             class="btn btn-outline-light btn-sm rounded-circle"
             target="_blank"
             rel="noopener"
             title="Facebook">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://linkedin.com/..." 
             class="btn btn-outline-light btn-sm rounded-circle"
             target="_blank"
             rel="noopener"
             title="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="mailto:artmv.info@gmail.com" 
             class="btn btn-outline-light btn-sm rounded-circle"
             title="Email">
            <i class="bi bi-envelope"></i>
          </a>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="col-6 col-md-3 col-lg-2">
        <h6 class="fw-semibold mb-3 text-gradient">Navigazione</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="index.html" class="footer-link">Home</a></li>
          <li class="mb-2"><a href="opere.html" class="footer-link">Opere</a></li>
          <li class="mb-2"><a href="tecnica.html" class="footer-link">Tecnica</a></li>
          <li class="mb-2"><a href="chi-sono.html" class="footer-link">Chi Sono</a></li>
          <li class="mb-2"><a href="contatti.html" class="footer-link">Contatti</a></li>
        </ul>
      </div>
      
      <!-- Info Links -->
      <div class="col-6 col-md-3 col-lg-2">
        <h6 class="fw-semibold mb-3 text-gradient">Informazioni</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="faq.html" class="footer-link">FAQ</a></li>
          <li class="mb-2"><a href="spedizioni.html" class="footer-link">Spedizioni</a></li>
          <li class="mb-2"><a href="resi.html" class="footer-link">Resi e Rimborsi</a></li>
          <li class="mb-2"><a href="privacy.html" class="footer-link">Privacy Policy</a></li>
          <li class="mb-2"><a href="termini.html" class="footer-link">Termini e Condizioni</a></li>
        </ul>
      </div>
      
      <!-- Newsletter -->
      <div class="col-md-6 col-lg-4">
        <h6 class="fw-semibold mb-3 text-gradient">Resta Aggiornato</h6>
        <p class="text-secondary fs-7 mb-3">
          Iscriviti alla newsletter per ricevere aggiornamenti su nuove opere, 
          mostre ed eventi esclusivi.
        </p>
        
        <form id="newsletterForm" class="mb-3">
          <div class="input-group">
            <input type="email" 
                   class="form-control bg-transparent" 
                   placeholder="La tua email"
                   required
                   id="newsletterEmail">
            <button class="btn btn-primary" type="submit">
              <i class="bi bi-send"></i>
            </button>
          </div>
        </form>
        
        <!-- Trust Badges -->
        <div class="trust-badges d-flex gap-3 flex-wrap mt-4">
          <img src="assets/images/badges/secure-payment.svg" 
               alt="Pagamenti Sicuri" 
               height="30">
          <img src="assets/images/badges/ssl-encrypted.svg" 
               alt="SSL" 
               height="30">
        </div>
      </div>
      
    </div>
    
    <!-- Bottom Footer -->
    <div class="footer-bottom pt-4 border-top border-secondary">
      <div class="row align-items-center g-3">
        
        <!-- Copyright -->
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0 fs-7 text-secondary">
            © 2025 Mario Vetere. Tutti i diritti riservati. 
            <span class="d-inline-block ms-2">
              #negativoèpositivo® è un marchio registrato.
            </span>
          </p>
        </div>
        
        <!-- Payment Methods -->
        <div class="col-md-6 text-center text-md-end">
          <div class="payment-methods d-flex justify-content-center justify-content-md-end gap-2 flex-wrap">
            <i class="bi bi-credit-card fs-4 text-secondary"></i>
            <i class="bi bi-paypal fs-4 text-secondary"></i>
            <i class="bi bi-apple fs-4 text-secondary"></i>
            <i class="bi bi-google fs-4 text-secondary"></i>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</footer>

<!-- Back to Top Button -->
<button id="backToTop" 
        class="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4 d-none"
        style="width: 50px; height: 50px; z-index: 1025;"
        title="Torna su">
  <i class="bi bi-arrow-up"></i>
</button>
```

**JavaScript: Footer.js**

```javascript
// components/Footer.js

// Newsletter Form
document.getElementById('newsletterForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('newsletterEmail').value;
  const btn = e.target.querySelector('button');
  const originalHTML = btn.innerHTML;
  
  // Loading state
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
  
  try {
    // Send to your newsletter service (e.g., Mailchimp, SendGrid)
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    if (response.ok) {
      // Success
      showToast('Iscrizione completata! Controlla la tua email.', 'success');
      e.target.reset();
    } else {
      throw new Error('Errore durante l\'iscrizione');
    }
  } catch (error) {
    showToast('Si è verificato un errore. Riprova più tardi.', 'error');
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove('d-none');
    gsap.to(backToTopBtn, { opacity: 1, y: 0, duration: 0.3 });
  } else {
    gsap.to(backToTopBtn, { 
      opacity: 0, 
      y: 20, 
      duration: 0.3,
      onComplete: () => backToTopBtn.classList.add('d-none')
    });
  }
});

backToTopBtn?.addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: { y: 0, autoKill: false },
    duration: 1,
    ease: 'power2.inOut'
  });
});

// Toast Notification Helper
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.innerHTML = `
    <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-circle'} me-2"></i>
    ${message}
  `;
  
  document.body.appendChild(toast);
  
  gsap.fromTo(toast,
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.5,
      ease: 'back.out(1.7)'
    }
  );
  
  setTimeout(() => {
    gsap.to(toast, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      onComplete: () => toast.remove()
    });
  }, 4000);
}
```

---

### 3. Color Mode Switcher

```javascript
// components/ColorModeSwitcher.js
class ColorModeSwitcher {
  constructor() {
    this.toggle = document.getElementById('colorModeToggle');
    this.icon = document.getElementById('colorModeIcon');
    this.currentMode = this.getStoredMode() || this.getPreferredMode();
    
    this.init();
  }
  
  init() {
    // Set initial mode
    this.setMode(this.currentMode, false);
    
    // Toggle button click
    this.toggle?.addEventListener('click', () => this.toggleMode());
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('colorMode')) {
        this.setMode(e.matches ? 'dark' : 'light');
      }
    });
  }
  
  toggleMode() {
    const newMode = this.currentMode === 'dark' ? 'light' : 'dark';
    this.setMode(newMode, true);
  }
  
  setMode(mode, animate = true) {
    this.currentMode = mode;
    
    // Update data attribute
    document.documentElement.setAttribute('data-bs-theme', mode);
    
    // Update icon
    if (this.icon) {
      this.icon.className = mode === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
      
      if (animate) {
        gsap.fromTo(this.icon,
          { scale: 0, rotate: -180 },
          { scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(1.7)' }
        );
      }
    }
    
    // Store preference
    localStorage.setItem('colorMode', mode);
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('colormodechange', { detail: { mode } }));
  }
  
  getStoredMode() {
    return localStorage.getItem('colorMode');
  }
  
  getPreferredMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new ColorModeSwitcher();
});
```

---

## 🎬 ANIMATION SYSTEM - GSAP Configuration

### Main Animation Configuration

```javascript
// animations/gsap-config.js

// Register Plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

// Global GSAP Defaults
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6
});

// ScrollTrigger Defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  markers: false // Set to true for debugging
});

// Smooth Scroll Setup (Desktop only)
if (window.innerWidth > 768) {
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1
  });
}

// Custom Eases
const customEases = {
  softSpring: 'M0,0 C0,0 0.05,0.555 0.095,0.665 0.145,0.785 0.22,0.895 0.28,0.940 0.345,0.985 0.47,1 0.5,1 0.53,1 0.655,0.985 0.72,0.940 0.78,0.895 0.855,0.785 0.905,0.665 0.95,0.555 1,0 1,0',
  bounceOut: 'M0,0 C0,0 0.056,0.445 0.175,0.64 0.282,0.815 0.344,0.945 0.42,0.987 0.478,1.015 0.517,1.019 0.55,1.005 0.583,0.991 0.611,0.96 0.65,0.867 0.696,0.755 0.737,0.56 0.785,0.365 0.825,0.204 0.875,0.043 0.912,-0.027 0.944,-0.087 0.978,-0.108 1,0'
};

// Register custom eases
Object.keys(customEases).forEach(name => {
  CustomEase.create(name, customEases[name]);
});
```

### Scroll Animations

```javascript
// animations/scroll-animations.js

class ScrollAnimations {
  constructor() {
    this.init();
  }
  
  init() {
    this.fadeInUp();
    this.staggerChildren();
    this.parallaxElements();
    this.revealOnScroll();
    this.numberCounters();
    this.progressBars();
  }
  
  // Fade In Up Animation
  fadeInUp() {
    gsap.utils.toArray('[data-aos="fade-up"]').forEach(element => {
      gsap.from(element, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'top 60%',
          scrub: false
        }
      });
    });
  }
  
  // Stagger Children Animation
  staggerChildren() {
    gsap.utils.toArray('[data-stagger]').forEach(container => {
      const children = container.querySelectorAll('[data-stagger-item]');
      
      gsap.from(children, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%'
        }
      });
    });
  }
  
  // Parallax Effects
  parallaxElements() {
    gsap.utils.toArray('[data-parallax]').forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      
      gsap.to(element, {
        y: () => -ScrollTrigger.maxScroll(window) * speed,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          invalidateOnRefresh: true,
          scrub: true
        }
      });
    });
  }
  
  // Reveal Text on Scroll
  revealOnScroll() {
    gsap.utils.toArray('[data-reveal]').forEach(element => {
      const content = element.textContent;
      element.innerHTML = content.split('').map(char => 
        `<span class="char" style="opacity:0">${char}</span>`
      ).join('');
      
      gsap.to(element.querySelectorAll('.char'), {
        opacity: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%'
        }
      });
    });
  }
  
  // Animated Counters
  numberCounters() {
    gsap.utils.toArray('[data-count]').forEach(element => {
      const target = parseInt(element.dataset.count);
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(element, {
            textContent: target,
            duration: 2,
            snap: { textContent: 1 },
            ease: 'power2.out',
            onUpdate: function() {
              element.textContent = Math.floor(this.targets()[0].textContent);
            }
          });
        }
      });
    });
  }
  
  // Progress Bars Animation
  progressBars() {
    gsap.utils.toArray('.progress-bar[data-progress]').forEach(bar => {
      const progress = bar.dataset.progress;
      
      gsap.to(bar, {
        width: `${progress}%`,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          once: true
        }
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});

// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});
```

### Micro-Interactions

```javascript
// animations/micro-interactions.js

// Button Ripple Effect
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Magnetic Buttons
class MagneticButton {
  constructor(element) {
    this.element = element;
    this.boundingRect = element.getBoundingClientRect();
    this.strength = 0.3;
    
    this.init();
  }
  
  init() {
    this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
  }
  
  handleMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(this.element, {
      x: x * this.strength,
      y: y * this.strength,
      duration: 0.3,
      ease: 'power2.out'
    });
  }
  
  handleMouseLeave() {
    gsap.to(this.element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  }
}

// Apply to specific buttons
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  new MagneticButton(btn);
});

// Card Hover Effects
document.querySelectorAll('.artwork-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    gsap.to(this, {
      y: -10,
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out'
    });
    
    gsap.to(this.querySelector('.card-img-top'), {
      scale: 1.1,
      duration: 0.6,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', function() {
    gsap.to(this, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    });
    
    gsap.to(this.querySelector('.card-img-top'), {
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    });
  });
});

// Cursor Trail Effect (Optional - Desktop only)
if (window.innerWidth > 1024) {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Expand cursor on hover
  document.querySelectorAll('a, button, [data-cursor-expand]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
  });
}
```

**CSS for Micro-Interactions:**

```css
/* Ripple Effect */
.btn {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: translate(-50%, -50%) scale(20);
    opacity: 0;
  }
}

/* Custom Cursor */
.custom-cursor {
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
  mix-blend-mode: difference;
}

.custom-cursor.expand {
  width: 60px;
  height: 60px;
  border-color: var(--accent-secondary);
}
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### 1. Image Optimization Strategy

```javascript
// performance/lazy-loading.js

// Lazy Loading Configuration
const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        loadImage(img);
        observer.unobserve(img);
      }
    });
  },
  {
    rootMargin: '50px 0px',
    threshold: 0.01
  }
);

function loadImage(img) {
  // Load full image
  const src = img.dataset.src;
  const srcset = img.dataset.srcset;
  
  if (src) {
    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = src;
      if (srcset) img.srcset = srcset;
      img.classList.add('loaded');
    };
    tempImg.src = src;
  }
}

// Observe all lazy images
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// Progressive Image Loading (LQIP - Low Quality Image Placeholder)
class ProgressiveImage {
  constructor(container) {
    this.container = container;
    this.placeholder = container.querySelector('.img-placeholder');
    this.fullImage = container.querySelector('.img-full');
    
    this.load();
  }
  
  load() {
    const fullSrc = this.fullImage.dataset.src;
    
    const img = new Image();
    img.onload = () => {
      this.fullImage.src = fullSrc;
      this.fullImage.classList.add('loaded');
      
      gsap.to(this.placeholder, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => this.placeholder.remove()
      });
    };
    img.src = fullSrc;
  }
}

// Initialize progressive images
document.querySelectorAll('.progressive-img-container').forEach(container => {
  new ProgressiveImage(container);
});
```

**HTML Structure for Progressive Images:**

```html
<div class="progressive-img-container">
  <!-- Low quality placeholder (inline base64 or tiny image) -->
  <img src="data:image/svg+xml;base64,..." 
       class="img-placeholder img-fluid" 
       alt="">
  
  <!-- Full quality image (loaded later) -->
  <img data-src="assets/images/opere/1/negativo-large.jpg" 
       class="img-full img-fluid" 
       alt="Opera Name">
</div>
```

### 2. Code Splitting & Lazy Loading

```javascript
// performance/module-loader.js

// Dynamically load modules only when needed
const ModuleLoader = {
  
  // Load Swiper only on pages that need it
  async loadSwiper() {
    if (!window.Swiper) {
      const [css, js] = await Promise.all([
        this.loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'),
        this.loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
      ]);
      return window.Swiper;
    }
    return window.Swiper;
  },
  
  // Load PhotoSwipe only when lightbox is opened
  async loadPhotoSwipe() {
    if (!window.PhotoSwipe) {
      const [css, js] = await Promise.all([
        this.loadCSS('https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe.css'),
        this.loadScript('https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe.min.js'),
        this.loadScript('https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe-lightbox.min.js')
      ]);
      return window.PhotoSwipe;
    }
    return window.PhotoSwipe;
  },
  
  // Load Three.js only on pages with 3D
  async loadThreeJS() {
    if (!window.THREE) {
      await this.loadScript('https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js');
      return window.THREE;
    }
    return window.THREE;
  },
  
  // Helper: Load CSS
  loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  },
  
  // Helper: Load Script
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
};

// Usage Example
document.querySelector('[data-init-carousel]')?.addEventListener('click', async () => {
  const Swiper = await ModuleLoader.loadSwiper();
  // Initialize Swiper
  new Swiper('.my-swiper', {...});
});
```

### 3. Caching Strategy

```javascript
// performance/cache-strategy.js

// Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}
```

**sw.js (Service Worker):**

```javascript
const CACHE_NAME = 'mario-vetere-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/opere.html',
  '/assets/css/main.css',
  '/assets/js/app.js',
  '/assets/images/logo/logo-gold.svg'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

### 4. Critical CSS Inlining

```html
<!-- In <head> -->
<style>
  /* Critical CSS - Above the fold styles */
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #0a0a0a;
    color: #f5f5f5;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
  }
  
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
  /* Add only critical above-the-fold styles */
</style>

<!-- Load full CSS asynchronously -->
<link rel="preload" href="assets/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="assets/css/main.css"></noscript>
```

---

Continuo con Testing, Deployment e le altre sezioni? 🚀