import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionTitle from '../../components/SectionTitle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { COMPANY } from '../../data/company';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', message: '' };

function Contact({
  id,
  tag = 'Get in Touch',
  title = "Let's Talk",
  subtitle = "Drop by anytime, or send us a message and we'll get back to you shortly.",
}) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id={id} className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.grid} variants={staggerContainer} {...scrollReveal(0.2)}>
        <motion.div variants={fadeUp} className={styles.info}>
          <div className={styles.infoItem}>
            <FiMail />
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
          <div className={styles.infoItem}>
            <FiPhone />
            <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
          </div>
          <div className={styles.infoItem}>
            <FiMapPin />
            <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer">
              {COMPANY.address}
            </a>
          </div>
        </motion.div>

        <motion.form variants={fadeUp} className={styles.form} onSubmit={handleSubmit}>
          {submitted && (
            <p className={styles.success} role="status">
              Thanks for reaching out! We'll get back to you shortly.
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
            label="Message"
            name="message"
            as="textarea"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            required
          />
          <Button type="submit" size="lg" fullWidth>
            Send Message
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;
