# 🎨 Mario Vetere Art Marketplace - Premium Digital Experience

**Versione:** 2.0.0 - NEXT GENERATION  
**Data:** 6 Novembre 2025  
**Stack:** Bootstrap 5.3.5 + Advanced CSS3 + ES6+ + GSAP + Three.js  
**Design Philosophy:** Luxury Art Experience meets Cutting-Edge Technology

---

## 🌟 EXECUTIVE SUMMARY

Un marketplace d'arte digitale **rivoluzionario** che celebra la tecnica brevettata **#negativoèpositivo®** di Mario Vetere attraverso un'esperienza utente immersiva, cinematografica e tecnologicamente avanzata.

### 🎯 Vision Statement
> *"Creare la prima galleria d'arte digitale interattiva che trasforma la visualizzazione dell'arte da esperienza passiva a journey immersivo, dove ogni opera racconta la sua storia attraverso l'innovazione tecnologica."*

### 💎 Unique Selling Points
1. **Interactive Reveal System** - Tecnologia proprietaria per svelare negativo→positivo in tempo reale
2. **3D Gallery Experience** - Navigazione spaziale con Three.js
3. **AI-Powered Recommendations** - Sistema intelligente di scoperta opere
4. **NFT Integration** - Certificazione blockchain delle opere
5. **Luxury Dark Mode** - Design premium con glassmorphism e neon accents
6. **Performance-First** - <1s load time, 95+ Lighthouse score

---

## 📊 COMPETITIVE ANALYSIS - Art Marketplace Leaders

### 🏆 Top 5 Competitors Deep Dive

#### 1. **Artsy** - The Benchmark
**URL:** artsy.net  
**Score:** 9.2/10

**Strengths:**
- Minimalist grid layout con spaziatura perfetta
- Hover states elegantissimi
- Transizioni fluide 300ms cubic-bezier
- Lazy loading ottimizzato
- Filtri avanzati ma intuitivi
- Typography system impeccabile (Inter + Georgia)

**What We'll Do Better:**
✅ Interactive reveal invece di semplici hover  
✅ 3D gallery navigation invece di flat grid  
✅ Real-time color mode switching  
✅ AI-powered search  

#### 2. **Saatchi Art** - Storytelling Master
**URL:** saatchiart.com  
**Score:** 8.9/10

**Strengths:**
- Hero sections cinematografiche con parallax
- Video backgrounds immersivi
- Artist story molto coinvolgente
- Trust signals ben posizionati
- CTA conversion-optimized

**What We'll Do Better:**
✅ Hero con WebGL effects  
✅ Video demo tecnica integrato  
✅ Timeline interattiva biografia  
✅ Social proof dinamico  

#### 3. **Artmajeur** - Dark Theme Excellence
**URL:** artmajeur.com  
**Score:** 8.7/10

**Strengths:**
- Dark theme luxury perfetto
- Contrasto ottimizzato per opere d'arte
- Navigation minimalista e funzionale
- Image-first approach

**What We'll Do Better:**
✅ Dark mode + Light mode seamless switching  
✅ Glassmorphism UI elements  
✅ Neon accents dinamici  
✅ Adaptive color schemes basati sull'opera  

#### 4. **1stDibs** - Luxury Positioning
**URL:** 1stdibs.com  
**Score:** 9.0/10

**Strengths:**
- Posizionamento ultra-premium
- Typography elegantissima
- Dettagli metadata completi
- Certification badges ben evidenziati
- High-end photography

**What We'll Do Better:**
✅ NFT certification con blockchain verification  
✅ AR preview integration  
✅ 360° artwork viewer  
✅ Provenance tracking visuale  

#### 5. **SuperRare** - NFT Art Leader
**URL:** superrare.com  
**Score:** 8.5/10

**Strengths:**
- Blockchain integration nativa
- Web3 wallet connection
- Live bidding system
- Community features
- Crypto-native UX

**What We'll Do Better:**
✅ Hybrid physical + NFT gallery  
✅ Traditional art buyers onboarding  
✅ Fiat + crypto payment  
✅ Educational content tecnica #negativoèpositivo  

---

## 🛠 TECHNOLOGY STACK - Next Generation

### 🎨 Frontend Core

#### **Bootstrap 5.3.5** (Latest Stable)
```html
<!-- CDN Link - Latest -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
```

**Why Bootstrap 5.3.5:**
- ✅ Native dark mode support con CSS variables
- ✅ Color modes API per custom themes
- ✅ Utility classes ampliate (z-index, opacity, etc)
- ✅ Enhanced focus rings
- ✅ Link helpers e icon links
- ✅ Performance migliorata del 30%
- ✅ Zero jQuery dependency

**Key Features We'll Use:**
- Grid system responsive con container-fluid
- Card components customizzati
- Modal system per lightbox
- Offcanvas per mobile menu
- Collapse per FAQ e filters
- Carousel avanzato per galleries
- Form validation nativa
- Tooltip e Popovers per info

#### **Advanced Animation Libraries**

##### **GSAP 3.12** (GreenSock Animation Platform)
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollSmoother.min.js"></script>
```

**Use Cases:**
- Scroll-triggered animations per sections
- Smooth scroll con momentum
- Timeline animations per hero sections
- Parallax effects
- Morph animations tra negativo/positivo
- Stagger animations per grid items
- Physics-based spring animations

##### **Three.js r158** (3D Gallery)
```html
<script src="https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js"></script>
```

**Use Cases:**
- 3D virtual gallery walkthrough
- Artwork 3D frames con lighting
- Particle systems per backgrounds
- WebGL shader effects
- Camera controls smooth
- VR compatibility (future)

##### **Lottie by Airbnb** (Vector Animations)
```html
<script src="https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js"></script>
```

**Use Cases:**
- Loading animations custom
- Success/error states
- Micro-interactions
- Icon animations
- Process step animations

#### **Image & Media Libraries**

##### **PhotoSwipe 5.4** (Lightbox Avanzato)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe.css">
<script src="https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe-lightbox.min.js"></script>
```

**Features:**
- Fullscreen image gallery
- Pinch-to-zoom mobile
- Swipe gestures
- Keyboard navigation
- Caption support
- Share buttons integration

##### **Swiper 11.1** (Carousel Pro)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

**Features:**
- 3D cube effect
- Coverflow effect
- Parallax
- Virtual slides
- Lazy loading
- Breakpoints responsive
- Autoplay intelligente

##### **Vanilla-Tilt.js** (3D Hover Effects)
```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js"></script>
```

**Use Cases:**
- Card hover 3D effects
- Artwork preview tilt
- Interactive elements depth

#### **Performance & Optimization**

##### **Intersection Observer API** (Native)
- Lazy loading immagini
- Scroll-triggered animations
- Infinite scroll
- Viewport detection

##### **Lazysizes** (Image Lazy Loading)
```html
<script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js"></script>
```

**Features:**
- Automatic lazy loading
- Responsive images support
- Low quality placeholder
- Blur-up effect

##### **Web Vitals** (Performance Monitoring)
```html
<script type="module">
  import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'https://unpkg.com/web-vitals@3?module';
</script>
```

### 🎭 Design System Libraries

#### **Google Fonts - Premium Selection**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Font Stack:**
- **Primary (Body):** Inter - Moderna, leggibile, professionale
- **Display (Titles):** Playfair Display - Elegante, sofisticata
- **Accent (Tech):** Space Grotesk - Geometrica, contemporanea

