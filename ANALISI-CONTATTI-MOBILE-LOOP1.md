# 📱 ANALISI MOBILE: CONTATTI.HTML - LOOP 1

**Data:** 12 Novembre 2025  
**Pagina:** contatti.html  
**Obiettivo:** Identificare TUTTE le discrepanze vs Desktop

---

## 🔍 PROBLEMI IDENTIFICATI

### 1️⃣ HERO SECTION - MOBILE

#### LAYOUT ✅ (Già centrato)
- [x] Container centrato di default
- [x] Text-center già presente
- [x] Col-lg-8 → 100% width su mobile

#### TIPOGRAFIA ❌
- ❌ **display-2:** Probabilmente troppo piccolo su mobile
- ❌ **lead fs-4:** Dimensione da verificare

#### BUTTONS ❌
- ❌ **3 Bottoni affiancati:** Desktop gap-3
- ⚠️ Mobile: Dovrebbero stackare verticalmente? O rimanere flex-wrap?
- ❌ **px-5:** Padding eccessivo su mobile
- ⚠️ Full-width su mobile?

#### SPACING ❌
- ❌ **Padding-top 100px:** Eccessivo su mobile
- ❌ **mb-5:** Spacing tra elementi

---

### 2️⃣ CONTACT FORM & INFO - MOBILE

#### GRID LAYOUT ❌
- ❌ Desktop: col-lg-7 / col-lg-5 affiancate
- ⚠️ Mobile: Stack verticalmente
- ❌ **g-5 (3rem gap):** Troppo su mobile
- ⚠️ **Ordine:** Form prima o Info prima?

#### FORM CARD ❌
- ❌ **p-5 padding:** Troppo generoso su mobile
- ⚠️ Dovrebbe essere p-4 o p-3
- ❌ **Titolo h3:** Dimensione mobile

#### FORM FIELDS ⚠️
- ⚠️ **form-control-lg:** 48px height OK per mobile (iOS zoom fix)
- ⚠️ **Labels fw-semibold:** Font-size
- ❌ **mb-4 tra fields:** Potrebbe essere ridotto
- ⚠️ **Textarea 6 rows:** Troppo alto su mobile?

#### SUBMIT BUTTON ⚠️
- ⚠️ **w-100:** Già full-width, OK
- ⚠️ **btn-lg:** Dimensione appropriata

#### INFO CARDS ❌
- ❌ **p-4 padding:** Ridurre a p-3
- ❌ **mb-4 tra cards:** Ridurre
- ❌ **Icons fs-2:** Potrebbero essere ridotti
- ❌ **h6 titles:** Font-size mobile

#### HOURS CARD ❌
- ❌ Layout orari: d-flex justify-content-between
- ⚠️ Su mobile molto piccolo potrebbero non stare

#### SOCIAL BUTTONS ⚠️
- ⚠️ 5 bottoni: Dovrebbero stare su una riga
- ⚠️ btn-sm rounded-circle: Dimensioni da verificare

---

### 3️⃣ MAP SECTION - MOBILE

#### SECTION TITLE ❌
- ❌ **h3:** Dimensione mobile

#### MAP CONTAINER ⚠️
- ⚠️ **ratio-21x9:** Aspect ratio va bene?
- ⚠️ Su mobile potrebbe essere troppo stretto verticalmente
- ⚠️ Considerare ratio-16x9 o ratio-4x3 su mobile

#### SPACING ❌
- ❌ **py-6:** Ridurre su mobile
- ❌ **mb-5:** Header spacing

---

### 4️⃣ FAQ SECTION - MOBILE

#### CONTAINER ⚠️
- ⚠️ col-lg-8 centrato → 100% width su mobile

#### SECTION TITLE ❌
- ❌ **h3:** Dimensione mobile

#### ACCORDION ITEMS ❌
- ❌ **rounded-4:** Border-radius eccessivo su mobile
- ❌ **mb-3:** Spacing tra items
- ❌ **Accordion button:** Font-size mobile
- ❌ **Accordion body:** Font-size e padding

---

## 📊 RIEPILOGO DISCREPANZE (STIMA)

### 🔴 CRITICHE (10)
1. Hero title display-2: Troppo piccolo
2. Hero buttons: Layout e padding non ottimizzati
3. Form/Info grid g-5: Gap troppo grande (3rem)
4. Form card p-5: Padding eccessivo
5. Info cards padding: Ridurre p-4 → p-3
6. Form fields mb-4: Spacing eccessivo
7. Section titles h3: Non ottimizzati
8. Accordion buttons: Font-size
9. Icons fs-2: Troppo grandi
10. Hero padding-top 100px: Eccessivo

### 🟡 MEDIE (8)
11. Hero lead fs-4: Dimensione da ottimizzare
12. Textarea rows: Ridurre da 6 a 4?
13. Map ratio: Cambiare aspect-ratio
14. Section spacing py-6: Ridurre
15. Accordion items rounded-4: Ridurre
16. Accordion spacing mb-3: Ridurre
17. Hours card layout: Verificare fit
18. Social buttons: Sizing

### 🟢 MINORI (4)
19. Hero badge: Fine-tuning
20. Form labels: Font-size
21. Info cards icons: Margin
22. Map mb-5: Spacing header

---

## 🎯 TOTALE DISCREPANZE: ~22

**BREAKDOWN:**
- Tipografia: 8 correzioni
- Spacing: 7 correzioni
- Layout: 4 correzioni
- Componenti: 3 correzioni

**PROSSIMO STEP:** Comparazione dettagliata e CSS corrections

