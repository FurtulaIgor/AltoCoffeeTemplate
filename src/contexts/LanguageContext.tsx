import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'sr' | 'en' | 'fr' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  sr: {
    // Header
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.gallery': 'Galerija',
    'nav.locations': 'Lokacije',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.welcome': 'Dobrodošli u',
    'hero.brand': 'Alto Coffee',
    'hero.subtitle': 'Otkrijte savršenu kombinaciju izuzetne kafe, ukusnih kolača i inspirativnog coworking prostora u srcu grada',
    'hero.cta.visit': 'Posetite nas',
    'hero.cta.learn': 'Saznajte više',
    
    // About
    'about.title': 'Naša priča',
    'about.passion.title': 'Strast prema savršenoj kafi',
    'about.passion.p1': 'Alto Coffee je nastao iz jednostavne ideje - stvaranja prostora gde se susreću kvalitetna kafa, kreativnost i zajednica. Osnovan 2018. godine, naš brend je brzo postao omiljeno mesto za sve ljubitelje kafe koji traže više od običnog napitka.',
    'about.passion.p2': 'Verujemo da svaka šolja kafe treba da bude iskustvo - od pečenih zrna koje pažljivo biramo iz najboljih plantaža sveta, do ambijenta koji inspiriše na rad i druženje.',
    'about.passion.p3': 'Naši prostori su dizajnirani kao moderna oaza u gradskoj gužvi, gde možete uživati u mirnom trenutku s kafom ili produktivno raditi u inspirativnom okruženju.',
    'about.roasted.title': 'Pečeno sa ljubavlju',
    'about.roasted.desc': 'Svako zrno kafe pečemo sa posebnom pažnjom, koristeći tradicionalne tehnike kombinovane sa modernim pristupom.',
    'about.community.title': 'Zajednica',
    'about.community.desc': 'Stvaramo prostor gde se povezuju ljudi, ideje i strasti. Ovde svaki gost postaje deo naše velike Alto porodice.',
    'about.coworking.title': 'Coworking prostor',
    'about.coworking.desc': 'Besplatan WiFi, udobni stolovi i inspirativna atmosfera čine naše lokacije savršenim mestom za rad i kreativnost.',
    
    // Gallery
    'gallery.title': 'Galerija',
    'gallery.subtitle': 'Zavirite u naš svet - od savršeno pripremljene kafe do prijatnog ambijenta koji čini svaku posetu nezaboravnim',
    
    // Locations
    'locations.title': 'Naše lokacije',
    'locations.subtitle': 'Posetite nas na bilo kojoj od naših lokacija i uživajte u jedinstvenom iskustvu Alto Coffee zajednice',
    'locations.open': 'Otvoreno',
    'locations.viewMap': 'Pogledaj na mapi',
    'locations.wifi.title': 'Besplatan WiFi na svim lokacijama',
    'locations.wifi.desc': 'Radite, učite ili se jednostavno opustite uz brzu internetsku konekciju. Naš coworking prostor je otvoren za sve goste.',
    
    // Contact
    'contact.title': 'Kontaktirajte nas',
    'contact.subtitle': 'Imate pitanja, predloge ili želite da rezervišete prostor? Javite nam se - rado ćemo vam pomoći!',
    'contact.info': 'Informacije',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.address': 'Glavna lokacija',
    'contact.hours': 'Radno vreme',
    'contact.hours.weekdays': 'Ponedeljak - Petak',
    'contact.hours.weekend': 'Vikend',
    'contact.form.title': 'Pošaljite poruku',
    'contact.form.name': 'Ime i prezime',
    'contact.form.email': 'Email adresa',
    'contact.form.subject': 'Tema',
    'contact.form.message': 'Poruka',
    'contact.form.send': 'Pošaljite poruku',
    'contact.form.success.title': 'Poruka je poslana!',
    'contact.form.success.desc': 'Hvala vam na poruci. Odgovoriće vam u najkraćem mogućem roku.',
    'contact.form.placeholders.name': 'Unesite vaše ime',
    'contact.form.placeholders.email': 'vase.ime@email.com',
    'contact.form.placeholders.message': 'Unesite vašu poruku ovde...',
    'contact.form.subjects.select': 'Izaberite temu',
    'contact.form.subjects.general': 'Opšte pitanje',
    'contact.form.subjects.reservation': 'Rezervacija prostora',
    'contact.form.subjects.feedback': 'Povratne informacije',
    'contact.form.subjects.partnership': 'Partnerstvo',
    'contact.form.subjects.other': 'Ostalo',
    
    // Footer
    'footer.description': 'Otkrijte savršenu kombinaciju izuzetne kafe, kreativnosti i zajednice. Alto Coffee - vaš inspirativni prostor u srcu grada.',
    'footer.quickLinks': 'Brzi linkovi',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Sva prava zadržana.',
    'footer.terms': 'Uslovi korišćenja',
    'footer.privacy': 'Privatnost'
  },
  
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.brand': 'Alto Coffee',
    'hero.subtitle': 'Discover the perfect combination of exceptional coffee, delicious pastries and inspiring coworking space in the heart of the city',
    'hero.cta.visit': 'Visit Us',
    'hero.cta.learn': 'Learn More',
    
    // About
    'about.title': 'Our Story',
    'about.passion.title': 'Passion for Perfect Coffee',
    'about.passion.p1': 'Alto Coffee was born from a simple idea - creating a space where quality coffee, creativity and community meet. Founded in 2018, our brand quickly became a favorite place for all coffee lovers looking for more than just a regular drink.',
    'about.passion.p2': 'We believe that every cup of coffee should be an experience - from the roasted beans we carefully select from the world\'s best plantations, to the ambiance that inspires work and socializing.',
    'about.passion.p3': 'Our spaces are designed as a modern oasis in the urban hustle, where you can enjoy a peaceful moment with coffee or work productively in an inspiring environment.',
    'about.roasted.title': 'Roasted with Love',
    'about.roasted.desc': 'We roast every coffee bean with special care, using traditional techniques combined with a modern approach.',
    'about.community.title': 'Community',
    'about.community.desc': 'We create a space where people, ideas and passions connect. Here every guest becomes part of our big Alto family.',
    'about.coworking.title': 'Coworking Space',
    'about.coworking.desc': 'Free WiFi, comfortable tables and inspiring atmosphere make our locations the perfect place for work and creativity.',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Peek into our world - from perfectly prepared coffee to pleasant ambiance that makes every visit unforgettable',
    
    // Locations
    'locations.title': 'Our Locations',
    'locations.subtitle': 'Visit us at any of our locations and enjoy the unique Alto Coffee community experience',
    'locations.open': 'Open',
    'locations.viewMap': 'View on Map',
    'locations.wifi.title': 'Free WiFi at All Locations',
    'locations.wifi.desc': 'Work, study or simply relax with fast internet connection. Our coworking space is open to all guests.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions, suggestions or want to reserve space? Contact us - we\'ll be happy to help!',
    'contact.info': 'Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Main Location',
    'contact.hours': 'Working Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.weekend': 'Weekend',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success.title': 'Message Sent!',
    'contact.form.success.desc': 'Thank you for your message. We will respond as soon as possible.',
    'contact.form.placeholders.name': 'Enter your name',
    'contact.form.placeholders.email': 'your.name@email.com',
    'contact.form.placeholders.message': 'Enter your message here...',
    'contact.form.subjects.select': 'Select subject',
    'contact.form.subjects.general': 'General Question',
    'contact.form.subjects.reservation': 'Space Reservation',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.partnership': 'Partnership',
    'contact.form.subjects.other': 'Other',
    
    // Footer
    'footer.description': 'Discover the perfect combination of exceptional coffee, creativity and community. Alto Coffee - your inspiring space in the heart of the city.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy'
  },
  
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.gallery': 'Galerie',
    'nav.locations': 'Emplacements',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Bienvenue chez',
    'hero.brand': 'Alto Coffee',
    'hero.subtitle': 'Découvrez la combinaison parfaite d\'un café exceptionnel, de délicieuses pâtisseries et d\'un espace de coworking inspirant au cœur de la ville',
    'hero.cta.visit': 'Visitez-nous',
    'hero.cta.learn': 'En savoir plus',
    
    // About
    'about.title': 'Notre Histoire',
    'about.passion.title': 'Passion pour le Café Parfait',
    'about.passion.p1': 'Alto Coffee est né d\'une idée simple - créer un espace où se rencontrent café de qualité, créativité et communauté. Fondée en 2018, notre marque est rapidement devenue un lieu de prédilection pour tous les amateurs de café qui cherchent plus qu\'une simple boisson.',
    'about.passion.p2': 'Nous croyons que chaque tasse de café doit être une expérience - des grains torréfiés que nous sélectionnons soigneusement dans les meilleures plantations du monde, à l\'ambiance qui inspire le travail et la socialisation.',
    'about.passion.p3': 'Nos espaces sont conçus comme une oasis moderne dans l\'agitation urbaine, où vous pouvez profiter d\'un moment paisible avec un café ou travailler de manière productive dans un environnement inspirant.',
    'about.roasted.title': 'Torréfié avec Amour',
    'about.roasted.desc': 'Nous torréfions chaque grain de café avec un soin particulier, en utilisant des techniques traditionnelles combinées à une approche moderne.',
    'about.community.title': 'Communauté',
    'about.community.desc': 'Nous créons un espace où les gens, les idées et les passions se connectent. Ici, chaque invité devient partie de notre grande famille Alto.',
    'about.coworking.title': 'Espace de Coworking',
    'about.coworking.desc': 'WiFi gratuit, tables confortables et atmosphère inspirante font de nos emplacements l\'endroit parfait pour le travail et la créativité.',
    
    // Gallery
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Jetez un coup d\'œil dans notre monde - du café parfaitement préparé à l\'ambiance agréable qui rend chaque visite inoubliable',
    
    // Locations
    'locations.title': 'Nos Emplacements',
    'locations.subtitle': 'Visitez-nous dans n\'importe lequel de nos emplacements et profitez de l\'expérience unique de la communauté Alto Coffee',
    'locations.open': 'Ouvert',
    'locations.viewMap': 'Voir sur la carte',
    'locations.wifi.title': 'WiFi Gratuit dans Tous les Emplacements',
    'locations.wifi.desc': 'Travaillez, étudiez ou détendez-vous simplement avec une connexion Internet rapide. Notre espace de coworking est ouvert à tous les invités.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Vous avez des questions, des suggestions ou souhaitez réserver un espace ? Contactez-nous - nous serons heureux de vous aider !',
    'contact.info': 'Informations',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Emplacement Principal',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.hours.weekdays': 'Lundi - Vendredi',
    'contact.hours.weekend': 'Week-end',
    'contact.form.title': 'Envoyer un Message',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.success.title': 'Message Envoyé !',
    'contact.form.success.desc': 'Merci pour votre message. Nous répondrons dès que possible.',
    'contact.form.placeholders.name': 'Entrez votre nom',
    'contact.form.placeholders.email': 'votre.nom@email.com',
    'contact.form.placeholders.message': 'Entrez votre message ici...',
    'contact.form.subjects.select': 'Sélectionner le sujet',
    'contact.form.subjects.general': 'Question Générale',
    'contact.form.subjects.reservation': 'Réservation d\'Espace',
    'contact.form.subjects.feedback': 'Commentaires',
    'contact.form.subjects.partnership': 'Partenariat',
    'contact.form.subjects.other': 'Autre',
    
    // Footer
    'footer.description': 'Découvrez la combinaison parfaite d\'un café exceptionnel, de créativité et de communauté. Alto Coffee - votre espace inspirant au cœur de la ville.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tous droits réservés.',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.privacy': 'Confidentialité'
  },
  
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.gallery': 'Galerie',
    'nav.locations': 'Standorte',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.welcome': 'Willkommen bei',
    'hero.brand': 'Alto Coffee',
    'hero.subtitle': 'Entdecken Sie die perfekte Kombination aus außergewöhnlichem Kaffee, köstlichem Gebäck und inspirierendem Coworking-Space im Herzen der Stadt',
    'hero.cta.visit': 'Besuchen Sie uns',
    'hero.cta.learn': 'Mehr erfahren',
    
    // About
    'about.title': 'Unsere Geschichte',
    'about.passion.title': 'Leidenschaft für Perfekten Kaffee',
    'about.passion.p1': 'Alto Coffee entstand aus einer einfachen Idee - einen Raum zu schaffen, wo sich Qualitätskaffee, Kreativität und Gemeinschaft treffen. 2018 gegründet, wurde unsere Marke schnell zu einem Lieblingsort für alle Kaffeeliebhaber, die mehr als nur ein gewöhnliches Getränk suchen.',
    'about.passion.p2': 'Wir glauben, dass jede Tasse Kaffee ein Erlebnis sein sollte - von den gerösteten Bohnen, die wir sorgfältig aus den besten Plantagen der Welt auswählen, bis hin zum Ambiente, das zu Arbeit und Geselligkeit inspiriert.',
    'about.passion.p3': 'Unsere Räume sind als moderne Oase im städtischen Trubel konzipiert, wo Sie einen ruhigen Moment mit Kaffee genießen oder produktiv in einer inspirierenden Umgebung arbeiten können.',
    'about.roasted.title': 'Mit Liebe Geröstet',
    'about.roasted.desc': 'Wir rösten jede Kaffeebohne mit besonderer Sorgfalt und verwenden traditionelle Techniken kombiniert mit einem modernen Ansatz.',
    'about.community.title': 'Gemeinschaft',
    'about.community.desc': 'Wir schaffen einen Raum, wo Menschen, Ideen und Leidenschaften sich verbinden. Hier wird jeder Gast Teil unserer großen Alto-Familie.',
    'about.coworking.title': 'Coworking-Space',
    'about.coworking.desc': 'Kostenloses WLAN, bequeme Tische und inspirierende Atmosphäre machen unsere Standorte zum perfekten Ort für Arbeit und Kreativität.',
    
    // Gallery
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Werfen Sie einen Blick in unsere Welt - von perfekt zubereitetem Kaffee bis hin zum angenehmen Ambiente, das jeden Besuch unvergesslich macht',
    
    // Locations
    'locations.title': 'Unsere Standorte',
    'locations.subtitle': 'Besuchen Sie uns an einem unserer Standorte und genießen Sie das einzigartige Alto Coffee Gemeinschaftserlebnis',
    'locations.open': 'Geöffnet',
    'locations.viewMap': 'Auf Karte anzeigen',
    'locations.wifi.title': 'Kostenloses WLAN an Allen Standorten',
    'locations.wifi.desc': 'Arbeiten, lernen oder entspannen Sie einfach mit schneller Internetverbindung. Unser Coworking-Space steht allen Gästen offen.',
    
    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Haben Sie Fragen, Vorschläge oder möchten einen Platz reservieren? Kontaktieren Sie uns - wir helfen gerne!',
    'contact.info': 'Informationen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.address': 'Hauptstandort',
    'contact.hours': 'Öffnungszeiten',
    'contact.hours.weekdays': 'Montag - Freitag',
    'contact.hours.weekend': 'Wochenende',
    'contact.form.title': 'Nachricht Senden',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht Senden',
    'contact.form.success.title': 'Nachricht Gesendet!',
    'contact.form.success.desc': 'Vielen Dank für Ihre Nachricht. Wir werden so schnell wie möglich antworten.',
    'contact.form.placeholders.name': 'Geben Sie Ihren Namen ein',
    'contact.form.placeholders.email': 'ihr.name@email.com',
    'contact.form.placeholders.message': 'Geben Sie hier Ihre Nachricht ein...',
    'contact.form.subjects.select': 'Betreff auswählen',
    'contact.form.subjects.general': 'Allgemeine Frage',
    'contact.form.subjects.reservation': 'Platzreservierung',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.partnership': 'Partnerschaft',
    'contact.form.subjects.other': 'Andere',
    
    // Footer
    'footer.description': 'Entdecken Sie die perfekte Kombination aus außergewöhnlichem Kaffee, Kreativität und Gemeinschaft. Alto Coffee - Ihr inspirierender Raum im Herzen der Stadt.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Alle Rechte vorbehalten.',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.privacy': 'Datenschutz'
  },
  
  it: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Chi siamo',
    'nav.gallery': 'Galleria',
    'nav.locations': 'Sedi',
    'nav.contact': 'Contatto',
    
    // Hero
    'hero.welcome': 'Benvenuti da',
    'hero.brand': 'Alto Coffee',
    'hero.subtitle': 'Scoprite la combinazione perfetta di caffè eccezionale, dolci deliziosi e spazio coworking ispirante nel cuore della città',
    'hero.cta.visit': 'Visitateci',
    'hero.cta.learn': 'Scopri di più',
    
    // About
    'about.title': 'La Nostra Storia',
    'about.passion.title': 'Passione per il Caffè Perfetto',
    'about.passion.p1': 'Alto Coffee è nato da un\'idea semplice - creare uno spazio dove si incontrano caffè di qualità, creatività e comunità. Fondato nel 2018, il nostro marchio è rapidamente diventato un luogo preferito per tutti gli amanti del caffè che cercano più di una semplice bevanda.',
    'about.passion.p2': 'Crediamo che ogni tazza di caffè debba essere un\'esperienza - dai chicchi tostati che selezioniamo attentamente dalle migliori piantagioni del mondo, all\'ambiente che ispira lavoro e socializzazione.',
    'about.passion.p3': 'I nostri spazi sono progettati come un\'oasi moderna nel trambusto urbano, dove potete godervi un momento tranquillo con il caffè o lavorare produttivamente in un ambiente ispirante.',
    'about.roasted.title': 'Tostato con Amore',
    'about.roasted.desc': 'Tostiamo ogni chicco di caffè con particolare cura, utilizzando tecniche tradizionali combinate con un approccio moderno.',
    'about.community.title': 'Comunità',
    'about.community.desc': 'Creiamo uno spazio dove persone, idee e passioni si connettono. Qui ogni ospite diventa parte della nostra grande famiglia Alto.',
    'about.coworking.title': 'Spazio Coworking',
    'about.coworking.desc': 'WiFi gratuito, tavoli comodi e atmosfera ispirante rendono le nostre sedi il luogo perfetto per lavoro e creatività.',
    
    // Gallery
    'gallery.title': 'Galleria',
    'gallery.subtitle': 'Date un\'occhiata al nostro mondo - dal caffè perfettamente preparato all\'ambiente piacevole che rende ogni visita indimenticabile',
    
    // Locations
    'locations.title': 'Le Nostre Sedi',
    'locations.subtitle': 'Visitateci in qualsiasi delle nostre sedi e godetevi l\'esperienza unica della comunità Alto Coffee',
    'locations.open': 'Aperto',
    'locations.viewMap': 'Visualizza sulla mappa',
    'locations.wifi.title': 'WiFi Gratuito in Tutte le Sedi',
    'locations.wifi.desc': 'Lavorate, studiate o semplicemente rilassatevi con una connessione internet veloce. Il nostro spazio coworking è aperto a tutti gli ospiti.',
    
    // Contact
    'contact.title': 'Contattateci',
    'contact.subtitle': 'Avete domande, suggerimenti o volete prenotare uno spazio? Contattateci - saremo felici di aiutarvi!',
    'contact.info': 'Informazioni',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.address': 'Sede Principale',
    'contact.hours': 'Orari di Apertura',
    'contact.hours.weekdays': 'Lunedì - Venerdì',
    'contact.hours.weekend': 'Weekend',
    'contact.form.title': 'Invia Messaggio',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Indirizzo Email',
    'contact.form.subject': 'Oggetto',
    'contact.form.message': 'Messaggio',
    'contact.form.send': 'Invia Messaggio',
    'contact.form.success.title': 'Messaggio Inviato!',
    'contact.form.success.desc': 'Grazie per il vostro messaggio. Risponderemo il prima possibile.',
    'contact.form.placeholders.name': 'Inserite il vostro nome',
    'contact.form.placeholders.email': 'vostro.nome@email.com',
    'contact.form.placeholders.message': 'Inserite qui il vostro messaggio...',
    'contact.form.subjects.select': 'Seleziona oggetto',
    'contact.form.subjects.general': 'Domanda Generale',
    'contact.form.subjects.reservation': 'Prenotazione Spazio',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.partnership': 'Partnership',
    'contact.form.subjects.other': 'Altro',
    
    // Footer
    'footer.description': 'Scoprite la combinazione perfetta di caffè eccezionale, creatività e comunità. Alto Coffee - il vostro spazio ispirante nel cuore della città.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.contact': 'Contatto',
    'footer.copyright': 'Tutti i diritti riservati.',
    'footer.terms': 'Termini di Utilizzo',
    'footer.privacy': 'Privacy'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document language
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};