# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the API documentation site for Raastin cryptocurrency exchange, built with Docusaurus 3. The documentation is written primarily in Farsi (Persian) and covers the exchange's REST API for trading, market information, and user account management.

## Commands

```bash
# Install dependencies
yarn

# Local development server (hot-reload enabled)
yarn start

# Build static site
yarn build

# Deploy to GitHub Pages
yarn deploy
# Or with SSH: USE_SSH=true yarn deploy

# Clear build cache
yarn clear

# Serve production build locally
yarn serve
```

## Architecture

**Deployment Flow:**
- Source code lives in `master` branch
- `yarn build` triggers a commit to `gh-pages` branch
- GitHub Pages serves from `gh-pages` branch
- Live site: https://raastin-exchange.github.io/docs/

**Key Configuration:**
- `docusaurus.config.js` - Site config, navbar, footer, Algolia search (not yet configured)
- `sidebars.js` - Auto-generated from `docs/` folder structure
- `src/css/custom.css` - Custom styling with IRANSansX Persian font

## Documentation Structure

All documentation is in `docs/` with MDX format:

- `intro.md` - Landing page introduction
- `authentication.mdx` - API token authentication guide
- `markets_info/` - Market data endpoints (symbols, orderbooks, market info)
- `trading/` - Order management (place, cancel, modify, bulk operations)
- `user/` - User account endpoints (wallets, assets, deposits, withdrawals)

Each category folder contains a `_category_.json` for sidebar positioning and labels.

## Writing Documentation

**MDX Features Used:**
- Docusaurus Tabs component for Request/Response examples
- Admonitions: `:::info`, `:::tip`, `:::caution`
- RTL support with `<div dir='ltr'>` for code blocks
- Custom `Json` component in `src/components/Json.jsx`

**Conventions:**
- Frontmatter: `sidebar_position` and `sidebar_label` (in Farsi)
- API endpoints shown as: `POST /api/v1/market/orders`
- Parameter tables with: نام پارامتر (name), نوع (type), اجباری (required), توضیح (description)
- Request/Response JSON examples in tabs

## Locale

Site is configured for Farsi (`fa`) locale only. All user-facing text should be in Farsi.
