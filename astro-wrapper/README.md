# Soomoja Astro Wrapper

This is an Astro wrapper for the Soomoja React app that provides better SEO optimization and server-side rendering capabilities.

## Features

- **SEO Optimization**: Proper meta tags, structured data, and semantic HTML
- **Server-Side Rendering**: Better initial page load and search engine indexing
- **Performance**: Preloading of critical resources and optimized loading
- **Accessibility**: Proper ARIA labels and semantic markup
- **Dark Mode Support**: Maintains the React app's dark/light mode functionality

## Structure

```
astro-wrapper/
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Main layout with SEO meta tags
│   └── pages/
│       ├── index.astro       # Main page that embeds React app
│       ├── features.astro    # SEO-optimized features page
│       └── sitemap.xml.ts    # Dynamic sitemap generation
├── public/
│   └── robots.txt           # Search engine crawling rules
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Usage

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the Astro wrapper:
   ```bash
   npm run dev
   ```

3. Or run both React and Astro together:
   ```bash
   npm run dev:both
   ```

### Production

1. Build both React and Astro:
   ```bash
   npm run build:all
   ```

2. The built files will be in the `dist/` directory

## SEO Features

- **Meta Tags**: Open Graph, Twitter Cards, and standard meta tags
- **Structured Data**: JSON-LD schema markup for better search results
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevents duplicate content issues
- **Preloading**: Critical resources are preloaded for better performance

## Integration

The Astro wrapper seamlessly integrates with the React app by:

1. **Embedding**: The React app is embedded via iframe or direct script loading
2. **SEO Content**: Static SEO content is rendered server-side before React loads
3. **Performance**: Critical CSS and images are preloaded
4. **Fallback**: Graceful fallback to direct React app if embedding fails

## Benefits

- **Better SEO**: Search engines can crawl and index the content properly
- **Faster Initial Load**: Server-side rendered content appears immediately
- **Social Sharing**: Proper Open Graph tags for social media sharing
- **Analytics**: Better tracking and analytics capabilities
- **Accessibility**: Improved accessibility with semantic HTML

