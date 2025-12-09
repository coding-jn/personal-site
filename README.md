# Jenna Nguyen | Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This single-page application showcases my work as a software engineer with a clean, professional design.

## Tech Stack

- **Framework:** React 18.3
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** SASS/SCSS
- **Routing:** React Router v7
- **Icons:** React Icons
- **Deployment:** Vercel

## Features

- Modern, responsive design
- Fast page loads with Vite
- Type-safe codebase with TypeScript
- Client-side routing with React Router
- Modular component architecture
- SCSS for maintainable styling

## Project Structure

```
jenna-nguyen/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Home, About, Layout)
│   ├── styles/         # SCSS stylesheets
│   ├── assets/         # Images and static assets
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Application entry point
├── public/             # Static files
└── dist/               # Production build output
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jenna-nguyen
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Building for Production

```bash
npm run build
```

This will:
1. Run TypeScript compiler to check types
2. Build optimized production bundle in the `dist/` directory

## Deployment

This project is configured for deployment on Vercel with client-side routing support. The `vercel.json` configuration ensures all routes are handled correctly by the React Router.

To deploy:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically on every push to the main branch

## Code Quality

- **ESLint:** Configured with React and TypeScript rules
- **Prettier:** Code formatting with consistent style
- **TypeScript:** Strict type checking enabled

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ support required

## Contact

**Jenna Nguyen**
Software Engineer

---

Built with React, TypeScript, and Vite
