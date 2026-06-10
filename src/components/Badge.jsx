export function Badge({ children, dotColor = 'var(--accent-green)', style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 999, padding: '8px 16px', fontSize: 'var(--text-3xs)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-secondary)', ...style }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor, flexShrink: 0 }}></span>
      {children}
    </span>
  );
}
