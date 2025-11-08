# 🤖 SETUP AUTOMAZIONI N8N + OLLAMA

## 📁 STRUTTURA PROGETTO

```
/home/casella-dogano/Scrivania/
│
├── SitoWebMarioVetere/              ← FRONTEND (current)
│   ├── index.html
│   ├── assets/
│   └── ...
│
└── MarioVetereAutomation/           ← BACKEND AUTOMAZIONI (new)
    │
    ├── docker-compose.yml           ← Orchestrazione servizi
    │
    ├── n8n/
    │   ├── workflows/               ← Workflow JSON
    │   │   ├── 01-social-post.json
    │   │   ├── 02-email-responder.json
    │   │   ├── 03-lead-manager.json
    │   │   └── 04-newsletter.json
    │   │
    │   └── credentials/             ← Credenziali (NON su Git!)
    │       ├── instagram.json
    │       ├── facebook.json
    │       └── emailjs.json
    │
    ├── ollama/
    │   ├── prompts/                 ← Prompt templates
    │   │   ├── social-post-it.txt
    │   │   ├── social-post-en.txt
    │   │   ├── email-response.txt
    │   │   └── artwork-description.txt
    │   │
    │   └── models/                  ← Modelli custom fine-tuned
    │       └── mario-vetere-art/
    │
    ├── data/
    │   ├── leads.json               ← CRM semplice
    │   ├── posts-history.json       ← Storico post
    │   ├── analytics.json           ← Metriche
    │   └── subscribers.json         ← Newsletter list
    │
    ├── scripts/
    │   ├── sync-artworks.sh         ← Sync opere da frontend
    │   ├── backup-data.sh           ← Backup automatico
    │   ├── test-ollama.sh           ← Test prompt Ollama
    │   └── deploy.sh                ← Deploy automazioni
    │
    ├── logs/
    │   ├── n8n.log
    │   ├── ollama.log
    │   └── errors.log
    │
    ├── .env                         ← Variabili ambiente
    ├── .gitignore
    └── README.md
```

---

## 🚀 INSTALLAZIONE STEP-BY-STEP

### STEP 1: Verifica Requisiti Sistema

```bash
# Verifica Python3 (per script sync)
python3 --version
# Required: >= 3.8

# Verifica spazio disco
df -h
# Required: Almeno 10GB liberi

# Verifica RAM
free -h
# Recommended: Almeno 8GB (Ollama usa ~4GB)
```

---

### STEP 2: Installa Docker

```bash
# Aggiorna sistema
sudo apt update && sudo apt upgrade -y

# Installa Docker
sudo apt install docker.io docker-compose -y

# Aggiungi utente al gruppo docker
sudo usermod -aG docker $USER

# Ricarica gruppo (o logout/login)
newgrp docker

# Verifica installazione
docker --version
docker-compose --version

# Test Docker
docker run hello-world
```

**Output atteso:**
```
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

---

### STEP 3: Crea Struttura Progetto

```bash
# Crea directory principale
mkdir -p /home/casella-dogano/Scrivania/MarioVetereAutomation
cd /home/casella-dogano/Scrivania/MarioVetereAutomation

# Crea sotto-directory
mkdir -p n8n/workflows n8n/credentials
mkdir -p ollama/prompts ollama/models
mkdir -p data logs scripts

# Crea file vuoti
touch docker-compose.yml .env .gitignore README.md

# Verifica struttura
tree -L 2
```

---

### STEP 4: Installa Ollama

```bash
# Download e installa Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Verifica installazione
ollama --version

# Avvia servizio Ollama
ollama serve &

# Scarica modello Llama 3.2 (1.5GB download)
ollama pull llama3.2

# Test modello
ollama run llama3.2 "Ciao, sono Mario Vetere, artista contemporaneo"
```

**Output atteso:**
```
Ciao Mario! È un piacere conoscerti. Come artista contemporaneo, 
quale tecnica o stile caratterizza la tua arte?
```

**Per uscire:** Digita `/bye`

---

### STEP 5: Configura Docker Compose

```bash
cd /home/casella-dogano/Scrivania/MarioVetereAutomation

# Crea docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  # N8N - Automation Platform
  n8n:
    image: n8nio/n8n:latest
    container_name: mario-vetere-n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=${N8N_USER:-mario}
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD:-vetere2025}
      - N8N_HOST=${N8N_HOST:-localhost}
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - WEBHOOK_URL=http://localhost:5678/
      - GENERIC_TIMEZONE=Europe/Rome
      - N8N_LOG_LEVEL=info
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=${POSTGRES_DB:-n8n}
      - DB_POSTGRESDB_USER=${POSTGRES_USER:-n8n}
      - DB_POSTGRESDB_PASSWORD=${POSTGRES_PASSWORD:-n8n2025}
    volumes:
      - ./n8n:/home/node/.n8n
      - ./logs:/logs
    depends_on:
      - postgres
    networks:
      - mario-vetere-net

  # PostgreSQL - Database per N8N
  postgres:
    image: postgres:15-alpine
    container_name: mario-vetere-db
    restart: unless-stopped
    environment:
      - POSTGRES_USER=${POSTGRES_USER:-n8n}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-n8n2025}
      - POSTGRES_DB=${POSTGRES_DB:-n8n}
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - mario-vetere-net

  # Redis - Cache (opzionale, per performance)
  redis:
    image: redis:7-alpine
    container_name: mario-vetere-redis
    restart: unless-stopped
    networks:
      - mario-vetere-net

