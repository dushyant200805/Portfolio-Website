export function Eyebrow({ children, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)', ...style }}>
      <span style={{ width: 20, height: 1, background: 'currentColor' }} />
      {children}
    </span>
  );
}
