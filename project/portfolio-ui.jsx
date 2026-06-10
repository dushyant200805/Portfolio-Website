/* ============================================
   Portfolio UI — Shared components, Nav, Footer, Icons
   ============================================ */
const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';

/* ---- Icons ---- */
function Icon({ name, size = 16, stroke = 2, style }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', style };
  const paths = {
    arrow: <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    arrowUp: <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    pin: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    grid: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></>,
    code: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    info: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    sun: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    award: <><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    mappin: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    externalLink: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>,
    star: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    smartphone: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>,
    figma: <><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></>,
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  };
  const fills = {
    github: <path fill="currentColor" stroke="none" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>,
    linkedin: <path fill="currentColor" stroke="none" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
    instagram: <><rect fill="none" stroke="currentColor" strokeWidth="2" x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle fill="none" stroke="currentColor" strokeWidth="2" cx="12" cy="12" r="5"/><circle fill="currentColor" stroke="none" cx="17.5" cy="6.5" r="1.5"/></>,
  };
  if (fills[name]) return <svg {...{...p, fill:'none', stroke:'none'}}>{fills[name]}</svg>;
  return <svg {...p}>{paths[name]}</svg>;
}

/* ---- Eyebrow ---- */
function Eyebrow({ children, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)', ...style }}>
      <span style={{ width: 20, height: 1, background: 'currentColor' }}></span>
      {children}
    </span>
  );
}

/* ---- Tag ---- */
function Tag({ children, soft, tone, style }) {
  const base = soft
    ? (tone === 'dark' ? { background: 'rgba(8,8,8,0.15)', color: 'rgba(8,8,8,0.6)' } : { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' })
    : { background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' };
  return <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, padding: '4px 12px', fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap', ...base, ...style }}>{children}</span>;
}

/* ---- Chip ---- */
function Chip({ children }) {
  const [h, setH] = React.useState(false);
  return <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: 'var(--bg-surface)', border: `1px solid ${h ? 'var(--border-light)' : 'var(--border)'}`, borderRadius: 999, padding: '6px 14px', fontSize: 'var(--text-3xs)', fontWeight: 500, color: h ? 'var(--text-primary)' : 'var(--text-secondary)', transition: `all ${EASE}`, cursor: 'default' }}>{children}</span>;
}

/* ---- Badge ---- */
function Badge({ children, dotColor = 'var(--accent-green)', style }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 999, padding: '8px 16px', fontSize: 'var(--text-3xs)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-secondary)', ...style }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor, animation: 'pulse 2s ease infinite' }}></span>{children}</span>;
}

/* ---- Button ---- */
function Button({ children, variant = 'primary', size = 'md', icon, onClick, href, style }) {
  const [h, setH] = React.useState(false);
  const sizes = { sm: { padding: '8px 16px', fontSize: 'var(--text-2xs)' }, md: { padding: '12px 24px', fontSize: 'var(--text-sm)' }, lg: { padding: '16px 32px', fontSize: 'var(--text-base)' } };
  const v = {
    primary: { base: { background: 'var(--text-primary)', color: 'var(--bg)', border: '1px solid transparent' }, h: { background: 'var(--accent-orange)', color: '#fff' } },
    outline: { base: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border)' }, h: { background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' } },
    accent: { base: { background: 'var(--accent-orange)', color: '#fff', border: '1px solid transparent' }, h: { filter: 'brightness(1.08)' } },
  }[variant];
  const Tag = href ? 'a' : 'button';
  return <Tag href={href} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, borderRadius: 999, cursor: 'pointer', whiteSpace: 'nowrap', transition: `all ${EASE}`, textDecoration: 'none', ...sizes[size], ...v.base, ...(h ? v.h : {}), ...style }}>{children}{icon}</Tag>;
}

/* ---- IconButton ---- */
function IconButton({ children, variant = 'subtle', size = 40, onClick, style }) {
  const [h, setH] = React.useState(false);
  const v = {
    subtle: { base: { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }, h: { background: 'rgba(255,255,255,0.2)', color: 'var(--text-primary)', transform: 'translate(3px,-3px)' } },
    dark: { base: { background: 'rgba(8,8,8,0.15)', color: 'rgba(8,8,8,0.6)' }, h: { background: 'rgba(8,8,8,0.25)', color: 'var(--bg)', transform: 'translate(3px,-3px)' } },
  }[variant];
  return <span onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, borderRadius: '50%', flexShrink: 0, cursor: 'pointer', transition: `all ${EASE}`, ...v.base, ...(h ? v.h : {}), ...style }}>{children}</span>;
}

/* ---- StatBlock ---- */
function StatBlock({ value, label, accent }) {
  return <div><div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.75rem,3vw,2.25rem)', letterSpacing: '-0.04em', lineHeight: 1, color: accent ? 'var(--accent-orange)' : 'var(--text-primary)' }}>{value}</div><div style={{ fontSize: 'var(--text-eyebrow)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{label}</div></div>;
}

