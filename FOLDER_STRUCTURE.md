# 📁 Folder Structure Documentation

## Complete Project Tree

```
premium-portfolio/
│
├── 📂 public/                      # Static assets
│   └── vite.svg                    # Vite logo (default)
│
├── 📂 src/                         # Source code
│   │
│   ├── 📂 components/              # React components
│   │   ├── Contact.jsx             # Contact section with form
│   │   ├── CustomCursor.jsx        # Custom animated cursor
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Hero.jsx                # Hero/landing section
│   │   ├── LoadingScreen.jsx       # Initial loading animation
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Projects.jsx            # Projects showcase
│   │   └── Skills.jsx              # Skills roadmap/timeline
│   │
│   ├── 📂 hooks/                   # Custom React hooks
│   │   ├── useInView.js            # Intersection Observer hook
│   │   ├── useScrollProgress.js    # Scroll progress tracking
│   │   └── useTheme.js             # Theme management hook
│   │
│   ├── App.jsx                     # Main App component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles + Tailwind
│
├── index.html                      # HTML template
├── package.json                    # Dependencies & scripts
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

## 📋 File Descriptions

### Root Configuration Files

#### `package.json`
- Lists all project dependencies
- Defines npm scripts (dev, build, preview)
- Project metadata

#### `vite.config.js`
- Vite build tool configuration
- React plugin setup
- Dev server settings

#### `tailwind.config.js`
- Tailwind CSS customization
- Custom colors, fonts, animations
- Dark mode configuration
- Extended theme tokens

#### `postcss.config.js`
- PostCSS plugins configuration
- Autoprefixer setup
- Tailwind CSS processing

#### `index.html`
- HTML entry point
- Google Fonts loading
- Root div for React
- Meta tags

---

### 📂 src/ Directory

#### `main.jsx`
**Purpose**: React application entry point

**Key Features**:
- ReactDOM render configuration
- StrictMode wrapper
- CSS imports

**Dependencies**: React, ReactDOM, App component

---

#### `App.jsx`
**Purpose**: Main application orchestrator

**Key Features**:
- Loading state management
- Theme hook integration
- Component composition
- Layout structure

**Components Used**:
- LoadingScreen
- CustomCursor
- Navbar
- Hero
- Skills
- Projects
- Contact
- Footer

---

#### `index.css`
**Purpose**: Global styles and CSS variables

**Key Features**:
- Tailwind directives
- CSS custom properties for theming
- Light/Dark mode color definitions
- Custom animations (keyframes)
- Utility classes (glassmorphism, gradients)
- Scrollbar styling
- Selection styling
- Noise texture overlay

**Custom Classes**:
- `.glass` - Glassmorphism effect
- `.gradient-text` - Gradient text effect
- `.particle` - Floating particles
- `.timeline-node` - Skill timeline nodes
- `.custom-cursor` - Cursor styling
- `.ripple-effect` - Button ripple animation

---

### 📂 components/

#### `LoadingScreen.jsx`
**Purpose**: Initial page loading animation

**Features**:
- Progress bar animation
- Logo reveal
- Percentage counter
- Fade-out on complete

**Props**:
- `onLoadingComplete`: Callback when loading finishes

**Animations**:
- Scale/fade for logo
- Width animation for progress bar
- Opacity fade-out

---

#### `CustomCursor.jsx`
**Purpose**: Custom cursor with interaction states

**Features**:
- Follows mouse position
- Scales on hover over interactive elements
- Smooth spring animation
- Hidden on mobile

**Hooks Used**:
- useState (position, hover state)
- useEffect (event listeners)

**Key Logic**:
- Detects buttons/links for hover state
- Spring animation with Framer Motion
- Position tracking via mousemove

---

#### `Navbar.jsx`
**Purpose**: Sticky navigation with theme toggle

**Features**:
- Active section highlighting
- Smooth scroll navigation
- Mobile hamburger menu
- Theme toggle button
- Scroll progress bar
- Glass effect on scroll

**Props**:
- `theme`: Current theme (light/dark)
- `toggleTheme`: Function to toggle theme

**State**:
- `isScrolled`: Glass effect trigger
- `isMobileMenuOpen`: Mobile menu state
- `activeSection`: Current section in viewport

**Hooks Used**:
- useScrollProgress
- useEffect (scroll detection)

---

#### `Hero.jsx`
**Purpose**: Landing/hero section with animations

**Features**:
- Typing effect animation
- Particle background
- Gradient orbs
- Social links
- CTA buttons
- Scroll indicator

**State**:
- `text`: Current typed text
- `isDeleting`: Typing/deleting mode
- `loopNum`: Word cycle counter
- `typingSpeed`: Typing animation speed

**Animations**:
- Typing effect
- Particle floating
- Orb pulsing
- Staggered reveals

---

#### `Skills.jsx`
**Purpose**: Skills roadmap/timeline section

**Features**:
- Vertical timeline design
- Animated skill nodes
- Progress bars for proficiency
- Categorized skills with icons
- Scroll-triggered animations

**Data Structure**:
```jsx
{
  category: string,
  icon: IconComponent,
  color: string (gradient classes),
  items: [
    { name: string, level: number }
  ]
}
```

**Animations**:
- Staggered card entrance
- Progress bar fill on scroll
- Node hover glow effect

**Hooks Used**:
- useInView (scroll detection)

---

#### `Projects.jsx`
**Purpose**: Project showcase with filtering

**Features**:
- 3D tilt effect on hover
- Technology filtering
- Image hover overlays
- Demo/GitHub links
- Tag-based organization

**State**:
- `selectedFilter`: Current filter
- Per-card states:
  - `isHovered`: Hover state
  - `mousePosition`: For tilt calculation

**Key Logic**:
- Mouse position tracking
- 3D rotation calculation
- Filter by technology tags

**Data Structure**:
```jsx
{
  title: string,
  description: string,
  image: string,
  tags: string[],
  demoUrl: string,
  githubUrl: string,
  gradient: string
}
```

---

#### `Contact.jsx`
**Purpose**: Contact form and social links

**Features**:
- Animated form with floating labels
- Real-time validation
- Submit animation
- Email copy-to-clipboard
- Social media links
- Availability status

**State**:
- `formData`: {name, email, message}
- `isSubmitting`: Submit in progress
- `isSubmitted`: Success state
- `errors`: Validation errors
- `copied`: Clipboard feedback

**Key Functions**:
- `validateForm()`: Email/required validation
- `handleSubmit()`: Form submission
- `copyEmail()`: Copy to clipboard

**Animations**:
- Label float on focus
- Submit button states
- Success feedback

---

#### `Footer.jsx`
**Purpose**: Site footer

**Features**:
- Copyright info
- Links (Privacy, Terms, Credits)
- Animated heart icon
- Minimal design

**Animations**:
- Heart beat animation
- Link hover effects

---

### 📂 hooks/

#### `useTheme.js`
**Purpose**: Theme state management

**Features**:
- Dark/light mode toggle
- localStorage persistence
- DOM class management

**Returns**:
- `theme`: Current theme string
- `toggleTheme`: Toggle function

**Storage Key**: 'theme'

---

#### `useScrollProgress.js`
**Purpose**: Track scroll percentage

**Features**:
- Calculates scroll position
- Updates on scroll
- Returns 0-100 value

**Returns**:
- `scrollProgress`: Number (0-100)

**Usage**: Progress bar in Navbar

---

#### `useInView.js`
**Purpose**: Detect element visibility

**Features**:
- Intersection Observer API
- Customizable threshold
- Trigger animations on scroll

**Params**:
- `options`: IntersectionObserver options

**Returns**:
- `[ref, isInView]`: Ref to attach, visibility boolean

**Default Threshold**: 0.1 (10% visible)

---

## 🎨 Styling Architecture

### CSS Custom Properties Pattern
```css
:root {
  --color-primary: #value;
}

