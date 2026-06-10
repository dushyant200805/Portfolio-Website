import { useState } from 'react';
import { Icon } from './Icon';

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

export function SocialCard({ ic, label, desc }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--bg-card)', border: `1px solid ${h ? 'var(--border-light)' : 'var(--border)'}`, borderRadius: 'var(--radius-lg)', padding: 32, transition: `all ${EASE}`, transform: h ? 'translateY(-3px)' : 'none', cursor: 'pointer' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={ic} size={20} />
        </div>
        <div style={{ transform: h ? 'translate(3px,-3px)' : 'none', transition: `transform ${EASE}` }}>
          <Icon name="arrow" size={16} style={{ color: h ? 'var(--accent-orange)' : 'var(--text-muted)' }} />
        </div>
      </div>
      <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h4)', color: h ? 'var(--accent-orange)' : 'var(--text-primary)', transition: `color ${EASE}` }}>{label}</h3>
      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{desc}</p>
    </div>
  );
}
