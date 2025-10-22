# Alto Coffee - Premium Coffee Shop Website Template

A modern, responsive website template designed for coffee shops, cafes, restaurants, and coworking spaces. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Features
- **Fully Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Multi-language Support** - 5 languages included (Serbian, English, French, German, Italian)
- **Dark/Light Mode Toggle** - Elegant theme switching with warm color palette
- **Smooth Animations** - Subtle micro-interactions and hover effects
- **SEO Optimized** - Proper meta tags and semantic HTML structure

### Sections Included
- **Hero Section** - Eye-catching banner with call-to-action buttons
- **About Section** - Brand story with feature highlights
- **Gallery** - Interactive image gallery with lightbox
- **Locations** - Multiple location cards with contact details
- **Contact Form** - Functional contact form with validation
- **Footer** - Complete footer with social links and quick navigation

### Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Vite** for fast development and building
- **ESLint** for code quality
- **Responsive Images** with optimized loading

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or download the template**
   ```bash
   git clone [your-repo-url]
   cd alto-coffee-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### 1. Brand Configuration

Edit `src/config/brand.ts` to customize your brand:

```typescript
export const brandConfig = {
  name: "Your Brand Name",
  tagline: "Your Brand Tagline",
  description: "Your brand description...",
  // ... other settings
}
```

### 2. Colors & Styling

The template uses a warm color palette perfect for coffee shops. Customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fafaf9',   // Lightest
    500: '#78716c',  // Medium
    900: '#1c1917',  // Darkest
  },
  accent: {
    400: '#f59e0b',  // Golden accent
    600: '#d97706',  // Darker golden
  }
}
```

### 3. Content Management

#### Text Content
All text content is managed through the translation system in `src/contexts/LanguageContext.tsx`. Even if you only need one language, this system makes content management easier.

#### Images
Replace images in the `public/images/` folder:
- `hero/` - Hero section backgrounds
- `about/` - About section images  
- `gallery/` - Gallery images
- `locations/` - Location photos

#### Navigation
Update navigation items in `src/components/Header.tsx`

### 4. Sections

#### Adding New Sections
1. Create component in `src/components/`
2. Add to `src/App.tsx`
3. Add translations if needed
4. Update navigation

#### Removing Sections
1. Remove component import from `src/App.tsx`
2. Remove navigation link from `src/components/Header.tsx`
3. Clean up unused translation keys

### 5. Multi-language Setup

#### Adding New Languages
1. Add language to `src/contexts/LanguageContext.tsx`
2. Add translations for all keys
3. Add flag emoji to language selector
4. Update `src/components/LanguageSelector.tsx`

#### Removing Languages
1. Remove from `languages` array in `LanguageSelector.tsx`
2. Remove translation object from `LanguageContext.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Use Cases

This template is perfect for:
- ☕ Coffee Shops & Cafes
- 🍰 Bakeries & Pastry Shops
- 🏢 Coworking Spaces
- 🍽️ Restaurants & Bistros
- 🏪 Local Businesses
- 🎨 Creative Studios

## 📦 What's Included

```
alto-coffee-template/
├── public/
│   ├── images/           # Image assets
│   └── favicon files
├── src/
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── config/          # Configuration files
│   └── styles/          # CSS files
├── docs/                # Documentation
├── README.md
└── package.json
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure
- **Components** - Reusable UI components
- **Contexts** - Global state management
- **Config** - Centralized configuration
- **Assets** - Images and static files

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This template is licensed under the MIT License. See LICENSE file for details.

## 🤝 Support

For support and customization services, please contact:
- Email: support@yourcompany.com
- Website: www.yourcompany.com

## 🔄 Updates

This template receives regular updates with:
- New features and components
- Performance improvements
- Security updates
- Browser compatibility fixes

---

**Made with ❤️ for the coffee community**

Transform your coffee business with this beautiful, professional template that converts visitors into customers.