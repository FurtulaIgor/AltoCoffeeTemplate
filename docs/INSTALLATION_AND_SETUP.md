# Alto Coffee Template - Kompletno Uputstvo za Instalaciju i Personalizaciju

Dobrodošli! Ovaj dokument sadrži detaljno uputstvo za instalaciju i personalizaciju Alto Coffee template-a za vaše potrebe.

---

## 📋 Sadržaj

1. [Sistemski Zahtevi](#-sistemski-zahtevi)
2. [Instalacija](#-instalacija)
3. [Pokretanje Projekta](#-pokretanje-projekta)
4. [Personalizacija Brenda](#-personalizacija-brenda)
5. [Izmena Sadržaja](#-izmena-sadržaja)
6. [Zamena Slika](#-zamena-slika)
7. [Stilizovanje i Boje](#-stilizovanje-i-boje)
8. [Višejezična Podrška](#-višejezična-podrška)
9. [Deployment (Objavljivanje)](#-deployment-objavljivanje)
10. [Česta Pitanja](#-česta-pitanja)

---

## 💻 Sistemski Zahtevi

Pre nego što počnete, proverite da imate instaliran sledeći softver:

### Obavezno:
- **Node.js** verzija 16 ili novija ([Preuzmi ovde](https://nodejs.org/))
- **npm** (dolazi uz Node.js) ili **yarn**
- Bilo koji tekst editor (**VS Code preporučen**)

### Provera instalacije:

Otvorite terminal (Command Prompt na Windows-u ili Terminal na Mac/Linux-u) i pokrenite:

```bash
node --version
# Treba da vidite: v16.x.x ili noviju verziju

npm --version
# Treba da vidite: 8.x.x ili noviju verziju
```

Ako niste dobili odgovor, instalirajte Node.js sa zvaničnog sajta.

---

## 📦 Instalacija

### Korak 1: Preuzimanje Template-a

Imate dva načina da preuzmete template:

**Opcija A: Preuzimanje ZIP arhive**
1. Preuzmite ZIP arhivu projekta
2. Raspakujte je u željeni folder
3. Otvorite terminal u tom folderu

**Opcija B: Git clone (ako koristite Git)**
```bash
git clone [URL-vašeg-repozitorijuma]
cd alto-coffee-template
```

### Korak 2: Instalacija Zavisnosti

U terminalu, unutar foldera projekta, pokrenite:

```bash
npm install
```

Ova komanda će instalirati sve potrebne biblioteke i pakete. Proces može da traje 2-5 minuta zavisno od brzine interneta.

**Šta se dešava?**
- Instaliraju se React, TypeScript, Tailwind CSS i drugi potrebni paketi
- Sve zavisnosti se preuzimaju iz npm registra
- Kreira se `node_modules` folder sa svim bibliotekama

### Korak 3: Verifikacija Instalacije

Nakon što se instalacija završi, pokrenite:

```bash
npm run dev
```

Ako vidite poruku:
```
VITE v5.x.x  ready in Xms

➜  Local:   http://localhost:5173/
```

**Čestitamo! Instalacija je uspešna!** 🎉

Otvorite browser i idite na `http://localhost:5173/` da vidite sajt.

---

## 🚀 Pokretanje Projekta

### Development Režim (Za razvoj)

```bash
npm run dev
```

- Pokreće lokalni server na `http://localhost:5173/`
- Automatski osvežava stranicu kada napravite promene
- Pokazuje greške u konzoli

**Saveti:**
- Ostavite terminal otvoren dok radite
- Promene u kodu se automatski prikazuju u browseru
- `Ctrl+C` zaustavlja server

### Production Build (Za objavljivanje)

```bash
npm run build
```

- Kreira optimizovanu verziju sajta u `dist` folderu
- Kompresuje i optimizuje sve fajlove
- Ovu verziju objavljujete na serveru

### Preview Build (Pregled optimizovane verzije)

```bash
npm run preview
```

- Prikazuje kako će sajt izgledati nakon objavljivanja
- Koristite pre finalnog deployment-a

---

## 🎨 Personalizacija Brenda

### Centralna Konfiguraciona Datoteka

**Sve osnovne informacije o vašem brendu nalaze se u jednoj datoteci:**

📁 `src/config/brand.ts`

Otvorite ovaj fajl u editoru i izmenite sledeće sekcije:

### 1. Osnovne Informacije

```typescript
export const brandConfig = {
  // Ime vašeg kafića/restorana
  name: "Vaš Kafić",

  // Slogan/tagline
  tagline: "Najbolja kafa u gradu",

  // Kratak opis vašeg biznisa
  description: "Otkrijte savršenu kombinaciju odlične kafe, ukusnih kolača i inspirativnog prostora za rad u srcu grada",
```

**Primer:**
```typescript
name: "Kafeterija Duša",
tagline: "Gde se kafa susreće sa umetnošću",
description: "Domaća pržena kafa, domaći kolači i prijatna atmosfera"
```

### 2. Kontakt Informacije

```typescript
contact: {
  email: "vas.email@example.com",
  phone: "+381 11 123 4567",
  address: "Vaša Adresa 15, 11000 Beograd, Srbija"
},
```

**Saveti:**
- Koristite email koji redovno proveravate
- Format telefona možete prilagoditi (sa ili bez +381)
- Adresa se prikazuje u footer-u

### 3. Društvene Mreže

```typescript
social: {
  instagram: "https://instagram.com/vas_profil",
  facebook: "https://facebook.com/vas_profil",
  twitter: "https://twitter.com/vas_profil",
  linkedin: "https://linkedin.com/company/vas_profil"
},
```

**Napomene:**
- Stavite kompletne URL-ove vaših naloga
- Ako nemate neki nalog, možete ga ostaviti praznog: `instagram: ""`
- Ikone automatski vode ka ovim linkovima

### 4. Radno Vreme

```typescript
hours: {
  weekdays: "07:00 - 23:00",
  weekend: "08:00 - 24:00"
},
```

### 5. Vaše Lokacije

Ovo je najvažnija sekcija za prilagođavanje:

```typescript
locations: [
  {
    name: "Naziv Lokacije 1",
    address: "Puna adresa lokacije",
    phone: "+381 11 123 4567",
    hours: "Pon-Ned: 07:00 - 23:00",
    features: ["Free WiFi", "Parking", "Terasa"],
    image: "https://images.pexels.com/photos/1307698/..."
  },
  // Dodajte koliko god lokacija imate
]
```

**Kako dodati/ukloniti lokacije:**

**Dodavanje nove lokacije:**
```typescript
locations: [
  // Postojeće lokacije...
  {
    name: "Nova Lokacija",
    address: "Nova Adresa 10, Beograd",
    phone: "+381 11 999 8888",
    hours: "Pon-Ned: 08:00 - 22:00",
    features: ["Dostava", "Terasa", "Live Music"],
    image: "URL_SLIKE"
  }
]
```

**Uklanjanje lokacije:**
Jednostavno obrišite ceo blok `{ name: "...", ... }` za tu lokaciju.

---

## 📝 Izmena Sadržaja

### Tekstualni Sadržaj

Sav tekst koji se prikazuje na sajtu nalazi se u:

📁 `src/contexts/LanguageContext.tsx`

Ovaj fajl koristi višejezični sistem čak i ako koristite samo jedan jezik.

### Struktura Prevoda

```typescript
const translations = {
  sr: {  // Srpski
    'hero.welcome': 'Dobrodošli u',
    'hero.brand': 'Alto Coffee',
    'hero.subtitle': 'Vaš inspirativni prostor...',
    // ... ostali tekstovi
  },
  en: {  // Engleski
    'hero.welcome': 'Welcome to',
    'hero.brand': 'Alto Coffee',
    // ...
  }
}
```

### Važne Sekcije za Izmenu

#### 1. Hero Sekcija (Glavni Banner)

```typescript
'hero.welcome': 'Dobrodošli u',
'hero.brand': 'Naziv Vašeg Brenda',
'hero.subtitle': 'Vaš opis - šta nudite i zašto su posebni',
'hero.cta.visit': 'Posetite nas',  // Tekst na dugmetu
'hero.cta.learn': 'Saznajte više',
```

#### 2. O Nama Sekcija

```typescript
'about.title': 'Naša Priča',
'about.passion.title': 'Strast prema kafi',
'about.passion.p1': 'Prvi pasus o vašem brendu...',
'about.passion.p2': 'Drugi pasus...',
'about.passion.p3': 'Treći pasus...',
```

#### 3. Galerija

```typescript
'gallery.title': 'Naša Galerija',
'gallery.subtitle': 'Pogledajte naš prostor i našu ponudu',
```

#### 4. Kontakt Forma

```typescript
'contact.title': 'Kontaktirajte nas',
'contact.name': 'Ime i prezime',
'contact.email': 'Email adresa',
'contact.message': 'Vaša poruka',
'contact.send': 'Pošalji poruku',
```

### Saveti za Izmenu Sadržaja

1. **Čuvajte strukturu:** Ne menjajte ključeve (`'hero.welcome'`), samo vrednosti
2. **Koristite navodnike:** Tekst mora biti u navodnicima `'tekst'`
3. **Čuvajte zapete:** Svaki red mora da se završi zarezom `,`
4. **Testirajte odmah:** Sačuvajte fajl i pogledajte promene u browseru

---

## 🖼️ Zamena Slika

### Trenutna Konfiguracija

Template trenutno koristi **besplatne stock fotografije sa Pexels-a** pomoću URL-ova.

### Opcije za Slike

#### Opcija 1: Korišćenje Pexels URL-ova (Preporučeno za Početak)

**Prednosti:**
- Besplatno
- Bez autorskih prava
- Brzo učitavanje
- Ne zauzima prostor na serveru

**Kako naći slike na Pexels-u:**
1. Idite na [pexels.com](https://www.pexels.com/)
2. Pretražite temu (npr. "coffee shop", "cafe interior")
3. Kliknite na sliku
4. Kliknite desni klik → "Copy image address"
5. Zalepite URL u kod

**Gde zameniti URL-ove:**

**Hero sekcija** (`src/components/Hero.tsx`):
```typescript
backgroundImage: 'url(VAŠA_PEXELS_URL)'
```

**About sekcija** (`src/components/About.tsx`):
```typescript
src="VAŠA_PEXELS_URL"
```

**Galerija** (`src/components/Gallery.tsx`):
```typescript
const images = [
  {
    url: 'VAŠA_PEXELS_URL',
    alt: 'Opis slike'
  },
  // ... više slika
]
```

**Lokacije** (`src/config/brand.ts`):
```typescript
locations: [
  {
    // ...
    image: "VAŠA_PEXELS_URL"
  }
]
```

#### Opcija 2: Upload Vaših Slika

**Korak po korak:**

1. **Pripremite slike:**
   - Optimizujte ih (kompresujte)
   - Preporučeni format: JPEG ili WebP
   - Preporučene dimenzije:
     - Hero: 1920x1080px
     - Galerija: 800x800px
     - Lokacije: 800x600px
     - O nama: 800x600px

2. **Organizujte foldere:**

```
public/
├── images/
    ├── hero/
    │   └── hero-background.jpg
    ├── about/
    │   └── about-us.jpg
    ├── gallery/
    │   ├── image-1.jpg
    │   ├── image-2.jpg
    │   └── ...
    └── locations/
        ├── location-1.jpg
        ├── location-2.jpg
        └── ...
```

3. **Zamenite putanje u kodu:**

```typescript
// Umesto:
url: 'https://images.pexels.com/...'

// Koristite:
url: '/images/gallery/image-1.jpg'
```

**Saveti za slike:**
- Koristite alate kao [TinyPNG](https://tinypng.com/) za kompresiju
- Imenujte fajlove jasno: `kafa-espreso.jpg`, `enterijer-kafic.jpg`
- Sve slike stavljajte u `public/images/` folder
- Proverite da putanje počinju sa `/images/`

---

## 🎨 Stilizovanje i Boje

### Paleta Boja

Template koristi **toplu, earth-tone paletu** savršenu za kafiće.

### Glavne Boje

```
Primarno (Stone/Siva):
- Svetle nijanse: #fafaf9, #f5f5f4, #e7e5e4
- Srednje nijanse: #78716c, #57534e
- Tamne nijanse: #292524, #1c1917

Akcent (Amber/Zlatna):
- Svetle nijanse: #fef3c7, #fde68a
- Glavna: #d97706 (koristi se najviše)
- Tamne nijanse: #92400e, #78350f
```

### Izmena Boja

**1. U Brand Config-u** (`src/config/brand.ts`):

```typescript
colors: {
  primary: {
    50: '#vaša-boja',   // Najsvetlija
    100: '#vaša-boja',
    // ... do ...
    900: '#vaša-boja',  // Najtamnija
  },
  accent: {
    400: '#vaša-boja',  // Glavna akcent boja
    600: '#vaša-boja',  // Tamnija varijanta
  }
}
```

**2. U Tailwind Config-u** (`tailwind.config.js`):

Boje su automatski povezane, ali možete dodati custom boje:

```javascript
theme: {
  extend: {
    colors: {
      'custom': {
        light: '#vaša-boja',
        DEFAULT: '#vaša-boja',
        dark: '#vaša-boja',
      }
    }
  }
}
```

### Kako Birati Boje

**Alati za izbor boja:**
- [Coolors.co](https://coolors.co/) - Generator paleta
- [Adobe Color](https://color.adobe.com/) - Kotač boja
- [Paletton](https://paletton.com/) - Harmonične palete

**Saveti:**
- Držite se 2-3 glavne boje
- Jedna primarna (neutralna) + jedna akcent (živopisna)
- Testirajte kontrast za čitljivost teksta
- Dark mode koristi tamnije varijante istih boja

### Primena Boja u Komponentama

Boje se primenjuju preko Tailwind CSS klasa:

```typescript
// Pozadine
className="bg-amber-600"        // Zlatna pozadina
className="bg-stone-800"        // Tamna pozadina

// Tekst
className="text-amber-600"      // Zlatni tekst
className="text-stone-100"      // Svetli tekst

// Hover efekti
className="hover:bg-amber-700"  // Tamnija na hover
```

---

## 🌍 Višejezična Podrška

Template podržava **5 jezika** po defaultu:
- 🇷🇸 Srpski (sr)
- 🇬🇧 Engleski (en)
- 🇫🇷 Francuski (fr)
- 🇩🇪 Nemački (de)
- 🇮🇹 Italijanski (it)

### Dodavanje Novog Jezika

**Korak 1:** Dodajte jezik u tip (`src/contexts/LanguageContext.tsx`):

```typescript
type Language = 'sr' | 'en' | 'fr' | 'de' | 'it' | 'es';  // dodali smo 'es' za španski
```

**Korak 2:** Dodajte prevode:

```typescript
const translations = {
  // ... postojeći jezici ...
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre nosotros',
    'hero.welcome': 'Bienvenido a',
    // ... svi ostali ključevi
  }
}
```

**Korak 3:** Dodajte u selektor (`src/components/LanguageSelector.tsx`):

```typescript
const languages = [
  { code: 'sr', name: 'SR', flag: '🇷🇸' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  // ...
  { code: 'es', name: 'ES', flag: '🇪🇸' }
];
```

### Uklanjanje Jezika

**Korak 1:** Uklonite jezik iz selektora (`LanguageSelector.tsx`):

```typescript
const languages = [
  { code: 'sr', name: 'SR', flag: '🇷🇸' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  // Uklonili smo ostale jezike
];
```

**Korak 2:** Opciono obrišite prevode iz `LanguageContext.tsx`

### Postavljanje Podrazumevanog Jezika

U `LanguageContext.tsx`:

```typescript
const [language, setLanguage] = useState<Language>('sr');  // Promenite 'sr' na željeni jezik
```

### Saveti za Prevode

1. **Koristite profesionalne prevode** - Google Translate nije dovoljan
2. **Održavajte konzistentnost** - isti termini uvek isto prevedeni
3. **Pazite na dužinu teksta** - neki jezici su duži od drugih
4. **Testirajte sve jezike** - proverite da li se sve prikazuje kako treba
5. **Kulturne razlike** - prilagodite sadržaj kulturi

---

## 🚀 Deployment (Objavljivanje)

### Pre Deploymentа - Checklist

- [ ] Sav sadržaj je ažuriran
- [ ] Sve slike su zamenjene
- [ ] Kontakt informacije su tačne
- [ ] Testirano na mobilnim uređajima
- [ ] Testirano u raznim browserima
- [ ] Svi linkovi rade
- [ ] Build se uspešno završava

### Build za Production

```bash
npm run build
```

Ova komanda kreira `dist` folder sa optimizovanim fajlovima.

### Deployment Opcije

#### Opcija 1: Netlify (Najlakše - Preporučeno)

**Besplatno i jednostavno:**

1. Registrujte se na [netlify.com](https://www.netlify.com/)
2. Kliknite "Add new site" → "Deploy manually"
3. Prevucite `dist` folder
4. Sajt je odmah live! 🎉

**Automatski deployment sa Git-om:**

1. Push-ujte projekat na GitHub
2. Na Netlify: "Add new site" → "Import from Git"
3. Izaberite repozitorijum
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

**Custom domen:**
- Netlify: Site settings → Domain management
- Dodajte svoj domen

#### Opcija 2: Vercel

1. Registrujte se na [vercel.com](https://vercel.com/)
2. Import projekat sa GitHub-a
3. Vercel automatski detektuje Vite
4. Kliknite "Deploy"

#### Opcija 3: GitHub Pages

**Setup:**

1. Instalirajte `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Dodajte u `package.json`:
```json
{
  "homepage": "https://vaskorisnickoime.github.io/repo-ime",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

#### Opcija 4: Klasičan Hosting (cPanel)

1. Kreirajte build: `npm run build`
2. Otvorite `dist` folder
3. Upload-ujte SVE fajlove u `public_html` (ili sličan) folder na serveru
4. Sajt je live!

**Potreban pristup:**
- FTP pristup ili File Manager u cPanel-u
- Upload svih fajlova iz `dist` foldera

### Post-Deployment

**Proverite:**
- Sajt se učitava
- Sve slike se prikazuju
- Svi linkovi rade
- Responzivnost na mobilnim uređajima
- Brzina učitavanja

**Optimizacije:**
- Omogućite HTTPS (Netlify/Vercel ovo rade automatski)
- Podesite custom domen
- Dodajte Google Analytics (opciono)
- Testirajte SEO sa [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## ❓ Česta Pitanja

### 1. Slike se ne prikazuju

**Problem:** Slike imaju broken link ili se ne učitavaju

**Rešenje:**
- Proverite da li su putanje tačne
- Za lokalne slike: mora da počinju sa `/images/`
- Za Pexels URL-ove: kopirajte direktan link do slike
- Očistite browser cache (Ctrl+F5)

### 2. Build ne uspeva

**Problem:** `npm run build` javlja greške

**Rešenje:**
```bash
# Obrišite node_modules i cache
rm -rf node_modules package-lock.json

# Reinstalirajte
npm install

# Pokušajte ponovo
npm run build
```

### 3. Promene se ne vide u browseru

**Problem:** Izmene u kodu se ne prikazuju

**Rešenje:**
- Proverite da li je dev server pokrenut (`npm run dev`)
- Osvežite browser sa Ctrl+F5 (hard refresh)
- Proverite da li ste sačuvali fajl
- Pogledajte konzolu za greške

### 4. Kako promeniti font?

**Rešenje:**

1. Dodajte font u `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Naziv+Fonta&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Naziv Fonta', 'sans-serif'],
}
```

### 5. Kako dodati Google Maps?

**Rešenje:**

1. Nabavite Google Maps API ključ
2. U komponenti lokacije dodajte iframe:
```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style={{border:0}}
  allowFullScreen
  loading="lazy"
></iframe>
```

### 6. Kako napraviti kontakt formu funkcionalnom?

**Opcije:**

**A) Formspree (Najlakše):**
1. Registrujte se na [formspree.io](https://formspree.io/)
2. Kreirajte novi form
3. Dobijete endpoint URL
4. Update `Contact.tsx`:
```typescript
<form action="VAŠA_FORMSPREE_URL" method="POST">
```

**B) EmailJS:**
1. Registrujte se na [emailjs.com](https://www.emailjs.com/)
2. Setup email service
3. Instalirajte: `npm install emailjs-com`
4. Integrisati u `Contact.tsx`

**C) Sopstveni backend:**
- Kreirajte API endpoint
- Pošaljite fetch/axios request iz forme

### 7. Kako promeniti favicon?

**Rešenje:**

1. Kreirajte favicon (16x16px, 32x32px, 192x192px)
2. Stavite u `public/` folder
3. Update `index.html`:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
```

### 8. Sajt je spor

**Optimizacije:**

```bash
# Kompreujte slike
# Koristite WebP format
# Smanjite broj slika u galeriji

# Opciono: Lazy loading za slike
<img loading="lazy" src="..." />
```

### 9. Kako dodati blog sekciju?

**Korak po korak:**

1. Kreirajte komponentu `Blog.tsx`
2. Dodajte blog podatke u `brand.ts`
3. Import u `App.tsx`
4. Dodajte navigaciju
5. Dodajte prevode

**Ili koristite CMS:**
- [Contentful](https://www.contentful.com/)
- [Strapi](https://strapi.io/)
- [Sanity](https://www.sanity.io/)

### 10. Kako omogućiti online poručivanje?

**Opcije:**

**A) Integracija sa postojećim sistemima:**
- Wolt
- Glovo
- Donesi

**B) Custom rešenje:**
- WooCommerce (ako koristite WordPress)
- Shopify Buy Button
- Stripe za plaćanje

---

## 🛠️ Dodatne Mogućnosti

### Animacije

Template već ima osnovne animacije. Za više:

```typescript
// Dodajte u Tailwind classes
className="transition-transform duration-300 hover:scale-105"
```

### Google Analytics

1. Kreirajte GA4 property
2. Dodajte script u `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Social Share Dugmad

Instalirajte:
```bash
npm install react-share
```

Koristite:
```typescript
import { FacebookShareButton, TwitterShareButton } from 'react-share';
```

### Newsletter Integracija

**Mailchimp:**
1. Kreirajte Mailchimp account
2. Dobijte embedded form code
3. Dodajte u footer ili contact sekciju

---

## 📞 Podrška

### Potrebna Dodatna Pomoć?

**Resursi:**
- [React dokumentacija](https://react.dev/)
- [Tailwind CSS dokumentacija](https://tailwindcss.com/)
- [Vite dokumentacija](https://vitejs.dev/)

**Problemi sa kodom:**
- Proverite konzolu u browseru (F12)
- Čitajte error poruke pažljivo
- Guglajte greške

**Profesionalna pomoć:**
Ako vam je potrebna pomoć sa:
- Custom funkcionalnostima
- Složenim integracijama
- Backend razvoj
- Održavanjem sajta

Kontaktirajte nas:
- Email: support@yourcompany.com
- Website: www.yourcompany.com

---

## ✅ Finalna Checklist Pre Objave

- [ ] Sve sekcije su personalizovane
- [ ] Kontakt informacije su ažurne
- [ ] Slike su zamenjene i optimizovane
- [ ] Testirano na mobilnom telefonu
- [ ] Testirano u Chrome, Firefox, Safari
- [ ] Svi linkovi rade
- [ ] Social media linkovi su tačni
- [ ] Favicon je postavljen
- [ ] SEO meta tagovi su ažurirani
- [ ] Build prolazi bez grešaka
- [ ] Sajt je brz (< 3s učitavanje)

---

**Sretno sa vašim novim sajtom! ☕**

Ako imate dodatnih pitanja ili trebate pomoć, ne ustručavajte se da kontaktirate podršku.

*Template kreiran sa ❤️ za kafiće i restorane*
