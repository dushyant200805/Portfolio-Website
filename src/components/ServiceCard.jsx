import { useState } from 'react';
import { Icon } from './Icon';

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

export function ServiceCard({ n, t, ic, bg, d, list, delay = 0 }) {
  const [h, setH] = useState(false);
  return (
    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(delay + 1) * 60}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: bg, borderRadius: 'var(--radius-lg)', padding: 40, transition: `all ${EASE}`, transform: h ? 'translateY(-4px)' : 'none', filter: h ? 'brightness(1.08)' : 'none' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xs)', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', marginBottom: 40 }}>{n}</div>
      <Icon name={ic} size={48} stroke={1.5} style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 24 }} />
      <h3 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem,2vw,1.75rem)', letterSpacing: 'var(--tracking-snug)', color: '#fff', lineHeight: 'var(--leading-tight)' }}>{t}</h3>
      <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.65)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 28px' }}>{d}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {list.map(li => (
          <div key={li} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-2xs)', color: 'rgba(255,255,255,0.55)' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />{li}
          </div>
        ))}
      </div>
    </div>
  );
}
