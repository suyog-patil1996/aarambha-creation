import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import useAnchorNav from '../../hooks/useAnchorNav';
import { gmailComposeUrl } from '../../utils/email';
import { COMPANY } from '../../data/company';
import { NAV_LINKS } from '../../data/navLinks';
import styles from './Footer.module.css';

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
  twitter: FaTwitter,
};

// Display order for the "Follow Us On" bar — only platforms with a resolved link show.
const SOCIAL_ORDER = ['facebook', 'linkedin', 'instagram', 'whatsapp', 'youtube', 'twitter'];

function Footer() {
  const year = new Date().getFullYear();
  const { handleAnchorClick } = useAnchorNav();

  const socialLinks = {
    ...COMPANY.social,
    whatsapp: COMPANY.social.whatsapp ?? (COMPANY.whatsapp ? `https://wa.me/${COMPANY.whatsapp}` : undefined),
  };
  const socialEntries = SOCIAL_ORDER.map((platform) => [platform, socialLinks[platform]]).filter(([, url]) => url);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>{COMPANY.name}</p>
          <p className={styles.tagline}>{COMPANY.tagline}</p>
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
              <a href={gmailComposeUrl(COMPANY.email)} target="_blank" rel="noopener noreferrer">
                {COMPANY.email}
              </a>
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

      {socialEntries.length > 0 && (
        <div className={`container ${styles.followBar}`}>
          <span className={styles.followLabel}>Follow Us On:</span>
          <div className={styles.followIcons}>
            {socialEntries.map(([platform, url]) => {
              const Icon = SOCIAL_ICONS[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${COMPANY.name} on ${platform}`}
                  className={styles.followIcon}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className={styles.bottomBar}>
        <p>
          &copy; {year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
