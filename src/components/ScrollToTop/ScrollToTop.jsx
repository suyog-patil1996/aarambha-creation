import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import styles from './ScrollToTop.module.css';

function ScrollToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={`${styles.button} animate-fadeIn`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <HiArrowUp />
    </button>
  );
}

export default ScrollToTop;
