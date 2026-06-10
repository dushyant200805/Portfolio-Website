import { PageWrap } from '../components/PageWrap';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICE_CARDS_FULL } from '../data/services';
import { PROCESS } from '../data/process';

function PageHeader({ tag, title, sub, leaving }) {
  return (
    <header className={leaving ? 'leaving' : ''} data-aos="fade-up"  data-aos-duration="1000" style={{ padding: '140px clamp(20px,4vw,40px) 70px', maxWidth: 'var(--container-max)', margin: '0 auto 60px', borderBottom: '1px solid var(--border)' }}>
      <Eyebrow style={{ marginBottom: 16, display: 'flex' }}>{tag}</Eyebrow>
      <h1 style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-display)' }}>{title}</h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 540, lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{sub}</p>
    </header>
  );
}

function ProcessStep({ n, t, d, last, delay }) {
  return (
    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(delay + 1) * 60}`}
      style={{ padding: '40px 32px', borderRight: last ? 'none' : '1px solid var(--border)' }}>
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-tighter)', color: 'var(--border-light)', display: 'block', marginBottom: 16 }}>{n}</span>
      <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)' }}>{t}</h3>
      <p style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{d}</p>
    </div>
  );
}

export function ServicesScreen({ onNav, leaving }) {
  return (
    <PageWrap>
      <PageHeader tag="What I offer" title="Services" sub="From first sketch to shipped product — design and development under one roof, so nothing gets lost in handoff." leaving={leaving} />
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-20)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="services-grid">
          {SERVICE_CARDS_FULL.map((c, i) => <ServiceCard key={c.n} {...c} delay={i} />)}
        </div>
      </section>
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader eyebrow="How I work" title="The" dim="process" />
        <div className="process-grid">
          {PROCESS.map(([n, t, d], i) => <ProcessStep key={n} n={n} t={t} d={d} last={i === PROCESS.length - 1} delay={i} />)}
        </div>
      </section>
      <section data-aos="fade-up"  data-aos-duration="1000" style={{ padding: 'var(--space-24) clamp(20px,4vw,40px)', maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1 }}>Have a project <span style={{ color: 'var(--accent-orange)' }}>in mind?</span></h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', margin: '0 0 32px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 'var(--leading-normal)' }}>Let's discuss how I can help bring your idea to life with clean design and solid code.</p>
        <Button variant="accent" size="lg" icon="arrow" onClick={() => onNav('contact')}>Start a project</Button>
      </section>
    </PageWrap>
  );
}
