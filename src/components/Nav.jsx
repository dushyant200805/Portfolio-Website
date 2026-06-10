import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from './Icon';
import { PROJECTS } from '../data/projects';
import { SOCIALS } from '../data/socials';

const NAV_ITEMS = ['Home', 'Work', 'Services', 'About'];
const PREVIEW_IMGS = PROJECTS.slice(0, 5).map(p => p.img);

export function Nav({ active, onNav, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [entered, setEntered] = useState(false);
  const [hoverIdx, setHoverIdx] = useState(null);
  const overlayRef = useRef(null);
  const spotRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setEntered(true));
    } else {
      document.body.style.overflow = '';
      setEntered(false);
      setHoverIdx(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onMove = useCallback((e) => {
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (spotRef.current) {
      spotRef.current.style.setProperty('--mx', `${x}px`);
      spotRef.current.style.setProperty('--my', `${y}px`);
    }
    if (imgRef.current && hoverIdx !== null) {
      const f = 0.06;
      imgRef.current.style.transform = `translate(${(x - rect.width / 2) * f}px, ${(y - rect.height / 2) * f}px) scale(1.08)`;
    }
  }, [hoverIdx]);

  const go = (screen) => { onNav(screen); setOpen(false); };

  return (
    <>
      <div className="nav-wrapper">
        <nav className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
          <button className="nav-logo" onClick={() => onNav('home')}>Dushyant<span className="nav-logo-dot" /></button>
          <div className="nav-links">
            {NAV_ITEMS.filter(l => l !== 'Home').map(label => (
              <button key={label} className={`nav-link ${active === label.toLowerCase() ? 'active' : ''}`}
                onClick={() => onNav(label.toLowerCase())}>{label}</button>
            ))}
          </div>
          <div className="nav-right">
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
            </button>
            <button className="cta-btn" onClick={() => onNav('contact')}>
              <span className="cta-text">Get in touch</span>
              <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Menu">
              <span className="menu-bar" /><span className="menu-bar" /><span className="menu-bar" />
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-overlay ${open ? 'open' : ''}`} ref={overlayRef} onMouseMove={onMove}>
        <div className="mobile-spotlight" ref={spotRef} />
        <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <Icon name="x" size={28} />
        </button>
        <nav className="mobile-nav-items">
          {NAV_ITEMS.map((label, i) => {
            const key = label.toLowerCase();
            return (
              <button key={label} className={`mobile-nav-item ${entered ? 'entered' : ''} ${active === key ? 'active' : ''}`}
                style={{ transitionDelay: entered ? `${0.15 + i * 0.08}s` : '0s' }}
                onClick={() => go(key)}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}>
                <span className="mobile-nav-index">0{i + 1}</span>
                <span className="mobile-nav-label">{label}</span>
              </button>
            );
          })}
        </nav>
        {hoverIdx !== null && (
          <div className="mobile-preview" ref={imgRef}>
            <img src={PREVIEW_IMGS[hoverIdx % PREVIEW_IMGS.length]} alt="" />
          </div>
        )}
        <div className="mobile-cta-card">
          <div className="mobile-cta-text">
            <span className="mobile-cta-eyebrow">Let's collaborate</span>
            <span className="mobile-cta-heading">Start a project</span>
          </div>
          <button className="cta-btn" onClick={() => go('contact')}>
            <span className="cta-text">Contact</span>
            <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
        <div className="mobile-socials">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <Icon name={s.ic} size={18} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
