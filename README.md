# Intrastat Portál

Professional Intrastat reporting services website for Slovak companies.

🌐 **Live Site**: [intrastatportal.sk](https://intrastatportal.sk) (after deployment)

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.x
- **Styling**: [TailwindCSS](https://tailwindcss.com/) v3.x
- **Language**: TypeScript
- **Hosting**: GitHub Pages
- **Forms**: [Web3Forms](https://web3forms.com/)
- **i18n**: Slovak (default) + English

## Features

- ✅ Static site generation (SSG) for fast loading
- ✅ Responsive design (mobile-first)
- ✅ Bilingual support (SK/EN)
- ✅ SEO optimized with sitemap
- ✅ Contact form with Web3Forms
- ✅ Blog section for content marketing
- ✅ Automatic deployment via GitHub Actions

## Getting Started

### Option 1: Using Docker (Recommended)

If you have restricted npm access or prefer containerized development:

**Prerequisites:**
- Docker 20+

**Run with Docker:**

```bash
# Build the Docker image
docker build -t intrastatportal .

# Run the development server
docker run -p 4321:4321 -v $(pwd):/app -v /app/node_modules intrastatportal

# Or use docker-compose (if available)
docker-compose up --build
```

Then open **http://localhost:4321** in your browser.

**Docker commands reference:**

```bash
# Stop the container
docker stop $(docker ps -q --filter ancestor=intrastatportal)

# Rebuild after changes to package.json
docker build -t intrastatportal . --no-cache

# Build production version
docker run -v $(pwd)/dist:/app/dist intrastatportal npm run build
```

### Option 2: Using npm/Node.js

**Prerequisites:**
- Node.js 18+ 
- npm or yarn

**Installation:**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/     # Reusable UI components
│   ├── i18n/           # Translations
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   │   ├── en/         # English pages
│   │   └── blog/       # Blog posts
│   └── styles/         # Global styles
├── .github/
│   └── workflows/      # GitHub Actions
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Configuration

### Web3Forms Setup

1. Go to [web3forms.com](https://web3forms.com/)
2. Create a free account and get your access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in contact forms:
   - `src/pages/kontakt.astro`
   - `src/pages/en/kontakt.astro`

### Custom Domain Setup

1. Register your domain (intrastatportal.sk)
2. In GitHub repo settings → Pages → Custom domain
3. Add DNS records:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME: `www` → `yourusername.github.io`

### Site URL

Update the site URL in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://intrastatportal.sk',
  // ...
});
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Push code to GitHub
2. Go to repo Settings → Pages
3. Source: GitHub Actions
4. The workflow will build and deploy automatically

## Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```js
colors: {
  primary: {
    600: '#1E40AF', // Main brand color
    // ...
  },
  accent: {
    500: '#0D9488', // Secondary color
  },
}
```

### Content

- **Translations**: `src/i18n/translations.ts`
- **Blog posts**: `src/pages/blog/` and `src/pages/en/blog/`
- **Contact info**: Update phone/email in Footer and Contact pages

## License

Private - All rights reserved

## Contact

For questions about this project, contact: info@intrastatportal.sk