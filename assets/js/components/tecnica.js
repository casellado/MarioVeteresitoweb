/**
 * Tecnica Page - Advanced Animations
 * Mario Vetere Marketplace
 */

class TecnicaPage {
  constructor() {
    this.init();
  }
  
  init() {
    console.log('🎨 Inizializzazione Pagina Tecnica...');
    
    // Init AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
    
    // Setup GSAP ScrollTrigger animations
    this.setupScrollAnimations();
    
    // Setup smooth scroll for anchor links
    this.setupSmoothScroll();
  }
  
  setupScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('⚠️ GSAP o ScrollTrigger non caricato');
      return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate timeline steps on scroll
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    timelineSteps.forEach((step, index) => {
      // Animate step number
      const stepNumber = step.querySelector('.step-number');
      if (stepNumber) {
        gsap.from(stepNumber, {
          scale: 0,
          rotation: -180,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      }
      
      // Animate glass card
      const glassCard = step.querySelector('.glass-card');
      if (glassCard) {
        const direction = index % 2 === 0 ? 100 : -100;
        gsap.from(glassCard, {
          x: direction,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });
    
    // Parallax effect on hero images
    const heroImages = document.querySelectorAll('.reveal-demo img');
    heroImages.forEach((img, index) => {
      gsap.to(img, {
        yPercent: index % 2 === 0 ? -10 : 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.page-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    
    // Animate FAQ items
    const faqItems = document.querySelectorAll('.accordion-item');
    faqItems.forEach((item, index) => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    });
    
    // Animate CTA card
    const ctaCard = document.querySelector('.cta-card');
    if (ctaCard) {
      gsap.from(ctaCard, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaCard,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
      
      // Rotating gradient background
      gsap.to(ctaCard.querySelector('.position-absolute'), {
        backgroundPosition: '200% center',
        ease: 'none',
        scrollTrigger: {
          trigger: ctaCard,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
    
    // Counter animation for stats (if present)
    this.animateCounters();
  }
  
  animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'));
      
      gsap.from(counter, {
        innerText: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        onUpdate: function() {
          counter.innerText = Math.ceil(this.targets()[0].innerText);
        }
      });
    });
  }
  
  setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Ignore empty anchors
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        e.preventDefault();
        
        // Calculate offset for fixed navbar
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without triggering scroll
        history.pushState(null, '', href);
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new TecnicaPage();
});

// Video player enhancement (optional)
const videoIframe = document.querySelector('.video-container iframe');
if (videoIframe) {
  // Add loading animation
  videoIframe.addEventListener('load', () => {
    console.log('✅ Video caricato');
  });
  
  // Lazy load video
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !videoIframe.src) {
        const dataSrc = videoIframe.getAttribute('data-src');
        if (dataSrc) {
          videoIframe.src = dataSrc;
        }
      }
    });
  });
  
  observer.observe(videoIframe);
}

