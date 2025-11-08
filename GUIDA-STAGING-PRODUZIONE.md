# 🚀 GUIDA: Workflow Staging → Produzione

## 📊 Architettura del Deployment

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│  Sviluppo       │      │   GitHub Pages   │      │   Produzione    │
│  Locale         │ ───► │   (STAGING)      │ ───► │  mariovetere.art│
│  VS Code        │      │   Test Pubblico  │      │  Dominio Custom │
└─────────────────┘      └──────────────────┘      └─────────────────┘
```

---

## 🌐 URLs del Progetto

| Ambiente | URL | Scopo |
|----------|-----|-------|
| **Sviluppo** | `http://localhost:8000` | Test locale privato |
| **Staging** | `https://casellado.github.io/MarioVeteresitoweb/` | Test pubblico pre-produzione |
| **Produzione** | `https://mariovetere.art` | Sito live ufficiale |

---

## 📝 Workflow Giornaliero

### **1. Sviluppo Locale**

```bash
# Avvia server locale per test
cd /home/casella-dogano/Scrivania/SitoWebMarioVetere
python3 -m http.server 8000

# Accedi a: http://localhost:8000
```

**✅ Test da fare:**
- Tutte le funzionalità
- Traduzioni in 5 lingue
- Form contatti
- Responsive mobile
- Link interni

---

### **2. Deploy su Staging (GitHub Pages)**

Quando le modifiche locali sono pronte:

```bash
# 1. Verifica stato
git status

# 2. Aggiungi modifiche
git add .

# 3. Commit descrittivo
git commit -m "feat: descrizione modifiche"

# 4. Push su GitHub (auto-deploy su Pages)
git push origin main
```

⏱️ **Attendi 1-2 minuti** → GitHub Pages si aggiorna automaticamente

**🔗 Testa su:** `https://casellado.github.io/MarioVeteresitoweb/`

**✅ Test da fare su Staging:**
- Verifica che tutto funzioni online
- Test su dispositivi reali (smartphone, tablet)
- Condividi link con colleghi/amici per feedback
- Verifica traduzioni in tutte le lingue
- Test performance (Google PageSpeed)
- Verifica SEO (Google Search Console)

---

### **3. Deploy in Produzione (mariovetere.art)**

**Solo quando staging è perfetto!**

#### **Opzione A: Deploy Manuale (FTP/cPanel)**

1. **Scarica da GitHub:**
   ```bash
   git clone https://github.com/casellado/MarioVeteresitoweb.git
   cd MarioVeteresitoweb
   ```

2. **Upload via FTP:**
   - Host: `ftp.mariovetere.art` (o fornito dal provider)
   - Username: (fornito dal provider)
   - Password: (fornita dal provider)
   - Directory: `/public_html/` o `/www/`

3. **File da caricare:**
   ```
   index.html
   opere.html
   opera-single.html
   tecnica.html
   chi-sono.html
   contatti.html
   checkout.html
   success.html
   privacy-policy.html
   cookie-policy.html
   main.css
   app.js
   assets/ (intera cartella)
   sitemap.xml
   robots.txt
   .nojekyll
   ```

#### **Opzione B: Deploy Automatico (GitHub Actions)**

Creo un workflow automatico che deploya su produzione quando fai push su branch `production`:

```yaml
# .github/workflows/deploy-production.yml
name: Deploy to Production

on:
  push:
    branches: [ production ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: /public_html/
```

---

## 🔒 Configurazione Secrets GitHub (per deploy automatico)

1. Vai su: `https://github.com/casellado/MarioVeteresitoweb/settings/secrets/actions`
2. Clicca **"New repository secret"**
3. Aggiungi:
   - `FTP_SERVER`: `ftp.mariovetere.art`
   - `FTP_USERNAME`: tuo username FTP
   - `FTP_PASSWORD`: tua password FTP

---

## ✅ Checklist Pre-Produzione

Prima di deployare in produzione, verifica:

### **Funzionalità**
- [ ] Tutte le pagine si caricano correttamente
- [ ] Traduzioni funzionano in 5 lingue (IT/EN/DE/FR/ES)
- [ ] Form contatti invia email
- [ ] Checkout Stripe funziona (se abilitato)
- [ ] Tutte le immagini si caricano
- [ ] Link interni ed esterni funzionano

