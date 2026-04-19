# Portfolio Website Documentation

## Overview

This is a modern, interactive personal portfolio website built with **Next.js 15**, **GSAP**, **Tailwind CSS**, and **TypeScript**. It showcases internship experience, professional work, coding achievements, and projects with smooth animations and responsive design.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page with all sections
│   ├── globals.css          # Global styles & design tokens
│   ├── experience/
│   │   └── page.tsx         # Experience showcase page
│   ├── projects/
│   │   └── page.tsx         # Projects & competitions page
│   └── profile/
│       └── page.tsx         # Profile & social links page
├── components/
│   ├── Navbar.tsx           # Reusable navigation bar
│   ├── Hero.tsx             # Hero section with animations
│   ├── SectionTitle.tsx     # Animated section titles
│   ├── ExperienceCard.tsx   # Experience/internship cards
│   ├── ProjectCard.tsx      # Project showcase cards
│   ├── ImageScroller.tsx    # Image carousel component
│   └── SocialLinks.tsx      # Social media links component
├── public/
│   └── data/
│       ├── experiences.json # Internship & professional data
│       ├── projects.json    # Projects & competitions data
│       └── social.json      # Social links & ratings data
└── package.json             # Dependencies
```

## Technology Stack

### Core Technologies
- **Next.js 15**: Modern React framework with App Router
- **React 19**: Latest React features with optimizations
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

### Animation Library
- **GSAP 3.15**: Professional animation library
  - Used for: smooth transitions, scroll triggers, hover effects, staggered animations

### Dependencies
```json
{
  "gsap": "^3.15.0"
}
```

## Design System

### Color Palette (Bold & Creative)
```css
--background: #0a0e27      /* Deep navy background */
--foreground: #ffffff       /* White text */
--card: #1a1f3a             /* Card background */
--primary: #a855f7          /* Purple - primary brand color */
--secondary: #ec4899        /* Pink - accent color */
--accent: #f97316           /* Orange - highlight color */
--border: #334155           /* Subtle borders */
```

### Typography
- **Sans Serif**: Geist (default)
- **Mono**: Geist Mono (code blocks)

### Spacing
Uses Tailwind's standard scale: `p-4`, `gap-6`, `py-8`, etc.

## Component Documentation

### 1. **Navbar Component** (`components/Navbar.tsx`)

**Purpose**: Reusable, animated navigation bar across all pages

**Features**:
- Smooth slide-down entrance animation
- Active link highlighting
- Mobile responsive hamburger menu
- GSAP hover effects on links
- Sticky positioning with backdrop blur

**Usage**:
```tsx
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* Rest of content */}
    </div>
  );
}
```

**Animations**:
- Entry: `y: -100 → 0` (slide down)
- Hover: Color change with scale effect
- Mobile menu: Height animation

---

### 2. **Hero Component** (`components/Hero.tsx`)

**Purpose**: Eye-catching hero section with introduction

**Features**:
- Staggered text animations
- Animated gradient background elements
- Floating decorative boxes
- CTA buttons with hover effects
- Responsive typography

**Usage**:
```tsx
import Hero from '@/components/Hero';

export default function Page() {
  return <Hero />;
}
```

**Animations**:
- Title entry: Slide up with opacity
- Floating boxes: Continuous float animation
- Background: Pulsing gradient orbs

---

### 3. **SectionTitle Component** (`components/SectionTitle.tsx`)

**Purpose**: Animated section headings with scroll triggers

**Props**:
```tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
```

**Features**:
- Scroll-triggered animations
- Gradient underline effect
- Responsive text sizing

**Usage**:
```tsx
<SectionTitle
  title="My Experience"
  subtitle="Professional journey and achievements"
/>
```

---

### 4. **ExperienceCard Component** (`components/ExperienceCard.tsx`)

**Purpose**: Display experience/internship details with animations

**Props**:
```tsx
interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  highlights?: string[];
}
```

**Features**:
- Hover lift animation (Y-axis)
- Gradient border glow on hover
- Skill tags with styling
- Achievement highlights list
- Responsive layout

**Usage**:
```tsx
<ExperienceCard
  company="Tech Inc"
  position="Frontend Developer"
  duration="Jun 2023 - Aug 2023"
  location="San Francisco, CA"
  description="..."
  skills={["React", "TypeScript"]}
  highlights={["Built components", "Optimized performance"]}
/>
```

---

### 5. **ProjectCard Component** (`components/ProjectCard.tsx`)

**Purpose**: Showcase individual projects with image and details

**Props**:
```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features?: string[];
  links?: { live?: string; github?: string };
  challenges?: string;
}
```

**Features**:
- Image zoom on hover (scale: 1 → 1.1)
- Overlay with action buttons
- Feature list with checkmarks
- Technology tags
- Challenge description box

**Usage**:
```tsx
<ProjectCard
  title="My Awesome Project"
  description="..."
  image="/project.jpg"
  technologies={["React", "Next.js"]}
  features={["Feature 1", "Feature 2"]}
  links={{ live: "https://...", github: "https://..." }}
  challenges="Handling performance"
