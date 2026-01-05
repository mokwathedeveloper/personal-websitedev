# 💎 Mokwa | Architectural Portfolio Engine

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-6633FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

A hyper-modern, architecturally sound personal portfolio engine engineered for high-impact digital presence. This isn't just a website; it's a showcase of **Senior-level Full Stack engineering**, combining cinematic motion design with a rigid, data-driven architecture.

---

## 🚀 Architectural Overview

This project is built on the philosophy of **Separation of Concerns** and **Component Reusability**. By abstracting the content layer from the presentation layer, it achieves a level of maintainability typically reserved for enterprise-grade applications.

### 🛠 The Master Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (Canary)** | Leveraging the latest Turbopack speeds and React 19 Server Components. |
| **Styling** | **Tailwind CSS v4** | Utilizing the new CSS-first engine for high-performance, maintainable styles. |
| **Animation** | **Framer Motion** | Cinematic entrance reveals, scroll-linked animations, and layout transitions. |
| **UI Primitives** | **Radix UI** | Accessible, unstyled components providing the foundation for professional UX. |
| **Validation** | **Zod & Hook Form** | Type-safe form handling with robust schema validation. |
| **Typography** | **Syne & Inter** | A carefully curated pairing of architectural and precision typefaces. |

---

## 💎 Premium Features

### 🔳 The Bento Grid Experience
Inspired by the modern design systems of Apple and Vercel, the "About" section utilizes a **Bento Grid** layout. This mosaic-style architecture allows for complex information hierarchy while maintaining a clean, professional aesthetic.

### ✨ Interactive Spotlight System
Every card in the portfolio is wrapped in a custom-engineered **SpotlightCard**. It features a high-performance `useMotionTemplate` mouse-tracking system that illuminates borders and backgrounds in real-time, providing a tactile, premium feel.

### 📽 Cinematic Motion Design
- **Staggered Character Reveals**: Headlines enter the viewport with a word-by-word "slide-up" animation, creating a high-end agency feel.
- **Global Template Transitions**: Route changes are handled by a dedicated `template.tsx`, ensuring smooth fade-and-slide transitions across the entire application.
- **Infinite Skill Marquee**: A custom CSS/Framer Motion hybrid that showcases technical expertise in a non-static, engaging way.

### 📐 Full-Viewport "Screen-Fit" Engineering
Every primary section is mathematically centered and framed to the user's viewport (`100vh`). This "Screen-Fit" design ensures that your work is always the focal point, regardless of the device.

---

## 📂 Engineering Structure

```text
├── src/
│   ├── app/
│   │   ├── (sections)/   # High-level section components (Modular Logic)
│   │   ├── template.tsx  # Global animation controller
│   │   └── layout.tsx    # Core architecture & font orchestration
│   ├── components/
│   │   ├── ui/           # Atomic Design primitives (Shadcn/Radix)
│   │   ├── social-links/ # Reusable social orchestration
│   │   └── navigation/   # High-impact glassmorphism Navbar
│   └── lib/
│       ├── data.ts       # THE SOURCE OF TRUTH (Content Layer)
│       └── utils.ts      # Class merging and structural helpers
```

---

## ⚙️ Deployment & Development

### 1. Installation
```bash
git clone https://github.com/mokwathedeveloper/personal-websitedev.git
npm install
```

### 2. Customization (The Content Layer)
The entire portfolio is controlled by `src/lib/data.ts`. Modify this file to update everything from technical skills to project impact metrics without modifying JSX.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📄 License & Integrity

Distributed under the **MIT License**. See `LICENSE` for more information.

Designed with precision and built with passion by **[Mokwa](https://github.com/mokwathedeveloper)**.
