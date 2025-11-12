# ⚖️ COMPARAZIONE DESKTOP vs MOBILE: CHI-SONO - LOOP 1

**Data:** 12 Novembre 2025  
**Obiettivo:** Identificare OGNI SINGOLA correzione necessaria per parità pixel-perfect

---

## 🔴 CORREZIONI CRITICHE (Priority 1)

### 1. HERO TITLE - Display-1
**Desktop:**
- Font-size: ~4.5rem (da CSS display-1)

**Mobile Attuale:**
- Probabilmente: ~2.5rem (troppo piccolo)

**✅ CORREZIONE:**
```css
@media (max-width: 992px) {
  .page-hero .display-1 {
    font-size: 3.5rem !important;
  }
}
@media (max-width: 768px) {
  .page-hero .display-1 {
    font-size: 3rem !important;
  }
}
@media (max-width: 576px) {
  .page-hero .display-1 {
    font-size: 2.5rem !important;
  }
}
```

---

### 2. HERO SUBTITLE - Lead fs-3
**Desktop:**
- Font-size: fs-3 = ~1.75rem

**Mobile Attuale:**
- Non ottimizzato

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero .lead.fs-3 {
    font-size: 1.375rem !important;
  }
}
@media (max-width: 576px) {
  .page-hero .lead.fs-3 {
    font-size: 1.25rem !important;
  }
}
```

---

### 3. HERO STATISTICHE - Layout & Centering
**Desktop:**
- Layout: d-flex gap-4 flex-wrap
- 3 elementi affiancati

**Mobile Necessario:**
- Centrati
- Grid 2+1 (come homepage)

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero .d-flex.gap-4.flex-wrap {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem !important;
    justify-items: center;
    text-align: center;
  }
  
  .page-hero .d-flex.gap-4.flex-wrap > div:nth-child(3) {
    grid-column: span 2;
  }
}
```

---

### 4. SECTION TITLES - Display-4
**Desktop:**
- Font-size: ~2.5rem

**Mobile Attuale:**
- Troppo piccolo

**✅ CORREZIONE:**
```css
@media (max-width: 992px) {
  .bio-timeline-section .display-4,
  .studio-gallery-section .display-4,
  .achievements-section .display-4,
  .quote-section .display-4,
  .cta-section .display-4 {
    font-size: 2.25rem !important;
  }
}
@media (max-width: 768px) {
  .bio-timeline-section .display-4,
  .studio-gallery-section .display-4,
  .achievements-section .display-4,
  .quote-section .display-4,
  .cta-section .display-4 {
    font-size: 2rem !important;
  }
}
@media (max-width: 576px) {
  .bio-timeline-section .display-4,
  .studio-gallery-section .display-4,
  .achievements-section .display-4,
  .quote-section .display-4,
  .cta-section .display-4 {
    font-size: 1.75rem !important;
  }
}
```

---

### 5. TIMELINE BADGE ANNO - h3
**Desktop:**
- Font-size: h3 = ~1.75rem

**Mobile Necessario:**
- Leggermente ridotto

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .year-badge .h3 {
    font-size: 1.5rem !important;
  }
}
@media (max-width: 576px) {
  .year-badge .h3 {
    font-size: 1.375rem !important;
  }
}
```

---

### 6. QUOTE ICON - Font-size 4rem
**Desktop:**
- Font-size: 4rem (molto grande)

**Mobile Necessario:**
- Ridurre a 2.5rem

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .quote-card .bi-quote {
    font-size: 3rem !important;
  }
}
@media (max-width: 576px) {
  .quote-card .bi-quote {
    font-size: 2.5rem !important;
  }
}
```

---

### 7. QUOTE TEXT - Lead fs-3
**Desktop:**
- Font-size: lead fs-3 = ~1.75rem

**Mobile Necessario:**
- Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .quote-card .lead.fs-3 {
    font-size: 1.375rem !important;
  }
}
@media (max-width: 576px) {
  .quote-card .lead.fs-3 {
    font-size: 1.25rem !important;
  }
}
```

---

## 🟡 CORREZIONI MEDIE (Priority 2)

### 8. SECTION SPACING - py-6
**Desktop:**
- Padding: py-6 (circa 4-5rem)

**Mobile Necessario:**
- Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero,
  .bio-timeline-section,
  .studio-gallery-section,
  .achievements-section,
  .quote-section,
  .cta-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
@media (max-width: 576px) {
  .page-hero,
  .bio-timeline-section,
  .studio-gallery-section,
  .achievements-section,
  .quote-section,
  .cta-section {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
}
```

---

### 9. CARDS PADDING - p-5
**Desktop:**
- Padding: p-5 (3rem)

