import { useState, useEffect, useRef } from 'react';

const STRIP_COUNT = 10;
const STAGGER = 55;
const DURATION = 800;
const EASING = 'cubic-bezier(0.76, 0, 0.24, 1)';
function getStripColor() {
  const theme = localStorage.getItem('dp-theme');
  return theme === 'light' ? '#000' : '#fff';
}

export function Loader({ onDone, minLoad = 800 }) {
  const [exiting, setExiting] = useState(false);
  const minMet = useRef(false);
  const loaded = useRef(document.readyState === 'complete');
  const stripColor = useRef(getStripColor());

  useEffect(() => {
    const minTimer = setTimeout(() => {
      minMet.current = true;
      tryExit();
    }, minLoad);

    const onLoad = () => {
      loaded.current = true;
      tryExit();
    };
    if (!loaded.current) window.addEventListener('load', onLoad);

    function tryExit() {
      if (minMet.current && loaded.current) {
        setExiting(true);
        const total = (STRIP_COUNT - 1) * STAGGER + DURATION + 80;
        setTimeout(onDone, total);
      }
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--bg)', pointerEvents: 'none' }}>
      {Array.from({ length: STRIP_COUNT }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute', top: 0, height: '100%', left: `${i * 10}vw`, width: '10vw',
          background: stripColor.current,
          transformOrigin: 'left center',
          transform: exiting ? 'scaleX(0)' : 'scaleX(1)',
          transition: `transform ${DURATION}ms ${EASING} ${i * STAGGER}ms`,
        }} />
      ))}
    </div>
  );
}
