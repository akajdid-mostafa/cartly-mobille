# Cartly (Shoply) - E-Commerce Mobile Web Template

Cartly is an e-commerce mobile UI template built from multiple HTML screens and styled with SCSS/Tailwind. The project is bundled with Webpack so you can run a dev server, add/edit screens under `src/`, and build a production-ready `dist/` folder.

## Features

- Multi-screen store flows: home, categories, product details, search, promos
- Shopping flow: cart, checkout, delivery review, payment method, order placed, returns/refunds
- Account flow: login, signup, verification, password reset, profile/orders, wishlist, notifications
- UI/UX enhancements: responsive layout, sliders (Swiper), mobile-friendly components
- PWA install prompt (service worker + manifest wiring)

## Tech Stack

- UI: HTML templates, SCSS, TailwindCSS (via PostCSS), Alpine.js, Swiper
- Build tooling: Webpack 5 + webpack-dev-server
- CSS pipeline: `sass-loader`, `postcss-loader` (autoprefixer), `mini-css-extract-plugin`
- Development helper: `watch-new-files.js` restarts the dev server when new files are added under `src/`

## Getting Started

### Prerequisites

- Node.js and npm

### Install

```bash
npm install
```

### Run (development)

```bash
npm run start
```

Then open: `http://localhost:5000`

If you are adding new HTML screens/partials under `src/`, use:

```bash
npm run dev
```

### Build (production)

```bash
npm run build
```

Output:

- `dist/` (generated HTML pages + bundled assets)

## PWA (Installable)

The template includes PWA files in `public/`:

- `public/manifest.webmanifest`
- `public/sw.js`

The client-side code references a manifest and registers the service worker. When deploying to a static host, ensure those `public/` files are available at your site root (since the current build output does not automatically include them).

## Project Structure

- `src/`: all HTML screens (e.g. `src/index.html`, `src/products_details_1.html`, etc.), plus styles and JS
- `src/partials/`: reusable partial HTML snippets
- `public/`: PWA manifest + service worker + icons
- `dist/`: build output

Webpack is configured to auto-build every `src/*.html` file into `dist/`.

## Customization

- Edit screens in `src/*.html`
- Update styles in `src/scss/`
- Replace images/assets inside `src/assets/` (Webpack copies them into `dist/assets/`)

For additional context and template guidance, see:

- `documentation/index.html`

