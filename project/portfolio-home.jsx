/* ============================================
   Home Screen — Hero, Marquee, Bento, Services
   ============================================ */

function Hero({ onNav }) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => { setReady(true); }, []);
  return (
    <section style={{ minHeight: '88vh', padding: '120px clamp(20px,4vw,40px) 70px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div className="ds-grid-bg" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, background: 'var(--accent-orange)', top: -200, right: -100, animation: 'orbFloat 20s ease infinite' }}></div>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.12, background: 'var(--accent-blue)', bottom: -200, left: -100, animation: 'orbFloat 25s ease infinite reverse' }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-max)', width: '100%', margin: '0 auto' }}>
        <Badge style={{ marginBottom: 32 }}>Available for freelance &amp; full-time</Badge>

        <h1 style={{ margin: '0 0 44px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-display)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-tighter)' }}>
          <span className="hero-line"><span className={`hero-line-inner d1${ready ? ' hero-visible' : ''}`}>UI/UX</span></span>
          <span className="hero-line" style={{ display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
            <span className={`hero-line-inner d2 designer-outline${ready ? ' hero-visible' : ''}`}>DESIGNER</span>
            <span className={`hero-line-inner d2 hero-chip${ready ? ' hero-visible' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 999, padding: '6px 14px', fontSize: 'var(--text-3xs)', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15em', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}><Icon name="clock" size={14} style={{ color: 'var(--accent-orange)' }} />17+ Projects</span>
          </span>
          <span className="hero-line"><span className={`hero-line-inner d3${ready ? ' hero-visible' : ''}`}><span style={{ color: 'var(--accent-orange)' }}>&amp;</span> DEV</span></span>
        </h1>

        <div className="hero-stats" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <p style={{ maxWidth: 380, color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>Crafting premium digital experiences that blend aesthetic precision with functional elegance. Based in India, working globally.</p>
          <div style={{ display: 'flex', gap: 40 }}>
            <StatBlock value="17+" label="Projects" />
            <StatBlock value="1+" label="Years Exp" />
            <StatBlock value="100%" label="Satisfaction" accent />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['UI/UX Design', 'React.js', 'Frontend Dev', 'Figma', 'JavaScript', 'Bootstrap 5', 'Responsive Design', 'jQuery', 'Adobe XD', 'CSS3', 'PHP', 'Mobile-First'];
  const doubled = [...items, ...items];
  return (
    <div className="sr" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0', overflow: 'hidden' }}>
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '0 32px', fontFamily: 'var(--font-heading)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-orange)', flexShrink: 0 }}></span>{it}
          </span>
        ))}
      </div>
    </div>
  );
}

function Bento({ onNav }) {
  const cardLabel = { fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,245,245,0.4)' };
  return (
    <section style={{ padding: 'var(--space-24) clamp(20px,4vw,40px)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="What I do" title="Studio" dim="overview" link="View all work" onLink={() => onNav('work')} />
      <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridAutoRows: 'minmax(80px,auto)', gap: 'var(--gap-grid)' }}>

        {/* Hero card */}
        <Card background="linear-gradient(135deg,#0f0f0f 0%,#1a0a00 100%)" padding={40} orb={{ color: 'var(--accent-orange)', size: 300, opacity: 0.12, x: -50, y: -50 }} grid style={{ gridColumn: '1 / 8', gridRow: '1 / 4', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#f5f5f5' }}>
          <div className="sr" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 'auto' }}>
            <span style={cardLabel}>Primary discipline</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}><Tag soft>React.js</Tag><Tag soft>Figma</Tag><Tag soft>Bootstrap</Tag></div>
          </div>
          <div className="sr sr-delay-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 'var(--leading-display)', margin: '32px 0 14px', color: '#f5f5f5' }}>Design<br/><span style={{ color: 'var(--accent-orange)' }}>&amp;</span> Code</div>
          <p className="sr sr-delay-2" style={{ maxWidth: 420, fontSize: 'var(--text-sm)', color: '#888', lineHeight: 'var(--leading-relaxed)', margin: '0 0 22px' }}>Bridging the gap between great design and solid engineering — crafting interfaces that look premium and perform flawlessly.</p>
          <div className="sr sr-delay-3" style={{ '--text-primary': '#f5f5f5', '--text-muted': '#aaa', display: 'flex', alignItems: 'center', gap: 32, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', color: '#f5f5f5' }}>
            <StatBlock value="17+" label="Projects" />
            <StatBlock value="1+" label="Yrs Exp" />
            <StatBlock value="100%" label="Remote-ready" accent />
            <Button variant="primary" size="sm" icon={<Icon name="arrow" size={13} />} onClick={() => onNav('work')} style={{ marginLeft: 'auto' }}>See Work</Button>
          </div>
        </Card>

        {/* Availability */}
        <Card padding={32} style={{ gridColumn: '8 / 13', gridRow: '1 / 2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 18 }}>
          <span className="sr" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-3xs)', color: 'var(--text-secondary)' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)', animation: 'pulse 2s ease infinite' }}></span>Currently available</span>
          <div className="sr sr-delay-1">
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h4)', marginBottom: 8 }}>Open to Work</div>
            <p style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', margin: '0 0 14px' }}>Accepting freelance &amp; full-time opportunities.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[['clock', 'Response within 24 hrs'], ['pin', 'Jodhpur, India · IST (UTC +5:30)'], ['globe', 'Remote globally']].map(([ic, tx]) => (
                <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}><Icon name={ic} size={12} />{tx}</div>
              ))}
            </div>
          </div>
          <Button variant="outline" size="sm" icon={<Icon name="arrow" size={13} />} onClick={() => onNav('contact')} style={{ alignSelf: 'flex-start' }}>Let's talk</Button>
        </Card>

        {/* Approach (orange) */}
        <Card background="var(--accent-orange)" padding={32} orb={{ color: '#fff', size: 200, opacity: 0.1 }} style={{ gridColumn: '8 / 13', gridRow: '2 / 4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Tag soft tone="dark">Approach</Tag>
          <div className="sr">
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.4rem,2.8vw,2rem)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.05, color: '#080808', marginBottom: 14 }}>Pixel-Perfect<br/>Design &amp;<br/>Clean Code</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Component-based architecture', 'Mobile-first responsive design', 'Figma to code precision'].map(t => <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-2xs)', color: 'rgba(8,8,8,0.6)' }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(8,8,8,0.4)' }}></span>{t}</div>)}
            </div>
          </div>
        </Card>

        {/* UI/UX (blue) */}
        <Card background="var(--accent-blue)" padding={32} onClick={() => onNav('services')} style={{ gridColumn: '1 / 5', gridRow: '4 / 7', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', cursor: 'pointer' }}>
          <Tag soft style={{ marginBottom: 'auto' }}>Service</Tag>
          <div className="sr" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem,2.5vw,2rem)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, color: '#fff', margin: '24px 0 12px' }}>UI/UX<br/>Design</div>
          <div className="sr sr-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
            {['Wireframes & Prototypes', 'Design Systems', 'User Research'].map(t => <span key={t} style={{ fontSize: 'var(--text-2xs)', color: 'rgba(255,255,255,0.55)' }}>→ {t}</span>)}
          </div>
        </Card>

        {/* Project preview card — HealthCare Admin */}
        <Card padding={0} interactive onClick={() => onNav('work')} style={{ gridColumn: '5 / 9', gridRow: '4 / 7', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: 180 }}>
            <img src="uploads/HealthCare.webp" alt="HealthCare Admin Panel" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
          </div>
          <div style={{ padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 'var(--text-eyebrow)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>React · JavaScript · Bootstrap</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.0625rem', letterSpacing: 'var(--tracking-snug)' }}>HealthCare Admin Panel</div>
              </div>
              <IconButton variant="subtle"><Icon name="arrow" size={14} /></IconButton>
            </div>
            <p style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', margin: 0 }}>Patient management, scheduling, and analytics — designed for real clinical workflows.</p>
          </div>
        </Card>

        {/* Tech stack */}
        <Card padding={32} style={{ gridColumn: '9 / 13', gridRow: '4 / 7' }}>
          <div className="sr" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}><span style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>My toolkit</span><span style={{ fontSize: 'var(--text-eyebrow)', color: 'var(--text-muted)' }}>10+ tools</span></div>
          <div className="sr sr-delay-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h4)', letterSpacing: 'var(--tracking-snug)', marginBottom: 16 }}>Tech Stack</div>
          <div className="sr sr-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
  const cards = [
    { n: '01', t: 'UX/UI Design', ic: 'grid', bg: 'var(--accent-blue)', d: 'User research, wireframing, prototyping, and pixel-perfect UI design.', list: ['User Research & Strategy', 'Wireframes & Prototypes', 'Design Systems'] },
    { n: '02', t: 'Frontend Development', ic: 'code', bg: 'var(--accent-orange)', d: 'Converting designs into responsive, accessible frontend codebases.', list: ['React.js / Bootstrap 5', 'Responsive Layouts', 'Interactive UI Features'] },
    { n: '03', t: 'Web Design', ic: 'monitor', bg: 'var(--accent-purple)', d: 'Landing pages and multi-page websites for diverse industries.', list: ['Landing Pages', 'Multi-page Websites', 'Cross-Browser Compatibility'] },
  ];
  return (
    <section style={{ padding: 'var(--space-24) clamp(20px,4vw,40px)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="What I offer" title="Services" link="All services" onLink={() => onNav('services')} />
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap-grid)' }}>
        {cards.map((c, i) => <ServiceCard key={c.n} {...c} delay={i} />)}
      </div>
    </section>
  );
}

function ServiceCard({ n, t, ic, bg, d, list, delay = 0 }) {
  const [h, setH] = React.useState(false);
  return (
    <div className={`sr sr-delay-${delay + 1}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: bg, borderRadius: 'var(--radius-lg)', padding: 40, transition: `all ${EASE}`, transform: h ? 'translateY(-4px)' : 'none', filter: h ? 'brightness(1.08)' : 'none' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xs)', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', marginBottom: 40 }}>{n}</div>
      <Icon name={ic} size={48} stroke={1.5} style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 24 }} />
      <h3 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem,2vw,1.75rem)', letterSpacing: 'var(--tracking-snug)', color: '#fff', lineHeight: 'var(--leading-tight)' }}>{t}</h3>
      <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.65)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 28px' }}>{d}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {list.map(li => <div key={li} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-2xs)', color: 'rgba(255,255,255,0.55)' }}><span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }}></span>{li}</div>)}
      </div>
    </div>
  );
}

function HomeScreen({ onNav }) {
  useScrollReveal();
  return (
    <PageWrap>
      <Hero onNav={onNav} />
      <Marquee />
      <Bento onNav={onNav} />
      <ServicesPreview onNav={onNav} />
    </PageWrap>
  );
}

Object.assign(window, { HomeScreen, ServiceCard });
