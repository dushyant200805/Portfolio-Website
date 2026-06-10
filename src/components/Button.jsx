import { useState } from 'react';
import { Icon } from './Icon';

const SIZES = { sm: { padding: '8px 16px', fontSize: 'var(--text-2xs)' }, md: { padding: '12px 24px', fontSize: 'var(--text-sm)' }, lg: { padding: '16px 32px', fontSize: 'var(--text-base)' } };

const VARIANTS = {
  primary: { base: { background: 'var(--text-primary)', color: 'var(--bg)', border: '1px solid transparent' }, h: { background: 'var(--accent-orange)', color: '#fff' } },
  outline: { base: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border)' }, h: { background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' } },
  accent: { base: { background: 'var(--accent-orange)', color: '#fff', border: '1px solid transparent' }, h: { filter: 'brightness(1.08)' } },
};

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

export function Button({ children, variant = 'primary', size = 'md', icon, onClick, href, style, hoverStyle }) {
  const [h, setH] = useState(false);
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-body)', fontWeight: 600, borderRadius: 999, cursor: 'pointer',
        whiteSpace: 'nowrap', transition: `all ${EASE}`, textDecoration: 'none', ...s, ...v.base, ...(h ? v.h : {}), ...style, ...(h && hoverStyle ? hoverStyle : {}) }}>
      {children}{icon && <Icon name={icon} size={size === 'lg' ? 18 : size === 'sm' ? 13 : 15} />}
    </Tag>
  );
}
