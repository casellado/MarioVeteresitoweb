# 📱 GUIDA SETUP SOCIAL LINKS - Mario Vetere

**Data**: 2025-11-09  
**Status**: Icone aggiunte al sito ✅ | URL da configurare ⏳

---

## ✅ **COSA È STATO FATTO**

### **Icone Social Aggiunte al Sito**

**📍 Posizione**: Footer (tutte le pagine)

**7 Icone Presenti**:
1. 📸 Instagram
2. 💼 LinkedIn
3. 🐦 Twitter/X
4. 📹 YouTube
5. 👤 Facebook
6. 📧 Newsletter (Modal)
7. ✉️ Email

**Features Aggiunte**:
- ✅ Icone responsive (flex-wrap)
- ✅ Tooltip su hover (title attributes)
- ✅ Target="_blank" per apertura nuova tab
- ✅ rel="noopener" per sicurezza
- ✅ Modal Newsletter integrato
- ✅ CTA Newsletter visibile
- ✅ Pronto per traduzioni i18n

---

## ⚙️ **URL SOCIAL DA CONFIGURARE**

### **URL ATTUALMENTE NEL SITO (da aggiornare)**

```html
<!-- INSTAGRAM ✅ OK -->
<a href="https://instagram.com/mario_vetere_art">
  Status: ✅ Funzionante (se account esiste)

<!-- LINKEDIN ⏳ Da verificare/creare -->
<a href="https://www.linkedin.com/in/mario-vetere-artist">
  Status: ⏳ Placeholder - Verifica se account esiste

<!-- TWITTER/X ⏳ Da verificare/creare -->
<a href="https://twitter.com/mariovetere">
  Status: ⏳ Placeholder - Verifica se account esiste

<!-- YOUTUBE ⏳ Da creare -->
<a href="https://www.youtube.com/@mariovetere">
  Status: ⏳ Placeholder - Crea canale

<!-- FACEBOOK ⏳ Da verificare/creare -->
<a href="https://www.facebook.com/mariovetere.art">
  Status: ⏳ Placeholder - Verifica se pagina esiste

<!-- EMAIL ✅ OK -->
<a href="mailto:artmv.info@gmail.com">
  Status: ✅ Funzionante
```

---

## 📋 **CHECKLIST SETUP SOCIAL MEDIA**

### **FASE 1: Verifica Account Esistenti**

- [ ] **Instagram**: Verifica @mario_vetere_art esiste e funziona
  - URL attuale: `https://instagram.com/mario_vetere_art`
  - Se no: Crea o aggiorna link

- [ ] **Facebook**: Verifica pagina esiste
  - URL previsto: `https://www.facebook.com/mariovetere.art`
  - Se no: Crea pagina o aggiorna link

- [ ] **LinkedIn**: Verifica profilo personale/pagina aziendale
  - URL previsto: `https://www.linkedin.com/in/mario-vetere-artist`
  - Se no: Crea profilo

### **FASE 2: Crea Nuovi Account (se mancanti)**

- [ ] **Twitter/X**: Crea account @mariovetere
  - URL target: `https://twitter.com/mariovetere`
  - Alternative: `@mario_vetere_art` se @mariovetere preso
  
- [ ] **YouTube**: Crea canale
  - URL target: `https://www.youtube.com/@mariovetere`
  - Naming: "Mario Vetere - Arte Contemporanea"
  - Descrizione: Tecnica #negativoèpositivo®

### **FASE 3: Ottimizza Profili Social**

Per ogni piattaforma:

- [ ] **Bio/About**:
  - Nome: Mario Vetere
  - Tagline: "Artista Contemporaneo | Tecnica #negativoèpositivo®"
  - Location: Calabria, Italia
  - Link sito: www.mariovetere.art

- [ ] **Immagine Profilo**:
  - Usa: `assets/images/logo/logo-gold.svg` o logo-artist.svg
  - Dimensioni: 400×400px minimo
  - Formato: PNG/JPG (SVG non sempre supportato)

- [ ] **Immagine Cover** (dove applicabile):
  - Instagram: Non applicabile
  - Facebook: 820×312px
  - Twitter/X: 1500×500px
  - YouTube: 2560×1440px
  - LinkedIn: 1584×396px

- [ ] **Link Incrociati**:
  - Instagram Bio: Link al sito
  - Tutti i profili: Link incrociati ad altri social

---

## 🔄 **AGGIORNAMENTO URL NEL SITO**

### **File da Modificare**

```bash
# Homepage
/home/casella-dogano/Scrivania/SitoWebMarioVetere/index.html
  → Righe 703-723 (Footer social links)
  → Righe 186-195 (Mobile menu social links)

# Altre pagine (applicare stessi URL)
- chi-sono.html
- opere.html
- opera-single.html
- tecnica.html
- contatti.html
```

### **Come Aggiornare**

**Esempio**: Se Twitter è @mario_vetere_art invece di @mariovetere

```html
<!-- PRIMA -->
<a href="https://twitter.com/mariovetere">

<!-- DOPO -->
<a href="https://twitter.com/mario_vetere_art">
```

**Tool consigliato**:
```bash
# Search & Replace in tutti i file HTML
find . -name "*.html" -exec sed -i 's|twitter.com/mariovetere|twitter.com/mario_vetere_art|g' {} +
```

---

## 📧 **NEWSLETTER SETUP**

### **Modal Newsletter Creato ✅**

**Features**:
- Form completo (Nome, Email, Interessi)
- Checkbox consenso GDPR
- Alert success/error
- Mobile responsive

### **Backend da Configurare ⏳**

**Opzioni**:

#### **OPZIONE A: Mailchimp (Consigliato)**