#### **Bootstrap Icons** (Latest)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
```

#### **Custom Icon Integration**
- Lucide Icons per UI elements
- Custom SVG icons per brand
- Animated icons con Lottie

### 📱 Progressive Web App

```html
<!-- Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Theme Color -->
<meta name="theme-color" content="#0a0a0a">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png">
```

**PWA Features:**
- Offline mode con Service Worker
- Add to Home Screen
- Push notifications (future)
- Background sync

---

## 🎨 DESIGN SYSTEM 2.0 - Luxury Dark Premium

### 🌈 Color Palette - Advanced

#### **Base Colors (Dark Mode Default)**

```css
:root[data-bs-theme="dark"] {
  /* === BACKGROUNDS === */
  --bs-body-bg: #0a0a0a;                    /* Deep Black */
  --bg-surface: #141414;                     /* Card Background */
  --bg-elevated: #1a1a1a;                    /* Elevated Elements */
  --bg-overlay: #1f1f1f;                     /* Modal/Overlay */
  --bg-hover: rgba(255, 255, 255, 0.05);    /* Hover State */
  
  /* === TEXT COLORS === */
  --bs-body-color: #f5f5f5;                 /* Primary Text */
  --text-secondary: #c0c0c0;                 /* Secondary Text */
  --text-tertiary: #909090;                  /* Tertiary Text */
  --text-disabled: #606060;                  /* Disabled Text */
  
  /* === ACCENT COLORS === */
  --accent-primary: #d4af37;                 /* Gold Primary */
  --accent-primary-hover: #e6c24d;           /* Gold Hover */
  --accent-primary-active: #b8942e;          /* Gold Active */
  
  --accent-secondary: #00f5ff;               /* Cyan Neon */
  --accent-tertiary: #ff00ff;                /* Magenta Neon */
  
  /* === GLASSMORPHISM === */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --glass-blur: blur(10px);
  
  /* === GRADIENTS === */
  --gradient-primary: linear-gradient(135deg, #d4af37 0%, #ffd700 100%);
  --gradient-secondary: linear-gradient(135deg, #00f5ff 0%, #ff00ff 100%);
  --gradient-dark: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  
  /* === BORDERS === */
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-medium: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.2);
  --border-neon: rgba(0, 245, 255, 0.5);
  
  /* === SHADOWS === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.7);
  --shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.8);
  
  /* === NEON SHADOWS === */
  --shadow-neon-cyan: 0 0 20px rgba(0, 245, 255, 0.5);
  --shadow-neon-magenta: 0 0 20px rgba(255, 0, 255, 0.5);
  --shadow-neon-gold: 0 0 20px rgba(212, 175, 55, 0.5);
}
```

#### **Light Mode Colors**

```css
:root[data-bs-theme="light"] {
  /* === BACKGROUNDS === */
  --bs-body-bg: #ffffff;
  --bg-surface: #f8f9fa;
  --bg-elevated: #ffffff;
  --bg-overlay: #f1f3f5;
  --bg-hover: rgba(0, 0, 0, 0.05);
  
  /* === TEXT COLORS === */
  --bs-body-color: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-tertiary: #6a6a6a;
  --text-disabled: #9a9a9a;
  
  /* === ACCENT COLORS === */
  --accent-primary: #b8942e;                 /* Gold Dark */
  --accent-primary-hover: #a07f26;
  --accent-primary-active: #886a1e;
  
  --accent-secondary: #0088cc;               /* Blue */
  --accent-tertiary: #cc0088;                /* Pink */
  
  /* === BORDERS === */
  --border-subtle: rgba(0, 0, 0, 0.05);
  --border-medium: rgba(0, 0, 0, 0.1);
  --border-strong: rgba(0, 0, 0, 0.2);
  
  /* === SHADOWS === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.25);
  --shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.3);
}
```

### 📐 Typography System - Advanced

```css
/* === FONT FAMILIES === */
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-accent: 'Space Grotesk', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

/* === FONT SIZES (Fluid Typography con clamp) === */
:root {
  /* Base scale */
  --font-2xs: clamp(0.625rem, 0.9vw, 0.75rem);    /* 10-12px */
  --font-xs: clamp(0.75rem, 1vw, 0.875rem);       /* 12-14px */
  --font-sm: clamp(0.875rem, 1.2vw, 1rem);        /* 14-16px */
  --font-base: clamp(1rem, 1.5vw, 1.125rem);      /* 16-18px */
  --font-lg: clamp(1.125rem, 2vw, 1.5rem);        /* 18-24px */
  --font-xl: clamp(1.25rem, 2.5vw, 1.75rem);      /* 20-28px */
  
  /* Display scale */
  --font-2xl: clamp(1.5rem, 3vw, 2rem);           /* 24-32px */
  --font-3xl: clamp(2rem, 4vw, 3rem);             /* 32-48px */
  --font-4xl: clamp(2.5rem, 5vw, 4rem);           /* 40-64px */
  --font-5xl: clamp(3rem, 6vw, 5rem);             /* 48-80px */
  --font-6xl: clamp(3.5rem, 7vw, 6.5rem);         /* 56-104px */
  --font-7xl: clamp(4rem, 9vw, 8rem);             /* 64-128px */
}

/* === FONT WEIGHTS === */
:root {
  --font-thin: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
}

/* === LINE HEIGHTS === */
:root {
  --leading-none: 1;
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}

/* === LETTER SPACING === */
:root {
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}
```

### 🎯 Spacing System - Precision Scale

```css
:root {
  /* === SPACING SCALE === */
  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 0.125rem;    /* 2px */
  --space-1: 0.25rem;       /* 4px */
  --space-1-5: 0.375rem;    /* 6px */
  --space-2: 0.5rem;        /* 8px */
  --space-2-5: 0.625rem;    /* 10px */
  --space-3: 0.75rem;       /* 12px */
  --space-3-5: 0.875rem;    /* 14px */
  --space-4: 1rem;          /* 16px */
  --space-5: 1.25rem;       /* 20px */
  --space-6: 1.5rem;        /* 24px */
  --space-7: 1.75rem;       /* 28px */
  --space-8: 2rem;          /* 32px */
  --space-10: 2.5rem;       /* 40px */
  --space-12: 3rem;         /* 48px */
  --space-14: 3.5rem;       /* 56px */
  --space-16: 4rem;         /* 64px */
  --space-20: 5rem;         /* 80px */
  --space-24: 6rem;         /* 96px */
  --space-28: 7rem;         /* 112px */
  --space-32: 8rem;         /* 128px */
  --space-40: 10rem;        /* 160px */
  --space-48: 12rem;        /* 192px */
  --space-56: 14rem;        /* 224px */
  --space-64: 16rem;        /* 256px */
}
```

### 🔄 Animation System - Advanced

```css
:root {
  /* === DURATIONS === */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  --duration-slowest: 1000ms;
  
  /* === EASING FUNCTIONS === */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Custom Easings */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* === TRANSITIONS === */
  --transition-all: all var(--duration-base) var(--ease-smooth);
  --transition-colors: color var(--duration-fast) var(--ease-smooth),
                       background-color var(--duration-fast) var(--ease-smooth),
                       border-color var(--duration-fast) var(--ease-smooth);
  --transition-transform: transform var(--duration-base) var(--ease-smooth);
  --transition-opacity: opacity var(--duration-fast) var(--ease-smooth);
}
```

### 📏 Border Radius System

```css
:root {
  --radius-none: 0;
  --radius-xs: 0.125rem;    /* 2px */
  --radius-sm: 0.25rem;     /* 4px */
  --radius-base: 0.5rem;    /* 8px */
  --radius-md: 0.75rem;     /* 12px */
  --radius-lg: 1rem;        /* 16px */
  --radius-xl: 1.5rem;      /* 24px */
  --radius-2xl: 2rem;       /* 32px */
  --radius-3xl: 3rem;       /* 48px */
  --radius-full: 9999px;    /* Circle/Pill */
}
```

### 🎭 Z-Index System

```css
:root {
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
  --z-notification: 1090;
  --z-max: 9999;
}
```

---

## 🏗 ARCHITECTURE - Component-Based Modern

### 📁 Enhanced File Structure

```
MarioVetereMarketplace/
│
├── index.html                          # Homepage
├── opere.html                          # Gallery Grid
├── opera-single.html                   # Artwork Detail Template
├── tecnica.html                        # Technique Page
├── chi-sono.html                       # About Artist
├── contatti.html                       # Contact Page
├── 404.html                            # Custom 404
│
├── assets/
│   │
│   ├── css/
│   │   ├── 01-config/
│   │   │   ├── _variables.css          # CSS Variables
│   │   │   ├── _reset.css              # Modern CSS Reset
│   │   │   └── _typography.css         # Typography system
│   │   │
│   │   ├── 02-base/
│   │   │   ├── _global.css             # Global styles
│   │   │   ├── _utilities.css          # Utility classes
│   │   │   └── _animations.css         # Keyframes
│   │   │
│   │   ├── 03-components/
│   │   │   ├── _buttons.css            # Button variants
│   │   │   ├── _cards.css              # Card components
│   │   │   ├── _forms.css              # Form elements
│   │   │   ├── _navigation.css         # Nav & Menu
│   │   │   ├── _hero.css               # Hero sections
│   │   │   ├── _gallery.css            # Gallery components
│   │   │   ├── _lightbox.css           # Lightbox custom
│   │   │   ├── _timeline.css           # Timeline component
│   │   │   ├── _badges.css             # Badge styles
│   │   │   └── _tooltips.css           # Custom tooltips
│   │   │
│   │   ├── 04-layout/
│   │   │   ├── _header.css             # Header/Nav
│   │   │   ├── _footer.css             # Footer
│   │   │   ├── _sidebar.css            # Sidebar (filters)
│   │   │   └── _grid.css               # Custom grid
│   │   │
│   │   ├── 05-pages/
│   │   │   ├── _home.css               # Homepage specific
│   │   │   ├── _opere.css              # Gallery specific
│   │   │   ├── _opera-single.css       # Single artwork
│   │   │   ├── _tecnica.css            # Technique page
│   │   │   ├── _chi-sono.css           # About page
│   │   │   └── _contatti.css           # Contact page
│   │   │
│   │   ├── 06-effects/
│   │   │   ├── _glassmorphism.css      # Glass effects
│   │   │   ├── _neon.css               # Neon effects
│   │   │   ├── _parallax.css           # Parallax effects
│   │   │   └── _3d-transforms.css      # 3D effects
│   │   │
│   │   └── main.css                    # Master import file
│   │
│   ├── js/
│   │   ├── app.js                      # Main app init
│   │   │
│   │   ├── core/
│   │   │   ├── config.js               # App configuration
│   │   │   ├── utils.js                # Utility functions
│   │   │   ├── api.js                  # API calls handler
│   │   │   └── state.js                # State management
│   │   │
│   │   ├── components/
│   │   │   ├── Navigation.js           # Navigation component
│   │   │   ├── ColorModeSwitcher.js    # Dark/Light toggle
│   │   │   ├── RevealEffect.js         # Negativo/Positivo
│   │   │   ├── ArtworkCard.js          # Artwork card logic
│   │   │   ├── Lightbox.js             # Lightbox init
│   │   │   ├── Carousel.js             # Carousel logic
│   │   │   ├── FilterSystem.js         # Filters (future)
│   │   │   ├── SearchBar.js            # Search component
│   │   │   ├── ContactForm.js          # Form validation
│   │   │   └── WhatsAppButton.js       # WhatsApp CTA
│   │   │
│   │   ├── animations/
│   │   │   ├── gsap-config.js          # GSAP setup
│   │   │   ├── scroll-animations.js    # Scroll triggers
│   │   │   ├── hero-animations.js      # Hero effects
│   │   │   ├── page-transitions.js     # Page transitions
│   │   │   └── micro-interactions.js   # Micro animations
│   │   │
│   │   ├── 3d/
│   │   │   ├── scene-setup.js          # Three.js setup
│   │   │   ├── gallery-3d.js           # 3D gallery
│   │   │   ├── artwork-viewer.js       # 3D artwork viewer
│   │   │   └── shaders.js              # Custom shaders
│   │   │
│   │   ├── performance/
│   │   │   ├── lazy-loading.js         # Lazy load images
│   │   │   ├── intersection-observer.js # IO handler
│   │   │   └── web-vitals.js           # Performance monitoring
│   │   │
│   │   └── analytics/
│   │       ├── google-analytics.js     # GA4
│   │       └── event-tracking.js       # Custom events
│   │
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo.svg
│   │   │   ├── logo-white.svg
│   │   │   ├── logo-gold.svg
│   │   │   └── favicon.svg
│   │   │
│   │   ├── opere/
│   │   │   └── [opera-id]/
│   │   │       ├── negativo-original.jpg      # Original quality
│   │   │       ├── negativo-large.jpg         # 1920px
│   │   │       ├── negativo-medium.jpg        # 1024px
│   │   │       ├── negativo-small.jpg         # 640px
│   │   │       ├── negativo-thumbnail.jpg     # 320px
│   │   │       ├── negativo.webp              # WebP format
│   │   │       ├── positivo-original.jpg
│   │   │       ├── positivo-large.jpg
│   │   │       ├── positivo-medium.jpg
│   │   │       ├── positivo-small.jpg
│   │   │       ├── positivo-thumbnail.jpg
│   │   │       ├── positivo.webp
│   │   │       └── placeholder.svg            # LQIP
│   │   │
│   │   ├── artist/
│   │   │   ├── portrait-main.jpg
│   │   │   ├── portrait-casual.jpg
│   │   │   ├── studio-1.jpg
│   │   │   ├── studio-2.jpg
│   │   │   └── at-work.jpg
│   │   │
│   │   ├── technique/
│   │   │   ├── process-step-1.jpg
│   │   │   ├── process-step-2.jpg
│   │   │   ├── process-step-3.jpg
│   │   │   ├── detail-fingers.jpg
│   │   │   └── materials.jpg
│   │   │
│   │   ├── exhibitions/
│   │   │   ├── biennale-firenze-2019.jpg
│   │   │   ├── premio-carlino-2024.jpg
│   │   │   └── [event-name].jpg
│   │   │
│   │   ├── og/
│   │   │   ├── og-image-home.jpg           # 1200x630
│   │   │   ├── og-image-opere.jpg
│   │   │   └── og-image-default.jpg
│   │   │
│   │   └── icons/
│   │       ├── favicon.ico
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       ├── apple-touch-icon.png        # 180x180
│   │       ├── android-chrome-192x192.png
│   │       └── android-chrome-512x512.png
│   │
│   ├── videos/
│   │   ├── hero-background.mp4             # Hero video
│   │   ├── technique-demo.mp4              # Process demo
│   │   └── gallery-ambient.mp4             # Background ambience
│   │
│   ├── fonts/                              # (Se self-hosted)
│   │   ├── Inter/
│   │   ├── PlayfairDisplay/
│   │   └── SpaceGrotesk/
│   │
│   ├── lottie/                             # Lottie animations
│   │   ├── loading-spinner.json
│   │   ├── success-checkmark.json
│   │   ├── error-cross.json
│   │   └── scroll-indicator.json
│   │
│   └── models/                             # 3D models (future)
│       └── artwork-frame.glb
│
├── data/
│   ├── opere.json                          # Artworks database
│   ├── artist-bio.json                     # Biography data
│   ├── exhibitions.json                    # Exhibitions list
│   └── press.json                          # Press mentions
│
├── public/
│   ├── manifest.json                       # PWA manifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess                           # Apache config
│
├── docs/
│   ├── DESIGN_SYSTEM.md                    # Design system doc
│   ├── COMPONENTS.md                       # Components guide
│   ├── DEPLOYMENT.md                       # Deploy guide
│   └── ACCESSIBILITY.md                    # A11y guidelines
│
├── tests/
│   ├── performance.test.js
│   ├── accessibility.test.js
│   └── cross-browser.test.js
│
├── package.json                            # NPM dependencies
├── .gitignore
└── README.md
```

---

## 🎬 PAGES & FEATURES - Detailed Breakdown

### 🏠 1. HOMEPAGE - Cinematic Experience

#### 1.1 Hero Section - WebGL Powered

```html
<section class="hero-section position-relative vh-100 overflow-hidden">
  
  <!-- Three.js Canvas Background -->
  <canvas id="hero-canvas" class="position-absolute top-0 start-0 w-100 h-100"></canvas>
  
  <!-- Gradient Overlay -->
  <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100" 
       style="background: linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(26,26,26,0.5) 100%);"></div>
  
  <!-- Content -->
  <div class="container position-relative h-100 d-flex align-items-center">
    <div class="row align-items-center w-100">
      
      <!-- Left Column: Text Content -->
      <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
        
        <!-- Badge -->
        <div class="hero-badge mb-4">
          <span class="badge glass-badge fs-6 px-4 py-2">
            <i class="bi bi-award-fill me-2"></i>
            Tecnica Brevettata #negativoèpositivo®
          </span>
        </div>
        
        <!-- Main Title -->
        <h1 class="hero-title display-1 fw-black mb-4" 
            style="font-family: var(--font-display); line-height: 1.1;">
          Mario <span class="text-gradient">Vetere</span>
        </h1>
        
        <!-- Subtitle -->
        <p class="hero-subtitle fs-2 fw-light mb-4 text-secondary" 
           style="font-family: var(--font-accent);">
          Arte dipinta in <span class="text-white">negativo</span>,<br>
          rivelata in <span class="text-gradient">positivo</span>
        </p>
        
        <!-- Description -->
        <p class="lead fs-5 mb-5 text-secondary" style="max-width: 540px;">
          Scopri l'unica tecnica al mondo che trasforma il modo di creare 
          e vivere l'arte contemporanea. Ogni opera è un viaggio sensoriale 
          tra luce e ombra.
        </p>
        
        <!-- CTA Buttons -->
        <div class="hero-cta d-flex flex-wrap gap-3">
          <a href="#opere-featured" class="btn btn-primary btn-lg px-5 py-3">
            <i class="bi bi-palette-fill me-2"></i>
            Scopri le Opere
          </a>
          <a href="#technique-preview" class="btn btn-outline-light btn-lg px-5 py-3">
            <i class="bi bi-play-circle-fill me-2"></i>
            Guarda il Video
          </a>
        </div>
        
        <!-- Stats -->
        <div class="hero-stats mt-5 d-flex gap-5">
          <div class="stat-item">
            <div class="fs-2 fw-bold text-gradient" data-count="100">0</div>
            <div class="fs-7 text-secondary text-uppercase tracking-wider">Opere Realizzate</div>
          </div>
          <div class="stat-item">
            <div class="fs-2 fw-bold text-gradient" data-count="15">0</div>
            <div class="fs-7 text-secondary text-uppercase tracking-wider">Mostre Internazionali</div>
          </div>
          <div class="stat-item">
            <div class="fs-2 fw-bold text-gradient">1°</div>
            <div class="fs-7 text-secondary text-uppercase tracking-wider">Tecnica Unica</div>
          </div>
        </div>
        
      </div>
      
      <!-- Right Column: Interactive Reveal Demo -->
      <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        
        <div class="hero-artwork-demo position-relative">
          
          <!-- Artwork Container -->
          <div class="artwork-reveal-container" id="hero-reveal">
            
            <!-- Negativo Layer -->
            <div class="artwork-layer artwork-negativo">
              <img src="assets/images/opere/featured/negativo-large.jpg" 
                   alt="Opera in Negativo" 
                   class="img-fluid rounded-4 shadow-2xl">
              <div class="artwork-label position-absolute top-0 end-0 m-3">
                <span class="badge bg-dark bg-opacity-75 fs-7 px-3 py-2">
                  NEGATIVO
                </span>
              </div>
            </div>
            
            <!-- Positivo Layer (Revealed on Hover/Click) -->
            <div class="artwork-layer artwork-positivo">
              <img src="assets/images/opere/featured/positivo-large.jpg" 
                   alt="Opera in Positivo" 
                   class="img-fluid rounded-4 shadow-2xl" 
                   style="filter: invert(1);">
              <div class="artwork-label position-absolute top-0 end-0 m-3">
                <span class="badge bg-light text-dark fs-7 px-3 py-2">
                  POSITIVO
                </span>
              </div>
            </div>
            
            <!-- Interactive Instruction -->
            <div class="reveal-instruction position-absolute bottom-0 start-50 translate-middle-x mb-4">
              <div class="glass-card px-4 py-3 text-center">
                <i class="bi bi-hand-index-thumb fs-4 d-block mb-2 text-gradient"></i>
                <p class="mb-0 fs-7 text-white">
                  Passa il mouse o tocca per rivelare
                </p>
              </div>
            </div>
            
          </div>
          
          <!-- Floating Elements (Decorative) -->
          <div class="floating-elements">
            <div class="float-element" style="top: 10%; left: -10%;">
              <div class="neon-circle"></div>
            </div>
            <div class="float-element" style="bottom: 15%; right: -5%;">
              <div class="neon-square"></div>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-5">
    <lottie-player src="assets/lottie/scroll-indicator.json" 
                   background="transparent" 
                   speed="1" 
                   style="width: 40px; height: 60px;" 
                   loop 
                   autoplay>
    </lottie-player>
  </div>
  
</section>
```

**Features:**
- ✅ Three.js particle background animato
- ✅ GSAP scroll-triggered animations
- ✅ Reveal effect interattivo negativo/positivo
- ✅ Counting animation per stats
- ✅ Lottie scroll indicator
- ✅ Responsive mobile-first
- ✅ Glass morphism UI elements
- ✅ Neon decorative elements

**JavaScript Enhancements:**
```javascript
// hero-animations.js
gsap.from('.hero-title', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'power4.out',
  delay: 0.2
});

// Reveal effect
const revealContainer = document.getElementById('hero-reveal');
revealContainer.addEventListener('mousemove', (e) => {
  const rect = revealContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentage = (x / rect.width) * 100;
  
  gsap.to('.artwork-positivo', {
    clipPath: `inset(0 ${100 - percentage}% 0 0)`,
    duration: 0.3,
    ease: 'power2.out'
  });
});

// Stats counter animation
const countUp = (element) => {
  const target = parseInt(element.dataset.count);
  gsap.to(element, {
    textContent: target,
    duration: 2,
    ease: 'power2.out',
    snap: { textContent: 1 },
    onUpdate: function() {
      element.textContent = Math.floor(this.targets()[0].textContent);
    }
  });
};
```

#### 1.2 Featured Artworks - 3D Carousel

```html
<section class="featured-artworks py-8 py-lg-12" id="opere-featured">
  <div class="container-fluid px-4 px-lg-6">
    
    <!-- Section Header -->
    <div class="section-header text-center mb-6" data-aos="fade-up">
      <span class="section-badge badge glass-badge fs-6 px-4 py-2 mb-4">
        Collezione in Evidenza
      </span>
      <h2 class="section-title display-3 fw-bold mb-4">
        Opere <span class="text-gradient">Selezionate</span>
      </h2>
      <p class="section-description lead fs-5 text-secondary mx-auto" style="max-width: 700px;">
        Una selezione curata delle opere più significative, ognuna con la sua 
        storia unica da raccontare attraverso la tecnica #negativoèpositivo®
      </p>
    </div>
    
    <!-- Swiper Carousel -->
    <div class="swiper featured-swiper" data-aos="fade-up" data-aos-delay="200">
      <div class="swiper-wrapper">
        
        <!-- Artwork Card 1 -->
        <div class="swiper-slide">
          <div class="artwork-card-3d">
            
            <!-- Card Inner -->
            <div class="card artwork-card glass-card border-0 overflow-hidden h-100">
              
              <!-- Image Container with Reveal -->
              <div class="artwork-images position-relative">
                <div class="artwork-dual-view">
                  
                  <!-- Negativo -->
                  <div class="view-negativo">
                    <img src="assets/images/opere/1/negativo-medium.jpg" 
                         class="card-img-top" 
                         alt="Opera 1 Negativo"
                         loading="lazy">
                    <div class="view-label position-absolute top-0 end-0 m-3">
                      <span class="badge bg-dark bg-opacity-75">NEGATIVO</span>
                    </div>
                  </div>
                  
                  <!-- Positivo (Hidden, shown on hover) -->
                  <div class="view-positivo position-absolute top-0 start-0 w-100 h-100">
                    <img src="assets/images/opere/1/positivo-medium.jpg" 
                         class="card-img-top" 
                         alt="Opera 1 Positivo"
                         style="filter: invert(1);"
                         loading="lazy">
                    <div class="view-label position-absolute top-0 end-0 m-3">
                      <span class="badge bg-light text-dark">POSITIVO</span>
                    </div>
                  </div>
                  
                </div>
                
                <!-- Quick View Button -->
                <button class="btn btn-light position-absolute top-50 start-50 translate-middle opacity-0 quick-view-btn" 
                        data-bs-toggle="modal" 
                        data-bs-target="#lightboxModal"
                        data-artwork-id="1">
                  <i class="bi bi-zoom-in me-2"></i> Visualizza
                </button>
                
              </div>
              
              <!-- Card Body -->
              <div class="card-body p-4">
                
                <!-- Title -->
                <h3 class="card-title h5 fw-semibold mb-2">
                  Tramonto Calabrese
                </h3>
                
                <!-- Meta Info -->
                <div class="artwork-meta d-flex flex-wrap gap-3 mb-3 fs-7 text-secondary">
                  <span><i class="bi bi-calendar3 me-1"></i> 2024</span>
                  <span><i class="bi bi-rulers me-1"></i> 50x70 cm</span>
                  <span><i class="bi bi-palette me-1"></i> Crete colorate</span>
                </div>
                
                <!-- Description -->
                <p class="card-text fs-7 text-secondary mb-4">
                  Un paesaggio emozionale che cattura l'essenza della Calabria 
                  attraverso sfumature create esclusivamente con i polpastrelli.
                </p>
                
                <!-- Footer -->
                <div class="card-footer d-flex justify-content-between align-items-center bg-transparent border-0 p-0">
                  
                  <!-- Price -->
                  <div class="artwork-price">
                    <span class="fs-4 fw-bold text-gradient">€ 2.500</span>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="artwork-actions d-flex gap-2">
                    <button class="btn btn-sm btn-outline-light" 
                            data-bs-toggle="tooltip" 
                            title="Aggiungi ai preferiti">
                      <i class="bi bi-heart"></i>
                    </button>
                    <a href="opera-single.html?id=1" 
                       class="btn btn-sm btn-primary">
                      Dettagli <i class="bi bi-arrow-right ms-1"></i>
                    </a>
                  </div>
                  
                </div>
                
              </div>
              
              <!-- NFT Badge (se applicabile) -->
              <div class="nft-badge position-absolute bottom-0 start-0 m-3">
                <span class="badge neon-badge fs-8">
                  <i class="bi bi-shield-check me-1"></i> NFT
                </span>
              </div>
              
            </div>
            
          </div>
        </div>
        
        <!-- Repeat for more artworks -->
        
      </div>
      
      <!-- Navigation -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      
      <!-- Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    
    <!-- View All CTA -->
    <div class="text-center mt-6" data-aos="fade-up">
      <a href="opere.html" class="btn btn-outline-light btn-lg px-6 py-3">
        Esplora Tutte le Opere
        <i class="bi bi-grid-3x3-gap ms-2"></i>
      </a>
    </div>
    
  </div>
</section>
```

**Swiper Configuration:**
```javascript
// carousel.js
const featuredSwiper = new Swiper('.featured-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 200,
    modifier: 1.5,
    slideShadows: true,
  },
  
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});

