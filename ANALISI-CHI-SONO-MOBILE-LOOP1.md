# 📱 ANALISI MOBILE: CHI-SONO.HTML - LOOP 1

**Data:** 12 Novembre 2025  
**Pagina:** chi-sono.html  
**Breakpoints Analizzati:** 992px, 768px, 576px, 375px  
**Obiettivo:** Identificare TUTTE le discrepanze vs Desktop

---

## 🔍 ANALISI ATTUALE MOBILE

### 1️⃣ HERO SECTION - MOBILE

#### PROBLEMI RILEVATI:

**A) LAYOUT COLONNE**
- ❌ Desktop: 2 colonne affiancate (testo/immagine)
- ❌ Mobile: Colonne stack verticalmente (OK bootstrap)
- ⚠️ **ORDINE:** Immagine dovrebbe venire PRIMA del testo su mobile? O testo prima?
- ⚠️ **CENTERING:** Tutti gli elementi dovrebbero essere centrati su mobile

**B) TIPOGRAFIA**
- ❌ `.display-1` (Mario Vetere): Probabilmente troppo piccolo su mobile
- ❌ `.lead fs-3` (sottotitolo): Font-size non ottimizzato per mobile
- ❌ `.fs-5` (biografia): Potrebbe essere troppo piccolo
- ❌ Statistiche `.h2`: Dimensione non verificata per mobile

**C) STATISTICHE (15+, 200+, 50+)**
- ❌ Desktop: `d-flex gap-4 flex-wrap`
- ⚠️ Mobile: Come si distribuiscono? 3 colonne? 3 righe? Centrate?
- ❌ Gap probabilmente troppo grande su mobile

**D) CTA BUTTONS**
- ❌ Desktop: 2 buttons affiancati
- ⚠️ Mobile: Stack verticalmente? Full-width?
- ❌ Padding px-5 potrebbe essere eccessivo su mobile

**E) IMMAGINE ARTISTA**
- ❌ Desktop: 400x445px in card min-height 550px
- ⚠️ Mobile: Dimensioni non verificate
- ⚠️ Card padding p-4 potrebbe essere troppo su mobile
- ❌ **FLOATING BADGE** (Tecnica Brevettata): Posizione su mobile?

**F) SPACING**
- ❌ g-5 (gap colonne): Troppo grande su mobile?
- ❌ mb-3, mb-4, mb-5: Non ottimizzati per mobile

---

### 2️⃣ BIO TIMELINE SECTION - MOBILE

#### PROBLEMI RILEVATI:

**A) LAYOUT TIMELINE**
- ❌ Desktop: Anno (col-lg-2) + Descrizione (col-lg-10)
- ⚠️ Mobile: Come si stackano? Anno sopra descrizione? Centrati?

**B) BADGE ANNO**
- ❌ Desktop: glass-card p-3 d-inline-block
- ⚠️ Mobile: Dimensione badge non verificata
- ❌ `.h3` per l'anno: Troppo grande su mobile?

**C) CARDS DESCRIZIONE**
- ❌ Desktop: p-5 (padding molto generoso)
- ⚠️ Mobile: Padding dovrebbe ridursi (p-3 o p-4)
- ❌ Titolo `.h4`: Dimensione non verificata

**D) SPACING**
- ❌ mb-5 tra eventi: Troppo spazio su mobile
- ❌ py-6 sezione: Probabilmente troppo su mobile

**E) CENTERING**
- ⚠️ Tutto dovrebbe essere centrato su mobile?

---

### 3️⃣ STUDIO GALLERY SECTION - MOBILE

#### PROBLEMI RILEVATI:

**A) GRID LAYOUT**
- ❌ Desktop Row 1: 2 colonne (col-lg-6)
- ⚠️ Mobile: 1 colonna full-width?
- ❌ Desktop Row 2: 3 colonne (col-lg-4)
- ⚠️ Mobile: 1 colonna full-width o 2 colonne?

