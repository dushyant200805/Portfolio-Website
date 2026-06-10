export function Tag({ children, soft, tone, style }) {
  const base = soft
    ? (tone === 'dark' ? { background: 'rgba(8,8,8,0.15)', color: 'rgba(8,8,8,0.6)' } : { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' })
    : { background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' };
  return <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, padding: '4px 12px', fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap', ...base, ...style }}>{children}</span>;
}
