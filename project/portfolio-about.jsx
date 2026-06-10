/* ============================================
   About Screen — Timeline, Skills, Education
   ============================================ */

function AboutScreen({ onNav }) {
  useScrollReveal();
  return (
    <PageWrap>
      <AboutHero />
      <Experience />
      <SkillsSection />
      <Education />
      <Certifications />
      <ResumeDownload onNav={onNav} />
    </PageWrap>
  );
}

function AboutHero() {
  return (
    <section style={{ padding: '140px clamp(20px,4vw,40px) 80px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <Eyebrow style={{ marginBottom: 16, display: 'flex' }}>About me</Eyebrow>
          <h1 className="sr" style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-display)' }}>Dushyant<br/><span style={{ color: 'var(--accent-orange)' }}>Prajapat</span></h1>
          <p className="sr sr-delay-1" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 24px' }}>Software Developer and Frontend Developer with hands-on experience building responsive websites and React.js applications. Skilled in turning Figma designs into pixel-perfect, interactive web interfaces.</p>
          <p className="sr sr-delay-2" style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 32px' }}>Based in Jodhpur, Rajasthan — working with teams globally. Currently building responsive web experiences at Lucid Outsourcing Solutions.</p>
          <div className="sr sr-delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" icon={<Icon name="download" size={15} />} href="uploads/Dushyant-Resume 1.pdf">Download CV</Button>
            <Button variant="outline" icon={<Icon name="arrow" size={15} />} href="https://github.com/dushyant200805">GitHub Profile</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Profile Photo */}
          <div className="sr" style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '1/1', maxWidth: 400 }}>
            <img src="uploads/profile-image.jpg" alt="Dushyant Prajapat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
              <Badge dotColor="var(--accent-green)" style={{ background: 'rgba(8,8,8,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>Available for work</Badge>
            </div>
          </div>
          {/* Stats Card */}
          <Card padding={32} orb={{ color: 'var(--accent-orange)', size: 200, opacity: 0.1, x: -20, y: -20 }}>
            <div className="sr" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                <StatBlock value="16+" label="Projects" />
                <StatBlock value="1" label="Years Exp" />
                <StatBlock value="13+" label="Websites" accent />
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}><Icon name="mappin" size={14} style={{ color: 'var(--accent-orange)' }} />Jodhpur, Rajasthan, India</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}><Icon name="briefcase" size={14} style={{ color: 'var(--accent-orange)' }} />Lucid Outsourcing Solutions</div>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[['github', 'GitHub', 'https://github.com/dushyant200805'], ['linkedin', 'LinkedIn', 'https://linkedin.com/in/dushyant-prajapat-'], ['instagram', 'Instagram', 'https://instagram.com/_http.dushyant']].map(([ic, lb, url]) => (
                  <a key={lb} href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 999, padding: '8px 16px', fontSize: 'var(--text-2xs)', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: `all ${EASE}` }}><Icon name={ic} size={14} />{lb}</a>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Experience" title="Work" dim="history" />
      <Card padding={40} style={{ marginBottom: 24 }}>
        <div className="sr" style={{ display: 'flex', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
            <div className="timeline-dot"></div>
            <div style={{ width: 2, flex: 1, background: 'var(--border)', marginTop: 8 }}></div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>Frontend Web Developer / UI Developer</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--accent-orange)' }}><Icon name="briefcase" size={14} />Lucid Outsourcing Solutions Pvt. Ltd.</div>
              </div>
              <Badge dotColor="var(--accent-green)" style={{ fontSize: 'var(--text-eyebrow)' }}>Aug 2025 — Present</Badge>
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="mappin" size={12} />Jodhpur, Rajasthan</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Developed 13+ responsive landing pages and multi-page websites using HTML5, CSS3, JavaScript, Bootstrap 5, and jQuery.',
                'Built a fully responsive React.js website using reusable components and Bootstrap-based layouts.',
                'Converted Figma high-fidelity designs into pixel-perfect, responsive frontend interfaces.',
                'Created reusable UI components to improve development speed and maintain design consistency.',
                'Implemented interactive UI features including sliders, tabs, modals, dropdowns, accordions, and form validation.',
                'Collaborated with designers, developers, and project managers to deliver clean, user-friendly web interfaces.'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                  <span style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: 2 }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { cat: 'Languages', color: 'var(--accent-blue)', items: ['JavaScript', 'HTML5', 'CSS3', 'PHP'] },
    { cat: 'Frontend', color: 'var(--accent-orange)', items: ['React.js', 'Bootstrap 5', 'jQuery', 'Responsive Web Design'] },
    { cat: 'Design Tools', color: 'var(--accent-purple)', items: ['Figma', 'Adobe XD', 'Canva'] },
    { cat: 'Concepts', color: 'var(--accent-green)', items: ['React Hooks', 'Component Architecture', 'DOM Manipulation', 'Mobile-First Design', 'Cross-Browser Compatibility'] },
  ];
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Expertise" title="Skills &" dim="tools" />
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--gap-grid)' }}>
        {skills.map((s, i) => (
          <Card key={s.cat} padding={32} className={`sr sr-delay-${i + 1}`}>
            <div style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: s.color, marginBottom: 16 }}>{s.cat}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {s.items.map(item => <Chip key={item}>{item}</Chip>)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const items = [
    { degree: 'Master of Computer Applications (MCA)', school: 'Indira Gandhi National Open University (IGNOU)', period: 'Jun 2026 — Present', status: 'Currently Pursuing', color: 'var(--accent-blue)' },
    { degree: 'Bachelor of Computer Applications (BCA)', school: 'Lucky Institute of Professional Studies, Jodhpur', period: 'Jun 2022 — Jun 2025', status: 'CGPA: 7.86', color: 'var(--accent-orange)' },
  ];
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Education" title="Academic" dim="background" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-grid)' }} className="about-grid">
        {items.map((ed, i) => (
          <Card key={i} padding={32} className={`sr sr-delay-${i + 1}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: ed.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="book" size={22} stroke={2} style={{ color: '#fff' }} />
              </div>
              <Badge dotColor={ed.color} style={{ fontSize: 'var(--text-eyebrow)' }}>{ed.status}</Badge>
            </div>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>{ed.degree}</h3>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0 0 12px', lineHeight: 'var(--leading-normal)' }}>{ed.school}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}><Icon name="calendar" size={12} />{ed.period}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { name: 'ReactJS for Beginners', org: 'Simplilearn SkillUp', date: 'May 2026' },
    { name: 'Claude 101', org: 'Anthropic', date: 'May 2026' },
  ];
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Certifications" title="Credentials" />
      <div style={{ display: 'flex', gap: 'var(--gap-grid)', flexWrap: 'wrap' }}>
        {certs.map((c, i) => (
          <Card key={i} padding={28} className={`sr sr-delay-${i + 1}`} style={{ flex: '1 1 280px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--orange-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="award" size={18} style={{ color: 'var(--accent-orange)' }} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>{c.name}</h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0 0 8px' }}>{c.org}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}><Icon name="calendar" size={12} />{c.date}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ResumeDownload({ onNav }) {
  return (
    <section className="sr" style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <Card background="var(--accent-orange)" padding={60} orb={{ color: '#fff', size: 300, opacity: 0.08 }} interactive={false} style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, color: '#080808' }}>Want the full picture?</h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'rgba(8,8,8,0.6)', margin: '0 0 32px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 'var(--leading-normal)' }}>Download my resume for the complete rundown of skills, experience, and education.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" icon={<Icon name="download" size={18} />} href="uploads/Dushyant-Resume 1.pdf" style={{ background: '#080808', color: '#fff' }}>Download Resume</Button>
          <Button variant="outline" size="lg" icon={<Icon name="arrow" size={18} />} onClick={() => onNav('contact')} style={{ borderColor: 'rgba(8,8,8,0.3)', color: '#080808' }}>Get in touch</Button>
        </div>
      </Card>
    </section>
  );
}

Object.assign(window, { AboutScreen });
