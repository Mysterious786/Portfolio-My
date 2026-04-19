# Quick Setup & Customization Guide

## What's Included in Your Portfolio

✅ **4 Complete Pages**
- Home page with all sections
- Experience page (internships & professional)
- Projects page (best works & competitions)
- Profile page (gallery & social links)

✅ **7 Reusable Components**
- Navbar - Animated navigation with mobile menu
- Hero - Eye-catching introduction section
- SectionTitle - Scroll-triggered section headers
- ExperienceCard - Experience/internship showcase
- ProjectCard - Project showcase with images
- ImageScroller - Interactive image carousel
- SocialLinks - Social media & coding platform links

✅ **GSAP Animations**
- Entrance animations
- Scroll triggers
- Hover effects
- Staggered animations
- Smooth transitions

✅ **Bold & Creative Design**
- Color scheme: Purple, Pink, Orange
- Dark mode by default
- Fully responsive (mobile to desktop)
- Beautiful gradient effects

---

## Step 1: Customize Your Personal Data

### Update your name and links
Edit `public/data/social.json`:
```json
{
  "socialLinks": [
    {
      "platform": "github",
      "url": "https://github.com/YOUR_USERNAME",
      "label": "GitHub",
      "stats": "YOUR_STATS"
    },
    // ... update other links
  ]
}
```

### Add your experiences
Edit `public/data/experiences.json`:
```json
{
  "internships": [
    {
      "company": "Your Company",
      "position": "Your Position",
      "duration": "Start - End Date",
      "location": "City, Country",
      "description": "What you did...",
      "skills": ["Skill1", "Skill2"],
      "highlights": ["Achievement 1", "Achievement 2"]
    }
  ],
  "professional": [
    // Add your professional experiences
  ]
}
```

### Add your projects
Edit `public/data/projects.json`:
```json
{
  "bestWorks": [
    {
      "title": "Project Name",
      "description": "What it does",
      "image": "https://image-url.jpg",
      "technologies": ["React", "Next.js"],
      "features": ["Feature 1", "Feature 2"],
      "links": {
        "live": "https://project-url.com",
        "github": "https://github.com/..."
      },
      "challenges": "Technical challenge faced"
    }
  ],
  "competitions": [
    {
      "name": "Competition Name",
      "prize": "1st Place",
      "date": "Month Year",
      "description": "What you built...",
      "technologies": ["Tech Stack"]
    }
  ]
}
```

### Add your photos
Add image URLs to `profileImages` in `public/data/social.json`:
```json
{
  "profileImages": [
    {
      "id": 1,
      "url": "https://your-image-url.jpg",
      "caption": "Image Description"
    }
  ]
}
```

---

## Step 2: Update Website Metadata

Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Name | Full Stack Developer',
  description: 'Your professional description here',
  // ... rest of config
}
```

---

## Step 3: Customize Colors (Optional)

Edit `app/globals.css` to change the color scheme:

```css
:root {
  /* Change these to your brand colors */
  --primary: #a855f7;      /* Main brand color */
  --secondary: #ec4899;    /* Secondary accent */
  --accent: #f97316;       /* Highlight color */
  
  /* Change background/text if needed */
  --background: #0a0e27;
  --foreground: #ffffff;
}
```

**Suggested Color Combinations**:
- **Tech-focused**: Primary: `#00d4ff`, Secondary: `#7c3aed`, Accent: `#10b981`
- **Professional**: Primary: `#1e40af`, Secondary: `#7c3aed`, Accent: `#059669`
- **Modern**: Primary: `#f472b6`, Secondary: `#ec4899`, Accent: `#a855f7`

---

## Step 4: Update Navigation Links

Edit the `navLinks` array in `components/Navbar.tsx`:
```tsx
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Profile', href: '/profile' },
  // Add custom pages if needed
];
```

---

## Step 5: Run Your Portfolio

```bash
# Install dependencies (if not done)
pnpm install

# Start development server
pnpm dev

# Open in browser
# http://localhost:3000
```

---