**B) IMMAGINI**
- ❌ Desktop: aspect-ratio 16/10 (grandi) e 1:1 (piccole)
- ⚠️ Mobile: Aspect-ratio mantenuti?

**C) CARDS**
- ❌ Desktop: p-4 (grandi), p-3 (piccole)
- ⚠️ Mobile: Padding non verificato

**D) TITOLI**
- ❌ `.h5` (grandi): Dimensione mobile?
- ❌ `.h6` (piccole): Dimensione mobile?

---

### 4️⃣ ACHIEVEMENTS SECTION - MOBILE

#### PROBLEMI RILEVATI:

**A) GRID**
- ❌ Desktop: 2 colonne (col-lg-6)
- ⚠️ Mobile: Stack verticalmente (1 colonna)

**B) CARDS**
- ❌ Desktop: p-5
- ⚠️ Mobile: Padding dovrebbe ridursi

**C) ICONE**
- ❌ Desktop: fs-1 (molto grandi)
- ⚠️ Mobile: Dimensione adeguata?

**D) LISTE**
- ❌ 5 elementi per lista
- ⚠️ Mobile: Leggibilità verificata?
- ❌ Font-size non ottimizzato

---

### 5️⃣ QUOTE SECTION - MOBILE

#### PROBLEMI RILEVATI:

**A) CONTAINER**
- ❌ Desktop: col-lg-8 (80% width)
- ⚠️ Mobile: Full-width con padding

**B) CARD**
- ❌ Desktop: p-6
- ⚠️ Mobile: Padding dovrebbe ridursi (p-4?)

**C) ICONA QUOTE**
- ❌ Desktop: font-size 4rem
- ⚠️ Mobile: Troppo grande? Ridurre a 2.5rem?

**D) TESTO QUOTE**
- ❌ Desktop: lead fs-3 (molto grande)
- ⚠️ Mobile: Ridurre font-size

**E) FOOTER**
- ❌ Desktop: fs-5
- ⚠️ Mobile: Dimensione adeguata?

---

### 6️⃣ CTA SECTION - MOBILE

#### PROBLEMI RILEVATI:

**A) CONTAINER**
- ❌ Desktop: col-lg-10
- ⚠️ Mobile: Full-width

**B) CARD**
- ❌ Desktop: p-5 p-lg-6
- ⚠️ Mobile: p-5 potrebbe essere troppo

**C) TITOLO**
- ❌ Desktop: display-4
- ⚠️ Mobile: Dimensione non verificata

**D) BUTTONS**
- ❌ Desktop: gap-3 flex-wrap
- ⚠️ Mobile: Full-width? Stack?
- ❌ px-5: Troppo padding su mobile

---

## 📊 RIEPILOGO DISCREPANZE (STIMA INIZIALE)

### CRITICHE (🔴)
1. **Tipografia Display:** Display-1, Display-4 troppo piccoli su mobile
2. **Hero Statistiche:** Layout non ottimizzato (3 elementi non centrati)
3. **Timeline Badge Anno:** Dimensione non adeguata
4. **Quote Icon:** Troppo grande (4rem → 2.5rem)
5. **CTA Buttons:** Padding e layout non ottimizzati

### MEDIE (🟡)
6. **Spacing Sections:** py-6 eccessivo su mobile
7. **Cards Padding:** p-5 troppo generoso (ridurre a p-4 o p-3)
8. **Gallery Grid:** Layout non verificato
9. **Achievements Icons:** Dimensione fs-1 da verificare
10. **Hero Image Card:** Min-height 550px eccessivo su mobile

### MINORI (🟢)
11. **Hero Gap:** g-5 da ridurre a g-4
12. **Timeline Spacing:** mb-5 da ridurre
13. **CTA Card Padding:** p-5 da ridurre
14. **Floating Badge:** Posizione non verificata
15. **Footer Quote:** Font-size da verificare

---

## 🎯 TOTALE DISCREPANZE: ~15

**PROSSIMO STEP:** Comparazione Desktop/Mobile dettagliata per ogni elemento

