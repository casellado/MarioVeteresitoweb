# 🚀 ATTIVAZIONE GITHUB PAGES - GUIDA RAPIDA

## ✅ STEP-BY-STEP (5 minuti)

### **1. Vai nelle Impostazioni GitHub**

Apri nel browser:
```
https://github.com/casellado/MarioVeteresitoweb/settings/pages
```

---

### **2. Configura il Source**

Nella sezione **"Build and deployment"**:

1. **Source**: Seleziona `Deploy from a branch`
2. **Branch**: 
   - Seleziona `main`
   - Seleziona `/ (root)`
3. Clicca **"Save"**

![GitHub Pages Settings](https://docs.github.com/assets/cb-48015/images/help/pages/publishing-source-drop-down.png)

---

### **3. Attendi il Deploy**

⏱️ GitHub Pages impiegherà **1-2 minuti** per fare il primo deploy.

Vedrai un messaggio:
```
✅ Your site is live at https://casellado.github.io/MarioVeteresitoweb/
```

---

### **4. Verifica che Funzioni**

Apri nel browser:
```
https://casellado.github.io/MarioVeteresitoweb/
```

**✅ Controlla:**
- [ ] Homepage si carica
- [ ] Navbar funziona
- [ ] Cambio lingua funziona (IT/EN/DE/FR/ES)
- [ ] Tutte le pagine accessibili
- [ ] CSS e immagini caricano

---

## 🔧 Configurazione Avanzata (Opzionale)

### **A. Custom Domain (se hai mariovetere.art)**

1. Nel file GitHub Pages settings, aggiungi **Custom domain**:
   ```
   mariovetere.art
   ```

2. Nel tuo provider DNS (es. GoDaddy, Aruba), aggiungi:
   ```
   Type: CNAME
   Name: www
   Value: casellado.github.io
   ```
   
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. ✅ Abilita **"Enforce HTTPS"** su GitHub Pages

---

### **B. Deploy Automatico su ogni Push**

**È già attivo!** Ogni volta che fai:
```bash
git push origin main
```

GitHub Pages si aggiorna automaticamente in **1-2 minuti**.

---

## 🎯 Workflow Quotidiano

### **Per testare modifiche:**

```bash
# 1. Modifica file localmente
code index.html  # o qualsiasi file

# 2. Test locale
python3 -m http.server 8000
# Apri http://localhost:8000

# 3. Se tutto ok, commit e push
git add .
git commit -m "fix: descrizione modifica"
git push origin main

# 4. Attendi 1-2 minuti

# 5. Testa su staging
# Apri https://casellado.github.io/MarioVeteresitoweb/
```

---

## ❌ Troubleshooting

### **Problema: Il sito non si carica**

1. Verifica che GitHub Pages sia attivo:
   https://github.com/casellado/MarioVeteresitoweb/settings/pages

2. Controlla lo stato del deploy:
   https://github.com/casellado/MarioVeteresitoweb/actions

3. Se vedi errori, guarda i log del workflow

### **Problema: CSS/JS non caricano**

Verifica che i path nei file HTML siano **relativi**, non assoluti:

❌ **Sbagliato:**
```html
<link rel="stylesheet" href="/main.css">
```

✅ **Corretto:**
```html
<link rel="stylesheet" href="main.css">
```

### **Problema: Immagini non si vedono**

Verifica che le immagini siano committate su Git:
```bash
git add assets/images/
git commit -m "Add images"
git push origin main
```

---

## 📊 Monitor Deploy

Ogni push attiva un workflow visibile qui:
```
https://github.com/casellado/MarioVeteresitoweb/actions
```

Vedrai:
- ✅ Verde = Deploy riuscito
- ❌ Rosso = Deploy fallito (controlla log)
- 🟡 Giallo = Deploy in corso

---

## 🎉 FATTO!

Ora hai:
- ✅ Sito di staging pubblico
- ✅ Deploy automatico su ogni push
- ✅ Ambiente di test prima della produzione

**Next Step:**
Quando staging è perfetto, segui la **GUIDA-STAGING-PRODUZIONE.md** per il deploy su `mariovetere.art`

---

**Creato:** 08/11/2025  
**Versione:** 1.0  
**Status:** ✅ Pronto

