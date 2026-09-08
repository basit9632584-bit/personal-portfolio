/**
 * Shared Animation Variants — Centralized motion definitions
 * All components import from here for consistency.
 */

import { tokens } from './design-tokens';

/**
 * Standard fade-up entrance — used across all sections
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Fade from left — for left-column content
 */
export const fadeLeft = {
  hidden: { opacity: 0, x: -40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Fade from right — for right-column content
 */
export const fadeRight = {
  hidden: { opacity: 0, x: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Staggered container — orchestrates children
 */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/**
 * Name/headline entrance — slightly slower, more dramatic
 */
export const nameReveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Accent line expansion
 */
export const lineExpand = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

/**
 * Button entrance with spring
 */
export const buttonReveal = (index) => ({
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
      delay: index * 0.12,
    },
  },
});

/**
 * Pill/badge pop-in — for skill tags, stack items
 */
export const pillPop = (index) => ({
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.34, 1.56, 0.64, 1],
      delay: index * 0.06,
    },
  },
});

/**
 * Card entrance — standard for project/skill cards
 */
export const cardReveal = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Heading slide-in — for section headers
 */
export const headingSlide = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Hover lift — subtle elevation on interactive cards
 */
export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease: 'easeOut' },
};

/**
 * Button hover states
 */
export const buttonHoverPrimary = {
  scale: 1.04,
  boxShadow: tokens.shadows.shadowBtnHover,
  y: -2,
};

export const buttonHoverSecondary = {
  scale: 1.04,
  borderColor: 'rgba(217,119,6,0.70)',
  background: 'rgba(217,119,6,0.10)',
  y: -2,
};

/**
 * Button tap state
 */
export const buttonTap = { scale: 0.97 };

/**
 * Reduced motion variants — returns minimal animation
 * Use with: const variants = useReducedMotion() ? reduced : normal
 */
export const reducedMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

// Utility to create reduced-motion-safe variants
export function withReducedMotion(normalVariants) {
  // This is a placeholder - actual implementation uses useReducedMotion hook
  return normalVariants;
}