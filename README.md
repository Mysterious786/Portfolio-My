# Personal Portfolio Website

A modern, interactive portfolio website built with **Next.js 15**, **GSAP**, and **Tailwind CSS**. Showcase your internship experiences, professional work, coding achievements, and projects with stunning animations.

## ✨ Features

- 🎨 **Bold & Creative Design** - Purple, pink, and orange color scheme
- ⚡ **Smooth Animations** - GSAP-powered animations throughout
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎬 **Interactive Components** - Hover effects, scroll triggers, image scroller
- 📄 **4 Complete Pages** - Home, Experience, Projects, Profile
- 🎯 **Reusable Components** - 7 well-documented components
- 📊 **JSON-Based Data** - Easy to update your content
- 🚀 **Production Ready** - Optimized for performance and SEO
- 📚 **Heavily Documented** - 1600+ lines of documentation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. **Clone or extract the project**
```bash
cd your-portfolio
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Update your data**
Edit these files with your information:
- `public/data/experiences.json` - Your experience
- `public/data/projects.json` - Your projects
- `public/data/social.json` - Your social links

4. **Start development server**
```bash
pnpm dev
```

5. **Open in browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📖 Documentation

### Getting Started
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Quick customization guide (start here!)
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview and features

### Technical Reference
- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Complete technical guide (587 lines)
- **[COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)** - API reference for all components (684 lines)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Home page
│   ├── experience/page.tsx   # Experience page
│   ├── projects/page.tsx     # Projects page
│   ├── profile/page.tsx      # Profile page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation
│   ├── Hero.tsx              # Hero section
│   ├── SectionTitle.tsx      # Section headers
│   ├── ExperienceCard.tsx    # Experience cards
│   ├── ProjectCard.tsx       # Project cards
│   ├── ImageScroller.tsx     # Image carousel
│   └── SocialLinks.tsx       # Social links
├── public/data/
│   ├── experiences.json      # Your experience data
│   ├── projects.json         # Your projects data
│   └── social.json           # Your social links
└── package.json
```

## 🎨 Customization

### Change Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: #a855f7;      /* Main brand color */
  --secondary: #ec4899;    /* Secondary accent */
  --accent: #f97316;       /* Highlight color */
}
```

### Update Your Information
1. **Experiences**: Edit `public/data/experiences.json`
2. **Projects**: Edit `public/data/projects.json`
3. **Social Links**: Edit `public/data/social.json`
4. **Site Title**: Edit `app/layout.tsx` metadata

### Add Custom Pages
1. Create folder in `app/` (e.g., `app/blog/`)
2. Add `page.tsx` inside
3. Route is automatic (e.g., `/blog`)

## 🎬 Components

### Built-in Components (7)

| Component | Purpose | Props |
|-----------|---------|-------|
| **Navbar** | Navigation bar | None (hardcoded) |
| **Hero** | Introduction section | None (static) |
| **SectionTitle** | Section headers | `title`, `subtitle?` |
| **ExperienceCard** | Experience showcase | `company`, `position`, `duration`, `location`, `description`, `skills`, `highlights?` |
| **ProjectCard** | Project showcase | `title`, `description`, `image`, `technologies`, `features?`, `links?`, `challenges?` |
| **ImageScroller** | Image carousel | `images[]`, `autoScroll?`, `autoScrollInterval?` |
| **SocialLinks** | Social media links | `links[]` |

See [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md) for detailed API documentation.

## 🎬 Animations

All components feature smooth GSAP animations:
- **Entrance animations** - Elements slide/fade in on load
- **Scroll triggers** - Animations trigger when sections come into view
- **Hover effects** - Interactive feedback on user interaction
- **Staggered animations** - Multiple items animate in sequence
- **Smooth transitions** - All animations use GPU acceleration

## 📱 Responsive Design

Optimized for all screen sizes:
- **Mobile** (< 640px) - Full-width, single column
- **Tablet** (640px - 1024px) - 2-column grids, larger text
- **Desktop** (> 1024px) - Full multi-column layouts

## ⚙️ Technology Stack

```
Framework:      Next.js 15
React:          React 19
Styling:        Tailwind CSS 3
Animations:     GSAP 3.15
Language:       TypeScript
Package Manager: pnpm
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. **Deploy**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Deploy"

