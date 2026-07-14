# Portfolio — Data-Driven Developer Portfolio Template

A production-quality, data-driven personal portfolio built with **Vite.js + React + Tailwind CSS v4**. Designed to be easily customizable by editing only the `database/` folder.

## Tech Stack

- **Vite.js** — Fast build tool and dev server
- **React 19** — Component-based UI
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Icon library
- **React Router** — Client-side routing
- **React Helmet Async** — SEO meta tags

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Customizing Your Portfolio

**You only need to edit files inside the `src/database/` folder.** Every section of the portfolio reads its content from these files.

### Database Files

| File | What to edit |
|---|---|
| `src/database/personal.js` | Your name, title, bio, location, email, resume link |
| `src/database/socialLinks.js` | Your social media links (GitHub, LinkedIn, X, Discord) |
| `src/database/skills.js` | Skill categories and individual skill levels |
| `src/database/experience.js` | Work experience, roles, companies, and highlights |
| `src/database/projects.js` | Your projects with tech stacks, links, and descriptions |
| `src/database/founder.js` | Startup/founder section (vision, problem, solution, features) |
| `src/database/education.js` | Education history and achievements |
| `src/database/stats.js` | Metrics and numbers shown in the stats section |
| `src/database/testimonials.js` | Client/peer testimonials and trust signals |
| `src/database/seo.js` | Page title, meta description, keywords, OG tags |
| `src/database/navigation.js` | Navigation menu links |

### Example: Changing Your Name

Edit `src/database/personal.js`:

```js
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  shortIntro: "Your short intro text.",
  // ...
};
```

### Example: Adding a Project

Edit `src/database/projects.js` and add a new entry to the `projects` array:

```js
{
  id: "my-project",
  title: "My Project",
  tagline: "Short tagline",
  type: "Personal Project",
  description: "Detailed description...",
  techStack: ["React", "Node.js", "MongoDB"],
  liveLink: "https://example.com",
  githubLink: "https://github.com/you/project",
  featured: false,
  status: "Live",
},
```

### Example: Adding Work Experience

Edit `src/database/experience.js`:

```js
{
  id: 3,
  role: "Software Engineer",
  company: "Company Name",
  companyUrl: "https://company.com",
  duration: "2023 — 2024",
  location: "Remote",
  type: "Full-time",
  summary: "Brief role summary.",
  highlights: ["Achievement 1", "Achievement 2"],
  tags: ["React", "Node.js"],
},
```

## Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable UI components
│   ├── BrandIcon.jsx    # Brand SVG icons (GitHub, LinkedIn, etc.)
│   ├── Footer.jsx       # Site footer
│   ├── Navbar.jsx       # Sticky navigation with active section
│   ├── SEO.jsx          # Meta tags component
│   └── SectionWrapper.jsx  # Animation wrapper for sections
├── database/            # ← EDIT THIS FOLDER ONLY
│   ├── education.js
│   ├── experience.js
│   ├── founder.js
│   ├── navigation.js
│   ├── personal.js
│   ├── projects.js
│   ├── seo.js
│   ├── skills.js
│   ├── socialLinks.js
│   ├── stats.js
│   └── testimonials.js
├── hooks/               # Custom React hooks
│   ├── useScrollSpy.js  # Active section detection
│   └── useTheme.js      # Dark mode management
├── layouts/             # Layout components
├── pages/               # Page components
│   └── Home.jsx         # Main single-page layout
├── sections/            # Page sections
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Founder.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Stats.jsx
│   └── Testimonials.jsx
├── utils/               # Utility functions
│   └── helpers.js
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles + Tailwind config
```

## Features

- Responsive design (mobile, tablet, laptop, large screens)
- Dark mode with system preference detection
- Smooth scroll navigation with active section highlighting
- Animated section reveals with Framer Motion
- Professional SEO meta tags
- Contact form (ready for backend integration)
- Data-driven architecture — edit only database files

## Deployment

This project builds to a static site in `dist/`. Deploy to:

- **GitHub Pages**: `pnpm build` then push `dist/` to `gh-pages` branch
- **Vercel**: Connect repo, auto-deploys
- **Netlify**: Connect repo, set build command to `pnpm build`

## License

Free to use and customize for personal portfolios.
