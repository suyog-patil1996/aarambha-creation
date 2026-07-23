import { FiPhoneCall } from 'react-icons/fi';
import styles from './FloatingCall.module.css';

function FloatingCall({ phone }) {
  if (!phone) return null;

  return (
    <a href={`tel:${phone}`} className={styles.button} aria-label="Call us">
      <FiPhoneCall />
    </a>
  );
}

export default FloatingCall;