/>
```

---

### 6. **ImageScroller Component** (`components/ImageScroller.tsx`)

**Purpose**: Interactive image carousel with smooth animations

**Props**:
```tsx
interface ImageScrollerProps {
  images: Image[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

interface Image {
  id: number;
  url: string;
  caption: string;
}
```

**Features**:
- Auto-scroll with configurable interval
- Manual navigation buttons
- Dot indicators with clickable navigation
- Image counter
- Pause on hover
- Smooth GSAP transitions

**Usage**:
```tsx
<ImageScroller
  images={[
    { id: 1, url: "/image1.jpg", caption: "Photo 1" },
    { id: 2, url: "/image2.jpg", caption: "Photo 2" },
  ]}
  autoScroll={true}
  autoScrollInterval={4000}
/>
```

---

### 7. **SocialLinks Component** (`components/SocialLinks.tsx`)

**Purpose**: Display social media and coding platform links

**Props**:
```tsx
interface SocialLinksProps {
  links: SocialLink[];
}

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
  label: string;
  stats: string;
}
```

**Features**:
- Icon rotation on hover
- Scale animation on interaction
- Platform badges with stats
- SVG icons for popular platforms
- External link handling

**Supported Platforms**:
- GitHub
- LinkedIn
- Twitter
- CodeChef, Codeforces, LeetCode (generic code icon)

**Usage**:
```tsx
<SocialLinks links={socialLinksData} />
```

---

## Data Structure

### experiences.json
```json
{
  "internships": [
    {
      "id": 1,
      "company": "Tech Inc",
      "position": "Frontend Developer Intern",
      "duration": "Jun 2023 - Aug 2023",
      "location": "San Francisco, CA",
      "description": "...",
      "skills": ["React", "TypeScript"],
      "highlights": ["Achievement 1", "Achievement 2"]
    }
  ],
  "professional": [...]
}
```

### projects.json
```json
{
  "bestWorks": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "...",
      "image": "...",
      "technologies": ["React", "Next.js"],
      "features": ["Feature 1"],
      "links": { "live": "...", "github": "..." },
      "challenges": "..."
    }
  ],
  "competitions": [...]
}
```

### social.json
```json
{
  "socialLinks": [
    {
      "id": 1,
      "platform": "github",
      "url": "https://github.com/...",
      "icon": "github",
      "label": "GitHub",
      "stats": "120 Repos"
    }
  ],
  "codingRatings": [...],
  "profileImages": [...]
}
```

## Pages Overview

### 1. **Home Page** (`app/page.tsx`)
- Hero section introduction
- Internship experiences grid
- Professional experience section
- Best projects showcase
- Competitions achievements
- Call-to-action section
- Footer with links

### 2. **Experience Page** (`app/experience/page.tsx`)
- Dedicated experience showcase
- Separated internship and professional sections
- Full experience card details

### 3. **Projects Page** (`app/projects/page.tsx`)
- Featured projects grid
- Competitions grid
- Detailed project information
- Technology stacks

### 4. **Profile Page** (`app/profile/page.tsx`)
- Image scroller gallery
- Social media links grid
- Coding platform ratings
- Personal story section
- Collaboration CTA

## GSAP Animation Patterns

### 1. **Entrance Animations**
```tsx
gsap.fromTo(
  element,
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
);
```

### 2. **Scroll Trigger Animations**
```tsx
gsap.fromTo(element, { ... }, {
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
  ...
});
```

### 3. **Staggered Animations**
```tsx
gsap.to(elements, {
  stagger: 0.15,  // 150ms delay between each
  ...
});
```

### 4. **Hover Effects**
```tsx
element.addEventListener('mouseenter', () => {
  gsap.to(element, { y: -10, duration: 0.4, ... });
});
```

## Customization Guide

### Update Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: #a855f7;      /* Change to your color */
  --secondary: #ec4899;
  --accent: #f97316;
}
```

### Update Content
Edit JSON files in `public/data/`:
- `experiences.json` - Add/modify experience entries
- `projects.json` - Add/modify projects and competitions
- `social.json` - Update social links and images

### Modify Animations
Edit component `useEffect` hooks:
```tsx
// Example: Change animation duration
gsap.to(element, {
  duration: 1.5,  // Change from 0.8
  ...
});
```

## Responsive Design

All components use Tailwind's responsive prefixes:
- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)

Example:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl">
  Title
</h1>
```

## Performance Optimization

1. **Image Optimization**: Using Next.js Image component
2. **CSS**: Tailwind's purge removes unused styles
3. **Animation**: GSAP GPU acceleration via transforms
4. **Lazy Loading**: Images load on demand
5. **Code Splitting**: Routes code-split automatically

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Update personal data** in `public/data/` JSON files

3. **Customize colors** in `app/globals.css`

4. **Update metadata** in `app/layout.tsx`

5. **Run development server**:
   ```bash
   pnpm dev
   ```

6. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

## Deployment

This portfolio is optimized for deployment on **Vercel**:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

## Troubleshooting

### Animations not working?
- Check browser console for errors
- Ensure GSAP is properly imported
- Verify element refs are correct

### Images not loading?
- Use absolute paths: `/path/to/image.jpg`
- Place images in `public/` folder
- Check image format support

### Styling issues?
- Clear Tailwind cache: `rm -rf .next`
- Ensure globals.css is imported in layout
- Check CSS variable names match

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Contact form integration
- [ ] Blog section
- [ ] Project filtering
- [ ] Search functionality
- [ ] Reading time estimates
- [ ] Code snippets showcase

## License

MIT License - Feel free to customize and use as your own!

---

## Quick Reference

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| Navbar | Navigation | None (uses hardcoded links) |
| Hero | Introduction | None (static content) |
| SectionTitle | Section headers | `title`, `subtitle` |
| ExperienceCard | Experience display | `company`, `position`, etc. |
| ProjectCard | Project showcase | `title`, `image`, `technologies` |
| ImageScroller | Image carousel | `images`, `autoScroll` |
| SocialLinks | Social links | `links` array |

---

For more information about GSAP, visit: https://greensock.com/gsap/
For more information about Next.js, visit: https://nextjs.org/
For more information about Tailwind CSS, visit: https://tailwindcss.com/
