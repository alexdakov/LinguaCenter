---
name: Lumina Academy
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f2'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424848'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0ef'
  outline: '#727878'
  outline-variant: '#c2c8c7'
  surface-tint: '#516161'
  primary: '#516161'
  on-primary: '#ffffff'
  primary-container: '#e0f2f1'
  on-primary-container: '#5e6f6e'
  inverse-primary: '#b8cac9'
  secondary: '#655b68'
  on-secondary: '#ffffff'
  secondary-container: '#ecdeee'
  on-secondary-container: '#6b616e'
  tertiary: '#526069'
  on-tertiary: '#ffffff'
  tertiary-container: '#e2f1fc'
  on-tertiary-container: '#606e77'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e6e5'
  primary-fixed-dim: '#b8cac9'
  on-primary-fixed: '#0e1e1e'
  on-primary-fixed-variant: '#3a4a49'
  secondary-fixed: '#ecdeee'
  secondary-fixed-dim: '#cfc2d2'
  on-secondary-fixed: '#201924'
  on-secondary-fixed-variant: '#4d4450'
  tertiary-fixed: '#d6e5ef'
  tertiary-fixed-dim: '#bac9d3'
  on-tertiary-fixed: '#0f1d25'
  on-tertiary-fixed-variant: '#3b4951'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 64px
  element-gap: 24px
  section-margin: 120px
  gutter: 32px
---

## Brand & Style

This design system is built on a philosophy of "Luminous Clarity." It targets discerning learners who seek a premium, stress-free educational environment. The aesthetic is a fusion of **High-Key Minimalism** and **Soft Modernism**, prioritizing cognitive ease and emotional well-being.

The interface should feel like a sun-drenched, quiet studio. We achieve this through extreme whitespace—often exceeding standard padding by 50%—to allow the content to breathe. The tone is welcoming and professional, using a "lighthearted-premium" approach where the sophistication comes from the restraint of the layout and the gentle optimism of the color palette. Photography should always feature natural, diffused sunlight and clean, uncluttered environments.

## Colors

The palette is "Pastel Bright," utilizing high-luminance, low-saturation hues that provide a sense of freshness without visual fatigue.

- **Primary (Mint):** Used for primary actions and success states. It represents growth and clarity.
- **Secondary (Lavender):** Used for creative elements, secondary buttons, and language categories.
- **Tertiary (Sky Blue):** Used for informational accents and progress tracking.
- **Accent (Peach):** Used sparingly for highlighting special offers or personal achievements.
- **Base:** The background must remain `#FFFFFF` to maintain the "airy" quality. Surfaces should avoid pure grays; use very faint tints of the primary or secondary colors for container backgrounds (e.g., a 2% opacity mint tint for a card surface).

## Typography

This design system utilizes **Plus Jakarta Sans** for its soft, friendly geometric terminals. The typographic hierarchy leans heavily on light weights (300) for large displays to maintain a sophisticated, airy feel.

To enhance readability and the premium aesthetic:
- **Generous Letter Spacing:** Apply `0.01em` to `0.02em` tracking on body text.
- **Micro-Labels:** Use uppercase for small labels with increased tracking (`0.08em`) to create a structured, architectural look.
- **Contrast:** High-contrast color usage is avoided; text should be a deep charcoal (`#2D3436`) rather than pure black to keep the visual "weight" light.

## Layout & Spacing

The layout philosophy is defined by **Extreme Proximity and Wide Voids**. We use a 12-column fixed grid for desktop (max-width 1280px) to ensure content remains centered and focused, surrounded by wide negative margins.

- **Vertical Rhythm:** Sections are separated by large 120px+ margins to prevent the interface from feeling crowded.
- **Internal Spacing:** Components use a consistent 8px scale, but "airy" padding (usually 32px or 48px) is preferred for card internals and modals.
- **Alignment:** Left-aligned headers are preferred, with plenty of "white-out" space on the right to lead the eye.

## Elevation & Depth

This design system rejects heavy borders and harsh dividers. Depth is created through **Atmospheric Shadows** and **Tonal Layering**.

- **Shadows:** Use extremely diffused, large-radius shadows. For example: `0 20px 40px rgba(0,0,0,0.04)`. Shadows should feel like a soft glow rather than a physical drop.
- **Dividers:** When a separation is necessary, use a 1px line with a color no darker than `#F1F1F1`.
- **Surfaces:** Use "Tinted Whites." A background surface might be pure white, while a card sitting on top uses a very subtle gradient from white to a 1% saturation of the Primary Mint.

## Shapes

The shape language is organic and approachable. We use large corner radii (starting at 12px) to remove any "sharpness" from the digital experience.

- **Cards/Containers:** 24px corner radius for a soft, pillow-like appearance.
- **Inputs:** 12px corner radius.
- **Buttons:** Pill-shaped (fully rounded) for primary actions to distinguish them from content containers.
- **Iconography:** Use 1.5pt or 2pt stroke weights with rounded caps and joins.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Mint background with deep charcoal text. No shadow, or a very faint mint-tinted glow on hover.
- **Secondary:** Transparent background with a 1.5px Lavender border and Lavender text.
- **Tertiary/Ghost:** Text-only with an underline that appears on hover, utilizing a Sky Blue accent.

### Cards
- Surfaces should be white with a 24px radius and a soft atmospheric shadow. No border.
- Headers within cards should have 8px more padding at the top than the bottom to create a "lifted" look.

### Input Fields
- Inputs use a very light Sky Blue background (`#F5F9FF`) instead of a border. 
- On focus, the background turns white and a subtle Sky Blue 1px glow appears.

### Chips & Tags
- Used for language levels (e.g., "A1 Beginner").
- Small, 12px radius, with high-key pastel backgrounds matching the category (Lavender for French, Mint for Italian).

### Progress Indicators
- Thin (4px) horizontal bars with rounded ends.
- The "track" is a very light gray, while the "indicator" is a soft gradient of Primary Mint to Sky Blue.