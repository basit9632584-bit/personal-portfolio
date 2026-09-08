/**
 * SkillPill — Reusable skill/badge pill component
 * Used by Skills and Projects sections
 */

import { motion } from 'framer-motion';
import { tokens } from '../../lib/design-tokens';
import { pillPop } from '../../lib/animation-variants';

export function SkillPill({ label, index, variant = 'skill' }) {
  const isStack = variant === 'stack';

  return (
    <motion.span
      variants={pillPop}
      custom={index}
      whileHover={isStack ? undefined : { scale: 1.06, borderColor: 'rgba(217,119,6,0.50)' }}
      style={{
        display: 'inline-block',
        padding: isStack ? '4px 11px' : '5px 13px',
        borderRadius: isStack ? 5 : 6,
        fontSize: isStack ? '0.73rem' : '0.78rem',
        fontWeight: 500,
        fontFamily: tokens.fonts.sans,
        letterSpacing: '0.02em',
        color: isStack ? tokens.colors.textMuted : tokens.colors.textSecondary,
        background: isStack ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.03)',
        border: isStack ? '1px solid rgba(217,119,6,0.13)' : `1px solid ${tokens.colors.borderSubtle}`,
        cursor: isStack ? 'default' : 'default',
        transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        if (!isStack) {
          e.currentTarget.style.color = tokens.colors.textPrimary;
          e.currentTarget.style.background = 'rgba(217,119,6,0.08)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isStack) {
          e.currentTarget.style.color = tokens.colors.textSecondary;
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
        }
      }}
    >
      {label}
    </motion.span>
  );
}