**Setup**:
1. Crea account Mailchimp (free fino 500 contatti)
2. Crea audience "Mario Vetere Newsletter"
3. Ottieni Form Action URL
4. Aggiorna `index.html`:

```html
<form id="newsletterForm" 
      action="https://TUOACCOUNT.us1.list-manage.com/subscribe/post?u=XXX&id=YYY" 
      method="post">
```

**Docs**: https://mailchimp.com/help/add-a-signup-form-to-your-website/

#### **OPZIONE B: Google Forms**

**Setup**:
1. Crea Google Form
2. Ottieni link embed
3. Integra in modal

**Pro**: Gratuito, semplice  
**Contro**: Meno professionale, limitato

#### **OPZIONE C: SendGrid / ConvertKit**

**Setup**:
1. Account SendGrid/ConvertKit
2. API integration
3. Script JavaScript per invio

**Pro**: Professionale, automation  
**Contro**: Richiede coding backend

#### **OPZIONE D: N8N Automation** (Future)

**Setup**:
1. Workflow N8N cattura form submission
2. Salva contatti in Google Sheets / Database
3. Trigger email automation

**Pro**: Controllo completo, integrazione AI  
**Contro**: Richiede FASE 2 completata

---

## 🎨 **BEST PRACTICES PER PROFILI SOCIAL**

### **Naming Conventions**

**Priorità**:
1. `@mariovetere` (ideale, corto)
2. `@mario_vetere_art` (descriptive)
3. `@mariovetere_artist` (fallback)

**Da evitare**:
- Numeri (`@mariovetere123`)
- Caratteri speciali (`@mario.vetere`)
- Troppo lungo (`@mariovetereartistacontemporaneo`)

### **Bio Template Multipiattaforma**

```
🎨 Artista Contemporaneo Italiano
📍 Calabria, Italy
✨ Tecnica brevettata #negativoèpositivo®
🖼️ Opere uniche | Dipinte in negativo, rivelate in positivo
🔗 www.mariovetere.art

[Platform-specific CTA]
Instagram: 📩 DM for inquiries
LinkedIn: 💼 Open to collaborations
Twitter: 🧵 Thread su tecnica e processo
YouTube: 🎬 Subscribe per behind the scenes
Facebook: 👥 Unisciti alla community
```

### **Hashtag Strategy**

**Brand Hashtag** (usa sempre):
- #mariovetere
- #negativoèpositivo
- #negativoepositivo

**Category Hashtag** (3-5 per post):
- #artecontemporanea #contemporaryart
- #italianart #artecalabrese
- #emergingartist #artcollector

**Trending** (ricerca prima di usare):
- Varia per piattaforma
- Instagram: max 10-15 hashtag
- Twitter: max 2-3 hashtag
- LinkedIn: max 3-5 hashtag

---

## 📊 **MONITORAGGIO E ANALYTICS**

### **Metrics da Trackare**

**Per ogni piattaforma**:
- Follower/Subscriber growth (mensile)
- Engagement rate (likes, comments, shares)
- Reach / Impressions
- Click-through al sito
- DM/Inquiries ricevuti

**Tool Consigliati**:
- Google Analytics (sito web tracking)
- Meta Business Suite (Instagram + Facebook)
- LinkedIn Analytics (built-in)
- Twitter Analytics (built-in)
- YouTube Studio (built-in)

### **Google Sheets Template**

Crea tracker con colonne:
```
Data | Piattaforma | Follower | Post | Engagement | Inquiries | Note
```

---

## 🚀 **QUICK START**

### **OGGI (15 minuti)**

1. [ ] Verifica quali account social già possiedi
2. [ ] Annota URL reali
3. [ ] Aggiorna `index.html` con URL corretti

### **QUESTA SETTIMANA (2-3 ore)**

1. [ ] Crea account mancanti (Twitter, YouTube)
2. [ ] Ottimizza bio tutti i profili
3. [ ] Carica logo come profile picture
4. [ ] Setup Mailchimp per newsletter

### **PROSSIMO MESE (ongoing)**

1. [ ] Pubblica primo contenuto su ogni piattaforma
2. [ ] Cross-promote (link incrociati)
3. [ ] Monitor analytics
4. [ ] Inizia content strategy multi-piattaforma (con N8N Fase 2)

---

## 📞 **SUPPORTO**

### **Se hai dubbi**:

**URL Social**:
- Verifica disponibilità username: https://namecheckr.com
- Reserved handles: Alcuni nomi potrebbero essere protetti

**Newsletter Backend**:
- Consiglio: Inizia con Mailchimp free tier
- Alternative: Discussione con me per setup custom

**Design Assets**:
- Logo: `assets/images/logo/`
- Cover images: Posso crearle se necessario
- Social media kit: Possiamo generare con AI

---

## ✅ **CHECKLIST FINALE**

Prima di andare live:

- [ ] Tutti gli URL social sono corretti (NO placeholder)
- [ ] Newsletter backend configurato e testato
- [ ] Profili social ottimizzati (bio, logo, cover)
- [ ] Cross-linking fatto (ogni social linka agli altri)
- [ ] Analytics setup per tracking
- [ ] Test mobile: icone visibili e funzionanti
- [ ] Test desktop: icone visibili e funzionanti
- [ ] Test newsletter form: submit funziona

---

**Status Attuale**:
- ✅ Icone UI implementate
- ✅ Modal newsletter creato
- ⏳ URL da verificare/configurare
- ⏳ Account social da creare/ottimizzare
- ⏳ Newsletter backend da configurare

**Prossimo Step**: Verifica account esistenti e annota URL reali!

---

**Ultima modifica**: 2025-11-09  
**File modificati**: 
- `index.html` (footer social + newsletter modal)
- `GUIDA-SOCIAL-LINKS-SETUP.md` (questo documento)

