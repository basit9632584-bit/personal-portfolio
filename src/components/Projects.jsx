import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tokens } from '../lib/design-tokens';
import { fadeUp, staggerContainer } from '../lib/animation-variants';
import { SectionContainer, SectionHeader } from './shared/SectionContainer';
import { SectionDivider } from './shared/SectionDivider';
import { SkillPill } from './shared/SkillPill';

/* ================================================================
   PROJECTS DATA
   ================================================================ */
const projects = [
  {
    id: 'n8n-automation',
    number: '01',
    tag: 'Automation',
    tagColor: '#F59E0B',
    tagBg: 'rgba(245,158,11,0.10)',
    tagBorder: 'rgba(245,158,11,0.28)',
    title: 'n8n Workflow Automation',
    description: 'Automated pipeline for processing leads — from Google Sheets to AI-generated proposals and calendar reminders. Hands-off once triggered.',
    stack: ['n8n', 'Gemini API', 'Google Sheets'],
    deployedOn: null,
    link: null,
    linkLabel: null,
    featured: false,
  },
  {
    id: 'ai-course',
    number: '02',
    tag: 'Education',
    tagColor: '#38bdf8',
    tagBg: 'rgba(56,189,248,0.08)',
    tagBorder: 'rgba(56,189,248,0.22)',
    title: 'AI Course Curriculum',
    description: 'Practical AI course designed for beginners. Focuses on real tools and hands-on learning rather than theory-heavy approaches.',
    stack: ['AI Tools', 'Practical Learning'],
    deployedOn: null,
    link: null,
    linkLabel: null,
    featured: false,
  },
];

/* ================================================================
   STANDARD PROJECT CARD
   ================================================================ */
function ProjectCard({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        borderRadius: tokens.radii.xl,
        border: `1px solid ${tokens.colors.borderSubtle}`,
        background: `linear-gradient(145deg, ${tokens.colors.bgElevated} 0%, ${tokens.colors.bgSecondary} 100%)`,
        padding: '28px 26px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        overflow: 'hidden',
        boxShadow: tokens.shadows.card,
        cursor: 'default',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        minHeight: 280,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(217,119,6,0.38)';
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(217,119,6,0.12), 0 4px 16px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = tokens.colors.borderSubtle;
        e.currentTarget.style.boxShadow = tokens.shadows.card;
      }}
    >
      {/* Corner glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: -50, right: -50, width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Tag + number row */}
      <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ padding: '4px 11px', borderRadius: tokens.radii.full, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: project.tagColor, background: project.tagBg, border: `1px solid ${project.tagBorder}`, fontFamily: tokens.fonts.sans }}>{project.tag}</span>
        <span style={{ fontFamily: tokens.fonts.sans, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(217,119,6,0.28)', userSelect: 'none' }}>{project.number}</span>
      </motion.div>

      {/* Divider */}
      <div style={{ height: 1, background: `linear-gradient(90deg, rgba(217,119,6,0.22), transparent)`, marginTop: -6 }} />

      {/* Title */}
      <motion.h3 variants={fadeUp} style={{ fontFamily: tokens.fonts.sans, fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: tokens.colors.textPrimary, margin: 0 }}>{project.title}</motion.h3>

      {/* Description */}
      <motion.p variants={fadeUp} style={{ fontFamily: tokens.fonts.sans, fontSize: '0.875rem', lineHeight: 1.75, color: tokens.colors.textSecondary, fontWeight: 400, margin: 0, flex: 1 }}>{project.description}</motion.p>

      {/* Stack pills */}
      <motion.div variants={staggerContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {project.stack.map((s, i) => <SkillPill key={s} label={s} index={i} variant="stack" />)}
      </motion.div>

      {/* Arrow indicator (no external link) */}
      <motion.div variants={fadeUp} style={{ position: 'absolute', bottom: 20, right: 22, width: 30, height: 30, borderRadius: 8, border: `1px solid rgba(217,119,6,0.18)`, background: 'rgba(217,119,6,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
    </motion.article>
  );
}

/* ================================================================
   PROJECTS SECTION — main export
   ================================================================ */
export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const ambientBackground = (
    <>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 90% 10%, rgba(217,119,6,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 5% 90%, rgba(245,158,11,0.03) 0%, transparent 70%)`, pointerEvents: 'none' }} />
    </>
  );

  return (
    <>
      <SectionDivider />
      <SectionContainer id="work" ariaLabel="Projects section" ambientBackground={ambientBackground} gridLines={true}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 64px)' }}>

          {/* ── Section Header ── */}
          <SectionHeader
            ref={headerRef}
            label="What I've Built"
            titleLines={[
              { text: 'Selected' },
              { text: 'Projects.', isAccent: true },
            ]}
            badge={
              <div style={{ padding: '10px 20px', borderRadius: tokens.radii.md, border: `1px solid ${tokens.colors.borderSubtle}`, background: tokens.colors.bgElevated, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <span style={{ fontFamily: tokens.fonts.sans, fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', background: `linear-gradient(135deg, ${tokens.colors.accentBright}, ${tokens.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{projects.length}</span>
                <span style={{ fontFamily: tokens.fonts.sans, fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: tokens.colors.textMuted }}>Projects</span>
              </div>
            }
            inView={headerInView}
          />

          {/* ── Project cards grid ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 'clamp(14px, 2vw, 20px)', alignItems: 'start' }}>
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>

          {/* ── Bottom note ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ textAlign: 'center', padding: '24px', borderRadius: tokens.radii.xl, border: '1px solid rgba(217,119,6,0.10)', background: 'rgba(217,119,6,0.04)' }}>
            <p style={{ fontFamily: tokens.fonts.sans, fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontStyle: 'italic', fontWeight: 300, color: tokens.colors.textMuted, margin: 0 }}>
              Every project teaches something new.{' '}
              <span style={{ background: `linear-gradient(135deg, ${tokens.colors.accentBright}, ${tokens.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600, fontStyle: 'normal' }}>
                Build, learn, repeat.
              </span>
            </p>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
}