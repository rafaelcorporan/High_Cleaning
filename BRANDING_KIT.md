# High Cleaning - Brand Identity Kit

**Project:** CrystalCore Cleaning Systems  
**Brand Name:** High Cleaning  
**Tagline:** Real Cleaning Solutions  
**Industry:** Corporate Cleaning Services  
**Location:** Newark, New Jersey  
**Last Updated:** November 2025

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Logo & Visual Identity](#logo--visual-identity)
5. [Gradients](#gradients)
6. [Spacing & Layout](#spacing--layout)
7. [Shadows & Depth](#shadows--depth)
8. [Border Radius](#border-radius)
9. [Transitions & Animations](#transitions--animations)
10. [Brand Voice & Messaging](#brand-voice--messaging)
11. [Contact Information](#contact-information)
12. [Usage Guidelines](#usage-guidelines)

---

## Brand Overview

**High Cleaning** is a premium corporate cleaning service provider specializing in customized cleaning solutions for businesses across New Jersey. The brand positions itself as a professional, reliable, and modern cleaning service with a focus on:

- **Professionalism:** Certified and insured professionals
- **Customization:** 21 service tiers tailored to facility size and needs
- **Sustainability:** Eco-friendly cleaning products
- **Availability:** 24/7 emergency services
- **Quality:** Real cleaning solutions, not just surface-level service

### Target Audience
- Small corporations (1,000–3,000 sq. ft.)
- Medium corporations (3,000–8,000 sq. ft.)
- Large corporations (8,000–20,000+ sq. ft.)

---

## Color Palette

### Primary Colors

| Color Name | Hex Code | HSL | RGB | Usage |
|------------|----------|-----|-----|-------|
| **Primary Blue** | `#272EF5` | `hsl(237, 91%, 56%)` | `rgb(39, 46, 245)` | Primary brand color, CTAs, accents |
| **Dark Blue** | `#070C9C` | `hsl(237, 92%, 32%)` | `rgb(7, 12, 156)` | Hero backgrounds, depth |
| **Accent Green** | `#05ED43` | `hsl(130, 98%, 47%)` | `rgb(5, 237, 67)` | Secondary accent, success states |

### Neutral Colors

| Color Name | Hex Code | HSL | RGB | Usage |
|------------|----------|-----|-----|-------|
| **White** | `#FFFFFF` | `hsl(0, 0%, 100%)` | `rgb(255, 255, 255)` | Backgrounds, text on dark |
| **Off-White** | `#F7FCFC` | `hsl(180, 20%, 98%)` | `rgb(247, 252, 252)` | Page backgrounds |
| **Light Gray** | `#EDF5F5` | `hsl(180, 15%, 95%)` | `rgb(237, 245, 245)` | Section backgrounds, borders |
| **Gray** | `#8FA3A3` | `hsl(180, 10%, 60%)` | `rgb(143, 163, 163)` | Body text, secondary text |
| **Dark Gray** | `#364040` | `hsl(180, 15%, 25%)` | `rgb(54, 64, 64)` | Headings, primary text |
| **Black** | `#1A2626` | `hsl(180, 15%, 10%)` | `rgb(26, 38, 38)` | Emphasis text, headings |

### Color Psychology

- **Blue (#272EF5):** Trust, professionalism, reliability, cleanliness
- **Green (#05ED43):** Eco-friendly, fresh, growth, health
- **Blue-to-Green Gradient:** Modern, dynamic, comprehensive solutions

---

## Typography

### Font Families

#### Primary Font: **Inter**
- **Usage:** Body text, paragraphs, form inputs, general UI elements
- **Weights Available:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- **Characteristics:** Clean, modern, highly legible sans-serif
- **Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800`

#### Display Font: **Space Grotesk**
- **Usage:** Headings (H1-H6), logo, navigation, CTAs, pricing tiers
- **Weights Available:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Characteristics:** Geometric, bold, attention-grabbing
- **Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700`

### Font Sizes (Responsive)

| Element | CSS Variable | Min Size | Max Size | Usage |
|---------|--------------|----------|----------|-------|
| **Hero Title** | `--fs-hero` | 2.79rem | 5.02rem | Main hero headings |
| **H1** | `--fs-h1` | 2.23rem | 3.91rem | Page titles |
| **H2** | `--fs-h2` | 1.95rem | 3.35rem | Section headings |
| **H3** | `--fs-h3` | 1.67rem | 2.51rem | Subsection headings |
| **H4** | `--fs-h4` | 1.40rem | 1.95rem | Card titles |
| **Body Large** | `--fs-body-lg` | 1.26rem | 1.40rem | Intro text, descriptions |
| **Body** | `--fs-body` | 1.12rem | 1.26rem | Standard body text |
| **Small** | `--fs-small` | 0.98rem | 1.12rem | Captions, labels |

### Typography Rules

1. **All headings (H1-H6):** UPPERCASE, Space Grotesk, Bold (700)
2. **Line height:** 1.2 for headings, 1.6 for body text
3. **Body text:** Inter, Regular (400) or Medium (500)
4. **Button text:** Inter, Semi-Bold (600)
5. **Navigation:** Inter, Medium (500)

---

## Logo & Visual Identity

### Logo Description

The High Cleaning logo consists of:
1. **Icon:** A star/sparkle symbol with a plus sign in the center
2. **Wordmark:** "High Cleaning" in Space Grotesk, uppercase, bold

### Logo SVG Specifications

```svg
<svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#272EF5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#05ED43;stop-opacity:1" />
    </linearGradient>
  </defs>
  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
    fill="url(#logoGradient)" stroke="url(#logoGradient)" stroke-width="1.5" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M12 8v8M8 12h8" stroke="white" stroke-width="2" stroke-linecap="round" />
</svg>
```

### Logo Variations

1. **Full Logo:** Icon + Wordmark (primary usage)
2. **Icon Only:** For favicons, social media avatars, app icons
3. **Wordmark Only:** For text-heavy contexts

### Logo Colors

- **Primary:** Blue-to-Green gradient (`#272EF5` → `#05ED43`)
- **Monochrome:** White on dark backgrounds, Dark Gray on light backgrounds
- **Minimum Size:** 120px width for full logo, 32px for icon only

### Clear Space

Maintain a clear space around the logo equal to the height of the star icon on all sides.

---

## Gradients

### Primary Gradient
```css
linear-gradient(135deg, hsl(237, 91%, 56%) 0%, hsl(130, 98%, 47%) 100%)
```
**Usage:** Buttons, CTAs, logo, pricing tier tabs, statistics section

### Hero Gradient
```css
linear-gradient(135deg, hsl(237, 92%, 32%) 0%, hsl(237, 91%, 56%) 50%, hsl(130, 98%, 47%) 100%)
```
**Usage:** Hero section backgrounds, large header areas

### Accent Gradient (Reversed)
```css
linear-gradient(135deg, hsl(130, 98%, 47%) 0%, hsl(237, 91%, 56%) 100%)
```
**Usage:** Hover states, alternative CTAs

### Overlay Gradient
```css
linear-gradient(135deg, rgba(39, 46, 245, 0.85) 0%, rgba(5, 237, 67, 0.75) 100%)
```
**Usage:** Image overlays, hero backgrounds with images

### Gradient Direction
- **Standard:** 135deg (diagonal, top-left to bottom-right)
- **Creates:** Dynamic, modern, forward-moving feel

---

## Spacing & Layout

### Spacing Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-xs` | 0.5rem (8px) | Tight spacing, icon gaps |
| `--spacing-sm` | 1rem (16px) | Standard element spacing |
| `--spacing-md` | 2rem (32px) | Card padding, section gaps |
| `--spacing-lg` | 4rem (64px) | Large section spacing |
| `--spacing-xl` | 6rem (96px) | Major section padding |
| `--spacing-2xl` | 8rem (128px) | Hero section padding |

### Layout Principles

1. **Max Content Width:** 1200px
2. **Container Padding:** 2rem (32px) on sides
3. **Grid Gaps:** 2rem (32px) for cards, 4rem (64px) for major sections
4. **Responsive Breakpoints:**
   - Mobile: < 768px
   - Tablet: 768px - 1024px
   - Desktop: > 1024px

---

## Shadows & Depth

### Shadow Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(0, 0, 0, 0.08)` | Subtle elevation, navbar |
| `--shadow-md` | `0 4px 16px rgba(0, 0, 0, 0.12)` | Cards, dropdowns |
| `--shadow-lg` | `0 8px 32px rgba(0, 0, 0, 0.16)` | Buttons, modals |
| `--shadow-xl` | `0 16px 48px rgba(0, 0, 0, 0.2)` | Hover states, emphasis |
| `--shadow-glow` | `0 0 40px rgba(39, 46, 245, 0.4)` | Brand glow effect, CTAs |

### Elevation Hierarchy

1. **Level 0:** Flat backgrounds (no shadow)
2. **Level 1:** Navbar, subtle cards (`shadow-sm`)
3. **Level 2:** Service cards, tier cards (`shadow-md`)
4. **Level 3:** Buttons, important elements (`shadow-lg`)
5. **Level 4:** Hover states, modals (`shadow-xl`)
6. **Special:** Brand glow for primary CTAs (`shadow-glow`)

---

## Border Radius

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 0.5rem (8px) | Small elements, badges |
| `--radius-md` | 1rem (16px) | Buttons, inputs, cards |
| `--radius-lg` | 1.5rem (24px) | Large cards, sections |
| `--radius-xl` | 2rem (32px) | Hero images, feature images |

### Roundness Philosophy
- **Modern but Professional:** Rounded corners create approachability while maintaining corporate credibility
- **Consistency:** Use the same radius for similar elements across the site

---

## Transitions & Animations

### Transition Speeds

| Variable | Value | Usage |
|----------|-------|-------|
| `--transition-fast` | 0.2s ease | Quick feedback (hover colors) |
| `--transition-base` | 0.3s ease | Standard transitions |
| `--transition-slow` | 0.5s ease | Smooth, noticeable changes |
| `--transition-bounce` | 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) | Playful, attention-grabbing |

### Animation Principles

1. **Hover States:** Always include smooth transitions (0.3s)
2. **Button Hovers:** Translate up 2px, increase shadow
3. **Card Hovers:** Translate up 5-10px, enhance shadow
4. **Icon Rotations:** 360deg rotation with scale (bounce easing)
5. **Fade-ins:** Use `fadeInUp` animation for scroll-triggered elements

### Key Animations

- **fadeInUp:** Elements fade in while moving up slightly
- **pulse:** Gentle pulsing for background elements
- **Ripple Effect:** Buttons have expanding circle on hover

---

## Brand Voice & Messaging

### Brand Personality

- **Professional:** Certified, insured, reliable
- **Modern:** Tech-forward, efficient, streamlined
- **Approachable:** Friendly, responsive, customer-focused
- **Trustworthy:** Transparent pricing, proven track record
- **Eco-Conscious:** Sustainable products, responsible practices

### Key Messages

1. **Tagline:** "Real Cleaning Solutions"
2. **Value Proposition:** "Trusted by corporations across New Jersey. From small offices to large facilities, we deliver exceptional cleaning services tailored to your needs with 21 customized service tiers."
3. **Differentiators:**
   - 21 customized service tiers
   - Certified & insured professionals
   - Eco-friendly cleaning products
   - 24/7 emergency services
   - Customized cleaning schedules

### Tone of Voice

- **Confident but not arrogant**
- **Clear and direct**
- **Professional but warm**
- **Solution-oriented**
- **Uppercase headings for emphasis**

---

## Contact Information

**Business Name:** High Cleaning  
**Phone:** +1 (347) 829-4952  
**Address:** 1040 18th Avenue, Newark, NJ  
**Service Hours:** 24/7 Emergency Services Available  
**Service Area:** New Jersey (corporate sector)

### Social Media Presence

- Facebook
- Twitter
- LinkedIn
- Instagram

---

## Usage Guidelines

### Do's ✓

- Use the blue-to-green gradient for primary CTAs and brand elements
- Maintain uppercase styling for all headings
- Use Space Grotesk for headings and Inter for body text
- Apply consistent spacing using the spacing scale
- Use shadows to create depth hierarchy
- Implement smooth transitions on interactive elements
- Keep the logo clear and unobstructed

### Don'ts ✗

- Don't use colors outside the defined palette
- Don't mix heading styles (always uppercase)
- Don't use fonts other than Inter and Space Grotesk
- Don't stretch or distort the logo
- Don't place the logo on busy backgrounds without proper contrast
- Don't use inconsistent border radius values
- Don't create jarring animations (keep transitions smooth)

### Accessibility

- **Color Contrast:** Ensure WCAG AA compliance (4.5:1 for body text, 3:1 for large text)
- **Focus States:** All interactive elements must have visible focus indicators
- **Alt Text:** All images must have descriptive alt text
- **Semantic HTML:** Use proper heading hierarchy and semantic elements
- **Keyboard Navigation:** All functionality accessible via keyboard

### File Naming Conventions

- **Images:** `lowercase-with-hyphens.png` (e.g., `hero-background.png`)
- **CSS Classes:** `kebab-case` (e.g., `.service-card`)
- **JavaScript:** `camelCase` for variables and functions

---

## Service Tiers Overview

### Small Corporations (1,000–3,000 sq. ft.)
- Tiers 1-7
- 1-2 staff members
- Basic to comprehensive cleaning

### Medium Corporations (3,000–8,000 sq. ft.)
- Tiers 8-14
- 2-3 staff members
- Enhanced services and frequency

### Large Corporations (8,000–20,000+ sq. ft.)
- Tiers 15-21
- 3-5+ staff members
- Premium, comprehensive solutions

---

## Core Services

1. **Office Cleaning** - Daily and weekly workspace maintenance
2. **Floor Care** - Stripping, waxing, polishing, carpet shampooing
3. **Window Cleaning** - Professional interior window cleaning
4. **Deep Cleaning** - Comprehensive initial or periodic resets
5. **Targeted Area Cleaning** - Specific zone focus
6. **Emergency Response** - 24/7 urgent cleaning services
7. **Disinfection Services** - Health-focused sanitization
8. **Green Cleaning** - Eco-friendly solutions

---

## Brand Assets Location

All brand assets are located in the `/img` folder:

- **Hero Images:** `Formal_Lady.png`, `Lady-2.png`
- **Service Images:** `OFFICE.png`, `DEEP.png`, `Window.png`, `floor-care.png`, `Emer.png`
- **Feature Images:** `certified-professionals.png`, `eco-friendly.png`, `schedules.png`
- **Team Images:** `team-1.png`, `team-2.png`, `team-4.png`, `teams.png`
- **Icons:** `CA.png`, `CE.png`, `CI.png`, `RF.png`

---

## Technical Specifications

### CSS Variables Reference

All brand colors, typography, spacing, and design tokens are defined as CSS custom properties in `styles.css` under the `:root` selector. This ensures consistency and makes global updates simple.

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)
- SVG for icons and logo

### Performance

- Optimized images (compressed PNG files)
- Minimal external dependencies
- Efficient CSS with reusable classes
- Smooth animations using CSS transforms

---

## Version History

- **v1.0 (November 2025):** Initial brand identity established
  - Blue and Green color scheme
  - Inter + Space Grotesk typography
  - 21 service tier structure
  - Responsive design system

---

## Contact for Brand Guidelines

For questions about brand usage or to request additional assets, please contact the marketing team at High Cleaning.

---

**© 2025 High Cleaning. All rights reserved. | Licensed & Insured**
