# 📊 ANALISI DESKTOP: CONTATTI.HTML - LOOP 1

**Data:** 12 Novembre 2025  
**Pagina:** contatti.html  
**Obiettivo:** Assimilazione completa versione DESKTOP

---

## 🎯 STRUTTURA PAGINA

```
1. NAVBAR (Fixed Top)
2. HERO SECTION (Min-vh-50, centrata)
3. CONTACT FORM & INFO SECTION (2 colonne: Form + Cards)
4. MAP SECTION (Google Maps iframe)
5. FAQ SECTION (5 Accordion items)
6. FOOTER (Standard)
```

---

## 1️⃣ HERO SECTION - DESKTOP

### Layout
- **Container:** Bootstrap container
- **Row:** justify-content-center text-center
- **Column:** col-lg-8 (centrata)
- **Min-height:** min-vh-50 (non full screen)
- **Padding:** padding-top 100px, padding-bottom 40px

### CONTENUTO CENTRATO
**Badge:**
- Classe: `badge glass-badge mb-3`
- Testo: "Parliamone"

**Titolo:**
- Classe: `display-2 fw-bold mb-4`
- Testo: "Mettiamoci in Contatto"

**Descrizione:**
- Classe: `lead fs-4 text-secondary mb-5`
- 2 righe di testo

**Quick Contact Buttons:**
- Layout: `d-flex gap-3 justify-content-center flex-wrap mb-5`
- 3 Bottoni:
  1. WhatsApp: `btn btn-success btn-lg px-5` (verde)
  2. Email: `btn btn-outline-light btn-lg px-5`
  3. Chiama: `btn btn-outline-light btn-lg px-5`

---

## 2️⃣ CONTACT FORM & INFO - DESKTOP

### Layout Grid
- **Row:** g-5 (gap 3rem)
- **Colonna Form:** col-lg-7 (58% width)
- **Colonna Info:** col-lg-5 (42% width)

### FORM (Colonna Sinistra)
**Container:**
- Classe: `glass-card p-5 rounded-4`

**Titolo Form:**
- Classe: `h3 fw-bold mb-4`
- Testo: "Invia un Messaggio"

**Fields (6 + Privacy + Submit):**
1. **Nome:** input text, form-control-lg, required
2. **Email:** input email, form-control-lg, required
3. **Telefono:** input tel, form-control-lg, optional
4. **Oggetto:** select, form-select-lg, required, 7 options
5. **Messaggio:** textarea, 6 rows, form-control-lg, required
6. **Privacy:** checkbox, required

**Submit Button:**
- Classe: `btn btn-primary btn-lg w-100`
- Icon + Text + Loader states

**Messages:**
- Success: alert-success
- Error: alert-danger

### INFO CARDS (Colonna Destra)
**5 Cards totali:**

1. **Studio (Indirizzo):**
   - Icon: bi-geo-alt-fill text-gradient fs-2
   - Titolo: h6 fw-bold
   - 2 righe indirizzo

2. **Email:**
   - Icon: bi-envelope-fill text-gradient fs-2
   - Titolo: h6 fw-bold
   - Link email

3. **Telefono:**
   - Icon: bi-telephone-fill text-gradient fs-2
   - Titolo: h6 fw-bold
   - Link tel

4. **WhatsApp:**
   - Icon: bi-whatsapp text-gradient fs-2
   - Titolo: h6 fw-bold
   - Link target="_blank"

5. **Orari Studio:**
   - Icon: bi-clock-fill text-gradient
   - 3 righe orari (Lun-Ven, Sabato, Domenica)
   - Note "Visite su appuntamento"

6. **Social:**
   - Titolo: h6 fw-bold
   - 5 bottoni social (rounded-circle, btn-sm)

**Card Design:**
- Classe: `glass-card p-4 rounded-4 mb-4`
- Layout icona+testo: `d-flex align-items-start gap-3`

---

## 3️⃣ MAP SECTION - DESKTOP

### Header
- Background: `bg-surface`
- Padding: `py-6`
- Text-center
- Badge: "Dove Trovarmi"
- Titolo: `h3 fw-bold mb-3` → "Lo Studio"
- Descrizione: text-secondary

