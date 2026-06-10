import { useState } from 'react';
const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

export function Chip({ children }) {
  const [h, setH] = useState(false);
  return (
    <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: 'var(--bg-surface)', border: `1px solid ${h ? 'var(--border-light)' : 'var(--border)'}`, borderRadius: 999, padding: '6px 14px', fontSize: 'var(--text-3xs)', fontWeight: 500, color: h ? 'var(--text-primary)' : 'var(--text-secondary)', transition: `all ${EASE}`, cursor: 'default' }}>
      {children}
    </span>
  );
}
