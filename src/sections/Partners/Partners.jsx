import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { PARTNERS } from '../../data/partners';
import styles from './Partners.module.css';

function Partners({ title = 'Trusted by teams around the world', partners = PARTNERS }) {
  const loopItems = [...partners, ...partners];

  return (
    <motion.section className="container" variants={fadeIn} {...scrollReveal(0.3)}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.track}>
        <div className={styles.scroller}>
          {loopItems.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className={styles.logo}>
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              ) : (
                <span>{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Partners;
