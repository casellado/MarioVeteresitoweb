# 🚀 GUIDA AL LANCIO DEL SITO MARIO VETERE

## 📋 STATO ATTUALE

✅ Sito completo e funzionante  
✅ Sistema i18n multilingua (IT, EN, DE, FR, ES)  
✅ Già su GitHub: `https://github.com/casellado/MarioVeteresitoweb`  
✅ Pronto per il lancio!  

---

## 🎯 OPZIONE 1: GitHub Pages (RACCOMANDATO)

### Caratteristiche:
- **Costo**: 100% GRATUITO per sempre
- **Dominio**: `casellado.github.io/MarioVeteresitoweb`
- **HTTPS**: Automatico (SSL incluso)
- **CDN**: Globale (veloce in tutto il mondo)
- **Aggiornamenti**: Automatici ad ogni push Git

### 📝 STEP 1: Attiva GitHub Pages

1. **Vai su GitHub**:
   ```
   https://github.com/casellado/MarioVeteresitoweb
   ```

2. **Clicca su "Settings"** (in alto a destra)

3. **Nel menu laterale sinistro, clicca su "Pages"**

4. **Configura Source**:
   - **Branch**: Seleziona `main`
   - **Folder**: Seleziona `/ (root)`
   - Clicca **"Save"**

5. **Aspetta 2-3 minuti**
   - GitHub costruisce il sito
   - Vedrai un messaggio: "Your site is published at..."

6. **URL del Sito**:
   ```
   https://casellado.github.io/MarioVeteresitoweb/
   ```

### ✅ FATTO! Il sito è ONLINE!

---

## 🌐 OPZIONE 2: Netlify (Alternativa Eccellente)

### Caratteristiche:
- **Costo**: Piano gratuito generoso
- **Dominio**: `mario-vetere.netlify.app` (personalizzabile)
- **Deploy**: Automatico da GitHub
- **Form handling**: Gratis (per contatti)
- **Analytics**: Incluso

### 📝 STEP 1: Registrazione

1. Vai su **https://netlify.com**
2. Clicca **"Sign up"**
3. Scegli **"Sign up with GitHub"** (più veloce)
4. Autorizza Netlify

### 📝 STEP 2: Deploy

1. Clicca **"Add new site"** → **"Import an existing project"**
2. Seleziona **"GitHub"**
3. Cerca e seleziona **"MarioVeteresitoweb"**
4. Configurazione:
   - **Branch to deploy**: `main`
   - **Build command**: (lascia vuoto)
   - **Publish directory**: (lascia vuoto o `/`)
5. Clicca **"Deploy site"**

### 📝 STEP 3: Personalizza Dominio (Opzionale)

1. Vai su **"Site settings"**
2. **"Domain management"** → **"Options"** → **"Edit site name"**
3. Cambia in: `mario-vetere` o `mario-vetere-art`
4. URL diventa: `https://mario-vetere.netlify.app`

### ✅ FATTO! Deploy automatico ad ogni push Git!

---

## 🔥 OPZIONE 3: Vercel (Per Esperti)

### Caratteristiche:
- **Costo**: Gratuito per progetti personali
- **Dominio**: `mario-vetere.vercel.app`
- **Performance**: Eccezionale
- **Analytics**: Avanzati

### 📝 STEP 1-3: Simile a Netlify

1. **https://vercel.com** → Sign up with GitHub
2. **"Add New Project"** → Importa da GitHub
3. Deploy automatico

---

## 🏆 CONFRONTO OPZIONI

| Caratteristica | GitHub Pages | Netlify | Vercel |
|----------------|--------------|---------|--------|
| **Costo** | Gratis | Gratis | Gratis |
| **Setup** | 2 min | 3 min | 3 min |
| **Dominio Custom** | €12/anno | Incluso subdomain | Incluso subdomain |
| **SSL HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Deploy automatico** | ✅ | ✅ | ✅ |
| **CDN** | ✅ | ✅ | ✅ |
| **Form handling** | ❌ | ✅ | ✅ |
| **Analytics** | ❌ | ✅ Base | ✅ Avanzato |
| **Limite banda** | 100GB/mese | 100GB/mese | 100GB/mese |

