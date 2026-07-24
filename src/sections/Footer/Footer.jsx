import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import useAnchorNav from '../../hooks/useAnchorNav';
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
  const { handleAnchorClick } = useAnchorNav();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>{COMPANY.name}</p>
          <p className={styles.tagline}>{COMPANY.tagline}</p>
          {Object.keys(COMPANY.social).length > 0 && (
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
          )}
        </div>

        <div>
          <h3 className={styles.heading}>Navigate</h3>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <a
                  href={link.to === '/' ? '/' : `/${link.to}`}
                  onClick={(e) => handleAnchorClick(e, link.to)}
                >
                  {link.label}
                </a>
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
            <li>
              <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer">
                {COMPANY.address}
              </a>
            </li>
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
