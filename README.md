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

### Troubleshooting

If a deployment fails with `Routes Manifest Could Not Be Found`, it means Vercel could not find `.next/routes-manifest.json`. The usual causes are:
- The build command did not run `next build`
- The output directory was overridden to something other than `.next`
- The build failed earlier and `.next/` was never generated

Fix it by keeping the default build/output settings (see above) and ensuring `npm run build` completes locally. After a successful build, `.next/routes-manifest.json` will exist automatically.

### Environment Configuration

This project uses the default Next.js server runtime (no custom `distDir` or static export). Keep the default Vercel settings:
- **Build Command:** `npm run build`
- **Output Directory:** leave empty so Next.js can emit `.next`
- **Install Command:** `npm install`

Vercel will pick these defaults automatically, so you usually do not need a `vercel.json`. Only add one if you have advanced requirements.

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
