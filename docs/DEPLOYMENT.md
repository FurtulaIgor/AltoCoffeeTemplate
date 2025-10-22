# Deployment Guide

This guide covers different ways to deploy your Alto Coffee website template.

## 🚀 Quick Deployment Options

### 1. Netlify (Recommended)

**Drag & Drop Deployment:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area
4. Your site is live!

**Git Integration:**
1. Push your code to GitHub/GitLab
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

### 2. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site is deployed!

**Or use the web interface:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite settings
4. Deploy!

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

### 4. Traditional Web Hosting

1. Build: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure your web server (see below)

## ⚙️ Server Configuration

### Apache (.htaccess)

Create `.htaccess` in your web root:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Nginx

Add to your Nginx config:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/dist;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

## 🔧 Build Optimization

### Environment Variables

Create `.env.production`:

```env
VITE_APP_TITLE=Your Coffee Shop
VITE_API_URL=https://api.yourcoffeeshop.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Build Configuration

Optimize your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## 📊 Performance Optimization

### Image Optimization

1. **Use WebP format** for better compression
2. **Compress images** before uploading
3. **Use appropriate sizes** for different screen sizes
4. **Lazy load images** for better performance

### Code Splitting

The template already includes code splitting, but you can optimize further:

```typescript
// Lazy load components
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
```

### Bundle Analysis

Analyze your bundle size:

```bash
npm install --save-dev rollup-plugin-visualizer
```

Add to vite.config.ts:
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true
    })
  ]
});
```

## 🔍 SEO Optimization

### Meta Tags

Update `index.html` with your SEO data:

```html
<meta name="description" content="Your coffee shop description">
<meta name="keywords" content="coffee, cafe, your-city">
<meta property="og:title" content="Your Coffee Shop">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/images/og-image.jpg">
```

### Sitemap

Generate a sitemap for better SEO:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 📈 Analytics

### Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🔒 Security Headers

Add security headers to your server config:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

## ✅ Pre-Deployment Checklist

- [ ] Test on multiple devices and browsers
- [ ] Optimize and compress all images
- [ ] Update all placeholder content
- [ ] Test contact form functionality
- [ ] Verify all links work correctly
- [ ] Check loading performance
- [ ] Test dark/light mode toggle
- [ ] Verify multi-language functionality
- [ ] Set up analytics tracking
- [ ] Configure proper redirects
- [ ] Test 404 error handling
- [ ] Verify SEO meta tags
- [ ] Check accessibility compliance

## 🆘 Troubleshooting

### Common Issues

**White screen after deployment:**
- Check browser console for errors
- Verify all assets are loading correctly
- Check server configuration for SPA routing

**Images not loading:**
- Verify image paths are correct
- Check file permissions on server
- Ensure images are in the correct directory

**Slow loading:**
- Optimize images
- Enable compression on server
- Use CDN for static assets

**Contact form not working:**
- Implement backend API
- Use form service like Formspree
- Check CORS settings

---

Need help with deployment? Contact support or check the community forums.