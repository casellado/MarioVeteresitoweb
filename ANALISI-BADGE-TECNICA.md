# 🔍 ANALISI BADGE TECNICA - Negativo vs Positivo

**Data:** 2025-11-12  
**Pagina:** tecnica.html  
**Sezione:** Reveal Demo (righe 185-207)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📊 **STRUTTURA ATTUALE**

### **CARD NEGATIVO (righe 186-194):**
```html
<div class="position-relative" style="aspect-ratio: 4/3;">
  <img src="assets/images/opere/featured/negative-1.jpg" 
       alt="Opera in negativo" 
       class="img-fluid rounded-3 w-100 h-100" 
       style="object-fit: cover;">
  <span class="badge bg-primary position-absolute" 
        style="top: 16px; left: 16px;" 
        data-i18n="tecnica.badge_negative">
    Negativo
  </span>
</div>
```

**Posizione badge:** `top: 16px; left: 16px;`  
**Colore:** bg-primary (blu)  
**Classe posizione:** position-absolute

---

### **CARD POSITIVO (righe 198-206):**
```html
<div class="position-relative mt-3" style="aspect-ratio: 4/3;">
  <img src="assets/images/opere/featured/positive-1.jpg" 
       alt="Opera in positivo" 
       class="img-fluid rounded-3 w-100 h-100" 
       style="object-fit: cover;">
  <span class="badge bg-warning text-dark position-absolute" 
        style="top: 16px; left: 16px;" 
        data-i18n="tecnica.badge_positive">
    Positivo
  </span>
</div>
```

**Posizione badge:** `top: 16px; left: 16px;`  
**Colore:** bg-warning (giallo) + text-dark  
**Classe posizione:** position-absolute

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔍 **COMPARAZIONE**

| Elemento | Negativo | Positivo | Identico? |
|----------|----------|----------|-----------|
| **Posizione top** | 16px | 16px | ✅ |
| **Posizione left** | 16px | 16px | ✅ |
| **position-absolute** | ✅ | ✅ | ✅ |
| **Parent relative** | ✅ | ✅ | ✅ |
| **z-index** | default | default | ✅ |
| **Colore bg** | bg-primary | bg-warning | ❌ |
| **Colore text** | default (white) | text-dark | ❌ |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ✅ **CONCLUSIONE**

**I BADGE SONO GIÀ NELLA STESSA POSIZIONE!**

Entrambi i badge hanno:
- `top: 16px`
- `left: 16px`
- `position: absolute`
- Container parent con `position: relative`

**Possibili motivi per cui SEMBRANO diversi:**

1. **Dimensione testo diversa**
   - "Negativo" ha 8 caratteri
   - "Positivo" ha 8 caratteri
   - ✅ Stessa lunghezza

2. **Padding/font-size badge**
   - Potrebbero avere padding leggermente diverso
   - Necessita verifica CSS

3. **Illusione ottica**
   - Colori diversi (blu vs giallo) possono far sembrare posizioni diverse
   - Contrasto con immagini sottostanti

4. **Responsive mobile**
   - Su mobile potrebbero avere comportamenti diversi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 **AZIONE CONSIGLIATA**

**OPZIONE A:** Se visivamente sembrano diversi, possiamo:
1. Aggiungere `z-index: 10` a entrambi
2. Verificare padding uniforme
3. Aggiungere box-shadow identica

**OPZIONE B:** Se l'utente vuole cambiarli:
- Specificare la nuova posizione desiderata
- Es: top-right, bottom-left, center, etc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

