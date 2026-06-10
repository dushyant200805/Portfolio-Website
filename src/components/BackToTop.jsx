import { useState, useEffect } from 'react';
import { Icon } from './Icon';

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button className={`back-to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <Icon name="arrowUp" size={20} />
    </button>
  );
}
