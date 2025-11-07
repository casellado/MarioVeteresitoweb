# 📐 HOMEPAGE STRUCTURE - Misure Precise & Layout Professionale

**Sistema di Misurazione:** 8pt Grid System  
**Base Unit:** 8px (0.5rem)  
**Container Max Width:** 1440px  
**Data:** 6 Novembre 2025  

---

## 🎯 SISTEMA DI SPACING (8PT GRID)

### Scale di Spacing Standard
```css
--space-0: 0px;
--space-1: 8px;     /* 0.5rem - Micro spacing */
--space-2: 16px;    /* 1rem - Small spacing */
--space-3: 24px;    /* 1.5rem - Medium spacing */
--space-4: 32px;    /* 2rem - Large spacing */
--space-5: 40px;    /* 2.5rem - XL spacing */
--space-6: 48px;    /* 3rem - 2XL spacing */
--space-8: 64px;    /* 4rem - 3XL spacing */
--space-10: 80px;   /* 5rem - 4XL spacing */
--space-12: 96px;   /* 6rem - 5XL spacing */
--space-16: 128px;  /* 8rem - Section spacing */
--space-20: 160px;  /* 10rem - Large section */
--space-24: 192px;  /* 12rem - Hero spacing */
```

### Container System
```css
/* Desktop (1440px viewport) */
.container {
  max-width: 1320px;          /* 1440px - (60px × 2) margins */
  margin: 0 auto;
  padding-left: 60px;         /* Side margins */
  padding-right: 60px;
}

/* Fluid Container (Full width con padding) */
.container-fluid {
  max-width: 100%;
  padding-left: 60px;
  padding-right: 60px;
}

/* Grid Gutters */
.row {
  margin-left: -12px;         /* Half of 24px gutter */
  margin-right: -12px;
}

.col {
  padding-left: 12px;
  padding-right: 12px;        /* 24px total gutter between columns */
}
```

---

## 📏 HOMEPAGE STRUCTURE - MISURE ESATTE

### 1. NAVIGATION BAR

