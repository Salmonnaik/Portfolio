# 🎨 Customization Guide

This guide will help you customize the portfolio to make it your own.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors & Branding](#colors--branding)
3. [Typography](#typography)
4. [Skills & Expertise](#skills--expertise)
5. [Projects](#projects)
6. [Social Links](#social-links)
7. [Images & Media](#images--media)
8. [Animations](#animations)
9. [Content](#content)

---

## 1. Personal Information

### Name & Title

**File**: `src/components/Hero.jsx`

```jsx
// Line ~90
<h1 className="...">
  Your Full Name  {/* Change this */}
</h1>

// Line ~100
const words = ['Your Role 1', 'Your Role 2', 'Your Role 3'];  {/* Change roles */}
```

**File**: `src/components/Navbar.jsx`

```jsx
// Line ~90
<motion.a>
  Your Name  {/* Change navbar logo text */}
</motion.a>
```

**File**: `src/components/Footer.jsx`

```jsx
// Line ~15
© {currentYear} Your Name.  {/* Change copyright */}
```

---

### Bio & Description

**File**: `src/components/Hero.jsx`

```jsx
// Line ~110
<motion.p className="...">
  Your personal tagline or description here.
  Keep it concise and impactful.
</motion.p>
```

---

### Contact Information

**File**: `src/components/Contact.jsx`

```jsx
// Line ~15
const email = 'your.email@example.com';  {/* Change email */}
```

---

## 2. Colors & Branding

### Accent Color

**File**: `src/index.css`

```css
:root {
  /* Light Mode */
  --color-accent: #ff3366;        /* Primary accent - Change this */
  --color-accent-light: #ff5588;  /* Lighter variant */
}

.dark {
  /* Dark Mode - Keep same or adjust for dark mode */
  --color-accent: #ff3366;
  --color-accent-light: #ff5588;
}
```

**Popular Color Schemes**:
- Tech Blue: `#0066ff` / `#3399ff`
- Creative Purple: `#8b5cf6` / `#a78bfa`
- Professional Teal: `#14b8a6` / `#2dd4bf`
- Energetic Orange: `#f97316` / `#fb923c`
- Minimal Gray: `#6b7280` / `#9ca3af`

---

### Background Colors

**File**: `src/index.css`

```css
:root {
  --color-bg: #fafafa;           /* Main background */
  --color-bg-secondary: #ffffff;  /* Cards, sections */
  --color-bg-tertiary: #f0f0f0;  /* Inputs, subtle areas */
}

.dark {
  --color-bg: #0a0a0a;
  --color-bg-secondary: #1a1a1a;
  --color-bg-tertiary: #2a2a2a;
}
```

---

### Text Colors

**File**: `src/index.css`

```css
:root {
  --color-text: #0a0a0a;          /* Primary text */
  --color-text-secondary: #666666; /* Secondary text */
  --color-text-tertiary: #999999;  /* Tertiary text */
}
```

---

### Skill Category Colors

**File**: `src/components/Skills.jsx`

Each skill category has a gradient. Change the `color` property:

```jsx
const skills = [
  {
    category: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',  // Change gradient colors
    // ...
  },
  // Available Tailwind gradients:
  // from-red-500 to-orange-500
  // from-purple-500 to-pink-500
  // from-green-500 to-emerald-500
  // from-yellow-500 to-amber-500
  // etc.
];
```

---

### Project Card Gradients

**File**: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    title: 'Project Name',
    gradient: 'from-blue-500 to-purple-500',  // Hover overlay gradient
    // ...
  },
];
```

---

## 3. Typography

### Font Families

**File**: `index.html`

```html
<!-- Add your Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Your+Display+Font:wght@400;700&family=Your+Body+Font:wght@300;400;600&display=swap" rel="stylesheet">
```

**File**: `tailwind.config.js`

```js
fontFamily: {
  display: ['Your Display Font', 'sans-serif'],  // Headings
  body: ['Your Body Font', 'sans-serif'],        // Body text
}
```

**Recommended Font Pairings**:
- Modern: Syne + Inter
- Elegant: Playfair Display + Source Sans Pro
- Tech: Space Grotesk + IBM Plex Sans
- Minimal: DM Sans + DM Sans
- Creative: Outfit + Work Sans

---

### Font Sizes

**File**: `src/components/Hero.jsx`

```jsx
// Main heading
<h1 className="text-5xl md:text-7xl lg:text-8xl">
  {/* Adjust: text-4xl, text-6xl, text-9xl, etc. */}
</h1>

// Typing text
<div className="text-3xl md:text-5xl lg:text-6xl">
  {/* Adjust sizing */}
</div>
```

---

## 4. Skills & Expertise

**File**: `src/components/Skills.jsx`

### Add/Edit Skill Categories

```jsx
const skills = [
  {
    category: 'Your Category Name',
    icon: YourIconFromLucide,  // Import from 'lucide-react'
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Skill 1', level: 95 },  // level: 0-100
      { name: 'Skill 2', level: 88 },
      { name: 'Skill 3', level: 92 },
      { name: 'Skill 4', level: 85 },
    ],
  },
  // Add more categories
];
```

### Available Icons

Import from `lucide-react`:
```jsx
import { Code, Palette, Database, Zap, Globe, Smartphone, 
         Cpu, Layers, Box, Settings, Cloud, Shield } from 'lucide-react';
```

[Browse all icons](https://lucide.dev/icons/)

---

## 5. Projects

**File**: `src/components/Projects.jsx`

### Add/Edit Projects

```jsx
const projects = [
  {
    title: 'Project Title',
    description: 'Brief project description (1-2 sentences)',
    image: 'https://images.unsplash.com/photo-...',  // Use Unsplash or your images
    tags: ['React', 'Node.js', 'MongoDB'],  // Tech stack tags
    demoUrl: 'https://demo-link.com',       // Live demo
    githubUrl: 'https://github.com/...',    // GitHub repo
    gradient: 'from-blue-500 to-purple-500',
  },
  // Add more projects
];
```

### Project Image Sources

**Option 1: Unsplash** (Free stock photos)
```
https://images.unsplash.com/photo-[ID]?w=800&auto=format&fit=crop
```

**Option 2: Your Own**
1. Add to `/public/images/`
2. Reference: `image: '/images/project-1.jpg'`

**Option 3: Screenshots**
- Take screenshots of your projects
- Optimize with [TinyPNG](https://tinypng.com/)
- Upload to cloud storage or use locally

---

## 6. Social Links

**File**: `src/components/Hero.jsx`

```jsx
// Line ~135
{[
  { Icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  // Add more:
  // { Icon: Twitter, href: 'https://twitter.com/...', label: 'Twitter' },
  // { Icon: Instagram, href: 'https://instagram.com/...', label: 'Instagram' },
].map(...)
```

**File**: `src/components/Contact.jsx`

```jsx
// Line ~20
const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/...' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/...' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/...' },
  { icon: Mail, label: 'Email', url: 'mailto:...' },
  // Add Dribbble, Behance, Medium, etc.
];
```

---

## 7. Images & Media

### Hero Background

**File**: `src/components/Hero.jsx`

**Current**: Animated particles + gradient orbs

**To add image background**:
```jsx
<div className="absolute inset-0">
  <img 
    src="/images/hero-bg.jpg" 
    alt="Background"
    className="w-full h-full object-cover opacity-20"
  />
</div>
```

---

### Project Images

**Recommended Specs**:
- Dimensions: 800x600px (4:3 ratio)
- Format: JPG or WebP
- Size: < 200KB each
- Quality: 80-85%

**Using Unsplash**:
```
https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop&auto=format
```

**Categories for tech projects**:
- `/photo-1461749280684-dccba630e2f6` - Code
- `/photo-1498050108023-c5249f4df085` - Laptop
- `/photo-1460925895917-afdab827c52f` - Analytics
- `/photo-1551650975-87deedd944c3` - Mobile

---

### Loading Screen Logo

**File**: `src/components/LoadingScreen.jsx`

```jsx
// Line ~35
<motion.div className="text-6xl md:text-8xl font-display font-bold gradient-text">
  YI  {/* Change to your initials or logo text */}
</motion.div>
```

**To use image logo**:
```jsx
<motion.img 
  src="/logo.svg" 
  alt="Logo"
  className="w-32 h-32"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
/>
```

---

## 8. Animations

### Animation Speed

**File**: `tailwind.config.js`

```js
animation: {
  'float': 'float 6s ease-in-out infinite',  // Change 6s
  'glow': 'glow 2s ease-in-out infinite alternate',  // Change 2s
  'shimmer': 'shimmer 2.5s linear infinite',  // Change 2.5s
}
```

---

### Disable Animations (Performance)

**File**: `src/components/Hero.jsx`

```jsx
// Reduce particle count
const particles = Array.from({ length: 15 }, ...);  // Was 30, now 15
```

**File**: `src/index.css`

```css
/* Add this for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Typing Speed

**File**: `src/components/Hero.jsx`

```jsx
// Line ~25
const [typingSpeed, setTypingSpeed] = useState(150);  // Milliseconds per character

// Line ~40
setTypingSpeed(isDeleting ? 75 : 150);  // Adjust delete/type speeds
```

---

## 9. Content

### Section Titles

**Skills Section** - `src/components/Skills.jsx`:
```jsx
<h2>Skills <span className="gradient-text">Roadmap</span></h2>
<p>A visual journey through my technical expertise...</p>
```

**Projects Section** - `src/components/Projects.jsx`:
```jsx
<h2>Featured <span className="gradient-text">Projects</span></h2>
<p>A showcase of my recent work...</p>
```

**Contact Section** - `src/components/Contact.jsx`:
```jsx
<h2>Get In <span className="gradient-text">Touch</span></h2>
<p>Have a project in mind?...</p>
```

---

### Availability Status

**File**: `src/components/Contact.jsx`

```jsx
// Line ~285
<div className="flex items-center gap-3">
  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
  <h3>Available for Work</h3>  {/* Change status */}
</div>
<p>
  Currently open to freelance projects...  {/* Update message */}
</p>
```

**Status colors**:
- Green (`bg-green-500`): Available
- Yellow (`bg-yellow-500`): Limited availability
- Red (`bg-red-500`): Not available

---

### Form Submission

**File**: `src/components/Contact.jsx`

**Current**: Simulated submission

**To connect to backend**:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    console.error('Submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

**Popular form services**:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)
- [Getform](https://getform.io/)

---

## 🎯 Quick Checklist

Before going live, make sure you've changed:

- [ ] Name in Hero, Navbar, Footer
- [ ] Email address
- [ ] Social media links (all locations)
- [ ] Skills and proficiency levels
- [ ] Projects (6 minimum recommended)
- [ ] Project images
- [ ] Accent color (if desired)
- [ ] Font pairing (if desired)
- [ ] Typing effect words
- [ ] Bio/tagline
- [ ] Availability status
- [ ] Form endpoint (if using)
- [ ] Meta tags in `index.html`
- [ ] Favicon
- [ ] README author section

---

## 🚀 Next Steps

1. Customize content (text, images, links)
2. Test on multiple devices/browsers
3. Optimize images
4. Set up form submission
5. Deploy to hosting service
6. Share your portfolio! 🎉

---

## 💡 Tips

- **Consistency**: Keep design choices consistent (colors, spacing, fonts)
- **Content First**: Write content before designing
- **Less is More**: Don't overcomplicate - simple is better
- **Test**: Check on mobile, tablet, desktop
- **Feedback**: Get opinions from others
- **Iterate**: Update regularly with new projects

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) - Free images
- [Google Fonts](https://fonts.google.com/)
- [Coolors](https://coolors.co/) - Color palettes
