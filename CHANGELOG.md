# Changelog

All notable changes to the peace project will be documented in this file.

## [0.1.1] - 2024-03-28

### Added
- GitHub Pages deployment configuration
- Root redirect to default locale (/en)
- Proper base path handling for GitHub Pages

### Changed
- Simplified Discord server messaging across all languages
- Fixed Link component usage to follow Next.js best practices
- Optimized internalization setup for static export

### Technical
- Set up GitHub Actions workflow for automated deployment
- Configured Next.js for static HTML export
- Added post-build script for handling redirects
- Added .nojekyll file to prevent GitHub Pages Jekyll processing

## [0.1.0] - 2024-03-27

### Added
- Initial project setup with Next.js, TypeScript, and Tailwind CSS
- Internationalization support for multiple languages (en, uk, ru, zh, ar, es, fr, de, he)
- Basic website structure with three main sections:
  - Common Ground
  - Current Conflicts
  - Take Action
- Homepage with minimalist design and clear message
- Take Action page with inner peace focus
- Mobile-responsive header with peace message
- Language switcher component
- Basic routing structure
- Project documentation (README, CHANGELOG, CONTRIBUTING)

### Technical
- Set up Next.js 14 with App Router
- Implemented next-intl for internationalization
- Added Tailwind CSS for styling
- Created base component structure
- Set up development environment configurations
