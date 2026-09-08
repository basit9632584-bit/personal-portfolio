import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tokens } from '../lib/design-tokens';
import { staggerContainer, cardReveal, headingSlide } from '../lib/animation-variants';
import { SectionContainer, SectionHeader } from './shared/SectionContainer';
import { SectionDivider } from './shared/SectionDivider';
import { SkillPill } from './shared/SkillPill';

/* ================================================================
   SKILLS DATA
   ================================================================ */
const skillCategories = [
  { id: 'programming', category: 'Programming', number: '01', skills: ['Python', 'Java', 'JavaScript'], accent: 'rgba(245,158,11,1)', glow: 'rgba(245,158,11,0.12)' },
  { id: 'web', category: 'Web Development', number: '02', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'], accent: 'rgba(217,119,6,1)', glow: 'rgba(217,119,6,0.12)' },
  { id: 'ai-tools', category: 'AI Tools (Exploring)', number: '03', skills: ['Generative AI', 'LLMs', 'AI Agents', 'Prompt Engineering'], accent: 'rgba(251,191,36,1)', glow: 'rgba(251,191,36,0.10)' },
  { id: 'local-ai', category: 'Local AI', number: '04', skills: ['Ollama', 'Local Models', 'Open-source AI'], accent: 'rgba(245,158,11,1)', glow: 'rgba(245,158,11,0.12)' },
  { id: 'tools', category: 'Tools & Platforms', number: '05', skills: ['GitHub', 'Git', 'n8n', 'OpenCode', 'Claude Code', 'Gemini CLI'], accent: 'rgba(217,119,6,1)', glow: 'rgba(217,119,6,0.10)' },
  { id: 'automation', category: 'Automation', number: '06', skills: ['Workflow Automation', 'API Integrations'], accent: 'rgba(180,83,9,1)', glow: 'rgba(180,83,9,0.12)' },
];

/* ================================================================
   SKILL CATEGORY CARD
   ================================================================ */
function SkillCard({ data }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={cardRef}
      id={`skill-card-${data.id}`}
      variants={cardReveal}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        borderRadius: tokens.radii.xl,
        border: `1px solid ${tokens.colors.borderSubtle}`,
        background: `linear-gradient(145deg, ${tokens.colors.bgElevated} 0%, ${tokens.colors.bgSecondary} 100%)`,
        padding: '28px 26px 26px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        boxShadow: tokens.shadows.card,
        cursor: 'default',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(217,119,6,0.35)';
        e.currentTarget.style.boxShadow = `0 12px 48px ${data.glow}, 0 4px 16px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = tokens.colors.borderSubtle;
        e.currentTarget.style.boxShadow = tokens.shadows.card;
      }}
    >
      {/* Background glow blob */}
      <div aria-hidden="true" style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle, ${data.glow} 0%, transparent 70%)`, pointerEvents: 'none', transition: 'opacity 0.3s ease' }} />

      {/* Top row: number + category name */}
      <motion.div variants={headingSlide} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontFamily: tokens.fonts.sans, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(217,119,6,0.35)', userSelect: 'none' }}>{data.number}</span>
        <h3 style={{ fontFamily: tokens.fonts.sans, fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', fontWeight: 700, letterSpacing: '-0.01em', background: `linear-gradient(135deg, ${tokens.colors.accentBright} 0%, ${tokens.colors.accent} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: 0 }}>{data.category}</h3>
      </motion.div>

      {/* Thin amber divider */}
      <div style={{ height: 1, background: `linear-gradient(90deg, rgba(217,119,6,0.30), transparent)`, marginTop: -8 }} />

      {/* Pill badges */}
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {data.skills.map((skill, i) => <SkillPill key={skill} label={skill} index={i} />)}
      </motion.div>

      {/* Count chip — bottom right */}
      <div style={{ position: 'absolute', bottom: 18, right: 18, fontFamily: tokens.fonts.sans, fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(217,119,6,0.35)', userSelect: 'none' }}>{data.skills.length} tools</div>
    </motion.article>
  );
}

/* ================================================================
   SKILLS SECTION — main export
   ================================================================ */
export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const totalTools = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  const ambientBackground = (
    <>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 55% 45% at 15% 20%, rgba(217,119,6,0.04) 0%, transparent 70%), radial-gradient(ellipse 45% 55% at 85% 75%, rgba(245,158,11,0.03) 0%, transparent 70%)`, pointerEvents: 'none' }} />
    </>
  );

  return (
    <>
      <SectionDivider />
      <SectionContainer id="skills" ariaLabel="Skills section" ambientBackground={ambientBackground} gridLines={true}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 64px)' }}>
          {/* ── Section Header ── */}
          <SectionHeader
            ref={headerRef}
            label="My Arsenal"
            titleLines={[
              { text: 'Tools &' },
              { text: 'Skills.', isAccent: true },
            ]}
            badge={
              <div style={{ padding: '10px 20px', borderRadius: tokens.radii.md, border: `1px solid ${tokens.colors.borderSubtle}`, background: tokens.colors.bgElevated, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <span style={{ fontFamily: tokens.fonts.sans, fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', background: `linear-gradient(135deg, ${tokens.colors.accentBright}, ${tokens.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{totalTools}+</span>
                <span style={{ fontFamily: tokens.fonts.sans, fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.10em', textTransform: 'uppercase', color: tokens.colors.textMuted }}>Tools in stack</span>
              </div>
            }
            inView={headerInView}
          />

          {/* ── Cards Grid ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 'clamp(14px, 2vw, 20px)', alignItems: 'start' }}>
            {skillCategories.map((cat, i) => <SkillCard key={cat.id} data={cat} index={i} />)}
          </div>

          {/* ── Bottom tagline ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ textAlign: 'center', padding: '24px', borderRadius: tokens.radii.xl, border: '1px solid rgba(217,119,6,0.10)', background: 'rgba(217,119,6,0.04)' }}>
            <p style={{ fontFamily: tokens.fonts.sans, fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontStyle: 'italic', fontWeight: 300, color: tokens.colors.textMuted, margin: 0 }}>
              Currently learning and exploring —{' '}
              <span style={{ background: `linear-gradient(135deg, ${tokens.colors.accentBright}, ${tokens.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600, fontStyle: 'normal' }}>
                building my foundation one step at a time.
              </span>
            </p>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
}