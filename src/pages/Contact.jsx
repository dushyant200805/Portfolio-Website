import { useState } from 'react';
import { PageWrap } from '../components/PageWrap';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { SocialCard } from '../components/SocialCard';
import { CONTACT_INFO } from '../data/contact';
import { SOCIALS } from '../data/socials';

export function ContactScreen({ onNav, leaving }) {
  return (
    <PageWrap>
      <section style={{ padding: '160px clamp(20px,4vw,40px) 60px', maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 16, justifyContent: 'center' }}>Get in touch</Eyebrow>
        <h1 data-aos="fade-up"  data-aos-duration="1000" style={{ margin: '0 0 24px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h1)', letterSpacing: 'var(--tracking-tighter)', lineHeight: 'var(--leading-display)' }}>Let's <span style={{ color: 'var(--accent-orange)' }}>connect</span></h1>
        <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="60" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 'var(--leading-relaxed)' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out through any of the channels below.</p>
      </section>

      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-20)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="contact-grid">
          {CONTACT_INFO.map((c, i) => {
            const inner = (
              <Card key={c.label} padding={28} data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(i + 1) * 60}`} style={{ height: '100%', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--orange-soft)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name={c.ic} size={20} />
                </div>
                <div style={{ fontSize: 'var(--text-eyebrow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)', marginBottom: 8 }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-h5)', lineHeight: 'var(--leading-snug)', wordBreak: 'break-word' }}>{c.value}</div>
              </Card>
            );
            return c.href ? <a key={c.label} href={c.href} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'block', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>{inner}</a> : <div key={c.label}>{inner}</div>;
          })}
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,4vw,40px) var(--space-20)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader eyebrow="Social" title="Find me" dim="online" />
        <div className="social-grid">
          {SOCIALS.map((s, i) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay={`${(i + 1) * 60}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <SocialCard ic={s.ic} label={s.label} desc={s.desc} />
            </a>
          ))}
        </div>
      </section>

      <section data-aos="fade-up"  data-aos-duration="1000" style={{ padding: '0 clamp(20px,4vw,40px) var(--space-24)', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card background="var(--accent-orange)" padding={60} orb={{ color: '#fff', size: 300, opacity: 0.08 }} interactive={false} style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-h2)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1, color: '#080808' }}>Ready to work together?</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(8,8,8,0.6)', margin: '0 0 32px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 'var(--leading-normal)' }}>Drop me an email or connect on social media. I respond within 24 hours.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" icon="mail" href="mailto:dush8387@gmail.com" style={{ background: '#080808', color: '#fff' }}>Send an email</Button>
            <Button variant="outline" size="lg" icon="download" href="/uploads/Dushyant-Resume 1.pdf" style={{ borderColor: 'rgba(8,8,8,0.3)', color: '#080808' }} hoverStyle={{ background: '#080808', color: '#fff', borderColor: '#080808' }}>Download resume</Button>
          </div>
        </Card>
      </section>
    </PageWrap>
  );
}