volumes:
  postgres-data:

networks:
  mario-vetere-net:
    driver: bridge
EOF

echo "✅ docker-compose.yml creato!"
```

---

### STEP 6: Configura Variabili Ambiente

```bash
# Crea file .env
cat > .env << 'EOF'
# N8N Configuration
N8N_USER=mario
N8N_PASSWORD=vetere2025_CHANGE_ME
N8N_HOST=localhost

# PostgreSQL Configuration
POSTGRES_USER=n8n
POSTGRES_PASSWORD=n8n_db_2025_CHANGE_ME
POSTGRES_DB=n8n

# Ollama Configuration
OLLAMA_HOST=http://localhost:11434
OLLAMA_MODEL=llama3.2

# Social Media (Aggiungi dopo)
INSTAGRAM_ACCESS_TOKEN=your_token_here
FACEBOOK_PAGE_TOKEN=your_token_here

# EmailJS
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# Paths
FRONTEND_PATH=/home/casella-dogano/Scrivania/SitoWebMarioVetere
ARTWORKS_JSON=/home/casella-dogano/Scrivania/SitoWebMarioVetere/assets/data/artworks.json
EOF

echo "⚠️  IMPORTANTE: Cambia le password in .env!"
```

---

### STEP 7: Configura .gitignore

```bash
cat > .gitignore << 'EOF'
# Environment
.env
*.env

# Credentials (IMPORTANTE!)
n8n/credentials/
*.json.credentials

# Data sensibili
data/leads.json
data/subscribers.json

