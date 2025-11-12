# 🔬 ANALISI MICRO-OTTIMIZZAZIONI: CONTATTI - LOOP 2

**Data:** 12 Novembre 2025  
**Pagina:** contatti.html  
**Obiettivo:** Micro-ottimizzazioni residue dopo Loop 1

---

## 🎯 METODOLOGIA LOOP 2

Dopo le 22 macro-correzioni, verifico:

1. **Form inputs** (placeholders, help text)
2. **Button micro-spacing**
3. **Icon margins**
4. **Touch targets verification**
5. **Text sizes edge cases**
6. **Border-radius consistency**
7. **Info cards micro-spacing**
8. **Map container padding**
9. **FAQ accordion transitions**
10. **Small text elements**

---

## 🔍 MICRO-CORREZIONI IDENTIFICATE

### 1️⃣ FORM PLACEHOLDERS
**Desktop:** Default opacity 0.5-0.6  
**Mobile:** Verificare leggibilità

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  #contactForm input::placeholder,
  #contactForm textarea::placeholder,
  #contactForm select::placeholder {
    font-size: 0.9375rem !important;
    opacity: 0.65 !important;
  }
}
```

---

### 2️⃣ FORM HELP TEXT (form-text)
**Desktop:** small text-secondary  
**Mobile:** Font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .form-text {
    font-size: 0.8125rem !important;
    margin-top: 0.375rem !important;
  }
}
```

---

### 3️⃣ FORM VALIDATION MESSAGES
**Desktop:** invalid-feedback default  
**Mobile:** Font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .invalid-feedback {
    font-size: 0.8125rem !important;
  }
}
```

---

### 4️⃣ SUCCESS/ERROR ALERTS
**Desktop:** alert default padding  
**Mobile:** Padding e font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  #successMessage,
  #errorMessage {
    font-size: 0.9375rem !important;
    padding: 0.875rem !important;
  }
}
```

---

### 5️⃣ HERO BUTTONS MARGIN
**Desktop:** mb-5  
**Mobile:** Verificare

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .page-hero .d-flex.flex-wrap.mb-5 {
    margin-bottom: 2rem !important;
  }
}
```

---

### 6️⃣ INFO CARDS ICON WRAPPER
**Desktop:** d-flex gap-3  
**Mobile:** Gap e icon alignment

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .contact-info-card .d-flex.gap-3,
  .hours-card .d-flex.gap-3 {
    gap: 0.75rem !important;
  }
}
```

---

### 7️⃣ INFO CARDS TEXT
**Desktop:** p text-secondary  
**Mobile:** Font-size e line-height

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .contact-info-card p,
  .contact-info-card a {
    font-size: 0.9375rem !important;
    line-height: 1.5 !important;
  }
}
```

---

### 8️⃣ HOURS CARD HR
**Desktop:** my-3 border-secondary  
**Mobile:** Margin

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .hours-card hr {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }
}
```

---

### 9️⃣ HOURS CARD SMALL NOTE
**Desktop:** small text-secondary  
**Mobile:** Font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .hours-card .small {
    font-size: 0.8125rem !important;
  }
}
```

---

### 1️⃣0️⃣ MAP SECTION BADGE
**Desktop:** glass-badge mb-3  
**Mobile:** Fine-tuning

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .map-section .glass-badge {
    font-size: 0.875rem !important;
    padding: 0.5rem 1rem !important;
  }
}
```

---

### 1️⃣1️⃣ MAP SECTION DESCRIPTION
**Desktop:** text-secondary  
**Mobile:** Font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .map-section p.text-secondary {
    font-size: 0.9375rem !important;
  }
}
```

---

### 1️⃣2️⃣ FAQ SECTION BADGE
**Desktop:** glass-badge mb-3  
**Mobile:** Fine-tuning

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .faq-section .glass-badge {
    font-size: 0.875rem !important;
    padding: 0.5rem 1rem !important;
  }
}
```

---

### 1️⃣3️⃣ ACCORDION HEADER PADDING
**Desktop:** accordion-button default padding  
**Mobile:** Ridurre

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .accordion-button {
    padding: 1rem !important;
  }
}
```

---

### 1️⃣4️⃣ FORM SELECT OPTIONS
**Desktop:** option default  
**Mobile:** iOS font-size 16px (no zoom)

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  #contactForm select,
  #contactForm select option {
    font-size: 16px !important; /* iOS auto-zoom prevention */
  }
}
```

---

### 1️⃣5️⃣ SUBMIT BUTTON STATES
**Desktop:** btn-lg default  
**Mobile:** Padding vertical

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  #contactForm .btn-lg {
    padding-top: 0.875rem !important;
    padding-bottom: 0.875rem !important;
  }
}
```

---

### 1️⃣6️⃣ SOCIAL BUTTONS SIZE
**Desktop:** btn-sm rounded-circle  
**Mobile:** Touch target verification (min 44px)

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .social-card .btn-sm {
    min-width: 44px !important;
    min-height: 44px !important;
    padding: 0.5rem !important;
  }
}
```

---

### 1️⃣7️⃣ CHECKBOX LABEL
**Desktop:** form-check-label default  
**Mobile:** Font-size

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .form-check-label {
    font-size: 0.875rem !important;
  }
}
```

---

### 1️⃣8️⃣ REQUIRED ASTERISK
**Desktop:** text-danger  
**Mobile:** Visibility

**✅ CORREZIONE:**
```css
@media (max-width: 576px) {
  .text-danger {
    font-size: 1rem !important; /* Keep visible */
  }
}
```

---

## 📊 RIEPILOGO MICRO-CORREZIONI

### TOTALE: 18 micro-correzioni

#### FORM ELEMENTS (8)
1. Placeholders: 0.9375rem, opacity 0.65
2. Help text: 0.8125rem
3. Validation messages: 0.8125rem
4. Success/Error alerts: 0.9375rem, padding 0.875rem
5. Select iOS fix: 16px (no zoom)
6. Submit button: padding 0.875rem
7. Checkbox label: 0.875rem
8. Required asterisk: 1rem

#### INFO CARDS (5)
9. Icon wrapper gap: 0.75rem
10. Text: 0.9375rem, line-height 1.5
11. Hours HR: margins 0.75rem
12. Hours small: 0.8125rem
13. Social buttons: 44x44px touch targets

#### SECTIONS (5)
14. Hero buttons margin: 2rem
15. Map badge: 0.875rem
16. Map description: 0.9375rem
17. FAQ badge: 0.875rem
18. Accordion padding: 1rem

---

## 🎯 STIMA POST-LOOP 2

**Loop 1:** 85-90% parità  
**Loop 2:** 92-95% parità  

**OBIETTIVO LOOP 3:** 98-100% parità finale

---

**PROSSIMO STEP:** Applicare le 18 micro-correzioni

