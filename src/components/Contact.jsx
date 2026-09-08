import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tokens } from '../lib/design-tokens';
import { SectionContainer } from './shared/SectionContainer';
import { SectionDivider } from './shared/SectionDivider';
import { ContactParticleCanvas } from './shared/ParticleCanvas';
import { ContactButton } from './shared/ContactButton';
import { IconLinkedIn, IconGitHub } from './shared/ContactIcons';

/* ================================================================
   CONTACT SECTION — main export
   ================================================================ */
export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const ambientBackground = (
    <>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)' }} animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div style={{ position: 'absolute', bottom: '-15%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)' }} animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.85, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
      </div>
    </>
  );

  return (
    <>
      <SectionDivider />
      <SectionContainer
        id="contact"
        ref={sectionRef}
        ariaLabel="Contact section"
        ambientBackground={ambientBackground}
        gridLines={true}
        vignette={true}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <ContactParticleCanvas />

        {/* ── Main centered content ── */}
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(80px,12vw,140px) clamp(24px,6vw,80px) clamp(60px,8vw,100px)', maxWidth: 860, margin: '0 auto', width: '100%', gap: 'clamp(32px,5vw,52px)' }}>

          {/* Label pill */}
          <motion.div initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="label-pill">Available for Work</div>
          </motion.div>

          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
            <h2 style={{ fontSize: 'clamp(2.8rem,8vw,5.5rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.0, margin: 0 }}>
              <span style={{ display: 'block', color: tokens.colors.textPrimary }}>Let&apos;s Build</span>
              <span style={{ display: 'block', background: `linear-gradient(135deg, ${tokens.colors.accentBright} 0%, ${tokens.colors.accent} 55%, ${tokens.colors.accentDim} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 36px rgba(217,119,6,0.45))' }}>Something.</span>
            </h2>

            {/* Amber underline */}
            <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={inView ? { scaleX: 1, opacity: 1 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} style={{ margin: '18px auto 0', height: 3, width: 72, background: `linear-gradient(90deg, transparent, ${tokens.colors.accentBright}, ${tokens.colors.accent}, transparent)`, borderRadius: 2, boxShadow: '0 0 12px rgba(217,119,6,0.60)', transformOrigin: 'center' }} />
          </motion.div>

          {/* Subtext */}
          <motion.p initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }} style={{ fontSize: 'clamp(0.95rem,2.2vw,1.15rem)', fontWeight: 300, lineHeight: 1.75, color: tokens.colors.textSecondary, maxWidth: 520, margin: '0 auto' }}>
            Open to{' '}
            <span style={{ color: tokens.colors.textPrimary, fontWeight: 500 }}>teaching opportunities</span>
            ,{' '}
            <span style={{ color: tokens.colors.textPrimary, fontWeight: 500 }}>collaborations</span>
            , and{' '}
            <span style={{ color: tokens.colors.textPrimary, fontWeight: 500 }}>AI projects</span>
            .
          </motion.p>

          {/* ── Contact Buttons ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <ContactButton id="contact-linkedin" href="https://www.linkedin.com/in/abdulbasit-ai" label="LinkedIn" icon={IconLinkedIn} delay={0.30} />
            <ContactButton id="contact-github" href="https://github.com/basit9632584-bit" label="GitHub" icon={IconGitHub} delay={0.40} />
          </div>

          {/* Decorative floating geometric shapes */}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {/* Top-left bracket */}
            <motion.svg width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', top: '12%', left: '6%', opacity: 0.10 }} animate={{ rotate: [0, 4, -3, 0], y: [0, -8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}>
              <path d="M30 10 L10 10 L10 30" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
              <path d="M30 80 L10 80 L10 60" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>

            {/* Top-right bracket */}
            <motion.svg width="90" height="90" viewBox="0 0 90 90" style={{ position: 'absolute', top: '12%', right: '6%', opacity: 0.10 }} animate={{ rotate: [0, -4, 3, 0], y: [0, -8, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
              <path d="M60 10 L80 10 L80 30" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
              <path d="M60 80 L80 80 L80 60" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>

            {/* Bottom-left diamond */}
            <motion.div style={{ position: 'absolute', bottom: '20%', left: '10%', width: 18, height: 18, border: '1.5px solid rgba(217,119,6,0.35)', transform: 'rotate(45deg)' }} animate={{ rotate: [45, 90, 45], opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

            {/* Bottom-right dot grid */}
            <motion.div style={{ position: 'absolute', bottom: '18%', right: '8%', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, opacity: 0.18 }} animate={{ opacity: [0.10, 0.25, 0.10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}>
              {Array.from({ length: 9 }).map((_, i) => <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: '#D97706' }} />)}
            </motion.div>
          </div>
        </div>

        {/* ── Footer ── */}
        <motion.footer initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }} style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(217,119,6,0.08)', padding: '24px clamp(24px,5vw,64px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          {/* Left — name + year */}
          <span style={{ fontFamily: tokens.fonts.sans, fontSize: '0.80rem', fontWeight: 500, color: tokens.colors.textMuted, letterSpacing: '0.02em' }}>
            <span style={{ background: `linear-gradient(135deg, ${tokens.colors.accentBright}, ${tokens.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>Abdul Basit</span>
            {' '}© 2026
          </span>

          {/* Center — tagline */}
          <span style={{ fontFamily: tokens.fonts.sans, fontSize: '0.75rem', fontWeight: 400, fontStyle: 'italic', color: tokens.colors.textMuted, letterSpacing: '0.02em', textAlign: 'center', flex: 1 }}>Built with AI, not excuses.</span>

          {/* Right — back to top */}
          <motion.button id="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} whileHover={{ scale: 1.05, borderColor: 'rgba(217,119,6,0.50)' }} whileTap={{ scale: 0.95 }} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(217,119,6,0.20)', background: 'rgba(217,119,6,0.05)', color: tokens.colors.textMuted, fontFamily: tokens.fonts.sans, fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = tokens.colors.accentBright; }} onMouseLeave={(e) => { e.currentTarget.style.color = tokens.colors.textMuted; }}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M5.5 9V2M2 5.5l3.5-3.5 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Top
          </motion.button>
        </motion.footer>
      </SectionContainer>
    </>
  );
}