**Mobile Necessario:**
- Ridurre a p-4 o p-3

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .bio-timeline-section .glass-card,
  .achievement-card,
  .quote-card,
  .cta-card {
    padding: 2rem !important;
  }
}
@media (max-width: 576px) {
  .bio-timeline-section .glass-card,
  .achievement-card,
  .quote-card,
  .cta-card {
    padding: 1.5rem !important;
  }
}
```

---

### 10. HERO IMAGE CARD - Min-height 550px
**Desktop:**
- Min-height: 550px

**Mobile Necessario:**
- Auto o ridotto

**✅ CORREZIONE:**
```css
@media (max-width: 992px) {
  .artist-photo-wrapper .glass-card {
    min-height: 400px !important;
  }
}
@media (max-width: 768px) {
  .artist-photo-wrapper .glass-card {
    min-height: 350px !important;
  }
}
@media (max-width: 576px) {
  .artist-photo-wrapper .glass-card {
    min-height: 300px !important;
  }
}
```

---

### 11. HERO IMAGE SIZE
**Desktop:**
- Width: 400px, Height: 445px

**Mobile Necessario:**
- Responsive

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .artist-photo-wrapper img {
    width: 100% !important;
    max-width: 320px !important;
    height: auto !important;
  }
}
@media (max-width: 576px) {
  .artist-photo-wrapper img {
    max-width: 280px !important;
  }
}
```

---

### 12. CTA BUTTONS - px-5 padding
**Desktop:**
- Padding: px-5

**Mobile Necessario:**
- Full-width o ridurre padding

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .page-hero .btn-lg,
  .cta-section .btn-lg {
    width: 100%;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
}
```

---

### 13. HERO GAP - g-5
**Desktop:**
- Gap: g-5 (3rem)

**Mobile Necessario:**
- Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero .row {
    gap: 2rem !important;
  }
}
```

---

### 14. TIMELINE SPACING - mb-5
**Desktop:**
- Margin-bottom: mb-5 tra eventi

**Mobile Necessario:**
- Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .timeline-event {
    margin-bottom: 2rem !important;
  }
}
@media (max-width: 576px) {
  .timeline-event {
    margin-bottom: 1.5rem !important;
  }
}
```

---

### 15. CENTERING GENERALE MOBILE
**Desktop:**
- Text-align: vari

**Mobile Necessario:**
- Tutto centrato

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero .col-lg-6:first-child,
  .timeline-event .col-lg-2,
  .timeline-event .col-lg-10 {
    text-align: center !important;
  }
  
  .page-hero .d-flex.gap-3.flex-wrap {
    justify-content: center !important;
  }
}
```

---

### 16. HERO STATISTICS - h2 Numbers
**Desktop:**
- Font-size: h2 = ~2rem

**Mobile Necessario:**
- Mantenere impatto

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero .h2 {
    font-size: 1.75rem !important;
  }
}
@media (max-width: 576px) {
  .page-hero .h2 {
    font-size: 1.5rem !important;
  }
}
```

---

### 17. ACHIEVEMENT ICONS - fs-1
**Desktop:**
- Font-size: fs-1

**Mobile Necessario:**
- Mantenere visibilità

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .achievement-card i.fs-1 {
    font-size: 2rem !important;
  }
}
```

---

### 18. FLOATING BADGE - Position
**Desktop:**
- Position: absolute top-0 end-0 m-3

**Mobile Necessario:**
- Verificare visibilità

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .artist-photo-wrapper .position-absolute {
    margin: 0.5rem !important;
  }
  
  .artist-photo-wrapper .position-absolute .glass-card {
    padding: 0.75rem !important;
  }
  
  .artist-photo-wrapper .position-absolute i {
    font-size: 1.5rem !important;
  }
  
  .artist-photo-wrapper .position-absolute .small {
    font-size: 0.75rem !important;
  }
}
```

---

### 19. STUDIO GALLERY - Grid responsiveness
**Desktop:**
- Row 1: 2 col (col-lg-6)
- Row 2: 3 col (col-lg-4)

**Mobile:**
- Bootstrap gestisce (col-12 di default)

**✅ VERIFICA:** Già responsive con Bootstrap

---

### 20. TIMELINE CENTERING
**Desktop:**
- Anno a sinistra, descrizione a destra

**Mobile Necessario:**
- Tutto centrato

**✅ CORREZIONE:**
```css
@media (max-width: 992px) {
  .year-badge {
    text-align: center !important;
  }
  
  .timeline-event .col-lg-10 h3,
  .timeline-event .col-lg-10 p {
    text-align: center !important;
  }
}
```

---

## 📊 RIEPILOGO CORREZIONI

**TOTALE:** 20 correzioni identificate

**BREAKDOWN:**
- 🔴 Critiche (Typography): 7
- 🟡 Medie (Spacing/Layout): 10
- 🟢 Minori (Fine-tuning): 3

**PROSSIMO STEP:** Applicare tutte le correzioni al main.css

