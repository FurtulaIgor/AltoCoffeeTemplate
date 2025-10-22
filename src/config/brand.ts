// Brand Configuration
// Customize these values to match your brand

export const brandConfig = {
  // Basic Brand Info
  name: "Alto Coffee",
  tagline: "Your Inspiring Space for Coffee & Creativity",
  description: "Discover the perfect combination of exceptional coffee, delicious pastries and inspiring coworking space in the heart of the city",
  
  // Contact Information
  contact: {
    email: "info@altocoffee.rs",
    phone: "+381 11 123 4567",
    address: "Knez Mihailova 15, 11000 Belgrade, Serbia"
  },
  
  // Social Media Links
  social: {
    instagram: "https://instagram.com/altocoffee",
    facebook: "https://facebook.com/altocoffee", 
    twitter: "https://twitter.com/altocoffee",
    linkedin: "https://linkedin.com/company/altocoffee"
  },
  
  // Business Hours
  hours: {
    weekdays: "07:00 - 23:00",
    weekend: "08:00 - 24:00"
  },
  
  // Features/Services
  features: [
    "Premium Coffee Blends",
    "Fresh Pastries Daily", 
    "Free Coworking Space",
    "High-Speed WiFi",
    "Meeting Rooms",
    "Event Hosting"
  ],
  
  // Location Data
  locations: [
    {
      name: "Alto Coffee Center",
      address: "Knez Mihailova 15, Belgrade",
      phone: "+381 11 123 4567",
      hours: "Mon-Sun: 07:00 - 23:00",
      features: ["Coworking Space", "Free WiFi", "Delivery"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Alto Coffee Vračar",
      address: "Bulevar Kralja Aleksandra 73, Belgrade",
      phone: "+381 11 765 4321",
      hours: "Mon-Sun: 06:30 - 22:30",
      features: ["Terrace", "Pet-friendly", "Parking"],
      image: "https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Alto Coffee Novi Sad",
      address: "Zmaj Jovina 8, Novi Sad",
      phone: "+381 21 987 6543",
      hours: "Mon-Sun: 07:00 - 22:00",
      features: ["Study Zone", "Free WiFi", "Morning Menu"],
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ],
  
  // SEO Settings
  seo: {
    title: "Alto Coffee - Your Inspiring Space for Coffee & Creativity",
    description: "Discover Alto Coffee - combination of exceptional coffee, creativity and community. Special blends, delicious pastries and free coworking space in the heart of the city.",
    keywords: "coffee shop, cafe, coworking space, specialty coffee, pastries, Belgrade, Novi Sad",
    author: "Alto Coffee Team"
  },
  
  // Theme Colors (used in tailwind.config.js)
  colors: {
    primary: {
      50: '#fafaf9',
      100: '#f5f5f4', 
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09'
    },
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a', 
      300: '#f9d71c',
      400: '#f59e0b',
      500: '#d97706',
      600: '#b45309',
      700: '#92400e',
      800: '#78350f',
      900: '#451a03'
    }
  }
};

// Export individual configs for easier imports
export const { name, tagline, description, contact, social, hours, features, locations, seo, colors } = brandConfig;