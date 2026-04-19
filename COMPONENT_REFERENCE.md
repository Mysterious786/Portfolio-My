# Component Reference & API Documentation

## Table of Contents
1. [Navbar](#navbar)
2. [Hero](#hero)
3. [SectionTitle](#sectiontitle)
4. [ExperienceCard](#experiencecard)
5. [ProjectCard](#projectcard)
6. [ImageScroller](#imagescroller)
7. [SocialLinks](#sociallinks)

---

## Navbar

**File**: `components/Navbar.tsx`

### Description
A reusable, animated navigation bar with mobile responsiveness. Appears at the top of every page with smooth GSAP animations and hover effects.

### Props
No props required - uses hardcoded navigation links.

### Usage
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

### Features
- ✅ Sticky positioning with backdrop blur
- ✅ Auto-collapse to hamburger on mobile
- ✅ Smooth slide-down entrance animation
- ✅ Color transition on link hover
- ✅ Active link detection (customize via props if needed)
- ✅ Mobile menu with smooth height animation

### Customization

**Change navigation links**:
```tsx
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  // Add more links
];
```

**Change logo text**:
```tsx
<Link href="/" className="...">
  <span>Your Brand Name</span>
</Link>
```

**Change colors**:
```tsx
// In useEffect, change color values:
gsap.to(link, {
  color: '#your-color',  // Change hover color
  duration: 0.3,
});
```

### GSAP Animations
- **Entrance**: `y: -100 → 0` over 0.8s
- **Link hover**: Color transition + scale
- **Mobile menu**: Height animation 0-auto

---

## Hero

**File**: `components/Hero.tsx`

### Description
An eye-catching hero section with animated gradient text, floating elements, and call-to-action buttons. Designed to make a strong first impression.

### Props
No props required - content is static.

### Usage
```tsx
import Hero from '@/components/Hero';

export default function Page() {
  return <Hero />;
}
```

### Features
- ✅ Large, bold typography with gradient
- ✅ Animated gradient background orbs
- ✅ Floating decorative boxes
- ✅ Staggered text animations
- ✅ Scroll indicator with animation
- ✅ Two CTA buttons with hover effects
- ✅ Fully responsive design

### Customization

**Change heading text**:
```tsx
<h1 ref={titleRef} className="...">
  <span className="block text-white">Your Main Title</span>
  <span className="block bg-gradient-to-r ...">
    Your Subtitle
  </span>
</h1>
```

**Change CTA buttons**:
```tsx
<button className="...">Your Button Text</button>
```

**Adjust floating boxes**:
```tsx
{[...Array(5)].map((_, i) => (
  <div
    key={i}
    className={`absolute border border-primary/20 ${
      i % 2 === 0 ? 'w-96 h-96' : 'w-72 h-72'  // Change sizes
    }`}
    style={{
      left: `${20 + i * 15}%`,
      top: `${10 + i * 12}%`,
    }}
  />
))}
```

### GSAP Animations
- **Title**: `y: 50 → 0, opacity: 0 → 1` (0.8s)
- **Subtitle**: Same with -0.6s delay
- **Buttons**: Same with -0.6s delay
- **Floating boxes**: Continuous float animation

---

## SectionTitle

**File**: `components/SectionTitle.tsx`

### Description
A reusable, animated section title component with scroll triggers. Shows a gradient underline that animates when the section comes into view.

### Props
```tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
```

### Usage
```tsx
import SectionTitle from '@/components/SectionTitle';

export default function Section() {
  return (
    <section>
      <SectionTitle
        title="My Experience"
        subtitle="Professional journey and achievements"
      />
      {/* Section content */}
    </section>
  );
}
```

### Props Details

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | ✅ | - | Main section heading |
| `subtitle` | string | ❌ | undefined | Optional subtitle text |

### Features
- ✅ Scroll-triggered animations
- ✅ Animated gradient underline
- ✅ Responsive text sizing
- ✅ Optional subtitle
- ✅ Works with all section types

### Examples

**Simple title**:
```tsx
<SectionTitle title="Projects" />
```

**With subtitle**:
```tsx
<SectionTitle
  title="My Work"
  subtitle="Featured projects and case studies"
/>
```

### GSAP Animations
- **Title**: Scroll trigger animation on `top 80%`
- **Subtitle**: Same timing as title
- **Underline**: Width: `0 → 100%` animation

---

## ExperienceCard

**File**: `components/ExperienceCard.tsx`

### Description
Displays internship or professional experience details with company name, position, duration, and achievements. Includes hover animations.

### Props
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

### Usage
```tsx
import ExperienceCard from '@/components/ExperienceCard';

export default function Section() {
  return (
    <ExperienceCard
      company="Tech Inc"
      position="Frontend Developer Intern"
      duration="Jun 2023 - Aug 2023"
      location="San Francisco, CA"
      description="Developed responsive React components..."
      skills={["React", "TypeScript", "Tailwind CSS"]}
      highlights={[
        "Built 12+ reusable components",
        "Optimized performance by 35%"
      ]}
    />
  );
}
```

### Props Details

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `company` | string | ✅ | Company/organization name |
| `position` | string | ✅ | Job title/position |
| `duration` | string | ✅ | Date range (e.g., "Jun 2023 - Aug 2023") |
| `location` | string | ✅ | City and country |
| `description` | string | ✅ | Job description (2-3 sentences) |
| `skills` | string[] | ✅ | Array of technology skills |
| `highlights` | string[] | ❌ | Key achievements list |

### Features
- ✅ Hover lift animation (`y: -10`)
- ✅ Skill tags with gradient backgrounds
- ✅ Achievement highlights with bullet points
- ✅ Time and location display
- ✅ Responsive layout
- ✅ Shadow glow on hover

### Customization

**Change hover effect**:
```tsx
gsap.to(card, {
  y: -20,  // Change lift distance
  duration: 0.5,  // Change speed
  boxShadow: '0 30px 60px rgba(168, 85, 247, 0.4)',  // Change shadow
});
```

**Add more highlights**:
```tsx
highlights={[
  "Achievement 1",
  "Achievement 2",
  "Achievement 3",
  "Achievement 4"
]}
```

### GSAP Animations
- **Hover**: `y: 0 → -10` (0.4s ease-out)
- **Shadow**: Box shadow transition on hover

---

## ProjectCard

**File**: `components/ProjectCard.tsx`

### Description
Showcases individual projects with images, description, technologies, features, and links. Image zooms on hover with overlay buttons.

### Props
```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features?: string[];
  links?: {
    live?: string;
    github?: string;
  };
  challenges?: string;
}
```

### Usage
```tsx
import ProjectCard from '@/components/ProjectCard';

export default function Section() {
  return (
    <ProjectCard
      title="E-Commerce Dashboard"
      description="Full-featured admin dashboard for managing inventory..."
      image="https://image-url.jpg"
      technologies={["Next.js", "Supabase", "Tailwind CSS"]}
      features={[
        "Real-time order tracking",
        "Interactive analytics",
        "Inventory management"
      ]}
      links={{
        live: "https://dashboard.example.com",
        github: "https://github.com/username/project"
      }}
      challenges="Handling real-time data synchronization"
    />
  );
}
```

### Props Details

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | ✅ | Project name |
| `description` | string | ✅ | Project overview |
| `image` | string | ✅ | Image URL (min 1200x800px) |
| `technologies` | string[] | ✅ | Tech stack array |
| `features` | string[] | ❌ | Key features list |
| `links` | object | ❌ | `{live?, github?}` |
| `challenges` | string | ❌ | Technical challenges faced |

### Features
- ✅ Image zoom on hover (scale: 1 → 1.1)
- ✅ Overlay with action buttons
- ✅ Technology tags
- ✅ Feature list with checkmarks
- ✅ Challenge description box
- ✅ Responsive image container
- ✅ External link handling

### GSAP Animations
- **Image zoom**: `scale: 1 → 1.1` (0.5s)
- **Overlay**: `opacity: 0 → 1` (0.4s)

---

## ImageScroller

**File**: `components/ImageScroller.tsx`

### Description
Interactive image carousel with auto-scroll, manual navigation, dot indicators, and smooth GSAP transitions. Perfect for photo galleries.

### Props
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

### Usage
```tsx
import ImageScroller from '@/components/ImageScroller';

export default function Gallery() {
  const images = [
    { id: 1, url: "https://image1.jpg", caption: "Photo 1" },
    { id: 2, url: "https://image2.jpg", caption: "Photo 2" },
    { id: 3, url: "https://image3.jpg", caption: "Photo 3" },
  ];

  return (
    <ImageScroller
      images={images}
      autoScroll={true}
      autoScrollInterval={4000}
    />
  );
}
```

### Props Details

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `images` | Image[] | ✅ | - | Array of image objects |
| `autoScroll` | boolean | ❌ | true | Enable auto-scroll |
| `autoScrollInterval` | number | ❌ | 4000 | Interval in milliseconds |

### Image Object Structure
```tsx
{
  id: number,        // Unique identifier
  url: string,       // Image URL
  caption: string    // Image description
}
```

### Features
- ✅ Auto-scroll with configurable interval
- ✅ Manual navigation buttons (prev/next)
- ✅ Dot indicators with click navigation
- ✅ Image counter display
- ✅ Pause on hover
- ✅ Image captions with gradient overlay
- ✅ Smooth GSAP transitions
- ✅ Responsive sizing

### Examples

**Auto-scroll enabled**:
```tsx
<ImageScroller
  images={images}
  autoScroll={true}
  autoScrollInterval={3000}  // 3 seconds
/>
```

**Manual navigation only**:
```tsx
<ImageScroller
  images={images}
  autoScroll={false}
/>
```

**With many images**:
```tsx
<ImageScroller
  images={Array.from({ length: 20 }, (_, i) => ({
    id: i,
    url: `https://image-${i}.jpg`,
    caption: `Image ${i + 1}`
  }))}
/>
```

### GSAP Animations
- **Slide**: `x: -index * 100` (0.6s ease-out)
- **Smooth transitions**: No jump effects

---

## SocialLinks

**File**: `components/SocialLinks.tsx`

### Description
Displays social media and coding platform links with animated icons and hover effects. Supports GitHub, LinkedIn, Twitter, and coding platforms.

### Props
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

### Usage
```tsx
import SocialLinks from '@/components/SocialLinks';

export default function Profile() {
  const links = [
    {
      id: 1,
      platform: "github",
      url: "https://github.com/username",
      icon: "github",
      label: "GitHub",
      stats: "150 Repos"
    },
    {
      id: 2,
      platform: "linkedin",
      url: "https://linkedin.com/in/username",
      icon: "linkedin",
      label: "LinkedIn",
      stats: "500+ Connections"
    }
  ];

  return <SocialLinks links={links} />;
}
```

### Props Details

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `links` | SocialLink[] | ✅ | Array of social links |

### SocialLink Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | ✅ | Unique identifier |
| `platform` | string | ✅ | Platform name (github, linkedin, twitter, code) |
| `url` | string | ✅ | Link URL |
| `icon` | string | ✅ | Icon type (same as platform for auto-lookup) |
| `label` | string | ✅ | Display name |
| `stats` | string | ✅ | Statistics (repos, followers, rating, etc.) |

### Supported Platforms

| Platform | Icon | Example |
|----------|------|---------|
| `github` | GitHub logo | "120 Repos" |
| `linkedin` | LinkedIn logo | "500+ Connections" |
| `twitter` | Twitter logo | "2K Followers" |
| `code` | Code icon | "3★ Chef", "Expert" |

### Features
- ✅ Icon rotation on hover
- ✅ Scale animation on interaction
- ✅ Grid layout (2 columns mobile, 3+ desktop)
- ✅ Hover glow effect
- ✅ External link handling
- ✅ Platform-specific icons
- ✅ Statistics display

### Examples

**Minimal setup**:
```tsx
<SocialLinks
  links={[
    {
      id: 1,
      platform: "github",
      url: "https://github.com/user",
      icon: "github",
      label: "GitHub",
      stats: "100 Repos"
    }
  ]}
/>
```

**Coding platforms**:
```tsx
{
  id: 1,
  platform: "codechef",
  url: "https://codechef.com/users/username",
  icon: "code",
  label: "CodeChef",
  stats: "3★ Chef"
}
```

### GSAP Animations
- **Hover scale**: `scale: 1 → 1.05` (0.3s)
- **Icon rotation**: `rotate: 0 → 10deg` (0.4s)

---

## Common Patterns

### Wrapping Components with Scroll Animation
```tsx
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// In useEffect:
gsap.fromTo(element, { y: 30, opacity: 0 }, {
  y: 0,
  opacity: 1,
  duration: 0.8,
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  }
});
```

### Adding Multiple Components
```tsx
export default function Page() {
  return (
    <section>
      <SectionTitle title="Section" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ExperienceCard {...props1} />
        <ExperienceCard {...props2} />
      </div>
    </section>
  );
}
```

---

## Animation Constants

All components use these standard values:

| Animation | Duration | Easing | Delay |
|-----------|----------|--------|-------|
| Entrance | 0.8s | power3.out | 0s |
| Hover | 0.3-0.4s | power3.out | 0s |
| Stagger | - | power3.out | 0.15s |
| Scroll trigger | 0.8s | power3.out | variable |

---

## Performance Tips

1. **Optimize images**: Compress before using in ProjectCard
2. **Lazy load**: Use Next.js Image component
3. **Limit animations**: Use stagger for multiple items
4. **Reduce ScrollTrigger calls**: Batch them together
5. **Use transform**: GSAP uses GPU acceleration by default

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

This documentation covers all components with examples and customization options. For more details, check the component source files!