/* ---- Card ---- */
function Card({ children, background = 'var(--bg-card)', padding = 32, radius = 24, orb, grid, interactive = true, onClick, style }) {
  const [h, setH] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: 'relative', overflow: 'hidden', background, border: '1px solid var(--border)', borderColor: interactive && h ? 'var(--border-light)' : 'var(--border)', borderRadius: radius, padding, transition: `border-color ${EASE}, transform ${EASE}`, transform: interactive && h ? 'translateY(-2px)' : 'none', cursor: onClick ? 'pointer' : 'default', ...style }}>
      {grid && <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px' }}></div>}
      {orb && <div style={{ position: 'absolute', width: orb.size || 240, height: orb.size || 240, top: orb.y ?? -60, right: orb.x ?? -40, borderRadius: '50%', background: orb.color || 'var(--accent-orange)', filter: 'blur(60px)', opacity: orb.opacity ?? 0.2, pointerEvents: 'none', animation: 'orbFloat 12s ease infinite' }}></div>}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  );
}

/* ---- SectionHeader ---- */
function SectionHeader({ eyebrow, title, dim, link, onLink, style }) {
  return (
    <div className="sr" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 48, flexWrap: 'wrap', ...style }}>
      <div>
        <Eyebrow style={{ marginBottom: 12, display: 'flex' }}>{eyebrow}</Eyebrow>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1 }}>{title} {dim && <span style={{ color: 'var(--text-muted)' }}>{dim}</span>}</h2>
      </div>
      {link && <Button variant="outline" size="sm" icon={<Icon name="arrow" size={15} />} onClick={onLink}>{link}</Button>}
    </div>
  );
}

/* ---- Nav ---- */
function Nav({ active, onNav, theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const items = ['Work', 'Services', 'About'];
  const navLink = (label, mobile) => {
    const isActive = active === label.toLowerCase();
    if (mobile) return <button key={label} className="mobile-nav-link" onClick={() => { onNav(label.toLowerCase()); setMobileOpen(false); }} style={{ color: isActive ? 'var(--accent-orange)' : 'var(--text-primary)' }}>{label}</button>;
    return <span key={label} onClick={() => onNav(label.toLowerCase())} style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)', cursor: 'pointer', transition: `color ${EASE}`, position: 'relative' }}>{label}</span>;
  };
  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, padding: '0 clamp(20px,4vw,40px)', height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: theme === 'dark' ? 'rgba(8,8,8,0.88)' : 'rgba(250,250,250,0.88)', backdropFilter: 'saturate(180%) blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <span onClick={() => onNav('home')} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: 'var(--tracking-snug)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>Dushyant<span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-orange)' }}></span></span>
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {items.map(i => navLink(i, false))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
          </button>
          <Button variant="primary" size="sm" onClick={() => onNav('contact')} style={{ padding: '10px 20px' }}>Get in touch</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="theme-toggle hamburger" onClick={toggleTheme} aria-label="Toggle theme" style={{ display: 'none' }}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
          </button>
          <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Icon name="menu" size={18} />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-nav">
          <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}><Icon name="x" size={24} /></button>
          {items.map(i => navLink(i, true))}
          <button className="mobile-nav-link" onClick={() => { onNav('contact'); setMobileOpen(false); }} style={{ color: 'var(--accent-orange)' }}>Contact</button>
          <button className="theme-toggle" onClick={toggleTheme} style={{ marginTop: 16, width: 48, height: 48 }}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
          </button>
        </div>
      )}
    </>
  );
}

/* ---- Footer ---- */
function Footer({ onNav }) {
  const link = { fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0, fontFamily: 'var(--font-body)', textAlign: 'left', transition: `color ${EASE}` };
  const h4 = { fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)', marginBottom: 18 };
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '60px clamp(20px,4vw,40px) 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="footer-cols" style={{ display: 'flex', justifyContent: 'space-between', gap: 60, paddingBottom: 60, borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 300 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: 'var(--tracking-snug)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>Dushyant<span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-orange)' }}></span></div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', margin: 0 }}>UI/UX Designer &amp; Frontend Developer crafting premium digital experiences from Jodhpur, India.</p>
          </div>
          <div><div style={h4}>Navigation</div><div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><button style={link} onClick={() => onNav('home')}>Home</button><button style={link} onClick={() => onNav('work')}>Work</button><button style={link} onClick={() => onNav('services')}>Services</button><button style={link} onClick={() => onNav('about')}>About</button></div></div>
          <div><div style={h4}>Social</div><div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><a href="https://github.com/dushyant200805" target="_blank" rel="noopener noreferrer" style={link}>GitHub</a><a href="https://linkedin.com/in/dushyant-prajapat-" target="_blank" rel="noopener noreferrer" style={link}>LinkedIn</a><a href="https://instagram.com/_http.dushyant" target="_blank" rel="noopener noreferrer" style={link}>Instagram</a></div></div>
          <div><div style={h4}>Contact</div><div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><a href="mailto:dush8387@gmail.com" style={link}>dush8387@gmail.com</a><a href="tel:+918387801277" style={link}>+91 83878 01277</a><button style={link} onClick={() => onNav('contact')}>Hire me</button></div></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 32, flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>© 2025 Dushyant Prajapat. All rights reserved.</span>
          <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>Designed &amp; built with <span style={{ color: 'var(--accent-orange)' }}>♥</span> in India</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- ScrollReveal hook ---- */
function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.sr:not(.visible)');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ---- PageWrap: state-driven page enter transition ---- */
function PageWrap({ children }) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setVis(true), 30);
    return () => clearTimeout(t);
  }, []);
  return <div className={`page-enter ${vis ? 'page-visible' : ''}`}>{children}</div>;
}

Object.assign(window, { Icon, Eyebrow, Tag, Chip, Badge, Button, IconButton, StatBlock, Card, SectionHeader, Nav, Footer, useScrollReveal, PageWrap, EASE });
