# W3force - AI-Powered Software Development

![W3force](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

W3force is a modern company website showcasing AI-powered software development services and portfolio. Built with Next.js 16, featuring a beautiful gradient design with violet, pink, and orange color scheme.

## 🚀 Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Portfolio Showcase**: Detailed showcase of Nestly Advisor with screenshots
- **Fast Performance**: Optimized with Next.js 16 and App Router
- **SEO Optimized**: Meta tags and semantic HTML for better search rankings
- **TypeScript**: Type-safe code for better development experience

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Font**: Geist Sans & Geist Mono

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd w3force
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
w3force/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── portfolio/          # Portfolio showcase
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   └── ContactForm.tsx     # Contact form
├── public/
│   └── nestly/             # Nestly Advisor screenshots
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Color Scheme

- **Primary**: Violet (#8b5cf6)
- **Secondary**: Pink (#ec4899)
- **Accent**: Orange (#f97316)

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (if needed)

No environment variables required for basic deployment.

## 📱 Pages

- **Home** (`/`): Hero section, company overview, featured project
- **About** (`/about`): Company mission, vision, and tech stack
- **Portfolio** (`/portfolio`): Detailed showcase of Nestly Advisor
- **Contact** (`/contact`): Contact form and company information

## 🎯 Featured Project: Nestly Advisor

An intelligent retirement planning tool that helps users project their savings, 401(k), Social Security, and investments. [Visit Live Site](https://nestlyadvisor.vercel.app/)

### Key Features:
- ⚡ Instant retirement projections in 8 seconds
- 📊 What-If analysis and scenario comparison
- 🔒 Privacy-first: All calculations run on device
- 💰 Deterministic and Monte Carlo simulations
- 📈 Multiple investment strategies

## 📝 Customization

### Update Company Information

Edit the content in:
- `app/layout.tsx` - Meta tags and site title
- `components/Footer.tsx` - Footer links and contact info
- `app/contact/page.tsx` - Contact details

### Add New Projects

1. Add project images to `public/` folder
2. Update `app/portfolio/page.tsx` with new project details

### Change Colors

Update color scheme in `app/globals.css`:
```css
:root {
  --primary: #8b5cf6;
  --secondary: #ec4899;
  --accent: #f97316;
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: info@w3force.com
- **Website**: [w3force.vercel.app](https://w3force.vercel.app)
- **GitHub**: [@w3force](https://github.com/w3force)

---

Built with ❤️ by W3force

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
