# 📸 Guida Immagini - Setup Completo

## 🎯 Immagini Necessarie

### 1. Logo (PRIORITÀ ALTA)

```
assets/images/logo/
├── logo-gold.svg         (Richiesto) - Logo principale dorato
├── logo-white.svg        (Opzionale) - Logo bianco per light mode
├── logo-dark.svg         (Opzionale) - Logo scuro
└── favicon.svg           (Richiesto) - Favicon del sito
```

**Specifiche:**
- Formato: SVG (vettoriale) o PNG trasparente
- Dimensioni logo: 120×40px (larghezza×altezza)
- Favicon: 32×32px o 64×64px

**Placeholder temporaneo:**
```html
<!-- In index.html, sostituisci con: -->
<img src="https://via.placeholder.com/120x40/d4af37/0a0a0a?text=MV" alt="Mario Vetere">
```

---

### 2. Opere Featured (PRIORITÀ ALTA)

```
assets/images/opere/featured/
├── negative-1.jpg        (Hero - Negativo)
├── positive-1.jpg        (Hero - Positivo)
├── opera-1.jpg           (Card 1)
├── opera-2.jpg           (Card 2)
└── opera-3.jpg           (Card 3)
```

**Specifiche:**
- Formato: JPEG (ottimizzato per web)
- Dimensioni hero: 600×750px (aspect ratio 4:5)
- Dimensioni cards: 400×300px (aspect ratio 4:3)
- Qualità: 80-85% JPEG
- Max file size: 200KB per immagine

**Placeholder temporaneo:**
```html
<!-- Sostituisci in index.html -->
negative-1.jpg → https://via.placeholder.com/600x750/d4af37/0a0a0a?text=Negativo
positive-1.jpg → https://via.placeholder.com/600x750/ffd700/0a0a0a?text=Positivo
opera-1.jpg    → https://via.placeholder.com/400x300/d4af37/0a0a0a?text=Opera+1
opera-2.jpg    → https://via.placeholder.com/400x300/d4af37/0a0a0a?text=Opera+2
opera-3.jpg    → https://via.placeholder.com/400x300/d4af37/0a0a0a?text=Opera+3
```

---

### 3. Artist (PRIORITÀ MEDIA)

```
assets/images/artist/
└── portrait-main.jpg     (Ritratto Mario Vetere)
```

**Specifiche:**
- Formato: JPEG
- Dimensioni: 600×750px (portrait)
- Qualità: 85% JPEG
- Max file size: 250KB

**Placeholder temporaneo:**
```
https://via.placeholder.com/600x750/d4af37/0a0a0a?text=Mario+Vetere
```

---

### 4. Technique (PRIORITÀ MEDIA)

```
assets/images/technique/
└── process-preview.jpg   (Preview processo tecnica)
```

**Specifiche:**
- Formato: JPEG
- Dimensioni: 1280×720px (16:9)
- Qualità: 80% JPEG
- Max file size: 300KB

**Placeholder temporaneo:**
```
https://via.placeholder.com/1280x720/d4af37/0a0a0a?text=Tecnica+Negativoepositivo
```

---

### 5. Open Graph (PRIORITÀ BASSA)

```
assets/images/og/
└── homepage-og.jpg       (Preview social media)
```

**Specifiche:**
- Formato: JPEG o PNG
- Dimensioni: 1200×630px (Facebook/Twitter standard)
- Qualità: 85% JPEG
- Max file size: 500KB

**Placeholder temporaneo:**
```
https://via.placeholder.com/1200x630/d4af37/0a0a0a?text=Mario+Vetere+Art
```

---

## 🚀 Script Setup Automatico

### Opzione 1: Bash Script (Linux/Mac)

Salva come `setup-images.sh`:

```bash
#!/bin/bash

echo "🎨 Creazione struttura immagini Mario Vetere..."

# Crea directories
mkdir -p assets/images/{logo,opere/featured,artist,technique,og}

# Funzione per scaricare placeholder
download_placeholder() {
    local width=$1
    local height=$2
    local text=$3
    local output=$4
    
    curl -o "$output" "https://via.placeholder.com/${width}x${height}/d4af37/0a0a0a?text=${text// /+}"
    echo "✓ Creato: $output"
}

# Logo
download_placeholder 120 40 "MV" "assets/images/logo/logo-gold.svg"
download_placeholder 32 32 "MV" "assets/images/logo/favicon.svg"

# Opere Featured
download_placeholder 600 750 "Negativo" "assets/images/opere/featured/negative-1.jpg"
download_placeholder 600 750 "Positivo" "assets/images/opere/featured/positive-1.jpg"
download_placeholder 400 300 "Opera+1" "assets/images/opere/featured/opera-1.jpg"
download_placeholder 400 300 "Opera+2" "assets/images/opere/featured/opera-2.jpg"
download_placeholder 400 300 "Opera+3" "assets/images/opere/featured/opera-3.jpg"

# Artist
download_placeholder 600 750 "Mario+Vetere" "assets/images/artist/portrait-main.jpg"

# Technique
download_placeholder 1280 720 "Tecnica" "assets/images/technique/process-preview.jpg"

# Open Graph
download_placeholder 1200 630 "Mario+Vetere+Art" "assets/images/og/homepage-og.jpg"

echo ""
echo "✅ Setup immagini completato!"
echo "⚠️  Ricorda di sostituire i placeholder con immagini reali"
```

**Come usarlo:**
```bash
chmod +x setup-images.sh
./setup-images.sh
```

---

### Opzione 2: Node.js Script

Salva come `setup-images.js`:

