import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { gmailComposeUrl } from '../../utils/email';
import { COMPANY } from '../../data/company';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', phone: '', eventType: '', message: '' };

// Set in .env.local as VITE_WEB3FORMS_ACCESS_KEY — see that file for the key itself.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function Contact({
  id,
  tag = 'Get in Touch',
  title = "Let's Talk",
  subtitle = "Drop by anytime, or send us a message and we'll get back to you shortly.",
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Website Enquiry',
          name: form.name,
          email: form.email,
          phone: form.phone,
          event_type: form.eventType,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error — please check your connection and try again.');
    }
  };

  return (
    <section id={id} className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.grid} variants={staggerContainer} {...scrollReveal(0.2)}>
        <motion.div variants={fadeUp} className={styles.info}>
          <div className={styles.infoItem}>
            <FiMail />
            <a href={gmailComposeUrl(COMPANY.email)} target="_blank" rel="noopener noreferrer">
              {COMPANY.email}
            </a>
          </div>
          <div className={styles.infoItem}>
            <FiPhone />
            <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
          </div>
          <div className={styles.infoItem}>
            <FaWhatsapp />
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
              {COMPANY.phone}
            </a>
          </div>
          <div className={styles.infoItem}>
            <FiMapPin />
            <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer">
              {COMPANY.address}
            </a>
          </div>
        </motion.div>

        <motion.form variants={fadeUp} className={styles.form} onSubmit={handleSubmit}>
          {status === 'success' && (
            <p className={styles.success} role="status">
              Thanks for reaching out! We'll get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.error} role="alert">
              {errorMessage}
            </p>
          )}
          <Input
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />
          <Input
            label="Event Type"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            placeholder="e.g. Wedding, Birthday, Corporate"
          />
          <Input
            label="Message"
            name="message"
            as="textarea"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
          />
          <Button type="submit" size="lg" className={styles.submitBtn} disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;
