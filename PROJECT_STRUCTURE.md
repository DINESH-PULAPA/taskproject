# Modern Portfolio Website

A fully responsive, modern portfolio website built with React, Vite, and Tailwind CSS featuring a parallax grid, smooth animations, and multiple theme options.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.jsx       # Sticky navigation with blur effect
│   │   ├── Navbar.css
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Footer.css
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   └── index.js         # Barrel export
│   │
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Animated hero with typewriter
│   │   ├── Hero.css
│   │   ├── About.jsx        # About with skills bars
│   │   ├── About.css
│   │   ├── Experience.jsx   # Timeline component
│   │   ├── Experience.css
│   │   ├── Projects.jsx     # Projects wrapper
│   │   ├── Projects.css
│   │   ├── Scene.jsx        # Parallax grid scene
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Contact.css
│   │   └── index.js         # Barrel export
│   │
│   └── ui/                  # Reusable UI components
│       ├── Tile.jsx         # Grid tile component
│       ├── Switch.jsx       # Filter switch
│       ├── ThemeToggle.jsx  # Theme switcher
│       ├── ErrorBoundary.jsx# Error handler
│       └── index.js         # Barrel export
│
├── context/
│   └── ThemeContext.jsx     # Theme management
│
├── data/
│   └── data1.json           # Portfolio data
│
├── pages/
│   └── Home.jsx             # Main home page
│
├── App.jsx                  # Root component with routing
├── App.css                  # Global app styles
├── main.jsx                 # Entry point
└── index.css                # Global CSS & themes

```

## 🚀 Features

### Core Features
- ✅ **Responsive Design** - Mobile-first approach (4/6/8 column grid)
- ✅ **Parallax Effects** - Mouse-based parallax scrolling
- ✅ **Multiple Themes** - 4 professional color schemes
- ✅ **Smooth Animations** - Framer Motion & AOS
- ✅ **Form Validation** - React Hook Form + Yup
- ✅ **Modern UI** - Glassmorphism & gradient effects

### Sections
1. **Hero** - Animated landing with typewriter effect
2. **About** - Profile, bio, and animated skill bars
3. **Experience** - Timeline with work history
4. **Projects** - Interactive parallax grid
5. **Contact** - Validated contact form
6. **Footer** - Social links & navigation

## 🎨 Themes

The portfolio includes 4 professionally curated themes:

1. **Midnight Blue** (Default) - Professional, corporate
2. **Sunset Gradient** - Creative, vibrant
3. **Forest Green Pro** - Tech, eco-friendly
4. **Ocean Depth** - Data, finance

Switch themes using the toggle button in the navbar.

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **React Router v6** - Routing
- **React Hook Form** - Form handling
- **Yup** - Validation
- **AOS** - Scroll animations
- **Parallax.js** - Parallax effects
- **React Icons** - Icon library

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

### Update Portfolio Data

Edit `src/data/data1.json` to customize:
- Work experience
- Education
- Skills
- Projects
- Achievements

### Customize Colors

Modify theme variables in `src/index.css`:

```css
:root {
  --bg: #0F172A;
  --card: #1E293B;
  --text-primary: #F1F5F9;
  --cta: #3B82F6;
  /* ... more variables */
}
```

### Update Personal Info

Edit `src/components/sections/Hero.jsx`:
- Name
- Title
- Bio
- CTA buttons

## 🎯 Optimizations

- ✅ **Code Splitting** - Lazy loading with React Router
- ✅ **Barrel Exports** - Clean import statements
- ✅ **Organized Structure** - Logical folder hierarchy
- ✅ **Minimal CSS** - Component-scoped styles
- ✅ **Clean Code** - No redundant files

## 📱 Responsive Breakpoints

- **Mobile**: < 650px (4 columns)
- **Tablet**: 650px - 1200px (6 columns)
- **Desktop**: > 1200px (8 columns)

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Your Name - your.email@example.com

---

**Built with ❤️ using React + Vite**