```javascript
const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { path: 'assets/images/logo/logo-gold.svg', size: '120x40', text: 'MV' },
    { path: 'assets/images/logo/favicon.svg', size: '32x32', text: 'MV' },
    { path: 'assets/images/opere/featured/negative-1.jpg', size: '600x750', text: 'Negativo' },
    { path: 'assets/images/opere/featured/positive-1.jpg', size: '600x750', text: 'Positivo' },
    { path: 'assets/images/opere/featured/opera-1.jpg', size: '400x300', text: 'Opera 1' },
    { path: 'assets/images/opere/featured/opera-2.jpg', size: '400x300', text: 'Opera 2' },
    { path: 'assets/images/opere/featured/opera-3.jpg', size: '400x300', text: 'Opera 3' },
    { path: 'assets/images/artist/portrait-main.jpg', size: '600x750', text: 'Mario Vetere' },
    { path: 'assets/images/technique/process-preview.jpg', size: '1280x720', text: 'Tecnica' },
    { path: 'assets/images/og/homepage-og.jpg', size: '1200x630', text: 'Mario Vetere Art' }
];

// Crea directories
const dirs = ['assets/images/logo', 'assets/images/opere/featured', 'assets/images/artist', 'assets/images/technique', 'assets/images/og'];
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Download placeholder
images.forEach(img => {
    const url = `https://via.placeholder.com/${img.size}/d4af37/0a0a0a?text=${encodeURIComponent(img.text)}`;
    const file = fs.createWriteStream(img.path);
    
    https.get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`✓ Creato: ${img.path}`);
        });
    });
});

console.log('🎨 Setup immagini in corso...');
```

**Come usarlo:**
```bash
node setup-images.js
```

---

## 📋 Checklist Immagini Reali

### Quando hai le immagini vere:

**LOGO:**
- [ ] Converti in SVG per qualità perfetta
- [ ] Crea versione dorata (#d4af37)
- [ ] Ottimizza SVG (rimuovi metadata inutile)
- [ ] Genera favicon in più formati (.ico, .png, .svg)

**OPERE:**
- [ ] Fotografa con luce uniforme
- [ ] Usa aspect ratio corretti (4:5 hero, 4:3 cards)
- [ ] Ritaglia e centra il soggetto
- [ ] Ottimizza JPEG (TinyPNG, ImageOptim)
- [ ] Crea versioni negative E positive
- [ ] Genera WebP per browser moderni

**ARTIST:**
- [ ] Usa foto professionale o alta qualità
- [ ] Background neutro o studio
- [ ] Luce morbida, no flash diretto
- [ ] Formato portrait (4:5)
- [ ] Espressione professionale ma friendly

**TECHNIQUE:**
- [ ] Video frame o foto del processo
- [ ] 16:9 aspect ratio
- [ ] Mostra chiaramente la tecnica
- [ ] Buona illuminazione

---

## 🛠️ Tools Consigliati

### Ottimizzazione Immagini:
- **TinyPNG** - https://tinypng.com/ (compressione JPEG/PNG)
- **Squoosh** - https://squoosh.app/ (Google, vari formati)
- **ImageOptim** - https://imageoptim.com/ (Mac app)
- **SVGOMG** - https://jakearchibald.github.io/svgomg/ (ottimizza SVG)

### Editing:
- **Photopea** - https://www.photopea.com/ (free Photoshop online)
- **Canva** - https://www.canva.com/ (design grafico)
- **Remove.bg** - https://www.remove.bg/ (rimuovi background)

### Conversione Formati:
- **CloudConvert** - https://cloudconvert.com/ (qualsiasi formato)
- **Convertio** - https://convertio.co/it/ (immagini + altri)

### Resize Batch:
- **Bulk Resize Photos** - https://bulkresizephotos.com/
- **ILoveIMG** - https://www.iloveimg.com/it

---

## 📐 Quick Reference - Dimensioni

```
Logo Principal:     120 × 40 px    (ratio 3:1)
Logo Mobile:        100 × 33 px    (scaled)
Favicon:            32 × 32 px     (square)

Hero Artwork:       600 × 750 px   (ratio 4:5)
Featured Card:      400 × 300 px   (ratio 4:3)
Gallery Thumbnail:  320 × 240 px   (ratio 4:3)

Portrait Artist:    600 × 750 px   (ratio 4:5)
Technique Preview:  1280 × 720 px  (ratio 16:9)

Open Graph:         1200 × 630 px  (Facebook/Twitter)
Twitter Card:       1200 × 600 px  (Twitter specific)
```

---

## ⚡ Performance Tips

1. **Usa WebP + JPEG Fallback:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

2. **Lazy Loading:**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

3. **Responsive Images:**
```html
<img srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w" 
     sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
     src="medium.jpg" 
     alt="Description">
```

4. **Ottimizzazione JPEG:**
   - Qualità: 80-85%
   - Progressive: ON
   - Strip metadata: ON
   - Chroma subsampling: 4:2:0

---

## 🎯 Prossimi Passi

1. **Esegui setup script** per creare placeholder
2. **Testa il sito** con le immagini placeholder
3. **Raccogli immagini reali** seguendo le specifiche
4. **Ottimizza le immagini** con i tool consigliati
5. **Sostituisci i placeholder** con immagini reali
6. **Verifica performance** con Lighthouse

---

## 💡 Note Finali

- I placeholder sono **solo temporanei** per testing
- Sostituiscili il prima possibile con immagini reali
- Le immagini sono **fondamentali** per l'appeal del sito
- Investi tempo nell'ottimizzazione per performance
- Usa sempre **alt text descrittivi** per accessibilità

---

**Fatto! 🎉**

Con questa guida dovresti avere tutto ciò che serve per gestire le immagini del progetto.
