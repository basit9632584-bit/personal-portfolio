/**
 * SectionDivider — Reusable animated divider between sections
 * Used by About, Skills, Projects, Contact sections
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function SectionDivider({ className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        maxWidth: 1152,
        margin: '0 auto',
        padding: '0 clamp(24px, 5vw, 64px)',
      }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.25), transparent)',
          transformOrigin: 'left',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 45 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          width: 8,
          height: 8,
          border: '1.5px solid rgba(217,119,6,0.5)',
          flexShrink: 0,
        }}
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.25), transparent)',
          transformOrigin: 'right',
        }}
      />
    </div>
  );
}