// 3D Tilt Effect on Cards
VanillaTilt.init(document.querySelectorAll(".artwork-card-3d"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});
```

**CSS Enhancements:**
```css
/* Artwork Card 3D Effects */
.artwork-card-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.artwork-card {
  transition: var(--transition-all);
  transform: translateZ(0);
}

.artwork-card:hover {
  transform: translateY(-10px) translateZ(20px);
  box-shadow: var(--shadow-2xl), var(--shadow-neon-gold);
}

/* Dual View Hover Effect */
.artwork-dual-view {
  position: relative;
  overflow: hidden;
}

.view-positivo {
  opacity: 0;
  transition: opacity var(--duration-base) var(--ease-smooth);
}

.artwork-dual-view:hover .view-positivo {
  opacity: 1;
}

/* Quick View Button */
.quick-view-btn {
  transition: var(--transition-all);
  backdrop-filter: blur(10px);
}

.artwork-images:hover .quick-view-btn {
  opacity: 1 !important;
}

/* Glass Card Effect */
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-blur);
  box-shadow: var(--glass-shadow);
}

/* Neon Badge */
.neon-badge {
  background: rgba(0, 245, 255, 0.2);
  border: 1px solid rgba(0, 245, 255, 0.5);
  box-shadow: var(--shadow-neon-cyan);
  animation: neonPulse 2s ease-in-out infinite;
}

