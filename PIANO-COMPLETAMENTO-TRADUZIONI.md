# 🌍 PIANO COMPLETAMENTO TRADUZIONI + TEST + AUTOMAZIONI

## 📊 STATO ATTUALE TRADUZIONI

### ✅ PAGINE COMPLETE (100%):
- [x] **index.html** - Homepage (100%)
- [x] **opere.html** - Galleria opere (100%)
- [x] **opera-single.html** - Dettaglio opera (100%)
- [x] **tecnica.html** - Tecnica brevettata (100%)

### 🟡 PAGINE DA COMPLETARE:
- [ ] **chi-sono.html** - Chi sono / About (0%)
- [ ] **contatti.html** - Contatti / Contact (0%)
- [ ] **checkout.html** - Checkout Stripe (0%)
- [ ] **success.html** - Pagamento successo (0%)
- [ ] **privacy-policy.html** - Privacy Policy (0%)
- [ ] **cookie-policy.html** - Cookie Policy (0%)

### 📈 PROGRESSO TOTALE: 40% (4/10 pagine)

---

## 🎯 ROADMAP COMPLETAMENTO

### FASE 1: Chi Sono (2-3 ore)
**Elementi da tradurre:**
- [ ] Hero biography section
- [ ] Timeline eventi (5-7 milestone)
- [ ] Studio gallery descriptions
- [ ] Achievements cards
- [ ] Quote dell'artista
- [ ] CTA finale

**Stima:** ~40 chiavi traduzione

---

### FASE 2: Contatti (1-2 ore)
**Elementi da tradurre:**
- [ ] Hero title + description
- [ ] Form labels (Nome, Email, Messaggio)
- [ ] Form placeholders
- [ ] Button "Invia Messaggio"
- [ ] Contact info cards
- [ ] Google Maps info
- [ ] FAQ section (5-6 domande)

**Stima:** ~30 chiavi traduzione

---

### FASE 3: Checkout + Success (1 ora)
**Elementi da tradurre:**
- [ ] Checkout form labels
- [ ] Order summary
- [ ] Shipping info
- [ ] Payment method labels
- [ ] Success page messages
- [ ] Next steps / CTA

**Stima:** ~25 chiavi traduzione

---

### FASE 4: Privacy + Cookie (1 ora)
**Elementi da tradurre:**
- [ ] Privacy Policy sections (12 sezioni)
- [ ] Cookie Policy sections (8 sezioni)
- [ ] GDPR terms
- [ ] Contact privacy info

**Stima:** ~50 chiavi traduzione

---

## ⏱️ STIMA TOTALE

| Fase | Tempo | Chiavi | Lingue | Totale Traduzioni |
|------|-------|--------|--------|-------------------|
| Chi Sono | 2-3h | 40 | 4 | 160 traduzioni |
| Contatti | 1-2h | 30 | 4 | 120 traduzioni |
| Checkout | 1h | 25 | 4 | 100 traduzioni |
| Privacy | 1h | 50 | 4 | 200 traduzioni |
| **TOTALE** | **5-7h** | **145** | **4** | **580 traduzioni** |

*Lingue da tradurre: EN, DE, FR, ES (IT già presente)*

---

## 🧪 TEST IN LOCALE

### Setup Attuale (Già Funzionante):

```bash
# Server locale
cd /home/casella-dogano/Scrivania/SitoWebMarioVetere
python3 -m http.server 8000

# Accesso
http://localhost:8000
```

### Test Checklist Per Ogni Pagina:

```markdown
## Test Traduzioni Pagina: [NOME_PAGINA]

### 1. Caricamento i18n
- [ ] Sistema i18n si carica senza errori
- [ ] Lingua default (IT) applicata
- [ ] Console senza errori

### 2. Test Lingue (per ogni lingua: EN, DE, FR, ES)
- [ ] Selettore lingua funziona
- [ ] Tutti i testi cambiano lingua
- [ ] Placeholder input tradotti
- [ ] Alt text immagini tradotti
- [ ] Button e CTA tradotti
- [ ] Footer tradotto
- [ ] Nessun testo IT residuo

### 3. Test Responsive
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Testi non overflow
- [ ] Layout non rompe

### 4. Test Persistenza
- [ ] Cambio lingua → Ricarica → Lingua mantenuta
- [ ] localStorage.preferredLanguage corretto
- [ ] Navigazione tra pagine → Lingua consistente

### 5. Test Performance
- [ ] Cambio lingua < 200ms
- [ ] Nessun flickering testi
- [ ] Smooth transition

✅ PAGINA APPROVATA
```

---

## 🤖 FASE 2: INTEGRAZIONE N8N + OLLAMA (FUTURO)

### Architettura Progetto Completa:

