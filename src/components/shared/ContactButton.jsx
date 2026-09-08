/**
 * ContactButton — Reusable contact link button with consistent styling
 */

import { motion } from 'framer-motion';
import { tokens } from '../../lib/design-tokens';

export function ContactButton({ id, href, label, icon, delay = 0 }) {
  const isExternal = href.startsWith('http');

  return (
    <motion.a
      id={id}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{
        scale: 1.04,
        y: -3,
        boxShadow: '0 12px 40px rgba(217,119,6,0.28), 0 4px 16px rgba(0,0,0,0.6)',
        borderColor: 'rgba(217,119,6,0.60)',
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '15px 30px',
        borderRadius: 14,
        border: '1px solid rgba(217,119,6,0.28)',
        background: 'rgba(217,119,6,0.06)',
        color: tokens.colors.textSecondary,
        fontFamily: tokens.fonts.sans,
        fontSize: '0.92rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        textDecoration: 'none',
        backdropFilter: 'blur(10px)',
        transition: 'color 0.25s ease, background 0.25s ease',
        cursor: 'pointer',
        minWidth: 200,
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = tokens.colors.textPrimary;
        e.currentTarget.style.background = 'rgba(217,119,6,0.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = tokens.colors.textSecondary;
        e.currentTarget.style.background = 'rgba(217,119,6,0.06)';
      }}
    >
      <span style={{ color: tokens.colors.accentBright, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        {icon}
      </span>
      {label}
    </motion.a>
  );
}