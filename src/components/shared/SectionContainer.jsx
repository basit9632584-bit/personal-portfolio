/**
 * SectionContainer — Base layout wrapper for all sections
 * Provides consistent background, grid, padding, and ambient effects
 */

import { motion } from 'framer-motion';
import { tokens } from '../../lib/design-tokens';
import { fadeUp, staggerContainer } from '../../lib/animation-variants';

export function SectionContainer({
  id,
  children,
  className = '',
  style = {},
  ariaLabel,
  ambientBackground,
  gridLines = true,
  vignette = false,
}) {
  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: tokens.colors.bgPrimary,
        fontFamily: tokens.fonts.sans,
        padding: 'clamp(64px, 10vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      aria-label={ariaLabel}
    >
      {/* Ambient background radials */}
      {ambientBackground && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {ambientBackground}
        </div>
      )}

      {/* Grid lines */}
      {gridLines && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(217,119,6,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,119,6,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            zIndex: 0,
          }}
        />
      )}

      {/* Vignette edges */}
      {vignette && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #0A0A0A 100%)',
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: gridLines || ambientBackground || vignette ? 2 : 1,
          maxWidth: 1152,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 64px)',
          ...style,
        }}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * SectionHeader — Consistent section heading with label pill, title, accent line, and optional badge
 */
export function SectionHeader({ label, titleLines, badge, inView = true, ref }) {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      {/* Label pill */}
      <motion.div variants={fadeUp}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: tokens.radii.full,
            border: '1px solid rgba(217,119,6,0.28)',
            background: 'rgba(217,119,6,0.07)',
            fontSize: '0.70rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: tokens.colors.accentBright,
            fontFamily: tokens.fonts.sans,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: tokens.colors.accentBright,
              boxShadow: `0 0 6px ${tokens.colors.accentBright}`,
            }}
          />
          {label}
        </div>
      </motion.div>

      {/* Heading + optional badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <motion.div variants={fadeUp}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            {titleLines.map((line, i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  ...(line.isAccent
                    ? {
                        background: `linear-gradient(135deg, ${tokens.colors.accentBright} 0%, ${tokens.colors.accent} 60%, ${tokens.colors.accentDim} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 24px rgba(217,119,6,0.35))',
                      }
                    : { color: tokens.colors.textPrimary }),
                }}
              >
                {line.text}
              </span>
            ))}
          </h2>
          {/* Amber underline */}
          <div
            style={{
              marginTop: 14,
              height: 3,
              width: 56,
              background: `linear-gradient(90deg, ${tokens.colors.accentBright}, ${tokens.colors.accent} 60%, transparent)`,
              borderRadius: 2,
              boxShadow: '0 0 10px rgba(217,119,6,0.55)',
            }}
          />
        </motion.div>

        {badge && <motion.div variants={fadeUp}>{badge}</motion.div>}
      </div>
    </motion.div>
  );
}