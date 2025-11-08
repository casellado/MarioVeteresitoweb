# 🧪 GUIDA TEST LOCALE TRADUZIONI

## 🚀 AVVIO SERVER LOCALE

### Metodo 1: Python (Già in uso)
```bash
cd /home/casella-dogano/Scrivania/SitoWebMarioVetere
python3 -m http.server 8000
```

**Accesso:** http://localhost:8000

### Metodo 2: PHP (Alternativa)
```bash
php -S localhost:8000
```

### Metodo 3: Node.js http-server (Se hai Node)
```bash
npx http-server -p 8000 -c-1
```

---

## ✅ CHECKLIST TEST COMPLETA

### Test Rapido (5 min per pagina)

```bash
# 1. Apri pagina
http://localhost:8000/[pagina].html

# 2. Apri Console (F12)
# 3. Verifica:
#    - Nessun errore JavaScript
#    - Sistema i18n caricato
#    - Lingua default applicata

# 4. Test cambio lingua (per ogni lingua):
#    - Clicca 🇬🇧 EN
#    - Tutti i testi cambiano?
#    - Nessun testo IT residuo?
#    - Reload mantiene lingua?

# 5. Test mobile:
#    - F12 → Toggle Device Toolbar (Ctrl+Shift+M)
#    - iPhone SE (375x667)
#    - iPad (768x1024)
#    - Testi leggibili?
#    - Layout non rotto?
```

---

## 📋 CHECKLIST DETTAGLIATA PER PAGINA

### Template Test:

```markdown
## TEST: [nome-pagina.html]

Data: __/__/____
Tester: ____________

### 1. Caricamento Iniziale
- [ ] Pagina si carica senza errori
- [ ] Console pulita (no errori rossi)
- [ ] Sistema i18n attivo
- [ ] Lingua IT applicata di default

### 2. Test Italiano (IT) - Baseline
- [ ] Navbar tradotta
- [ ] Hero section tradotta
- [ ] Body content tradotto
- [ ] Footer tradotto
- [ ] Form labels tradotti (se presenti)
- [ ] Button/CTA tradotti
- [ ] Alt text immagini (verifica in inspector)

### 3. Test English (EN)
- [ ] Selettore lingua → 🇬🇧 EN
- [ ] Navbar cambia
- [ ] Hero section cambia
- [ ] Body content cambia
- [ ] Footer cambia
- [ ] Form placeholders cambiano
- [ ] Button/CTA cambiano
- [ ] Nessun testo IT residuo
- [ ] Grammatica corretta
- [ ] Senso compiuto

### 4. Test Deutsch (DE)
- [ ] Selettore lingua → 🇩🇪 DE
- [ ] Tutti i testi cambiano
- [ ] Nessun overflow testi (tedesco più lungo)
- [ ] Layout consistente
- [ ] Grammatica tedesca corretta
- [ ] Articoli (der/die/das) corretti

### 5. Test Français (FR)
- [ ] Selettore lingua → 🇫🇷 FR
- [ ] Tutti i testi cambiano
- [ ] Accenti corretti (é, è, ê, à)
- [ ] Apostrofi corretti (l', d')
- [ ] Grammatica francese corretta

### 6. Test Español (ES)
- [ ] Selettore lingua → 🇪🇸 ES
- [ ] Tutti i testi cambiano
- [ ] Ñ visualizzata correttamente
- [ ] Accenti corretti (á, é, í, ó, ú)
- [ ] ¿¡ dove necessario

### 7. Test Persistenza
- [ ] Cambio lingua → IT
- [ ] Reload pagina (F5)
- [ ] Lingua mantenuta (IT)
- [ ] Cambio lingua → EN
- [ ] Reload pagina
- [ ] Lingua mantenuta (EN)
- [ ] localStorage.preferredLanguage = "en"

### 8. Test Navigazione Cross-Page
- [ ] Pagina A (IT) → Navigazione → Pagina B (IT mantenuto)
- [ ] Cambio lingua → EN
- [ ] Navigazione → Pagina C (EN mantenuto)

### 9. Test Responsive

#### Desktop (1920x1080)
- [ ] Layout perfetto
- [ ] Testi leggibili
- [ ] Nessun overflow

#### Tablet (768x1024)
- [ ] Layout adattato
- [ ] Testi leggibili
- [ ] Navbar collassa correttamente

#### Mobile (375x667)
- [ ] Layout mobile-first
- [ ] Testi leggibili
- [ ] Touch target >= 44px
- [ ] Hamburger menu funziona

### 10. Test Performance
- [ ] Cambio lingua < 200ms
- [ ] Nessun flickering
- [ ] Smooth transition
- [ ] Console Performance tab: no warning

### 11. Test Accessibilità
- [ ] Tab navigation funziona
- [ ] Screen reader friendly (alt text)
- [ ] Contrasto colori sufficiente
- [ ] Focus visible

### 12. Test Browser

#### Chrome
- [ ] Tutte le funzionalità OK

#### Firefox
- [ ] Tutte le funzionalità OK

#### Safari (se disponibile)
- [ ] Tutte le funzionalità OK

### ✅ RISULTATO FINALE
- [ ] ✅ APPROVATO - Pronto deploy
- [ ] 🟡 PARZIALE - Vedi note
- [ ] ❌ RIFIUTATO - Richiede fix

### 📝 NOTE:
_______________________________________
_______________________________________
_______________________________________

```

