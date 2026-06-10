import { Icon } from './Icon';

const EASE = '0.3s cubic-bezier(0.4,0,0.2,1)';
const link = { fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0, fontFamily: 'var(--font-body)', textAlign: 'left', transition: `color ${EASE}`, textDecoration: 'none' };
const h4 = { fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)', marginBottom: 18 };

export function Footer({ onNav }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '60px clamp(20px,4vw,40px) 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="footer-cols">
          <div style={{ maxWidth: 300 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: 'var(--tracking-snug)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              Dushyant<span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-orange)' }} />
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', margin: 0 }}>UI/UX Designer &amp; Frontend Developer crafting premium digital experiences from Jodhpur, India.</p>
          </div>
          <div>
            <div style={h4}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button style={link} onClick={() => onNav('home')}>Home</button>
              <button style={link} onClick={() => onNav('work')}>Work</button>
              <button style={link} onClick={() => onNav('services')}>Services</button>
              <button style={link} onClick={() => onNav('about')}>About</button>
            </div>
          </div>
          <div>
            <div style={h4}>Social</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="https://github.com/dushyant200805" target="_blank" rel="noopener noreferrer" style={link}>GitHub</a>
              <a href="https://linkedin.com/in/dushyant-prajapat-" target="_blank" rel="noopener noreferrer" style={link}>LinkedIn</a>
              <a href="https://instagram.com/_http.dushyant" target="_blank" rel="noopener noreferrer" style={link}>Instagram</a>
            </div>
          </div>
          <div>
            <div style={h4}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:dush8387@gmail.com" style={link}>dush8387@gmail.com</a>
              <a href="tel:+918387801277" style={link}>+91 83878 01277</a>
              <button style={link} onClick={() => onNav('contact')}>Hire me</button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 32, flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>&copy; 2025 Dushyant Prajapat. All rights reserved.</span>
          <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>Designed &amp; built with <span style={{ color: 'var(--accent-orange)' }}>&hearts;</span> in India</span>
        </div>
      </div>
    </footer>
  );
}