## Step 6: Update Footer Links

The footer appears on every page. Update the links in:
- `app/page.tsx` (home footer)
- `app/experience/page.tsx`
- `app/projects/page.tsx`
- `app/profile/page.tsx`

Search for `<footer>` and replace placeholder URLs:
```tsx
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
```

---

## Step 7: Add Contact Form (Optional)

To make buttons functional, create a contact form:

### 1. Install form library:
```bash
pnpm add react-hook-form
```

### 2. Create `components/ContactForm.tsx`:
```tsx
'use client';

import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    // Send email via your backend or service
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Your Name" />
      <input {...register('email')} placeholder="Your Email" />
      <textarea {...register('message')} placeholder="Your Message" />
      <button type="submit">Send Message</button>
    </form>
  );
}
```

### 3. Update CTA buttons to use the form

---

## Common Customizations

### Change Animation Speed
In components, find the GSAP `duration` property:
```tsx
gsap.to(element, {
  duration: 0.8,  // Change this (in seconds)
  ...
});
```

### Disable Auto-Scroll on Image Scroller
```tsx
<ImageScroller
  images={images}
  autoScroll={false}  // Disable auto-scroll
/>
```

### Change Section Background
Edit `app/page.tsx` section className:
```tsx
<section className="py-16 bg-card/30">  {/* Change to bg-card/50 or bg-background */}
  ...
</section>
```

### Modify Card Hover Effects
In ExperienceCard or ProjectCard:
```tsx
gsap.to(card, {
  y: -20,  // Change distance (from -10)
  duration: 0.5,  // Change speed
  boxShadow: '0 30px 60px rgba(168, 85, 247, 0.3)',  // Change shadow
});
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy
5. Your portfolio is live!

### Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Deploy to other platforms
- **Netlify**: Connect GitHub repo → Auto-deploy
- **GitHub Pages**: Build and push to `gh-pages` branch
- **AWS/Azure**: Use their deployment guides

---

## File Structure Reference

```
app/
├── page.tsx              # HOME page (/)
├── experience/
│   └── page.tsx          # EXPERIENCE page (/experience)
├── projects/
│   └── page.tsx          # PROJECTS page (/projects)
├── profile/
│   └── page.tsx          # PROFILE page (/profile)
├── layout.tsx            # Root layout
└── globals.css           # Global styles & design tokens

components/
├── Navbar.tsx            # Navigation bar
├── Hero.tsx              # Hero section
├── SectionTitle.tsx      # Section headings
├── ExperienceCard.tsx    # Experience card
├── ProjectCard.tsx       # Project card
├── ImageScroller.tsx     # Image carousel
└── SocialLinks.tsx       # Social links

public/data/
├── experiences.json      # Your experience data
├── projects.json         # Your projects data
└── social.json          # Your social links & images
```

---

## Tips for Best Results

1. **Images**: Use high-quality images (min 1200x800px)
2. **Descriptions**: Keep them concise and impactful
3. **Skills**: List 5-7 key skills per experience
4. **Projects**: Include live demo and GitHub links
5. **Social Links**: Keep current and active
6. **Content**: Update regularly with new achievements

---

## Troubleshooting

### Animations not showing?
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `pnpm dev`

### Images not loading?
- Use full URLs (https://...)
- Check image format is supported (jpg, png, webp)

### Styling looks wrong?
- Hard refresh browser (Cmd+Shift+R)
- Check globals.css is imported

### Mobile layout broken?
- Test with Chrome DevTools responsive mode
- Check all `md:` and `sm:` prefixes are present

---

## Next Steps

1. ✅ Customize your data (experiences, projects, photos)
2. ✅ Update your name and links
3. ✅ Choose your color scheme
4. ✅ Deploy to Vercel
5. ✅ Share your portfolio!

---

## Need Help?

- Check DOCUMENTATION.md for component details
- Review component JSDoc comments
- Explore GSAP docs: https://greensock.com/gsap/
- Next.js docs: https://nextjs.org/

---

Happy building! 🚀
