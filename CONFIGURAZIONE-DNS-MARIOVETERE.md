# 🌐 CONFIGURAZIONE DNS per mariovetere.art

## ✅ PREPARAZIONE COMPLETATA

Il sito è **PRONTO** per il dominio `mariovetere.art`!

File aggiornati:
- ✅ `CNAME` creato (mariovetere.art)
- ✅ `sitemap.xml` aggiornato
- ✅ `robots.txt` aggiornato
- ✅ Meta tags Open Graph aggiornati
- ✅ Schema.org structured data aggiornato

---

## 🚀 CONFIGURAZIONE DNS (Sul tuo provider)

### STEP 1: Accedi al pannello DNS

Dopo aver acquistato `mariovetere.art`, vai nel pannello di controllo DNS del provider.

---

### STEP 2: Configura i Record DNS

#### ✅ CONFIGURAZIONE COMPLETA (Raccomandato)

**A) Record A (per dominio principale)**

Crea **4 record A** per `@` (o dominio root):

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**B) Record CNAME (per www)**

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | casellado.github.io | 3600 |

---

### STEP 3: Esempio configurazione per provider comuni

#### 📘 **Namecheap**

1. Dashboard → **Domain List**
2. Clicca **"Manage"** su `mariovetere.art`
3. **Advanced DNS** tab
4. Clicca **"Add New Record"**

**Record A (ripeti 4 volte):**
```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic
```
(Ripeti per gli altri 3 IP)

**Record CNAME:**
```
Type: CNAME Record
Host: www
Value: casellado.github.io
TTL: Automatic
```

5. Salva ✅

---

#### 📗 **Aruba**

1. Pannello di controllo Aruba
2. **Domini** → Seleziona `mariovetere.art`
3. **Gestione DNS**
4. **"Aggiungi Record"**

**Record A (ripeti 4 volte):**
```
Nome: @
Tipo: A
Valore: 185.199.108.153
```

**Record CNAME:**
```
Nome: www
Tipo: CNAME
Valore: casellado.github.io
```

5. Salva modifiche ✅

---

#### 📙 **GoDaddy**

1. My Products → **DNS**
2. Clicca su `mariovetere.art`
3. Scorri fino a **Records**
4. **"Add"** button

**Record A:**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 hour
```
(Ripeti per gli altri 3 IP)

**Record CNAME:**
```
Type: CNAME
Name: www
Value: casellado.github.io
TTL: 1 hour
```

5. Save ✅

---

### STEP 4: GitHub Pages Setup

**Dopo aver configurato DNS:**

1. **Vai su GitHub**:
   ```
   https://github.com/casellado/MarioVeteresitoweb
   ```

2. **Settings** → **Pages**

3. **Custom domain**:
   - Inserisci: `mariovetere.art`
   - Clicca **"Save"**

4. **Aspetta 5-10 minuti**

5. **Abilita HTTPS** (checkbox):
   - ✅ **"Enforce HTTPS"**
   - GitHub genera automaticamente SSL/TLS certificate

---

### ⏱️ TEMPI DI PROPAGAZIONE

| Fase | Tempo |
|------|-------|
| DNS configurato | Immediato |
| Propagazione DNS | 15 minuti - 48 ore (solitamente 1-2 ore) |
| GitHub Pages rileva dominio | 5-10 minuti |
| HTTPS attivo | 10-20 minuti dopo rilevamento |

**Controlla propagazione DNS**: https://dnschecker.org/#A/mariovetere.art

---

## ✅ VERIFICA CONFIGURAZIONE

### 1. **Test DNS (dopo 1-2 ore)**

Apri terminale e digita:

```bash
dig mariovetere.art +short
```

**Risultato atteso:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 2. **Test www**

```bash
dig www.mariovetere.art +short
```

**Risultato atteso:**
```
casellado.github.io
185.199.108.153
...
```

### 3. **Test browser**

Apri browser e vai su:
- ✅ `http://mariovetere.art` → redirect a HTTPS
- ✅ `https://mariovetere.art` → Sito funzionante
- ✅ `https://www.mariovetere.art` → Sito funzionante

### 4. **Test HTTPS/SSL**

Controlla che il lucchetto 🔒 sia presente nella barra URL:
- ✅ Certificato valido
- ✅ Connessione sicura

---

## 🎯 DOPO LA CONFIGURAZIONE

### STEP 1: Google Search Console

1. **Aggiungi nuovo dominio**:
   ```
   https://www.mariovetere.art
   ```

2. **Verifica proprietà** (metodo DNS TXT o HTML file)

3. **Invia sitemap**:
   ```
   https://www.mariovetere.art/sitemap.xml
   ```

