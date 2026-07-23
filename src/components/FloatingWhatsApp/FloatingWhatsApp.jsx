import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingWhatsApp.module.css';

function FloatingWhatsApp({ phone, message = 'Hello! I have a question.' }) {
  if (!phone) return null;

  const cleanPhone = phone.replace(/[^\d]/g, '');
  const link = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;
