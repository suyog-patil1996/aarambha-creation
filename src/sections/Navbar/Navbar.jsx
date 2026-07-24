import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Button from '../../components/Button';
import { NAV_LINKS } from '../../data/navLinks';
import { COMPANY } from '../../data/company';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
  className={`${styles.navbar} ${
    scrolled ? styles.scrolled : styles.transparent
  }`}
>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          {COMPANY.name}
        </NavLink>

        <nav className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" size="sm" className={styles.ctaMobile} onClick={() => setIsOpen(false)}>
            Get in Touch
          </Button>
        </nav>

        <Button to="/contact" size="sm" className={styles.ctaDesktop}>
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
