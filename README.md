# Premium Portfolio Website

A highly unique, modern, and animated personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio breaks away from typical developer portfolio designs to create a premium product launch experience.

## ✨ Features

### Core Features
- **🎨 Advanced Theme System**: Smooth light/dark mode toggle with animated transitions
- **🎯 Custom Cursor**: Interactive cursor with hover effects
- **⚡ Loading Screen**: Animated loading experience with progress bar
- **🎭 Smooth Animations**: Powered by Framer Motion with scroll-triggered animations
- **📱 Fully Responsive**: Mobile-first design approach
- **🎪 Glassmorphism**: Modern glass-effect UI elements

### Sections

#### 1. Home/Hero Section
- Full-screen immersive hero
- Animated typing effect with multiple roles
- Dynamic particle background animation
- Gradient orb animations
- Call-to-action buttons with ripple effects
- Social media links
- Scroll indicator animation

#### 2. Skills Roadmap Section
- Interactive vertical timeline/roadmap
- Animated milestone nodes with glow effects
- Scroll-triggered reveal animations
- Skill proficiency visualization with animated progress bars
- Icon-based categorization
- Gradient-themed skill cards

#### 3. Projects Section
- 3D hover tilt effect on project cards
- Technology-based filtering system
- Image hover overlay with action buttons
- Smooth card entrance animations
- Project metadata (title, description, tech stack)
- Live demo and GitHub links

#### 4. Contact Section
- Animated contact form with floating labels
- Real-time form validation
- Submit animation with success feedback
- Email copy-to-clipboard functionality
- Social media integration
- Availability status indicator

### Premium Features
- ✅ Custom cursor with interaction states
- ✅ Loading screen with brand animation
- ✅ Smooth scroll behavior
- ✅ Parallax effects in hero section
- ✅ Staggered reveal animations
- ✅ Noise texture overlay
- ✅ Custom scrollbar styling
- ✅ Theme persistence in localStorage
- ✅ Scroll progress indicator
- ✅ Active section highlighting in navbar
- ✅ Mobile-friendly hamburger menu
- ✅ Micro-interactions throughout

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS Variables** - Theme management

## 📁 Project Structure

```
premium-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── hooks/
│   │   ├── useInView.js
│   │   ├── useScrollProgress.js
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd premium-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following in the respective components:

**Hero.jsx**
```jsx
<h1>Your Name</h1>
const words = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

**Navbar.jsx**
```jsx
<a>Your Name</a>
```

**Contact.jsx**
```jsx
const email = 'your.email@example.com';
```

### 2. Colors & Theme

Edit `tailwind.config.js` and `src/index.css`:

```css
:root {
  --color-accent: #ff3366; /* Change primary accent color */
  --color-accent-light: #ff5588;
  /* Add more custom colors */
}
```

### 3. Skills

Edit the `skills` array in `Skills.jsx`:

```jsx
const skills = [
  {
    category: 'Your Category',
    icon: YourIcon,
    color: 'from-color-500 to-color-600',
    items: [
      { name: 'Skill Name', level: 90 },
      // Add more skills
    ],
  },
];
```

### 4. Projects

Update the `projects` array in `Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    image: 'image-url',
    tags: ['Tech1', 'Tech2'],
    demoUrl: 'demo-link',
    githubUrl: 'github-link',
    gradient: 'from-blue-500 to-purple-500',
  },
];
```

### 5. Fonts

Google Fonts are loaded in `index.html`. To change fonts:

1. Update the Google Fonts link
2. Update `tailwind.config.js`:

```js
fontFamily: {
  display: ['Your Display Font', 'sans-serif'],
  body: ['Your Body Font', 'sans-serif'],
}
```

## 🎯 Animation Configuration

All animations use Framer Motion. Key patterns:

### Scroll-triggered animations
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
/>
```

### Hover effects
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
/>
```

### Staggered children
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ⚡ Performance Tips

1. **Lazy load images**: Replace project images with lazy-loaded versions
2. **Code splitting**: Already configured with Vite
3. **Optimize animations**: Reduce particle count on mobile
4. **Image optimization**: Use WebP format for images
5. **Reduce motion**: Add `prefers-reduced-motion` media query support

## 🎨 Design Philosophy

This portfolio follows these design principles:

1. **Minimalism with Impact**: Clean layouts with bold accent colors
2. **Motion Design**: Purposeful animations that enhance UX
3. **Glassmorphism**: Modern frosted glass aesthetic
4. **Typography**: Bold display fonts paired with readable body text
5. **Color Psychology**: Strategic use of accent colors for CTAs
6. **Micro-interactions**: Delightful hover and click feedbacks

## 🔧 Troubleshooting

### Issue: Animations not working
- Check if Framer Motion is installed: `npm list framer-motion`
- Clear browser cache and reload

### Issue: Theme not persisting
- Check localStorage in browser DevTools
- Ensure `useTheme` hook is properly initialized

### Issue: Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` with verbose flag

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Alex Parker** (Placeholder)
- Portfolio: [yourwebsite.com]
- GitHub: [@yourusername]
- LinkedIn: [Your LinkedIn]

## 🌟 Acknowledgments

- Design inspiration from modern product landing pages
- Icons from Lucide React
- Fonts from Google Fonts
- Images from Unsplash

---

Made with ❤️ and lots of coffee ☕
