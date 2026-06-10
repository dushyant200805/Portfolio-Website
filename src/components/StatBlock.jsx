export function StatBlock({ value, label, accent }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.75rem,3vw,2.25rem)', letterSpacing: '-0.04em', lineHeight: 1, color: accent ? 'var(--accent-orange)' : 'inherit' }}>{value}</div>
      <div style={{ fontSize: 'var(--text-eyebrow)', color: 'inherit', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6, opacity: 0.5 }}>{label}</div>
    </div>
  );
}
