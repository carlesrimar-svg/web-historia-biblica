---
name: Biblical & Ancient Cartography Education
colors:
  surface: '#fff8f4'
  surface-dim: '#e2d8d0'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2ea'
  surface-container: '#f7ece4'
  surface-container-high: '#f1e6de'
  surface-container-highest: '#ebe1d9'
  on-surface: '#1f1b16'
  on-surface-variant: '#41484c'
  inverse-surface: '#352f2a'
  inverse-on-surface: '#f9efe7'
  outline: '#72787d'
  outline-variant: '#c1c7cd'
  surface-tint: '#3a637b'
  primary: '#204b62'
  on-primary: '#ffffff'
  primary-container: '#3a637b'
  on-primary-container: '#b4defa'
  inverse-primary: '#a3cce7'
  secondary: '#566424'
  on-secondary: '#ffffff'
  secondary-container: '#d9eb9b'
  on-secondary-container: '#5c6a29'
  tertiary: '#653e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#845409'
  on-tertiary-container: '#ffd09c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5e7ff'
  primary-fixed-dim: '#a3cce7'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#204b62'
  secondary-fixed: '#d9eb9b'
  secondary-fixed-dim: '#bdce82'
  on-secondary-fixed: '#171e00'
  on-secondary-fixed-variant: '#3f4c0d'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#fbba6a'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fff8f4'
  on-background: '#1f1b16'
  surface-variant: '#ebe1d9'
  canvas-parchment: '#FBF9F5'
  surface-parchment-soft: '#F5F1E9'
  surface-parchment-muted: '#EDE6DA'
  card-pure: '#FFFFFF'
  border-warm-subtle: '#E4DDD0'
  border-warm-accent: '#D1C4AF'
  water-azure: '#5588A3'
  water-shallow: '#8EAFC2'
  olive-deep: '#4C5B23'
  terracotta-earth: '#B85D38'
  desert-stone: '#8A7968'
typography:
  display-hero:
    fontFamily: Merriweather
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  display-hero-mobile:
    fontFamily: Merriweather
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Merriweather
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
  headline-lg-mobile:
    fontFamily: Merriweather
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Merriweather
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Merriweather
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  title-card:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
  lead:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 30px
  body-regular:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
  body-strong:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 26px
  body-italic:
    fontFamily: Merriweather
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system crafts an engaging, academic, and tactile digital workspace tailored for secondary school students (ages 13–17) exploring Biblical History and Historical Geography. The experience departs from dry, clinical encyclopedias to evoke the sensory atmosphere of historical field expeditions, classical watercolor cartography, and Mediterranean terrain, paired with modern digital UI clarity.

The aesthetic fuses **Warm Editorial Minimalism** with **Tactile Cartographic Nuance**:
- **Warm Parchment Ambience**: Canvas backgrounds utilize soft off-white and gentle aged-paper undertones (`#FBF9F5` and `#F5F1E9`) that eliminate digital eye strain and establish a physical, scholarly atmosphere.
- **Card-Centric Modularity**: Pure white cards (`#FFFFFF`) with whisper-thin, warm outlines and soft, diffused atmospheric shadows lift learning objects, map viewports, and quiz blocks above the parchment canvas.
- **Contemporary Discovery**: Crisp sans-serif functional text pairs with distinguished, literary display typography, bridging timeless classical antiquity with intuitive, dynamic learning patterns for secondary students.

## Colors

The palette draws directly from Mediterranean natural landscapes, realistic historical watercolor maps, and tactile parchment:

- **Primary (`#3A637B` - Mediterranean Watercolor Slate)**: Evokes the Sea of Galilee, the Jordan river basin, and nautical cartography. Used for primary interactions, key navigation anchors, timeline milestones, and focused states.
- **Secondary (`#6C7B38` - Ancient Olive Grove)**: Echoes the hillside terraces, Mount of Olives vegetation, and fertile Galilean plains. Functions as a secondary accent for success states, completed educational modules, and nature-focused geographical callouts.
- **Tertiary (`#C48A3F` - Golden Ochre / Illuminated Sun)**: Inspired by antique compass roses, temple masonry, and gilded parchment accents. Serves as visual focus highlights, badges, and didactic callout indicators.
- **Neutral (`#2B2621` - Iron Gall Ink)**: Replaces harsh digital black with a rich, historic ink tone. Delivers high contrast and readable typography across parchment and pure white card surfaces.

### Semantic Layers & Surfaces
- Canvas root relies on `canvas-parchment` (`#FBF9F5`) with contextual sections framed by `surface-parchment-soft` (`#F5F1E9`).
- Interactive layers, quiz questionnaires, and data tables float on `card-pure` (`#FFFFFF`) to maximize legibility and visual elevation.

## Typography

The typographic pairing balances historical prestige with modern adolescent legibility:

- **Display & Headings (Merriweather)**: Provides a warm, literary serif voice reminiscent of vintage atlases and illuminated manuscripts, without sacrificing on-screen digital sharpness. Used for chapter headers, region titles (e.g., *Galilea*, *Judea*), and philosophical introductory quotes.
- **Interface, Didactic Content & Questions (Plus Jakarta Sans)**: Delivers clear, friendly, and accessible sans-serif shapes. Its open apertures and modern metrics ensure high reading comfort during intense study, map analysis, and timed quiz interactions.
- **Topographic & Metric Annotations**: Region labels and cartographic coordinates use uppercase `label-caps` with wide letter tracking (`0.08em`), reflecting classical engraved maps.

