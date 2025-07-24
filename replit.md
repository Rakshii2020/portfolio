# Portfolio Website - Replit Configuration

## Overview

This is a static portfolio website for Rakshitha S A, built with vanilla HTML, CSS, and JavaScript. The website showcases personal information, skills, projects, certifications, and publications in a modern, responsive design with dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design Pattern**: Component-based JavaScript classes for functionality management
- **Styling Approach**: CSS custom properties (variables) for theme management with CSS Grid and Flexbox for layouts
- **Responsive Design**: Mobile-first approach using CSS media queries

### Theme System
- **Implementation**: CSS custom properties with data attributes for theme switching
- **Storage**: Browser localStorage for theme persistence
- **Themes**: Dark and light mode with comprehensive color schemes

## Key Components

### 1. Theme Manager (JavaScript Class)
- **Purpose**: Handles dark/light theme switching and persistence
- **Features**: 
  - Theme state management
  - Local storage integration
  - Dynamic icon updates
  - CSS custom property manipulation

### 2. Navigation Manager (JavaScript Class)
- **Purpose**: Manages navigation behavior and active states
- **Features**:
  - Smooth scrolling to sections
  - Active navigation highlighting
  - Header behavior on scroll

### 3. CSS Architecture
- **Variables System**: Comprehensive CSS custom properties for theming
- **Component Structure**: Modular CSS with clear section organization
- **Responsive Design**: Mobile-first responsive breakpoints

### 4. HTML Structure
- **Semantic Markup**: Proper HTML5 semantic elements
- **Accessibility**: ARIA labels and proper heading hierarchy
- **SEO Optimized**: Meta tags and structured content

## Data Flow

### Theme Management Flow
1. User clicks theme toggle button
2. ThemeManager toggles between 'dark' and 'light'
3. CSS custom properties update via data attribute
4. Theme preference saved to localStorage
5. Icon updates to reflect current theme

### Navigation Flow
1. User clicks navigation link
2. NavigationManager handles smooth scroll to target section
3. Active states update based on scroll position
4. Header appearance changes based on scroll position

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library (v6.4.0) for UI icons
- **http-server**: Development server for local testing

### Development Dependencies
- **http-server**: Simple HTTP server for serving static files during development

## Deployment Strategy

### Static Hosting
- **Approach**: Pure static website deployment
- **Requirements**: Any static file hosting service (Netlify, Vercel, GitHub Pages)
- **Build Process**: No build step required - direct file serving
- **Assets**: Self-contained with external CDN dependencies

### Development Setup
- **Local Server**: Uses http-server for local development
- **Hot Reload**: Manual refresh required (no build tools)
- **File Structure**: Flat structure with separation of concerns

### Production Considerations
- **Performance**: Optimized with external CDN resources
- **Caching**: Relies on browser caching and CDN caching
- **Compatibility**: Modern browser support with graceful degradation
- **Security**: No server-side components, minimal attack surface

## Technical Decisions

### Vanilla JavaScript Choice
- **Rationale**: Lightweight, no framework overhead for a simple portfolio
- **Benefits**: Fast loading, direct browser API access, minimal dependencies
- **Trade-offs**: More manual DOM manipulation, no reactive updates

### CSS Custom Properties for Theming
- **Rationale**: Native browser support, efficient theme switching
- **Benefits**: Performance, maintainability, dynamic updates
- **Alternative Considered**: CSS-in-JS solutions (rejected for simplicity)

### Class-Based JavaScript Architecture
- **Rationale**: Organized code structure, reusable components
- **Benefits**: Maintainable, testable, clear separation of concerns
- **Implementation**: ES6 classes with proper encapsulation