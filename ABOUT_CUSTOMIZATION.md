# About Section - Customization Guide

## Overview

The About section is a comprehensive personal profile showcase featuring your background, skills, education, and more. It's fully customizable through a JSON data file.

---

## File Structure

```
app/
├── about/
│   └── page.tsx          # Main about page (loads data & components)
components/
├── AboutHero.tsx         # Hero section with profile image & intro
├── SkillsSection.tsx     # Skills organized by category
├── PersonalStats.tsx     # Statistics and achievements
└── JourneySection.tsx    # Education, goals, interests, fun facts
public/data/
└── about.json           # All editable content
```

---

## Customizing Your Content

Edit `/public/data/about.json` with your personal information:

### 1. **Basic Info**
```json
{
  "name": "Your Name",
  "title": "Your Professional Title",
  "bio": "A brief introduction (1-2 sentences)",
  "summary": "Longer paragraph about you and your approach",
  "profileImage": "https://your-image-url.jpg"
}
```

**Image Tips:**
- Use high-quality headshots (600x600px minimum)
- Recommended sources:
  - Unsplash: `https://images.unsplash.com/...`
  - Your own hosted image
  - Cloudinary: `https://res.cloudinary.com/...`

### 2. **Skills**
```json
{
  "skills": {
    "frontend": ["React", "Next.js", "TypeScript", "..."],
    "backend": ["Node.js", "PostgreSQL", "..."],
    "tools": ["Git", "Docker", "AWS", "..."]
  }
}
```

**Best Practices:**
- List 6-10 skills per category
- Order by proficiency/frequency
- Include both languages and frameworks

### 3. **Statistics**
```json
{
  "personalStats": {
    "yearsOfExperience": 2,
    "projectsCompleted": 15,
    "codingHours": 2000,
    "learningGoal": "Your current learning objective"
  }
}
```

**Note:** Numbers are auto-animated on page load.

### 4. **Education**
```json
{
  "education": [
    {
      "degree": "Bachelor of Technology",
      "field": "Computer Science",
      "institution": "Your University Name",
      "year": "2022",
      "details": "Additional information about your graduation"
    }
  ]
}
```

### 5. **Goals**
```json
{
  "goals": [
    "Build products that impact millions",
    "Become an open-source contributor",
    "Master system design",
    "Share knowledge through mentoring"
  ]
}
```

**Tips:**
- 4-6 meaningful goals work best
- Mix short-term and long-term goals
- Be specific and achievable

### 6. **Interests**
```json
{
  "interests": [
    "Web Development",
    "UI/UX Design",
    "Open Source",
    "Tech Blogging"
  ]
}
```

### 7. **Fun Facts**
```json
{
  "funFacts": [
    "I can solve a Rubik's cube in under 2 minutes",
    "Coffee is my best coding companion",
    "I contribute to open-source projects"
  ]
}
```

---

## Component Details

### AboutHero
- **Location**: `/components/AboutHero.tsx`
- **Shows**: Profile image, name, title, bio, CTA buttons
- **Customizable**: Image size, button labels, layout

### SkillsSection
- **Location**: `/components/SkillsSection.tsx`
- **Shows**: Skills in 3 categories with icons
- **Features**: Hover animations, scroll triggers

### PersonalStats
- **Location**: `/components/PersonalStats.tsx`
- **Shows**: Animated numbers and learning goals
- **Features**: Number counters, emojis, responsive grid

### JourneySection
- **Location**: `/components/JourneySection.tsx`
- **Shows**: Education, goals, interests, fun facts
- **Features**: Multiple content types, scroll animations

---

## Styling & Design

### Colors Used
- **Primary**: Purple (#a855f7)
- **Secondary**: Pink (#ec4899)
- **Accent**: Orange (#f97316)

### Changing Section Colors
Each section uses gradient backgrounds. To customize:

1. Open the component file (e.g., `SkillsSection.tsx`)
2. Find `className="from-primary"` patterns
3. Change to `from-secondary` or `from-accent`

Example:
```tsx
// Change from purple to pink
className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent"
```

### Modifying Spacing
- `py-20` = vertical padding
- `mb-12` = margin bottom
- `gap-8` = gap between items

---

## Animation Customization

### Scroll Animations
Located in each component's `useEffect`:

```typescript
gsap.fromTo(element, { y: 40, opacity: 0 }, {
  y: 0,
  opacity: 1,
  duration: 0.6,  // Change this
  ease: 'power3.out'  // Or use: 'power2.out', 'back.out'
})
```

### Number Animations
In `PersonalStats.tsx`:
```typescript
{ value: endValue, duration: 2, ease: 'power2.out' }
//                        ↑
//                    Change time here
```

---

## Adding More Content

### Add Another Education Entry
```json
{
  "education": [
    { ... existing ... },
    {
      "degree": "Master of Science",
      "field": "Your Field",
      "institution": "University Name",
      "year": "2024",
      "details": "Details about this degree"
    }
  ]
}
```

### Add More Goals
Simply add to the array:
```json
{
  "goals": [
    "Existing goals...",
    "New goal here"
  ]
}
```

---

## Contact Section Customization

Edit `/app/about/page.tsx` and update the contact section:

```tsx
<a href="mailto:your.email@example.com">Send Me an Email</a>
```

Change `your.email@example.com` to your actual email.

---

## Performance Tips

1. **Image Optimization**: Your images are automatically optimized
2. **Lazy Loading**: All images below the fold load on scroll
3. **Animations**: Optimized with GSAP for 60fps performance

---

## SEO & Metadata

To update page metadata, edit `/app/about/page.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'About | Your Name',
  description: 'Learn about me and my journey as a developer'
}
```

---

## Common Customizations

### Change Hero Image Layout
Edit `AboutHero.tsx`:
```tsx
// Change from 1:1 aspect to 16:9
className="aspect-video"  // Instead of h-96
```

### Modify Skill Categories
Edit `SkillsSection.tsx`:
```typescript
const categories = [
  { title: 'Frontend', skills: skills.frontend },
  // Add more categories here
  { title: 'Databases', skills: skills.databases }
]
```

### Hide Sections
In `/app/about/page.tsx`, comment out sections:
```tsx
{/* <PersonalStats stats={aboutData.personalStats} /> */}
```

---

## Troubleshooting

**Images not loading?**
- Check the URL is publicly accessible
- Try a different image hosting service (Unsplash, Cloudinary)

**Text looks cramped?**
- Increase `max-w-` values (max-w-xl, max-w-2xl, max-w-3xl)
- Add more `gap-` or `mb-` spacing

**Animations feel slow?**
- Reduce `duration: 0.6` to `0.4` in components
- Change `ease: 'power3.out'` to `'power2.out'` for faster feel

---

## Examples

### Complete about.json Template
See the file at `/public/data/about.json` for a complete example with all fields.

### Minimal Setup
You only need these fields:
- name
- title
- bio
- profileImage
- skills (at least one category)

---

## Need Help?

Refer to:
1. `SETUP_GUIDE.md` - General setup instructions
2. `DOCUMENTATION.md` - Technical documentation
3. `COMPONENT_REFERENCE.md` - API reference for all components