@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 10px rgba(0, 245, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 245, 255, 0.8); }
}
```

#### 1.3 Technique Showcase - Interactive Timeline

```html
<section class="technique-showcase py-8 py-lg-12 position-relative overflow-hidden">
  
  <!-- Background Decorative Elements -->
  <div class="technique-bg position-absolute top-0 start-0 w-100 h-100">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
  </div>
  
  <div class="container position-relative">
    <div class="row align-items-center">
      
      <!-- Left Column: Content -->
      <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
        
        <!-- Header -->
        <span class="section-badge badge glass-badge fs-6 px-4 py-2 mb-4">
          La Tecnica
        </span>
        <h2 class="display-3 fw-bold mb-4">
          #negativo<span class="text-gradient">èpositivo</span>®
        </h2>
        <p class="lead fs-4 mb-5">
          Una rivoluzione nell'arte contemporanea: dipingere in negativo 
          e rivelare in positivo attraverso la tecnologia.
        </p>
        
        <!-- Process Steps -->
        <div class="technique-steps">
          
          <!-- Step 1 -->
          <div class="step-item" data-aos="fade-up" data-aos-delay="100">
            <div class="step-container d-flex gap-4">
              
              <!-- Step Number -->
              <div class="step-number">
                <div class="number-circle">
                  <span class="fs-3 fw-bold text-gradient">01</span>
                </div>
                <div class="step-line"></div>
              </div>
              
              <!-- Step Content -->
              <div class="step-content flex-grow-1">
                <h3 class="h5 fw-semibold mb-2">Creazione Manuale</h3>
                <p class="text-secondary mb-3">
                  Ogni opera è dipinta esclusivamente con i polpastrelli, 
                  sfumando crete colorate su cartoncino. Nessun pennello, 
                  solo il tocco diretto dell'artista.
                </p>
                
                <!-- Icon Badges -->
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-hand-index-thumb me-1"></i> Solo polpastrelli
                  </span>
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-palette2 me-1"></i> Crete colorate
                  </span>
                </div>
              </div>
              
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="step-item" data-aos="fade-up" data-aos-delay="200">
            <div class="step-container d-flex gap-4">
              <div class="step-number">
                <div class="number-circle">
                  <span class="fs-3 fw-bold text-gradient">02</span>
                </div>
                <div class="step-line"></div>
              </div>
              <div class="step-content flex-grow-1">
                <h3 class="h5 fw-semibold mb-2">Pittura in Negativo</h3>
                <p class="text-secondary mb-3">
                  L'opera viene realizzata invertendo i valori cromatici. 
                  Ciò che appare chiaro diventerà scuro, e viceversa.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-moon-stars me-1"></i> Inversione cromatica
                  </span>
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-eye me-1"></i> Visione negativa
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="step-item" data-aos="fade-up" data-aos-delay="300">
            <div class="step-container d-flex gap-4">
              <div class="step-number">
                <div class="number-circle">
                  <span class="fs-3 fw-bold text-gradient">03</span>
                </div>
                <div class="step-line"></div>
              </div>
              <div class="step-content flex-grow-1">
                <h3 class="h5 fw-semibold mb-2">Rivelazione Digitale</h3>
                <p class="text-secondary mb-3">
                  Attraverso smartphone o tablet, modificando le impostazioni 
                  di visualizzazione, l'opera si rivela nella sua vera essenza.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-phone me-1"></i> Tecnologia mobile
                  </span>
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-lightbulb me-1"></i> Rivelazione positiva
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Step 4 -->
          <div class="step-item" data-aos="fade-up" data-aos-delay="400">
            <div class="step-container d-flex gap-4">
              <div class="step-number">
                <div class="number-circle">
                  <span class="fs-3 fw-bold text-gradient">04</span>
                </div>
              </div>
              <div class="step-content flex-grow-1">
                <h3 class="h5 fw-semibold mb-2">Esperienza Unica</h3>
                <p class="text-secondary mb-3">
                  Ogni osservatore vive un momento di meraviglia nel vedere 
                  l'opera trasformarsi davanti ai propri occhi.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-stars me-1"></i> Effetto "wow"
                  </span>
                  <span class="badge glass-badge-sm">
                    <i class="bi bi-award me-1"></i> Prima in Italia
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- CTA -->
        <div class="mt-5">
          <a href="tecnica.html" class="btn btn-primary btn-lg px-5 py-3">
            Approfondisci la Tecnica
            <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
        
      </div>
      
      <!-- Right Column: Video/Interactive Demo -->
      <div class="col-lg-6" data-aos="fade-left">
        
        <div class="technique-visual position-relative">
          
          <!-- Video Container -->
          <div class="video-container glass-card rounded-4 overflow-hidden">
            <div class="ratio ratio-16x9">
              
              <!-- Placeholder for Video -->
              <div class="video-placeholder d-flex align-items-center justify-content-center bg-dark">
                
                <!-- Play Button -->
                <button class="btn btn-play" 
                        id="playTechniqueVideo">
                  <div class="play-icon">
                    <i class="bi bi-play-circle fs-1"></i>
                  </div>
                  <span class="d-block mt-3 fs-5">Guarda il Processo</span>
                </button>
                
                <!-- Background Image -->
                <img src="assets/images/technique/video-poster.jpg" 
                     alt="Tecnica in azione" 
                     class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50">
                
              </div>
              
              <!-- Actual Video (Hidden initially) -->
              <video id="techniqueVideo" 
                     controls 
                     poster="assets/images/technique/video-poster.jpg"
                     class="d-none">
                <source src="assets/videos/technique-demo.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              
            </div>
          </div>
          
          <!-- Floating Stats -->
          <div class="floating-stats">
            
            <div class="stat-card glass-card p-3 rounded-3" 
                 style="position: absolute; top: -30px; right: -30px;" 
                 data-aos="zoom-in" 
                 data-aos-delay="500">
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-award-fill fs-3 text-gradient"></i>
                <div>
                  <div class="fs-7 text-secondary text-uppercase">Brevettata</div>
                  <div class="fw-bold">Prima in Italia</div>
                </div>
              </div>
            </div>
            
            <div class="stat-card glass-card p-3 rounded-3" 
                 style="position: absolute; bottom: -30px; left: -30px;" 
                 data-aos="zoom-in" 
                 data-aos-delay="600">
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-clock-history fs-3 text-gradient"></i>
                <div>
                  <div class="fs-7 text-secondary text-uppercase">Tempo medio</div>
                  <div class="fw-bold">40-60 ore</div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
  </div>
  
</section>
```

**Interactive Video Player:**
```javascript
// technique-video.js
const playBtn = document.getElementById('playTechniqueVideo');
const videoElement = document.getElementById('techniqueVideo');
const placeholder = document.querySelector('.video-placeholder');

playBtn.addEventListener('click', () => {
  gsap.to(placeholder, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      placeholder.classList.add('d-none');
      videoElement.classList.remove('d-none');
      videoElement.play();
    }
  });
});

// Optional: Pause on scroll away
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && !videoElement.paused) {
      videoElement.pause();
    }
  });
}, { threshold: 0.5 });

observer.observe(videoElement);
```

**CSS for Steps Animation:**
```css
/* Timeline Connector Line */
.step-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, 
    var(--accent-primary) 0%, 
    transparent 100%);
  margin-left: 20px;
}

.step-item:last-child .step-line {
  display: none;
}

/* Number Circle */
.number-circle {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  background: var(--bg-surface);
  position: relative;
  z-index: 1;
}

.number-circle::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--duration-base);
  z-index: -1;
}

.step-item:hover .number-circle::before {
  opacity: 0.3;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.5; }
}

/* Glass Badge Small */
.glass-badge-sm {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
}

/* Gradient Orbs Background */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--gradient-primary);
  top: -100px;
  left: -100px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: var(--gradient-secondary);
  bottom: -150px;
  right: -150px;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -30px) scale(1.1); }
  66% { transform: translate(-30px, 50px) scale(0.9); }
}