4. **Verifica vecchio dominio**:
   - In Google Search Console
   - **"Change of Address"** tool
   - Da: `casellado.github.io/MarioVeteresitoweb`
   - A: `www.mariovetere.art`

---

### STEP 2: Aggiorna Link Social

**Instagram @mario_vetere_art:**
- Bio: `🎨 www.mariovetere.art`

**Facebook:**
- Sezione "Sito web": `https://www.mariovetere.art`

**Email Firma:**
```
Mario Vetere
Artista Contemporaneo
🌐 www.mariovetere.art
📧 info@mariovetere.art (se hai email)
```

---

### STEP 3: Email Professionale (Opzionale)

Se vuoi email tipo `info@mariovetere.art`:

**Opzione 1: Google Workspace** (€5/mese)
- https://workspace.google.com
- Email professionale
- Gmail interface

**Opzione 2: Provider dominio**
- Namecheap Email (€1/mese)
- Aruba Email (incluso?)

**Opzione 3: Forwarding gratuito**
- Inoltra `info@mariovetere.art` → tua email personale
- Configurabile nel pannello DNS

---

## 🔧 TROUBLESHOOTING

### ❌ "Domain doesn't resolve" su GitHub

**Soluzione:**
- Aspetta 1-2 ore per propagazione DNS
- Controlla che i 4 record A siano corretti
- Verifica CNAME su www

### ❌ HTTPS non attivo

**Soluzione:**
- Disabilita e riabilita "Enforce HTTPS" su GitHub
- Aspetta 10-20 minuti
- Cancella cache browser (Ctrl + Shift + R)

### ❌ Sito non carica dopo 24 ore

**Soluzione:**
- Verifica DNS con `dig mariovetere.art`
- Controlla che `CNAME` file esista nel repository
- Verifica GitHub Pages Settings

### ❌ "Too many redirects"

**Soluzione:**
- Rimuovi eventuali redirect nel file `.htaccess`
- Verifica che non ci siano CNAME circolari
- Cancella cache browser e cookie

---

## 📊 MONITORING

### 1. **Uptime Monitoring** (Opzionale)

**UptimeRobot** (Gratuito):
- https://uptimerobot.com
- Monitora `www.mariovetere.art`
- Alert se sito down

### 2. **SSL Monitoring**

**SSL Labs Test**:
- https://www.ssllabs.com/ssltest/
- Inserisci `www.mariovetere.art`
- Verifica rating A/A+

### 3. **Performance**

**Google PageSpeed Insights**:
- https://pagespeed.web.dev
- Testa `https://www.mariovetere.art`
- Obiettivo: 90+ mobile, 95+ desktop

---

## 🎉 RISULTATO FINALE

Dopo configurazione completa:

| Vecchio URL | Nuovo URL |
|-------------|-----------|
| ❌ `casellado.github.io/MarioVeteresitoweb` | ✅ `www.mariovetere.art` |

**Vantaggi:**
- ✅ URL professionale e memorabile
- ✅ SEO ottimizzato ("Mario Vetere" nel dominio)
- ✅ HTTPS/SSL gratuito
- ✅ Email personalizzabile
- ✅ Credibilità professionale

---

## 📞 SUPPORTO

**GitHub Pages Custom Domain:**
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**DNS Checker:**
https://dnschecker.org

**SSL Test:**
https://www.ssllabs.com/ssltest/

**Community:**
https://github.community

---

## ✅ CHECKLIST FINALE

Stampa e completa:

### Configurazione DNS:
- [ ] 4 Record A aggiunti (185.199.108-111.153)
- [ ] Record CNAME www → casellado.github.io
- [ ] DNS salvato sul provider

### GitHub Pages:
- [ ] Custom domain impostato: mariovetere.art
- [ ] HTTPS abilitato (Enforce HTTPS ✓)
- [ ] File CNAME nel repository

### Verifica:
- [ ] `dig mariovetere.art` funziona
- [ ] https://www.mariovetere.art carica
- [ ] Certificato SSL valido (🔒)
- [ ] Redirect http → https funziona

### Post-Configurazione:
- [ ] Google Search Console aggiornato
- [ ] Sitemap inviato al nuovo dominio
- [ ] Link social aggiornati
- [ ] Email firma aggiornata

### SEO:
- [ ] Google Search Console "Change of Address"
- [ ] Social media share test
- [ ] Mobile test (https://search.google.com/test/mobile-friendly)

---

**Data Guida**: 08/11/2025  
**Dominio**: mariovetere.art  
**Hosting**: GitHub Pages  
**SSL**: Let's Encrypt (automatico)  
**Versione**: 1.0

🎉 **IL TUO SITO SARÀ SU www.mariovetere.art!** 🎨

