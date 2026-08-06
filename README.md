# Gökay Dervişoğlu - Portfolio

Personal portfolio website showcasing my projects, experience, and achievements in software development, AI, and embedded systems.

## About

This portfolio highlights my work in:

- Backend systems and web services (APIs)
- Computer vision and AI applications
- Autonomous systems and UAV development
- Technical competitions and achievements

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI Library:** Once UI
- **Styling:** SASS/SCSS
- **Content:** MDX
- **i18n:** next-intl (Turkish / English)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/gokaydervisoglu/gokaydervisoglu_site.git
cd gokaydervisoglu_site
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── messages/                  # i18n translation strings (en.json, tr.json)
├── public/                    # Static assets
│   └── images/                # Images and media
├── src/
│   ├── app/
│   │   └── [locale]/          # Locale-scoped routes
│   │       ├── about/         # About / experience page
│   │       ├── blog/          # Blog posts
│   │       ├── contact/       # Contact page
│   │       ├── gallery/       # Photo gallery
│   │       └── work/          # Projects showcase
│   │           └── projects/  # MDX project pages (en/, tr/)
│   ├── components/            # React components
│   ├── i18n/                  # Internationalization config
│   ├── resources/             # Configuration and content
│   ├── types/                 # TypeScript types
│   ├── utils/                 # Utility functions
│   └── proxy.ts               # Request middleware/proxy
└── package.json
```

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 🌍 Bilingual support (Turkish / English)
- 📝 MDX-based blog and project pages
- 🖼️ Photo gallery
- 📧 Contact form
- 🔍 SEO optimized
- 🚀 Fast performance with Next.js

## Contact

- **Email:** [gokaydervisoglu@gmail.com](mailto:gokaydervisoglu@gmail.com)
- **LinkedIn:** [linkedin.com/in/gokaydervisoglu](https://www.linkedin.com/in/gokaydervisoglu/)
- **GitHub:** [@gokaydervisoglu](https://github.com/gokaydervisoglu)

## License

© 2026 Gökay Dervişoğlu. All rights reserved.
