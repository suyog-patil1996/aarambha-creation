import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { COMPANY } from '../../data/company';
import { NAV_LINKS } from '../../data/navLinks';
import styles from './Footer.module.css';

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>{COMPANY.name}</p>
          <p className={styles.tagline}>{COMPANY.tagline}</p>
          <div className={styles.social}>
            {Object.entries(COMPANY.social).map(([platform, url]) => {
              const Icon = SOCIAL_ICONS[platform];
              if (!Icon) return null;
              return (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className={styles.heading}>Navigate</h3>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Legal</h3>
          <ul className={styles.linkList}>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={styles.linkList}>
            <li>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
            </li>
            <li>{COMPANY.address}</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          &copy; {year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