# Logs
logs/*.log
*.log

# Docker
postgres-data/

# Ollama models (troppo grandi)
ollama/models/

# Backup
*.backup
*.bak

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
EOF

echo "✅ .gitignore creato!"
```

---

### STEP 8: Avvia Servizi

```bash
# Avvia Docker Compose
docker-compose up -d

# Verifica status
docker-compose ps

# Dovresti vedere:
# mario-vetere-n8n    running   5678/tcp
# mario-vetere-db     running   5432/tcp
# mario-vetere-redis  running   6379/tcp

# Verifica logs
docker-compose logs -f n8n

# Aspetta messaggio:
# "Editor is now accessible via:"
# "http://localhost:5678/"
```

**Accesso N8N:**
- URL: http://localhost:5678
- User: `mario`
- Pass: `vetere2025` (o quello che hai impostato in .env)

---

## 🎨 USE CASE 1: GENERATORE POST SOCIAL

### Prompt Ollama per Social Post

```bash
# Crea prompt template
cat > ollama/prompts/social-post-it.txt << 'EOF'
Sei un social media manager per Mario Vetere, artista contemporaneo italiano.

CONTESTO:
- Artista: Mario Vetere
- Tecnica: #negativoèpositivo® (arte dipinta in negativo, rivelata in positivo)
- Stile comunicazione: Professionale ma accessibile, educativo, coinvolgente
- Target: Appassionati d'arte, collezionisti, gallerie

TASK:
Genera un post Instagram/Facebook per promuovere un'opera d'arte.

INPUT:
- Titolo opera: {title}
- Descrizione: {description}
- Prezzo: {price}
- Dimensioni: {dimensions}
- Disponibilità: {availability}

REQUISITI:
1. Testo principale: Max 150 caratteri, accattivante
2. Spiegazione breve tecnica (50-80 caratteri)
3. Call-to-action
4. 5 hashtag rilevanti
5. 2 emoji pertinenti

OUTPUT (formato JSON):
{
  "caption": "Testo post principale...",
  "description": "Descrizione tecnica...",
  "cta": "Call to action...",
  "hashtags": ["#arte", "#contemporanea", "#negativoepositivo", "#mariovetere", "#artecollezionismo"],
  "emoji": "🎨✨"
}

ESEMPIO:
Opera: "Luce e Ombra" - 50x70cm - €1.500 - Disponibile

OUTPUT:
{
  "caption": "🎨 'Luce e Ombra' - Quando il negativo rivela il positivo. Una danza tra ciò che appare e ciò che si svela.",
  "description": "Dipinta in negativo, questa opera di 50x70cm si trasforma quando la luce la attraversa, rivelando colori e profondità nascoste. La tecnica #negativoèpositivo® brevettata crea un'esperienza visiva unica.",
  "cta": "💫 Disponibile ora. Link in bio per scoprire di più.",
  "hashtags": ["#mariovetere", "#negativoepositivo", "#artecontemporanea", "#artecollezionismo", "#arteitalia"],
  "emoji": "🎨✨"
}

Ora genera per:
Titolo: {title}
Descrizione: {description}
Prezzo: {price}
EOF

echo "✅ Prompt social-post-it.txt creato!"
```

---

### Workflow N8N: Post Social Automatico

**Creazione manuale in N8N UI:**

1. Apri http://localhost:5678
2. Login (mario / vetere2025)
3. Clicca **"New Workflow"**
4. Rinomina: "Social Post Generator"

**Nodi da aggiungere:**

```
1. SCHEDULE TRIGGER
   - Trigger Type: Cron
   - Cron Expression: 0 10 * * 1
   - (Ogni lunedì ore 10:00)

2. READ FILE
   - File Path: /path/to/artworks.json
   - (Legge opere disponibili)

3. SPLIT OUT
   - (Divide array opere in singoli item)

4. FILTER
   - Condition: {{$json.available}} = true
   - (Solo opere disponibili)

5. HTTP REQUEST (Ollama)
   - Method: POST
   - URL: http://host.docker.internal:11434/api/generate
   - Body:
     {
       "model": "llama3.2",
       "prompt": "{{$json.prompt_template}}",
       "stream": false
     }

6. CODE
   - (Parsing risposta Ollama → JSON)
   - JavaScript:
     const response = JSON.parse($input.item.json.response);
     return { caption: response.caption, hashtags: response.hashtags };

7. HTTP REQUEST (Instagram API)
   - Method: POST
   - URL: https://graph.instagram.com/v18.0/me/media
   - Body:
     {
       "image_url": "{{$json.image_url}}",
       "caption": "{{$json.caption}}"
     }

8. SET
   - (Salva analytics)
   - Fields:
     posted_at: {{$now}}
     platform: "instagram"
     artwork_id: {{$json.id}}
```

**Salva workflow:** Clicca "Save" (Ctrl+S)

---

## 🎨 USE CASE 2: RISPOSTA EMAIL AUTOMATICA

### Prompt Email Response

```bash
cat > ollama/prompts/email-response.txt << 'EOF'
Sei l'assistente personale di Mario Vetere, artista contemporaneo.

TASK: Rispondere a email ricevute tramite form contatti.

TONE: Professionale, cordiale, competente

CLASSIFICAZIONE EMAIL:
1. INFO_OPERA - Richiesta info su opera specifica
2. VISITA_STUDIO - Richiesta visita studio
3. ACQUISTO - Interesse acquisto
4. COLLABORAZIONE - Proposta collaborazione
5. STAMPA - Intervista/articolo
6. ALTRO - Messaggio generico

INPUT:
Nome: {name}
Email: {email}
Messaggio: {message}

OUTPUT (JSON):
{
  "classification": "INFO_OPERA|VISITA_STUDIO|ACQUISTO|etc",
  "response": "Testo risposta email...",
  "priority": "high|medium|low",
  "action_required": "yes|no",
  "suggested_actions": ["Azione 1", "Azione 2"]
}

ESEMPI:

INPUT:
Nome: Marco Rossi
Email: marco@example.com
Messaggio: "Salve, vorrei sapere se l'opera 'Luce e Ombra' è ancora disponibile e il prezzo."

OUTPUT:
{
  "classification": "INFO_OPERA",
  "response": "Gentile Marco,\n\nGrazie per il suo interesse nell'opera 'Luce e Ombra'.\n\nL'opera è attualmente disponibile al prezzo di €1.500.\n\nDimensioni: 50x70cm\nTecnica: Crete colorate su cartoncino\nRealizzata con la tecnica brevettata #negativoèpositivo®\n\nSe desidera maggiori informazioni o fissare un appuntamento per vederla di persona, sono a sua disposizione.\n\nCordiali saluti,\nAssistente di Mario Vetere",
  "priority": "high",
  "action_required": "yes",
  "suggested_actions": [
    "Invia foto dettagliate opera",
    "Proponi appuntamento studio",
    "Allega certificato autenticità"
  ]
}

Ora rispondi a:
Nome: {name}
Email: {email}
Messaggio: {message}
EOF
```

---

## 📊 USE CASE 3: ANALYTICS DASHBOARD

### Script Python: Genera Report Analytics

```bash
cat > scripts/analytics-report.py << 'EOF'
#!/usr/bin/env python3
"""
Analytics Report Generator
Genera report settimanale delle metriche
"""

import json
from datetime import datetime, timedelta

def load_data():
    with open('data/analytics.json', 'r') as f:
        return json.load(f)

def generate_report():
    data = load_data()
    week_ago = datetime.now() - timedelta(days=7)
    
    report = {
        "period": f"{week_ago.strftime('%d/%m/%Y')} - {datetime.now().strftime('%d/%m/%Y')}",
        "website": {
            "visits": data.get('visits', 0),
            "unique_visitors": data.get('unique', 0),
            "pages_per_visit": data.get('pages_avg', 0)
        },
        "social": {
            "posts_published": data.get('posts', 0),
            "total_likes": data.get('likes', 0),
            "total_comments": data.get('comments', 0),
            "new_followers": data.get('followers_new', 0)
        },
        "leads": {
            "new_contacts": data.get('contacts', 0),
            "quote_requests": data.get('quotes', 0),
            "studio_visit_requests": data.get('visits_studio', 0)
        }
    }
    
    # Salva report
    with open(f'logs/report-{datetime.now().strftime("%Y%m%d")}.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print("✅ Report generato!")
    print(json.dumps(report, indent=2))

if __name__ == "__main__":
    generate_report()
EOF

chmod +x scripts/analytics-report.py
```

---

## 🔄 SCRIPT SYNC ARTWORKS

### Sincronizza opere da frontend a backend

```bash
cat > scripts/sync-artworks.sh << 'EOF'
#!/bin/bash
# Sync artworks.json da frontend a backend automazioni

FRONTEND_PATH="/home/casella-dogano/Scrivania/SitoWebMarioVetere"
BACKEND_PATH="/home/casella-dogano/Scrivania/MarioVetereAutomation"

echo "🔄 Syncing artworks.json..."

# Copia file
cp "$FRONTEND_PATH/assets/data/artworks.json" "$BACKEND_PATH/data/artworks.json"

# Verifica
if [ $? -eq 0 ]; then
    echo "✅ Sync completato!"
    echo "📊 Opere sincronizzate:"
    jq '.length' "$BACKEND_PATH/data/artworks.json"
else
    echo "❌ Errore durante sync"
    exit 1
fi
EOF

chmod +x scripts/sync-artworks.sh
```

**Uso:**
```bash
cd /home/casella-dogano/Scrivania/MarioVetereAutomation
./scripts/sync-artworks.sh
```

---

## 📋 CHECKLIST SETUP COMPLETO

```markdown
## Setup N8N + Ollama

### Installazione Base
- [ ] Docker installato
- [ ] Docker Compose installato
- [ ] Ollama installato
- [ ] Llama 3.2 scaricato

### Struttura Progetto
- [ ] Directory MarioVetereAutomation creata
- [ ] Sotto-directory create (n8n, ollama, data, logs, scripts)
- [ ] docker-compose.yml configurato
- [ ] .env configurato (password cambiate!)
- [ ] .gitignore creato

### Servizi
- [ ] N8N avviato (http://localhost:5678)
- [ ] PostgreSQL avviato
- [ ] Redis avviato (opzionale)
- [ ] Ollama serve running

### Test
- [ ] N8N accessible via browser
- [ ] Ollama risponde a test prompt
- [ ] Workflow test creato e funzionante

### Prompts
- [ ] social-post-it.txt
- [ ] email-response.txt
- [ ] artwork-description.txt

### Scripts
- [ ] sync-artworks.sh
- [ ] analytics-report.py

✅ SETUP COMPLETO!
```

---

## 🎯 PROSSIMI STEP

### Immediati (Post-Setup):
1. Configura credenziali social in N8N
2. Crea primo workflow "Hello World"
3. Test Ollama con prompt social
4. Sync artworks da frontend

### Settimana 1:
1. Workflow post social automatico
2. Workflow risposta email
3. Test intensivo

### Settimana 2-4:
1. Lead management system
2. Newsletter automation
3. Analytics dashboard

---

## 📞 COMANDI UTILI

### Docker Compose
```bash
# Avvia servizi
docker-compose up -d

# Ferma servizi
docker-compose down

# Vedi logs
docker-compose logs -f n8n

# Restart servizio
docker-compose restart n8n

# Ricostruisci (dopo cambio config)
docker-compose up -d --build
```

### Ollama
```bash
# Avvia servizio
ollama serve

# Lista modelli
ollama list

# Scarica modello
ollama pull llama3.2

# Test modello
ollama run llama3.2 "Test prompt"

# Stop servizio
pkill ollama
```

### N8N
```bash
# Export workflow
docker exec mario-vetere-n8n n8n export:workflow --id=<workflow_id> --output=/data/export.json

# Import workflow
docker exec mario-vetere-n8n n8n import:workflow --input=/data/workflow.json

# List workflows
docker exec mario-vetere-n8n n8n list:workflow
```

---

**Data Guida:** 08/11/2025  
**Versione:** 1.0  
**Status:** 🚀 READY TO SETUP

