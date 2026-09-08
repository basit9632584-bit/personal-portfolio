import { useRef } from 'react';
import { motion } from 'framer-motion';
import { tokens } from '../lib/design-tokens';
import {
  fadeUp,
  nameReveal,
  lineExpand,
  buttonReveal,
  staggerContainer,
  buttonHoverPrimary,
  buttonHoverSecondary,
  buttonTap,
} from '../lib/animation-variants';
import { ParticleCanvas } from './shared/ParticleCanvas';
import { SectionContainer } from './shared/SectionContainer';
import heroImg from '../assets/hero.jpeg';

/* ================================================================
   GLOW ORBS — ambient depth behind hero content
   ================================================================ */
function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* top-left large orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '-15%',
          left: '-12%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* bottom-right orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: '-10%',
          right: '-8%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  );
}

/* ================================================================
   HERO COMPONENT
   ================================================================ */
export default function Hero() {
  const headerRef = useRef(null);

  return (
    <SectionContainer
      id="hero"
      ref={headerRef}
      ariaLabel="Hero section"
      ambientBackground={<GlowOrbs />}
      gridLines={true}
      vignette={true}
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', maxWidth: 'none', margin: 0 }}
    >
      <ParticleCanvas />

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'center',
          width: '100%',
        }}
        className="hero-grid"
      >
        {/* ── Left: Text content ── */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* — Badge pill — */}
          <motion.div variants={fadeUp}>
            <div className="label-pill">
              BS AI Student & Developer
            </div>
          </motion.div>

          {/* — Name — */}
          <motion.h1 variants={nameReveal} className="font-extrabold leading-none tracking-tight mb-2" style={{ fontSize: 'clamp(3.2rem, 8vw, 5.5rem)' }}>
            <span className="block bg-gradient-to-r from-[#FAFAFA] to-[#D1D1D1] bg-clip-text text-transparent">
              Abdul
            </span>
            <span className="block gradient-accent-full glow-amber">
              Basit.
            </span>
          </motion.h1>

          {/* — Amber accent line — */}
          <motion.div variants={lineExpand} className="origin-left mb-8 mt-6 accent-underline" />

          {/* — Tagline — */}
          <motion.p variants={fadeUp} className="mb-10 max-w-[520px]" style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)', fontStyle: 'italic', fontWeight: 300, color: tokens.colors.textSecondary, letterSpacing: '0.01em', lineHeight: 1.6 }}>
            <span style={{ color: 'rgba(245,158,11,0.7)', fontStyle: 'normal', fontWeight: 500 }}>"</span>
            Learn AI Before AI Learns You
            <span style={{ color: 'rgba(245,158,11,0.7)', fontStyle: 'normal', fontWeight: 500 }}>"</span>
          </motion.p>

          {/* — CTA Buttons — */}
          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#work"
              id="cta-view-work"
              variants={buttonReveal}
              custom={0}
              whileHover={buttonHoverPrimary}
              whileTap={buttonTap}
              className="btn-primary"
              style={{ padding: '16px 38px', fontSize: '1rem', letterSpacing: '0.025em' }}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ transition: 'transform 0.2s ease' }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              id="cta-lets-connect"
              variants={buttonReveal}
              custom={1}
              whileHover={buttonHoverSecondary}
              whileTap={buttonTap}
              className="btn-secondary"
              style={{ padding: '16px 38px', fontSize: '1rem', letterSpacing: '0.025em' }}
            >
              Let&apos;s Connect
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.a>
          </div>

          {/* — Subtle scroll indicator — */}
          <motion.div variants={fadeUp} className="mt-20 flex items-center gap-3" style={{ color: tokens.colors.textMuted }}>
            <motion.div
              style={{
                width: 1,
                height: 40,
                background: 'linear-gradient(180deg, transparent, rgba(217,119,6,0.5), transparent)',
              }}
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Glow behind image */}
          <div
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Photo container */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'relative',
              width: 'clamp(280px, 30vw, 420px)',
              height: 'clamp(280px, 30vw, 420px)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(217,119,6,0.25)',
              boxShadow: '0 0 60px rgba(217,119,6,0.15), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src={heroImg}
              alt="Abdul Basit"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
            {/* Amber corner accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.6), rgba(245,158,11,0.8), rgba(217,119,6,0.6), transparent)',
              }}
            />
          </motion.div>

          {/* Floating geometric accent near image */}
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="absolute"
            style={{ top: '10%', right: '5%', opacity: 0.15 }}
            animate={{ rotate: [0, 5, -3, 0], y: [0, -8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="10" y="10" width="40" height="40" rx="3" fill="none" stroke="#D97706" strokeWidth="1" />
            <rect x="20" y="20" width="20" height="20" rx="1" fill="none" stroke="#F59E0B" strokeWidth="0.6" />
          </motion.svg>
        </motion.div>
      </div>

      {/* === Responsive style === */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            align-items: center !important;
          }
        }
      `}</style>
    </SectionContainer>
  );
}
