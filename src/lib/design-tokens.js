/**
 * Shared Design Tokens — Single source of truth for the entire portfolio
 * All colors, spacing, typography, and animation values live here.
 */

export const tokens = {
  // Color palette — Amber/Gold on near-black
  colors: {
    // Background scale
    bgPrimary: '#0A0A0A',
    bgSecondary: '#111111',
    bgElevated: '#1A1A1A',
    bgSurface: '#141414',

    // Accent — Amber Gold
    accent: '#D97706',
    accentBright: '#F59E0B',
    accentDim: '#B45309',
    accentGlow: 'rgba(217, 119, 6, 0.18)',
    accentGlowLg: 'rgba(217, 119, 6, 0.08)',

    // Text scale
    textPrimary: '#FAFAFA',
    textSecondary: '#A3A3A3',
    textMuted: '#525252',
    textAccent: '#D97706',

    // Border
    borderSubtle: 'rgba(217, 119, 6, 0.12)',
    borderActive: 'rgba(217, 119, 6, 0.40)',

    // Semantic
    success: '#4ade80',
    successBg: 'rgba(34, 197, 94, 0.10)',
    successBorder: 'rgba(34, 197, 94, 0.25)',
  },

  // Typography
  fonts: {
    sans: "'Space Grotesk', system-ui, sans-serif",
    serif: 'Georgia, serif',
  },

  // Shadows & Glows
  shadows: {
    glowAmberSm: '0 0 20px rgba(217, 119, 6, 0.25)',
    glowAmberMd: '0 0 40px rgba(217, 119, 6, 0.30)',
    glowAmberLg: '0 0 80px rgba(217, 119, 6, 0.12)',
    shadowBtn: '0 8px 32px rgba(217, 119, 6, 0.30), 0 2px 8px rgba(0,0,0,0.6)',
    shadowBtnHover: '0 12px 48px rgba(217, 119, 6, 0.45), 0 4px 16px rgba(0,0,0,0.7)',
    card: '0 4px 24px rgba(0,0,0,0.45)',
    cardHover: '0 12px 48px rgba(217, 119, 6, 0.14), 0 4px 16px rgba(0,0,0,0.5)',
  },

  // Transitions & Easing
  transitions: {
    easeStandard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeSpring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
    durationFast: '150ms',
    durationNormal: '300ms',
    durationSlow: '500ms',
  },

  // Border radius
  radii: {
    sm: '6px',
    md: '10px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    full: '9999px',
  },

  // Spacing scale (8px base)
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    popover: 400,
    tooltip: 500,
  },
};