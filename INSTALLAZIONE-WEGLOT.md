# 🌍 OPZIONE B: Installazione Weglot (Traduzione Automatica)

## ⚡ Installazione in 5 Minuti - ZERO Codice

Se preferisci una soluzione **AUTOMATICA** che funziona subito senza complicazioni, usa **Weglot**.

---

## 🎯 STEP 1: Registrazione (2 minuti)

1. Vai su: **https://weglot.com**
2. Clicca **"Start Free Trial"**
3. Registrati (email + password)
4. Scegli **"Single Page Application"**
5. Copia la tua **API KEY** (es: `wg_abc123def456...`)

---

## 🔧 STEP 2: Installazione (3 minuti)

### Aggiungi questo codice in **TUTTE** le pagine HTML:

Apri ogni file HTML (`index.html`, `opera-single.html`, `opere.html`, ecc.) e aggiungi **PRIMA di `</head>`**:

```html
<!-- WEGLOT TRADUZIONE AUTOMATICA -->
<link rel="stylesheet" href="https://cdn.weglot.com/weglot.min.css" />
<script src="https://cdn.weglot.com/weglot.min.js"></script>
<script>
  Weglot.initialize({
    api_key: 'TUA_API_KEY_QUI', // ⚠️ SOSTITUISCI CON LA TUA!
    original_language: 'it',
    destination_languages: ['en', 'de', 'fr', 'es']
  });
</script>
```

**Esempio completo in index.html:**

```html
<!DOCTYPE html>
<html lang="it" data-bs-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- ... altri meta tags ... -->
  
  <!-- WEGLOT TRADUZIONE AUTOMATICA -->
  <link rel="stylesheet" href="https://cdn.weglot.com/weglot.min.css" />
  <script src="https://cdn.weglot.com/weglot.min.js"></script>
  <script>
    Weglot.initialize({
      api_key: 'wg_abc123...', // LA TUA API KEY
      original_language: 'it',
      destination_languages: ['en', 'de', 'fr', 'es']
    });
  </script>
  
  <!-- ... resto del head ... -->
</head>
```

---

## 🎨 STEP 3: Widget Selettore (Opzionale)

Weglot aggiunge **automaticamente** un selettore lingua in basso a destra.

Se vuoi **nascondere il tuo selettore attuale** e usare solo quello di Weglot:

```css
/* Nascondi il tuo selettore lingua */
.language-selector {
  display: none !important;
}
```

Oppure, puoi **integrare** Weglot nel tuo selettore esistente (configurazione avanzata).

---

## ✅ VANTAGGI WEGLOT

| Caratteristica | Dettaglio |
|----------------|-----------|
| **Automatico** | Traduce TUTTO senza toccare codice |
| **SEO** | URL separati per ogni lingua (es: `/en/`, `/de/`) |
| **Dashboard** | Correggi traduzioni dalla dashboard web |
| **Rilevamento** | Rileva automaticamente nuovi contenuti |
| **CDN** | Velocissimo, caricamento parallelo |
| **Supporto** | Chat live in italiano |

---

## 💰 PREZZI

| Piano | Parole | Costo/mese |
|-------|--------|------------|
| **Free** | 2.000 | Gratis |
| **Starter** | 10.000 | €9,90 |
| **Business** | 50.000 | €29,90 |
| **Pro** | 200.000 | €89,90 |

🎁 **Prova gratuita 10 giorni** per tutti i piani!

---

## 🧪 TEST IMMEDIATO

Dopo l'installazione:

1. Ricarica la pagina
2. Vedi il widget Weglot in basso a destra? ✅
3. Clicca e seleziona "English"
4. **TUTTA** la pagina si traduce in 1 secondo! 🚀

---

## 🔄 RIMOZIONE DEL VECCHIO SISTEMA

Se usi Weglot, puoi **RIMUOVERE**:

```html
<!-- RIMUOVI QUESTE RIGHE: -->
<script src="assets/js/i18n-simple.js?v=2024110801"></script>
```

E **RIMUOVI** gli attributi `data-i18n` dagli elementi HTML (Weglot li ignora).

**OPPURE** lascia tutto così: Weglot sovrascrive automaticamente!

---

## 📊 CONFRONTO: Sistema Attuale vs Weglot

| | Sistema Attuale | Weglot |
|---|---|---|
| **Setup** | Complesso, manuale | 5 minuti |
| **Manutenzione** | Aggiornare file JSON | Zero, automatica |
| **Nuovi contenuti** | Aggiungere traduzioni | Automatico |
| **SEO** | Manuale | Automatico |
| **Correzioni** | Modificare JSON | Dashboard web |
| **Velocità** | Dipende | CDN ultra-veloce |
| **Costo** | Gratis | Da gratis a €9/mese |

---

## 🚀 RACCOMANDAZIONE

**USA WEGLOT SE:**
- ✅ Vuoi qualcosa che funziona SUBITO
- ✅ Non vuoi gestire file di traduzione
- ✅ Vuoi SEO multilingua automatico
- ✅ Budget: €10-30/mese è accettabile

**TIENI SISTEMA ATTUALE SE:**
- ✅ Vuoi controllo totale 100%
- ✅ Budget: €0 per sempre
- ✅ Hai tempo per debugging/manutenzione

---

## 🆘 SUPPORTO

**Weglot:**
- 📧 Email: support@weglot.com
- 💬 Chat: https://weglot.com (in basso a destra)
- 📚 Docs: https://support.weglot.com/

**Sistema Attuale:**
- Contatta l'assistente AI per supporto

---

## 📝 NOTE FINALI

1. **Weglot è RAPIDO**: 5 minuti e funziona
2. **Piano gratuito**: 2.000 parole (circa 2-3 pagine)
3. **Prova gratuita**: 10 giorni per testare piani a pagamento
4. **Cancellazione**: Facile, nessun vincolo

**La scelta è tua!** 🎯

