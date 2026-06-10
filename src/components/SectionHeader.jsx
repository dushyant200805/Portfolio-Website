import { Eyebrow } from './Eyebrow';
import { Button } from './Button';

export function SectionHeader({ eyebrow, title, dim, link, onLink, style }) {
  return (
    <div data-aos="fade-up"  data-aos-duration="1000" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 48, flexWrap: 'wrap', ...style }}>
      <div>
        <Eyebrow style={{ marginBottom: 12 }}>{eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, margin: 0 }}>{title}</h2>
        {dim && <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '8px 0 0' }}>{dim}</p>}
      </div>
      {link && <Button variant="outline" size="sm" icon="arrow" onClick={onLink}>{link}</Button>}
    </div>
  );
}