---

## 🔍 PROBLEMI COMUNI E SOLUZIONI

### Problema 1: Testo non cambia lingua

**Causa:** Manca attributo `data-i18n`

**Soluzione:**
```html
<!-- ❌ Sbagliato -->
<h1>Titolo Opera</h1>

<!-- ✅ Corretto -->
<h1 data-i18n="opera.title">Titolo Opera</h1>
```

---

### Problema 2: Placeholder non tradotto

**Causa:** Usa `data-i18n` invece di `data-i18n-placeholder`

**Soluzione:**
```html
<!-- ❌ Sbagliato -->
<input placeholder="La tua email" data-i18n="form.email">

<!-- ✅ Corretto -->
<input placeholder="La tua email" data-i18n-placeholder="form.email">
```

---

### Problema 3: Alt text non tradotto

**Causa:** Usa `data-i18n` invece di `data-i18n-alt`

**Soluzione:**
```html
<!-- ❌ Sbagliato -->
<img src="opera.jpg" alt="Opera d'arte" data-i18n="opera.alt">

<!-- ✅ Corretto -->
<img src="opera.jpg" alt="Opera d'arte" data-i18n-alt="opera.alt">
```

---

### Problema 4: Lingua non persiste dopo reload

**Causa:** localStorage non salvato

**Debug Console:**
```javascript
// Verifica localStorage
localStorage.getItem('preferredLanguage')

// Dovrebbe tornare: "en", "de", "fr", "es"
// Se null → problema salvataggio
```

**Soluzione:** Verifica `i18n-simple.js` salvi correttamente

---

### Problema 5: Testi si sovrappongono (tedesco)

**Causa:** Tedesco più lungo, layout fisso

**Soluzione CSS:**
```css
/* ❌ Larghezza fissa */
.card-title {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
}

/* ✅ Larghezza flessibile */
.card-title {
  max-width: 100%;
  word-wrap: break-word;
}
```

---

### Problema 6: Console errore "Translation key not found"

**Causa:** Chiave traduzione mancante in `i18n-simple.js`

**Debug:**
```javascript
// Console
window.i18n.translate('chiave.mancante', 'en')
// Torna: "chiave.mancante" (fallback)
```

**Soluzione:** Aggiungi chiave in `i18n-simple.js`:
```javascript
en: {
  "chiave.mancante": "Missing Translation"
}
```

---

## 🎯 WORKFLOW TEST EFFICIENTE

### Step 1: Test Smoke (2 min)
```bash
# Apri tutte le pagine in tab separate
http://localhost:8000/index.html
http://localhost:8000/opere.html
http://localhost:8000/tecnica.html
http://localhost:8000/chi-sono.html
http://localhost:8000/contatti.html

# Cambia lingua → EN su tutte
# Scorri veloce → Spot check visivo
```

### Step 2: Test Dettagliato (30 min)
- Prendi 1 pagina alla volta
- Usa checklist completa
- Annota problemi

### Step 3: Test Regressione (10 min)
- Dopo fix, ri-testa solo pagine modificate
- Verifica non hai rotto altre pagine

### Step 4: Test Cross-Browser (15 min)
- Chrome ✅
- Firefox ✅
- Safari (se Mac/iPhone) ✅

### Step 5: Test Performance (5 min)
- F12 → Performance tab
- Record 10 secondi
- Cambia lingua 3 volte
- Analizza: < 200ms per cambio? ✅

---

## 📊 REPORT TEST TEMPLATE