```
/home/casella-dogano/Scrivania/
├── SitoWebMarioVetere/          ← Frontend (attuale)
│   ├── index.html
│   ├── assets/
│   └── ...
│
└── MarioVetereAutomation/       ← Backend Automazioni (nuovo)
    ├── n8n/
    │   ├── workflows/
    │   │   ├── social-post-generator.json
    │   │   ├── email-responder.json
    │   │   ├── lead-manager.json
    │   │   └── content-scheduler.json
    │   └── credentials/
    │
    ├── ollama/
    │   ├── models/
    │   │   └── llama3.2/
    │   ├── prompts/
    │   │   ├── social-post.txt
    │   │   ├── email-response.txt
    │   │   └── artwork-description.txt
    │   └── config/
    │
    ├── data/
    │   ├── leads.json
    │   ├── posts.json
    │   └── analytics.json
    │
    ├── scripts/
    │   ├── sync-artworks.sh
    │   └── backup-data.sh
    │
    └── docker-compose.yml
```

---

## 🚀 SETUP N8N + OLLAMA (Step-by-Step)

### STEP 1: Installazione Docker

```bash
# Installa Docker (se non presente)
sudo apt update
sudo apt install docker.io docker-compose -y

# Aggiungi utente al gruppo docker
sudo usermod -aG docker $USER
newgrp docker

# Verifica
docker --version
docker-compose --version
```

---

### STEP 2: Setup Ollama

```bash
# Crea directory progetto
mkdir -p /home/casella-dogano/Scrivania/MarioVetereAutomation
cd /home/casella-dogano/Scrivania/MarioVetereAutomation

# Installa Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Scarica modello Llama 3.2
ollama pull llama3.2

# Test rapido
ollama run llama3.2 "Ciao, sono un assistente per Mario Vetere Art"
```

---

### STEP 3: Setup N8N con Docker

```bash
# Crea docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: mario-vetere-n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=mario
      - N8N_BASIC_AUTH_PASSWORD=vetere2025
      - N8N_HOST=localhost
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - WEBHOOK_URL=http://localhost:5678/
      - GENERIC_TIMEZONE=Europe/Rome
    volumes:
      - ./n8n-data:/home/node/.n8n
    restart: unless-stopped

  postgres:
    image: postgres:15
    container_name: mario-vetere-db
    environment:
      - POSTGRES_USER=n8n
      - POSTGRES_PASSWORD=n8n2025
      - POSTGRES_DB=n8n
    volumes:
      - ./postgres-data:/var/lib/postgresql/data
    restart: unless-stopped

networks:
  default:
    name: mario-vetere-network
EOF

# Avvia N8N
docker-compose up -d

# Verifica stato
docker-compose ps

# Accedi a N8N
echo "✅ N8N disponibile su: http://localhost:5678"
echo "   User: mario"
echo "   Pass: vetere2025"
```

---

## 🎨 USE CASES AUTOMAZIONI

### 1. **Generazione Post Social Automatici**

**Workflow N8N:**
```
Trigger (Schedule: ogni lunedì 10:00)
  ↓
Fetch artworks da assets/data/artworks.json
  ↓
Ollama 3.2: Genera descrizione accattivante
  ↓
Genera immagine preview (o usa esistente)
  ↓
Post su Instagram API
  ↓
Post su Facebook API
  ↓
Salva analytics
```

**Prompt Ollama (esempio):**
```
Sei un copywriter esperto per un artista contemporaneo.
Opera: {title}
Tecnica: negativoèpositivo®
Descrizione breve: {description}

Genera un post Instagram accattivante (max 150 caratteri) che:
- Catturi l'attenzione
- Spieghi brevemente la tecnica
- Includa 3-5 hashtag rilevanti
- Sia in italiano

Output:
```

---

### 2. **Risposte Automatiche Email/Contatti**

**Workflow N8N:**
```
Trigger (Webhook da form contatti)
  ↓
Analizza messaggio con Ollama
  ↓
Classifica: info_opera | visita_studio | acquisto | altro
  ↓
Genera risposta personalizzata (Ollama)
  ↓
Invia email via EmailJS/SMTP
  ↓
Salva lead in CRM (Google Sheets / JSON)
  ↓
Notifica Telegram/WhatsApp all'artista
```

---

### 3. **Generatore Descrizioni Opere**

**Workflow N8N:**
```
Trigger (Manuale / Upload nuova opera)
  ↓
Analizza immagine opera
  ↓
Ollama: Genera descrizione artistica
  ↓
Ollama: Traduci in EN, DE, FR, ES
  ↓
Salva in artworks.json
  ↓
Aggiorna sito automaticamente
```

---

### 4. **Newsletter Automatica Mensile**

**Workflow N8N:**
```
Trigger (1° di ogni mese, ore 9:00)
  ↓
Raccoglie: nuove opere + eventi + news
  ↓
Ollama: Genera testo newsletter
  ↓
Template HTML
  ↓
Invia a lista subscribers
  ↓
Analytics aperture/click
```

---

### 5. **Monitoraggio Menzioni Social**