## Layout & Spacing

Layouts follow a fluid 12-column grid constrained to an ergonomic maximum content reading width of `1200px` for mixed media/atlas dashboards, and `768px` for focused reading and assessment modules.

- **Desktop (1024px+)**: 12 columns with `2rem` gutters and `3rem` canvas margins. Allows side-by-side exploration (e.g., interactive watercolor map alongside region-specific didactic cards).
- **Tablet (768px - 1023px)**: 8 columns with `1.5rem` gutters and `2rem` outer margins. Data tables gain horizontal scrolling; side-by-side modules collapse into stacked thematic sections.
- **Mobile (<768px)**: 4 columns with `1rem` gutters and `1rem` outer margins. Visual resources and 16:9 media cards break bleed to full width, reserving margins for text containers.
- **Vertical Rhythm**: Paragraphs enforce `space-md` gaps. Sections maintain `space-2xl` breathing room to avoid overwhelming students with historical density.

## Elevation & Depth

Visual depth is organic and luminous, eschewing synthetic tech-style glows in favor of soft, natural sunlit shadows and crisp tactile borders:

- **Flat Canvas Layer (Base)**: `#FBF9F5` (Parchment base) with subtle topographic contour patterns or seamless watercolor wash textures at low opacity (3–5%).
- **Low Elevation (Content Cards, Table Containers)**: Floating `#FFFFFF` cards defined by a delicate border `1px solid #E4DDD0` and an ambient warm shadow: `0 2px 8px -2px rgba(43, 38, 33, 0.04), 0 4px 16px -4px rgba(43, 38, 33, 0.06)`.
- **Medium Elevation (Active Map Overlays, Callouts, Quizzes)**: Raised interaction layers using a warmer shadow tinted with ochre undertones: `0 8px 24px -6px rgba(58, 99, 123, 0.08), 0 4px 12px -2px rgba(43, 38, 33, 0.05)`, edged with `border-warm-accent` (`#D1C4AF`).
- **High Elevation (Interactive Modals, 3D Viewport Lightboxes)**: `0 20px 40px -12px rgba(43, 38, 33, 0.16)` with a backdrop blur overlay (`backdrop-filter: blur(4px)`) tinted with `rgba(245, 241, 233, 0.75)`.

## Shapes

The interface balances historical warmth with modern UI conventions through rounded level `2`:

- **Standard Containers & Cards**: Defined with `0.5rem` (`8px`) to `1rem` (`16px`) corners, creating an inviting, friendly presence for secondary school students.
- **Buttons, Badges & Interactive Chips**: Retain `0.5rem` (`8px`) or full pill styling (`9999px`) for quick tactile tap targets in quizzes and interactive map legends.
- **Cartographic Visuals & Media Containers**: Feature a double-border motif inspired by classical atlas framing: an outer `1px solid #D1C4AF` line separated by `4px` of parchment spacing from the inner media container.

## Components

### Buttons
- **Primary Button**: Solid Mediterranean slate (`#3A637B`) background, pure white text, `0.5rem` border radius, subtle warm shadow. Hover state shifts to `#2E5166` with a slight `translateY(-1px)`.
- **Secondary Button**: Crisp white card surface (`#FFFFFF`) with a `1px solid #D1C4AF` border, iron gall ink text (`#2B2621`), and hover fill in `surface-parchment-soft` (`#F5F1E9`).
- **Accent / Interactive Action**: Olive green (`#6C7B38`) background with white text, utilized for quiz validation and completion triggers.

### Didactic Callout Cards (Visual Resources & 3D Media)
- Framed in `#FFFFFF` with an ivory-tinted left border (`4px solid #C48A3F`).
- Header displays the thematic emoji badge (`💡`) accompanied by `label-caps` in golden ochre (`#C48A3F`).
- Dedicated `16:9` ratio container for hyperrealistic renders and videos, complete with a thin inset map border and caption text in `Merriweather Italic`.

### Assessment & Quiz Selectors
- **Multiple Choice Options**: Block options styled as individual rounded cards (`rounded-lg`, `padding: 1rem 1.25rem`), `1px solid #E4DDD0` on white background.
- **Hover & Selected States**: Hover transitions background to `surface-parchment-soft`. Selected state applies a `2px solid #3A637B` border and a light slate tint (`rgba(58, 99, 123, 0.06)`).
- **Feedback States**: Correct answers render in soft olive (`#6C7B38` border and light green fill); incorrect selections highlight in gentle terracotta (`#B85D38`).

### Data & Regional Comparison Tables
- Built inside elevated white cards with soft corner clipping.
- **Header Row**: Rendered with `surface-parchment-soft` (`#F5F1E9`) background, bold `Plus Jakarta Sans` labels, and a distinct lower divider `1px solid #D1C4AF`.
- **Key Cells (Column 1)**: Displayed in `Merriweather Bold` to distinguish geographic territories (Galilea, Samaria, Judea). Alternate rows receive a light parchment zebra tint.

### Topographic Chips & Map Filters
- Pill-shaped tags (`border-radius: 9999px`) with `0.25rem 0.75rem` padding.
- Neutral state: `surface-parchment-muted` (`#EDE6DA`) with `#2B2621` text.
- Active cartographic filter: `#3A637B` fill with white text and an integrated miniature vector icon representing elevation, water, or cities.