/* ============================================
   Work Screen — Project grid with real images
   ============================================ */

function PageHeader({ tag, title, sub }) {
  return (
    <header className="sr" style={{ padding: '140px clamp(20px,4vw,40px) 70px', maxWidth: 'var(--container-max)', margin: '0 auto 60px', borderBottom: '1px solid var(--border)' }}>
      <Eyebrow style={{ marginBottom: 16, display: 'flex' }}>{tag}</Eyebrow>
      <h1 style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-display)' }}>{title}</h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 540, lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{sub}</p>
    </header>
  );
}

const PROJECTS = [
  { featured: true, img: 'uploads/HealthCare.webp', tags: ['Admin Dashboard', 'React', 'Featured'], title: 'HealthCare Admin Panel', desc: 'A comprehensive healthcare administration dashboard featuring patient management, appointment scheduling, analytics modules, and a clean medical UI designed for real clinical workflows.', meta: '2025 — Featured Project', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Crecketzen.png', tags: ['HTML/CSS', 'Multi-page', 'Sports'], title: 'Crickzgen — Cricket Academy', desc: 'Advanced cricket training and coaching multipage website with team listings, match schedules, player profiles, and dynamic sports-themed visual identity.', meta: '2025 — Sports Template', github: 'https://github.com/dushyant200805/Crickzgen-Creicket-Multipage-Template' },
  { img: 'uploads/florvelle.png', tags: ['HTML/CSS', 'E-Commerce'], title: 'Florvielle — Flower Shop', desc: 'Multi-page flower shop website for professional florists with product galleries, smooth animations, and a sophisticated botanical design aesthetic.', meta: '2025 — E-Commerce', github: 'https://github.com/dushyant200805/florvielle' },
  { img: 'uploads/hevintza.png', tags: ['HTML/CSS/JS', 'NGO'], title: 'Hevinta Trust — NGO Website', desc: 'Multi-page NGO website template for trusts and charitable organizations with donation flows, cause pages, volunteer profiles, and responsive design.', meta: '2025 — Non-Profit', github: 'https://github.com/dushyant200805/Hevinta-React-Template' },
  { img: 'uploads/Tennixa.png', tags: ['HTML/CSS', 'Sports'], title: 'Tennixa — Tennis Academy', desc: 'Multi-page tennis academy website for professional coaching with tournament listings, player profiles, court rentals, and club memberships.', meta: '2025 — Sports Template', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Ornuvia.png', tags: ['HTML/CSS', 'E-Commerce'], title: 'Ornuvia — Luxury Jewellery', desc: 'Luxury multipage jewellery website template for modern businesses with product collections, elegant gallery, and sophisticated dark/light aesthetic.', meta: '2025 — E-Commerce', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/ShopCron.png', tags: ['HTML/CSS', 'E-Commerce'], title: 'ShopCron — Fashion Store', desc: 'Stylish clothing and fashion e-commerce multipage website template with trending collections, brand showcase, testimonials, and blog integration.', meta: '2025 — Fashion', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Techluno.png', tags: ['HTML/CSS/JS', 'Corporate'], title: 'Techluno — IT Solutions', desc: 'Multi-page IT solutions template for modern technology companies with service listings, case studies, team profiles, and client testimonials.', meta: '2025 — Corporate IT', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Nenobytech.png', tags: ['HTML/CSS/JS', 'IT Services'], title: 'Nanobytech — IT Services', desc: 'Multi-page website template for advanced IT services with innovative solutions showcase, working process, case studies, and team sections.', meta: '2025 — IT Services', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Luggoswift.png', tags: ['HTML/CSS', 'Bootstrap 5.3'], title: 'LuggoSwift — Transport', desc: 'Transport multipage website template with logistics workflow, client testimonials, dark and light mode, W3C validated code, and PHP form integration.', meta: '2025 — Logistics', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/horserid.png', tags: ['HTML/CSS', 'Bootstrap 5.3'], title: 'HorseRid — Riding Club', desc: 'Professional horse riding and equestrian club multipage website with responsive layout, dark/light mode, accessibility checks, and PHP email form.', meta: '2025 — Equestrian', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Luvoio-spa.png', tags: ['HTML/CSS', 'Wellness'], title: 'Luvio Spa — Wellness Site', desc: 'Premium multi-page spa and wellness website for elevated well-being with treatment listings, appointment booking, blog, and team showcase.', meta: '2025 — Wellness', github: 'https://github.com/dushyant200805/Luvio-SPA-React-Template' },
  { img: 'uploads/Muclonus.png', tags: ['HTML/CSS/JS', 'Fitness'], title: 'Musclenox — Fitness Center', desc: 'Modern multi-page website template for fitness and gym centers with program listings, trainer profiles, pricing plans, and contact integration.', meta: '2025 — Fitness', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/Jeckpotdeck.png', tags: ['HTML/CSS/JS', 'Gaming'], title: 'JackpotDeck — Casino Site', desc: 'Multipage casino and betting website template with crypto lotteries, jackpot listings, top winners, premium game showcase, and player services.', meta: '2025 — Gaming', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/velontrax.png', tags: ['HTML/CSS', 'Automotive'], title: 'Velontrax — Car Rental', desc: 'Multi-page car rental website template for reliable and affordable travel with fleet showcase, pricing plans, driver profiles, and testimonials.', meta: '2025 — Automotive', github: 'https://github.com/dushyant200805' },
  { img: 'uploads/thumbnail.jpg', tags: ['Admin Dashboard', 'JavaScript'], title: 'Prime Panel — Admin Dashboard', desc: 'Premium multi-purpose admin control panel with colorful charts, task planning, holiday calendar, notifications, and modular analytics components.', meta: '2025 — Admin UI', github: 'https://github.com/dushyant200805' },
];

function WorkCard({ featured, img, tags, title, desc, meta, github, delay }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={github} target="_blank" rel="noopener noreferrer" className={`sr sr-delay-${delay}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderColor: h ? 'var(--border-light)' : 'var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', transition: `all ${EASE}`, transform: h ? 'translateY(-4px)' : 'none', gridColumn: featured ? '1 / -1' : 'auto', textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: featured ? '21/9' : '16/9', background: 'var(--bg-elevated)' }}>
        <img src={img} alt={title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: `transform 0.5s ${EASE}`, transform: h ? 'scale(1.04)' : 'scale(1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,8,8,0.75) 0%,transparent 50%)', opacity: h ? 1 : 0.4, transition: `opacity ${EASE}`, display: 'flex', alignItems: 'flex-end', padding: 32 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-xs)', color: '#fff', opacity: h ? 1 : 0, transition: `opacity ${EASE}` }}>View on GitHub <Icon name="arrow" size={14} /></span>
        </div>
      </div>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>{tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', letterSpacing: 'var(--tracking-snug)', color: h ? 'var(--accent-orange)' : 'var(--text-primary)', transition: `color ${EASE}` }}>{title}</h3>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: 'var(--text-3xs)', color: 'var(--text-muted)' }}>{meta}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-2xs)', fontWeight: 500, color: 'var(--text-secondary)' }}>View project <Icon name="externalLink" size={14} /></span>
        </div>
      </div>
    </a>
  );
}

function WorkScreen() {
  useScrollReveal();
  return (
    <PageWrap>
      <PageHeader tag="Portfolio" title="Selected work" sub="A curated collection of 16+ websites and templates across diverse industries — e-commerce, sports, IT, wellness, automotive, and more." />
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-cards)' }}>
          {PROJECTS.map((it, i) => <WorkCard key={i} {...it} delay={(i % 3) + 1} />)}
        </div>
      </section>
    </PageWrap>
  );
}

Object.assign(window, { PageHeader, WorkScreen, PROJECTS });
