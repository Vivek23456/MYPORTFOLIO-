# My Portfolio

Welcome to my personal portfolio project! This repository contains the source code for my portfolio website built with modern web technologies.

---

## 🚀 Project Overview

This website showcases my skills, projects, and experience as a developer. It is designed to be **fast, responsive, and visually appealing** with optimized 3D backgrounds and smooth performance on all devices.

---

## ⚡ Performance Features

- **Lazy Loading**: Components are loaded on-demand for faster initial page load
- **3D Optimization**: Three.js background with mobile detection and quality settings
- **Code Splitting**: Vendor libraries are split into separate chunks
- **Service Worker**: Caching for offline capability and faster subsequent loads
- **Mobile Optimized**: Reduced animations and effects on mobile devices
- **Spline Integration**: Optimized 3D scenes with device capability detection

---

## 🛠 Technologies Used

- **React** – Frontend library for building user interfaces
- **TypeScript** – Strongly typed JavaScript for better code quality
- **Vite** – Fast development server and build tool
- **Tailwind CSS** – Utility-first CSS framework for styling
- **shadcn-ui** – UI components for React
- **Three.js** – 3D graphics library for background animations
- **Framer Motion** – Animation library for smooth transitions
- **Spline** – 3D design tool integration

---

## 📦 Project Structure

```
myportfolio/
├─ public/         # Static assets and service worker
├─ src/
│  ├─ components/  # Reusable UI components
│  │  ├─ sections/ # Page sections with lazy loading
│  │  └─ ui/       # UI components (ThreeBackground, OptimizedSpline)
│  ├─ pages/       # Page components
│  ├─ hooks/       # Custom React hooks
│  └─ lib/         # Utility functions
├─ package.json    # Project metadata & dependencies
└─ README.md       # Project documentation
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vivek23456/myportfolio.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   bun run build
   ```

---

## 📈 Deployment

The site can be deployed using any static hosting platform such as Vercel, Netlify, GitHub Pages, etc.

For optimal performance, ensure your hosting platform supports:
- HTTP/2 for parallel loading
- Compression (gzip/brotli)
- CDN for global distribution

---

## 🎨 Customization

### 3D Background
The 3D background automatically detects device capabilities:
- **Desktop**: Full Three.js scene with high-quality geometry
- **Mobile**: Lightweight CSS animations for better performance

### Spline Integration
Add Spline scenes by importing the `OptimizedSpline` component:
```tsx
import { OptimizedSpline } from '@/components/ui/OptimizedSpline';

<OptimizedSpline scene="your-spline-scene-url" />
```

---

## 📱 Mobile Optimization

- Reduced particle counts and animation complexity on mobile
- Disabled heavy 3D effects on low-end devices
- Optimized touch interactions
- Responsive design with Tailwind CSS

---

## 📫 Contact

For any questions or collaboration, feel free to reach out:

Email: vivekatkari910@gmail.com

LinkedIn: Vivek Atkari

GitHub: Vivek23456

Made with ❤️ using React, TypeScript, and Tailwind CSS

## License
This is my personal portfolio.  
© 2025 Vivek Atkari. All Rights Reserved.  
You may view this project, but you are not permitted to copy, modify, or claim it as your own.