/* Play Button */
.btn-play {
  border: none;
  background: transparent;
  color: var(--accent-primary);
  transition: var(--transition-all);
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.btn-play:hover {
  transform: scale(1.1);
  color: var(--accent-primary-hover);
}

.play-icon {
  font-size: 4rem;
  text-shadow: var(--shadow-neon-gold);
}
```

#### 1.4 Artist Story - Emotional Connection

```html
<section class="artist-story py-8 py-lg-12 bg-surface">
  <div class="container">
    <div class="row align-items-center g-5">
      
      <!-- Left: Artist Image -->
      <div class="col-lg-5" data-aos="fade-right">
        <div class="artist-image-container position-relative">
          
          <!-- Main Portrait -->
          <div class="artist-portrait glass-card rounded-4 overflow-hidden">
            <img src="assets/images/artist/portrait-main.jpg" 
                 alt="Mario Vetere" 
                 class="img-fluid w-100 h-auto"
                 loading="lazy">
          </div>
          
          <!-- Floating Quote -->
          <div class="artist-quote glass-card p-4 rounded-3 position-absolute" 
               style="bottom: -40px; left: -40px; max-width: 280px;"
               data-aos="zoom-in"
               data-aos-delay="300">
            <i class="bi bi-quote fs-2 text-gradient d-block mb-2"></i>
            <p class="mb-0 fs-7 fst-italic">
              "In tutto ciò che può sembrare negativo può essere ravvisato 
              un elemento positivo."
            </p>
          </div>
          
          <!-- Decorative Element -->
          <div class="decorative-frame position-absolute top-0 end-0" 
               style="width: 100px; height: 100px; transform: translate(20%, -20%);">
            <svg viewBox="0 0 100 100" class="neon-svg">
              <rect x="10" y="10" width="80" height="80" 
                    fill="none" 
                    stroke="var(--accent-secondary)" 
                    stroke-width="1" />
            </svg>
          </div>
          
        </div>
      </div>
      
      <!-- Right: Story Content -->
      <div class="col-lg-7" data-aos="fade-left">
        
        <!-- Badge -->
        <span class="section-badge badge glass-badge fs-6 px-4 py-2 mb-4">
          L'Artista
        </span>
        
        <!-- Title -->
        <h2 class="display-4 fw-bold mb-4">
          Mario <span class="text-gradient">Vetere</span>
        </h2>
        
        <!-- Subtitle -->
        <p class="lead fs-4 mb-4">
          Un percorso artistico che unisce tradizione e innovazione, 
          trasformando una tecnica leonardesca in arte contemporanea.
        </p>
        
        <!-- Story Content -->
        <div class="artist-bio">
          <p class="fs-5 text-secondary mb-4">
            Nato a Torino da genitori calabresi, Mario Vetere scopre il suo 
            talento artistico già all'età di 6 anni. Dopo oltre 30 anni, 
            durante un periodo di forte crisi lavorativa, decide di dedicarsi 
            completamente all'arte, creando la sua prima opera con il caffè 
            della moglie.
          </p>
          
          <p class="fs-5 text-secondary mb-4">
            Da autodidatta, studia e perfeziona una delle tecniche care a 
            Leonardo Da Vinci: il disegno su cartoncino con crete colorate, 
            sfumate esclusivamente con i polpastrelli. Nel 2016, dopo intensi 
            studi sui colori, crea la rivoluzionaria tecnica 
            <strong class="text-white">#negativoèpositivo®</strong>, 
            la prima nel suo genere in Italia.
          </p>
        </div>
        
        <!-- Achievements -->
        <div class="achievements mt-5">
          <h3 class="h5 fw-semibold mb-4">Riconoscimenti Principali</h3>
          
          <div class="row g-3">
            
            <div class="col-md-6">
              <div class="achievement-card glass-card p-4 rounded-3 h-100">
                <div class="d-flex align-items-start gap-3">
                  <i class="bi bi-trophy-fill fs-3 text-gradient"></i>
                  <div>
                    <div class="fw-semibold mb-1">Biennale Firenze 2019</div>
                    <p class="mb-0 fs-7 text-secondary">
                      Collezione più visitata su 747 espositori da 78 Paesi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="achievement-card glass-card p-4 rounded-3 h-100">
                <div class="d-flex align-items-start gap-3">
                  <i class="bi bi-award-fill fs-3 text-gradient"></i>
                  <div>
                    <div class="fw-semibold mb-1">Premio Carlino d'Argento 2024</div>
                    <p class="mb-0 fs-7 text-secondary">
                      Riconoscimento per l'eccellenza artistica calabrese
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="achievement-card glass-card p-4 rounded-3 h-100">
                <div class="d-flex align-items-start gap-3">
                  <i class="bi bi-globe fs-3 text-gradient"></i>
                  <div>
                    <div class="fw-semibold mb-1">Mostre Internazionali</div>
                    <p class="mb-0 fs-7 text-secondary">
                      Germania, Italia e oltre 15 città espositive
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="achievement-card glass-card p-4 rounded-3 h-100">
                <div class="d-flex align-items-start gap-3">
                  <i class="bi bi-palette-fill fs-3 text-gradient"></i>
                  <div>
                    <div class="fw-semibold mb-1">100+ Opere</div>
                    <p class="mb-0 fs-7 text-secondary">
                      Ogni opera richiede 40-60 ore di lavoro manuale
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <!-- CTA -->
        <div class="mt-5">
          <a href="chi-sono.html" class="btn btn-primary btn-lg px-5 py-3 me-3">
            Biografia Completa
            <i class="bi bi-arrow-right ms-2"></i>
          </a>
          <a href="contatti.html" class="btn btn-outline-light btn-lg px-5 py-3">
            Contatta l'Artista
          </a>
        </div>
        
      </div>
      
    </div>
  </div>
</section>
```

**Parallax Effect on Scroll:**
```javascript
// artist-story-parallax.js
gsap.registerPlugin(ScrollTrigger);

gsap.to('.artist-portrait', {
  y: -50,
  scrollTrigger: {
    trigger: '.artist-story',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.artist-quote', {
  y: 30,
  scrollTrigger: {
    trigger: '.artist-story',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
```

#### 1.5 Contact CTA - Conversion Optimized

```html
<section class="contact-cta py-8 py-lg-12 position-relative overflow-hidden">
  
  <!-- Background with gradient -->
  <div class="cta-bg position-absolute top-0 start-0 w-100 h-100">
    <div class="gradient-overlay" 
         style="background: var(--gradient-primary); opacity: 0.1;"></div>
  </div>
  
  <div class="container position-relative text-center">
    
    <!-- Icon -->
    <div class="cta-icon mb-4" data-aos="zoom-in">
      <div class="icon-circle mx-auto">
        <i class="bi bi-envelope-heart fs-1 text-gradient"></i>
      </div>
    </div>
    
    <!-- Title -->
    <h2 class="display-4 fw-bold mb-4" data-aos="fade-up">
      Interessato alle Opere?
    </h2>
    
    <!-- Description -->
    <p class="lead fs-4 text-secondary mb-5 mx-auto" 
       style="max-width: 700px;"
       data-aos="fade-up" 
       data-aos-delay="100">
      Contattami per informazioni su disponibilità, prezzi, commissioni 
      personalizzate o per una visita privata allo studio.
    </p>
    
    <!-- Contact Methods -->
    <div class="contact-methods d-flex flex-wrap justify-content-center gap-3 mb-5" 
         data-aos="fade-up" 
         data-aos-delay="200">
      
      <!-- WhatsApp -->
      <a href="https://wa.me/393XXXXXXXXX?text=Ciao%20Mario,%20sono%20interessato%20alle%20tue%20opere" 
         class="btn btn-primary btn-lg px-5 py-3 d-flex align-items-center gap-2"
         target="_blank"
         rel="noopener">
        <i class="bi bi-whatsapp fs-4"></i>
        <span>WhatsApp Diretto</span>
      </a>
      
      <!-- Email -->
      <a href="mailto:artmv.info@gmail.com" 
         class="btn btn-outline-light btn-lg px-5 py-3 d-flex align-items-center gap-2">
        <i class="bi bi-envelope-fill fs-5"></i>
        <span>Email</span>
      </a>
      
      <!-- Contact Form -->
      <a href="contatti.html" 
         class="btn btn-outline-light btn-lg px-5 py-3 d-flex align-items-center gap-2">
        <i class="bi bi-chat-dots-fill fs-5"></i>
        <span>Form Contatto</span>
      </a>
      
    </div>
    
    <!-- Trust Signals -->
    <div class="trust-signals" data-aos="fade-up" data-aos-delay="300">
      <div class="row justify-content-center g-4">
        
        <div class="col-auto">
          <div class="trust-item d-flex align-items-center gap-2">
            <i class="bi bi-shield-check fs-5 text-gradient"></i>
            <span class="fs-7 text-secondary">Opere Autentiche</span>
          </div>
        </div>
        
        <div class="col-auto">
          <div class="trust-item d-flex align-items-center gap-2">
            <i class="bi bi-truck fs-5 text-gradient"></i>
            <span class="fs-7 text-secondary">Spedizione Assicurata</span>
          </div>
        </div>
        
        <div class="col-auto">
          <div class="trust-item d-flex align-items-center gap-2">
            <i class="bi bi-file-earmark-check fs-5 text-gradient"></i>
            <span class="fs-7 text-secondary">Certificato d'Autenticità</span>
          </div>
        </div>
        
        <div class="col-auto">
          <div class="trust-item d-flex align-items-center gap-2">
            <i class="bi bi-credit-card fs-5 text-gradient"></i>
            <span class="fs-7 text-secondary">Pagamenti Sicuri</span>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
  
</section>
```

---

Questo è solo l'inizio! Ho creato la prima parte del documento con:

✅ Executive Summary completo  
✅ Analisi competitor dettagliata  
✅ Stack tecnologico avanzato con tutte le librerie 2025  
✅ Design System professionale con variabili CSS complete  
✅ File structure moderna e scalabile  
✅ Homepage con 5 sezioni completamente sviluppate con codice HTML/CSS/JS  

Il documento continua con tutte le altre pagine (Opere, Opera Single, Tecnica, Chi Sono, Contatti), componenti riutilizzabili, animazioni avanzate, performance optimization, testing, deployment e molto altro.

Vuoi che continui con le altre sezioni del documento? Posso creare:

1. **Pagina Opere** - Grid avanzata con filtri
2. **Pagina Opera Single** - Dettaglio con gallery 3D
3. **Pagina Tecnica** - Timeline interattiva completa
4. **Pagina Chi Sono** - Bio con timeline eventi
5. **Pagina Contatti** - Form validation avanzato
6. **Componenti Globali** - Header, Footer, Navigation
7. **Animation System** - GSAP configurations
8. **Performance Guide** - Optimization strategies
9. **Deployment Guide** - Step-by-step deploy

---

### 🖼 2. OPERE PAGE - Advanced Gallery Grid

```html
<!DOCTYPE html>
<html lang="it" data-bs-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Opere | Mario Vetere #negativoèpositivo®</title>
  
  <!-- Meta Tags SEO -->
  <meta name="description" content="Esplora la collezione completa delle opere di Mario Vetere realizzate con la tecnica brevettata #negativoèpositivo®">
  
  <!-- Bootstrap 5.3.5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  
  <!-- AOS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="assets/css/05-pages/_opere.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
    <!-- Navbar content -->
  </nav>

  <main class="opere-page pt-8">
    
    <!-- Page Hero -->
    <section class="page-hero py-8 py-lg-10 position-relative overflow-hidden">
      <div class="container text-center">
        
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" data-aos="fade-down">
          <ol class="breadcrumb justify-content-center mb-4">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Opere</li>
          </ol>
        </nav>
        
        <!-- Title -->
        <h1 class="display-2 fw-bold mb-4" data-aos="fade-up">
          Collezione <span class="text-gradient">Completa</span>
        </h1>
        
        <!-- Subtitle -->
        <p class="lead fs-4 text-secondary mx-auto mb-5" 
           style="max-width: 700px;"
           data-aos="fade-up" 
           data-aos-delay="100">
          Ogni opera è un viaggio unico attraverso la tecnica #negativoèpositivo®. 
          Passa il mouse per rivelare la trasformazione.
        </p>
        
        <!-- Stats Bar -->
        <div class="stats-bar d-flex justify-content-center gap-5 flex-wrap" 
             data-aos="fade-up" 
             data-aos-delay="200">
          <div class="stat-item">
            <div class="fs-2 fw-bold text-gradient" id="totalArtworks">0</div>
            <div class="fs-7 text-secondary text-uppercase">Opere Totali</div>
          </div>
          <div class="stat-item">
            <div class="fs-2 fw-bold text-gradient" id="availableArtworks">0</div>
            <div class="fs-7 text-secondary text-uppercase">Disponibili</div>
          </div>
          <div class="stat-item">
            <div class="fs-2 fw-bold text-gradient">2024</div>
            <div class="fs-7 text-secondary text-uppercase">Anno Attivo</div>
          </div>
        </div>
        
      </div>
    </section>
    
    <!-- Filters & Sort (Future Enhancement) -->
    <section class="filters-section py-4 sticky-top bg-body border-bottom" style="top: 70px; z-index: 1020;">
      <div class="container">
        <div class="row align-items-center g-3">
          
          <!-- Search -->
          <div class="col-lg-4">
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" 
                     class="form-control bg-transparent border-start-0" 
                     placeholder="Cerca per titolo, anno..." 
                     id="searchInput">
            </div>
          </div>
          
          <!-- Filters -->
          <div class="col-lg-5">
            <div class="d-flex gap-2 flex-wrap">
              <button class="btn btn-sm glass-btn active" data-filter="all">
                Tutte <span class="badge bg-primary ms-1">42</span>
              </button>
              <button class="btn btn-sm glass-btn" data-filter="available">
                Disponibili <span class="badge bg-success ms-1">28</span>
              </button>
              <button class="btn btn-sm glass-btn" data-filter="nft">
                <i class="bi bi-shield-check me-1"></i> NFT <span class="badge bg-info ms-1">15</span>
              </button>
              <button class="btn btn-sm glass-btn" data-filter="featured">
                <i class="bi bi-star-fill me-1"></i> Featured <span class="badge bg-warning ms-1">10</span>
              </button>
            </div>
          </div>
          
          <!-- Sort & View -->
          <div class="col-lg-3 text-lg-end">
            <div class="d-flex justify-content-lg-end gap-2">
              
              <!-- Sort Dropdown -->
              <div class="dropdown">
                <button class="btn btn-sm glass-btn dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown">
                  <i class="bi bi-sort-down me-1"></i> Ordina
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#" data-sort="newest">Più Recenti</a></li>
                  <li><a class="dropdown-item" href="#" data-sort="oldest">Più Vecchie</a></li>
                  <li><a class="dropdown-item" href="#" data-sort="price-asc">Prezzo: Basso-Alto</a></li>
                  <li><a class="dropdown-item" href="#" data-sort="price-desc">Prezzo: Alto-Basso</a></li>
                  <li><a class="dropdown-item" href="#" data-sort="popular">Più Popolari</a></li>
                </ul>
              </div>
              
              <!-- View Toggle -->
              <div class="btn-group" role="group">
                <button class="btn btn-sm glass-btn active" data-view="grid">
                  <i class="bi bi-grid-3x3-gap"></i>
                </button>
                <button class="btn btn-sm glass-btn" data-view="list">
                  <i class="bi bi-list-ul"></i>
                </button>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
    <!-- Gallery Grid -->
    <section class="gallery-grid py-6 py-lg-8">
      <div class="container-fluid px-lg-6">
        
        <!-- Grid Container -->
        <div class="row g-4" id="artworksGrid">
          
          <!-- Artwork Card -->
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 artwork-item" 
               data-category="available nft featured" 
               data-price="2500" 
               data-year="2024"
               data-aos="fade-up">
            
            <div class="artwork-card h-100">
              
              <!-- Card -->
              <div class="card glass-card border-0 overflow-hidden h-100">
                
                <!-- Image Container with Dual View -->
                <div class="artwork-images position-relative">
                  
                  <!-- Image Wrapper -->
                  <div class="image-wrapper ratio ratio-4x3">
                    
                    <!-- Negativo (Default) -->
                    <div class="artwork-view view-negativo">
                      <img src="assets/images/opere/1/negativo-medium.jpg" 
                           class="img-fluid w-100 h-100 object-fit-cover" 
                           alt="Tramonto Calabrese - Negativo"
                           loading="lazy">
                      
                      <!-- Label -->
                      <div class="view-badge position-absolute top-0 start-0 m-3">
                        <span class="badge bg-dark bg-opacity-75 text-uppercase fs-8">
                          Negativo
                        </span>
                      </div>
                    </div>
                    
                    <!-- Positivo (Revealed on Hover) -->
                    <div class="artwork-view view-positivo position-absolute top-0 start-0 w-100 h-100">
                      <img src="assets/images/opere/1/positivo-medium.jpg" 
                           class="img-fluid w-100 h-100 object-fit-cover" 
                           alt="Tramonto Calabrese - Positivo"
                           style="filter: invert(1);"
                           loading="lazy">
                      
                      <!-- Label -->
                      <div class="view-badge position-absolute top-0 start-0 m-3">
                        <span class="badge bg-light text-dark text-uppercase fs-8">
                          Positivo
                        </span>
                      </div>
                    </div>
                    
                  </div>
                  
                  <!-- Overlay Actions -->
                  <div class="artwork-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
                    
                    <div class="d-flex gap-2">
                      <!-- Quick View -->
                      <button class="btn btn-light btn-sm rounded-circle" 
                              data-bs-toggle="modal" 
                              data-bs-target="#artworkModal"
                              data-artwork-id="1"
                              title="Anteprima Veloce">
                        <i class="bi bi-eye"></i>
                      </button>
                      
                      <!-- Favorite -->
                      <button class="btn btn-light btn-sm rounded-circle favorite-btn" 
                              title="Aggiungi ai Preferiti">
                        <i class="bi bi-heart"></i>
                      </button>
                      
                      <!-- Share -->
                      <button class="btn btn-light btn-sm rounded-circle" 
                              title="Condividi">
                        <i class="bi bi-share"></i>
                      </button>
                    </div>
                    
                  </div>
                  
                  <!-- Status Badges -->
                  <div class="status-badges position-absolute top-0 end-0 m-3">
                    <span class="badge neon-badge mb-2 d-block">
                      <i class="bi bi-shield-check me-1"></i> NFT
                    </span>
                    <span class="badge bg-warning text-dark d-block">
                      <i class="bi bi-star-fill me-1"></i> Featured
                    </span>
                  </div>
                  
                </div>
                
                <!-- Card Body -->
                <div class="card-body p-4 d-flex flex-column">
                  
                  <!-- Title -->
                  <h3 class="card-title h6 fw-semibold mb-2">
                    <a href="opera-single.html?id=1" class="text-decoration-none text-white stretched-link">
                      Tramonto Calabrese
                    </a>
                  </h3>
                  
                  <!-- Meta -->
                  <div class="artwork-meta d-flex flex-wrap gap-3 mb-3 fs-8 text-secondary">
                    <span><i class="bi bi-calendar3 me-1"></i> 2024</span>
                    <span><i class="bi bi-rulers me-1"></i> 50x70cm</span>
                  </div>
                  
                  <!-- Description (truncated) -->
                  <p class="card-text fs-8 text-secondary mb-auto line-clamp-2">
                    Un paesaggio emozionale che cattura l'essenza della Calabria 
                    attraverso sfumature create esclusivamente con i polpastrelli.
                  </p>
                  
                  <!-- Footer -->
                  <div class="card-footer d-flex justify-content-between align-items-center bg-transparent border-0 px-0 mt-3">
                    
                    <!-- Price -->
                    <div class="artwork-price">
                      <div class="fs-5 fw-bold text-gradient">€ 2.500</div>
                      <div class="fs-9 text-secondary">IVA inclusa</div>
                    </div>
                    
                    <!-- Status -->
                    <div>
                      <span class="badge bg-success-subtle text-success border border-success">
                        Disponibile
                      </span>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          <!-- Repeat artwork cards -->
          
        </div>
        
        <!-- Loading State -->
        <div class="text-center py-8 d-none" id="loadingState">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Caricamento...</span>
          </div>
        </div>
        
        <!-- Empty State -->
        <div class="text-center py-8 d-none" id="emptyState">
          <i class="bi bi-search fs-1 text-secondary mb-3 d-block"></i>
          <h3 class="h5 mb-3">Nessuna opera trovata</h3>
          <p class="text-secondary">Prova a modificare i filtri di ricerca</p>
          <button class="btn btn-primary" onclick="resetFilters()">
            Resetta Filtri
          </button>
        </div>
        
        <!-- Load More -->
        <div class="text-center mt-6" id="loadMoreContainer">
          <button class="btn btn-outline-light btn-lg px-6 py-3" id="loadMoreBtn">
            Carica Altre Opere
            <i class="bi bi-arrow-down-circle ms-2"></i>
          </button>
        </div>
        
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section py-8 bg-gradient">
      <div class="container text-center">
        <h2 class="display-5 fw-bold mb-4">
          Non trovi ciò che cerchi?
        </h2>
        <p class="lead mb-5">
          Commissiona un'opera personalizzata creata appositamente per te
        </p>
        <a href="contatti.html?subject=commissione" class="btn btn-primary btn-lg px-6 py-3">
          Richiedi una Commissione
          <i class="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
    
  </main>

  <!-- Footer -->
  <footer class="footer">
    <!-- Footer content -->
  </footer>

  <!-- Quick View Modal -->
  <div class="modal fade" id="artworkModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content glass-card border-0">
        <div class="modal-header border-0">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-0">
          <!-- Modal content loaded dynamically -->
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="assets/js/core/utils.js"></script>
  <script src="assets/js/components/FilterSystem.js"></script>
  <script src="assets/js/components/ArtworkCard.js"></script>
  <script src="assets/js/app.js"></script>

</body>
</html>
```

**JavaScript: Filter System**

```javascript
// components/FilterSystem.js
class FilterSystem {
  constructor() {
    this.grid = document.getElementById('artworksGrid');
    this.items = this.grid ? Array.from(this.grid.querySelectorAll('.artwork-item')) : [];
    this.activeFilters = new Set(['all']);
    this.currentSort = 'newest';
    this.searchTerm = '';
    
    this.init();
  }
  
  init() {
    // Filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleFilter(e));
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.filterAndSort();
      });
    }
    
    // Sort dropdown
    document.querySelectorAll('[data-sort]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.currentSort = e.target.dataset.sort;
        this.filterAndSort();
      });
    });
    
    // View toggle
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => this.toggleView(e));
    });
    
    // Favorites
    document.querySelectorAll('.favorite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.toggleFavorite(e));
    });
    
    // Initial count animation
    this.animateCount('totalArtworks', this.items.length);
    this.animateCount('availableArtworks', this.items.filter(item => 
      item.dataset.category.includes('available')).length);
  }
  
  handleFilter(e) {
    const btn = e.currentTarget;
    const filter = btn.dataset.filter;
    
    // Toggle active state
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Set filter
    if (filter === 'all') {
      this.activeFilters = new Set(['all']);
    } else {
      this.activeFilters = new Set([filter]);
    }
    
    this.filterAndSort();
  }
  
  filterAndSort() {
    let visible = this.items.filter(item => {
      // Filter by category
      const categories = item.dataset.category.split(' ');
      const matchesFilter = this.activeFilters.has('all') || 
                           Array.from(this.activeFilters).some(f => categories.includes(f));
      
      // Filter by search
      const title = item.querySelector('.card-title').textContent.toLowerCase();
      const matchesSearch = !this.searchTerm || title.includes(this.searchTerm);
      
      return matchesFilter && matchesSearch;
    });
    
    // Sort
    visible = this.sortItems(visible);
    
    // Show/hide items with animation
    this.animateItems(visible);
    
    // Show empty state if needed
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
      emptyState.classList.toggle('d-none', visible.length > 0);
    }
  }
  
  sortItems(items) {
    const sorted = [...items];
    
    switch(this.currentSort) {
      case 'newest':
        sorted.sort((a, b) => b.dataset.year - a.dataset.year);
        break;
      case 'oldest':
        sorted.sort((a, b) => a.dataset.year - b.dataset.year);
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.dataset.price - b.dataset.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.dataset.price - a.dataset.price);
        break;
    }
    
    return sorted;
  }
  
  animateItems(visibleItems) {
    // Hide all items first
    this.items.forEach(item => {
      gsap.to(item, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => {
          item.style.display = 'none';
          item.style.order = 999;
        }
      });
    });
    
    // Show visible items with stagger
    setTimeout(() => {
      visibleItems.forEach((item, index) => {
        item.style.display = 'block';
        item.style.order = index;
        
        gsap.fromTo(item, 
          { opacity: 0, scale: 0.8, y: 20 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            duration: 0.5,
            delay: index * 0.05,
            ease: 'power2.out'
          }
        );
      });
    }, 300);
  }
  
  toggleView(e) {
    const btn = e.currentTarget;
    const view = btn.dataset.view;
    
    document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if (view === 'list') {
      this.grid.classList.add('list-view');
      this.items.forEach(item => {
        item.classList.remove('col-sm-6', 'col-lg-4', 'col-xl-3');
        item.classList.add('col-12');
      });
    } else {
      this.grid.classList.remove('list-view');
      this.items.forEach(item => {
        item.classList.remove('col-12');
        item.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3');
      });
    }
  }
  
  toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const btn = e.currentTarget;
    const icon = btn.querySelector('i');
    
    icon.classList.toggle('bi-heart');
    icon.classList.toggle('bi-heart-fill');
    btn.classList.toggle('text-danger');
    
    // Animate
    gsap.fromTo(btn, 
      { scale: 1 },
      { 
        scale: 1.3,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      }
    );
    
    // Save to localStorage (optional)
    const artworkId = btn.closest('.artwork-item').dataset.artworkId;
    this.saveFavorite(artworkId, icon.classList.contains('bi-heart-fill'));
  }
  
  saveFavorite(id, isFavorite) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite && !favorites.includes(id)) {
      favorites.push(id);
    } else if (!isFavorite) {
      const index = favorites.indexOf(id);
      if (index > -1) favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  animateCount(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    gsap.to(element, {
      textContent: targetValue,
      duration: 2,
      snap: { textContent: 1 },
      ease: 'power2.out',
      onUpdate: function() {
        element.textContent = Math.floor(this.targets()[0].textContent);
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new FilterSystem();
});
```

**CSS: Opere Page Styles**

```css
/* 05-pages/_opere.css */

/* Page Hero */
.page-hero {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-surface) 100%);
}

/* Filters Section */
.filters-section {
  background: var(--bg-surface);
  backdrop-filter: blur(20px);
  z-index: 1020;
}

.glass-btn {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  transition: var(--transition-all);
}

.glass-btn:hover,
.glass-btn.active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Artwork Card */
.artwork-card {
  position: relative;
  transition: var(--transition-all);
}

.artwork-card:hover {
  transform: translateY(-8px);
}

.artwork-card .card {
  transition: var(--transition-all);
}

.artwork-card:hover .card {
  box-shadow: var(--shadow-xl), var(--shadow-neon-gold);
}

/* Dual View Effect */
.artwork-images {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.image-wrapper {
  background: var(--bg-elevated);
}

.view-positivo {
  opacity: 0;
  transition: opacity var(--duration-base) var(--ease-smooth);
  pointer-events: none;
}

.artwork-images:hover .view-positivo {
  opacity: 1;
}

/* Overlay Actions */
.artwork-overlay {
  background: rgba(10, 10, 10, 0.8);
  transition: opacity var(--duration-base) var(--ease-smooth);
  backdrop-filter: blur(5px);
}

.artwork-card:hover .artwork-overlay {
  opacity: 1 !important;
}

/* Line Clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* List View */
.list-view .artwork-card .card {
  flex-direction: row;
}

.list-view .artwork-images {
  flex: 0 0 300px;
}

.list-view .card-body {
  flex: 1;
}

/* Favorite Button */
.favorite-btn.text-danger {
  color: #ff4d4d !important;
}

/* Neon Badge Animation */
.neon-badge {
  background: rgba(0, 245, 255, 0.15);
  border: 1px solid rgba(0, 245, 255, 0.4);
  box-shadow: var(--shadow-neon-cyan);
  animation: neonPulse 2s ease-in-out infinite;
}

/* Status Badge */
.bg-success-subtle {
  background: rgba(25, 135, 84, 0.15);
}

/* Responsive */
@media (max-width: 767px) {
  .filters-section .col-lg-5,
  .filters-section .col-lg-3 {
    justify-content: center !important;
  }
  
  .stats-bar {
    font-size: 0.9rem;
  }
}
```

---

### 📄 3. OPERA SINGLE PAGE - Immersive Detail

```html
<!DOCTYPE html>
<html lang="it" data-bs-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tramonto Calabrese | Mario Vetere</title>
  
  <!-- Open Graph -->
  <meta property="og:title" content="Tramonto Calabrese - Opera #negativoèpositivo®">
  <meta property="og:description" content="Un paesaggio emozionale che cattura l'essenza della Calabria">
  <meta property="og:image" content="https://mariovetere.com/assets/images/opere/1/og-image.jpg">
  <meta property="og:type" content="website">
  
  <!-- Bootstrap & Dependencies -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  
  <!-- PhotoSwipe -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe.css">
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="assets/css/05-pages/_opera-single.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
    <!-- Navbar content -->
  </nav>

  <main class="opera-single pt-8">
    
    <!-- Breadcrumb -->
    <section class="py-4">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="opere.html">Opere</a></li>
            <li class="breadcrumb-item active">Tramonto Calabrese</li>
          </ol>
        </nav>
      </div>
    </section>
    
    <!-- Artwork Detail -->
    <section class="artwork-detail py-6">
      <div class="container">
        <div class="row g-5">
          
          <!-- Left: Gallery -->
          <div class="col-lg-7">
            
            <!-- Main Image Container -->
            <div class="main-gallery mb-4">
              
              <!-- Interactive Reveal Container -->
              <div class="reveal-container position-relative rounded-4 overflow-hidden" 
                   id="mainReveal">
                
                <!-- Negativo Layer -->
                <div class="image-layer negativo-layer">
                  <img src="assets/images/opere/1/negativo-large.jpg" 
                       alt="Tramonto Calabrese - Negativo" 
                       class="img-fluid w-100"
                       id="mainImage">
                  
                  <!-- View Label -->
                  <div class="view-label position-absolute top-0 end-0 m-4">
                    <span class="badge glass-badge px-4 py-2 fs-6" id="viewLabel">
                      NEGATIVO
                    </span>
                  </div>
                </div>
                
                <!-- Positivo Layer (Clipped) -->
                <div class="image-layer positivo-layer position-absolute top-0 start-0 w-100 h-100" 
                     style="clip-path: inset(0 100% 0 0);">
                  <img src="assets/images/opere/1/positivo-large.jpg" 
                       alt="Tramonto Calabrese - Positivo" 
                       class="img-fluid w-100"
                       style="filter: invert(1);">
                </div>
                
                <!-- Slider Handle -->
                <div class="reveal-slider position-absolute top-0 bottom-0" 
                     style="left: 50%; width: 4px; background: var(--accent-primary); z-index: 10; cursor: ew-resize;">
                  <div class="slider-handle position-absolute top-50 start-50 translate-middle">
                    <div class="handle-icon bg-primary rounded-circle p-3 shadow-lg">
                      <i class="bi bi-arrow-left-right text-white"></i>
                    </div>
                  </div>
                </div>
                
                <!-- Instructions Overlay -->
                <div class="reveal-instructions position-absolute bottom-0 start-0 w-100 p-4 text-center"
                     id="revealInstructions">
                  <div class="glass-card d-inline-block px-5 py-3 rounded-pill">
                    <i class="bi bi-hand-index-thumb me-2"></i>
                    <span>Trascina per rivelare il positivo</span>
                  </div>
                </div>
                
                <!-- Zoom Button -->
                <button class="btn btn-light position-absolute bottom-0 end-0 m-4 rounded-circle p-3" 
                        onclick="openLightbox(0)"
                        title="Visualizza a schermo intero">
                  <i class="bi bi-arrows-fullscreen"></i>
                </button>
                
              </div>
              
            </div>
            
            <!-- Thumbnails Gallery -->
            <div class="thumbnails-gallery">
              <div class="row g-3">
                
                <!-- Thumb 1: Negativo -->
                <div class="col-3">
                  <div class="thumbnail-item active" 
                       data-image-neg="assets/images/opere/1/negativo-large.jpg"
                       data-image-pos="assets/images/opere/1/positivo-large.jpg"
                       onclick="switchImage(this)">
                    <div class="ratio ratio-1x1">
                      <img src="assets/images/opere/1/negativo-thumb.jpg" 
                           alt="Vista Principale" 
                           class="img-fluid rounded-3 object-fit-cover">
                    </div>
                    <div class="thumb-label text-center mt-2 fs-8">Principale</div>
                  </div>
                </div>
                
                <!-- Thumb 2: Detail 1 -->
                <div class="col-3">
                  <div class="thumbnail-item" 
                       data-image-neg="assets/images/opere/1/detail-1-neg.jpg"
                       data-image-pos="assets/images/opere/1/detail-1-pos.jpg"
                       onclick="switchImage(this)">
                    <div class="ratio ratio-1x1">
                      <img src="assets/images/opere/1/detail-1-thumb.jpg" 
                           alt="Dettaglio 1" 
                           class="img-fluid rounded-3 object-fit-cover">
                    </div>
                    <div class="thumb-label text-center mt-2 fs-8">Dettaglio 1</div>
                  </div>
                </div>
                
                <!-- Thumb 3: Detail 2 -->
                <div class="col-3">
                  <div class="thumbnail-item" 
                       data-image-neg="assets/images/opere/1/detail-2-neg.jpg"
                       data-image-pos="assets/images/opere/1/detail-2-pos.jpg"
                       onclick="switchImage(this)">
                    <div class="ratio ratio-1x1">
                      <img src="assets/images/opere/1/detail-2-thumb.jpg" 
                           alt="Dettaglio 2" 
                           class="img-fluid rounded-3 object-fit-cover">
                    </div>
                    <div class="thumb-label text-center mt-2 fs-8">Dettaglio 2</div>
                  </div>
                </div>
                
                <!-- Thumb 4: Firma -->
                <div class="col-3">
                  <div class="thumbnail-item" 
                       data-image-neg="assets/images/opere/1/signature-neg.jpg"
                       data-image-pos="assets/images/opere/1/signature-pos.jpg"
                       onclick="switchImage(this)">
                    <div class="ratio ratio-1x1">
                      <img src="assets/images/opere/1/signature-thumb.jpg" 
                           alt="Firma" 
                           class="img-fluid rounded-3 object-fit-cover">
                    </div>
                    <div class="thumb-label text-center mt-2 fs-8">Firma</div>
                  </div>
                </div>
                
              </div>
            </div>
            
            <!-- Features List -->
            <div class="features-list mt-5">
              <div class="row g-3">
                
                <div class="col-6">
                  <div class="feature-card glass-card p-4 rounded-3 h-100">
                    <i class="bi bi-shield-check fs-2 text-gradient mb-2 d-block"></i>
                    <div class="fw-semibold mb-1">Certificato</div>
                    <div class="fs-7 text-secondary">Autenticità garantita</div>
                  </div>
                </div>
                
                <div class="col-6">
                  <div class="feature-card glass-card p-4 rounded-3 h-100">
                    <i class="bi bi-truck fs-2 text-gradient mb-2 d-block"></i>
                    <div class="fw-semibold mb-1">Spedizione</div>
                    <div class="fs-7 text-secondary">Assicurata inclusa</div>
                  </div>
                </div>
                
                <div class="col-6">
                  <div class="feature-card glass-card p-4 rounded-3 h-100">
                    <i class="bi bi-arrow-clockwise fs-2 text-gradient mb-2 d-block"></i>
                    <div class="fw-semibold mb-1">Reso</div>
                    <div class="fs-7 text-secondary">14 giorni garantiti</div>
                  </div>
                </div>
                
                <div class="col-6">
                  <div class="feature-card glass-card p-4 rounded-3 h-100">
                    <i class="bi bi-credit-card fs-2 text-gradient mb-2 d-block"></i>
                    <div class="fw-semibold mb-1">Pagamento</div>
                    <div class="fs-7 text-secondary">Sicuro e flessibile</div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
          <!-- Right: Info & Purchase -->
          <div class="col-lg-5">
            
            <!-- Title Section -->
            <div class="artwork-header mb-4">
              
              <!-- Badges -->
              <div class="badges mb-3">
                <span class="badge neon-badge me-2">
                  <i class="bi bi-shield-check me-1"></i> NFT Certificato
                </span>
                <span class="badge bg-success">
                  <i class="bi bi-check-circle me-1"></i> Disponibile
                </span>
              </div>
              
              <!-- Title -->
              <h1 class="display-4 fw-bold mb-3">
                Tramonto Calabrese
              </h1>
              
              <!-- Artist -->
              <div class="artist-info d-flex align-items-center gap-3 mb-4">
                <img src="assets/images/artist/portrait-small.jpg" 
                     alt="Mario Vetere" 
                     class="rounded-circle"
                     style="width: 50px; height: 50px; object-fit: cover;">
                <div>
                  <div class="fw-semibold">Mario Vetere</div>
                  <div class="fs-7 text-secondary">#negativoèpositivo®</div>
                </div>
              </div>
              
              <!-- Rating & Views -->
              <div class="meta-stats d-flex align-items-center gap-4 mb-4">
                <div class="d-flex align-items-center gap-1">
                  <i class="bi bi-star-fill text-warning"></i>
                  <span class="fw-semibold">4.9</span>
                  <span class="text-secondary fs-7">(24 recensioni)</span>
                </div>
                <div class="text-secondary fs-7">
                  <i class="bi bi-eye me-1"></i> 1.2k visualizzazioni
                </div>
              </div>
              
            </div>
            
            <!-- Price Section -->
            <div class="price-section glass-card p-4 rounded-4 mb-4">
              
              <!-- Price -->
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <div class="fs-7 text-secondary text-uppercase mb-1">Prezzo</div>
                  <div class="display-5 fw-bold text-gradient">€ 2.500</div>
                  <div class="fs-7 text-secondary">IVA inclusa • Spedizione gratuita</div>
                </div>
                <button class="btn btn-outline-light btn-sm rounded-circle favorite-btn-large" 
                        title="Aggiungi ai preferiti">
                  <i class="bi bi-heart fs-4"></i>
                </button>
              </div>
              
              <!-- Payment Options -->
              <div class="payment-options mb-3">
                <div class="fs-7 text-secondary mb-2">Oppure</div>
                <div class="d-flex align-items-center gap-2">
                  <span class="fw-semibold">4 rate</span> da 
                  <span class="fs-5 text-gradient fw-bold">€ 625</span>
                  <i class="bi bi-info-circle text-secondary" 
                     data-bs-toggle="tooltip" 
                     title="Con Klarna o PayPal Pay in 3"></i>
                </div>
              </div>
              
              <!-- CTA Buttons -->
              <div class="d-grid gap-3">
                
                <!-- Primary: Buy Now -->
                <button class="btn btn-primary btn-lg py-3" 
                        data-bs-toggle="modal" 
                        data-bs-target="#purchaseModal">
                  <i class="bi bi-cart-check-fill me-2"></i>
                  Acquista Ora
                </button>
                
                <!-- Secondary: Contact -->
                <a href="https://wa.me/393XXXXXXXXX?text=Ciao%20Mario,%20sono%20interessato%20a%20'Tramonto%20Calabrese'" 
                   class="btn btn-outline-light btn-lg py-3"
                   target="_blank">
                  <i class="bi bi-whatsapp me-2"></i>
                  Contatta via WhatsApp
                </a>
                
              </div>
              
              <!-- Trust Signals -->
              <div class="trust-signals mt-4 pt-4 border-top border-secondary">
                <div class="row g-2 text-center fs-8 text-secondary">
                  <div class="col-4">
                    <i class="bi bi-lock-fill d-block mb-1"></i>
                    Pagamento<br>Sicuro
                  </div>
                  <div class="col-4">
                    <i class="bi bi-shield-check d-block mb-1"></i>
                    Opera<br>Autentica
                  </div>
                  <div class="col-4">
                    <i class="bi bi-box-seam d-block mb-1"></i>
                    Imballaggio<br>Premium
                  </div>
                </div>
              </div>
              
            </div>
            
            <!-- Specifications -->
            <div class="specifications glass-card p-4 rounded-4 mb-4">
              <h3 class="h5 fw-semibold mb-4">Specifiche Tecniche</h3>
              
              <div class="specs-list">
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Dimensioni</span>
                  <span class="fw-semibold">50 x 70 cm</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Supporto</span>
                  <span class="fw-semibold">Cartoncino</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Tecnica</span>
                  <span class="fw-semibold">Crete colorate</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Strumento</span>
                  <span class="fw-semibold">Solo polpastrelli</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Anno</span>
                  <span class="fw-semibold">2024</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Tempo realizzazione</span>
                  <span class="fw-semibold">45 ore</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2 border-bottom border-secondary">
                  <span class="text-secondary">Cornice</span>
                  <span class="fw-semibold">Non inclusa (opzionale)</span>
                </div>
                
                <div class="spec-item d-flex justify-content-between py-2">
                  <span class="text-secondary">Edizione</span>
                  <span class="fw-semibold">Pezzo Unico</span>
                </div>
                
              </div>
            </div>
            
            <!-- NFT Certificate -->
            <div class="nft-certificate glass-card p-4 rounded-4 mb-4">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-shield-fill-check fs-2 text-gradient"></i>
                <div class="flex-grow-1">
                  <h3 class="h6 fw-semibold mb-2">
                    <i class="bi bi-award-fill text-warning me-1"></i>
                    Certificato NFT Blockchain
                  </h3>
                  <p class="fs-7 text-secondary mb-3">
                    Quest'opera include un certificato digitale NFT sulla blockchain Polygon, 
                    garantendo autenticità e proprietà verificabili.
                  </p>
                  
                  <!-- NFT Info -->
                  <div class="nft-info fs-8">
                    <div class="mb-2">
                      <span class="text-secondary">Token ID:</span> 
                      <code class="text-primary">#MV-2024-042</code>
                    </div>
                    <div class="mb-2">
                      <span class="text-secondary">Blockchain:</span> 
                      <span class="fw-semibold">Polygon</span>
                    </div>
                    <div>
                      <span class="text-secondary">Contract:</span> 
                      <code class="text-primary text-truncate d-inline-block" style="max-width: 150px;">
                        0x7a3f...9d2e
                      </code>
                      <button class="btn btn-link btn-sm p-0 ms-2" 
                              onclick="copyToClipboard('0x7a3f...9d2e')">
                        <i class="bi bi-clipboard"></i>
                      </button>
                    </div>
                  </div>
                  
                  <!-- View on OpenSea -->
                  <a href="https://opensea.io/assets/polygon/..." 
                     class="btn btn-sm btn-outline-light mt-3"
                     target="_blank"
                     rel="noopener">
                    Verifica su OpenSea
                    <i class="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Share -->
            <div class="share-section text-center">
              <div class="fs-7 text-secondary mb-3">Condividi quest'opera</div>
              <div class="d-flex justify-content-center gap-2">
                <button class="btn btn-outline-light btn-sm rounded-circle" 
                        onclick="shareOnSocial('facebook')"
                        title="Facebook">
                  <i class="bi bi-facebook"></i>
                </button>
                <button class="btn btn-outline-light btn-sm rounded-circle" 
                        onclick="shareOnSocial('twitter')"
                        title="Twitter">
                  <i class="bi bi-twitter-x"></i>
                </button>
                <button class="btn btn-outline-light btn-sm rounded-circle" 
                        onclick="shareOnSocial('pinterest')"
                        title="Pinterest">
                  <i class="bi bi-pinterest"></i>
                </button>
                <button class="btn btn-outline-light btn-sm rounded-circle" 
                        onclick="shareOnSocial('whatsapp')"
                        title="WhatsApp">
                  <i class="bi bi-whatsapp"></i>
                </button>
                <button class="btn btn-outline-light btn-sm rounded-circle" 
                        onclick="copyLink()"
                        title="Copia Link">
                  <i class="bi bi-link-45deg"></i>
                </button>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
    
    <!-- Description & Story -->
    <section class="artwork-story py-6 bg-surface">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            
            <!-- Nav Tabs -->
            <ul class="nav nav-pills mb-5 justify-content-center" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" 
                        id="description-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#description">
                  <i class="bi bi-file-text me-2"></i> Descrizione
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" 
                        id="story-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#story">
                  <i class="bi bi-book me-2"></i> Storia
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" 
                        id="technique-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#technique">
                  <i class="bi bi-palette me-2"></i> Tecnica
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" 
                        id="reviews-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#reviews">
                  <i class="bi bi-star me-2"></i> Recensioni
                </button>
              </li>
            </ul>
            
            <!-- Tab Content -->
            <div class="tab-content glass-card p-5 rounded-4">
              
              <!-- Description -->
              <div class="tab-pane fade show active" 
                   id="description" 
                   role="tabpanel">
                <h2 class="h4 fw-semibold mb-4">L'Opera</h2>
                <p class="lead fs-5 mb-4">
                  "Tramonto Calabrese" è un viaggio emozionale che cattura l'essenza 
                  profonda della terra calabrese attraverso la rivoluzionaria tecnica 
                  #negativoèpositivo®.
                </p>
                <p class="fs-6 text-secondary mb-4">
                  Quest'opera rappresenta uno dei momenti più intensi del percorso artistico 
                  di Mario Vetere. Realizzata interamente con i polpastrelli su cartoncino, 
                  ogni sfumatura di creta colorata racconta una storia di luce e ombra, 
                  di ciò che appare e ciò che si nasconde.
                </p>
                <p class="fs-6 text-secondary mb-4">
                  La particolarità di questa tecnica risiede nella sua dualità: l'opera 
                  viene dipinta invertendo i valori cromatici, creando un'immagine in 
                  "negativo" che si rivela nella sua vera essenza solo attraverso la 
                  tecnologia digitale degli smartphone e tablet.
                </p>
                <p class="fs-6 text-secondary">
                  Il risultato è un'esperienza artistica unica, dove l'osservatore diventa 
                  parte attiva del processo di rivelazione, vivendo il momento magico in 
                  cui l'opera si trasforma davanti ai suoi occhi.
                </p>
              </div>
              
              <!-- Story -->
              <div class="tab-pane fade" 
                   id="story" 
                   role="tabpanel">
                <h2 class="h4 fw-semibold mb-4">La Storia dell'Opera</h2>
                <div class="timeline-story">
                  
                  <div class="story-item mb-4">
                    <div class="story-meta text-secondary fs-7 mb-2">
                      <i class="bi bi-calendar3 me-1"></i> Gennaio 2024
                    </div>
                    <h3 class="h6 fw-semibold mb-2">L'Ispirazione</h3>
                    <p class="fs-6 text-secondary">
                      Durante un viaggio in Calabria, Mario Vetere viene catturato da un 
                      tramonto mozzafiato sulla costa. La luce dorata che si riflette sul 
                      mare diventa l'ispirazione per questa opera.
                    </p>
                  </div>
                  
                  <div class="story-item mb-4">
                    <div class="story-meta text-secondary fs-7 mb-2">
                      <i class="bi bi-palette2 me-1"></i> Febbraio 2024
                    </div>
                    <h3 class="h6 fw-semibold mb-2">La Creazione</h3>
                    <p class="fs-6 text-secondary">
                      45 ore di lavoro intenso, solo polpastrelli e crete colorate. 
                      Ogni sfumatura viene studiata e realizzata con cura maniacale, 
                      invertendo mentalmente i colori durante la creazione.
                    </p>
                  </div>
                  
                  <div class="story-item">
                    <div class="story-meta text-secondary fs-7 mb-2">
                      <i class="bi bi-award me-1"></i> Marzo 2024
                    </div>
                    <h3 class="h6 fw-semibold mb-2">Il Riconoscimento</h3>
                    <p class="fs-6 text-secondary">
                      Presentata alla mostra "Negativo è Positivo" a Catanzaro, l'opera 
                      riceve il plauso della critica e diventa una delle più apprezzate 
                      della collezione.
                    </p>
                  </div>
                  
                </div>
              </div>
              
              <!-- Technique -->
              <div class="tab-pane fade" 
                   id="technique" 
                   role="tabpanel">
                <h2 class="h4 fw-semibold mb-4">Il Processo Creativo</h2>
                
                <div class="technique-steps">
                  
                  <div class="step mb-5">
                    <div class="d-flex gap-4">
                      <div class="step-number">
                        <div class="number-badge bg-gradient rounded-circle d-flex align-items-center justify-content-center" 
                             style="width: 60px; height: 60px;">
                          <span class="fs-3 fw-bold">1</span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h3 class="h5 fw-semibold mb-2">Studio Preliminare</h3>
                        <p class="fs-6 text-secondary">
                          Prima di iniziare, l'artista studia attentamente la composizione 
                          e i colori, visualizzando mentalmente l'inversione cromatica.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="step mb-5">
                    <div class="d-flex gap-4">
                      <div class="step-number">
                        <div class="number-badge bg-gradient rounded-circle d-flex align-items-center justify-content-center" 
                             style="width: 60px; height: 60px;">
                          <span class="fs-3 fw-bold">2</span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h3 class="h5 fw-semibold mb-2">Applicazione Base</h3>
                        <p class="fs-6 text-secondary">
                          Con le crete colorate, inizia a stendere i colori invertiti 
                          direttamente con i polpastrelli, senza alcun pennello.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="step mb-5">
                    <div class="d-flex gap-4">
                      <div class="step-number">
                        <div class="number-badge bg-gradient rounded-circle d-flex align-items-center justify-content-center" 
                             style="width: 60px; height: 60px;">
                          <span class="fs-3 fw-bold">3</span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h3 class="h5 fw-semibold mb-2">Sfumature e Dettagli</h3>
                        <p class="fs-6 text-secondary">
                          Attraverso movimenti circolari e pressioni variabili delle dita, 
                          crea sfumature perfette e dettagli minuziosi.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="step">
                    <div class="d-flex gap-4">
                      <div class="step-number">
                        <div class="number-badge bg-gradient rounded-circle d-flex align-items-center justify-content-center" 
                             style="width: 60px; height: 60px;">
                          <span class="fs-3 fw-bold">4</span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h3 class="h5 fw-semibold mb-2">Verifica e Rifinitura</h3>
                        <p class="fs-6 text-secondary">
                          L'artista verifica costantemente il risultato invertendo i colori 
                          con lo smartphone, perfezionando ogni dettaglio fino al risultato finale.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                <!-- Video Demo (Optional) -->
                <div class="mt-5 text-center">
                  <h3 class="h5 fw-semibold mb-4">Guarda il Processo</h3>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/..." 
                            title="Processo Creativo" 
                            allowfullscreen
                            class="rounded-4"></iframe>
                  </div>
                </div>
                
              </div>
              
              <!-- Reviews -->
              <div class="tab-pane fade" 
                   id="reviews" 
                   role="tabpanel">
                <h2 class="h4 fw-semibold mb-4">Recensioni Collezionisti</h2>
                
                <!-- Rating Summary -->
                <div class="rating-summary glass-card p-4 rounded-3 mb-5">
                  <div class="row align-items-center">
                    <div class="col-md-4 text-center">
                      <div class="display-3 fw-bold text-gradient mb-2">4.9</div>
                      <div class="rating-stars mb-2">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-half text-warning"></i>
                      </div>
                      <div class="text-secondary">Basato su 24 recensioni</div>
                    </div>
                    <div class="col-md-8">
                      <div class="rating-bars">
                        
                        <div class="d-flex align-items-center gap-3 mb-2">
                          <span class="fs-7">5 <i class="bi bi-star-fill text-warning"></i></span>
                          <div class="progress flex-grow-1" style="height: 8px;">
                            <div class="progress-bar bg-warning" style="width: 85%"></div>
                          </div>
                          <span class="fs-7 text-secondary">85%</span>
                        </div>
                        
                        <div class="d-flex align-items-center gap-3 mb-2">
                          <span class="fs-7">4 <i class="bi bi-star-fill text-warning"></i></span>
                          <div class="progress flex-grow-1" style="height: 8px;">
                            <div class="progress-bar bg-warning" style="width: 12%"></div>
                          </div>
                          <span class="fs-7 text-secondary">12%</span>
                        </div>
                        
                        <div class="d-flex align-items-center gap-3 mb-2">
                          <span class="fs-7">3 <i class="bi bi-star-fill text-warning"></i></span>
                          <div class="progress flex-grow-1" style="height: 8px;">
                            <div class="progress-bar bg-warning" style="width: 3%"></div>
                          </div>
                          <span class="fs-7 text-secondary">3%</span>
                        </div>
                        
                        <div class="d-flex align-items-center gap-3 mb-2">
                          <span class="fs-7">2 <i class="bi bi-star-fill text-warning"></i></span>
                          <div class="progress flex-grow-1" style="height: 8px;">
                            <div class="progress-bar bg-secondary" style="width: 0%"></div>
                          </div>
                          <span class="fs-7 text-secondary">0%</span>
                        </div>
                        
                        <div class="d-flex align-items-center gap-3">
                          <span class="fs-7">1 <i class="bi bi-star-fill text-warning"></i></span>
                          <div class="progress flex-grow-1" style="height: 8px;">
                            <div class="progress-bar bg-secondary" style="width: 0%"></div>
                          </div>
                          <span class="fs-7 text-secondary">0%</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Reviews List -->
                <div class="reviews-list">
                  
                  <!-- Review Item -->
                  <div class="review-item glass-card p-4 rounded-3 mb-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div class="d-flex gap-3">
                        <div class="reviewer-avatar bg-gradient rounded-circle d-flex align-items-center justify-content-center" 
                             style="width: 50px; height: 50px;">
                          <span class="fw-bold">GM</span>
                        </div>
                        <div>
                          <div class="fw-semibold">Giuseppe M.</div>
                          <div class="fs-8 text-secondary">Collezionista • Milano</div>
                          <div class="rating-stars">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                          </div>
                        </div>
                      </div>
                      <div class="fs-8 text-secondary">2 settimane fa</div>
                    </div>
                    
                    <h4 class="h6 fw-semibold mb-2">Opera straordinaria!</h4>
                    <p class="fs-6 text-secondary mb-3">
                      L'effetto negativo-positivo è davvero incredibile. Ogni volta che la mostro 
                      agli ospiti rimangono a bocca aperta. La qualità della realizzazione è 
                      impeccabile e la spedizione è stata perfetta. Consigliatissimo!
                    </p>
                    
                    <div class="review-footer d-flex gap-3">
                      <button class="btn btn-sm btn-link text-secondary p-0">
                        <i class="bi bi-hand-thumbs-up me-1"></i> Utile (12)
                      </button>
                      <button class="btn btn-sm btn-link text-secondary p-0">
                        <i class="bi bi-chat-dots me-1"></i> Rispondi
                      </button>
                    </div>
                  </div>
                  
                  <!-- More reviews... -->
                  
                </div>
                
                <!-- Add Review Button -->
                <div class="text-center mt-5">
                  <button class="btn btn-primary btn-lg" 
                          data-bs-toggle="modal" 
                          data-bs-target="#reviewModal">
                    <i class="bi bi-pencil-square me-2"></i>
                    Scrivi una Recensione
                  </button>
                </div>
                
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Artworks -->
    <section class="related-artworks py-8">
      <div class="container">
        
        <div class="section-header text-center mb-6">
          <h2 class="display-5 fw-bold mb-3">
            Opere <span class="text-gradient">Correlate</span>
          </h2>
          <p class="lead text-secondary">
            Altre opere che potrebbero interessarti
          </p>
        </div>
        
        <!-- Swiper Carousel -->
        <div class="swiper related-swiper">
          <!-- Similar to featured carousel structure -->
        </div>
        
      </div>
    </section>
    
  </main>

  <!-- Footer -->
  <footer class="footer">
    <!-- Footer content -->
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/photoswipe@5.4.3/dist/photoswipe-lightbox.min.js"></script>
  
  <script src="assets/js/components/RevealEffect.js"></script>
  <script src="assets/js/app.js"></script>

  <script>
    // Reveal Slider Interaction
    const revealContainer = document.getElementById('mainReveal');
    const positivoLayer = document.querySelector('.positivo-layer');
    const slider = document.querySelector('.reveal-slider');
    const instructions = document.getElementById('revealInstructions');
    
    let isDragging = false;
    
    slider.addEventListener('mousedown', () => {
      isDragging = true;
      instructions.style.display = 'none';
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
    
    revealContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const rect = revealContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      
      // Update clip-path
      positivoLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      
      // Update slider position
      slider.style.left = `${percentage}%`;
    });
    
    // Touch support
    revealContainer.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const rect = revealContainer.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      
      positivoLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      slider.style.left = `${percentage}%`;
      instructions.style.display = 'none';
    });
    
    // Switch Image Function
    function switchImage(thumb) {
      const negImg = thumb.dataset.imageNeg;
      const posImg = thumb.dataset.imagePos;
      
      // Update main images
      document.querySelector('.negativo-layer img').src = negImg;
      document.querySelector('.positivo-layer img').src = posImg;
      
      // Update active state
      document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      
      // Reset slider
      positivoLayer.style.clipPath = 'inset(0 100% 0 0)';
      slider.style.left = '50%';
      instructions.style.display = 'block';
    }
    
    // Lightbox
    function openLightbox(index) {
      // Initialize PhotoSwipe
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#mainReveal',
        children: 'img',
        pswpModule: PhotoSwipe
      });
      lightbox.init();
      lightbox.loadAndOpen(index);
    }
    
    // Share Functions
    function shareOnSocial(platform) {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent('Tramonto Calabrese - Mario Vetere');
      
      const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`,
        whatsapp: `https://wa.me/?text=${title}%20${url}`
      };
      
      if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
      }
    }
    
    function copyLink() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        // Show toast notification
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = 'Link copiato!';
        document.body.appendChild(toast);
        
        setTimeout(() => toast.remove(), 3000);
      });
    }
    
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      // Show feedback
    }
  </script>

</body>
</html>
```

---

Continuo? Posso aggiungere:

4. **Navigation & Footer Components** - Header globale e Footer con tutti i link
5. **Animation System Complete** - Tutte le configurazioni GSAP e micro-interazioni
6. **Performance Optimization Guide** - Lazy loading, code splitting, caching strategies
7. **Testing Strategy** - Cross-browser, accessibility, performance testing
8. **Deployment Guide** - Step-by-step con Netlify/Vercel/GitHub Pages
9. **SEO & Analytics Setup** - Meta tags, structured data, GA4 configuration
10. **README & Documentation** - Getting started guide per sviluppatori

Quale sezione vuoi che completi successivamente? 🚀