### Map Container
- Classe: `map-container glass-card rounded-4 overflow-hidden`
- Ratio: `ratio ratio-21x9` (aspect-ratio)
- Iframe: Google Maps embed

---

## 4️⃣ FAQ SECTION - DESKTOP

### Header
- Padding: `py-6`
- Row: justify-content-center
- Column: col-lg-8 (centrata)
- Badge: "FAQ Contatti"
- Titolo: `h3 fw-bold mb-3` → "Domande Frequenti"

### Accordion
- ID: faqAccordion
- 5 Items

**Accordion Item Structure:**
- Classe: `accordion-item glass-card rounded-4 mb-3 border-0`
- Header: `accordion-button collapsed bg-transparent text-white fw-semibold`
- Body: `accordion-body text-secondary`

**FAQ Topics:**
1. Tempo di risposta
2. Visite studio
3. Commissioni
4. Spedizioni Italia
5. Workshop

---

## 📐 TIPOGRAFIA DESKTOP

### Display Classes
- **display-2:** Titolo hero (più piccolo di display-1)

### Heading Classes
- **h3:** Titolo form, map, FAQ sections
- **h6:** Titoli info cards

### Body Text
- **lead fs-4:** Hero description
- **form-label:** Form labels (fw-semibold)
- **text-secondary:** Descriptions, form-text, accordion body

### Form Controls
- **form-control-lg:** Input e textarea grandi
- **form-select-lg:** Select grande

### Buttons
- **btn-lg:** Hero buttons, submit button
- **btn-sm:** Social buttons (rounded-circle)

---

## 🎨 SPACING DESKTOP

### Hero
- **Padding-top:** 100px
- **Padding-bottom:** 40px
- **mb-3:** Badge
- **mb-4:** Title
- **mb-5:** Description, buttons

### Contact Section
- **py-6:** Section padding
- **g-5:** Row gap (3rem tra form e info)
- **p-5:** Form card padding
- **p-4:** Info cards padding
- **mb-4:** Between info cards, form fields

### Map Section
- **py-6:** Section padding
- **mb-5:** Header margin bottom

### FAQ Section
- **py-6:** Section padding
- **mb-5:** Header margin bottom
- **mb-3:** Between accordion items

---

## 🎨 DESIGN ELEMENTS

### Cards
- **Form:** p-5, rounded-4
- **Info Cards:** p-4, rounded-4, mb-4
- **Map:** rounded-4, overflow-hidden
- **Accordion:** rounded-4, mb-3, border-0

### Icons
- **Info Cards:** fs-2, text-gradient
- **Form:** bi-send (submit), bi-check-circle (success), bi-exclamation-triangle (error)
- **Social:** rounded-circle buttons

### Colors
- **Success Button:** btn-success (WhatsApp verde)
- **Primary:** btn-primary (submit)
- **Outline:** btn-outline-light (hero buttons)
- **Danger:** text-danger (required asterisk, domenica chiuso)
- **Gradient:** text-gradient (icons, titles)

---

## 📱 FORM SPECIFICS

### Fields Spacing
- **mb-4:** Ogni field group

### Input Sizes
- **form-control-lg:** 48px height
- **form-select-lg:** 48px height
- **textarea:** 6 rows

### Validation
- **invalid-feedback:** Error messages
- **form-text:** Help text
- **required attribute:** HTML5 validation

### States
- Default, focus, invalid, disabled

---

## ✅ CHECKLIST DESKTOP COMPLETA

- ✅ Navbar fixed
- ✅ Hero centrato min-vh-50
- ✅ 3 quick contact buttons
- ✅ Form 7 fields (col-lg-7)
- ✅ Info 6 cards (col-lg-5)
- ✅ Grid g-5 tra form e info
- ✅ Map con iframe Google Maps
- ✅ FAQ 5 accordion items
- ✅ Footer standard
- ✅ Glassmorphism cards
- ✅ Icons gradient
- ✅ Form validation
- ✅ Accessibility (labels, aria)
- ✅ I18n attributes

---

**PROSSIMO STEP:** Analisi versione MOBILE