.dark {
  --color-primary: #different-value;
}
```

### Tailwind Usage
- Utility classes for rapid development
- Custom classes in index.css for complex styles
- Theme tokens via CSS variables
- Responsive prefixes (md:, lg:, etc.)

---

## 🔄 Component Communication

```
App
├── LoadingScreen (state managed in App)
├── CustomCursor (standalone)
├── Navbar (receives theme props)
├── Hero (standalone)
├── Skills (uses useInView)
├── Projects (uses useInView)
├── Contact (uses useInView)
└── Footer (standalone)
```

### Data Flow
1. **Theme**: App → useTheme hook → Navbar (props)
2. **Loading**: App (local state) → LoadingScreen
3. **Sections**: Independent, use hooks for scroll detection

---

## 🚀 Build Process

### Development
1. Vite dev server starts
2. Fast HMR (Hot Module Replacement)
3. React components render
4. Tailwind processes utilities
5. PostCSS autoprefixes

### Production
1. Vite builds optimized bundle
2. Tailwind purges unused CSS
3. Assets minified
4. Output to `dist/` folder
5. Ready for deployment

---

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `CustomCursor.jsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useTheme.js`)
- **CSS Classes**: kebab-case (e.g., `custom-cursor`)
- **Variables**: camelCase (e.g., `scrollProgress`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)

---

## 🎯 Best Practices Applied

1. **Component Separation**: Each section is its own component
2. **Custom Hooks**: Reusable logic extraction
3. **Single Responsibility**: Each file has one clear purpose
4. **Declarative Code**: React/Tailwind declarative patterns
5. **Performance**: Lazy loading, code splitting
6. **Accessibility**: Semantic HTML, ARIA labels
7. **Maintainability**: Clear structure, documented code
