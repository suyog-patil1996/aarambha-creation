import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { PRICING_PLANS } from '../../data/pricing';
import styles from './Pricing.module.css';

function Pricing({
  tag = 'Pricing',
  title = 'Simple, Transparent Pricing',
  subtitle = 'Choose the plan that fits your needs. Upgrade or downgrade anytime.',
  plans = PRICING_PLANS,
}) {
  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.grid} variants={staggerContainer} {...scrollReveal(0.15)}>
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={fadeUp}
            className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
          >
            {plan.highlighted && <span className={styles.badge}>Most Popular</span>}
            <h3>{plan.name}</h3>
            <p className={styles.description}>{plan.description}</p>
            <div className={styles.priceRow}>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.period}>{plan.period}</span>
            </div>
            <ul className={styles.features}>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FiCheck className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button to="/contact" variant={plan.highlighted ? 'primary' : 'outline'} fullWidth>
              Get Started
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;