**Workflow N8N:**
```
Trigger (ogni ora)
  ↓
Cerca menzioni "Mario Vetere" / "@mario_vetere_art"
  ↓
Ollama: Analizza sentiment
  ↓
Se positivo → Like automatico
  ↓
Se domanda → Genera risposta (Ollama)
  ↓
Notifica artista per approvazione
```

---

## 📁 STRUTTURA FILE AUTOMAZIONI

### 1. Prompts Ollama

`ollama/prompts/social-post.txt`:
```
Sei un social media manager per Mario Vetere, artista contemporaneo italiano.

TECNICA: #negativoèpositivo® - arte dipinta in negativo, rivelata in positivo
STILE: Moderno, accattivante, educativo
TONE: Professionale ma accessibile

TASK: Genera post social per opera d'arte
CONSTRAINTS:
- Max 150 caratteri
- Include 3-5 hashtag
- Lingua: {language}
- Emoji: 1-2 pertinenti

INPUT:
Titolo: {title}
Descrizione: {description}
Prezzo: {price}

OUTPUT (JSON):
{
  "text": "...",
  "hashtags": ["#arte", "#contemporanea", ...],
  "emoji": "🎨"
}
```

---

### 2. Workflow N8N (JSON)

`n8n/workflows/social-post-generator.json`:
```json
{
  "name": "Social Post Generator",
  "nodes": [
    {
      "name": "Schedule",
      "type": "n8n-nodes-base.schedule",
      "position": [250, 300],
      "parameters": {
        "rule": {
          "interval": [{"field": "weeks", "value": 1}]
        }
      }
    },
    {
      "name": "Read Artworks",
      "type": "n8n-nodes-base.readFile",
      "position": [450, 300],
      "parameters": {
        "filePath": "/path/to/artworks.json"
      }
    },
    {
      "name": "Ollama Generate",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 300],
      "parameters": {
        "url": "http://localhost:11434/api/generate",
        "method": "POST",
        "body": {
          "model": "llama3.2",
          "prompt": "{{$json.prompt}}"
        }
      }
    }
  ]
}
```

---

## 🔄 INTEGRAZIONE FRONTEND ↔ AUTOMAZIONI

### API Bridge (Opzionale - Per Dati Real-Time)

`MarioVetereAutomation/api/bridge.js` (Node.js semplice):
```javascript
const express = require('express');
const app = express();

// CORS per permettere frontend di chiamare API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint: Nuove opere da mostrare su sito
app.get('/api/artworks/latest', (req, res) => {
  const artworks = require('../data/artworks.json');
  res.json(artworks.slice(0, 5));
});

// Endpoint: Stats per dashboard
app.get('/api/stats', (req, res) => {
  res.json({
    views: 1234,
    leads: 56,
    posts: 78
  });
});

app.listen(3000, () => {
  console.log('API Bridge on http://localhost:3000');
});
```

---

## 📋 TIMELINE SVILUPPO COMPLETA

### SETTIMANA 1: Traduzioni + Test
- **Giorno 1-2:** Chi Sono + Contatti
- **Giorno 3:** Checkout + Success
- **Giorno 4:** Privacy + Cookie
- **Giorno 5:** Test completi tutte pagine
- **Giorno 6-7:** Bug fixing + refinement

### SETTIMANA 2: Deploy + Monitoring
- **Giorno 1:** Deploy su mariovetere.art
- **Giorno 2-3:** Test produzione + SEO
- **Giorno 4-5:** Google Search Console + Analytics
- **Giorno 6-7:** Monitoring prime visite

### SETTIMANA 3-4: Setup Automazioni
- **Giorno 1-2:** Setup Docker + Ollama + N8N
- **Giorno 3-5:** Workflow social post
- **Giorno 6-7:** Workflow email responder

### MESE 2: Automazioni Avanzate
- Newsletter automation
- Lead management
- Analytics dashboard
- Content calendar automation

---

## 🎯 PRIORITÀ IMMEDIATE (OGGI/DOMANI)

### ✅ FASE 1A: Completare Traduzioni (Priorità ALTA)
1. Chi Sono
2. Contatti
3. Checkout + Success
4. Privacy + Cookie

### ✅ FASE 1B: Test Locale Completo
1. Test tutte pagine tutte lingue
2. Test mobile
3. Test performance
4. Checklist completa

### ✅ FASE 1C: Deploy
1. Git commit finale
2. Push su GitHub
3. Attiva dominio mariovetere.art
4. Test produzione

---

## 📞 NEXT STEPS

**ADESSO:**
1. Creo struttura cartella `MarioVetereAutomation`
2. Inizio traduzioni `chi-sono.html`

**Vuoi che proceda con:**
- [ ] A) Completare traduzioni (chi-sono.html per primo)
- [ ] B) Creare struttura cartella automazioni
- [ ] C) Entrambi in parallelo

**Dimmi come preferisci procedere!** 😊

---

**Data:** 08/11/2025  
**Versione:** 1.0  
**Status:** 📋 PIANO PRONTO