### **Mobile & Responsive**
- [ ] Test su smartphone (375px)
- [ ] Test su tablet (768px)
- [ ] Test su desktop (1920px)
- [ ] Orientamento portrait e landscape

### **Performance**
- [ ] Google PageSpeed score > 90
- [ ] Immagini ottimizzate (WebP se possibile)
- [ ] CSS/JS minimizzati
- [ ] Font precaricati

### **SEO**
- [ ] Tutti i meta title e description
- [ ] Sitemap.xml accessibile
- [ ] Robots.txt configurato
- [ ] Schema.org markup
- [ ] Open Graph tags

### **Analytics & Tracking**
- [ ] Google Analytics 4 configurato
- [ ] Google Search Console verificato
- [ ] Cookie banner GDPR funzionante

### **Sicurezza**
- [ ] HTTPS attivo (SSL)
- [ ] Form protetti da spam (reCAPTCHA)
- [ ] Headers di sicurezza configurati

---

## 🐛 Rollback Rapido (se qualcosa va storto)

### **Da Staging a Versione Precedente:**

```bash
# Torna all'ultimo commit funzionante
git log --oneline  # trova hash commit precedente

git reset --hard <hash-commit>
git push origin main --force
```

### **Da Produzione:**

1. Ricarica backup precedente via FTP
2. Oppure redeploy da commit precedente su GitHub

---

## 📊 Monitoring Post-Deploy

### **Subito dopo il deploy in produzione:**

1. **Test Funzionalità Critiche:**
   - Accedi a `https://mariovetere.art`
   - Testa form contatti
   - Testa cambio lingua
   - Testa acquisto (modalità test)

2. **Monitor Performance:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **Monitor Errori:**
   - Google Search Console (errori 404)
   - Analytics (bounce rate)
   - Log server (errori 500)

---

## 🔄 Aggiornamenti Futuri

### **Piccole Modifiche (testo, traduzioni):**
```
Sviluppo Locale → Test → Staging → Produzione
```

### **Grandi Modifiche (nuove feature):**
```
1. Crea branch: git checkout -b feature/nuova-feature
2. Sviluppa e testa localmente
3. Merge su main: git checkout main && git merge feature/nuova-feature
4. Deploy su staging (automatico)
5. Test approfonditi su staging
6. Deploy su produzione
```

---

## 🆘 Troubleshooting Comuni

### **Problema: Staging non si aggiorna**
```bash
# Forza refresh cache GitHub Pages
git commit --allow-empty -m "Empty commit to trigger rebuild"
git push origin main
```

### **Problema: Produzione mostra versione vecchia**
- Cancella cache browser (Ctrl+Shift+R)
- Verifica che FTP abbia caricato tutti i file
- Controlla permessi file sul server (644 per file, 755 per cartelle)

### **Problema: Traduzioni non funzionano online**
- Verifica che `assets/js/i18n-simple.js` sia caricato
- Controlla console browser per errori JavaScript
- Verifica path relativi dei file

---

## 📅 Manutenzione Periodica

### **Settimanale:**
- [ ] Backup completo sito
- [ ] Verifica uptime (99.9%+)
- [ ] Check Google Search Console per errori

### **Mensile:**
- [ ] Aggiornare contenuti (opere, mostre)
- [ ] Analisi statistiche Google Analytics
- [ ] Test performance e ottimizzazioni

### **Trimestrale:**
- [ ] Revisione SEO
- [ ] Aggiornamento traduzioni
- [ ] Test sicurezza (scan vulnerabilità)

---

## 🎓 Best Practices

1. **Mai deployare in produzione di venerdì sera** (se qualcosa va storto, hai il weekend per fixare)
2. **Sempre testare su staging prima di produzione**
3. **Backup prima di ogni deploy importante**
4. **Commit frequenti e descrittivi**
5. **Documentare ogni modifica importante**

---

## 📞 Contatti Supporto

- **GitHub Repo:** https://github.com/casellado/MarioVeteresitoweb
- **Staging:** https://casellado.github.io/MarioVeteresitoweb/
- **Produzione:** https://mariovetere.art
- **Email:** artmv.info@gmail.com

---

**Creato:** 08/11/2025  
**Versione:** 1.0  
**Status:** ✅ Pronto per staging

