# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a dual-purpose portfolio website for ZMPD (Zach Maraziti) showcasing both photography and software development services. The site features a split-screen landing page that expands into full overlay sections for each service area.

## Architecture Overview
The project is a static website built with vanilla JavaScript, jQuery, HTML5, and CSS3. There is no build process or package management system.

### Key Components:
- **index.html**: Main HTML file containing all markup for both photography and development sections
- **script.js**: jQuery-based JavaScript handling animations, overlays, and interactions
- **style.css**: All styling including responsive design, animations, and overlay effects
- **images/**: Static assets including logos and hero images

### UI/UX Pattern:
The site uses a split-screen design pattern where:
1. Landing page shows two halves (photo/dev) with hover effects
2. Clicking either half opens a full-screen overlay with navigation sidebar
3. Each overlay contains multiple sections (About, Portfolio, Contact)
4. Mobile responsive with stacked layout on small screens

## Development Commands
This is a static site with no build process. To develop:
- Open index.html directly in a browser
- Use a local server (e.g., `python -m http.server` or VS Code Live Server) for better development experience
- No compilation, bundling, or preprocessing required

## Key Implementation Details

### Navigation System
- Sidebar navigation with active state tracking
- Mobile hamburger menu toggle
- Smooth scrolling between sections within overlays

### Animation Framework
- Uses animate.css library for entrance/exit animations
- CSS transitions for hover effects
- jQuery for animation sequencing and cleanup

### Third-party Integrations
- **Shopify Buy Button SDK**: E-commerce integration for photography prints (currently shows placeholder data)
- **Fancybox**: Lightbox gallery for photography portfolio
- **Font Awesome**: Icon library

### Responsive Design
- Breakpoint at 600px for mobile layout
- Flexbox-based grid system
- Mobile-optimized navigation and content layout

## Code Conventions
- jQuery for DOM manipulation and event handling
- CSS classes follow BEM-like naming (e.g., `module-card`, `module-card-title`)
- Inline event handlers avoided in favor of jQuery selectors
- Animation cleanup using jQuery's animation end events

## Important Notes
- The Shopify integration contains a redacted access token (`storefrontAccessToken: 'NICE TRY LOSERS'`)
- Photography portfolio uses Dropbox direct links for image hosting
- Contact form points to `contactengine.php` (not included in repository)
- Some sections contain placeholder content (Lorem ipsum in dev section)