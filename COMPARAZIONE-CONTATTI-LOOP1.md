# ⚖️ COMPARAZIONE DESKTOP vs MOBILE: CONTATTI - LOOP 1

**Data:** 12 Novembre 2025  
**Obiettivo:** Correzioni precise per parità pixel-perfect

---

## 🔴 CORREZIONI CRITICHE (10)

### 1. HERO TITLE - Display-2
**Desktop:** Font-size ~3.5rem  
**Mobile Necessario:** Scalare proporzionalmente

**✅ CORREZIONE:**
```css
@media (max-width: 992px) {
  .page-hero .display-2 {
    font-size: 3rem !important;
  }
}
@media (max-width: 768px) {
  .page-hero .display-2 {
    font-size: 2.5rem !important;
  }
}
@media (max-width: 576px) {
  .page-hero .display-2 {
    font-size: 2.25rem !important;
  }
}
```

---

### 2. HERO BUTTONS - Layout & Padding
**Desktop:** 3 buttons gap-3, px-5  
**Mobile Necessario:** Stack verticale, full-width, padding ridotto

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .page-hero .d-flex.gap-3.flex-wrap {
    flex-direction: column !important;
    width: 100%;
  }
  
  .page-hero .btn-lg {
    width: 100% !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
}
```

---

### 3. HERO PADDING-TOP
**Desktop:** 100px  
**Mobile Necessario:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero[style*="padding-top: 100px"] {
    padding-top: 90px !important;
  }
}
@media (max-width: 576px) {
  .page-hero[style*="padding-top: 100px"] {
    padding-top: 80px !important;
  }
}
```

---

### 4. CONTACT SECTION - Grid Gap
**Desktop:** g-5 (3rem)  
**Mobile Necessario:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 992px) {
  .contact-section .row.g-5 {
    gap: 2rem !important;
  }
}
@media (max-width: 576px) {
  .contact-section .row.g-5 {
    gap: 1.5rem !important;
  }
}
```

---

### 5. FORM CARD - Padding
**Desktop:** p-5 (3rem)  
**Mobile Necessario:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .contact-section .glass-card.p-5 {
    padding: 2rem !important;
  }
}
@media (max-width: 576px) {
  .contact-section .glass-card.p-5 {
    padding: 1.5rem !important;
  }
}
```

---

### 6. INFO CARDS - Padding
**Desktop:** p-4  
**Mobile Necessario:** p-3

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .contact-info-card,
  .hours-card,
  .social-card {
    padding: 1.25rem !important;
  }
}
```

---

### 7. FORM FIELDS - Spacing
**Desktop:** mb-4 (1.5rem)  
**Mobile Necessario:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  #contactForm .mb-4 {
    margin-bottom: 1.25rem !important;
  }
}
```

---

### 8. SECTION TITLES - h3
**Desktop:** h3 default (~1.75rem)  
**Mobile Necessario:** Ottimizzare

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .contact-section .h3,
  .map-section .h3,
  .faq-section .h3 {
    font-size: 1.5rem !important;
  }
}
@media (max-width: 576px) {
  .contact-section .h3,
  .map-section .h3,
  .faq-section .h3 {
    font-size: 1.375rem !important;
  }
}
```

---

### 9. INFO CARDS ICONS - fs-2
**Desktop:** fs-2 (~2rem)  
**Mobile Necessario:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .contact-info-card .fs-2,
  .hours-card .fs-2,
  .social-card .fs-2 {
    font-size: 1.5rem !important;
  }
}
```

---

### 10. ACCORDION BUTTONS - Font-size
**Desktop:** fw-semibold default  
**Mobile Necessario:** Ottimizzare

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .accordion-button {
    font-size: 0.9375rem !important;
  }
}
```

---

## 🟡 CORREZIONI MEDIE (8)

### 11. HERO LEAD - fs-4
**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .page-hero .lead.fs-4 {
    font-size: 1.25rem !important;
  }
}
@media (max-width: 576px) {
  .page-hero .lead.fs-4 {
    font-size: 1.125rem !important;
  }
}
```

---

### 12. TEXTAREA ROWS
**Desktop:** 6 rows  
**Mobile Necessario:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  #contactForm textarea {
    rows: 4 !important; /* Nota: Meglio fare inline HTML */
  }
}
```
**NOTA:** Questo è meglio farlo inline nell'HTML con media query JS

---

### 13. MAP ASPECT RATIO
**Desktop:** ratio-21x9 (molto wide)  
**Mobile Necessario:** ratio-16x9 o 4x3

**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .map-container .ratio-21x9 {
    aspect-ratio: 16/9 !important;
    padding-bottom: 56.25% !important; /* 16:9 */
  }
}
@media (max-width: 576px) {
  .map-container .ratio-21x9 {
    aspect-ratio: 4/3 !important;
    padding-bottom: 75% !important; /* 4:3 */
  }
}
```

---

### 14. SECTION SPACING - py-6
**✅ CORREZIONE:**
```css
@media (max-width: 768px) {
  .contact-section,
  .map-section,
  .faq-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
@media (max-width: 576px) {
  .contact-section,
  .map-section,
  .faq-section {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }
}
```

---

### 15. ACCORDION - Border-radius
**Desktop:** rounded-4 (1.5rem)  
**Mobile:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .accordion-item.rounded-4 {
    border-radius: 1rem !important;
  }
}
```

---

### 16. ACCORDION SPACING
**Desktop:** mb-3  
**Mobile:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .accordion-item {
    margin-bottom: 0.75rem !important;
  }
}
```

---

### 17. HOURS CARD LAYOUT
**Desktop:** d-flex justify-content-between  
**Mobile:** Verificare font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .hours-card .d-flex {
    font-size: 0.875rem !important;
  }
}
```

---

### 18. SOCIAL BUTTONS
**Desktop:** btn-sm rounded-circle  
**Mobile:** Dimensioni OK (verificare gap)

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .social-card .d-flex {
    gap: 0.5rem !important;
  }
}
```

---

## 🟢 CORREZIONI MINORI (4)

### 19. HERO BADGE
**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .page-hero .glass-badge {
    font-size: 0.875rem !important;
    padding: 0.5rem 1rem !important;
  }
}
```

---

### 20. FORM LABELS
**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .form-label {
    font-size: 0.9375rem !important;
  }
}
```

---

### 21. INFO CARDS TITLES - h6
**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .contact-info-card .h6,
  .hours-card .h6,
  .social-card .h6 {
    font-size: 1rem !important;
  }
}
```

---

### 22. ACCORDION BODY
**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .accordion-body {
    font-size: 0.9375rem !important;
    padding: 1rem !important;
  }
}
```

---

## 📊 RIEPILOGO CORREZIONI

**TOTALE:** 22 correzioni

**BREAKDOWN:**
- 🔴 Critiche: 10
- 🟡 Medie: 8
- 🟢 Minori: 4

**CATEGORIE:**
- Tipografia: 9 correzioni
- Spacing: 7 correzioni
- Layout: 3 correzioni
- Componenti: 3 correzioni

**PROSSIMO STEP:** Applicare tutte al main.css

