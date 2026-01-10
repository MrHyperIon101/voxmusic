# Voxtrona Music 🎵

> **High-Fidelity. Zero Compromise.**

The official marketing website for Voxtrona Music - a premium audiophile music player featuring Meridian Audio spatial processing, glassmorphic UI, and cross-platform support.

**Current Version:** Codename Orion (v2.3.2026)

## 🌟 Features

### Core Functionality
- **Premium Spatial Audio** - Meridian Audio integration for studio-grade 3D audio
- **Lossless Playback** - FLAC & WAV support with bit-perfect output
- **Multi-Platform** - Android, Windows Desktop, Smart TV (in development)
- **Modern UI** - Liquid glass aesthetic with backdrop blur effects
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Website Sections
- 🏠 **Hero Section** - Dynamic video background with glassmorphic elements
- ⚡ **Feature Showcase** - Spatial audio capabilities and playback features
- 📱 **Highlights Carousel** - Interactive feature demonstration
- 💎 **Bento Grid** - Advanced feature cards with glassmorphic design
- 📥 **Download Page** - Platform-specific download cards with beta access
- 📖 **Documentation** - Comprehensive user guide with search functionality
- 🐛 **Support Page** - Bug reporting system with email integration
- 🔗 **StaggeredMenu Navigation** - Animated floating menu with smooth transitions

## 🎨 Design Philosophy

Voxtrona Music embraces a **premium glassmorphic aesthetic** with:
- Pure black (#000) background for OLED optimization
- Transparent layers with backdrop blur effects
- Smooth GSAP-powered animations
- White/grayscale accent colors (no purple)
- Responsive layouts that adapt seamlessly across devices

## 🛠️ Tech Stack

### Framework & Core
- **Next.js 16.1.1** (App Router) with Turbopack
- **React 19**
- **TypeScript**

### Styling & Animation
- **Vanilla CSS Modules** (No Tailwind)
- **Framer Motion** - Scroll animations and transitions
- **GSAP** - Advanced menu animations
- **Outfit Font** (Google Fonts) - Primary typography

### UI Components
- **Lucide React** - Icon library
- Custom glassmorphic components (Hero, StaggeredMenu, DownloadGrid, BentoGrid, etc.)

### Backend Integration
- **AWS SES** - Email service for bug reports
- **Nodemailer** - Email handling
- **Next.js API Routes** - Backend endpoints

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/MrHyperIon101/voxtrona.git
cd voxmusic

# Install dependencies
npm install
# or
bun install

# Set up environment variables
cp .env.example .env.local
# Add your AWS credentials and SMTP settings
```

### Environment Variables

Create a `.env.local` file with:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```

### Development

```bash
# Run the development server
npm run dev
# or
bun dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
voxmusic/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── page.tsx           # Home page
│   │   ├── download/          # Download page
│   │   ├── docs/              # Documentation page
│   │   ├── support/           # Support page
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── Navbar/           # Navigation with StaggeredMenu
│   │   ├── Hero/             # Hero section with video
│   │   ├── FeatureSection/   # Spatial audio feature
│   │   ├── HighlightsSection/ # Feature carousel
│   │   ├── BentoGridSection/ # Feature cards
│   │   ├── DownloadGrid/     # Platform downloads
│   │   ├── StaggeredMenu/    # Animated menu
│   │   └── Footer/           # Site footer
│   └── styles/               # Global styles
├── public/                   # Static assets
│   ├── favicon.png
│   ├── hero-desktop.mp4
│   └── *.jpg                 # Background images
└── package.json
```

## 🎯 Key Features

### Meridian Audio Integration
Premium spatial audio processing technology for immersive 3D sound. Replaces legacy Dolby/DTS implementations with studio-grade processing.

### StaggeredMenu Navigation
Custom-built animated navigation menu with:
- GSAP-powered slide-in animations
- Mobile-optimized performance (reduced backdrop blur)
- Icon-only circular toggle button
- Floating rounded panel design

### Glassmorphic UI
Consistent design language across all components:
- Backdrop blur effects (`backdrop-filter: blur()`)
- Semi-transparent cards with border highlights
- Smooth hover transitions
- Shadow depth for floating elements

### Performance Optimizations
- Mobile-specific animation tuning (faster durations, reduced complexity)
- GSAP animations with GPU acceleration
- Optimized backdrop blur on mobile devices
- Lazy loading for images and components

## 📱 Supported Platforms

### In Production
- ✅ **Android** - v2.3.2026 (Codename Orion)
  - Meridian Audio spatial processing
  - Lossless FLAC/WAV support
  - Bit-perfect playback

### In Development
- 🚧 **Windows Desktop** - Beta available
- 🚧 **Smart TV** - Waitlist open

## 🐛 Bug Reports

Submit bugs through the [Support Page](/support) or via email integration. Bug reports are automatically sent to the development team via AWS SES.

## 📄 License

Copyright © 2025-2028 Voxtrona Music. All rights reserved.

## 👨‍💻 Credits

- **Website Design**: Souvik Bagchi
- **Development**: MrHyperIon101
- **Spatial Audio**: Powered by Meridian Audio

## 🔗 Links

- [Live Website](https://voxtrona.vercel.app)
- [Download App](https://voxtrona.vercel.app/download)
- [Documentation](https://voxtrona.vercel.app/docs)
- [Support](https://voxtrona.vercel.app/support)
- [GitHub](https://github.com/MrHyperIon101/voxtrona)
- [Instagram](https://instagram.com/mrhyperion)

---

**Built with ❤️ using Next.js and powered by Meridian Audio**
