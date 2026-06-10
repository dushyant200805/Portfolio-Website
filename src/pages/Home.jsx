import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageWrap } from '../components/PageWrap';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { StatBlock } from '../components/StatBlock';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Tag } from '../components/Tag';
import { Chip } from '../components/Chip';
import { Icon } from '../components/Icon';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICE_CARDS } from '../data/services';

const MARQ_IMAGES = [
  '/uploads/HealthCare.webp', '/uploads/Crecketzen.png', '/uploads/florvelle.png',
  '/uploads/hevintza.png', '/uploads/Tennixa.png', '/uploads/Ornuvia.png',
  '/uploads/ShopCron.png', '/uploads/Techluno.png', '/uploads/Nenobytech.png',
  '/uploads/Luggoswift.png', '/uploads/horserid.png', '/uploads/Luvoio-spa.png',
  '/uploads/Muclonus.png', '/uploads/Jeckpotdeck.png', '/uploads/velontrax.png',
  '/uploads/thumbnail.jpg',
];

function Hero({ onNav, leaving }) {
  const [ready, setReady] = useState(false);
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);
  const lastSpawn = useRef(0);
  const nextId = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const inside = useRef(false);
  const raf = useRef(null);

  useEffect(() => {
    if (!leaving) {
      const t = setTimeout(() => setReady(true), 100);
      return () => clearTimeout(t);
    }
    setReady(false);
  }, [leaving]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const onEnter = () => { inside.current = true; };
    const onLeave = () => { inside.current = false; };
    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseenter', onEnter, { passive: true });
    el.addEventListener('mouseleave', onLeave, { passive: true });
    const loop = () => {
      if (inside.current) {
        const now = performance.now();
        if (now - lastSpawn.current >= 80) {
          lastSpawn.current = now;
          const id = nextId.current++;
          const img = MARQ_IMAGES[Math.floor(Math.random() * MARQ_IMAGES.length)];
          const rot = Math.random() * 20 - 10;
        setParticles(prev => [
  ...prev,
  {
    id,
    img,
    x: mousePos.current.x,
    y: mousePos.current.y,
    rot,
  },
]);
          setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== id));
          }, 1000);
        }
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);
  return (
    <section className={`hero-section${leaving ? ' leaving' : ''}`} ref={heroRef}>
      <div className="hero-bg">
        <div className="ds-grid-bg" />
        <div className="hero-orb-1" style={{ animation: 'orbFloat 20s ease infinite' }} />
        <div className="hero-orb-2" style={{ animation: 'orbFloat 25s ease infinite reverse' }} />
      </div>
      <div className="hero-inner">
        <Badge style={{ marginBottom: 32 }}>Available for freelance &amp; full-time</Badge>
        <h1 style={{ margin: '0 0 44px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-display)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-tighter)' }}>
          <span className="hero-line"><span className={`hero-line-inner d1${ready ? ' visible' : ''}`}>UI/UX</span></span>
          <span className="hero-line" style={{ display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
            <span className={`hero-line-inner d2 designer-outline${ready ? ' visible' : ''}`}>DESIGNER</span>
          </span>
          <span className="hero-line"><span className={`hero-line-inner d3${ready ? ' visible' : ''}`}><span style={{ color: 'var(--accent-orange)' }}>&amp;</span> DEV</span></span>
        </h1>
        <div className="hero-stats">
          <p style={{ maxWidth: 380, color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>Crafting premium digital experiences that blend aesthetic precision with functional elegance. Based in India, working globally.</p>
          <div style={{ display: 'flex', gap: 40 }}>
            <StatBlock value="17+" label="Projects" />
            <StatBlock value="1+" label="Years Exp" />
            <StatBlock value="100%" label="Satisfaction" accent />
          </div>
        </div>
      </div>
      {particles.map(p => (
        <span key={p.id} className="cursor-particle" style={{ left: p.x, top: p.y, '--p-rot': `${p.rot}deg` }}>
          <img src={p.img} alt="" className="cursor-particle-img" />
        </span>
      ))}
    </section>
  );
}

function Swoosh() {
  return (
    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, margin: '0 6px', color: 'var(--accent-orange)', opacity: 0.3 }}>
      <path d="M2 10C12 2 16 2 20 6s8 6 18 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Arc() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, margin: '0 4px', color: 'var(--accent-orange)', opacity: 0.2 }}>
      <path d="M14 3C10 3 4 8 4 14s6 11 10 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M24 14c0-4-4-11-10-11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}



function Bento({ onNav }) {
  const cardLabel = { fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,245,245,0.4)' };
  return (
    <section style={{ padding: 'var(--space-24) clamp(20px,4vw,40px)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="What I do" title="Studio" dim="overview" link="View all work" onLink={() => onNav('work')} />
      <div className="bento-grid">
        <Card background="linear-gradient(135deg,#0f0f0f 0%,#1a0a00 100%)" padding={40} orb={{ color: 'var(--accent-orange)', size: 300, opacity: 0.12, x: -50, y: -50 }} grid
          style={{ gridColumn: '1 / 8', gridRow: '1 / 4', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#f5f5f5' }} interactive={false}>
          <div data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 'auto' }}>
            <span style={cardLabel}>Primary discipline</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}><Tag soft>React.js</Tag><Tag soft>Figma</Tag><Tag soft>Bootstrap</Tag></div>
          </div>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 'var(--leading-display)', margin: '32px 0 14px', color: '#f5f5f5' }}>Design<br/><span style={{ color: 'var(--accent-orange)' }}>&amp;</span> Code</div>
          <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="120" style={{ maxWidth: 420, fontSize: 'var(--text-sm)', color: '#888', lineHeight: 'var(--leading-relaxed)', margin: '0 0 22px' }}>Bridging the gap between great design and solid engineering — crafting interfaces that look premium and perform flawlessly.</p>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="180" style={{ display: 'flex', alignItems: 'center', gap: 32, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', color: '#f5f5f5', width: '100%' }}>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <StatBlock value="17+" label="Projects" />
              <StatBlock value="3+" label="Yrs Exp" />
              <StatBlock value="100%" label="Remote-ready" accent />
            </div>
            <Button variant="primary" size="sm" icon="arrow" onClick={() => onNav('work')} style={{ marginLeft: 'auto' }}>See Work</Button>
          </div>
        </Card>
        <Card padding={32} interactive={false} style={{ gridColumn: '8 / 13', gridRow: '1 / 2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 18 }}>
          <span data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-3xs)', color: 'var(--text-secondary)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)', flexShrink: 0 }} />Currently available
          </span>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60">
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h4)', marginBottom: 8 }}>Open to Work</div>
            <p style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', margin: '0 0 14px' }}>Accepting freelance &amp; full-time opportunities.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[['clock', 'Response within 24 hrs'], ['pin', 'Jodhpur, India · IST (UTC +5:30)'], ['globe', 'Remote globally']].map(([ic, tx]) => (
                <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}><Icon name={ic} size={12} />{tx}</div>
              ))}
            </div>
          </div>
          <Button variant="outline" size="sm" icon="arrow" onClick={() => onNav('contact')} style={{ alignSelf: 'flex-start' }}>Let's talk</Button>
        </Card>
        <Card background="var(--accent-orange)" padding={32} orb={{ color: '#fff', size: 200, opacity: 0.1 }} interactive={false}
          style={{ gridColumn: '8 / 13', gridRow: '2 / 4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Tag soft tone="dark">Approach</Tag>
          <div data-aos="fade-up"  data-aos-duration="1000">
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.4rem,2.8vw,2rem)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.05, color: '#080808', marginBottom: 14 }}>Pixel-Perfect<br/>Design &amp;<br/>Clean Code</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Component-based architecture', 'Mobile-first responsive design', 'Figma to code precision'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-2xs)', color: 'rgba(8,8,8,0.6)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(8,8,8,0.4)', flexShrink: 0 }} />{t}
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card background="var(--accent-blue)" padding={32} onClick={() => onNav('services')}
          style={{ gridColumn: '1 / 5', gridRow: '4 / 7', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', cursor: 'pointer' }}>
          <Tag soft style={{ marginBottom: 'auto' }}>Service</Tag>
          <div data-aos="fade-up"  data-aos-duration="1000" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem,2.5vw,2rem)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, color: '#fff', margin: '24px 0 12px' }}>UI/UX<br/>Design</div>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60" style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
            {['Wireframes & Prototypes', 'Design Systems', 'User Research'].map(t => <span key={t} style={{ fontSize: 'var(--text-2xs)', color: 'rgba(255,255,255,0.55)' }}>&rarr; {t}</span>)}
          </div>
        </Card>
        <Card background="linear-gradient(135deg,#0b0d1a 0%,#0f1228 60%,#0d0f20 100%)" padding={36} interactive={false}
          style={{ gridColumn: '5 / 9', gridRow: '4 / 7', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', color: 'var(--accent-orange)', lineHeight: 1, marginTop: -6 }}>"</span>
            <span style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)' }}>Design Philosophy</span>
          </div>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 0' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.2rem,2vw,1.75rem)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.2, color: '#fff', marginBottom: 14 }}>
              Mass production with{' '}<span style={{ color: 'var(--accent-orange)' }}>artisanal-level quality.</span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(0.9rem,1.4vw,1.2rem)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.3, color: 'rgba(255,255,255,0.2)' }}>
              Studio creativity.<br />Atelier precision.
            </div>
          </div>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="120" style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.12)' }}>
              <img src="/uploads/profile-image.jpg" alt="Dushyant Prajapat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: '#fff' }}>Dushyant Prajapat</div>
              <div style={{ fontSize: 'var(--text-3xs)', color: 'rgba(255,255,255,0.38)', marginTop: 2 }}>UI/UX Designer &amp; Frontend Dev</div>
            </div>
          </div>
        </Card>
        <Card padding={32} interactive={false} style={{ gridColumn: '9 / 13', gridRow: '4 / 7' }}>
          <div data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>My toolkit</span>
            <span style={{ fontSize: 'var(--text-eyebrow)', color: 'var(--text-muted)' }}>10+ tools</span>
          </div>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h4)', letterSpacing: 'var(--tracking-snug)', marginBottom: 16 }}>Tech Stack</div>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="120" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['Design', 'var(--accent-blue)', ['Figma', 'Adobe XD', 'Canva']], ['Frontend', 'var(--accent-orange)', ['React.js', 'Bootstrap 5', 'jQuery', 'JavaScript']], ['Backend', 'var(--accent-purple)', ['PHP', 'ColdFusion', 'HTML5', 'CSS3']]].map(([label, col, tools]) => (
              <div key={label}>
                <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: col, marginBottom: 7 }}>{label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{tools.map(t => <Chip key={t}>{t}</Chip>)}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function ServicesPreview({ onNav }) {
  return (
    <section style={{ padding: 'var(--space-24) clamp(20px,4vw,40px)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="What I offer" title="Services" link="All services" onLink={() => onNav('services')} />
      <div className="services-grid">
        {SERVICE_CARDS.map((c, i) => <ServiceCard key={c.n} {...c} delay={i} />)}
      </div>
    </section>
  );
}

export function HomeScreen({ onNav, leaving }) {
  return (
    <PageWrap>
      <Hero onNav={onNav} leaving={leaving} />
      <Bento onNav={onNav} />
      <ServicesPreview onNav={onNav} />
    </PageWrap>
  );
}
