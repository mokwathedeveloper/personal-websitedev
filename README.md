# Mokwa | Premium Portfolio Portfolio

A high-performance, visually stunning personal portfolio built with the latest cutting-edge technologies. This project features an avant-garde design aesthetic inspired by top-tier creative agencies, focusing on cinematic motion, architectural typography, and interactive user experiences.

![Banner Placeholder](https://github.com/mokwathedeveloper/personal-websitedev/raw/master/public/images/profile.webp)

## ✨ Wow Factors & Features

- **🚀 Cutting-Edge Tech Stack**: Built with **Next.js 16 (Canary)** and **React 19**, leveraging the latest features like Server Components and optimized rendering.
- **🎨 Tailwind CSS v4**: Utilizes the brand-new, CSS-first engine for ultra-fast builds and modern styling capabilities.
- **🔳 Bento Grid Architecture**: A mosaic-style "About" section that organizes content into a visually engaging and professional layout.
- **✨ Interactive Spotlight Cards**: Custom-built cards with mouse-following radial gradients that create a tactile, premium feel.
- **📽️ Cinematic Animations**: 
  - **Staggered Text Reveal**: High-impact entrance animations for headlines.
  - **Smooth Page Transitions**: Seamless fade-and-slide motion between routes.
  - **Infinite Marquee**: A dynamic, fading marquee for technical skills.
- **📐 Screen-Fit Design**: Every primary section is engineered to perfectly frame the viewport (`100vh`) for an immersive "app-like" experience.
- **🎭 Avant-Garde Typography**: Paired **Syne** (architectural headings) with **Inter** (precision body text) for a professional contrast.
- **⚙️ Data-Driven**: Fully customizable via a centralized configuration layer (`src/lib/data.ts`). Update your entire portfolio without touching a single line of UI code.
- **🌙 Deep Indigo Theme**: A carefully harmonized color palette optimized for both Light and Dark modes.

## 🛠️ Technical Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm / pnpm / yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mokwathedeveloper/personal-websitedev.git
   cd personal-websitedev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
├── src/
│   ├── app/              # Next.js App Router (Pages & Layouts)
│   │   ├── (sections)/   # Modular UI sections (Hero, About, etc.)
│   ├── components/       # Reusable React components
│   │   ├── ui/           # Low-level UI primitives (Shadcn)
│   ├── lib/              # Utilities and global data
│   │   └── data.ts       # THE CENTRAL DATA SOURCE (Edit this!)
├── public/               # Static assets (Images, Icons)
└── tailwind.config.js    # Legacy config (Modern styles in globals.css)
```

## ✍️ Customization

To make this portfolio your own, simply edit the content in:
`src/lib/data.ts`

You can update your:
- Name and Title
- Social Links
- Hero Taglines
- Detailed About information
- Project showcase list
- Work Experience timeline

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Designed & Built by [Mokwa](https://github.com/mokwathedeveloper)