Your portfolio is now live! 🎉

### Alternative Platforms
- **Netlify**: Connect GitHub repo → Auto-deploy
- **GitHub Pages**: Build and push to `gh-pages` branch

## 📊 Performance

- ⚡ **Fast Load Times** - Optimized images and CSS
- 🎯 **High Performance Score** - 90+/100
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 📱 **Mobile Optimized** - Responsive design and fast rendering
- 🔍 **SEO Friendly** - Proper metadata and structured data

## 📝 Data Format

### experiences.json
```json
{
  "internships": [
    {
      "id": 1,
      "company": "Tech Inc",
      "position": "Frontend Developer",
      "duration": "Jun 2023 - Aug 2023",
      "location": "San Francisco, CA",
      "description": "Description here",
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
      "description": "Description",
      "image": "https://image-url.jpg",
      "technologies": ["React", "Next.js"],
      "features": ["Feature 1"],
      "links": {
        "live": "https://project.com",
        "github": "https://github.com/..."
      },
      "challenges": "Challenge description"
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
      "platform": "github",
      "url": "https://github.com/username",
      "icon": "github",
      "label": "GitHub",
      "stats": "150 Repos"
    }
  ],
  "codingRatings": [...],
  "profileImages": [...]
}
```

See [DOCUMENTATION.md](./DOCUMENTATION.md) for complete data structure.

## 🔧 Customization Examples

### Change animation speed
```tsx
// In component:
gsap.to(element, {
  duration: 1.5,  // Change from 0.8
  ...
});
```

### Add new navigation link
```tsx
// In components/Navbar.tsx:
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },  // New link
  ...
];
```

### Disable image auto-scroll
```tsx
<ImageScroller
  images={images}
  autoScroll={false}
/>
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for more customization examples.

## 🐛 Troubleshooting

### Animations not working?
```bash
# Clear build cache
rm -rf .next

# Restart server
pnpm dev
```

### Images not loading?
- Use full URLs: `https://...`
- Place local images in `public/` folder
- Check image format (jpg, png, webp)

### Styling issues?
- Clear cache: `rm -rf .next`
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
- Check globals.css is imported

## 📚 Learning Resources

- **GSAP**: https://greensock.com/gsap/
- **Next.js**: https://nextjs.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **TypeScript**: https://www.typescriptlang.org/
- **React**: https://react.dev/

## 📄 Available Documentation

1. **README.md** (this file) - Project overview
2. **SETUP_GUIDE.md** - Quick start & customization
3. **DOCUMENTATION.md** - Complete technical guide
4. **COMPONENT_REFERENCE.md** - API reference
5. **PROJECT_SUMMARY.md** - Project statistics and features

## ✅ Deployment Checklist

- [ ] Update all data in `public/data/`
- [ ] Customize colors in `app/globals.css`
- [ ] Update site metadata in `app/layout.tsx`
- [ ] Update footer links in all pages
- [ ] Add your profile images
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test all navigation links
- [ ] Run production build: `pnpm build`
- [ ] Deploy to Vercel or preferred platform

## 📞 Support

If you encounter issues:

1. Check the relevant documentation file
2. Review component JSDoc comments
3. Check browser console for errors
4. Review component source code
5. Test in incognito/private mode

## 📜 License

This project is MIT licensed - feel free to customize and use as your own!

## 🎉 Credits

- Built with **Next.js 15**
- Animations by **GSAP 3.15**
- Styled with **Tailwind CSS 3**
- Inspired by modern design trends

---

## 🚀 Ready to Launch?

1. **Update your data** - Use SETUP_GUIDE.md
2. **Test locally** - Run `pnpm dev`
3. **Deploy** - Push to Vercel or GitHub Pages
4. **Share** - Show the world your amazing work!

**Your portfolio is ready to impress! Let's showcase your work! 🌟**

---

Made with ❤️ using Next.js, GSAP, and Tailwind CSS
