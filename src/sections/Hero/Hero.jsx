import { motion } from 'framer-motion';
import Button from '../../components/Button';
import { fadeUp, staggerContainer, zoomIn } from '../../utils/motionVariants';
import styles from './Hero.module.css';

function Hero({
  eyebrow = 'Welcome',
  title = 'Build Something Great',
  subtitle = 'A professional, reusable starting point for any static business website.',
  primaryCta = { label: 'Get Started', to: '/contact' },
  secondaryCta = { label: 'Learn More', to: '/about' },
  image,
}) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div className={styles.content} variants={staggerContainer} initial="hidden" animate="visible">
          {eyebrow && (
            <motion.span variants={fadeUp} className={styles.eyebrow}>
              {eyebrow}
            </motion.span>
          )}
          <motion.h1 variants={fadeUp}>{title}</motion.h1>
          <motion.p variants={fadeUp} className={styles.subtitle}>
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className={styles.actions}>
            {primaryCta && (
              <Button to={primaryCta.to} size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button to={secondaryCta.to} size="lg" variant="outline">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </motion.div>

        {image && (
          <motion.div className={styles.imageWrap} variants={zoomIn} initial="hidden" animate="visible">
            <img src={image} alt="" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Hero;
