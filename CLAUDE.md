# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses Parcel bundler for development and building:

- `npm run dev` - Start development server with auto-reload for victorcv.html
- `npm run build` - Build the project (specifically pages/VictorCV/victorcv.html)
- `npm run start` - Build and then start development server

Note: There are no test or lint commands configured in this project.

## Project Architecture

This is a personal CV/resume website project with the following structure:

### Core Structure
- **Main landing page**: `index.html` - Contains a dual-CV selector for Victor and Bo Kjelde
- **Victor's CV**: `pages/VictorCV/victorcv.html` - The main resume page built with Parcel
- **Styling**: `css/` directory contains modular CSS files including timeline, arrow, and selection styles
- **Assets**: `img/` contains profile pictures and project images, `data/` contains PDF version of CV

### Key Files
- `package.json` - Uses Parcel bundler v1.12.4 for development
- `pages/VictorCV/victorcv.html` - Main CV page that gets built by Parcel
- `css/main.css` - Primary stylesheet
- `css/timeline.css` - Timeline component styling (compiled from SASS)
- `css/arrow.css` - Arrow component styling (compiled from SCSS)

### Development Workflow
The project uses Parcel to bundle and serve the Victor CV page specifically. The main `index.html` serves as a landing page that links to the bundled CV page. The build process focuses on `pages/VictorCV/victorcv.html` as the entry point.

### Documentation
The `doc/` folder contains HTML5 Boilerplate documentation, indicating this project was scaffolded from HTML5 Boilerplate but has been customized for CV purposes.