import { useState } from 'react';

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

export function Card({ children, background = 'var(--bg-card)', padding = 32, radius = 24, orb, grid, interactive = true, onClick, style, className = '' }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className={className}
      style={{
        position: 'relative', overflow: 'hidden', background,
        border: `1px solid ${interactive && h ? 'var(--border-light)' : 'var(--border)'}`,
        borderRadius: radius, padding,
        transition: `border-color ${EASE}, transform ${EASE}`,
        transform: interactive && h ? 'translateY(-2px)' : 'none',
        cursor: onClick ? 'pointer' : 'default', ...style
      }}>
      {grid && <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />}
      {orb && <div style={{ position: 'absolute', width: orb.size || 240, height: orb.size || 240, top: orb.y ?? -60, right: orb.x ?? -40, borderRadius: '50%', background: orb.color || 'var(--accent-orange)', filter: 'blur(60px)', opacity: orb.opacity ?? 0.2, pointerEvents: 'none', animation: 'orbFloat 12s ease infinite' }} />}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  );
}
