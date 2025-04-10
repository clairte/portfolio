﻿# 🧭 Claire Xu's Portfolio Website

Welcome to the official codebase of my single-page personal portfolio website. This project is designed to showcase my work in software engineering, music, and life—including my beloved pets 🐾. It's a fun, animated, and scroll-friendly space that reflects both my personality and creative/technical experience.

---

## 🌐 Live Site 

> https://portfolio-clairtes-projects.vercel.app/

---

## 🛠 Tech Stack

- **Frontend Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Smooth Scroll**: CSS (`scroll-behavior: smooth`) and/or `react-scroll`
- **Audio Embeds**: HTML5 `<audio>` or third-party embeds iframes
- **Responsive Design**: Mobile-friendly via Tailwind's utilities

---

## 📁 Component Structure

```

App
├── Layout
│   ├── NavBar (Sticky)
│   └── SectionWrapper (common section wrapper for scroll/spacing)
├── Sections
│   ├── Home (with animated intro)
│   ├── About (photo + summary)
│   ├── SWE (resume-style scrollable)
│   ├── Music
│   │   ├── MusicSummary
│   │   └── ProjectCard[]
│   ├── LivingThings
│   │   ├── LivingThingsSummary
│   │   └── PhotoGallery (grid)
│   └── Contact (text + ContactCard)
├── UI
│   ├── AnimatedText (for welcome message)
│   ├── ProjectCard (music projects)
│   ├── ContactCard
│   └── ScrollToAnchor
└── Assets
    └── theme, images, clipart, etc.

```


---

## 🎨 Color Palette & Visuals

Color theming is handled via `tailwind.config.js` and optional CSS variables for dynamic switching. Decorative cliparts/images may be positioned using utility classes (`absolute`, `z-index`, `opacity`) or applied as section backgrounds.

---

## 📝 Development Notes

This section is for documenting progress, ideas, bugs, and thoughts during the build process.

### To-Do
- [ ] Set up basic file structure
- [ ] Build sticky NavBar with scroll links
- [ ] Implement animated welcome message
- [ ] Fill in About, SWE, Music, Living Things sections
- [ ] Add images and polish layout
- [ ] Style and mobile optimize

### Design Ideas
- Possibly add animated corner cliparts for whimsy
- Explore `IntersectionObserver` for dynamic NavBar highlighting
- Keep animations subtle to preserve readability

---

## 📬 Contact

If you're curious about how this was made or want to collaborate, feel free to reach out!

---

> Built with love, React, and a little too much attention to color harmony 🌈
