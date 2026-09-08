import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tokens } from '../lib/design-tokens';
import { fadeLeft, staggerContainer, cardReveal } from '../lib/animation-variants';
import { SectionContainer, SectionHeader } from './shared/SectionContainer';
import { SectionDivider } from './shared/SectionDivider';
import { StatCard } from './shared/StatCard';

/* ================================================================
   ABOUT COMPONENT
   ================================================================ */
export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: '-80px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });

  const ambientBackground = (
    <>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 80% 30%, rgba(217,119,6,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(217,119,6,0.03) 0%, transparent 70%)`, pointerEvents: 'none' }} />
    </>
  );

  return (
    <>
      <SectionDivider />
      <SectionContainer
        id="about"
        ref={sectionRef}
        ariaLabel="About section"
        ambientBackground={ambientBackground}
        gridLines={true}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(48px, 6vw, 80px)', alignItems: 'start' }}>
          {/* ══════════════════════════════
              LEFT COLUMN — Text content
              ══════════════════════════════ */}
          <motion.div ref={leftRef} variants={staggerContainer} initial="hidden" animate={leftInView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Section Header */}
            <SectionHeader
              label="Who I Am"
              titleLines={[
                { text: 'About' },
                { text: 'Me.', isAccent: true },
              ]}
              inView={leftInView}
            />

            {/* Bio paragraphs */}
            <motion.div variants={fadeLeft}>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', lineHeight: 1.8, color: tokens.colors.textSecondary, fontWeight: 400 }}>
                BS Artificial Intelligence student at{' '}
                <span style={{ color: tokens.colors.textPrimary, fontWeight: 500 }}>University of Wah</span>, developing my programming and software development foundations.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', lineHeight: 1.8, color: tokens.colors.textSecondary, fontWeight: 400, marginTop: 16 }}>
                Currently learning{' '}
                <span style={{ color: tokens.colors.textPrimary, fontWeight: 600 }}>Python, JavaScript, and web development</span>{' '}
                while exploring AI tools, automation, and modern development workflows. Planning to move deeper into Machine Learning and AI Engineering as I progress.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', lineHeight: 1.8, color: tokens.colors.textSecondary, fontWeight: 400, marginTop: 16 }}>
                I also teach AI tools and workflows with a{' '}
                <span style={{ color: tokens.colors.textPrimary, fontWeight: 600 }}>20% theory, 80% practical</span>{' '}
                approach — helping beginners understand the technology before jumping into AI.
              </p>
            </motion.div>

            {/* Tags / skills strip */}
            <motion.div variants={fadeLeft} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Python', 'JavaScript', 'React', 'AI Tools', 'Automation', 'AI Education'].map(tag => (
                <span key={tag} className="pill-skill">{tag}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════
              RIGHT COLUMN — Stats + Visual
              ══════════════════════════════ */}
          <motion.div ref={rightRef} variants={staggerContainer} initial="hidden" animate={rightInView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Top stat cards — 2 column grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <StatCard icon="🎓" value="BSAI" label="In Progress" delay={0} />
              <StatCard icon="🚀" value="Live" label="Deployed Systems" delay={0.1} />
            </div>

            {/* Learning Path card */}
            <motion.div variants={cardReveal} style={{ borderRadius: tokens.radii.xl, border: `1px solid ${tokens.colors.borderSubtle}`, background: `linear-gradient(135deg, ${tokens.colors.bgElevated} 0%, ${tokens.colors.bgSecondary} 100%)`, padding: '28px 28px', position: 'relative', overflow: 'hidden', boxShadow: tokens.shadows.card }}>
              {/* Top amber bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${tokens.colors.accent}, ${tokens.colors.accentBright}, ${tokens.colors.accent}, transparent)` }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Logo + name row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: tokens.radii.md, background: `linear-gradient(135deg, rgba(217,119,6,0.25), rgba(180,83,9,0.12))`, border: `1px solid rgba(217,119,6,0.30)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>◈</div>
                  <div>
                    <div style={{ fontFamily: tokens.fonts.sans, fontSize: '1.05rem', fontWeight: 700, color: tokens.colors.textPrimary, letterSpacing: '-0.01em' }}>Learning Path</div>
                    <div style={{ fontFamily: tokens.fonts.sans, fontSize: '0.72rem', fontWeight: 400, color: tokens.colors.textMuted, letterSpacing: '0.04em', marginTop: 2 }}>Currently Learning & Building</div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${tokens.colors.borderSubtle}, transparent)` }} />

                {/* Focus areas */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { icon: '🐍', label: 'Python & JavaScript' },
                    { icon: '🌐', label: 'React & Web Development' },
                    { icon: '🤖', label: 'AI Tools & Automation' },
                  ].map(({ icon, label }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: tokens.fonts.sans, fontSize: '0.82rem', fontWeight: 400, color: tokens.colors.textSecondary }}>
                      <span style={{ fontSize: '1rem' }}>{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Philosophy quote card */}
            <motion.div variants={cardReveal} style={{ borderRadius: tokens.radii.xl, border: `1px solid rgba(217,119,6,0.18)`, background: 'rgba(217,119,6,0.05)', padding: '22px 24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 22, left: 20, fontSize: '2.5rem', lineHeight: 1, color: 'rgba(217,119,6,0.18)', fontFamily: tokens.fonts.serif, fontWeight: 700, userSelect: 'none' }}>"</div>
              <p style={{ fontFamily: tokens.fonts.sans, fontSize: '0.88rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, color: tokens.colors.textSecondary, margin: '20px 0 8px', paddingLeft: 4 }}>
                I learn by building. Every project is a chance to understand how software and AI work together — and to get better at both.
              </p>
              <div style={{ fontSize: '0.70rem', fontWeight: 600, color: tokens.colors.accentBright, letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Abdul Basit</div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
}