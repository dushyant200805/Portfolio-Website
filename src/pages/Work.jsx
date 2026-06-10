import { PageWrap } from '../components/PageWrap';
import { Eyebrow } from '../components/Eyebrow';
import { WorkCard } from '../components/WorkCard';
import { PROJECTS } from '../data/projects';

function PageHeader({ tag, title, sub, leaving }) {
  return (
    <header className={leaving ? 'leaving' : ''} data-aos="fade-up"  data-aos-duration="1000" style={{ padding: '140px clamp(20px,4vw,40px) 70px', maxWidth: 'var(--container-max)', margin: '0 auto 60px', borderBottom: '1px solid var(--border)' }}>
      <Eyebrow style={{ marginBottom: 16, display: 'flex' }}>{tag}</Eyebrow>
      <h1 style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-display)' }}>{title}</h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 540, lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{sub}</p>
    </header>
  );
}

export function WorkScreen({ leaving }) {
  return (
    <PageWrap>
      <PageHeader tag="Portfolio" title="Selected work" sub="A curated collection of 16+ websites and templates across diverse industries — e-commerce, sports, IT, wellness, automotive, and more." leaving={leaving} />
      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="work-grid">
          {PROJECTS.map((it, i) => <WorkCard key={i} {...it} />)}
        </div>
      </section>
    </PageWrap>
  );
}
