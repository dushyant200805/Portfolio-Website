/* ============================================
   App Shell — Loader, Router, BackToTop, Theme
   ============================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Loader Screen ---- */
function Loader({ onDone }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2200;
    const iv = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress >= 1) {
        clearInterval(iv);
        setTimeout(() => { setDone(true); setTimeout(onDone, 600); }, 300);
      }
    }, 16);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className={`loader-screen ${done ? 'done' : ''}`}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.1, background: 'var(--accent-orange)', top: '20%', right: '10%' }}></div>
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.08, background: 'var(--accent-blue)', bottom: '20%', left: '15%' }}></div>
      </div>
      <div className="loader-counter">{count}</div>
      <div className="loader-name" style={{ opacity: count > 20 ? 1 : 0, transition: 'opacity 0.4s' }}>Dushyant Prajapat</div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 8, opacity: count > 50 ? 1 : 0, transition: 'opacity 0.5s' }}>UI/UX Designer &amp; Frontend Developer</div>
      <div className="loader-bar-track" style={{ marginTop: 40 }}>
        <div className="loader-bar-fill" style={{ width: count + '%' }}></div>
      </div>
    </div>
  );
}

/* ---- Back To Top ---- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button className={`back-to-top ${show ? 'show' : ''}`} onClick={scrollUp} aria-label="Back to top">
      <Icon name="arrowUp" size={20} />
    </button>
  );
}

/* ---- Tweak Defaults ---- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#ff5500",
  "accentName": "Orange (Default)",
  "heroStyle": "slide-up",
  "cardRadius": 24
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  { name: 'Orange (Default)', value: '#ff5500', hover: '#ff6a1f' },
  { name: 'Electric Blue', value: '#2A6FDB', hover: '#3d80e8' },
  { name: 'Emerald Green', value: '#1F8A5B', hover: '#27a06c' },
  { name: 'Royal Purple', value: '#7A5AE0', hover: '#8d6ef0' },
  { name: 'Hot Pink', value: '#E0459A', hover: '#e860ab' },
  { name: 'Crimson Red', value: '#DC2626', hover: '#e74444' },
];

/* ---- App ---- */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home','work','services','about','contact'].includes(hash) ? hash : 'home';
  });
  const [theme, setTheme] = useState(() => localStorage.getItem('dp-theme') || 'dark');

  const onNav = useCallback((s) => {
    setScreen(s);
    window.location.hash = s;
    window.scrollTo({ top: 0 });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('dp-theme', next);
      return next;
    });
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Apply accent color from tweaks
  useEffect(() => {
    const accent = ACCENT_OPTIONS.find(a => a.name === t.accentName) || ACCENT_OPTIONS[0];
    document.documentElement.style.setProperty('--accent-orange', accent.value);
    document.documentElement.style.setProperty('--accent-hover', accent.hover);
    document.documentElement.style.setProperty('--accent', accent.value);
    document.documentElement.style.setProperty('--orange-soft', accent.value + '1a');
    document.documentElement.style.setProperty('--orange-line', accent.value + '33');
  }, [t.accentName]);

  // Apply card radius from tweaks
  useEffect(() => {
    document.documentElement.style.setProperty('--radius-lg', t.cardRadius + 'px');
  }, [t.cardRadius]);

  // Listen for hash changes
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home','work','services','about','contact'].includes(hash)) setScreen(hash);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const screens = {
    home: HomeScreen,
    work: WorkScreen,
    services: ServicesScreen,
    about: AboutScreen,
    contact: ContactScreen,
  };
  const Screen = screens[screen] || HomeScreen;

  if (loading) return <Loader onDone={() => setLoading(false)} />;

  return (
    <div>
      <Nav active={screen} onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <Screen onNav={onNav} />
      <Footer onNav={onNav} />
      <BackToTop />
      <TweaksPanel>
        <TweakSection label="Color Variant" />
        <TweakRadio label="Accent color" value={t.accentName}
          options={ACCENT_OPTIONS.map(a => a.name)}
          onChange={(v) => setTweak('accentName', v)} />
        <TweakSection label="Layout" />
        <TweakSlider label="Card radius" value={t.cardRadius} min={0} max={40} step={2} unit="px"
          onChange={(v) => setTweak('cardRadius', v)} />
        <TweakToggle label="Dark mode" value={theme === 'dark'}
          onChange={(v) => { const next = v ? 'dark' : 'light'; setTheme(next); localStorage.setItem('dp-theme', next); }} />
      </TweaksPanel>
    </div>
  );
}

/* ---- Mount ---- */
function tryMount() {
  if (window.HomeScreen && window.WorkScreen && window.ServicesScreen && window.AboutScreen && window.ContactScreen && window.Nav && window.Footer) {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  } else {
    setTimeout(tryMount, 30);
  }
}
tryMount();