```
┌────────────────────────────────────────────────────────────┐
│  NAVBAR - Height: 80px                                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Container: 1320px max-width                          │  │
│  │                                                        │  │
│  │ [LOGO]        Nav Links        [Icons]               │  │
│  │ 120×40px      gap: 32px        gap: 16px             │  │
│  │                                                        │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Specifiche Dettagliate:**
```css
.navbar {
  height: 80px;
  padding: 16px 60px;                    /* Vertical: 16px, Horizontal: 60px */
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(20px);
  background: rgba(10, 10, 10, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1030;
}

.navbar-brand {
  height: 48px;                          /* Logo container height */
  margin-right: 64px;                    /* Space before nav links */
}

.navbar-brand img {
  height: 40px;                          /* Logo height */
  width: auto;
}

.nav-link {
  padding: 12px 16px;                    /* Clickable area padding */
  font-size: 16px;
  line-height: 24px;                     /* Line height divisible by 8 */
  margin: 0 8px;                         /* Space between links */
}

.navbar-actions {
  gap: 16px;                             /* Space between action buttons */
}

.btn-icon {
  width: 40px;
  height: 40px;
  padding: 8px;
}
```

---

### 2. HERO SECTION

```
┌────────────────────────────────────────────────────────────┐
│  HERO - Min Height: 100vh (Typical: 900px)                 │
│  Padding Top: 80px (navbar height)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Container: 1320px                                    │  │
│  │                                                        │  │
│  │ ┌──────────────┐         ┌──────────────┐           │  │
│  │ │ LEFT COLUMN  │  64px   │ RIGHT COLUMN │           │  │
│  │ │   720px      │  gap    │    536px     │           │  │
│  │ │              │         │              │           │  │
│  │ │ Badge: 8px   │         │ Interactive  │           │  │
│  │ │ margin-bottom│         │ Demo         │           │  │
│  │ │              │         │              │           │  │
│  │ │ H1: Display-1│         │ 536×670px    │           │  │
│  │ │ 96px height  │         │              │           │  │
│  │ │ margin: 24px │         │              │           │  │
│  │ │              │         │              │           │  │
│  │ │ Subtitle     │         │              │           │  │
│  │ │ 32px height  │         │              │           │  │
│  │ │ margin: 24px │         │              │           │  │
│  │ │              │         │              │           │  │
│  │ │ Lead text    │         │              │           │  │
│  │ │ margin: 32px │         │              │           │  │
│  │ │              │         │              │           │  │
│  │ │ CTA Buttons  │         │              │           │  │
│  │ │ 56×200px ea. │         │              │           │  │
│  │ │ gap: 16px    │         │              │           │  │
│  │ │              │         │              │           │  │
│  │ │ Stats        │         │              │           │  │
│  │ │ margin: 48px │         │              │           │  │
│  │ └──────────────┘         └──────────────┘           │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Specifiche Dettagliate:**

```css
/* HERO SECTION */
.hero-section {
  min-height: 100vh;
  padding-top: 80px;                     /* Compensate navbar */
  padding-bottom: 80px;
  display: flex;
  align-items: center;
}

.hero-section .container {
  max-width: 1320px;
}

/* LEFT COLUMN (Content) */
.hero-content {
  max-width: 720px;
}

/* Badge */
.hero-badge {
  margin-bottom: 24px;
}

.badge-luxury {
  padding: 8px 24px;                     /* Vertical: 8px, Horizontal: 24px */
  font-size: 14px;
  line-height: 24px;
  border-radius: 24px;                   /* Pill shape */
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Main Title */
.hero-title {
  font-size: 72px;                       /* Desktop */
  line-height: 80px;                     /* Tight leading for impact */
  font-weight: 900;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

/* Subtitle */
.hero-subtitle {
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  margin-bottom: 24px;
}

/* Lead Text */
.hero-lead {
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 40px;
  max-width: 540px;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.btn-lg {
  padding: 16px 40px;                    /* Vertical: 16px, Horizontal: 40px */
  font-size: 18px;
  line-height: 24px;
  height: 56px;
  min-width: 200px;
  border-radius: 8px;
}

/* Stats Section */
.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 64px;
}

.stat-item {
  min-width: 120px;
}

.stat-item .stat-number {
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  margin-bottom: 8px;
}

.stat-item .stat-label {
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* RIGHT COLUMN (Interactive Demo) */
.hero-artwork-demo {
  width: 100%;
  max-width: 536px;
}

.artwork-reveal-container {
  width: 536px;
  height: 670px;                         /* 4:5 aspect ratio */
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.reveal-instruction {
  padding: 16px 32px;
  border-radius: 24px;
  font-size: 16px;
  line-height: 24px;
}
```

---

### 3. FEATURED ARTWORKS SECTION

```
┌────────────────────────────────────────────────────────────┐
│  FEATURED SECTION                                           │
│  Padding: 96px 0 (Top & Bottom)                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Container: 100% (Full width)                         │  │
│  │ Side Padding: 60px                                   │  │
│  │                                                        │  │
│  │ Section Header (Centered)                            │  │
│  │ ┌────────────────────────────────────────────────┐   │  │
│  │ │ Badge: margin-bottom 16px                       │   │  │
│  │ │ Title: margin-bottom 24px                       │   │  │
│  │ │ Description: margin-bottom 48px                 │   │  │
│  │ │ Max-width: 700px                                │   │  │
│  │ └────────────────────────────────────────────────┘   │  │
│  │                                                        │  │
│  │ Carousel (Swiper)                                    │  │
│  │ ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐             │  │
│  │ │ Card │  │ Card │  │ Card │  │ Card │             │  │
│  │ │ 400× │  │ 400× │  │ 400× │  │ 400× │             │  │
│  │ │ 560px│  │ 560px│  │ 560px│  │ 560px│             │  │
│  │ └──────┘  └──────┘  └──────┘  └──────┘             │  │
│  │    Gap: 32px between cards                           │  │
│  │                                                        │  │
│  │ View All Button: margin-top 48px                     │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Specifiche Dettagliate:**

```css
/* FEATURED SECTION */
.featured-artworks {
  padding: 96px 0;                       /* Vertical section padding */
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 64px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-badge {
  padding: 6px 20px;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  display: inline-block;
}

.section-title {
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
  margin-bottom: 24px;
}

.section-description {
  font-size: 20px;
  line-height: 32px;
  color: var(--text-secondary);
}

/* Artwork Card */
.artwork-card {
  width: 400px;                          /* Fixed card width */
  background: var(--bg-surface);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.artwork-card:hover {
  transform: translateY(-8px);
}

/* Card Image */
.artwork-images {
  width: 400px;
  height: 300px;                         /* 4:3 aspect ratio */
  position: relative;
  overflow: hidden;
}

.artwork-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Card Body */
.card-body {
  padding: 24px;                         /* All sides equal */
}

.card-title {
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: 12px;
}

.artwork-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 24px;
}

.card-text {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  color: var(--text-secondary);
}

/* Card Footer */
.card-footer {
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: transparent;
}

.artwork-price {
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
}

/* Swiper Configuration */
.featured-swiper {
  padding: 32px 0;                       /* Top/bottom padding for shadow */
}

.swiper-slide {
  width: 400px;                          /* Slide width */
}

/* Spacing between visible slides */
.featured-swiper .swiper-wrapper {
  gap: 32px;                             /* Space between cards */
}
```

---

### 4. TECHNIQUE SHOWCASE SECTION

```
┌────────────────────────────────────────────────────────────┐
│  TECHNIQUE SECTION                                          │
│  Padding: 96px 0                                           │
│  Background: var(--bg-surface)                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Container: 1320px                                    │  │
│  │                                                        │  │
│  │ ┌──────────────────┐    ┌──────────────────┐         │  │
│  │ │ LEFT COLUMN      │64px│ RIGHT COLUMN     │         │  │
│  │ │ 628px            │gap │ 628px            │         │  │
│  │ │                  │    │                  │         │  │
│  │ │ Badge            │    │ Video/Image      │         │  │
│  │ │ margin: 16px     │    │ Container        │         │  │
│  │ │                  │    │                  │         │  │
│  │ │ H2: 56px height  │    │ 628×470px        │         │  │
│  │ │ margin: 24px     │    │ (4:3 ratio)      │         │  │
│  │ │                  │    │                  │         │  │
│  │ │ Lead: 24px       │    │ Border-radius:   │         │  │
│  │ │ margin: 32px     │    │ 16px             │         │  │
│  │ │                  │    │                  │         │  │
│  │ │ Steps Container  │    │ Floating Stats   │         │  │
│  │ │ ┌──────────────┐ │    │ Cards overlay    │         │  │
│  │ │ │ Step 1       │ │    │ positioned       │         │  │
│  │ │ │ height: 120px│ │    │ absolute         │         │  │
│  │ │ │ margin: 24px │ │    │                  │         │  │
│  │ │ ├──────────────┤ │    │                  │         │  │
│  │ │ │ Step 2       │ │    │                  │         │  │
│  │ │ │ height: 120px│ │    │                  │         │  │
│  │ │ │ margin: 24px │ │    │                  │         │  │
│  │ │ ├──────────────┤ │    │                  │         │  │
│  │ │ │ Step 3       │ │    │                  │         │  │
│  │ │ │ height: 120px│ │    │                  │         │  │
│  │ │ │ margin: 24px │ │    │                  │         │  │
│  │ │ ├──────────────┤ │    │                  │         │  │
│  │ │ │ Step 4       │ │    │                  │         │  │
│  │ │ │ height: 120px│ │    │                  │         │  │
│  │ │ └──────────────┘ │    │                  │         │  │
│  │ │                  │    │                  │         │  │
│  │ │ CTA Button       │    │                  │         │  │
│  │ │ margin-top: 40px │    │                  │         │  │
│  │ └──────────────────┘    └──────────────────┘         │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Specifiche Dettagliate:**

```css
/* TECHNIQUE SECTION */
.technique-showcase {
  padding: 96px 0;
  background: var(--bg-surface);
  position: relative;
}

/* Step Item Container */
.step-item {
  margin-bottom: 24px;                   /* Space between steps */
}

.step-container {
  display: flex;
  gap: 24px;                             /* Space between number and content */
}

/* Number Circle */
.step-number {
  flex-shrink: 0;
}

.number-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--accent-primary);
  background: var(--bg-elevated);
}

.number-circle span {
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
}

/* Step Line (Connector) */
.step-line {
  width: 2px;
  height: calc(100% + 24px);             /* Extend to next step */
  margin-left: 31px;                     /* Center under circle */
  background: linear-gradient(to bottom, var(--accent-primary), transparent);
}

/* Step Content */
.step-content {
  flex: 1;
  padding-top: 8px;                      /* Vertical align with circle center */
}

.step-content h3 {
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: 8px;
}

.step-content p {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
}

/* Icon Badges */
.glass-badge-sm {
  padding: 4px 12px;                     /* Compact padding */
  font-size: 12px;
  line-height: 16px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Video Container */
.video-container {
  width: 628px;
  height: 470px;                         /* 4:3 aspect ratio */
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

/* Floating Stats Cards */
.floating-stats {
  position: relative;
}

.stat-card {
  padding: 16px;
  border-radius: 12px;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  min-width: 200px;
}

.stat-card i {
  font-size: 32px;
  line-height: 40px;
}

.stat-card .stat-label {
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.stat-card .stat-value {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
}
```

---

### 5. ARTIST STORY SECTION

```
┌────────────────────────────────────────────────────────────┐
│  ARTIST STORY SECTION                                       │
│  Padding: 96px 0                                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Container: 1320px                                    │  │
│  │                                                        │  │
│  │ ┌──────────────┐         ┌──────────────────┐        │  │
│  │ │ LEFT COLUMN  │  64px   │ RIGHT COLUMN     │        │  │
│  │ │ 536px        │  gap    │ 720px            │        │  │
│  │ │              │         │                  │        │  │
│  │ │ Portrait     │         │ Badge            │        │  │
│  │ │ 536×670px    │         │ margin: 16px     │        │  │
│  │ │ (4:5 ratio)  │         │                  │        │  │
│  │ │              │         │ H2: 48px height  │        │  │
│  │ │ Border-      │         │ margin: 24px     │        │  │
│  │ │ radius:16px  │         │                  │        │  │
│  │ │              │         │ Lead: 20px       │        │  │
│  │ │              │         │ margin: 24px     │        │  │
│  │ │ Quote Card   │         │                  │        │  │
│  │ │ (floating)   │         │ Bio Paragraphs   │        │  │
│  │ │ 280×auto     │         │ margin: 24px ea. │        │  │
│  │ │ position:    │         │                  │        │  │
│  │ │ absolute     │         │ Achievements     │        │  │
│  │ │              │         │ Grid (2 cols)    │        │  │
│  │ │              │         │ gap: 16px        │        │  │
│  │ │              │         │ margin-top: 40px │        │  │
│  │ │              │         │                  │        │  │
│  │ │              │         │ CTA Buttons      │        │  │
│  │ │              │         │ margin-top: 40px │        │  │
│  │ │              │         │ gap: 16px        │        │  │
│  │ └──────────────┘         └──────────────────┘        │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Specifiche Dettagliate:**

```css
/* ARTIST STORY SECTION */
.artist-story {
  padding: 96px 0;
}

/* Portrait Image */
.artist-portrait {
  width: 536px;
  height: 670px;                         /* 4:5 aspect ratio */
  border-radius: 16px;
  overflow: hidden;
}

/* Quote Card (Floating) */
.artist-quote {
  position: absolute;
  bottom: -40px;
  left: -40px;
  max-width: 280px;
  padding: 24px;
  border-radius: 12px;
}

.artist-quote i {
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 12px;
}

.artist-quote p {
  font-size: 14px;
  line-height: 22px;
  font-style: italic;
}

/* Bio Content */
.artist-bio p {
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 24px;
}

/* Achievements Grid */
.achievements {
  margin-top: 40px;
}

.achievements .row {
  gap: 16px;
}

.achievement-card {
  padding: 24px;
  border-radius: 12px;
  height: 100%;
  min-height: 160px;
}

.achievement-card i {
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 16px;
}

.achievement-card .fw-semibold {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
}

.achievement-card p {
  font-size: 14px;
  line-height: 22px;
}
```

---

### 6. CONTACT CTA SECTION

```
┌────────────────────────────────────────────────────────────┐
│  CONTACT CTA SECTION                                        │
│  Padding: 96px 0                                           │
│  Background: Gradient overlay                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Container: 1320px                                    │  │
│  │ Text Align: Center                                   │  │
│  │                                                        │  │
│  │ Icon Circle                                          │  │
│  │ 80×80px, margin-bottom: 24px                         │  │
│  │                                                        │  │
│  │ H2: Display-4 (48px height)                          │  │
│  │ margin-bottom: 24px                                  │  │
│  │                                                        │  │
│  │ Lead Text                                            │  │
│  │ max-width: 700px, margin: 0 auto 40px               │  │
│  │                                                        │  │
│  │ Contact Methods (Flex)                               │  │
│  │ ┌──────────┐  ┌──────────┐  ┌──────────┐           │  │
│  │ │ WhatsApp │  │  Email   │  │   Form   │           │  │
│  │ │ 200×56px │  │ 200×56px │  │ 200×56px │           │  │
│  │ └──────────┘  └──────────┘  └──────────┘           │  │
│  │     Gap: 16px between buttons                        │  │
│  │                                                        │  │
│  │ Trust Signals                                        │  │
│  │ margin-top: 32px                                     │  │
│  │ gap: 24px                                            │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Specifiche Dettagliate:**

```css
/* CONTACT CTA SECTION */
.contact-cta {
  padding: 96px 0;
  text-align: center;
  position: relative;
}

/* Icon Circle */
.cta-icon {
  margin-bottom: 24px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--glass-bg);
  border: 2px solid var(--accent-primary);
}

.icon-circle i {
  font-size: 40px;
  line-height: 48px;
}

/* Title */
.contact-cta h2 {
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  margin-bottom: 24px;
}

/* Lead Text */
.contact-cta .lead {
  font-size: 20px;
  line-height: 32px;
  max-width: 700px;
  margin: 0 auto 40px;
}

/* Contact Methods */
.contact-methods {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.contact-methods .btn {
  min-width: 200px;
  height: 56px;
  padding: 16px 32px;
  font-size: 16px;
  line-height: 24px;
}

/* Trust Signals */
.trust-signals {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 24px;
}

.trust-item i {
  font-size: 20px;
}
```

---

## 📱 RESPONSIVE BREAKPOINTS - Adjustments

### Mobile (375px - 767px)

```css
/* Mobile Adjustments */
@media (max-width: 767px) {
  
  /* Container */
  .container,
  .container-fluid {
    padding-left: 24px;               /* Reduced from 60px */
    padding-right: 24px;
  }
  
  /* Navbar */
  .navbar {
    height: 64px;                     /* Reduced from 80px */
    padding: 12px 24px;
  }
  
  .navbar-brand img {
    height: 32px;                     /* Reduced from 40px */
  }
  
  /* Hero Section */
  .hero-section {
    padding-top: 64px;
    padding-bottom: 64px;             /* Reduced from 96px */
  }
  
  .hero-title {
    font-size: 40px;                  /* Reduced from 72px */
    line-height: 48px;
    margin-bottom: 16px;
  }
  
  .hero-subtitle {
    font-size: 24px;                  /* Reduced from 32px */
    line-height: 32px;
    margin-bottom: 16px;
  }
  
  .hero-lead {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 12px;
  }
  
  .btn-lg {
    width: 100%;
    min-width: auto;
  }
  
  .hero-stats {
    gap: 32px;
    justify-content: space-between;
    margin-top: 48px;
  }
  
  /* Artwork Container */
  .artwork-reveal-container {
    width: 100%;
    max-width: 327px;                 /* Mobile width */
    height: 409px;                    /* 4:5 aspect ratio maintained */
  }
  
  /* Section Padding */
  .featured-artworks,
  .technique-showcase,
  .artist-story,
  .contact-cta {
    padding: 64px 0;                  /* Reduced from 96px */
  }
  
  /* Section Titles */
  .section-title {
    font-size: 32px;                  /* Reduced from 56px */
    line-height: 40px;
    margin-bottom: 16px;
  }
  
  .section-description {
    font-size: 16px;
    line-height: 24px;
  }
  
  /* Cards */
  .artwork-card {
    width: 100%;
    max-width: 327px;
  }
  
  .artwork-images {
    width: 100%;
    height: 245px;                    /* 4:3 ratio adjusted */
  }
  
  /* Step Items */
  .step-container {
    gap: 16px;
  }
  
  .number-circle {
    width: 56px;
    height: 56px;
  }
  
  .number-circle span {
    font-size: 24px;
  }
}
```

### Tablet (768px - 991px)

```css
/* Tablet Adjustments */
@media (min-width: 768px) and (max-width: 991px) {
  
  .container {
    padding-left: 40px;
    padding-right: 40px;
  }
  
  .hero-title {
    font-size: 56px;
    line-height: 64px;
  }
  
  .hero-subtitle {
    font-size: 28px;
    line-height: 36px;
  }
  
  .section-title {
    font-size: 40px;
    line-height: 48px;
  }
  
  .artwork-card {
    width: 100%;
    max-width: 344px;
  }
}
```

### Desktop (992px - 1439px)

```css
/* Standard Desktop */
@media (min-width: 992px) and (max-width: 1439px) {
  
  .container {
    max-width: 960px;
  }
  
  /* Minor adjustments to spacing */
  .featured-artworks,
  .technique-showcase {
    padding: 80px 0;
  }
}
```

### Large Desktop (1440px+)

```css
/* Large Desktop - Full Design */
@media (min-width: 1440px) {
  
  .container {
    max-width: 1320px;
  }
  
  /* All spacing as specified above */
}
```

---

## 📊 VERTICAL RHYTHM GUIDE

### Typography Line Heights (Must be divisible by 8 or 4)

```css
/* All line heights follow 4pt baseline grid */

/* Headings */
h1, .display-1 { line-height: 80px; }    /* 72px font size */
h2, .display-2 { line-height: 64px; }    /* 56px font size */
h3, .display-3 { line-height: 48px; }    /* 40px font size */
h4             { line-height: 40px; }    /* 32px font size */
h5             { line-height: 32px; }    /* 24px font size */
h6             { line-height: 28px; }    /* 20px font size */

/* Body Text */
.lead          { line-height: 32px; }    /* 20px font size */
body, p        { line-height: 28px; }    /* 18px font size */
.text-base     { line-height: 24px; }    /* 16px font size */
small, .text-sm{ line-height: 20px; }    /* 14px font size */
.text-xs       { line-height: 16px; }    /* 12px font size */
```

---

## ✅ CHECKLIST IMPLEMENTAZIONE

### Before You Start
- [ ] Imposta base unit: 8px
- [ ] Definisci container max-width: 1320px
- [ ] Imposta side margins: 60px (desktop)
- [ ] Gutter spacing: 24px (12px per lato)

### Hero Section
- [ ] Navbar height: 80px
- [ ] Hero min-height: 100vh
- [ ] Column gap: 64px
- [ ] Title font-size: 72px, line-height: 80px
- [ ] CTA buttons height: 56px
- [ ] Stats margin-top: 64px

### Featured Section
- [ ] Section padding: 96px vertical
- [ ] Card width: 400px
- [ ] Card image height: 300px
- [ ] Card body padding: 24px
- [ ] Card spacing: 32px gap

### Technique Section
- [ ] Two column layout: 628px each
- [ ] Column gap: 64px
- [ ] Step margin: 24px
- [ ] Number circle: 64×64px
- [ ] Video container: 628×470px

### Artist Story
- [ ] Portrait: 536×670px (4:5 ratio)
- [ ] Quote card max-width: 280px
- [ ] Bio paragraphs margin: 24px
- [ ] Achievement cards padding: 24px
- [ ] Grid gap: 16px

### Contact CTA
- [ ] Icon circle: 80×80px
- [ ] Buttons min-width: 200px, height: 56px
- [ ] Trust signals gap: 24px

---

## 🎯 SUMMARY - Quick Reference

### Key Measurements to Remember:

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Container | 1320px | 960px | 100% (24px padding) |
| Navbar Height | 80px | 72px | 64px |
| Section Padding | 96px | 80px | 64px |
| Column Gap | 64px | 48px | 32px |
| Card Width | 400px | 344px | 327px |
| Button Height | 56px | 56px | 48px |
| Border Radius | 16px | 16px | 12px |

### Spacing Scale Quick Reference:
- **Micro:** 8px - 16px (icons, badges)
- **Small:** 24px - 32px (paragraphs, elements)
- **Medium:** 40px - 48px (sections within)
- **Large:** 64px - 96px (major sections)
- **XL:** 128px+ (hero spacing)

---

**© 2025 - 8pt Grid System Implementation Guide**  
*Tutte le misure sono basate su best practices di Material Design, Bootstrap 5, e analisi dei top art marketplaces*
