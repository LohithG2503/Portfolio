# Lohith G - Cybersecurity Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase)

**A modern, space-themed portfolio website showcasing My Skills in Cybersecurity and Web Development**

[Live Demo](#) • [Contact](#contact) • [LinkedIn](https://www.linkedin.com/in/LohithG2503)

</div>

---

## Features

- **Space-Themed Design** - Immersive animated background with stars and nebulae
- **Smooth Animations** - GSAP-powered text animations and Framer Motion transitions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Performance Optimized** - Static export, lazy loading, and code splitting
- **Modern UI/UX** - Glassmorphism effects, gradient backgrounds, and interactive elements
- **Fast Loading** - Optimized images, efficient animations, and minimal bundle size
- **Accessible** - ARIA labels, semantic HTML, and keyboard navigation support

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: 
  - GSAP 3.13.0 (Text animations, scrolling effects)
  - Framer Motion 11.5.7 (Page transitions, component animations)
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React

### Backend & Deployment
- **Hosting**: Firebase Hosting
- **Build**: Static Site Generation (SSG)
- **Package Manager**: npm

### Key Libraries
- `gsap` - High-performance animations
- `framer-motion` - React animation library
- `next/image` - Optimized image loading
- `lucide-react` - Modern icon library

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git** for version control

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/LohithG2503/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:9002`

### 4. Build for Production

```bash
npm run build
```

This generates a static export in the `out` directory, ready for deployment.

### 5. Preview Production Build

```bash
npm start
```

## Project Structure

```
portfolio/
├── public/                 # Static assets (images, PDFs)
│   ├── ai-placement-helper.png
│   ├── arduino-board.png
│   ├── sift-workstation.png
│   └── LohithG-Resume-Latest.pdf
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # Welcome page
│   │   ├── portfolio/     # Main portfolio page
│   │   └── layout.tsx     # Root layout
│   ├── components/
│   │   ├── backgrounds/   # Space background component
│   │   ├── layout/        # Header, conditional header
│   │   ├── sections/      # Hero, Skills, Projects, etc.
│   │   └── ui/            # Reusable UI components
│   │       ├── text-type.tsx    # Typewriter animation
│   │       ├── split-text.tsx   # Character-by-character animation
│   │       └── logo-loop.tsx     # Scrolling skills carousel
│   └── lib/
│       ├── data.ts        # Portfolio data (projects, skills, etc.)
│       └── utils.ts       # Utility functions
├── firebase.json          # Firebase Hosting configuration
├── .firebaserc            # Firebase project configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Key Components

### Welcome Screen
- Animated space background with stars and nebulae
- Typewriter effect for welcome message
- Smooth transition to main portfolio

### Hero Section
- Professional introduction with cybersecurity focus
- Animated text using SplitText component
- Downloadable resume (PDF)
- Contact button with smooth hover effects

### Skills Section
- Infinite scrolling carousel of skills
- Hover effects and smooth animations
- Responsive design for all screen sizes

### Projects Section
- Interactive project cards with modal dialogs
- Project showcases:
  - AI Placements Helper (Full-Stack)
  - Smart Shopping Cart (IoT)
  - Personal DFIR Lab
- Technology badges and live demo links

### Certifications Section
- Display of professional certifications
- Expandable certificate views
- CPT and IBM certifications highlighted

## Deployment

### Firebase Hosting

This project is configured for Firebase Hosting with static export.

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**:
   ```bash
   firebase deploy --only hosting
   ```

3. **Access your site**:
   - Default URL: `https://portfolio-4006b.web.app`
   - Alternative: `https://portfolio-4006b.firebaseapp.com`

### Custom Domain

You can add a custom domain in the Firebase Console:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps

## Performance Optimizations

- ✅ Static Site Generation (SSG)
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Reduced animation complexity for mobile devices
- ✅ Optimized GSAP animations (`force3D: false`)
- ✅ Efficient bundle size (~102 KB First Load JS)
- ✅ Caching headers for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal portfolio project. However, if you'd like to suggest improvements or report issues:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Lohith G**

- Website: [Portfolio](#) (Coming soon)
- LinkedIn: [@LohithG2503](https://www.linkedin.com/in/LohithG2503)
- GitHub: [@LohithG2503](https://github.com/LohithG2503)
- Email: lohith2503@gmail.com
- WhatsApp: [+91 8105684524](https://wa.me/+918105684524/?text=Hello%20this%20is%20my%20Whatsapp%20number)

## Certifications

- **Certified Penetration Tester (CPT)** - RedTeam Hacker Academy (2025)
- **Cybersecurity Fundamentals** - IBM SkillsBuild

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Framer Motion](https://www.framer.com/motion/) - React animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [React Bits](https://reactbits.dev/) - Animation components inspiration
- [Firebase](https://firebase.google.com/) - Hosting platform

---

<div align="center">

**If you like this project, give it a ⭐**

Made with 💖 by [Lohith G](https://github.com/LohithG2503)

</div>
