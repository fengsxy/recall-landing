# Recall - Passive Research Memory System

Official landing page for Recall, a research memory system that helps researchers preserve and recall their judgment over time.

## About Recall

Recall is a passive research memory system designed for researchers. It automatically records paper-reading behavior and reconstructs attention and judgment traces offline, enabling fast, trustworthy recall during active thinking.

**What Recall does:**
- 🧠 Preserves research judgment over time
- 🔍 Helps recall evidence you previously encountered
- ⚡ Zero-friction passive recording
- 🎯 Context-aware natural language queries

**What Recall is not:**
- ❌ Not a reference manager (we complement Zotero)
- ❌ Not an AI agent that generates ideas
- ❌ Not a manual PDF organizer

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/recall-landing.git
cd recall-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure build settings
6. Click "Deploy"

### Environment Configuration

This project uses static export (`output: 'export'` in `next.config.js`), which means it can be deployed to any static hosting service without any backend requirements.

## Project Structure

```
recall-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Customization

### Colors

The primary color scheme is defined in `tailwind.config.ts`. You can customize the colors by modifying the `primary` color values.

### Content

Main content is in `app/page.tsx`. Update the text, sections, and structure as needed.

### Metadata

Update SEO metadata in `app/layout.tsx`:
- Title
- Description
- OpenGraph tags (add if needed)

## Contact

- Email: loy004@ucsd.edu
- LinkedIn: [Longxuan Yu](https://www.linkedin.com/in/longxuan-yu-1277b1271)

## License

© 2026 Recall. All rights reserved.

---

Built for researchers, by researchers.
