# Meetkumar Patel - Personal Portfolio

A modern, responsive personal portfolio website built with React showcasing backend engineering experience.

## Features

- **Minimalist Design**: Clean, professional interface with light animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**: Smooth scrolling navigation and animated components
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Framer Motion

## Portfolio Sections

- **Hero Section**: Professional introduction with animated tech icons
- **Summary**: Backend engineering expertise and achievements
- **Interest Areas**: Cloud Architecture, Security & Compliance, Data Engineering
- **Work Experience**: Detailed experience from Omeda and Sculptsoft
- **Projects**: Featured projects with technology stacks
- **Skills**: 12 core technologies with clean visual icons
- **Education**: MS and BE degrees with GPAs
- **Contact**: Interactive contact form

## Running the Portfolio

### Development Mode
```bash
# In the project root directory (for Replit)
npm run dev

# Or run directly from client folder
cd client
npm run dev
```

### Production Build
```bash
# Build the static files
cd client
npm run build

# Serve the production build
npm run preview
```

### Quick Start (Frontend Only)
```bash
# Install dependencies
cd client
npm install

# Start development server
npm run dev
```

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   ├── index.html          # HTML template
│   └── vite.config.ts      # Vite configuration
├── README.md               # This file
└── build-frontend.sh       # Build script
```

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter (lightweight router)
- **Build Tool**: Vite

## Deployment

The portfolio is designed as a static site that can be deployed to any hosting platform:

1. **Build the project**: `cd client && npm run build`
2. **Deploy the `client/dist` folder** to your hosting platform
3. **Configure routing** for single-page application (if needed)

### Popular Deployment Options
- Netlify (drag & drop the dist folder)
- Vercel (connect GitHub repository)
- GitHub Pages (static site hosting)
- Any web server (serve the dist folder)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Information

- **Email**: sde.meet@gmail.com
- **Phone**: (361) 389-5400
- **Location**: Seattle, WA (willing to relocate)