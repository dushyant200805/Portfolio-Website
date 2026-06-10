import { useState, useEffect } from 'react';

export function PageWrap({ children }) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 30);
    return () => clearTimeout(t);
  }, []);
  return <div className={`page-enter ${vis ? 'visible' : ''}`}>{children}</div>;
}
