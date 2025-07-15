# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project is a Next.js application with TypeScript and Tailwind CSS:

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the production Next.js application  
- `npm run start` - Start production server after build
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a personal CV/resume website built with modern web technologies:

### Core Structure
- **Main App**: `src/app/page.tsx` - Main landing page
- **Victor's CV**: `src/app/victor-cv/page.tsx` - Victor's resume page
- **Components**: `src/components/` - Reusable React components
- **Data**: `src/data/` - TypeScript data files for content
- **Assets**: `public/` contains images, PDFs, and static assets

### Key Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Component library

### Key Files
- `src/app/victor-cv/page.tsx` - Main CV page component
- `src/components/` - Individual section components (Hero, Timeline, Projects, etc.)
- `src/data/timelineData.ts` - Timeline/experience data
- `public/img/` - Image assets
- `public/data/CV-2023.pdf` - Downloadable resume

### Development Workflow
The project uses Next.js App Router for routing and Tailwind CSS for styling. Components are modular and reusable. The CV content is data-driven through TypeScript files.