# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built as a frontend-only React application showcasing Meetkumar Patel's professional experience as a backend-focused software engineer. The application features a clean, minimalist design with smooth animations and professional styling.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Application Architecture
- **Deployment**: Frontend-only static site application
- **Build Tool**: Vite for fast development and optimized production builds
- **Configuration**: Independent client-side configuration with proper path resolution
- **Contact Form**: Demo functionality without backend dependencies

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Animated introduction with call-to-action buttons
- **Portfolio Sections**: Modular sections for experience, education, skills, projects
- **Contact Form**: Interactive form with validation and submission handling
- **UI System**: Comprehensive design system with reusable components

### Portfolio Sections
- **Hero Section**: Animated introduction with floating tech icons
- **Summary Section**: Professional background and key achievements
- **Interest Areas**: Cloud Architecture, Security & Compliance, Data Engineering
- **Work Experience**: Detailed experience from Omeda and Sculptsoft
- **Projects Section**: Featured projects with technology stacks
- **Skills Section**: 12 core technologies with visual icons
- **Education Section**: MS and BE degrees with GPAs
- **Contact Section**: Interactive form with demo functionality

## Data Flow

1. **User Interaction**: User navigates portfolio sections with smooth scrolling
2. **Form Interaction**: Contact form provides demo functionality with success feedback
3. **Animations**: Framer Motion provides smooth animations and transitions
4. **Responsive Design**: Tailwind CSS ensures perfect display across all devices
5. **Static Deployment**: Built as static files for easy deployment to any hosting platform

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Components**: Radix UI primitives, React Icons
- **Animation**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form, Hookform Resolvers
- **HTTP**: TanStack React Query for API communication
- **Utilities**: clsx, class-variance-authority, date-fns

### Core Dependencies
- **React**: React 18 with TypeScript for component development
- **Vite**: Fast build tool and development server
- **Styling**: Tailwind CSS for responsive design system
- **Icons**: Lucide React for clean, consistent iconography
- **Routing**: Wouter for lightweight client-side navigation

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict type checking with path mapping
- **Database Migrations**: Drizzle Kit for schema management
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR on port 5000
- **Path Resolution**: Configured `@` alias for clean imports
- **Hot Reload**: Instant updates during development
- **TypeScript**: Strict type checking with proper configuration

### Production Build
- **Static Site**: Vite builds to `client/dist` folder
- **Optimized Assets**: Minified CSS/JS with tree shaking
- **Deployment Ready**: Static files can be served from any web server
- **Performance**: Optimized for fast loading and SEO

### Configuration Management
- **Path Aliases**: `@` alias points to `src` directory for clean imports
- **TypeScript**: Separate tsconfig.json in client folder for proper resolution
- **Tailwind**: Independent configuration with content path scanning
- **Vite**: Custom configuration for development and production builds

## Changelog

```
Changelog:
- July 07, 2025: Initial setup with full-stack architecture
- July 07, 2025: Converted to frontend-only React application per user request
- July 07, 2025: Fixed Vite configuration and path resolution issues
- July 07, 2025: Created independent client configuration for production builds
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```