**RACCOMANDAZIONE**: 
- Inizia con **GitHub Pages** (già configurato!)
- Passa a **Netlify** se hai bisogno di form/analytics

---

## 🌍 DOMINIO PERSONALIZZATO (Opzionale)

### Se vuoi un dominio tipo `www.mariovetere.art`:

1. **Acquista dominio** (€8-15/anno):
   - **Namecheap**: https://namecheap.com
   - **Google Domains**: https://domains.google
   - **Aruba**: https://aruba.it (Italia)

2. **Configura DNS** (varia per ogni servizio):
   - GitHub Pages: https://docs.github.com/pages/custom-domain
   - Netlify: Automatico, basta aggiungere dominio
   - Vercel: Automatico, basta aggiungere dominio

---

## 📊 DOPO IL LANCIO

### 1. **Verifica Funzionamento**
- ✅ Tutte le pagine caricano?
- ✅ Immagini visibili?
- ✅ Traduzioni funzionano?
- ✅ Form contatti funziona?
- ✅ Link funzionano?

### 2. **Google Search Console**
1. Vai su: https://search.google.com/search-console
2. Aggiungi il tuo sito
3. Invia la sitemap (se ne hai una)

### 3. **Google Analytics** (Opzionale)
1. Vai su: https://analytics.google.com
2. Crea proprietà per il sito
3. Aggiungi tracking code a tutte le pagine HTML

### 4. **Social Media**
- Condividi su Instagram: @mario_vetere_art
- Post su Facebook
- Aggiorna bio Instagram con link sito

### 5. **SEO Base**
- ✅ Ogni pagina ha `<title>` unico
- ✅ Ogni pagina ha `<meta description>`
- ✅ Immagini hanno `alt` text
- ✅ Sito responsive (mobile-friendly)

---

## 🔄 AGGIORNARE IL SITO

### Workflow Semplice:

1. **Modifica in locale** (sul tuo PC)
2. **Testa** con `http://localhost:8000`
3. **Commit e Push**:
   ```bash
   git add .
   git commit -m "Descrizione modifiche"
   git push origin main
   ```
4. **Aspetta 1-2 minuti** → Sito aggiornato automaticamente!

---

## 🆘 TROUBLESHOOTING

### Sito non si vede dopo GitHub Pages?
- Aspetta 5-10 minuti
- Controlla Settings → Pages → Vedi URL
- Verifica che Branch sia `main` e folder sia `/`

### Immagini non si vedono?
- Controlla percorsi relativi (no `/` iniziale)
- Esempio: `assets/images/logo.svg` (non `/assets/...`)

### Traduzioni non funzionano?
- Controlla Console browser (F12)
- Verifica che `i18n-simple.js` si carichi
- Forza ricarica: Ctrl + Shift + R

### CSS non si applica?
- Controlla percorso `main.css`
- Verifica che sia nel commit Git
- Controlla Console per errori 404

---

## 📞 CONTATTI E SUPPORTO

**GitHub Pages Docs**: https://docs.github.com/pages  
**Netlify Docs**: https://docs.netlify.com  
**Vercel Docs**: https://vercel.com/docs  

---

## ✅ CHECKLIST LANCIO

Stampa questa lista e spunta man mano:

- [ ] Sito testato in locale (localhost:8000)
- [ ] Tutte le pagine funzionano
- [ ] Traduzioni funzionano (IT, EN, DE, FR, ES)
- [ ] Immagini caricano correttamente
- [ ] Form contatti testato
- [ ] Git push fatto su GitHub
- [ ] GitHub Pages attivato
- [ ] Sito online verificato
- [ ] Testato su mobile
- [ ] Condiviso sui social
- [ ] Google Search Console configurato (opzionale)
- [ ] Analytics configurato (opzionale)

---

## 🎉 CONGRATULAZIONI!

Il tuo sito Mario Vetere è ORA ONLINE e accessibile in tutto il mondo! 🌍

**URL Sito**: `https://casellado.github.io/MarioVeteresitoweb/`

---

**Data Guida**: 08/11/2025  
**Versione**: 1.0  
**By**: Full Stack Developer Senior

