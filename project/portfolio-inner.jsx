/* ============================================
   Services + Contact Screens
   ============================================ */

/* ---- Services Screen ---- */
function ServicesScreen({ onNav }) {
  useScrollReveal();
  const cards = [
    { n: '01', t: 'UX/UI Design', ic: 'grid', bg: 'var(--accent-blue)', d: 'User research, wireframing, prototyping, and pixel-perfect UI design. Every decision grounded in user needs and business goals.', list: ['User Research & Strategy', 'Wireframes & Prototypes', 'Design Systems', 'Usability Testing'] },
    { n: '02', t: 'Frontend Development', ic: 'code', bg: 'var(--accent-orange)', d: 'Converting designs into high-performance, accessible, and maintainable frontend codebases using modern tools.', list: ['React.js / Bootstrap 5', 'JavaScript & jQuery', 'Responsive Layouts', 'Performance Optimization'] },
    { n: '03', t: 'Web Design & Development', ic: 'monitor', bg: 'var(--accent-purple)', d: 'Landing pages and multi-page websites for IT, NGO, Spa, Sports, Car Rental, Farm, and E-Commerce sectors.', list: ['Landing Pages', 'Multi-page Websites', 'E-Commerce Templates', 'Cross-Browser Compatibility'] },
  ];
  const process = [
    ['01', 'Discovery', 'Deep dive into your goals, users, and constraints. I ask hard questions early so we build the right thing.'],
    ['02', 'Design', 'Wireframes, high-fidelity mockups, and interactive prototypes. Iterate quickly with real feedback loops.'],
    ['03', 'Develop', 'Clean, semantic, performant code using React.js, Bootstrap 5, and modern CSS — pixel-perfect from Figma.'],
    ['04', 'Deliver', 'Responsive, tested, and production-ready code. Ongoing support and maintenance as needed.'],
  ];
  return (
    <PageWrap>
      <PageHeader tag="What I offer" title="Services" sub="From first sketch to shipped product — design and development under one roof, so nothing gets lost in handoff." />
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-20)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap-grid)' }}>
          {cards.map((c, i) => <ServiceCard key={c.n} {...c} delay={i} />)}
        </div>
      </section>
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader eyebrow="How I work" title="The" dim="process" />
        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          {process.map(([n, t, d], i) => (
            <ProcessStep key={n} n={n} t={t} d={d} last={i === process.length - 1} delay={i} />
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="sr" style={{ padding: 'var(--space-24) clamp(20px,4vw,40px)', maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1 }}>Have a project <span style={{ color: 'var(--accent-orange)' }}>in mind?</span></h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', margin: '0 0 32px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 'var(--leading-normal)' }}>Let's discuss how I can help bring your idea to life with clean design and solid code.</p>
        <Button variant="accent" size="lg" icon={<Icon name="arrow" size={18} />} onClick={() => onNav('contact')}>Start a project</Button>
      </section>
    </PageWrap>
  );
}

function ProcessStep({ n, t, d, last, delay }) {
  const [h, setH] = React.useState(false);
  return (
    <div className={`sr sr-delay-${delay + 1}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: '40px 32px', borderRight: last ? 'none' : '1px solid var(--border)', background: h ? 'var(--bg-elevated)' : 'transparent', transition: `background ${EASE}` }}>
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-tighter)', color: 'var(--border-light)', display: 'block', marginBottom: 16 }}>{n}</span>
      <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>{t}</h3>
      <p style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{d}</p>
    </div>
  );
}

/* ---- Contact Screen (no form — social info only) ---- */
function ContactScreen({ onNav }) {
  useScrollReveal();
  const info = [
    ['Email', 'dush8387@gmail.com', 'mail', 'mailto:dush8387@gmail.com'],
    ['Phone', '+91 83878 01277', 'phone', 'tel:+918387801277'],
    ['Location', 'Jodhpur, Rajasthan, India', 'mappin', null],
    ['Availability', 'Open — freelance & full-time', 'zap', null],
  ];
  const socials = [
    ['github', 'GitHub', 'https://github.com/dushyant200805', 'View my repositories and open-source work'],
    ['linkedin', 'LinkedIn', 'https://linkedin.com/in/dushyant-prajapat-', 'Connect with me professionally'],
    ['instagram', 'Instagram', 'https://instagram.com/_http.dushyant', 'Follow my design journey and daily work'],
  ];
  return (
    <PageWrap>
      {/* Hero */}
      <section style={{ padding: '160px clamp(20px,4vw,40px) 60px', maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 16, justifyContent: 'center' }}>Get in touch</Eyebrow>
        <h1 className="sr" style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tighter)', lineHeight: 'var(--leading-display)' }}>Let's <span style={{ color: 'var(--accent-orange)' }}>connect</span></h1>
        <p className="sr sr-delay-1" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 'var(--leading-relaxed)' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out through any of the channels below.</p>
      </section>

      {/* Contact Info Cards */}
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-20)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--gap-grid)' }}>
          {info.map(([label, value, ic, href], i) => {
            const Inner = () => (
              <Card padding={28} className={`sr sr-delay-${i+1}`} style={{ height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--orange-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name={ic} size={20} style={{ color: 'var(--accent-orange)' }} />
                </div>
                <div style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)', marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)', lineHeight: 'var(--leading-snug)', wordBreak: 'break-word' }}>{value}</div>
              </Card>
            );
            return href
              ? <a key={label} href={href} style={{ textDecoration: 'none', color: 'inherit' }}><Inner /></a>
              : <div key={label}><Inner /></div>;
          })}
        </div>
      </section>

      {/* Social Links */}
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-20)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader eyebrow="Social" title="Find me" dim="online" />
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap-grid)' }}>
          {socials.map(([ic, label, url, desc], i) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={`sr sr-delay-${i+1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <SocialCard ic={ic} label={label} desc={desc} />
            </a>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="sr" style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card background="var(--accent-orange)" padding={60} orb={{ color: '#fff', size: 300, opacity: 0.08 }} interactive={false} style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, color: '#080808' }}>Ready to work together?</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(8,8,8,0.6)', margin: '0 0 32px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 'var(--leading-normal)' }}>Drop me an email or connect on social media. I respond within 24 hours.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" icon={<Icon name="mail" size={18} />} href="mailto:dush8387@gmail.com" style={{ background: '#080808', color: '#fff' }}>Send an email</Button>
            <Button variant="outline" size="lg" icon={<Icon name="download" size={18} />} href="uploads/Dushyant-Resume 1.pdf" style={{ borderColor: 'rgba(8,8,8,0.3)', color: '#080808' }}>Download resume</Button>
          </div>
        </Card>
      </section>
    </PageWrap>
  );
}

function SocialCard({ ic, label, desc }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: 'var(--bg-card)', border: `1px solid ${h ? 'var(--border-light)' : 'var(--border)'}`, borderRadius: 'var(--radius-lg)', padding: 32, transition: `all ${EASE}`, transform: h ? 'translateY(-3px)' : 'none', cursor: 'pointer' }}>
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

Object.assign(window, { ServicesScreen, ContactScreen });
