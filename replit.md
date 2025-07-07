# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built as a full-stack application showcasing Meetkumar Patel's professional experience as a backend-focused software engineer. The application features a React frontend with a sophisticated design system and an Express.js backend for handling contact form submissions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form handling
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Memory-based storage with fallback for database integration
- **Validation**: Zod schemas for runtime type validation

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Animated introduction with call-to-action buttons
- **Portfolio Sections**: Modular sections for experience, education, skills, projects
- **Contact Form**: Interactive form with validation and submission handling
- **UI System**: Comprehensive design system with reusable components

### Backend Services
- **Contact API**: `/api/contact` endpoint for form submissions
- **Message Storage**: In-memory storage with database schema ready
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging

### Database Schema
- **Users Table**: Ready for authentication implementation
- **Contact Messages Table**: Stores form submissions with timestamps
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

## Data Flow

1. **User Interaction**: User navigates portfolio and fills contact form
2. **Form Validation**: Client-side validation using React Hook Form with Zod resolvers
3. **API Request**: Form data submitted to `/api/contact` endpoint
4. **Backend Processing**: Express validates data and stores message
5. **Response Handling**: Success/error feedback displayed via toast notifications
6. **Admin Access**: `/api/contact-messages` endpoint for retrieving submissions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Components**: Radix UI primitives, React Icons
- **Animation**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form, Hookform Resolvers
- **HTTP**: TanStack React Query for API communication
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict type checking with path mapping
- **Database Migrations**: Drizzle Kit for schema management
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR at client root
- **Backend**: tsx execution with nodemon-like behavior
- **Database**: Neon serverless PostgreSQL for development
- **Environment**: Replit-optimized with runtime error modal

### Production Build
- **Frontend**: Vite builds to `dist/public` with optimized assets
- **Backend**: esbuild bundles server to `dist/index.js` as ESM
- **Static Serving**: Express serves built frontend files
- **Database**: Production PostgreSQL via DATABASE_URL environment variable

### Configuration Management
- **Environment Variables**: DATABASE_URL for database connection
- **Path Aliases**: TypeScript path mapping for clean imports
- **Asset Handling**: Vite resolver for attached assets
- **CORS**: Configured for development and production environments

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```