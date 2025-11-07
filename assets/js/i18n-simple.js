/**
 * Simple i18n System - Based on Best Practices
 * Lightweight, synchronous, reliable
 */

(function() {
  'use strict';
  
  // Translations embedded (best practice: external files loaded sync)
  const translations = {
    it: {
      // General
      "skip_link": "Salta al contenuto principale",
      
      // Navigation
      "nav.home": "Home",
      "nav.artworks": "Opere",
      "nav.technique": "Tecnica",
      "nav.about": "Chi Sono",
      "nav.contact": "Contatti",
      
      // Mobile Menu
      "mobile.menu": "Menu",
      "mobile.follow": "Seguimi su",
      "mobile.contact_me": "Contattami",
      
      // Hero Section
      "hero.badge": "Tecnica Brevettata",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Arte dipinta in negativo, rivelata in positivo",
      "hero.description": "Scopri l'unica tecnica al mondo che trasforma il modo di creare e vivere l'arte contemporanea. Ogni opera è un viaggio sensoriale tra luce e ombra.",
      "hero.cta_explore": "Scopri le Opere",
      "hero.cta_technique": "Guarda la Tecnica",
      "hero.stats_artworks": "Opere Realizzate",
      "hero.stats_unique": "Unicità Garantita",
      "hero.stats_madeinitaly": "Made in Italy",
      "hero.stats_collectors": "Collezionisti",
      "hero.stats_exhibitions": "Esposizioni",
      "hero.stats_patent": "Anno del Brevetto",
      "hero.artwork_featured": "Opera in Evidenza",
      "hero.artwork_example": "Esempio di tecnica",
      "hero.cta_story": "Scopri la Storia Completa",
      "hero.reveal_button": "Rivela l'Opera",
      "hero.scroll": "Scorri per esplorare",
      
      // Artworks Section
      "artworks.badge": "Opere Selezionate",
      "artworks.title": "Una selezione curata delle opere più significative",
      "artworks.subtitle": "Disponibili per l'acquisto immediato",
      "artworks.view_all": "Vedi Tutte le Opere",
      "artworks.available": "Disponibile",
      "artworks.sold": "Venduta",
      "artworks.featured": "In Evidenza",
      "artworks.buy_now": "Acquista Ora",
      "artworks.details": "Scopri",
      "artworks.view_details": "Vedi Dettagli",
      "artworks.technique": "Tecnica",
      "artworks.technique_label": "Tecnica:",
      "artworks.dimensions": "Dimensioni",
      "artworks.price": "Prezzo",
      "artworks.artwork_alt": "Opera d'arte",
      "artworks.material_colored_chalks": "Crete colorate",
      "artworks.material_cardboard": "Cartoncino",
      "artworks.material_full": "Crete colorate su cartoncino",
      // Specific artworks titles
      "artworks.artwork1_title": "Tramonto Calabrese",
      "artworks.artwork2_title": "Riflessi Urbani",
      "artworks.artwork3_title": "Natura Silenziosa",
      
      // Opere Page
      "opere.badge": "Collezione Completa",
      "opere.title": "Le Opere",
      "opere.description": "Scopri l'intera collezione di opere realizzate con la tecnica brevettata. Ogni pezzo è un'esperienza unica tra negativo e positivo.",
      "opere.stats_total": "Opere Totali",
      "opere.stats_available": "Disponibili",
      "opere.stats_categories": "Categorie",
      "opere.search_placeholder": "Cerca per titolo, tag...",
      "opere.results_showing": "Visualizzando",
      "opere.results_artworks": "opere",
      "opere.loading": "Caricamento...",
      "opere.loading_artworks": "Caricamento opere...",
      "opere.no_results": "Nessuna opera trovata",
      "opere.no_results_desc": "Prova a modificare i filtri di ricerca",
      "opere.reset_filters": "Reset Filtri",
      "opere.filter_all": "Tutte le Categorie",
      "opere.filter_landscapes": "Paesaggi",
      "opere.filter_portraits": "Ritratti",
      "opere.filter_abstract": "Astratto",
      "opere.filter_urban": "Urbano",
      "opere.price_all": "Tutte le Fasce",
      "opere.price_under1000": "Sotto €1.000",
      "opere.price_1000_2000": "€1.000 - €2.000",
      "opere.price_over2000": "Oltre €2.000",
      "opere.sort_label": "Ordina per:",
      "opere.sort_recent": "Più Recenti",
      "opere.sort_price_low": "Prezzo: Basso → Alto",
      "opere.sort_price_high": "Prezzo: Alto → Basso",
      "opere.sort_title": "Titolo A-Z",
      "opere.cta_title": "Non hai trovato quello che cerchi?",
      "opere.cta_description": "Posso realizzare commissioni personalizzate seguendo le tue idee e preferenze",
      "opere.cta_commission": "Richiedi Commissione",
      "opere.cta_whatsapp": "WhatsApp",
      
      // Technique Section
      "technique.badge": "La Tecnica Brevettata",
      "technique.patent_badge": "Brevetto Internazionale",
      "technique.title": "La Tecnica",
      "technique.title_alt": "Inversione Cromatica",
      "technique.intro_title": "Una rivoluzione artistica che trasforma completamente il modo di concepire e creare l'arte contemporanea.",
      "technique.intro_desc": "La tecnica è l'unica al mondo che permette di dipingere un'opera in negativo cromatico, per poi rivelarla in positivo attraverso un processo fotografico innovativo.",
      "technique.subtitle": "La prima e unica tecnica al mondo che trasforma la percezione dell'arte",
      "technique.description": "Dipingo in negativo con i polpastrelli, senza pennelli. La fotografia professionale rivela poi l'opera in positivo, creando colori e atmosfere impossibili da ottenere con tecniche tradizionali.",
      "technique.point1_title": "100% Manuale",
      "technique.point1_desc": "Ogni sfumatura creata esclusivamente con i polpastrelli",
      "technique.point2_title": "Brevetto Unico",
      "technique.point2_desc": "Prima e unica tecnica registrata in Italia",
      "technique.point3_title": "Doppia Visione",
      "technique.point3_desc_part1": "L'opera esiste sia in",
      "technique.point3_desc_part2": "che in",
      "technique.cta": "Scopri di Più sulla Tecnica",
      "technique.video_cta": "Guarda il Video della Tecnica",
      "technique.process_alt": "Processo tecnica negativoèpositivo",
      
      // Artist Section
      "artist.badge": "L'Artista",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "Un percorso artistico che unisce tradizione e innovazione, trasformando una tecnica leonardesca in arte contemporanea.",
      "artist.bio_p1": "Nato a Torino da genitori calabresi, Mario Vetere scopre il suo talento artistico già all'età di 6 anni. Dopo oltre 30 anni, durante un periodo di forte crisi lavorativa, decide di dedicarsi completamente all'arte, creando la sua prima opera con il caffè della moglie.",
      "artist.bio_p2": "Da autodidatta, studia e perfeziona una delle tecniche care a Leonardo Da Vinci: il disegno su cartoncino con crete colorate, sfumate esclusivamente con i polpastrelli. Nel 2016, dopo intensi studi sui colori, crea la rivoluzionaria tecnica, la prima nel suo genere in Italia.",
      "artist.achievement_exhibitions": "Mostre Internazionali",
      "artist.description": "Da oltre 20 anni dedico la mia vita all'arte e alla ricerca. La tecnica #negativoèpositivo® nasce dalla passione per la sperimentazione e dalla volontà di creare qualcosa di veramente unico.",
      "artist.quote": "L'arte è ciò che appare e ciò che si rivela",
      "artist.portrait_alt": "Mario Vetere nel suo studio",
      "artist.cta": "La Mia Storia",
      
      // Contact CTA
      "contact.badge": "Contattami",
      "contact.title_part1": "Hai Domande?",
      "contact.title_part2": "Contattami",
      "contact.description": "Che tu sia interessato ad acquistare un'opera, a commissioni personalizzate o semplicemente a saperne di più sulla tecnica, sono qui per te.",
      "contact.cta_message": "Invia un Messaggio",
      "contact.cta_whatsapp": "WhatsApp Diretto",
      "contact.trust1": "Risposta entro 24h",
      "contact.trust2": "Consulenza gratuita",
      "contact.trust3": "Spedizione sicura",
      
      // Footer
      "footer.nav_title": "Navigazione",
      "footer.description": "Arte contemporanea con la tecnica brevettata. Un viaggio unico tra luce e ombra, tra ciò che appare e ciò che si rivela.",
      "footer.info_title": "Informazioni",
      "footer.faq": "FAQ",
      "footer.shipping": "Spedizioni",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Termini",
      "footer.newsletter_title": "Resta Aggiornato",
      "footer.newsletter_desc": "Iscriviti alla newsletter per ricevere aggiornamenti su nuove opere, mostre ed eventi esclusivi.",
      "footer.newsletter_placeholder": "La tua email",
      "footer.newsletter_button": "Iscriviti",
      "footer.quick_links": "Link Rapidi",
      "footer.contact_info": "Contatti",
      "footer.follow": "Seguici",
      "footer.rights": "Tutti i diritti riservati",
      "footer.trademark": "è un marchio registrato",
      "footer.made_with": "Made with",
      "footer.in_italy": "in Italy",
      
      // Modals
      "modal.search_placeholder": "Cerca opere, artista, tecnica...",
      "modal.video_title": "La Tecnica",
      
      // Opera Single Page
      "opera.breadcrumb_opera": "Opera",
      "opera.reveal_button": "Rivela l'Opera",
      "opera.fullscreen": "Schermo intero",
      "opera.zoom": "Zoom",
      "opera.status_available": "Disponibile",
      "opera.status_featured": "In Evidenza",
      "opera.loading": "Caricamento...",
      "opera.short_desc": "Descrizione breve dell'opera",
      "opera.price_label": "Prezzo:",
      "opera.shipping": "Spedizione",
      "opera.shipping_insured": "Assicurata",
      "opera.certificate": "Certificato",
      "opera.certificate_auth": "Autenticità",
      "opera.guarantee": "Garanzia",
      "opera.guarantee_100": "100%",
      "opera.technical_details": "Dettagli Tecnici",
      "opera.technique_label": "Tecnica:",
      "opera.material_label": "Materiale:",
      "opera.support_label": "Supporto:",
      "opera.dimensions_label": "Dimensioni:",
      "opera.year_label": "Anno:",
      "opera.certificate_number": "Certificato N°:",
      "opera.buy_now": "Acquista Ora",
      "opera.request_info": "Richiedi Informazioni",
      "opera.contact_whatsapp": "Contatta via WhatsApp",
      "opera.share": "Condividi:",
      "opera.description_title": "Descrizione",
      "opera.description_loading": "Caricamento descrizione...",
      "opera.related_title": "Opere Correlate",
      "opera.related_desc": "Altre opere che potrebbero interessarti",
      "opera.view_all": "Vedi Tutte le Opere",
      "opera.modal_title": "Richiedi Informazioni",
      "opera.modal_name": "Nome e Cognome",
      "opera.modal_email": "Email",
      "opera.modal_phone": "Telefono",
      "opera.modal_message": "Messaggio",
      "opera.modal_submit": "Invia Richiesta",
      "opera.modal_close": "Chiudi"
    },
    en: {
      // General
      "skip_link": "Skip to main content",
      
      // Navigation
      "nav.home": "Home",
      "nav.artworks": "Artworks",
      "nav.technique": "Technique",
      "nav.about": "About",
      "nav.contact": "Contact",
      
      // Mobile Menu
      "mobile.menu": "Menu",
      "mobile.follow": "Follow me on",
      "mobile.contact_me": "Contact Me",
      
      // Hero Section
      "hero.badge": "Patented Technique",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Art painted in negative, revealed in positive",
      "hero.description": "Discover the only technique in the world that transforms the way contemporary art is created and experienced. Each artwork is a sensory journey between light and shadow.",
      "hero.cta_explore": "Discover Artworks",
      "hero.cta_technique": "Watch the Technique",
      "hero.stats_artworks": "Artworks Created",
      "hero.stats_unique": "Uniqueness Guaranteed",
      "hero.stats_madeinitaly": "Made in Italy",
      "hero.stats_collectors": "Collectors",
      "hero.stats_exhibitions": "Exhibitions",
      "hero.stats_patent": "Patent Year",
      "hero.artwork_featured": "Featured Artwork",
      "hero.artwork_example": "Technique example",
      "hero.cta_story": "Discover the Full Story",
      "hero.reveal_button": "Reveal the Artwork",
      "hero.scroll": "Scroll to explore",
      
      // Artworks Section
      "artworks.badge": "Featured Artworks",
      "artworks.title": "A curated selection of the most significant works",
      "artworks.subtitle": "Available for immediate purchase",
      "artworks.view_all": "View All Artworks",
      "artworks.available": "Available",
      "artworks.sold": "Sold",
      "artworks.featured": "Featured",
      "artworks.buy_now": "Buy Now",
      "artworks.details": "Discover",
      "artworks.view_details": "View Details",
      "artworks.technique": "Technique",
      "artworks.technique_label": "Technique:",
      "artworks.dimensions": "Dimensions",
      "artworks.price": "Price",
      "artworks.artwork_alt": "Artwork",
      "artworks.material_colored_chalks": "Colored chalks",
      "artworks.material_cardboard": "Cardboard",
      "artworks.material_full": "Colored chalks on cardboard",
      // Specific artworks titles
      "artworks.artwork1_title": "Calabrian Sunset",
      "artworks.artwork2_title": "Urban Reflections",
      "artworks.artwork3_title": "Silent Nature",
      
      // Opere Page
      "opere.badge": "Complete Collection",
      "opere.title": "The Artworks",
      "opere.description": "Discover the entire collection of artworks created with the patented technique. Each piece is a unique experience between negative and positive.",
      "opere.stats_total": "Total Artworks",
      "opere.stats_available": "Available",
      "opere.stats_categories": "Categories",
      "opere.search_placeholder": "Search by title, tags...",
      "opere.results_showing": "Showing",
      "opere.results_artworks": "artworks",
      "opere.loading": "Loading...",
      "opere.loading_artworks": "Loading artworks...",
      "opere.no_results": "No artworks found",
      "opere.no_results_desc": "Try adjusting your search filters",
      "opere.reset_filters": "Reset Filters",
      "opere.filter_all": "All Categories",
      "opere.filter_landscapes": "Landscapes",
      "opere.filter_portraits": "Portraits",
      "opere.filter_abstract": "Abstract",
      "opere.filter_urban": "Urban",
      "opere.price_all": "All Ranges",
      "opere.price_under1000": "Under €1,000",
      "opere.price_1000_2000": "€1,000 - €2,000",
      "opere.price_over2000": "Over €2,000",
      "opere.sort_label": "Sort by:",
      "opere.sort_recent": "Most Recent",
      "opere.sort_price_low": "Price: Low → High",
      "opere.sort_price_high": "Price: High → Low",
      "opere.sort_title": "Title A-Z",
      "opere.cta_title": "Didn't find what you're looking for?",
      "opere.cta_description": "I can create custom commissions following your ideas and preferences",
      "opere.cta_commission": "Request Commission",
      "opere.cta_whatsapp": "WhatsApp",
      
      // Technique Section
      "technique.badge": "The Patented Technique",
      "technique.patent_badge": "International Patent",
      "technique.title": "The Technique",
      "technique.title_alt": "Chromatic Inversion",
      "technique.intro_title": "An artistic revolution that completely transforms the way of conceiving and creating contemporary art.",
      "technique.intro_desc": "The technique is the only one in the world that allows to paint an artwork in chromatic negative, then reveal it in positive through an innovative photographic process.",
      "technique.subtitle": "The first and only technique in the world that transforms the perception of art",
      "technique.description": "I paint in negative with my fingertips, without brushes. Professional photography then reveals the artwork in positive, creating colors and atmospheres impossible to achieve with traditional techniques.",
      "technique.point1_title": "100% Manual",
      "technique.point1_desc": "Every shade created exclusively with fingertips",
      "technique.point2_title": "Unique Patent",
      "technique.point2_desc": "First and only registered technique in Italy",
      "technique.point3_title": "Double Vision",
      "technique.point3_desc_part1": "The artwork exists both in",
      "technique.point3_desc_part2": "and in",
      "technique.cta": "Discover More About the Technique",
      "technique.video_cta": "Watch the Technique Video",
      "technique.process_alt": "negativoèpositivo technique process",
      
      // Artist Section
      "artist.badge": "The Artist",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "An artistic journey that combines tradition and innovation, transforming a Leonardesque technique into contemporary art.",
      "artist.bio_p1": "Born in Turin to Calabrian parents, Mario Vetere discovered his artistic talent at the age of 6. After over 30 years, during a period of severe work crisis, he decided to dedicate himself completely to art, creating his first work with his wife's coffee.",
      "artist.bio_p2": "Self-taught, he studied and perfected one of Leonardo Da Vinci's favorite techniques: drawing on cardboard with colored chalks, blended exclusively with fingertips. In 2016, after intense color studies, he created the revolutionary technique, the first of its kind in Italy.",
      "artist.achievement_exhibitions": "International Exhibitions",
      "artist.description": "For over 20 years I have dedicated my life to art and research. The #negativoèpositivo® technique was born from a passion for experimentation and the desire to create something truly unique.",
      "artist.quote": "Art is what appears and what is revealed",
      "artist.portrait_alt": "Mario Vetere in his studio",
      "artist.cta": "My Story",
      
      // Contact CTA
      "contact.badge": "Contact Me",
      "contact.title_part1": "Have Questions?",
      "contact.title_part2": "Contact Me",
      "contact.description": "Whether you are interested in purchasing an artwork, custom commissions, or simply learning more about the technique, I am here for you.",
      "contact.cta_message": "Send a Message",
      "contact.cta_whatsapp": "Direct WhatsApp",
      "contact.trust1": "Response within 24h",
      "contact.trust2": "Free consultation",
      "contact.trust3": "Secure shipping",
      
      // Footer
      "footer.nav_title": "Navigation",
      "footer.description": "Contemporary art with patented technique. A unique journey between light and shadow, between what appears and what is revealed.",
      "footer.info_title": "Information",
      "footer.faq": "FAQ",
      "footer.shipping": "Shipping",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms",
      "footer.newsletter_title": "Stay Updated",
      "footer.newsletter_desc": "Subscribe to the newsletter to receive updates on new artworks, exhibitions and exclusive events.",
      "footer.newsletter_placeholder": "Your email",
      "footer.newsletter_button": "Subscribe",
      "footer.quick_links": "Quick Links",
      "footer.contact_info": "Contact",
      "footer.follow": "Follow Us",
      "footer.rights": "All rights reserved",
      "footer.trademark": "is a registered trademark",
      "footer.made_with": "Made with",
      "footer.in_italy": "in Italy",
      
      // Modals
      "modal.search_placeholder": "Search artworks, artist, technique...",
      "modal.video_title": "The Technique",
      
      // Opera Single Page
      "opera.breadcrumb_opera": "Artwork",
      "opera.reveal_button": "Reveal the Artwork",
      "opera.fullscreen": "Fullscreen",
      "opera.zoom": "Zoom",
      "opera.status_available": "Available",
      "opera.status_featured": "Featured",
      "opera.loading": "Loading...",
      "opera.short_desc": "Short artwork description",
      "opera.price_label": "Price:",
      "opera.shipping": "Shipping",
      "opera.shipping_insured": "Insured",
      "opera.certificate": "Certificate",
      "opera.certificate_auth": "Authenticity",
      "opera.guarantee": "Guarantee",
      "opera.guarantee_100": "100%",
      "opera.technical_details": "Technical Details",
      "opera.technique_label": "Technique:",
      "opera.material_label": "Material:",
      "opera.support_label": "Support:",
      "opera.dimensions_label": "Dimensions:",
      "opera.year_label": "Year:",
      "opera.certificate_number": "Certificate No:",
      "opera.buy_now": "Buy Now",
      "opera.request_info": "Request Information",
      "opera.contact_whatsapp": "Contact via WhatsApp",
      "opera.share": "Share:",
      "opera.description_title": "Description",
      "opera.description_loading": "Loading description...",
      "opera.related_title": "Related Artworks",
      "opera.related_desc": "Other artworks you might like",
      "opera.view_all": "View All Artworks",
      "opera.modal_title": "Request Information",
      "opera.modal_name": "Full Name",
      "opera.modal_email": "Email",
      "opera.modal_phone": "Phone",
      "opera.modal_message": "Message",
      "opera.modal_submit": "Send Request",
      "opera.modal_close": "Close"
    },
    de: {
      // General
      "skip_link": "Zum Hauptinhalt springen",
      
      "nav.home": "Startseite",
      "nav.artworks": "Kunstwerke",
      "nav.technique": "Technik",
      "nav.about": "Über mich",
      "nav.contact": "Kontakt",
      
      // Mobile Menu
      "mobile.menu": "Menü",
      "mobile.follow": "Folgen Sie mir auf",
      "mobile.contact_me": "Kontaktieren Sie mich",
      "hero.badge": "Patentierte Technik",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Kunst im Negativ gemalt, im Positiv offenbart",
      "hero.description": "Entdecken Sie die einzige Technik der Welt, die die Art und Weise verändert, wie zeitgenössische Kunst geschaffen und erlebt wird. Jedes Kunstwerk ist eine sensorische Reise zwischen Licht und Schatten.",
      "hero.cta_explore": "Kunstwerke entdecken",
      "hero.cta_technique": "Technik ansehen",
      "hero.stats_artworks": "Kunstwerke",
      "hero.stats_unique": "100% Einzigartig",
      "hero.stats_madeinitaly": "Made in Italy",
      "hero.stats_collectors": "Sammler",
      "hero.stats_exhibitions": "Ausstellungen",
      "hero.stats_patent": "Patentjahr",
      "hero.artwork_featured": "Hervorgehobenes Werk",
      "hero.artwork_example": "Technikbeispiel",
      "hero.cta_story": "Die ganze Geschichte entdecken",
      "hero.reveal_button": "Das Kunstwerk enthüllen",
      "hero.scroll": "Scrollen um zu erkunden",
      "artworks.badge": "Ausgewählte Kunstwerke",
      "artworks.title": "Eine kuratierte Auswahl der bedeutendsten Werke",
      "artworks.subtitle": "Verfügbar für sofortigen Kauf",
      "artworks.view_all": "Alle Kunstwerke ansehen",
      "artworks.available": "Verfügbar",
      "artworks.sold": "Verkauft",
      "artworks.featured": "Hervorgehoben",
      "artworks.buy_now": "Jetzt kaufen",
      "artworks.details": "Entdecken",
      "artworks.view_details": "Details anzeigen",
      "artworks.technique": "Technik",
      "artworks.technique_label": "Technik:",
      "artworks.dimensions": "Abmessungen",
      "artworks.price": "Preis",
      "artworks.artwork_alt": "Kunstwerk",
      "artworks.material_colored_chalks": "Farbige Kreiden",
      "artworks.material_cardboard": "Karton",
      "artworks.material_full": "Farbige Kreiden auf Karton",
      // Specific artworks titles
      "artworks.artwork1_title": "Kalabrischer Sonnenuntergang",
      "artworks.artwork2_title": "Urbane Reflexionen",
      "artworks.artwork3_title": "Stille Natur",
      "opere.badge": "Vollständige Sammlung",
      "opere.title": "Die Kunstwerke",
      "opere.description": "Entdecken Sie die gesamte Sammlung von Kunstwerken, die mit der patentierten Technik geschaffen wurden. Jedes Stück ist eine einzigartige Erfahrung zwischen Negativ und Positiv.",
      "opere.stats_total": "Kunstwerke Gesamt",
      "opere.stats_available": "Verfügbar",
      "opere.stats_categories": "Kategorien",
      "opere.search_placeholder": "Nach Titel, Tags suchen...",
      "opere.results_showing": "Anzeigen",
      "opere.results_artworks": "Kunstwerke",
      "opere.loading": "Laden...",
      "opere.loading_artworks": "Kunstwerke laden...",
      "opere.no_results": "Keine Kunstwerke gefunden",
      "opere.no_results_desc": "Versuchen Sie, die Suchfilter anzupassen",
      "opere.reset_filters": "Filter zurücksetzen",
      "opere.filter_all": "Alle Kategorien",
      "opere.filter_landscapes": "Landschaften",
      "opere.filter_portraits": "Porträts",
      "opere.filter_abstract": "Abstrakt",
      "opere.filter_urban": "Urban",
      "opere.price_all": "Alle Bereiche",
      "opere.price_under1000": "Unter €1.000",
      "opere.price_1000_2000": "€1.000 - €2.000",
      "opere.price_over2000": "Über €2.000",
      "opere.sort_label": "Sortieren nach:",
      "opere.sort_recent": "Neueste",
      "opere.sort_price_low": "Preis: Niedrig → Hoch",
      "opere.sort_price_high": "Preis: Hoch → Niedrig",
      "opere.sort_title": "Titel A-Z",
      "opere.cta_title": "Nicht gefunden, wonach Sie suchen?",
      "opere.cta_description": "Ich kann individuelle Aufträge nach Ihren Ideen und Vorlieben erstellen",
      "opere.cta_commission": "Auftrag anfordern",
      "opere.cta_whatsapp": "WhatsApp",
      "technique.badge": "Die Patentierte Technik",
      "technique.patent_badge": "Internationales Patent",
      "technique.title": "Die Technik",
      "technique.title_alt": "Chromatische Inversion",
      "technique.intro_title": "Eine künstlerische Revolution, die die Art und Weise, wie zeitgenössische Kunst konzipiert und geschaffen wird, völlig verändert.",
      "technique.intro_desc": "Die Technik ist die einzige auf der Welt, die es ermöglicht, ein Kunstwerk in chromatischem Negativ zu malen und es dann durch einen innovativen fotografischen Prozess im Positiv zu enthüllen.",
      "technique.subtitle": "Die erste und einzige Technik der Welt, die die Wahrnehmung von Kunst transformiert",
      "technique.description": "Ich male im Negativ mit meinen Fingerspitzen, ohne Pinsel. Die professionelle Fotografie offenbart dann das Kunstwerk im Positiv und schafft Farben und Atmosphären, die mit traditionellen Techniken unmöglich zu erreichen sind.",
      "technique.point1_title": "100% Manuell",
      "technique.point1_desc": "Jede Nuance ausschließlich mit den Fingerspitzen erstellt",
      "technique.point2_title": "Einzigartiges Patent",
      "technique.point2_desc": "Erste und einzige registrierte Technik in Italien",
      "technique.point3_title": "Doppelte Vision",
      "technique.point3_desc_part1": "Das Kunstwerk existiert sowohl in",
      "technique.point3_desc_part2": "als auch in",
      "technique.cta": "Mehr über die Technik erfahren",
      "technique.video_cta": "Sehen Sie sich das Technik-Video an",
      "technique.process_alt": "negativoèpositivo Technikprozess",
      "artist.badge": "Der Künstler",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "Eine künstlerische Reise, die Tradition und Innovation verbindet und eine leonardeske Technik in zeitgenössische Kunst verwandelt.",
      "artist.bio_p1": "Geboren in Turin als Sohn kalabrischer Eltern, entdeckte Mario Vetere sein künstlerisches Talent bereits im Alter von 6 Jahren. Nach über 30 Jahren entschied er sich während einer schweren Arbeitskrise, sich vollständig der Kunst zu widmen und schuf sein erstes Werk mit dem Kaffee seiner Frau.",
      "artist.bio_p2": "Als Autodidakt studierte und perfektionierte er eine der Techniken, die Leonardo Da Vinci am Herzen lagen: das Zeichnen auf Karton mit farbigen Kreiden, die ausschließlich mit den Fingerspitzen verwischt wurden. 2016 schuf er nach intensiven Farbstudien die revolutionäre Technik, die erste ihrer Art in Italien.",
      "artist.achievement_exhibitions": "Internationale Ausstellungen",
      "artist.description": "Seit über 20 Jahren widme ich mein Leben der Kunst und Forschung. Die #negativoèpositivo®-Technik entstand aus der Leidenschaft für Experimente und dem Wunsch, etwas wirklich Einzigartiges zu schaffen.",
      "artist.quote": "Kunst ist das, was erscheint und das, was sich offenbart",
      "artist.portrait_alt": "Mario Vetere in seinem Studio",
      "artist.cta": "Meine Geschichte",
      "contact.badge": "Kontaktieren Sie mich",
      "contact.title_part1": "Haben Sie Fragen?",
      "contact.title_part2": "Kontaktieren Sie mich",
      "contact.description": "Ob Sie daran interessiert sind, ein Kunstwerk zu erwerben, individuelle Aufträge zu vergeben oder einfach mehr über die Technik zu erfahren, ich bin für Sie da.",
      "contact.cta_message": "Nachricht senden",
      "contact.cta_whatsapp": "Direkt per WhatsApp",
      "contact.trust1": "Antwort innerhalb von 24 Stunden",
      "contact.trust2": "Kostenlose Beratung",
      "contact.trust3": "Sicherer Versand",
      "footer.nav_title": "Navigation",
      "footer.description": "Zeitgenössische Kunst mit patentierter Technik. Eine einzigartige Reise zwischen Licht und Schatten, zwischen dem, was erscheint und dem, was sich offenbart.",
      "footer.info_title": "Informationen",
      "footer.faq": "FAQ",
      "footer.shipping": "Versand",
      "footer.privacy": "Datenschutz",
      "footer.terms": "Bedingungen",
      "footer.newsletter_title": "Bleiben Sie auf dem Laufenden",
      "footer.newsletter_desc": "Abonnieren Sie den Newsletter, um Updates zu neuen Kunstwerken, Ausstellungen und exklusiven Veranstaltungen zu erhalten.",
      "footer.newsletter_placeholder": "Ihre E-Mail",
      "footer.newsletter_button": "Abonnieren",
      "footer.quick_links": "Schnelllinks",
      "footer.contact_info": "Kontakt",
      "footer.follow": "Folgen Sie uns",
      "footer.rights": "Alle Rechte vorbehalten",
      "footer.trademark": "ist eine eingetragene Marke",
      "footer.made_with": "Gemacht mit",
      "footer.in_italy": "in Italien",
      
      // Modals
      "modal.search_placeholder": "Kunstwerke, Künstler, Technik suchen...",
      "modal.video_title": "Die Technik",
      
      // Opera Single Page
      "opera.breadcrumb_opera": "Kunstwerk",
      "opera.reveal_button": "Das Kunstwerk enthüllen",
      "opera.fullscreen": "Vollbild",
      "opera.zoom": "Zoom",
      "opera.status_available": "Verfügbar",
      "opera.status_featured": "Hervorgehoben",
      "opera.loading": "Laden...",
      "opera.short_desc": "Kurze Beschreibung des Kunstwerks",
      "opera.price_label": "Preis:",
      "opera.shipping": "Versand",
      "opera.shipping_insured": "Versichert",
      "opera.certificate": "Zertifikat",
      "opera.certificate_auth": "Echtheit",
      "opera.guarantee": "Garantie",
      "opera.guarantee_100": "100%",
      "opera.technical_details": "Technische Details",
      "opera.technique_label": "Technik:",
      "opera.material_label": "Material:",
      "opera.support_label": "Untergrund:",
      "opera.dimensions_label": "Abmessungen:",
      "opera.year_label": "Jahr:",
      "opera.certificate_number": "Zertifikat Nr:",
      "opera.buy_now": "Jetzt kaufen",
      "opera.request_info": "Informationen anfordern",
      "opera.contact_whatsapp": "Per WhatsApp kontaktieren",
      "opera.share": "Teilen:",
      "opera.description_title": "Beschreibung",
      "opera.description_loading": "Beschreibung laden...",
      "opera.related_title": "Ähnliche Kunstwerke",
      "opera.related_desc": "Andere Kunstwerke, die Sie interessieren könnten",
      "opera.view_all": "Alle Kunstwerke anzeigen",
      "opera.modal_title": "Informationen anfordern",
      "opera.modal_name": "Vollständiger Name",
      "opera.modal_email": "E-Mail",
      "opera.modal_phone": "Telefon",
      "opera.modal_message": "Nachricht",
      "opera.modal_submit": "Anfrage senden",
      "opera.modal_close": "Schließen"
    },
    fr: {
      // General
      "skip_link": "Aller au contenu principal",
      
      "nav.home": "Accueil",
      "nav.artworks": "Œuvres",
      "nav.technique": "Technique",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      
      // Mobile Menu
      "mobile.menu": "Menu",
      "mobile.follow": "Suivez-moi sur",
      "mobile.contact_me": "Contactez-moi",
      "hero.badge": "Technique Brevetée",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Art peint en négatif, révélé en positif",
      "hero.description": "Découvrez la seule technique au monde qui transforme la façon de créer et de vivre l'art contemporain. Chaque œuvre est un voyage sensoriel entre lumière et ombre.",
      "hero.cta_explore": "Découvrir les Œuvres",
      "hero.cta_technique": "Voir la Technique",
      "hero.stats_artworks": "Œuvres Créées",
      "hero.stats_unique": "Unicité Garantie",
      "hero.stats_madeinitaly": "Made in Italy",
      "hero.stats_collectors": "Collectionneurs",
      "hero.stats_exhibitions": "Expositions",
      "hero.stats_patent": "Année du Brevet",
      "hero.artwork_featured": "Œuvre en Vedette",
      "hero.artwork_example": "Exemple de technique",
      "hero.cta_story": "Découvrir l'Histoire Complète",
      "hero.reveal_button": "Révéler l'Œuvre",
      "hero.scroll": "Défiler pour explorer",
      "artworks.badge": "Œuvres Sélectionnées",
      "artworks.title": "Une sélection soignée des œuvres les plus significatives",
      "artworks.subtitle": "Disponibles pour un achat immédiat",
      "artworks.view_all": "Voir Toutes les Œuvres",
      "artworks.available": "Disponible",
      "artworks.sold": "Vendue",
      "artworks.featured": "En Vedette",
      "artworks.buy_now": "Acheter Maintenant",
      "artworks.details": "Découvrir",
      "artworks.view_details": "Voir les Détails",
      "artworks.technique": "Technique",
      "artworks.technique_label": "Technique :",
      "artworks.dimensions": "Dimensions",
      "artworks.price": "Prix",
      "artworks.artwork_alt": "Œuvre d'art",
      "artworks.material_colored_chalks": "Craies colorées",
      "artworks.material_cardboard": "Carton",
      "artworks.material_full": "Craies colorées sur carton",
      // Specific artworks titles
      "artworks.artwork1_title": "Coucher de Soleil Calabrais",
      "artworks.artwork2_title": "Reflets Urbains",
      "artworks.artwork3_title": "Nature Silencieuse",
      "opere.badge": "Collection Complète",
      "opere.title": "Les Œuvres",
      "opere.description": "Découvrez l'intégralité de la collection d'œuvres créées avec la technique brevetée. Chaque pièce est une expérience unique entre négatif et positif.",
      "opere.stats_total": "Œuvres Totales",
      "opere.stats_available": "Disponibles",
      "opere.stats_categories": "Catégories",
      "opere.search_placeholder": "Rechercher par titre, tags...",
      "opere.results_showing": "Affichage de",
      "opere.results_artworks": "œuvres",
      "opere.loading": "Chargement...",
      "opere.loading_artworks": "Chargement des œuvres...",
      "opere.no_results": "Aucune œuvre trouvée",
      "opere.no_results_desc": "Essayez d'ajuster vos filtres de recherche",
      "opere.reset_filters": "Réinitialiser les Filtres",
      "opere.filter_all": "Toutes les Catégories",
      "opere.filter_landscapes": "Paysages",
      "opere.filter_portraits": "Portraits",
      "opere.filter_abstract": "Abstrait",
      "opere.filter_urban": "Urbain",
      "opere.price_all": "Toutes les Gammes",
      "opere.price_under1000": "Moins de €1.000",
      "opere.price_1000_2000": "€1.000 - €2.000",
      "opere.price_over2000": "Plus de €2.000",
      "opere.sort_label": "Trier par :",
      "opere.sort_recent": "Plus Récentes",
      "opere.sort_price_low": "Prix : Bas → Haut",
      "opere.sort_price_high": "Prix : Haut → Bas",
      "opere.sort_title": "Titre A-Z",
      "opere.cta_title": "Vous n'avez pas trouvé ce que vous cherchez ?",
      "opere.cta_description": "Je peux créer des commissions personnalisées selon vos idées et préférences",
      "opere.cta_commission": "Demander une Commission",
      "opere.cta_whatsapp": "WhatsApp",
      "technique.badge": "La Technique Brevetée",
      "technique.patent_badge": "Brevet International",
      "technique.title": "La Technique",
      "technique.title_alt": "Inversion Chromatique",
      "technique.intro_title": "Une révolution artistique qui transforme complètement la façon de concevoir et de créer l'art contemporain.",
      "technique.intro_desc": "La technique est la seule au monde qui permet de peindre une œuvre en négatif chromatique, puis de la révéler en positif grâce à un processus photographique innovant.",
      "technique.subtitle": "La première et unique technique au monde qui transforme la perception de l'art",
      "technique.description": "Je peins en négatif avec mes doigts, sans pinceaux. La photographie professionnelle révèle ensuite l'œuvre en positif, créant des couleurs et des atmosphères impossibles à obtenir avec des techniques traditionnelles.",
      "technique.point1_title": "100% Manuel",
      "technique.point1_desc": "Chaque nuance créée exclusivement avec les doigts",
      "technique.point2_title": "Brevet Unique",
      "technique.point2_desc": "Première et unique technique enregistrée en Italie",
      "technique.point3_title": "Double Vision",
      "technique.point3_desc_part1": "L'œuvre existe à la fois en",
      "technique.point3_desc_part2": "et en",
      "technique.cta": "En Savoir Plus sur la Technique",
      "technique.video_cta": "Regarder la Vidéo de la Technique",
      "technique.process_alt": "Processus de la technique negativoèpositivo",
      "artist.badge": "L'Artiste",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "Un parcours artistique qui unit tradition et innovation, transformant une technique léonardesque en art contemporain.",
      "artist.bio_p1": "Né à Turin de parents calabrais, Mario Vetere découvre son talent artistique dès l'âge de 6 ans. Après plus de 30 ans, pendant une période de grave crise professionnelle, il décide de se consacrer entièrement à l'art, créant sa première œuvre avec le café de sa femme.",
      "artist.bio_p2": "Autodidacte, il étudie et perfectionne l'une des techniques chères à Léonard de Vinci : le dessin sur carton avec des craies colorées, estompées exclusivement avec les doigts. En 2016, après d'intenses études sur les couleurs, il crée la technique révolutionnaire, la première du genre en Italie.",
      "artist.achievement_exhibitions": "Expositions Internationales",
      "artist.description": "Depuis plus de 20 ans, je consacre ma vie à l'art et à la recherche. La technique #negativoèpositivo® est née de la passion pour l'expérimentation et du désir de créer quelque chose de vraiment unique.",
      "artist.quote": "L'art est ce qui apparaît et ce qui se révèle",
      "artist.portrait_alt": "Mario Vetere dans son atelier",
      "artist.cta": "Mon Histoire",
      "contact.badge": "Contactez-moi",
      "contact.title_part1": "Vous avez des Questions ?",
      "contact.title_part2": "Contactez-moi",
      "contact.description": "Que vous soyez intéressé par l'achat d'une œuvre, des commissions personnalisées ou simplement en savoir plus sur la technique, je suis là pour vous.",
      "contact.cta_message": "Envoyer un Message",
      "contact.cta_whatsapp": "WhatsApp Direct",
      "contact.trust1": "Réponse sous 24h",
      "contact.trust2": "Consultation gratuite",
      "contact.trust3": "Expédition sécurisée",
      "footer.nav_title": "Navigation",
      "footer.description": "Art contemporain avec technique brevetée. Un voyage unique entre lumière et ombre, entre ce qui apparaît et ce qui se révèle.",
      "footer.info_title": "Informations",
      "footer.faq": "FAQ",
      "footer.shipping": "Expédition",
      "footer.privacy": "Confidentialité",
      "footer.terms": "Conditions",
      "footer.newsletter_title": "Restez Informé",
      "footer.newsletter_desc": "Abonnez-vous à la newsletter pour recevoir des mises à jour sur les nouvelles œuvres, expositions et événements exclusifs.",
      "footer.newsletter_placeholder": "Votre email",
      "footer.newsletter_button": "S'abonner",
      "footer.quick_links": "Liens Rapides",
      "footer.contact_info": "Contact",
      "footer.follow": "Suivez-nous",
      "footer.rights": "Tous droits réservés",
      "footer.trademark": "est une marque déposée",
      "footer.made_with": "Fait avec",
      "footer.in_italy": "en Italie",
      
      // Modals
      "modal.search_placeholder": "Rechercher œuvres, artiste, technique...",
      "modal.video_title": "La Technique",
      
      // Opera Single Page
      "opera.breadcrumb_opera": "Œuvre",
      "opera.reveal_button": "Révéler l'Œuvre",
      "opera.fullscreen": "Plein écran",
      "opera.zoom": "Zoom",
      "opera.status_available": "Disponible",
      "opera.status_featured": "En Vedette",
      "opera.loading": "Chargement...",
      "opera.short_desc": "Brève description de l'œuvre",
      "opera.price_label": "Prix :",
      "opera.shipping": "Expédition",
      "opera.shipping_insured": "Assurée",
      "opera.certificate": "Certificat",
      "opera.certificate_auth": "Authenticité",
      "opera.guarantee": "Garantie",
      "opera.guarantee_100": "100%",
      "opera.technical_details": "Détails Techniques",
      "opera.technique_label": "Technique :",
      "opera.material_label": "Matériau :",
      "opera.support_label": "Support :",
      "opera.dimensions_label": "Dimensions :",
      "opera.year_label": "Année :",
      "opera.certificate_number": "Certificat N° :",
      "opera.buy_now": "Acheter Maintenant",
      "opera.request_info": "Demander des Informations",
      "opera.contact_whatsapp": "Contacter via WhatsApp",
      "opera.share": "Partager :",
      "opera.description_title": "Description",
      "opera.description_loading": "Chargement de la description...",
      "opera.related_title": "Œuvres Connexes",
      "opera.related_desc": "Autres œuvres qui pourraient vous intéresser",
      "opera.view_all": "Voir Toutes les Œuvres",
      "opera.modal_title": "Demander des Informations",
      "opera.modal_name": "Nom et Prénom",
      "opera.modal_email": "Email",
      "opera.modal_phone": "Téléphone",
      "opera.modal_message": "Message",
      "opera.modal_submit": "Envoyer la Demande",
      "opera.modal_close": "Fermer"
    },
    es: {
      // General
      "skip_link": "Saltar al contenido principal",
      
      "nav.home": "Inicio",
      "nav.artworks": "Obras",
      "nav.technique": "Técnica",
      "nav.about": "Sobre mí",
      "nav.contact": "Contacto",
      
      // Mobile Menu
      "mobile.menu": "Menú",
      "mobile.follow": "Sígueme en",
      "mobile.contact_me": "Contáctame",
      "hero.badge": "Técnica Patentada",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Arte pintado en negativo, revelado en positivo",
      "hero.description": "Descubre la única técnica en el mundo que transforma la forma de crear y experimentar el arte contemporáneo. Cada obra es un viaje sensorial entre luz y sombra.",
      "hero.cta_explore": "Descubrir Obras",
      "hero.cta_technique": "Ver la Técnica",
      "hero.stats_artworks": "Obras Creadas",
      "hero.stats_unique": "Unicidad Garantizada",
      "hero.stats_madeinitaly": "Made in Italy",
      "hero.stats_collectors": "Coleccionistas",
      "hero.stats_exhibitions": "Exposiciones",
      "hero.stats_patent": "Año de la Patente",
      "hero.artwork_featured": "Obra Destacada",
      "hero.artwork_example": "Ejemplo de técnica",
      "hero.cta_story": "Descubre la Historia Completa",
      "hero.reveal_button": "Revelar la Obra",
      "hero.scroll": "Desplázate para explorar",
      "artworks.badge": "Obras Seleccionadas",
      "artworks.title": "Una selección curada de las obras más significativas",
      "artworks.subtitle": "Disponibles para compra inmediata",
      "artworks.view_all": "Ver Todas las Obras",
      "artworks.available": "Disponible",
      "artworks.sold": "Vendida",
      "artworks.featured": "Destacada",
      "artworks.buy_now": "Comprar Ahora",
      "artworks.details": "Descubrir",
      "artworks.view_details": "Ver Detalles",
      "artworks.technique": "Técnica",
      "artworks.technique_label": "Técnica:",
      "artworks.dimensions": "Dimensiones",
      "artworks.price": "Precio",
      "artworks.artwork_alt": "Obra de arte",
      "artworks.material_colored_chalks": "Tizas de colores",
      "artworks.material_cardboard": "Cartón",
      "artworks.material_full": "Tizas de colores sobre cartón",
      // Specific artworks titles
      "artworks.artwork1_title": "Atardecer Calabrés",
      "artworks.artwork2_title": "Reflejos Urbanos",
      "artworks.artwork3_title": "Naturaleza Silenciosa",
      "opere.badge": "Colección Completa",
      "opere.title": "Las Obras",
      "opere.description": "Descubre la colección completa de obras creadas con la técnica patentada. Cada pieza es una experiencia única entre negativo y positivo.",
      "opere.stats_total": "Obras Totales",
      "opere.stats_available": "Disponibles",
      "opere.stats_categories": "Categorías",
      "opere.search_placeholder": "Buscar por título, etiquetas...",
      "opere.results_showing": "Mostrando",
      "opere.results_artworks": "obras",
      "opere.loading": "Cargando...",
      "opere.loading_artworks": "Cargando obras...",
      "opere.no_results": "No se encontraron obras",
      "opere.no_results_desc": "Intenta ajustar los filtros de búsqueda",
      "opere.reset_filters": "Restablecer Filtros",
      "opere.filter_all": "Todas las Categorías",
      "opere.filter_landscapes": "Paisajes",
      "opere.filter_portraits": "Retratos",
      "opere.filter_abstract": "Abstracto",
      "opere.filter_urban": "Urbano",
      "opere.price_all": "Todos los Rangos",
      "opere.price_under1000": "Menos de €1.000",
      "opere.price_1000_2000": "€1.000 - €2.000",
      "opere.price_over2000": "Más de €2.000",
      "opere.sort_label": "Ordenar por:",
      "opere.sort_recent": "Más Recientes",
      "opere.sort_price_low": "Precio: Bajo → Alto",
      "opere.sort_price_high": "Precio: Alto → Bajo",
      "opere.sort_title": "Título A-Z",
      "opere.cta_title": "¿No encontraste lo que buscas?",
      "opere.cta_description": "Puedo realizar encargos personalizados siguiendo tus ideas y preferencias",
      "opere.cta_commission": "Solicitar Encargo",
      "opere.cta_whatsapp": "WhatsApp",
      "technique.badge": "La Técnica Patentada",
      "technique.patent_badge": "Patente Internacional",
      "technique.title": "La Técnica",
      "technique.title_alt": "Inversión Cromática",
      "technique.intro_title": "Una revolución artística que transforma completamente la forma de concebir y crear el arte contemporáneo.",
      "technique.intro_desc": "La técnica es la única en el mundo que permite pintar una obra en negativo cromático, para luego revelarla en positivo a través de un proceso fotográfico innovador.",
      "technique.subtitle": "La primera y única técnica en el mundo que transforma la percepción del arte",
      "technique.description": "Pinto en negativo con las yemas de los dedos, sin pinceles. La fotografía profesional revela luego la obra en positivo, creando colores y atmósferas imposibles de lograr con técnicas tradicionales.",
      "technique.point1_title": "100% Manual",
      "technique.point1_desc": "Cada matiz creado exclusivamente con las yemas de los dedos",
      "technique.point2_title": "Patente Única",
      "technique.point2_desc": "Primera y única técnica registrada en Italia",
      "technique.point3_title": "Doble Visión",
      "technique.point3_desc_part1": "La obra existe tanto en",
      "technique.point3_desc_part2": "como en",
      "technique.cta": "Descubre Más sobre la Técnica",
      "technique.video_cta": "Ver el Video de la Técnica",
      "technique.process_alt": "Proceso de la técnica negativoèpositivo",
      "artist.badge": "El Artista",
      "artist.title": "Mario Vetere",
      "artist.subtitle": "Un viaje artístico que une tradición e innovación, transformando una técnica leonardesca en arte contemporáneo.",
      "artist.bio_p1": "Nacido en Turín de padres calabreses, Mario Vetere descubre su talento artístico a la edad de 6 años. Después de más de 30 años, durante un período de grave crisis laboral, decide dedicarse completamente al arte, creando su primera obra con el café de su esposa.",
      "artist.bio_p2": "Como autodidacta, estudia y perfecciona una de las técnicas apreciadas por Leonardo Da Vinci: el dibujo sobre cartón con tizas de colores, difuminadas exclusivamente con las yemas de los dedos. En 2016, tras intensos estudios sobre los colores, crea la técnica revolucionaria, la primera de su tipo en Italia.",
      "artist.achievement_exhibitions": "Exposiciones Internacionales",
      "artist.description": "Durante más de 20 años he dedicado mi vida al arte y la investigación. La técnica #negativoèpositivo® nació de la pasión por la experimentación y el deseo de crear algo verdaderamente único.",
      "artist.quote": "El arte es lo que aparece y lo que se revela",
      "artist.portrait_alt": "Mario Vetere en su estudio",
      "artist.cta": "Mi Historia",
      "contact.badge": "Contáctame",
      "contact.title_part1": "¿Tienes Preguntas?",
      "contact.title_part2": "Contáctame",
      "contact.description": "Ya sea que estés interesado en comprar una obra, encargos personalizados o simplemente saber más sobre la técnica, estoy aquí para ti.",
      "contact.cta_message": "Enviar un Mensaje",
      "contact.cta_whatsapp": "WhatsApp Directo",
      "contact.trust1": "Respuesta en 24h",
      "contact.trust2": "Consulta gratuita",
      "contact.trust3": "Envío seguro",
      "footer.nav_title": "Navegación",
      "footer.description": "Arte contemporáneo con técnica patentada. Un viaje único entre luz y sombra, entre lo que aparece y lo que se revela.",
      "footer.info_title": "Información",
      "footer.faq": "FAQ",
      "footer.shipping": "Envío",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.newsletter_title": "Mantente Actualizado",
      "footer.newsletter_desc": "Suscríbete al newsletter para recibir actualizaciones sobre nuevas obras, exposiciones y eventos exclusivos.",
      "footer.newsletter_placeholder": "Tu email",
      "footer.newsletter_button": "Suscribirse",
      "footer.quick_links": "Enlaces Rápidos",
      "footer.contact_info": "Contacto",
      "footer.follow": "Síguenos",
      "footer.rights": "Todos los derechos reservados",
      "footer.trademark": "es una marca registrada",
      "footer.made_with": "Hecho con",
      "footer.in_italy": "en Italia",
      
      // Modals
      "modal.search_placeholder": "Buscar obras, artista, técnica...",
      "modal.video_title": "La Técnica",
      
      // Opera Single Page
      "opera.breadcrumb_opera": "Obra",
      "opera.reveal_button": "Revelar la Obra",
      "opera.fullscreen": "Pantalla completa",
      "opera.zoom": "Zoom",
      "opera.status_available": "Disponible",
      "opera.status_featured": "Destacada",
      "opera.loading": "Cargando...",
      "opera.short_desc": "Breve descripción de la obra",
      "opera.price_label": "Precio:",
      "opera.shipping": "Envío",
      "opera.shipping_insured": "Asegurado",
      "opera.certificate": "Certificado",
      "opera.certificate_auth": "Autenticidad",
      "opera.guarantee": "Garantía",
      "opera.guarantee_100": "100%",
      "opera.technical_details": "Detalles Técnicos",
      "opera.technique_label": "Técnica:",
      "opera.material_label": "Material:",
      "opera.support_label": "Soporte:",
      "opera.dimensions_label": "Dimensiones:",
      "opera.year_label": "Año:",
      "opera.certificate_number": "Certificado N°:",
      "opera.buy_now": "Comprar Ahora",
      "opera.request_info": "Solicitar Información",
      "opera.contact_whatsapp": "Contactar vía WhatsApp",
      "opera.share": "Compartir:",
      "opera.description_title": "Descripción",
      "opera.description_loading": "Cargando descripción...",
      "opera.related_title": "Obras Relacionadas",
      "opera.related_desc": "Otras obras que podrían interesarte",
      "opera.view_all": "Ver Todas las Obras",
      "opera.modal_title": "Solicitar Información",
      "opera.modal_name": "Nombre y Apellido",
      "opera.modal_email": "Email",
      "opera.modal_phone": "Teléfono",
      "opera.modal_message": "Mensaje",
      "opera.modal_submit": "Enviar Solicitud",
      "opera.modal_close": "Cerrar"
    }
  };
  
  // Simple i18n class
  class SimpleI18n {
    constructor() {
      this.supportedLanguages = ['it', 'en', 'de', 'fr', 'es'];
      this.currentLang = this.getSavedLanguage();
      this.translations = translations;
      
      console.log('✅ SimpleI18n caricato');
      this.init();
    }
    
    getSavedLanguage() {
      const saved = localStorage.getItem('preferredLanguage');
      if (saved && this.supportedLanguages.includes(saved)) {
        return saved;
      }
      
      const browserLang = (navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
      return this.supportedLanguages.includes(browserLang) ? browserLang : 'it';
    }
    
    init() {
      document.documentElement.lang = this.currentLang;
      this.applyTranslations();
      this.setupLanguageSelectors();
      console.log(`✅ Lingua attiva: ${this.currentLang.toUpperCase()}`);
    }
    
    translate(key) {
      const lang = this.translations[this.currentLang];
      return lang && lang[key] ? lang[key] : key;
    }
    
    applyTranslations() {
      const elements = document.querySelectorAll('[data-i18n]');
      console.log(`🔄 Applicazione traduzioni a ${elements.length} elementi`);
      
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = this.translate(key);
        
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) {
          el.setAttribute(attr, translation);
        } else {
          el.textContent = translation;
        }
      });
      
      // Handle placeholders
      const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
      placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = this.translate(key);
        el.setAttribute('placeholder', translation);
      });
      
      // Handle alt attributes
      const altElements = document.querySelectorAll('[data-i18n-alt]');
      altElements.forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const translation = this.translate(key);
        el.setAttribute('alt', translation);
      });
      
      console.log(`✅ Traduzioni applicate (${this.currentLang})`);
    }
    
    changeLanguage(lang) {
      if (!this.supportedLanguages.includes(lang)) {
        console.error(`❌ Lingua non supportata: ${lang}`);
        return;
      }
      
      if (lang === this.currentLang) return;
      
      console.log(`🔄 Cambio lingua: ${this.currentLang} → ${lang}`);
      
      this.currentLang = lang;
      localStorage.setItem('preferredLanguage', lang);
      document.documentElement.lang = lang;
      
      this.applyTranslations();
      this.updateLanguageSelectors();
      
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
      }));
    }
    
    setupLanguageSelectors() {
      document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = link.getAttribute('data-lang');
          this.changeLanguage(lang);
        });
      });
      
      this.updateLanguageSelectors();
    }
    
    updateLanguageSelectors() {
      document.querySelectorAll('[data-lang]').forEach(link => {
        const lang = link.getAttribute('data-lang');
        if (lang === this.currentLang) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'true');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }
  
  // Create instance and expose globally
  window.i18n = new SimpleI18n();
  
  console.log('✅ window.i18n disponibile');
  
})();

