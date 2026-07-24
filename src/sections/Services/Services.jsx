import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { SERVICES } from '../../data/services';
import styles from './Services.module.css';

function Services({
  id,
  tag = 'What We Offer',
  title = 'Services Built Around Your Goals',
  subtitle = 'Everything you need to launch, grow, and maintain a strong online presence.',
  services = SERVICES,
}) {
  return (
    <section id={id} className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.grid} variants={staggerContainer} {...scrollReveal(0.15)}>
        {services.map(({ icon: Icon, title: serviceTitle, description }) => (
          <motion.div key={serviceTitle} variants={fadeUp} className={styles.card}>
            <div className={styles.iconWrap}>
              <Icon />
            </div>
            <h3>{serviceTitle}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
