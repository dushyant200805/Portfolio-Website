import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Loader } from './components/Loader';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HomeScreen } from './pages/Home';
import { WorkScreen } from './pages/Work';
import { ServicesScreen } from './pages/Services';
import { AboutScreen } from './pages/About';
import { ContactScreen } from './pages/Contact';
import './styles/design-system.css';
import './styles/portfolio.css';

const SCREENS = ['home', 'work', 'services', 'about', 'contact'];

function getInitialScreen() {
  const hash = window.location.hash.replace('#', '');
  return SCREENS.includes(hash) ? hash : 'home';
}

export default function App() {
  const [boot, setBoot] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [screen, setScreen] = useState(getInitialScreen);
  const [theme, setTheme] = useState(() => localStorage.getItem('dp-theme') || 'dark');

  const navigate = useCallback((s) => {
    setRouteLoading(true);
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'cubic-bezier(0.22,1,0.36,1)', offset: 60 });
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (SCREENS.includes(hash) && hash !== screen) {
        setRouteLoading(true);
        setScreen(hash);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [screen]);

  useEffect(() => {
    if (!routeLoading && !boot) {
      // Reset any elements that animated behind the loader overlay, then
      // re-trigger on the next paint so the fade-up actually plays on screen.
      document.querySelectorAll('[data-aos]').forEach(el => el.classList.remove('aos-animate'));
      AOS.refreshHard();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => AOS.refresh());
      });
    }
  }, [routeLoading, boot]);

  const screens = { home: HomeScreen, work: WorkScreen, services: ServicesScreen, about: AboutScreen, contact: ContactScreen };
  const Screen = screens[screen] || HomeScreen;

  if (boot) return <Loader onDone={() => setBoot(false)} minLoad={800} />;

  return (
    <div>
      {routeLoading && <Loader onDone={() => setRouteLoading(false)} minLoad={200} />}
      <Nav active={screen} onNav={navigate} theme={theme} toggleTheme={toggleTheme} />
      <Screen onNav={navigate} leaving={routeLoading} />
      <Footer onNav={navigate} />
      <BackToTop />
    </div>
  );
}
