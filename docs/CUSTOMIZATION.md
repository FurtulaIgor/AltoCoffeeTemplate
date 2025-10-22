# Customization Guide

This guide will help you customize the Alto Coffee template for your own brand.

## 🎨 Brand Customization

### 1. Basic Brand Information

Edit `src/config/brand.ts` to update your brand details:

```typescript
export const brandConfig = {
  name: "Your Coffee Shop Name",
  tagline: "Your Unique Tagline", 
  description: "Your brand description...",
  // ... rest of config
}
```

### 2. Contact Information

Update contact details in the same file:

```typescript
contact: {
  email: "info@yourcoffeeshop.com",
  phone: "+1 (555) 123-4567", 
  address: "123 Main Street, Your City, State 12345"
}
```

### 3. Social Media Links

Add your social media profiles:

```typescript
social: {
  instagram: "https://instagram.com/yourcoffeeshop",
  facebook: "https://facebook.com/yourcoffeeshop",
  twitter: "https://twitter.com/yourcoffeeshop",
  linkedin: "https://linkedin.com/company/yourcoffeeshop"
}
```

## 🎨 Visual Customization

### Colors

The template uses a warm, coffee-inspired color palette. You can customize colors in two places:

1. **Brand Config** (`src/config/brand.ts`):
```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades  
  }
}
```

2. **Tailwind Config** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      // Import from brand config or define directly
    }
  }
}
```

### Typography

The template uses Inter font by default. To change fonts:

1. Update Google Fonts link in `index.html`
2. Update font family in `tailwind.config.js`:

```javascript
fontFamily: {
  'sans': ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Images

Replace images in the `public/images/` directory:

- **Hero Images**: `public/images/hero/`
- **About Section**: `public/images/about/`  
- **Gallery**: `public/images/gallery/`
- **Locations**: `public/images/locations/`

**Image Guidelines**:
- Use WebP format for better performance
- Optimize images for web (compress)
- Recommended sizes:
  - Hero: 1920x1080px
  - Gallery: 800x600px
  - Locations: 600x400px

## 📝 Content Customization

### Text Content

All text is managed through the translation system in `src/contexts/LanguageContext.tsx`. Even for single-language sites, this makes content management easier.

To update content:

1. Find the relevant translation key
2. Update the text in your desired language(s)
3. The changes will appear automatically

Example:
```typescript
'hero.welcome': 'Welcome to',
'hero.brand': 'Your Coffee Shop',
'hero.subtitle': 'Your custom subtitle here...'
```

### Navigation

Update navigation items in `src/components/Header.tsx`:

```typescript
const navItems = [
  { id: 'hero', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  // Add or remove items
];
```

### Locations

Update your locations in `src/config/brand.ts`:

```typescript
locations: [
  {
    name: "Your Location Name",
    address: "Your Address", 
    phone: "Your Phone",
    hours: "Your Hours",
    features: ["Feature 1", "Feature 2"],
    image: "/images/locations/your-image.jpg"
  }
]
```

## 🌐 Multi-language Setup

### Adding Languages

1. Add language code to the `Language` type in `src/contexts/LanguageContext.tsx`
2. Add translations object for the new language
3. Add language option to `src/components/LanguageSelector.tsx`

### Removing Languages

1. Remove language from `languages` array in `LanguageSelector.tsx`
2. Remove translation object from `LanguageContext.tsx`

### Translation Keys

All translation keys follow a hierarchical structure:
- `nav.*` - Navigation items
- `hero.*` - Hero section
- `about.*` - About section  
- `gallery.*` - Gallery section
- `locations.*` - Locations section
- `contact.*` - Contact section
- `footer.*` - Footer section

## 🔧 Advanced Customization

### Adding New Sections

1. Create component in `src/components/NewSection.tsx`
2. Add translations for the section
3. Import and add to `src/App.tsx`
4. Add navigation link if needed

### Removing Sections

1. Remove component from `src/App.tsx`
2. Remove navigation link from `src/components/Header.tsx`
3. Clean up unused translation keys
4. Remove component file

### Custom Styling

The template uses Tailwind CSS. You can:

1. **Use Tailwind classes** directly in components
2. **Add custom CSS** in `src/index.css`
3. **Extend Tailwind** in `tailwind.config.js`

### Form Integration

The contact form is currently a demo. To make it functional:

1. **Backend Integration**: Connect to your backend API
2. **Email Service**: Use services like EmailJS, Formspree, or Netlify Forms
3. **Validation**: Add more robust validation as needed

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Test your customizations on all screen sizes.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions
- **Traditional Hosting**: Upload `dist` folder contents

## 💡 Tips

1. **Keep backups** of your customizations
2. **Test thoroughly** after changes
3. **Optimize images** for better performance
4. **Use semantic HTML** for better SEO
5. **Test on multiple devices** and browsers

## 🆘 Common Issues

### Images Not Loading
- Check file paths are correct
- Ensure images are in `public/images/`
- Verify image file extensions match code

### Styling Issues  
- Clear browser cache
- Check Tailwind classes are correct
- Verify custom CSS doesn't conflict

### Translation Issues
- Check translation keys exist in all languages
- Verify language codes match
- Ensure proper nesting in translation objects

---

Need more help? Check the main README.md or contact support.