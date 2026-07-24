import { motion } from 'framer-motion';
import Button from '../../components/Button';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import styles from './CTA.module.css';

function CTA({
  title = 'Ready to Make Your Mark?',
  subtitle = 'Whether you need a full brand overhaul or a stack of fresh business cards, our presses are ready.',
  cta = { label: 'Start a Project', to: '/#contact' },
}) {
  return (
    <section className={styles.cta}>
      <motion.div className="container" variants={staggerContainer} {...scrollReveal(0.4)}>
        <div className={styles.inner}>
          <div>
            <motion.h2 variants={fadeUp}>{title}</motion.h2>
            <motion.p variants={fadeUp}>{subtitle}</motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <Button href={cta.to} size="lg" variant="accent">
              {cta.label}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
