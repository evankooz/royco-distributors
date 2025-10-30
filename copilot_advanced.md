# copilot.md
# 🚀 Royco Distributors — Modern Web Rebuild (React + SwiftCSS)

## 🎯 Objective
Rebuild the Royco Distributors website (http://www.roycodistributors.com/home.html) as a **modern, component-driven, responsive web app** using:
- **React (with Vite or Next.js)**
- **Swift CSS** (or CSS-in-JS approach)
- **TypeScript** for safer, cleaner logic
- **Framer Motion** for animations
- Fully responsive and mobile-optimized

---

## 🏗️ Tech Stack

| Feature | Tech |
|----------|------|
| UI Framework | React 18 + TypeScript |
| Styling | SwiftCSS (or Tailwind / Vanilla Extract / Stitches) |
| Animations | Framer Motion |
| Build | Vite or Next.js 15 |
| Fonts | Google Fonts: “Inter” or “Poppins” |
| Deployment | Static hosting (Vercel / Cloudflare Pages) |

---

## 📁 Folder Structure
```
royco-distributors/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSlideshow.tsx
│   │   ├── ProductGrid.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── global.swiftcss.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── copilot.md
```

---

## 🧩 Copilot Goals

Copilot should:
1. Generate **React components** for each site section (Nav, Slideshow, Products, Footer).  
2. Use **SwiftCSS** classes for scoped, composable styling.  
3. Apply **Framer Motion** for subtle entrance/fade animations.  
4. Ensure responsive behavior with flex/grid layouts.  
5. Replace global CSS with modular, generated styles.  
6. Add accessibility (`aria-label`, keyboard nav, focus states).  
7. Optimize for **fast load** and **mobile-first** design.

---

## 🧱 Example: Hero Slideshow Component

```tsx
import { motion } from "framer-motion";
import { css } from "swiftcss";
import { useEffect, useState } from "react";

const slide = css({
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0,
  transition: "opacity 1s ease-in-out",
  "&.active": { opacity: 1 },
});

export default function HeroSlideshow() {
  const slides = [
    { image: "/images/slide1.webp", text: "Your Trusted Distribution Partner" },
    { image: "/images/slide2.webp", text: "Quality. Service. Value." },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={css({ position: "relative", height: "60vh", overflow: "hidden" })}>
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className={`${slide} ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
        >
          <div className={css({ position: "absolute", bottom: "15%", left: "10%", color: "#fff" })}>
            <h1>{s.text}</h1>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
```

---

## 🧭 Navbar Example

```tsx
import { useState } from "react";
import { css } from "swiftcss";
import { motion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={css({ position: "sticky", top: 0, zIndex: 50, background: "#fff" })}>
      <nav className={css({ display: "flex", justifyContent: "space-between", padding: "1rem 2rem" })}>
        <a className={css({ fontWeight: "bold", fontSize: "1.25rem" })} href="/">Royco Distributors</a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={css({
            display: "none",
            "@media (max-width: 768px)": { display: "block" },
          })}
        >
          <motion.div animate={{ rotate: open ? 45 : 0 }}>☰</motion.div>
        </button>
        <ul
          className={css({
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              display: open ? "flex" : "none",
            },
          })}
        >
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
```

---

## 🧪 Testing / Checklist
- [ ] All components responsive at ≤ 768 px.  
- [ ] Swift CSS builds successfully with no global conflicts.  
- [ ] Slideshow auto-rotates and fades smoothly.  
- [ ] Hamburger animation works with Framer Motion.  
- [ ] Accessibility validated (tab order, aria labels).  
- [ ] Lighthouse score ≥ 90 on mobile.

---

## 💬 Copilot Prompts for VS Code
Use inline comments like:
```tsx
// Copilot: create SwiftCSS style for a responsive 3-column product grid
// Copilot: animate hero text fade-in on scroll
// Copilot: generate accessible dropdown for desktop nav
```

---

**Author:** Evan Kuczer  
**Date:** 2025-10-27  
**Purpose:** Modern React + Swift CSS rebuild of Royco Distributors website.