```markdown
# REPORT TEST TRADUZIONI
Data: 08/11/2025
Versione: 1.0

## Pagine Testate
- [x] index.html
- [x] opere.html
- [x] tecnica.html
- [ ] chi-sono.html (in progress)
- [ ] contatti.html
- [ ] checkout.html
- [ ] success.html

## Risultati

### index.html ✅
- IT: ✅ Perfetto
- EN: ✅ Perfetto
- DE: 🟡 Overflow su stats badge (FIXED)
- FR: ✅ Perfetto
- ES: ✅ Perfetto

### opere.html ✅
- IT: ✅ Perfetto
- EN: ✅ Perfetto
- DE: ✅ Perfetto
- FR: ✅ Perfetto
- ES: ✅ Perfetto

## Bug Trovati

### BUG-001: Overflow tedesco su badge stats
**Pagina:** index.html
**Lingua:** DE
**Descrizione:** "Kunstwerke Geschaffen" troppo lungo
**Fix:** Ridotto a "Kunstwerke"
**Status:** ✅ FIXED

### BUG-002: Placeholder form non tradotto
**Pagina:** contatti.html
**Lingua:** Tutte
**Descrizione:** Manca data-i18n-placeholder
**Fix:** Aggiunto attributo
**Status:** ✅ FIXED

## Performance
- Cambio lingua medio: 150ms ✅
- Flickering: Nessuno ✅
- Memory leak: Nessuno ✅

## Browser Compatibility
- Chrome 120: ✅
- Firefox 121: ✅
- Safari 17: ✅

## Conclusione
✅ APPROVATO per deploy
```

---

## 🛠️ TOOLS UTILI

### 1. Console Helper Script

Apri Console (F12) e incolla:

```javascript
// Test rapido tutte le lingue
const langs = ['it', 'en', 'de', 'fr', 'es'];
let index = 0;

function testAllLangs() {
  window.i18n.changeLanguage(langs[index]);
  console.log(`🌍 Testing: ${langs[index].toUpperCase()}`);
  index = (index + 1) % langs.length;
  
  if (index === 0) {
    console.log('✅ Test completo! Tutto OK?');
    clearInterval(window.langTest);
  }
}

// Cambia lingua ogni 2 secondi
window.langTest = setInterval(testAllLangs, 2000);

// Per fermare: clearInterval(window.langTest)
```

---

### 2. Missing Translations Finder

```javascript
// Trova tutti gli elementi con data-i18n senza traduzione
const elements = document.querySelectorAll('[data-i18n]');
const missing = [];

elements.forEach(el => {
  const key = el.getAttribute('data-i18n');
  const text = el.textContent.trim();
  
  // Se testo è uguale alla key → traduzione mancante
  if (text === key) {
    missing.push({
      key: key,
      element: el.tagName,
      location: el.classList.toString()
    });
  }
});

if (missing.length > 0) {
  console.warn('⚠️ Traduzioni mancanti:', missing);
} else {
  console.log('✅ Tutte le traduzioni presenti!');
}
```

---

### 3. Text Overflow Detector

```javascript
// Trova elementi con overflow
const elements = document.querySelectorAll('*');
const overflows = [];

elements.forEach(el => {
  if (el.scrollWidth > el.clientWidth || 
      el.scrollHeight > el.clientHeight) {
    overflows.push({
      tag: el.tagName,
      class: el.className,
      text: el.textContent.substring(0, 50)
    });
  }
});

console.log('📏 Elementi con overflow:', overflows);
```

---

## 📱 TEST MOBILE VELOCE

### iPhone SE (375x667)
```javascript
// Console quick setup
document.documentElement.style.width = '375px';
document.documentElement.style.height = '667px';

// Oppure usa F12 → Toggle Device Toolbar → iPhone SE
```

### iPad (768x1024)
```javascript
document.documentElement.style.width = '768px';
document.documentElement.style.height = '1024px';
```

---

## ✅ CHECKLIST FINALE PRIMA DEL DEPLOY

```markdown
## Pre-Deploy Checklist

### Traduzioni
- [ ] Tutte le pagine tradotte (10/10)
- [ ] Tutte le lingue testate (IT, EN, DE, FR, ES)
- [ ] Nessun testo IT residuo in altre lingue
- [ ] Chiavi traduzione complete in i18n-simple.js

### Funzionalità
- [ ] Selettore lingua funziona su tutte le pagine
- [ ] Persistenza lingua tra pagine
- [ ] localStorage funziona
- [ ] Nessun errore console

### Responsive
- [ ] Desktop (1920x1080) ✅
- [ ] Tablet (768x1024) ✅
- [ ] Mobile (375x667) ✅

### Performance
- [ ] Cambio lingua < 200ms
- [ ] Nessun flickering
- [ ] Lighthouse score > 90

### Cross-Browser
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅ (se disponibile)

### Accessibilità
- [ ] Tab navigation
- [ ] Screen reader friendly
- [ ] Contrasto colori WCAG AA

### SEO
- [ ] Meta tags per ogni lingua
- [ ] Hreflang tags (se multilingua su URL diversi)
- [ ] Sitemap.xml aggiornato

✅ TUTTO OK → DEPLOY!
```

---

## 📞 SUPPORTO

**Problemi durante test?**
- Vedi sezione "Problemi Comuni e Soluzioni"
- Usa Console Helper Scripts
- Controlla `i18n-simple.js` per chiavi mancanti

**Data Guida:** 08/11/2025  
**Versione:** 1.0

