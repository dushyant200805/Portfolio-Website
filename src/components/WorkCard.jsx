import { useState } from 'react';
import { Icon } from './Icon';
import { Tag } from './Tag';

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

export function WorkCard({ featured, img, tags, title, desc, meta, github, live }) {
  const [h, setH] = useState(false);
  const projectLink = live || github;
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer"
     
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderColor: h ? 'var(--border-light)' : 'var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', transition: `all ${EASE}`, transform: h ? 'translateY(-4px)' : 'none', gridColumn: featured ? '1 / -1' : 'auto', textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: featured ? '21/9' : '16/9', background: 'var(--bg-elevated)' }}>
        <img src={img} alt={title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: `transform 0.5s ${EASE}`, transform: h ? 'scale(1.04)' : 'scale(1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,8,8,0.75) 0%,transparent 50%)', opacity: h ? 1 : 0.4, transition: `opacity ${EASE}`, display: 'flex', alignItems: 'flex-end', padding: 32 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-xs)', color: '#fff', opacity: h ? 1 : 0, transition: `opacity ${EASE}` }}>{live ? 'View Live' : 'View on GitHub'} <Icon name="arrow" size={14} /></span>
        </div>
      </div>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>{tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', letterSpacing: 'var(--tracking-snug)', color: h ? 'var(--accent-orange)' : 'var(--text-primary)', transition: `color ${EASE}` }}>{title}</h3>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{meta}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-2xs)', fontWeight: 500, color: 'var(--text-secondary)' }}>View project <Icon name="externalLink" size={14} /></span>
        </div>
      </div>
    </a>
  );
}
