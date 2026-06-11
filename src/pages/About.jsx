import { useState } from 'react';
import { PageWrap } from '../components/PageWrap';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { Chip } from '../components/Chip';
import { Button } from '../components/Button';
import { StatBlock } from '../components/StatBlock';
import { Icon } from '../components/Icon';
import { SKILLS } from '../data/skills';
import { EDUCATION } from '../data/education';
import { CERTS } from '../data/certs';

function AboutHero({ leaving }) {
  return (
    <section className={leaving ? 'leaving' : ''} style={{ padding: '140px clamp(20px,4vw,40px) 80px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div className="about-grid">
        <div>
          <Eyebrow style={{ marginBottom: 16, display: 'flex' }}>About me</Eyebrow>
          <h1 data-aos="fade-up"  data-aos-duration="1000" style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-display)' }}>Dushyant<br/><span style={{ color: 'var(--accent-orange)' }}>Prajapat</span></h1>
          <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 24px' }}>Software Developer and Frontend Developer with hands-on experience building responsive websites and React.js applications. Skilled in turning Figma designs into pixel-perfect, interactive web interfaces.</p>
          <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="120" style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 32px' }}>Based in Jodhpur, Rajasthan — working with teams globally. Currently building responsive web experiences at Lucid Outsourcing Solutions.</p>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="180" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" icon="download" href="/uploads/Dushyant-Resume 1.pdf">Download CV</Button>
            <Button variant="outline" icon="arrow" href="https://github.com/dushyant200805">GitHub Profile</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          <Card padding={32} orb={{ color: 'var(--accent-orange)', size: 200, opacity: 0.1, x: -20, y: -20 }}>
            <div data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                <StatBlock value="17+" label="Projects" />
                <StatBlock value="1+" label="Years Exp" />
                <StatBlock value="13+" label="Websites" accent />
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}><Icon name="mappin" size={14} style={{ color: 'var(--accent-orange)' }} />Jodhpur, Rajasthan, India</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}><Icon name="briefcase" size={14} style={{ color: 'var(--accent-orange)' }} />Lucid Outsourcing Solutions</div>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[['github', 'GitHub', 'https://github.com/dushyant200805'], ['linkedin', 'LinkedIn', 'https://linkedin.com/in/dushyant-prajapat-'], ['instagram', 'Instagram', 'https://instagram.com/_http.dushyant']].map(([ic, lb, url]) => (
                  <a key={lb} href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 999, padding: '8px 16px', fontSize: 'var(--text-2xs)', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}><Icon name={ic} size={14} />{lb}</a>
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
        <div data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
            <div className="timeline-dot" />
            <div style={{ width: 2, flex: 1, background: 'var(--border)', marginTop: 8 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>Frontend Web Developer / UI Developer</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--accent-orange)' }}><Icon name="briefcase" size={14} />Lucid Outsourcing Solutions Pvt. Ltd.</div>
              </div>
              <Badge dotColor="var(--accent-green)">Aug 2025 — Present</Badge>
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
                  <span style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: 2 }}>&rarr;</span>
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
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Expertise" title="Skills &" dim="tools" />
      <div className="services-grid">
        {SKILLS.map((s, i) => (
          <Card key={s.cat} padding={32} data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(i + 1) * 60}`}>
            <div style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: s.color, marginBottom: 16 }}>{s.cat}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{s.items.map(item => <Chip key={item}>{item}</Chip>)}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Education" title="Academic" dim="background" />
      <div className="about-grid">
        {EDUCATION.map((ed, i) => (
          <Card key={i} padding={32} data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(i + 1) * 60}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: ed.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="book" size={22} />
              </div>
              <Badge dotColor={ed.color}>{ed.status}</Badge>
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
  return (
    <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <SectionHeader eyebrow="Certifications" title="Credentials" />
      <div style={{ display: 'flex', gap: 'var(--gap-grid)', flexWrap: 'wrap' }}>
        {CERTS.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{ flex: '1 1 280px', textDecoration: 'none', color: 'inherit' }}>
            <Card padding={28} data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(i + 1) * 60}`} style={{ flex: '1 1 280px', height: '100%', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flex: 1 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--orange-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="award" size={18} style={{ color: 'var(--accent-orange)' }} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>{c.name}</h4>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0 0 8px' }}>{c.org}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}><Icon name="calendar" size={12} />{c.date}</div>
                  </div>
                </div>
                <Icon name="download" size={16} style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: 2 }} />
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}

function ResumeDownload({ onNav }) {
  return (
    <section data-aos="fade-up"  data-aos-duration="1000" style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <Card background="var(--accent-orange)" padding={60} orb={{ color: '#fff', size: 300, opacity: 0.08 }} interactive={false} style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, color: '#080808' }}>Want the full picture?</h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'rgba(8,8,8,0.6)', margin: '0 0 32px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 'var(--leading-normal)' }}>Download my resume for the complete rundown of skills, experience, and education.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" icon="download" href="/uploads/Dushyant-Resume 1.pdf" style={{ background: '#080808', color: '#fff' }}>Download Resume</Button>
          <Button variant="outline" size="lg" icon="arrow" onClick={() => onNav('contact')} style={{ borderColor: 'rgba(8,8,8,0.3)', color: '#080808' }} hoverStyle={{ background: '#080808', color: '#fff', borderColor: '#080808' }}>Get in touch</Button>
        </div>
      </Card>
    </section>
  );
}

export function AboutScreen({ onNav, leaving }) {
  return (
    <PageWrap>
      <AboutHero leaving={leaving} />
      <Experience />
      <SkillsSection />
      <Education />
      <Certifications />
      <ResumeDownload onNav={onNav} />
    </PageWrap>
  );
}
