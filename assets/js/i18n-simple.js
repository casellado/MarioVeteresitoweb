/**
 * Simple i18n System - Based on Best Practices
 * Lightweight, synchronous, reliable
 */

(function() {
  'use strict';
  
  // Translations embedded (best practice: external files loaded sync)
  const translations = {
    it: {
      // Navigation
      "nav.home": "Home",
      "nav.artworks": "Opere",
      "nav.technique": "Tecnica",
      "nav.about": "Chi Sono",
      "nav.contact": "Contatti",
      
      // Hero Section
      "hero.badge": "Tecnica Brevettata",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Arte dipinta in negativo, rivelata in positivo",
      "hero.description": "Scopri l'unica tecnica al mondo che trasforma il modo di creare e vivere l'arte contemporanea. Ogni opera è un viaggio sensoriale tra luce e ombra.",
      "hero.cta_explore": "Esplora le Opere",
      "hero.cta_technique": "Scopri la Tecnica",
      "hero.stats_artworks": "Opere Realizzate",
      "hero.stats_collectors": "Collezionisti",
      "hero.stats_exhibitions": "Esposizioni",
      "hero.stats_patent": "Anno del Brevetto",
      "hero.cta_story": "Scopri la Storia Completa",
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
      
      // Opere Page
      "opere.badge": "Collezione Completa",
      "opere.title": "Le Opere",
      "opere.description": "Scopri l'intera collezione di opere realizzate con la tecnica brevettata. Ogni pezzo è un'esperienza unica tra negativo e positivo.",
      "opere.stats_total": "Opere Totali",
      "opere.stats_available": "Disponibili",
      "opere.stats_categories": "Categorie",
      "opere.search_placeholder": "Cerca per titolo, tag...",
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
      "technique.title": "Inversione Cromatica",
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
      "footer.quick_links": "Link Rapidi",
      "footer.contact_info": "Contatti",
      "footer.follow": "Seguici",
      "footer.rights": "Tutti i diritti riservati",
      "footer.trademark": "è un marchio registrato"
    },
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.artworks": "Artworks",
      "nav.technique": "Technique",
      "nav.about": "About",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.badge": "Patented Technique",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Art painted in negative, revealed in positive",
      "hero.description": "Discover the only technique in the world that transforms the way contemporary art is created and experienced. Each artwork is a sensory journey between light and shadow.",
      "hero.cta_explore": "Explore Artworks",
      "hero.cta_technique": "Discover the Technique",
      "hero.stats_artworks": "Artworks Created",
      "hero.stats_collectors": "Collectors",
      "hero.stats_exhibitions": "Exhibitions",
      "hero.stats_patent": "Patent Year",
      "hero.cta_story": "Discover the Full Story",
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
      
      // Opere Page
      "opere.badge": "Complete Collection",
      "opere.title": "The Artworks",
      "opere.description": "Discover the entire collection of artworks created with the patented technique. Each piece is a unique experience between negative and positive.",
      "opere.stats_total": "Total Artworks",
      "opere.stats_available": "Available",
      "opere.stats_categories": "Categories",
      "opere.search_placeholder": "Search by title, tags...",
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
      "technique.title": "Chromatic Inversion",
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
      "footer.quick_links": "Quick Links",
      "footer.contact_info": "Contact",
      "footer.follow": "Follow Us",
      "footer.rights": "All rights reserved",
      "footer.trademark": "is a registered trademark"
    },
    de: {
      "nav.home": "Startseite",
      "nav.artworks": "Kunstwerke",
      "nav.technique": "Technik",
      "nav.about": "Über mich",
      "nav.contact": "Kontakt",
      "hero.badge": "Patentierte Technik",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Kunst im Negativ gemalt, im Positiv offenbart",
      "hero.description": "Entdecken Sie die einzige Technik der Welt, die die Art und Weise verändert, wie zeitgenössische Kunst geschaffen und erlebt wird. Jedes Kunstwerk ist eine sensorische Reise zwischen Licht und Schatten.",
      "hero.cta_explore": "Kunstwerke erkunden",
      "hero.cta_technique": "Technik entdecken",
      "hero.stats_artworks": "Geschaffene Kunstwerke",
      "hero.stats_collectors": "Sammler",
      "hero.stats_exhibitions": "Ausstellungen",
      "hero.stats_patent": "Patentjahr",
      "hero.cta_story": "Die ganze Geschichte entdecken",
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
      "opere.badge": "Vollständige Sammlung",
      "opere.title": "Die Kunstwerke",
      "opere.description": "Entdecken Sie die gesamte Sammlung von Kunstwerken, die mit der patentierten Technik geschaffen wurden. Jedes Stück ist eine einzigartige Erfahrung zwischen Negativ und Positiv.",
      "opere.stats_total": "Kunstwerke Gesamt",
      "opere.stats_available": "Verfügbar",
      "opere.stats_categories": "Kategorien",
      "opere.search_placeholder": "Nach Titel, Tags suchen...",
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
      "technique.title": "Chromatische Inversion",
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
      "footer.quick_links": "Schnelllinks",
      "footer.contact_info": "Kontakt",
      "footer.follow": "Folgen Sie uns",
      "footer.rights": "Alle Rechte vorbehalten",
      "footer.trademark": "ist eine eingetragene Marke"
    },
    fr: {
      "nav.home": "Accueil",
      "nav.artworks": "Œuvres",
      "nav.technique": "Technique",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "hero.badge": "Technique Brevetée",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Art peint en négatif, révélé en positif",
      "hero.description": "Découvrez la seule technique au monde qui transforme la façon de créer et de vivre l'art contemporain. Chaque œuvre est un voyage sensoriel entre lumière et ombre.",
      "hero.cta_explore": "Explorer les Œuvres",
      "hero.cta_technique": "Découvrir la Technique",
      "hero.stats_artworks": "Œuvres Créées",
      "hero.stats_collectors": "Collectionneurs",
      "hero.stats_exhibitions": "Expositions",
      "hero.stats_patent": "Année du Brevet",
      "hero.cta_story": "Découvrir l'Histoire Complète",
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
      "opere.badge": "Collection Complète",
      "opere.title": "Les Œuvres",
      "opere.description": "Découvrez l'intégralité de la collection d'œuvres créées avec la technique brevetée. Chaque pièce est une expérience unique entre négatif et positif.",
      "opere.stats_total": "Œuvres Totales",
      "opere.stats_available": "Disponibles",
      "opere.stats_categories": "Catégories",
      "opere.search_placeholder": "Rechercher par titre, tags...",
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
      "technique.title": "Inversion Chromatique",
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
      "footer.quick_links": "Liens Rapides",
      "footer.contact_info": "Contact",
      "footer.follow": "Suivez-nous",
      "footer.rights": "Tous droits réservés",
      "footer.trademark": "est une marque déposée"
    },
    es: {
      "nav.home": "Inicio",
      "nav.artworks": "Obras",
      "nav.technique": "Técnica",
      "nav.about": "Sobre mí",
      "nav.contact": "Contacto",
      "hero.badge": "Técnica Patentada",
      "hero.artist_name": "Mario Vetere",
      "hero.subtitle": "Arte pintado en negativo, revelado en positivo",
      "hero.description": "Descubre la única técnica en el mundo que transforma la forma de crear y experimentar el arte contemporáneo. Cada obra es un viaje sensorial entre luz y sombra.",
      "hero.cta_explore": "Explorar Obras",
      "hero.cta_technique": "Descubrir la Técnica",
      "hero.stats_artworks": "Obras Creadas",
      "hero.stats_collectors": "Coleccionistas",
      "hero.stats_exhibitions": "Exposiciones",
      "hero.stats_patent": "Año de la Patente",
      "hero.cta_story": "Descubre la Historia Completa",
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
      "opere.badge": "Colección Completa",
      "opere.title": "Las Obras",
      "opere.description": "Descubre la colección completa de obras creadas con la técnica patentada. Cada pieza es una experiencia única entre negativo y positivo.",
      "opere.stats_total": "Obras Totales",
      "opere.stats_available": "Disponibles",
      "opere.stats_categories": "Categorías",
      "opere.search_placeholder": "Buscar por título, etiquetas...",
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
      "technique.title": "Inversión Cromática",
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
      "footer.quick_links": "Enlaces Rápidos",
      "footer.contact_info": "Contacto",
      "footer.follow": "Síguenos",
      "footer.rights": "Todos los derechos reservados",
      "footer.trademark": "es una marca registrada"
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

