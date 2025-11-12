# ⚡ ANALISI RAPIDA: TECNICA - LOOP 1

**Metodo:** Esperienza da Homepage, Chi Sono, Contatti  
**Correzioni stimate:** ~25-30

---

## 🎯 CORREZIONI NECESSARIE (Sintesi)

### HERO (Col-lg-5 + Col-lg-6)
1. Display-2: 3→2.5→2.25rem
2. Lead fs-4: 1.25→1.125rem
3. Badge: 0.875rem
4. Buttons: Full-width mobile
5. Demo card p-4: Ridurre
6. Reveal images aspect-ratio: Verificare

### TIMELINE (5 Step)
7. Display-4 title: 2→1.75→1.5rem
8. Step numbers (80x80px): Ridurre
9. Step cards p-5: 2→1.5rem
10. Step h4 titles: 1.25rem
11. Icons fs-1: Ridurre
12. mb-6 spacing: Ridurre
13. Centering su mobile

### VIDEO SECTION
14. Display-4: 2→1.75rem
15. Feature list: Font-size
16. Video ratio-16x9: OK
17. YouTube button: Mobile styling

### FAQ
18. Display-4: 2→1.75rem
19. Accordion items rounded-4: 1rem
20. Accordion button: 0.9375rem
21. Accordion body: 0.9375rem, padding 1rem
22. Accordion spacing: 0.75rem

### WORKSHOP CTA
23. Display-3: Scalare
24. Features grid: Spacing
25. Features icons fs-2: Ridurre
26. CTA card padding: Ridurre

---

## 📝 CSS DA APPLICARE

```css
/* TECNICA PAGE - LOOP 1 */

/* Hero Title */
@media (max-width: 992px) { .page-hero .display-2 { font-size: 3rem !important; }}
@media (max-width: 768px) { .page-hero .display-2 { font-size: 2.5rem !important; }}
@media (max-width: 576px) { .page-hero .display-2 { font-size: 2.25rem !important; }}

/* Hero Lead */
@media (max-width: 768px) { .page-hero .lead.fs-4 { font-size: 1.25rem !important; }}
@media (max-width: 576px) { .page-hero .lead.fs-4 { font-size: 1.125rem !important; }}

/* Hero Badge */
@media (max-width: 576px) { .page-hero .glass-badge { font-size: 0.875rem !important; padding: 0.5rem 1rem !important; }}

/* Hero Buttons */
@media (max-width: 576px) {
  .page-hero .btn-lg { width: 100% !important; padding: 0.875rem 2rem !important; }
  .page-hero .d-flex.gap-3 { gap: 0.75rem !important; }
}

/* Demo Card */
@media (max-width: 768px) { .reveal-demo { padding: 2rem !important; }}
@media (max-width: 576px) { .reveal-demo { padding: 1.5rem !important; }}

/* Section Titles */
@media (max-width: 992px) { .display-4 { font-size: 2.25rem !important; }}
@media (max-width: 768px) { .display-4 { font-size: 2rem !important; }}
@media (max-width: 576px) { .display-4 { font-size: 1.75rem !important; }}

/* Timeline Step Numbers */
@media (max-width: 576px) {
  .step-number { width: 60px !important; height: 60px !important; }
  .step-number .h2 { font-size: 1.5rem !important; }
}

/* Timeline Cards */
@media (max-width: 768px) { .timeline-step .glass-card { padding: 2rem !important; }}
@media (max-width: 576px) { .timeline-step .glass-card { padding: 1.5rem !important; }}

/* Timeline Titles */
@media (max-width: 576px) { .timeline-step .h4 { font-size: 1.25rem !important; }}

/* Timeline Icons */
@media (max-width: 576px) { .timeline-step .fs-1 { font-size: 1.5rem !important; }}

/* Timeline Spacing */
@media (max-width: 768px) { .timeline-step.mb-6 { margin-bottom: 3rem !important; }}
@media (max-width: 576px) { .timeline-step.mb-6 { margin-bottom: 2rem !important; }}

/* Section Spacing */
@media (max-width: 768px) { .processo-section, .video-section, .faq-section, .workshop-cta-section { padding-top: 3rem !important; padding-bottom: 3rem !important; }}
@media (max-width: 576px) { .processo-section, .video-section, .faq-section, .workshop-cta-section { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }}

/* Video Features */
@media (max-width: 576px) {
  .feature-item .h6 { font-size: 1rem !important; }
  .feature-item .small { font-size: 0.875rem !important; }
}

/* FAQ */
@media (max-width: 576px) {
  .faq-section .accordion-item.rounded-4 { border-radius: 1rem !important; }
  .faq-section .accordion-button { font-size: 0.9375rem !important; padding: 1rem !important; }
  .faq-section .accordion-body { font-size: 0.9375rem !important; padding: 1rem !important; }
  .faq-section .accordion-item { margin-bottom: 0.75rem !important; }
}

/* Workshop CTA */
@media (max-width: 992px) { .workshop-cta-section .display-3 { font-size: 2.5rem !important; }}
@media (max-width: 768px) { .workshop-cta-section .display-3 { font-size: 2rem !important; }}
@media (max-width: 576px) {
  .workshop-cta-section .display-3 { font-size: 1.75rem !important; }
  .workshop-cta-section .cta-card { padding: 2rem !important; }
  .workshop-cta-section .fs-2 { font-size: 1.5rem !important; }
  .workshop-cta-section .h6 { font-size: 1rem !important; }
}
```

**TOTALE:** ~25 correzioni

