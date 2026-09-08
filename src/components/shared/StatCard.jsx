/**
 * StatCard — Reusable stat display card
 * Used by About section
 */

import { motion } from 'framer-motion';
import { tokens } from '../../lib/design-tokens';
import { fadeUp } from '../../lib/animation-variants';

export function StatCard({ icon, value, label, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay }}
      whileHover={{ scale: 1.03, y: -4 }}
      style={{
        background: `linear-gradient(135deg, ${tokens.colors.bgElevated} 0%, ${tokens.colors.bgSecondary} 100%)`,
        border: `1px solid ${tokens.colors.borderSubtle}`,
        borderRadius: tokens.radii.xl,
        padding: '28px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        boxShadow: tokens.shadows.card,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = tokens.colors.borderActive;
        e.currentTarget.style.boxShadow = tokens.shadows.cardHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = tokens.colors.borderSubtle;
        e.currentTarget.style.boxShadow = tokens.shadows.card;
      }}
    >
      {/* Corner glow */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon badge */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: tokens.radii.md,
          background: 'rgba(217,119,6,0.10)',
          border: `1px solid rgba(217,119,6,0.22)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          marginBottom: 4,
        }}
      >
        {icon}
      </div>

      <span
        style={{
          fontFamily: tokens.fonts.sans,
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          background: `linear-gradient(135deg, ${tokens.colors.accentBright} 0%, ${tokens.colors.accent} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
        }}
      >
        {value}
      </span>

      <span
        style={{
          fontFamily: tokens.fonts.sans,
          fontSize: '0.82rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: tokens.colors.textSecondary,
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}