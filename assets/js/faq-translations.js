/**
 * FAQ Translations Module
 * Traduzioni complete per tutte le FAQ in 5 lingue: IT, EN, DE, FR, ES
 * Si integra con i18n-simple.js
 */

(function() {
  'use strict';

  // Aspetta che i18n sia pronto
  function waitForI18n() {
    if (window.i18n && window.i18n.translations) {
      addFAQTranslations();
    } else {
      setTimeout(waitForI18n, 50);
    }
  }

  function addFAQTranslations() {
    const faqTranslations = {
      it: {
        // Categorie
        "faq.title": "Hai delle Domande?",
        "faq.subtitle": "Trova risposte alle domande più comuni sulla tecnica #negativoèpositivo®, l'acquisto delle opere, le spedizioni e molto altro.",
        "faq.category_technique": "La Tecnica #negativoèpositivo®",
        "faq.category_purchase": "Acquisto Opere",
        "faq.category_certificate": "Certificati e Autenticità",
        "faq.category_shipping": "Spedizioni e Consegne",
        "faq.category_maintenance": "Manutenzione e Cura",
        "faq.category_commission": "Commissioni e Personalizzazioni",
        "faq.category_workshop": "Workshop e Corsi",
        "faq.category_returns": "Resi e Garanzie",

        // FAQ 1
        "faq.q1": "Cos'è la tecnica #negativoèpositivo®?",
        "faq.a1": "La tecnica #negativoèpositivo® è una tecnica pittorica brevettata unica al mondo, creata da Mario Vetere. Consiste nel dipingere l'opera in negativo (con colori invertiti) e rivelarla in positivo attraverso un processo di sviluppo speciale. Ogni opera è un'esperienza visiva unica che trasforma il modo di percepire l'arte contemporanea.",
        "faq.learn_more": "Scopri di più sulla tecnica",

        // FAQ 2
        "faq.q2": "Come funziona il processo di rivelazione negativo/positivo?",
        "faq.a2": "L'opera viene inizialmente dipinta in negativo, utilizzando colori complementari a quelli finali. Attraverso un processo di sviluppo chimico-fisico brevettato, l'opera viene poi \"rivelata\" trasformando i colori negativi nei loro corrispondenti positivi. Questo processo crea un effetto visivo straordinario e rende ogni opera assolutamente unica e irripetibile.",

        // FAQ 3
        "faq.q3": "Perché questa tecnica è brevettata?",
        "faq.a3": "La tecnica #negativoèpositivo® è stata brevettata perché rappresenta un'innovazione unica nel campo dell'arte contemporanea. Il processo di sviluppo e rivelazione è frutto di anni di ricerca e sperimentazione, e garantisce che ogni opera realizzata con questa tecnica sia autentica e certificata.",

        // FAQ 4
        "faq.q4": "Come posso acquistare un'opera?",
        "faq.a4": "Puoi acquistare un'opera direttamente dal sito selezionando l'opera che ti interessa e procedendo con il checkout. In alternativa, puoi contattarci tramite il form di contatto, email o WhatsApp per ricevere informazioni personalizzate e assistenza durante l'acquisto.",
        "faq.browse_artworks": "Sfoglia le opere disponibili",

        // FAQ 5
        "faq.q5": "Quali metodi di pagamento accettate?",
        "faq.a5": "Accettiamo pagamenti tramite carta di credito/debito (Visa, Mastercard, American Express), bonifico bancario e PayPal. Tutti i pagamenti sono protetti e sicuri. Per importi elevati, è possibile concordare un pagamento rateizzato.",

        // FAQ 6
        "faq.q6": "Le opere sono disponibili immediatamente?",
        "faq.a6": "La disponibilità varia a seconda dell'opera. Alcune opere sono disponibili immediatamente, mentre altre potrebbero richiedere un periodo di preparazione. Ogni opera ha indicata la sua disponibilità nella pagina dedicata. Per commissioni personalizzate, i tempi vengono concordati al momento dell'ordine.",

        // FAQ 6.5
        "faq.q6_5": "Posso richiedere foto o video aggiuntivi di un'opera?",
        "faq.a6_5": "Assolutamente sì! Capiamo l'importanza di vedere l'opera da diverse angolazioni prima dell'acquisto. Contattaci e saremo felici di inviarti foto ad alta risoluzione, dettagli ravvicinati o brevi video dell'opera che ti interessa. Possiamo anche organizzare una videocall per mostrarti l'opera dal vivo e rispondere a tutte le tue domande.",

        // FAQ 6.6
        "faq.q6_6": "Le opere sono pezzi unici o riproduzioni?",
        "faq.a6_6": "Tutte le opere vendute sono pezzi unici e originali, dipinti a mano da Mario Vetere utilizzando la tecnica brevettata #negativoèpositivo®. Non si tratta di stampe, riproduzioni o edizioni limitate. Ogni opera è irripetibile per natura stessa della tecnica utilizzata, che rende impossibile creare due opere identiche. Questo garantisce l'esclusività e il valore dell'investimento.",

        // FAQ 6.7
        "faq.q6_7": "Posso vedere l'opera di persona prima di acquistarla?",
        "faq.a6_7": "Sì, è possibile! Se ti trovi in zona o desideri pianificare una visita, puoi prenotare un appuntamento per vedere le opere disponibili direttamente nello studio dell'artista. È un'opportunità unica per conoscere Mario Vetere di persona, vedere da vicino la tecnica #negativoèpositivo® e comprendere meglio il processo creativo. Contattaci per concordare data e orario.",
        "faq.book_visit": "Prenota una visita in studio",

        // FAQ 7 (HTML complesso)
        "faq.q7": "Ogni opera include un certificato di autenticità?",
        "faq.a7": `<p><strong>Assolutamente sì.</strong> Ogni opera acquistata include un certificato di autenticità ufficiale firmato personalmente da Mario Vetere che attesta:</p>
<ul class="mt-3">
  <li>L'originalità e unicità dell'opera</li>
  <li>La tecnica brevettata #negativoèpositivo® utilizzata</li>
  <li>Dimensioni, materiali e anno di realizzazione</li>
  <li>Numero di serie univoco e non riproducibile</li>
  <li>Codici identificativi dei chip NFC presenti sull'opera e sul certificato</li>
</ul>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check me-2"></i>
  <strong>Massima sicurezza:</strong> Il certificato rappresenta non solo una garanzia di autenticità, ma anche un documento di valore che aumenta l'apprezzamento e la quotazione dell'opera nel tempo. Mario Vetere mantiene un registro offline personale di tutte le opere certificate per verifica permanente.
</div>`,

        // FAQ 8 (HTML complesso)
        "faq.q8": "Come funziona il sistema di autenticazione NFC?",
        "faq.a8": `<h6 class="fw-bold mb-3">🔒 Tecnologia di Sicurezza Avanzata</h6>
<p>Ogni opera e il relativo certificato di autenticità sono protetti da <strong>chip NFC originali NXP NTAG213/215/216</strong>, lo stesso standard utilizzato in applicazioni bancarie e di sicurezza di alto livello.</p>
<h6 class="fw-bold mt-4 mb-3">📱 Come Verificare l'Autenticità</h6>
<ol class="mb-3">
  <li><strong>Attiva NFC</strong> sul tuo smartphone (Impostazioni → Connessioni → NFC)</li>
  <li><strong>Avvicina lo smartphone</strong> al chip presente sull'opera o sul certificato (distanza max 4cm)</li>
  <li><strong>Leggi automaticamente</strong> il codice univoco e i dati dell'opera</li>
  <li><strong>Verifica la corrispondenza</strong> con i codici stampati sul certificato cartaceo</li>
</ol>
<h6 class="fw-bold mt-4 mb-3">🛡️ Sicurezza Assoluta</h6>
<ul class="mb-3">
  <li><strong>Chip non modificabili:</strong> I dati sono scritti in memoria permanente e non possono essere alterati</li>
  <li><strong>Codice univoco:</strong> Ogni chip ha un identificatore unico mondiale che non può essere duplicato</li>
  <li><strong>Doppia autenticazione:</strong> Chip sull'opera + chip sul certificato con codici correlati</li>
  <li><strong>Registro offline:</strong> Mario Vetere mantiene un elenco personale offline di tutte le opere per verifica incrociata</li>
</ul>
<div class="alert alert-warning mt-3 mb-0" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  <small><strong>Importante:</strong> Qualsiasi tentativo di manomissione o rimozione del chip NFC danneggia irreversibilmente l'autenticità dell'opera. La maggior parte degli smartphone Android e iPhone (7 e successivi) supportano la lettura NFC nativa.</small>
</div>`,

        // FAQ 9 (HTML complesso)
        "faq.q9": "Come vengono spedite le opere e i certificati?",
        "faq.a9": `<h6 class="fw-bold mb-3">📦 Sistema di Spedizione Sicura Separata</h6>
<p>Per garantire <strong>massima sicurezza e tutela</strong> contro smarrimenti o danni, adottiamo un protocollo di spedizione professionale in due fasi distinte:</p>
<div class="row g-3 mt-3">
  <div class="col-md-6">
    <div class="card bg-dark border-primary">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-image me-2 text-primary"></i>1. Opera d'Arte</h6>
        <ul class="small mb-0">
          <li><strong>Metodo:</strong> Corriere espresso assicurato</li>
          <li><strong>Imballaggio:</strong> Professionale con materiali di alta qualità</li>
          <li><strong>Assicurazione:</strong> Copertura totale al valore dell'opera</li>
          <li><strong>Tracking:</strong> Codice di tracciamento in tempo reale</li>
          <li><strong>Tempi Italia:</strong> 3-5 giorni lavorativi</li>
          <li><strong>Tempi Europa:</strong> 5-8 giorni lavorativi</li>
          <li><strong>Tempi Extra-UE:</strong> 7-14 giorni lavorativi</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card bg-dark border-success">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-award me-2 text-success"></i>2. Certificato di Autenticità</h6>
        <ul class="small mb-0">
          <li><strong>Metodo:</strong> Raccomandata con ricevuta di ritorno</li>
          <li><strong>Protezione:</strong> Busta rigida protettiva</li>
          <li><strong>Assicurazione:</strong> Copertura completa</li>
          <li><strong>Tracking:</strong> Numero di raccomandata tracciabile</li>
          <li><strong>Spedito:</strong> Separatamente dall'opera (2-3 giorni dopo)</li>
          <li><strong>Firma richiesta:</strong> Consegna con identificazione</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="alert alert-info mt-4 mb-0" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  <small><strong>Perché spedizione separata?</strong> Questo protocollo offre una doppia garanzia: se uno dei due pacchi dovesse avere problemi durante il trasporto, l'altro arriverà comunque intatto. Inoltre, riduce drasticamente il rischio di furto, poiché l'opera senza certificato ha valore limitato e viceversa. Riceverai due codici di tracking separati per monitorare entrambe le spedizioni.</small>
</div>`,

        // FAQ 10
        "faq.q10": "Spedite in tutto il mondo?",
        "faq.a10": "Sì, effettuiamo spedizioni in tutto il mondo. I costi di spedizione vengono calcolati in base alla destinazione e alle dimensioni dell'opera. Per informazioni dettagliate sui costi, contattaci direttamente indicando l'opera di interesse e la destinazione.",

        // FAQ 11.5
        "faq.q11_5": "Come vengono imballate le opere?",
        "faq.a11_5": "Ogni opera viene imballata con cura estrema utilizzando materiali di alta qualità: pluriball, cartone rinforzato, angolari di protezione e nastro adesivo professionale. Le opere più grandi o delicate vengono inserite in casse di legno su misura. Tutti gli imballaggi sono progettati per garantire la massima protezione durante il trasporto e arrivano con la scritta \"Fragile\" ben visibile.",

        // FAQ 11 (HTML complesso)
        "faq.q11": "Cosa succede se l'opera o il certificato arriva danneggiato?",
        "faq.a11": `<h6 class="fw-bold mb-3">🛡️ Garanzia Totale sul Trasporto</h6>
<p>Sia l'opera che il certificato sono <strong>completamente assicurati</strong> durante tutto il percorso di spedizione. In caso di danni o problemi, siamo coperti da polizza assicurativa professionale che garantisce:</p>
<ul class="mb-3">
  <li><strong>Rimborso completo</strong> del valore dell'opera (incluse spese di spedizione)</li>
  <li><strong>Sostituzione immediata</strong> con opera equivalente, se disponibile</li>
  <li><strong>Copertura danni parziali</strong> con valutazione professionale</li>
  <li><strong>Protezione totale</strong> da furto o smarrimento</li>
</ul>
<h6 class="fw-bold mt-4 mb-3">📸 Procedura in Caso di Danni</h6>
<ol class="mb-3">
  <li><strong>Non firmare</strong> la ricevuta di consegna se il pacco appare danneggiato</li>
  <li><strong>Documenta immediatamente</strong> con foto e video il danno (pacco + contenuto)</li>
  <li><strong>Contattaci entro 24 ore</strong> tramite email, WhatsApp o telefono</li>
  <li><strong>Invia la documentazione</strong> fotografica e il numero di tracking</li>
  <li><strong>Gestione veloce:</strong> Attiviamo la pratica assicurativa entro 48 ore</li>
</ol>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check-fill me-2"></i>
  <small><strong>La tua soddisfazione è garantita:</strong> Negli ultimi 5 anni, abbiamo avuto meno dello 0.1% di incidenti durante le spedizioni, tutti risolti con piena soddisfazione del cliente. Il nostro imballaggio professionale e la spedizione separata minimizzano qualsiasi rischio.</small>
</div>`,

        // FAQ 11.6
        "faq.q11_6": "Come devo pulire e conservare l'opera?",
        "faq.a11_6": "Per la pulizia, utilizza un panno morbido e asciutto per rimuovere delicatamente la polvere. Evita assolutamente prodotti chimici, acqua o detergenti che potrebbero danneggiare i pigmenti. Conserva l'opera lontano da luce solare diretta, fonti di calore e umidità eccessiva. La temperatura ideale è tra 18-24°C con umidità relativa del 40-60%. Se l'opera è incorniciata con vetro, pulisci solo il vetro esterno.",
        "faq.a11_6_warning": "Importante: Non toccare mai la superficie dell'opera con le mani. Gli oli naturali della pelle possono danneggiare i pigmenti nel tempo.",

        // FAQ 12
        "faq.q12": "Posso commissionare un'opera personalizzata?",
        "faq.a12": "Sì, Mario Vetere accetta commissioni per opere personalizzate. Puoi contattarci attraverso il form di contatto o direttamente via email/WhatsApp per discutere le tue idee, dimensioni, colori e tempi di realizzazione. Ogni commissione è unica e viene trattata con la massima cura.",
        "faq.contact_us": "Contattaci per una commissione",

        // FAQ 13
        "faq.q13": "Quanto tempo richiede una commissione personalizzata?",
        "faq.a13": "I tempi per una commissione personalizzata variano in base alla complessità dell'opera, alle dimensioni e alla tecnica richiesta. Generalmente, un'opera personalizzata richiede da 4 a 12 settimane. I tempi esatti vengono concordati al momento della commissione e ti verrà fornito un calendario dettagliato.",

        // FAQ 14
        "faq.q14": "Organizzate workshop o corsi sulla tecnica #negativoèpositivo®?",
        "faq.a14": "Sì, Mario Vetere organizza periodicamente workshop e corsi per insegnare la tecnica #negativoèpositivo®. I workshop possono essere individuali o di gruppo e vengono organizzati sia in presenza che online. Contattaci per informazioni su date, costi e disponibilità.",
        "faq.ask_workshop": "Chiedi informazioni sui workshop",

        // FAQ 15
        "faq.q15": "Posso restituire un'opera se non sono soddisfatto?",
        "faq.a15": "Sì, hai diritto a restituire l'opera entro 14 giorni dalla consegna, purché sia nelle stesse condizioni in cui l'hai ricevuta, con imballo originale e certificato di autenticità. I costi di spedizione per il reso sono a carico dell'acquirente. Per commissioni personalizzate, il diritto di recesso potrebbe non applicarsi. Contattaci per maggiori informazioni.",

        // FAQ 16
        "faq.q16": "C'è una garanzia sulle opere?",
        "faq.a16": "Sì, tutte le opere sono garantite contro difetti di fabbricazione. In caso di problemi legati alla qualità dell'opera o alla tecnica utilizzata, provvederemo alla sostituzione o al rimborso. La garanzia non copre danni causati da negligenza, incidenti o usura normale."
      },

      en: {
        // Categories
        "faq.title": "Have Questions?",
        "faq.subtitle": "Find answers to the most common questions about the #negativoèpositivo® technique, purchasing artworks, shipping and much more.",
        "faq.category_technique": "The #negativoèpositivo® Technique",
        "faq.category_purchase": "Purchasing Artworks",
        "faq.category_certificate": "Certificates and Authenticity",
        "faq.category_shipping": "Shipping and Delivery",
        "faq.category_maintenance": "Maintenance and Care",
        "faq.category_commission": "Commissions and Customizations",
        "faq.category_workshop": "Workshops and Courses",
        "faq.category_returns": "Returns and Warranties",

        // FAQ 1
        "faq.q1": "What is the #negativoèpositivo® technique?",
        "faq.a1": "The #negativoèpositivo® technique is a patented painting technique unique in the world, created by Mario Vetere. It consists of painting the work in negative (with inverted colors) and revealing it in positive through a special development process. Each work is a unique visual experience that transforms the way of perceiving contemporary art.",
        "faq.learn_more": "Learn more about the technique",

        // FAQ 2
        "faq.q2": "How does the negative/positive revelation process work?",
        "faq.a2": "The artwork is initially painted in negative, using colors complementary to the final ones. Through a patented chemical-physical development process, the work is then \"revealed\" transforming the negative colors into their positive correspondents. This process creates an extraordinary visual effect and makes each work absolutely unique and unrepeatable.",

        // FAQ 3
        "faq.q3": "Why is this technique patented?",
        "faq.a3": "The #negativoèpositivo® technique has been patented because it represents a unique innovation in the field of contemporary art. The development and revelation process is the result of years of research and experimentation, and guarantees that every work created with this technique is authentic and certified.",

        // FAQ 4
        "faq.q4": "How can I purchase an artwork?",
        "faq.a4": "You can purchase an artwork directly from the website by selecting the artwork you're interested in and proceeding with checkout. Alternatively, you can contact us via the contact form, email or WhatsApp to receive personalized information and assistance during purchase.",
        "faq.browse_artworks": "Browse available artworks",

        // FAQ 5
        "faq.q5": "What payment methods do you accept?",
        "faq.a5": "We accept payments via credit/debit cards (Visa, Mastercard, American Express), bank transfer and PayPal. All payments are protected and secure. For high amounts, installment payments can be arranged.",

        // FAQ 6
        "faq.q6": "Are artworks available immediately?",
        "faq.a6": "Availability varies depending on the artwork. Some artworks are available immediately, while others may require a preparation period. Each artwork has its availability indicated on its dedicated page. For personalized commissions, times are agreed upon at the time of order.",

        // FAQ 6.5
        "faq.q6_5": "Can I request additional photos or videos of an artwork?",
        "faq.a6_5": "Absolutely yes! We understand the importance of seeing the artwork from different angles before purchase. Contact us and we'll be happy to send you high-resolution photos, close-up details or short videos of the artwork you're interested in. We can also organize a video call to show you the artwork live and answer all your questions.",

        // FAQ 6.6
        "faq.q6_6": "Are the artworks unique pieces or reproductions?",
        "faq.a6_6": "All artworks sold are unique and original pieces, hand-painted by Mario Vetere using the patented #negativoèpositivo® technique. These are not prints, reproductions or limited editions. Each artwork is unrepeatable by the very nature of the technique used, which makes it impossible to create two identical works. This guarantees exclusivity and investment value.",

        // FAQ 6.7
        "faq.q6_7": "Can I see the artwork in person before purchasing?",
        "faq.a6_7": "Yes, it's possible! If you're in the area or wish to plan a visit, you can book an appointment to see the available artworks directly at the artist's studio. It's a unique opportunity to meet Mario Vetere in person, see the #negativoèpositivo® technique up close and better understand the creative process. Contact us to arrange date and time.",
        "faq.book_visit": "Book a studio visit",

        // FAQ 7 (HTML complesso)
        "faq.q7": "Does every artwork include a certificate of authenticity?",
        "faq.a7": `<p><strong>Absolutely yes.</strong> Every purchased artwork includes an official certificate of authenticity personally signed by Mario Vetere that certifies:</p>
<ul class="mt-3">
  <li>The originality and uniqueness of the artwork</li>
  <li>The patented #negativoèpositivo® technique used</li>
  <li>Dimensions, materials and year of creation</li>
  <li>Unique and non-reproducible serial number</li>
  <li>Identification codes of the NFC chips present on the artwork and certificate</li>
</ul>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check me-2"></i>
  <strong>Maximum security:</strong> The certificate represents not only a guarantee of authenticity, but also a valuable document that increases the appreciation and quotation of the artwork over time. Mario Vetere maintains a personal offline registry of all certified artworks for permanent verification.
</div>`,

        // FAQ 8 (HTML complesso)
        "faq.q8": "How does the NFC authentication system work?",
        "faq.a8": `<h6 class="fw-bold mb-3">🔒 Advanced Security Technology</h6>
<p>Each artwork and its certificate of authenticity are protected by <strong>original NXP NTAG213/215/216 NFC chips</strong>, the same standard used in banking and high-level security applications.</p>
<h6 class="fw-bold mt-4 mb-3">📱 How to Verify Authenticity</h6>
<ol class="mb-3">
  <li><strong>Activate NFC</strong> on your smartphone (Settings → Connections → NFC)</li>
  <li><strong>Bring your smartphone close</strong> to the chip on the artwork or certificate (max distance 4cm)</li>
  <li><strong>Automatically read</strong> the unique code and artwork data</li>
  <li><strong>Verify correspondence</strong> with codes printed on the paper certificate</li>
</ol>
<h6 class="fw-bold mt-4 mb-3">🛡️ Absolute Security</h6>
<ul class="mb-3">
  <li><strong>Non-modifiable chips:</strong> Data is written in permanent memory and cannot be altered</li>
  <li><strong>Unique code:</strong> Each chip has a worldwide unique identifier that cannot be duplicated</li>
  <li><strong>Double authentication:</strong> Chip on artwork + chip on certificate with related codes</li>
  <li><strong>Offline registry:</strong> Mario Vetere maintains a personal offline list of all artworks for cross-verification</li>
</ul>
<div class="alert alert-warning mt-3 mb-0" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  <small><strong>Important:</strong> Any attempt to tamper with or remove the NFC chip irreversibly damages the artwork's authenticity. Most Android smartphones and iPhones (7 and later) support native NFC reading.</small>
</div>`,

        // FAQ 9 (HTML complesso)
        "faq.q9": "How are artworks and certificates shipped?",
        "faq.a9": `<h6 class="fw-bold mb-3">📦 Separate Secure Shipping System</h6>
<p>To ensure <strong>maximum security and protection</strong> against loss or damage, we adopt a professional two-phase shipping protocol:</p>
<div class="row g-3 mt-3">
  <div class="col-md-6">
    <div class="card bg-dark border-primary">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-image me-2 text-primary"></i>1. Artwork</h6>
        <ul class="small mb-0">
          <li><strong>Method:</strong> Insured express courier</li>
          <li><strong>Packaging:</strong> Professional with high-quality materials</li>
          <li><strong>Insurance:</strong> Full coverage at artwork value</li>
          <li><strong>Tracking:</strong> Real-time tracking code</li>
          <li><strong>Italy times:</strong> 3-5 business days</li>
          <li><strong>Europe times:</strong> 5-8 business days</li>
          <li><strong>Extra-EU times:</strong> 7-14 business days</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card bg-dark border-success">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-award me-2 text-success"></i>2. Certificate of Authenticity</h6>
        <ul class="small mb-0">
          <li><strong>Method:</strong> Registered mail with return receipt</li>
          <li><strong>Protection:</strong> Protective rigid envelope</li>
          <li><strong>Insurance:</strong> Full coverage</li>
          <li><strong>Tracking:</strong> Trackable registered mail number</li>
          <li><strong>Shipped:</strong> Separately from artwork (2-3 days later)</li>
          <li><strong>Signature required:</strong> Delivery with identification</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="alert alert-info mt-4 mb-0" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  <small><strong>Why separate shipping?</strong> This protocol offers double guarantee: if one of the two packages should have problems during transport, the other will still arrive intact. Furthermore, it drastically reduces the risk of theft, since the artwork without certificate has limited value and vice versa. You'll receive two separate tracking codes to monitor both shipments.</small>
</div>`,

        // FAQ 10
        "faq.q10": "Do you ship worldwide?",
        "faq.a10": "Yes, we ship worldwide. Shipping costs are calculated based on destination and artwork dimensions. For detailed cost information, contact us directly indicating the artwork of interest and destination.",

        // FAQ 11.5
        "faq.q11_5": "How are artworks packaged?",
        "faq.a11_5": "Each artwork is packaged with extreme care using high-quality materials: bubble wrap, reinforced cardboard, protective corners and professional adhesive tape. Larger or delicate artworks are placed in custom wooden crates. All packaging is designed to ensure maximum protection during transport and arrives with the \"Fragile\" label clearly visible.",

        // FAQ 11 (HTML complesso)
        "faq.q11": "What happens if the artwork or certificate arrives damaged?",
        "faq.a11": `<h6 class="fw-bold mb-3">🛡️ Total Transport Guarantee</h6>
<p>Both the artwork and certificate are <strong>fully insured</strong> throughout the entire shipping journey. In case of damage or problems, we're covered by professional insurance policy that guarantees:</p>
<ul class="mb-3">
  <li><strong>Full refund</strong> of artwork value (including shipping costs)</li>
  <li><strong>Immediate replacement</strong> with equivalent artwork, if available</li>
  <li><strong>Partial damage coverage</strong> with professional assessment</li>
  <li><strong>Total protection</strong> from theft or loss</li>
</ul>
<h6 class="fw-bold mt-4 mb-3">📸 Procedure in Case of Damage</h6>
<ol class="mb-3">
  <li><strong>Do not sign</strong> the delivery receipt if the package appears damaged</li>
  <li><strong>Immediately document</strong> with photos and video the damage (package + contents)</li>
  <li><strong>Contact us within 24 hours</strong> via email, WhatsApp or phone</li>
  <li><strong>Send documentation</strong> photos and tracking number</li>
  <li><strong>Quick handling:</strong> We activate insurance claim within 48 hours</li>
</ol>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check-fill me-2"></i>
  <small><strong>Your satisfaction is guaranteed:</strong> In the last 5 years, we've had less than 0.1% incidents during shipping, all resolved with full customer satisfaction. Our professional packaging and separate shipping minimize any risk.</small>
</div>`,

        // FAQ 11.6
        "faq.q11_6": "How should I clean and preserve the artwork?",
        "faq.a11_6": "For cleaning, use a soft, dry cloth to gently remove dust. Absolutely avoid chemicals, water or detergents that could damage the pigments. Keep the artwork away from direct sunlight, heat sources and excessive humidity. The ideal temperature is between 18-24°C with 40-60% relative humidity. If the artwork is framed with glass, clean only the external glass.",
        "faq.a11_6_warning": "Important: Never touch the artwork surface with your hands. Natural skin oils can damage pigments over time.",

        // FAQ 12
        "faq.q12": "Can I commission a personalized artwork?",
        "faq.a12": "Yes, Mario Vetere accepts commissions for personalized artworks. You can contact us through the contact form or directly via email/WhatsApp to discuss your ideas, dimensions, colors and creation times. Each commission is unique and treated with maximum care.",
        "faq.contact_us": "Contact us for a commission",

        // FAQ 13
        "faq.q13": "How long does a personalized commission take?",
        "faq.a13": "Times for a personalized commission vary based on the artwork's complexity, dimensions and required technique. Generally, a personalized artwork requires 4 to 12 weeks. Exact times are agreed upon at the time of commission and you'll be provided with a detailed schedule.",

        // FAQ 14
        "faq.q14": "Do you organize workshops or courses on the #negativoèpositivo® technique?",
        "faq.a14": "Yes, Mario Vetere periodically organizes workshops and courses to teach the #negativoèpositivo® technique. Workshops can be individual or group-based and are organized both in-person and online. Contact us for information on dates, costs and availability.",
        "faq.ask_workshop": "Ask for workshop information",

        // FAQ 15
        "faq.q15": "Can I return an artwork if I'm not satisfied?",
        "faq.a15": "Yes, you have the right to return the artwork within 14 days of delivery, provided it is in the same condition as received, with original packaging and certificate of authenticity. Return shipping costs are borne by the purchaser. For personalized commissions, the right of withdrawal may not apply. Contact us for more information.",

        // FAQ 16
        "faq.q16": "Is there a warranty on artworks?",
        "faq.a16": "Yes, all artworks are guaranteed against manufacturing defects. In case of problems related to artwork quality or the technique used, we will provide replacement or refund. The warranty does not cover damage caused by negligence, accidents or normal wear."
      },

      de: {
        // Kategorien
        "faq.title": "Haben Sie Fragen?",
        "faq.subtitle": "Finden Sie Antworten auf die häufigsten Fragen zur #negativoèpositivo®-Technik, zum Kunstwerkkauf, zum Versand und vieles mehr.",
        "faq.category_technique": "Die #negativoèpositivo®-Technik",
        "faq.category_purchase": "Kunstwerke kaufen",
        "faq.category_certificate": "Zertifikate und Authentizität",
        "faq.category_shipping": "Versand und Lieferung",
        "faq.category_maintenance": "Wartung und Pflege",
        "faq.category_commission": "Aufträge und Anpassungen",
        "faq.category_workshop": "Workshops und Kurse",
        "faq.category_returns": "Rückgaben und Garantien",

        // FAQ 1
        "faq.q1": "Was ist die #negativoèpositivo®-Technik?",
        "faq.a1": "Die #negativoèpositivo®-Technik ist eine weltweit einzigartige, patentierte Maltechnik, die von Mario Vetere entwickelt wurde. Sie besteht darin, das Werk im Negativ (mit invertierten Farben) zu malen und es durch einen speziellen Entwicklungsprozess im Positiv zu enthüllen. Jedes Werk ist eine einzigartige visuelle Erfahrung, die die Art und Weise verändert, wie man zeitgenössische Kunst wahrnimmt.",
        "faq.learn_more": "Mehr über die Technik erfahren",

        // FAQ 2
        "faq.q2": "Wie funktioniert der Negativ/Positiv-Enthüllungsprozess?",
        "faq.a2": "Das Kunstwerk wird zunächst im Negativ gemalt, wobei Komplementärfarben zu den endgültigen verwendet werden. Durch einen patentierten chemisch-physikalischen Entwicklungsprozess wird das Werk dann \"enthüllt\", indem die negativen Farben in ihre positiven Entsprechungen umgewandelt werden. Dieser Prozess schafft einen außergewöhnlichen visuellen Effekt und macht jedes Werk absolut einzigartig und unnachahmlich.",

        // FAQ 3
        "faq.q3": "Warum ist diese Technik patentiert?",
        "faq.a3": "Die #negativoèpositivo®-Technik wurde patentiert, weil sie eine einzigartige Innovation im Bereich der zeitgenössischen Kunst darstellt. Der Entwicklungs- und Enthüllungsprozess ist das Ergebnis jahrelanger Forschung und Experimente und garantiert, dass jedes mit dieser Technik geschaffene Werk authentisch und zertifiziert ist.",

        // FAQ 4
        "faq.q4": "Wie kann ich ein Kunstwerk kaufen?",
        "faq.a4": "Sie können ein Kunstwerk direkt auf der Website kaufen, indem Sie das gewünschte Werk auswählen und zur Kasse gehen. Alternativ können Sie uns über das Kontaktformular, E-Mail oder WhatsApp kontaktieren, um personalisierte Informationen und Unterstützung beim Kauf zu erhalten.",
        "faq.browse_artworks": "Verfügbare Kunstwerke durchsuchen",

        // FAQ 5
        "faq.q5": "Welche Zahlungsmethoden akzeptieren Sie?",
        "faq.a5": "Wir akzeptieren Zahlungen per Kredit-/Debitkarte (Visa, Mastercard, American Express), Banküberweisung und PayPal. Alle Zahlungen sind geschützt und sicher. Bei hohen Beträgen können Ratenzahlungen vereinbart werden.",

        // FAQ 6
        "faq.q6": "Sind die Kunstwerke sofort verfügbar?",
        "faq.a6": "Die Verfügbarkeit variiert je nach Kunstwerk. Einige Kunstwerke sind sofort verfügbar, während andere eine Vorbereitungszeit erfordern können. Jedes Kunstwerk hat seine Verfügbarkeit auf der entsprechenden Seite angegeben. Bei personalisierten Aufträgen werden die Zeiten zum Zeitpunkt der Bestellung vereinbart.",

        // FAQ 6.5
        "faq.q6_5": "Kann ich zusätzliche Fotos oder Videos eines Kunstwerks anfordern?",
        "faq.a6_5": "Absolut ja! Wir verstehen die Bedeutung, das Kunstwerk vor dem Kauf aus verschiedenen Blickwinkeln zu sehen. Kontaktieren Sie uns und wir senden Ihnen gerne hochauflösende Fotos, Nahaufnahmen oder kurze Videos des gewünschten Kunstwerks. Wir können auch einen Videoanruf organisieren, um Ihnen das Kunstwerk live zu zeigen und alle Ihre Fragen zu beantworten.",

        // FAQ 6.6
        "faq.q6_6": "Sind die Kunstwerke Unikate oder Reproduktionen?",
        "faq.a6_6": "Alle verkauften Kunstwerke sind einzigartige und originale Stücke, handgemalt von Mario Vetere mit der patentierten #negativoèpositivo®-Technik. Es handelt sich nicht um Drucke, Reproduktionen oder limitierte Auflagen. Jedes Kunstwerk ist durch die Natur der verwendeten Technik unnachahmlich, was es unmöglich macht, zwei identische Werke zu schaffen. Dies garantiert Exklusivität und Investitionswert.",

        // FAQ 6.7
        "faq.q6_7": "Kann ich das Kunstwerk persönlich sehen, bevor ich es kaufe?",
        "faq.a6_7": "Ja, das ist möglich! Wenn Sie in der Nähe sind oder einen Besuch planen möchten, können Sie einen Termin vereinbaren, um die verfügbaren Kunstwerke direkt im Atelier des Künstlers zu sehen. Es ist eine einzigartige Gelegenheit, Mario Vetere persönlich kennenzulernen, die #negativoèpositivo®-Technik aus nächster Nähe zu sehen und den kreativen Prozess besser zu verstehen. Kontaktieren Sie uns, um Datum und Uhrzeit zu vereinbaren.",
        "faq.book_visit": "Atelierbesuch buchen",

        // FAQ 7 (HTML komplex)
        "faq.q7": "Enthält jedes Kunstwerk ein Echtheitszertifikat?",
        "faq.a7": `<p><strong>Absolut ja.</strong> Jedes gekaufte Kunstwerk enthält ein offizielles Echtheitszertifikat, das persönlich von Mario Vetere unterzeichnet wurde und folgendes bescheinigt:</p>
<ul class="mt-3">
  <li>Die Originalität und Einzigartigkeit des Kunstwerks</li>
  <li>Die verwendete patentierte #negativoèpositivo®-Technik</li>
  <li>Abmessungen, Materialien und Entstehungsjahr</li>
  <li>Eindeutige und nicht reproduzierbare Seriennummer</li>
  <li>Identifikationscodes der NFC-Chips auf dem Kunstwerk und dem Zertifikat</li>
</ul>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check me-2"></i>
  <strong>Maximale Sicherheit:</strong> Das Zertifikat stellt nicht nur eine Garantie der Authentizität dar, sondern auch ein wertvolles Dokument, das die Wertschätzung und Bewertung des Kunstwerks im Laufe der Zeit steigert. Mario Vetere führt ein persönliches Offline-Register aller zertifizierten Kunstwerke für permanente Überprüfung.
</div>`,

        // FAQ 8 (HTML komplex)
        "faq.q8": "Wie funktioniert das NFC-Authentifizierungssystem?",
        "faq.a8": `<h6 class="fw-bold mb-3">🔒 Fortschrittliche Sicherheitstechnologie</h6>
<p>Jedes Kunstwerk und sein Echtheitszertifikat sind durch <strong>originale NXP NTAG213/215/216 NFC-Chips</strong> geschützt, denselben Standard, der in Bank- und Hochsicherheitsanwendungen verwendet wird.</p>
<h6 class="fw-bold mt-4 mb-3">📱 So überprüfen Sie die Authentizität</h6>
<ol class="mb-3">
  <li><strong>Aktivieren Sie NFC</strong> auf Ihrem Smartphone (Einstellungen → Verbindungen → NFC)</li>
  <li><strong>Halten Sie Ihr Smartphone</strong> an den Chip auf dem Kunstwerk oder Zertifikat (max. Abstand 4cm)</li>
  <li><strong>Lesen Sie automatisch</strong> den eindeutigen Code und die Daten des Kunstwerks</li>
  <li><strong>Überprüfen Sie die Übereinstimmung</strong> mit den auf dem Papierzertifikat gedruckten Codes</li>
</ol>
<h6 class="fw-bold mt-4 mb-3">🛡️ Absolute Sicherheit</h6>
<ul class="mb-3">
  <li><strong>Nicht modifizierbare Chips:</strong> Die Daten sind im permanenten Speicher geschrieben und können nicht verändert werden</li>
  <li><strong>Eindeutiger Code:</strong> Jeder Chip hat einen weltweit eindeutigen Identifikator, der nicht dupliziert werden kann</li>
  <li><strong>Doppelte Authentifizierung:</strong> Chip auf dem Kunstwerk + Chip auf dem Zertifikat mit zugehörigen Codes</li>
  <li><strong>Offline-Register:</strong> Mario Vetere führt eine persönliche Offline-Liste aller Kunstwerke zur Kreuzüberprüfung</li>
</ul>
<div class="alert alert-warning mt-3 mb-0" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  <small><strong>Wichtig:</strong> Jeder Versuch, den NFC-Chip zu manipulieren oder zu entfernen, beschädigt die Authentizität des Kunstwerks irreversibel. Die meisten Android-Smartphones und iPhones (7 und höher) unterstützen natives NFC-Lesen.</small>
</div>`,

        // FAQ 9 (HTML komplex)
        "faq.q9": "Wie werden die Kunstwerke und Zertifikate versendet?",
        "faq.a9": `<h6 class="fw-bold mb-3">📦 Separates sicheres Versandsystem</h6>
<p>Um <strong>maximale Sicherheit und Schutz</strong> gegen Verlust oder Beschädigung zu gewährleisten, verwenden wir ein professionelles Versandprotokoll in zwei getrennten Phasen:</p>
<div class="row g-3 mt-3">
  <div class="col-md-6">
    <div class="card bg-dark border-primary">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-image me-2 text-primary"></i>1. Kunstwerk</h6>
        <ul class="small mb-0">
          <li><strong>Methode:</strong> Versicherter Expresskurier</li>
          <li><strong>Verpackung:</strong> Professionell mit hochwertigen Materialien</li>
          <li><strong>Versicherung:</strong> Vollständige Deckung im Wert des Kunstwerks</li>
          <li><strong>Tracking:</strong> Echtzeit-Tracking-Code</li>
          <li><strong>Italien Zeiten:</strong> 3-5 Werktage</li>
          <li><strong>Europa Zeiten:</strong> 5-8 Werktage</li>
          <li><strong>Außerhalb EU Zeiten:</strong> 7-14 Werktage</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card bg-dark border-success">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-award me-2 text-success"></i>2. Echtheitszertifikat</h6>
        <ul class="small mb-0">
          <li><strong>Methode:</strong> Einschreiben mit Rückschein</li>
          <li><strong>Schutz:</strong> Schutzumschlag</li>
          <li><strong>Versicherung:</strong> Vollständige Deckung</li>
          <li><strong>Tracking:</strong> Nachverfolgbare Einschreibnummer</li>
          <li><strong>Versendet:</strong> Getrennt vom Kunstwerk (2-3 Tage später)</li>
          <li><strong>Unterschrift erforderlich:</strong> Lieferung mit Identifikation</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="alert alert-info mt-4 mb-0" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  <small><strong>Warum getrennte Versendung?</strong> Dieses Protokoll bietet doppelte Garantie: Sollte eines der beiden Pakete während des Transports Probleme haben, kommt das andere dennoch intakt an. Darüber hinaus reduziert es das Diebstahlrisiko drastisch, da das Kunstwerk ohne Zertifikat einen begrenzten Wert hat und umgekehrt. Sie erhalten zwei separate Tracking-Codes, um beide Sendungen zu überwachen.</small>
</div>`,

        // FAQ 10
        "faq.q10": "Versenden Sie weltweit?",
        "faq.a10": "Ja, wir versenden weltweit. Die Versandkosten werden basierend auf Zielort und Abmessungen des Kunstwerks berechnet. Für detaillierte Kosteninformationen kontaktieren Sie uns bitte direkt und geben Sie das gewünschte Kunstwerk und den Zielort an.",

        // FAQ 11.5
        "faq.q11_5": "Wie werden die Kunstwerke verpackt?",
        "faq.a11_5": "Jedes Kunstwerk wird mit äußerster Sorgfalt verpackt, wobei hochwertige Materialien verwendet werden: Luftpolsterfolie, verstärkter Karton, Schutzwinkel und professionelles Klebeband. Größere oder empfindliche Kunstwerke werden in maßgeschneiderten Holzkisten platziert. Alle Verpackungen sind so konzipiert, dass sie während des Transports maximalen Schutz bieten und mit deutlich sichtbarem \"Zerbrechlich\"-Etikett ankommen.",

        // FAQ 11 (HTML komplex)
        "faq.q11": "Was passiert, wenn das Kunstwerk oder das Zertifikat beschädigt ankommt?",
        "faq.a11": `<h6 class="fw-bold mb-3">🛡️ Totale Transportgarantie</h6>
<p>Sowohl das Kunstwerk als auch das Zertifikat sind <strong>vollständig versichert</strong> während der gesamten Versandreise. Bei Schäden oder Problemen sind wir durch eine professionelle Versicherungspolice abgedeckt, die Folgendes garantiert:</p>
<ul class="mb-3">
  <li><strong>Vollständige Rückerstattung</strong> des Kunstwerkwerts (einschließlich Versandkosten)</li>
  <li><strong>Sofortiger Ersatz</strong> mit gleichwertigem Kunstwerk, falls verfügbar</li>
  <li><strong>Teilschadensdeckung</strong> mit professioneller Bewertung</li>
  <li><strong>Totalschutz</strong> vor Diebstahl oder Verlust</li>
</ul>
<h6 class="fw-bold mt-4 mb-3">📸 Verfahren bei Schäden</h6>
<ol class="mb-3">
  <li><strong>Nicht unterschreiben</strong> den Zustellschein, wenn das Paket beschädigt aussieht</li>
  <li><strong>Dokumentieren Sie sofort</strong> mit Fotos und Video den Schaden (Paket + Inhalt)</li>
  <li><strong>Kontaktieren Sie uns innerhalb von 24 Stunden</strong> per E-Mail, WhatsApp oder Telefon</li>
  <li><strong>Senden Sie die Dokumentation</strong> Fotos und Tracking-Nummer</li>
  <li><strong>Schnelle Bearbeitung:</strong> Wir aktivieren den Versicherungsanspruch innerhalb von 48 Stunden</li>
</ol>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check-fill me-2"></i>
  <small><strong>Ihre Zufriedenheit ist garantiert:</strong> In den letzten 5 Jahren hatten wir weniger als 0,1% Vorfälle während des Versands, alle mit voller Kundenzufriedenheit gelöst. Unsere professionelle Verpackung und getrennte Versendung minimieren jedes Risiko.</small>
</div>`,

        // FAQ 11.6
        "faq.q11_6": "Wie soll ich das Kunstwerk reinigen und aufbewahren?",
        "faq.a11_6": "Zum Reinigen verwenden Sie ein weiches, trockenes Tuch, um Staub vorsichtig zu entfernen. Vermeiden Sie unbedingt Chemikalien, Wasser oder Reinigungsmittel, die die Pigmente beschädigen könnten. Bewahren Sie das Kunstwerk fern von direktem Sonnenlicht, Wärmequellen und übermäßiger Feuchtigkeit auf. Die ideale Temperatur liegt zwischen 18-24°C bei 40-60% relativer Luftfeuchtigkeit. Wenn das Kunstwerk mit Glas gerahmt ist, reinigen Sie nur das äußere Glas.",
        "faq.a11_6_warning": "Wichtig: Berühren Sie niemals die Oberfläche des Kunstwerks mit den Händen. Natürliche Hautöle können die Pigmente im Laufe der Zeit beschädigen.",

        // FAQ 12
        "faq.q12": "Kann ich ein personalisiertes Kunstwerk in Auftrag geben?",
        "faq.a12": "Ja, Mario Vetere akzeptiert Aufträge für personalisierte Kunstwerke. Sie können uns über das Kontaktformular oder direkt per E-Mail/WhatsApp kontaktieren, um Ihre Ideen, Abmessungen, Farben und Entstehungszeiten zu besprechen. Jeder Auftrag ist einzigartig und wird mit größter Sorgfalt behandelt.",
        "faq.contact_us": "Kontaktieren Sie uns für einen Auftrag",

        // FAQ 13
        "faq.q13": "Wie lange dauert ein personalisierter Auftrag?",
        "faq.a13": "Die Zeiten für einen personalisierten Auftrag variieren je nach Komplexität des Kunstwerks, Abmessungen und erforderlicher Technik. Im Allgemeinen erfordert ein personalisiertes Kunstwerk 4 bis 12 Wochen. Die genauen Zeiten werden zum Zeitpunkt des Auftrags vereinbart und Sie erhalten einen detaillierten Zeitplan.",

        // FAQ 14
        "faq.q14": "Organisieren Sie Workshops oder Kurse zur #negativoèpositivo®-Technik?",
        "faq.a14": "Ja, Mario Vetere organisiert regelmäßig Workshops und Kurse, um die #negativoèpositivo®-Technik zu lehren. Die Workshops können einzeln oder in Gruppen stattfinden und werden sowohl persönlich als auch online organisiert. Kontaktieren Sie uns für Informationen zu Terminen, Kosten und Verfügbarkeit.",
        "faq.ask_workshop": "Informationen zu Workshops anfordern",

        // FAQ 15
        "faq.q15": "Kann ich ein Kunstwerk zurückgeben, wenn ich nicht zufrieden bin?",
        "faq.a15": "Ja, Sie haben das Recht, das Kunstwerk innerhalb von 14 Tagen nach Lieferung zurückzugeben, vorausgesetzt, es befindet sich im selben Zustand wie beim Erhalt, mit Originalverpackung und Echtheitszertifikat. Die Versandkosten für die Rücksendung trägt der Käufer. Bei personalisierten Aufträgen gilt das Widerrufsrecht möglicherweise nicht. Kontaktieren Sie uns für weitere Informationen.",

        // FAQ 16
        "faq.q16": "Gibt es eine Garantie auf die Kunstwerke?",
        "faq.a16": "Ja, alle Kunstwerke sind gegen Herstellungsfehler garantiert. Bei Problemen im Zusammenhang mit der Qualität des Kunstwerks oder der verwendeten Technik werden wir Ersatz oder Rückerstattung gewähren. Die Garantie deckt keine Schäden ab, die durch Fahrlässigkeit, Unfälle oder normale Abnutzung verursacht werden."
      },

      fr: {
        // Catégories
        "faq.title": "Vous avez des questions?",
        "faq.subtitle": "Trouvez des réponses aux questions les plus courantes sur la technique #negativoèpositivo®, l'achat d'œuvres, l'expédition et bien plus encore.",
        "faq.category_technique": "La technique #negativoèpositivo®",
        "faq.category_purchase": "Achat d'œuvres",
        "faq.category_certificate": "Certificats et authenticité",
        "faq.category_shipping": "Expédition et livraison",
        "faq.category_maintenance": "Entretien et soins",
        "faq.category_commission": "Commandes et personnalisations",
        "faq.category_workshop": "Ateliers et cours",
        "faq.category_returns": "Retours et garanties",

        // FAQ 1
        "faq.q1": "Qu'est-ce que la technique #negativoèpositivo®?",
        "faq.a1": "La technique #negativoèpositivo® est une technique de peinture brevetée unique au monde, créée par Mario Vetere. Elle consiste à peindre l'œuvre en négatif (avec des couleurs inversées) et à la révéler en positif grâce à un processus de développement spécial. Chaque œuvre est une expérience visuelle unique qui transforme la façon de percevoir l'art contemporain.",
        "faq.learn_more": "En savoir plus sur la technique",

        // FAQ 2
        "faq.q2": "Comment fonctionne le processus de révélation négatif/positif?",
        "faq.a2": "L'œuvre est initialement peinte en négatif, en utilisant des couleurs complémentaires à celles finales. Grâce à un processus de développement chimico-physique breveté, l'œuvre est ensuite \"révélée\" en transformant les couleurs négatives en leurs correspondants positifs. Ce processus crée un effet visuel extraordinaire et rend chaque œuvre absolument unique et irrépétable.",

        // FAQ 3
        "faq.q3": "Pourquoi cette technique est-elle brevetée?",
        "faq.a3": "La technique #negativoèpositivo® a été brevetée car elle représente une innovation unique dans le domaine de l'art contemporain. Le processus de développement et de révélation est le fruit d'années de recherche et d'expérimentation, et garantit que chaque œuvre réalisée avec cette technique est authentique et certifiée.",

        // FAQ 4
        "faq.q4": "Comment puis-je acheter une œuvre?",
        "faq.a4": "Vous pouvez acheter une œuvre directement sur le site en sélectionnant l'œuvre qui vous intéresse et en procédant au paiement. Alternativement, vous pouvez nous contacter via le formulaire de contact, par email ou WhatsApp pour recevoir des informations personnalisées et une assistance lors de l'achat.",
        "faq.browse_artworks": "Parcourir les œuvres disponibles",

        // FAQ 5
        "faq.q5": "Quels modes de paiement acceptez-vous?",
        "faq.a5": "Nous acceptons les paiements par carte de crédit/débit (Visa, Mastercard, American Express), virement bancaire et PayPal. Tous les paiements sont protégés et sécurisés. Pour les montants élevés, des paiements échelonnés peuvent être convenus.",

        // FAQ 6
        "faq.q6": "Les œuvres sont-elles disponibles immédiatement?",
        "faq.a6": "La disponibilité varie selon l'œuvre. Certaines œuvres sont disponibles immédiatement, tandis que d'autres peuvent nécessiter une période de préparation. Chaque œuvre a sa disponibilité indiquée sur sa page dédiée. Pour les commandes personnalisées, les délais sont convenus au moment de la commande.",

        // FAQ 6.5
        "faq.q6_5": "Puis-je demander des photos ou vidéos supplémentaires d'une œuvre?",
        "faq.a6_5": "Absolument oui! Nous comprenons l'importance de voir l'œuvre sous différents angles avant l'achat. Contactez-nous et nous serons heureux de vous envoyer des photos haute résolution, des détails en gros plan ou de courtes vidéos de l'œuvre qui vous intéresse. Nous pouvons également organiser un appel vidéo pour vous montrer l'œuvre en direct et répondre à toutes vos questions.",

        // FAQ 6.6
        "faq.q6_6": "Les œuvres sont-elles des pièces uniques ou des reproductions?",
        "faq.a6_6": "Toutes les œuvres vendues sont des pièces uniques et originales, peintes à la main par Mario Vetere en utilisant la technique brevetée #negativoèpositivo®. Il ne s'agit pas d'impressions, de reproductions ou d'éditions limitées. Chaque œuvre est irrépétable par la nature même de la technique utilisée, ce qui rend impossible de créer deux œuvres identiques. Cela garantit l'exclusivité et la valeur de l'investissement.",

        // FAQ 6.7
        "faq.q6_7": "Puis-je voir l'œuvre en personne avant de l'acheter?",
        "faq.a6_7": "Oui, c'est possible! Si vous êtes dans la région ou souhaitez planifier une visite, vous pouvez prendre rendez-vous pour voir les œuvres disponibles directement dans l'atelier de l'artiste. C'est une opportunité unique de rencontrer Mario Vetere en personne, de voir de près la technique #negativoèpositivo® et de mieux comprendre le processus créatif. Contactez-nous pour convenir d'une date et d'une heure.",
        "faq.book_visit": "Réserver une visite d'atelier",

        // FAQ 7 (HTML complexe)
        "faq.q7": "Chaque œuvre comprend-elle un certificat d'authenticité?",
        "faq.a7": `<p><strong>Absolument oui.</strong> Chaque œuvre achetée comprend un certificat d'authenticité officiel signé personnellement par Mario Vetere qui atteste:</p>
<ul class="mt-3">
  <li>L'originalité et l'unicité de l'œuvre</li>
  <li>La technique brevetée #negativoèpositivo® utilisée</li>
  <li>Dimensions, matériaux et année de réalisation</li>
  <li>Numéro de série unique et non reproductible</li>
  <li>Codes d'identification des puces NFC présentes sur l'œuvre et le certificat</li>
</ul>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check me-2"></i>
  <strong>Sécurité maximale:</strong> Le certificat représente non seulement une garantie d'authenticité, mais aussi un document de valeur qui augmente l'appréciation et la cotation de l'œuvre dans le temps. Mario Vetere maintient un registre personnel hors ligne de toutes les œuvres certifiées pour vérification permanente.
</div>`,

        // FAQ 8 (HTML complexe)
        "faq.q8": "Comment fonctionne le système d'authentification NFC?",
        "faq.a8": `<h6 class="fw-bold mb-3">🔒 Technologie de sécurité avancée</h6>
<p>Chaque œuvre et son certificat d'authenticité sont protégés par des <strong>puces NFC originales NXP NTAG213/215/216</strong>, le même standard utilisé dans les applications bancaires et de sécurité de haut niveau.</p>
<h6 class="fw-bold mt-4 mb-3">📱 Comment vérifier l'authenticité</h6>
<ol class="mb-3">
  <li><strong>Activez NFC</strong> sur votre smartphone (Paramètres → Connexions → NFC)</li>
  <li><strong>Approchez votre smartphone</strong> de la puce sur l'œuvre ou le certificat (distance max 4cm)</li>
  <li><strong>Lisez automatiquement</strong> le code unique et les données de l'œuvre</li>
  <li><strong>Vérifiez la correspondance</strong> avec les codes imprimés sur le certificat papier</li>
</ol>
<h6 class="fw-bold mt-4 mb-3">🛡️ Sécurité absolue</h6>
<ul class="mb-3">
  <li><strong>Puces non modifiables:</strong> Les données sont écrites en mémoire permanente et ne peuvent pas être altérées</li>
  <li><strong>Code unique:</strong> Chaque puce a un identifiant unique mondial qui ne peut pas être dupliqué</li>
  <li><strong>Double authentification:</strong> Puce sur l'œuvre + puce sur le certificat avec codes corrélés</li>
  <li><strong>Registre hors ligne:</strong> Mario Vetere maintient une liste personnelle hors ligne de toutes les œuvres pour vérification croisée</li>
</ul>
<div class="alert alert-warning mt-3 mb-0" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  <small><strong>Important:</strong> Toute tentative de manipulation ou de retrait de la puce NFC endommage irréversiblement l'authenticité de l'œuvre. La plupart des smartphones Android et iPhone (7 et suivants) supportent la lecture NFC native.</small>
</div>`,

        // FAQ 9 (HTML complexe)
        "faq.q9": "Comment sont expédiées les œuvres et les certificats?",
        "faq.a9": `<h6 class="fw-bold mb-3">📦 Système d'expédition sécurisé séparé</h6>
<p>Pour garantir une <strong>sécurité et une protection maximales</strong> contre la perte ou les dommages, nous adoptons un protocole d'expédition professionnel en deux phases distinctes:</p>
<div class="row g-3 mt-3">
  <div class="col-md-6">
    <div class="card bg-dark border-primary">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-image me-2 text-primary"></i>1. Œuvre d'art</h6>
        <ul class="small mb-0">
          <li><strong>Méthode:</strong> Courrier express assuré</li>
          <li><strong>Emballage:</strong> Professionnel avec matériaux de haute qualité</li>
          <li><strong>Assurance:</strong> Couverture totale à la valeur de l'œuvre</li>
          <li><strong>Suivi:</strong> Code de suivi en temps réel</li>
          <li><strong>Délais Italie:</strong> 3-5 jours ouvrables</li>
          <li><strong>Délais Europe:</strong> 5-8 jours ouvrables</li>
          <li><strong>Délais Hors UE:</strong> 7-14 jours ouvrables</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card bg-dark border-success">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-award me-2 text-success"></i>2. Certificat d'authenticité</h6>
        <ul class="small mb-0">
          <li><strong>Méthode:</strong> Lettre recommandée avec accusé de réception</li>
          <li><strong>Protection:</strong> Enveloppe rigide protectrice</li>
          <li><strong>Assurance:</strong> Couverture complète</li>
          <li><strong>Suivi:</strong> Numéro de recommandé traçable</li>
          <li><strong>Expédié:</strong> Séparément de l'œuvre (2-3 jours après)</li>
          <li><strong>Signature requise:</strong> Livraison avec identification</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="alert alert-info mt-4 mb-0" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  <small><strong>Pourquoi une expédition séparée?</strong> Ce protocole offre une double garantie: si l'un des deux colis devait avoir des problèmes pendant le transport, l'autre arrivera quand même intact. De plus, cela réduit drastiquement le risque de vol, car l'œuvre sans certificat a une valeur limitée et vice versa. Vous recevrez deux codes de suivi séparés pour surveiller les deux expéditions.</small>
</div>`,

        // FAQ 10
        "faq.q10": "Expédiez-vous dans le monde entier?",
        "faq.a10": "Oui, nous expédions dans le monde entier. Les frais d'expédition sont calculés en fonction de la destination et des dimensions de l'œuvre. Pour des informations détaillées sur les coûts, contactez-nous directement en indiquant l'œuvre d'intérêt et la destination.",

        // FAQ 11.5
        "faq.q11_5": "Comment sont emballées les œuvres?",
        "faq.a11_5": "Chaque œuvre est emballée avec un soin extrême en utilisant des matériaux de haute qualité: bulles d'air, carton renforcé, coins de protection et ruban adhésif professionnel. Les œuvres plus grandes ou délicates sont placées dans des caisses en bois sur mesure. Tous les emballages sont conçus pour garantir une protection maximale pendant le transport et arrivent avec l'étiquette \"Fragile\" clairement visible.",

        // FAQ 11 (HTML complexe)
        "faq.q11": "Que se passe-t-il si l'œuvre ou le certificat arrive endommagé?",
        "faq.a11": `<h6 class="fw-bold mb-3">🛡️ Garantie totale sur le transport</h6>
<p>L'œuvre et le certificat sont <strong>entièrement assurés</strong> tout au long du parcours d'expédition. En cas de dommages ou de problèmes, nous sommes couverts par une police d'assurance professionnelle qui garantit:</p>
<ul class="mb-3">
  <li><strong>Remboursement complet</strong> de la valeur de l'œuvre (frais d'expédition inclus)</li>
  <li><strong>Remplacement immédiat</strong> avec une œuvre équivalente, si disponible</li>
  <li><strong>Couverture des dommages partiels</strong> avec évaluation professionnelle</li>
  <li><strong>Protection totale</strong> contre le vol ou la perte</li>
</ul>
<h6 class="fw-bold mt-4 mb-3">📸 Procédure en cas de dommages</h6>
<ol class="mb-3">
  <li><strong>Ne signez pas</strong> le récépissé de livraison si le colis semble endommagé</li>
  <li><strong>Documentez immédiatement</strong> avec photos et vidéo le dommage (colis + contenu)</li>
  <li><strong>Contactez-nous dans les 24 heures</strong> par email, WhatsApp ou téléphone</li>
  <li><strong>Envoyez la documentation</strong> photos et numéro de suivi</li>
  <li><strong>Traitement rapide:</strong> Nous activons la réclamation d'assurance dans les 48 heures</li>
</ol>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check-fill me-2"></i>
  <small><strong>Votre satisfaction est garantie:</strong> Au cours des 5 dernières années, nous avons eu moins de 0,1% d'incidents pendant l'expédition, tous résolus avec une satisfaction client complète. Notre emballage professionnel et l'expédition séparée minimisent tout risque.</small>
</div>`,

        // FAQ 11.6
        "faq.q11_6": "Comment dois-je nettoyer et conserver l'œuvre?",
        "faq.a11_6": "Pour le nettoyage, utilisez un chiffon doux et sec pour retirer délicatement la poussière. Évitez absolument les produits chimiques, l'eau ou les détergents qui pourraient endommager les pigments. Conservez l'œuvre à l'écart de la lumière directe du soleil, des sources de chaleur et de l'humidité excessive. La température idéale est entre 18-24°C avec 40-60% d'humidité relative. Si l'œuvre est encadrée avec du verre, nettoyez uniquement le verre extérieur.",
        "faq.a11_6_warning": "Important: Ne touchez jamais la surface de l'œuvre avec vos mains. Les huiles naturelles de la peau peuvent endommager les pigments au fil du temps.",

        // FAQ 12
        "faq.q12": "Puis-je commander une œuvre personnalisée?",
        "faq.a12": "Oui, Mario Vetere accepte les commandes pour des œuvres personnalisées. Vous pouvez nous contacter via le formulaire de contact ou directement par email/WhatsApp pour discuter de vos idées, dimensions, couleurs et délais de réalisation. Chaque commande est unique et traitée avec le plus grand soin.",
        "faq.contact_us": "Contactez-nous pour une commande",

        // FAQ 13
        "faq.q13": "Combien de temps prend une commande personnalisée?",
        "faq.a13": "Les délais pour une commande personnalisée varient selon la complexité de l'œuvre, les dimensions et la technique requise. Généralement, une œuvre personnalisée nécessite 4 à 12 semaines. Les délais exacts sont convenus au moment de la commande et vous recevrez un calendrier détaillé.",

        // FAQ 14
        "faq.q14": "Organisez-vous des ateliers ou des cours sur la technique #negativoèpositivo®?",
        "faq.a14": "Oui, Mario Vetere organise périodiquement des ateliers et des cours pour enseigner la technique #negativoèpositivo®. Les ateliers peuvent être individuels ou en groupe et sont organisés à la fois en présentiel et en ligne. Contactez-nous pour des informations sur les dates, les coûts et la disponibilité.",
        "faq.ask_workshop": "Demander des informations sur les ateliers",

        // FAQ 15
        "faq.q15": "Puis-je retourner une œuvre si je ne suis pas satisfait?",
        "faq.a15": "Oui, vous avez le droit de retourner l'œuvre dans les 14 jours suivant la livraison, à condition qu'elle soit dans le même état que lors de la réception, avec l'emballage d'origine et le certificat d'authenticité. Les frais d'expédition pour le retour sont à la charge de l'acheteur. Pour les commandes personnalisées, le droit de rétractation peut ne pas s'appliquer. Contactez-nous pour plus d'informations.",

        // FAQ 16
        "faq.q16": "Y a-t-il une garantie sur les œuvres?",
        "faq.a16": "Oui, toutes les œuvres sont garanties contre les défauts de fabrication. En cas de problèmes liés à la qualité de l'œuvre ou à la technique utilisée, nous fournirons un remplacement ou un remboursement. La garantie ne couvre pas les dommages causés par la négligence, les accidents ou l'usure normale."
      },

      es: {
        // Categorías
        "faq.title": "¿Tienes preguntas?",
        "faq.subtitle": "Encuentra respuestas a las preguntas más comunes sobre la técnica #negativoèpositivo®, la compra de obras, el envío y mucho más.",
        "faq.category_technique": "La técnica #negativoèpositivo®",
        "faq.category_purchase": "Compra de obras",
        "faq.category_certificate": "Certificados y autenticidad",
        "faq.category_shipping": "Envío y entrega",
        "faq.category_maintenance": "Mantenimiento y cuidado",
        "faq.category_commission": "Encargos y personalizaciones",
        "faq.category_workshop": "Talleres y cursos",
        "faq.category_returns": "Devoluciones y garantías",

        // FAQ 1
        "faq.q1": "¿Qué es la técnica #negativoèpositivo®?",
        "faq.a1": "La técnica #negativoèpositivo® es una técnica pictórica patentada única en el mundo, creada por Mario Vetere. Consiste en pintar la obra en negativo (con colores invertidos) y revelarla en positivo mediante un proceso de desarrollo especial. Cada obra es una experiencia visual única que transforma la forma de percibir el arte contemporáneo.",
        "faq.learn_more": "Más información sobre la técnica",

        // FAQ 2
        "faq.q2": "¿Cómo funciona el proceso de revelado negativo/positivo?",
        "faq.a2": "La obra se pinta inicialmente en negativo, utilizando colores complementarios a los finales. A través de un proceso de desarrollo químico-físico patentado, la obra se \"revela\" transformando los colores negativos en sus correspondientes positivos. Este proceso crea un efecto visual extraordinario y hace que cada obra sea absolutamente única e irrepetible.",

        // FAQ 3
        "faq.q3": "¿Por qué esta técnica está patentada?",
        "faq.a3": "La técnica #negativoèpositivo® ha sido patentada porque representa una innovación única en el campo del arte contemporáneo. El proceso de desarrollo y revelado es el resultado de años de investigación y experimentación, y garantiza que cada obra realizada con esta técnica sea auténtica y certificada.",

        // FAQ 4
        "faq.q4": "¿Cómo puedo comprar una obra?",
        "faq.a4": "Puedes comprar una obra directamente en el sitio web seleccionando la obra que te interesa y procediendo con el pago. Alternativamente, puedes contactarnos a través del formulario de contacto, por email o WhatsApp para recibir información personalizada y asistencia durante la compra.",
        "faq.browse_artworks": "Explorar obras disponibles",

        // FAQ 5
        "faq.q5": "¿Qué métodos de pago aceptan?",
        "faq.a5": "Aceptamos pagos con tarjeta de crédito/débito (Visa, Mastercard, American Express), transferencia bancaria y PayPal. Todos los pagos están protegidos y son seguros. Para importes elevados, se pueden acordar pagos a plazos.",

        // FAQ 6
        "faq.q6": "¿Las obras están disponibles inmediatamente?",
        "faq.a6": "La disponibilidad varía según la obra. Algunas obras están disponibles inmediatamente, mientras que otras pueden requerir un período de preparación. Cada obra tiene su disponibilidad indicada en su página dedicada. Para encargos personalizados, los tiempos se acuerdan en el momento del pedido.",

        // FAQ 6.5
        "faq.q6_5": "¿Puedo solicitar fotos o videos adicionales de una obra?",
        "faq.a6_5": "¡Absolutamente sí! Entendemos la importancia de ver la obra desde diferentes ángulos antes de la compra. Contáctanos y estaremos encantados de enviarte fotos de alta resolución, detalles de cerca o videos cortos de la obra que te interesa. También podemos organizar una videollamada para mostrarte la obra en vivo y responder todas tus preguntas.",

        // FAQ 6.6
        "faq.q6_6": "¿Las obras son piezas únicas o reproducciones?",
        "faq.a6_6": "Todas las obras vendidas son piezas únicas y originales, pintadas a mano por Mario Vetere utilizando la técnica patentada #negativoèpositivo®. No se trata de impresiones, reproducciones o ediciones limitadas. Cada obra es irrepetible por la naturaleza misma de la técnica utilizada, lo que hace imposible crear dos obras idénticas. Esto garantiza la exclusividad y el valor de la inversión.",

        // FAQ 6.7
        "faq.q6_7": "¿Puedo ver la obra en persona antes de comprarla?",
        "faq.a6_7": "¡Sí, es posible! Si estás en la zona o deseas planificar una visita, puedes reservar una cita para ver las obras disponibles directamente en el estudio del artista. Es una oportunidad única para conocer a Mario Vetere en persona, ver de cerca la técnica #negativoèpositivo® y comprender mejor el proceso creativo. Contáctanos para acordar fecha y hora.",
        "faq.book_visit": "Reservar visita al estudio",

        // FAQ 7 (HTML complejo)
        "faq.q7": "¿Cada obra incluye un certificado de autenticidad?",
        "faq.a7": `<p><strong>Absolutamente sí.</strong> Cada obra comprada incluye un certificado de autenticidad oficial firmado personalmente por Mario Vetere que certifica:</p>
<ul class="mt-3">
  <li>La originalidad y unicidad de la obra</li>
  <li>La técnica patentada #negativoèpositivo® utilizada</li>
  <li>Dimensiones, materiales y año de realización</li>
  <li>Número de serie único y no reproducible</li>
  <li>Códigos de identificación de los chips NFC presentes en la obra y el certificado</li>
</ul>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check me-2"></i>
  <strong>Máxima seguridad:</strong> El certificado representa no solo una garantía de autenticidad, sino también un documento de valor que aumenta la apreciación y cotización de la obra en el tiempo. Mario Vetere mantiene un registro personal offline de todas las obras certificadas para verificación permanente.
</div>`,

        // FAQ 8 (HTML complejo)
        "faq.q8": "¿Cómo funciona el sistema de autenticación NFC?",
        "faq.a8": `<h6 class="fw-bold mb-3">🔒 Tecnología de seguridad avanzada</h6>
<p>Cada obra y su certificado de autenticidad están protegidos por <strong>chips NFC originales NXP NTAG213/215/216</strong>, el mismo estándar utilizado en aplicaciones bancarias y de seguridad de alto nivel.</p>
<h6 class="fw-bold mt-4 mb-3">📱 Cómo verificar la autenticidad</h6>
<ol class="mb-3">
  <li><strong>Activa NFC</strong> en tu smartphone (Configuración → Conexiones → NFC)</li>
  <li><strong>Acerca tu smartphone</strong> al chip en la obra o certificado (distancia máx. 4cm)</li>
  <li><strong>Lee automáticamente</strong> el código único y los datos de la obra</li>
  <li><strong>Verifica la correspondencia</strong> con los códigos impresos en el certificado en papel</li>
</ol>
<h6 class="fw-bold mt-4 mb-3">🛡️ Seguridad absoluta</h6>
<ul class="mb-3">
  <li><strong>Chips no modificables:</strong> Los datos están escritos en memoria permanente y no pueden ser alterados</li>
  <li><strong>Código único:</strong> Cada chip tiene un identificador único mundial que no puede ser duplicado</li>
  <li><strong>Doble autenticación:</strong> Chip en la obra + chip en el certificado con códigos correlacionados</li>
  <li><strong>Registro offline:</strong> Mario Vetere mantiene una lista personal offline de todas las obras para verificación cruzada</li>
</ul>
<div class="alert alert-warning mt-3 mb-0" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  <small><strong>Importante:</strong> Cualquier intento de manipulación o extracción del chip NFC daña irreversiblemente la autenticidad de la obra. La mayoría de los smartphones Android e iPhone (7 y posteriores) soportan lectura NFC nativa.</small>
</div>`,

        // FAQ 9 (HTML complejo)
        "faq.q9": "¿Cómo se envían las obras y los certificados?",
        "faq.a9": `<h6 class="fw-bold mb-3">📦 Sistema de envío seguro separado</h6>
<p>Para garantizar <strong>máxima seguridad y protección</strong> contra pérdidas o daños, adoptamos un protocolo de envío profesional en dos fases distintas:</p>
<div class="row g-3 mt-3">
  <div class="col-md-6">
    <div class="card bg-dark border-primary">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-image me-2 text-primary"></i>1. Obra de arte</h6>
        <ul class="small mb-0">
          <li><strong>Método:</strong> Mensajería express asegurada</li>
          <li><strong>Embalaje:</strong> Profesional con materiales de alta calidad</li>
          <li><strong>Seguro:</strong> Cobertura total al valor de la obra</li>
          <li><strong>Seguimiento:</strong> Código de seguimiento en tiempo real</li>
          <li><strong>Tiempos Italia:</strong> 3-5 días laborables</li>
          <li><strong>Tiempos Europa:</strong> 5-8 días laborables</li>
          <li><strong>Tiempos Extra-UE:</strong> 7-14 días laborables</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card bg-dark border-success">
      <div class="card-body">
        <h6 class="card-title fw-bold mb-3"><i class="bi bi-award me-2 text-success"></i>2. Certificado de autenticidad</h6>
        <ul class="small mb-0">
          <li><strong>Método:</strong> Carta certificada con acuse de recibo</li>
          <li><strong>Protección:</strong> Sobre rígido protector</li>
          <li><strong>Seguro:</strong> Cobertura completa</li>
          <li><strong>Seguimiento:</strong> Número de certificado rastreable</li>
          <li><strong>Enviado:</strong> Separadamente de la obra (2-3 días después)</li>
          <li><strong>Firma requerida:</strong> Entrega con identificación</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="alert alert-info mt-4 mb-0" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  <small><strong>¿Por qué envío separado?</strong> Este protocolo ofrece doble garantía: si uno de los dos paquetes tuviera problemas durante el transporte, el otro llegará intacto de todos modos. Además, reduce drásticamente el riesgo de robo, ya que la obra sin certificado tiene valor limitado y viceversa. Recibirás dos códigos de seguimiento separados para monitorear ambos envíos.</small>
</div>`,

        // FAQ 10
        "faq.q10": "¿Envían a todo el mundo?",
        "faq.a10": "Sí, realizamos envíos a todo el mundo. Los costos de envío se calculan según el destino y las dimensiones de la obra. Para información detallada sobre costos, contáctanos directamente indicando la obra de interés y el destino.",

        // FAQ 11.5
        "faq.q11_5": "¿Cómo se embalan las obras?",
        "faq.a11_5": "Cada obra se embala con sumo cuidado utilizando materiales de alta calidad: plástico de burbujas, cartón reforzado, esquinas protectoras y cinta adhesiva profesional. Las obras más grandes o delicadas se colocan en cajas de madera a medida. Todos los embalajes están diseñados para garantizar la máxima protección durante el transporte y llegan con la etiqueta \"Frágil\" claramente visible.",

        // FAQ 11 (HTML complejo)
        "faq.q11": "¿Qué sucede si la obra o el certificado llega dañado?",
        "faq.a11": `<h6 class="fw-bold mb-3">🛡️ Garantía total en el transporte</h6>
<p>Tanto la obra como el certificado están <strong>completamente asegurados</strong> durante todo el recorrido de envío. En caso de daños o problemas, estamos cubiertos por una póliza de seguro profesional que garantiza:</p>
<ul class="mb-3">
  <li><strong>Reembolso completo</strong> del valor de la obra (gastos de envío incluidos)</li>
  <li><strong>Reemplazo inmediato</strong> con obra equivalente, si está disponible</li>
  <li><strong>Cobertura de daños parciales</strong> con evaluación profesional</li>
  <li><strong>Protección total</strong> contra robo o pérdida</li>
</ul>
<h6 class="fw-bold mt-4 mb-3">📸 Procedimiento en caso de daños</h6>
<ol class="mb-3">
  <li><strong>No firmes</strong> el recibo de entrega si el paquete parece dañado</li>
  <li><strong>Documenta inmediatamente</strong> con fotos y video el daño (paquete + contenido)</li>
  <li><strong>Contáctanos dentro de 24 horas</strong> por email, WhatsApp o teléfono</li>
  <li><strong>Envía la documentación</strong> fotos y número de seguimiento</li>
  <li><strong>Gestión rápida:</strong> Activamos el reclamo de seguro dentro de 48 horas</li>
</ol>
<div class="alert alert-success mt-3 mb-0" role="alert">
  <i class="bi bi-shield-check-fill me-2"></i>
  <small><strong>Tu satisfacción está garantizada:</strong> En los últimos 5 años, hemos tenido menos del 0,1% de incidentes durante los envíos, todos resueltos con plena satisfacción del cliente. Nuestro embalaje profesional y el envío separado minimizan cualquier riesgo.</small>
</div>`,

        // FAQ 11.6
        "faq.q11_6": "¿Cómo debo limpiar y conservar la obra?",
        "faq.a11_6": "Para la limpieza, usa un paño suave y seco para retirar delicadamente el polvo. Evita absolutamente productos químicos, agua o detergentes que podrían dañar los pigmentos. Conserva la obra alejada de la luz solar directa, fuentes de calor y humedad excesiva. La temperatura ideal es entre 18-24°C con 40-60% de humedad relativa. Si la obra está enmarcada con vidrio, limpia solo el vidrio exterior.",
        "faq.a11_6_warning": "Importante: Nunca toques la superficie de la obra con las manos. Los aceites naturales de la piel pueden dañar los pigmentos con el tiempo.",

        // FAQ 12
        "faq.q12": "¿Puedo encargar una obra personalizada?",
        "faq.a12": "Sí, Mario Vetere acepta encargos para obras personalizadas. Puedes contactarnos a través del formulario de contacto o directamente por email/WhatsApp para discutir tus ideas, dimensiones, colores y tiempos de realización. Cada encargo es único y se trata con el máximo cuidado.",
        "faq.contact_us": "Contáctanos para un encargo",

        // FAQ 13
        "faq.q13": "¿Cuánto tiempo tarda un encargo personalizado?",
        "faq.a13": "Los tiempos para un encargo personalizado varían según la complejidad de la obra, dimensiones y técnica requerida. Generalmente, una obra personalizada requiere de 4 a 12 semanas. Los tiempos exactos se acuerdan en el momento del encargo y recibirás un calendario detallado.",

        // FAQ 14
        "faq.q14": "¿Organizan talleres o cursos sobre la técnica #negativoèpositivo®?",
        "faq.a14": "Sí, Mario Vetere organiza periódicamente talleres y cursos para enseñar la técnica #negativoèpositivo®. Los talleres pueden ser individuales o en grupo y se organizan tanto presencialmente como en línea. Contáctanos para información sobre fechas, costos y disponibilidad.",
        "faq.ask_workshop": "Solicitar información sobre talleres",

        // FAQ 15
        "faq.q15": "¿Puedo devolver una obra si no estoy satisfecho?",
        "faq.a15": "Sí, tienes derecho a devolver la obra dentro de 14 días desde la entrega, siempre que esté en las mismas condiciones en que la recibiste, con embalaje original y certificado de autenticidad. Los costos de envío para la devolución corren a cargo del comprador. Para encargos personalizados, el derecho de desistimiento puede no aplicarse. Contáctanos para más información.",

        // FAQ 16
        "faq.q16": "¿Hay una garantía en las obras?",
        "faq.a16": "Sí, todas las obras están garantizadas contra defectos de fabricación. En caso de problemas relacionados con la calidad de la obra o la técnica utilizada, proporcionaremos reemplazo o reembolso. La garantía no cubre daños causados por negligencia, accidentes o desgaste normal."
      }
    };

    // Integra le traduzioni FAQ con quelle esistenti
    Object.keys(faqTranslations).forEach(lang => {
      if (!window.i18n.translations[lang]) {
        window.i18n.translations[lang] = {};
      }
      Object.assign(window.i18n.translations[lang], faqTranslations[lang]);
    });

    console.log('✅ FAQ translations loaded and integrated');
  }

  // Inizia il processo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForI18n);
  } else {
    waitForI18n();
  }

})();

