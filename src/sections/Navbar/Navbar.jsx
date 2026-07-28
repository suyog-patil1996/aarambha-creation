import { useEffect, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Button from '../../components/Button';
import BrandLogo from '../../components/BrandLogo';
import useAnchorNav from '../../hooks/useAnchorNav';
import { NAV_LINKS } from '../../data/navLinks';
import { COMPANY } from '../../data/company';
import styles from './Navbar.module.css';

const SECTION_IDS = ['about', 'services', 'portfolio', 'contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { handleAnchorClick, location } = useAnchorNav();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Scroll-spy: only meaningful on Home, where the anchor sections actually exist.
  useEffect(() => {
    if (location.pathname !== '/') return undefined;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topMost.target.id);
        } else if (window.scrollY < 200) {
          setActiveSection('');
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Arriving on Home from another route with a hash (e.g. /pricing -> "Contact" click):
  // scroll to the target section once it's mounted.
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (event, to) => {
    handleAnchorClick(event, to);
    setIsOpen(false);
    if (to === '/') {
      setActiveSection('');
    } else if (location.pathname === '/') {
      setActiveSection(to.slice(1));
    }
  };

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/' && !activeSection;
    return location.pathname === '/' && activeSection === to.slice(1);
  };

  const isTransparent = location.pathname === '/' && !scrolled;

  return (
    <header className={`${styles.navbar} ${isTransparent ? styles.transparent : styles.scrolled}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} onClick={(e) => handleNavClick(e, '/')}>
          <BrandLogo
            className={styles.logoMark}
            title={COMPANY.name}
            variant={scrolled ? 'scrolled' : 'default'}
          />
        </a>

        <nav className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.to}
              href={link.to === '/' ? '/' : `/${link.to}`}
              className={`${styles.link} ${isLinkActive(link.to) ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="/#contact"
            size="sm"
            className={styles.ctaMobile}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get in Touch
          </Button>
        </nav>

        <Button
          href="/#contact"
          size="sm"
          className={styles.ctaDesktop}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Get in Touch
        </Button>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
