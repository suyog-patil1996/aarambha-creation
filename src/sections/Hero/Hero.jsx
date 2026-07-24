import { motion } from 'framer-motion';
import Button from '../../components/Button';
import { fadeUp, staggerContainer, zoomIn } from '../../utils/motionVariants';
import { STATISTICS } from '../../data/statistics';
import heroImage from '../../assets/images/hero-press.jpg';
import styles from './Hero.module.css';

function Hero({
  eyebrow = 'Ideas. Print. Impact.',
  title = 'Passion Into Print',
  subtitle = 'We are a creative design and precision printing studio based in Sangli — where ideas begin and designs speak.',
  primaryCta = { label: 'Start a Project', to: '#contact' },
  secondaryCta = { label: 'Our Services', to: '#services' },
  image = heroImage,
  stats = [STATISTICS[2], STATISTICS[0]],
}) {
  return (
    <section className={styles.hero}>
      {image && (
        <div className={styles.imageLayer}>
          <img src={image} alt="" />
          <div className={styles.overlay} />
        </div>
      )}

      <div className={`container ${styles.inner}`}>
        <motion.div className={styles.content} variants={staggerContainer} initial="hidden" animate="visible">
          {eyebrow && (
            <motion.span variants={fadeUp} className={styles.eyebrow}>
              {eyebrow}
            </motion.span>
          )}
          <motion.h1 variants={fadeUp} className={styles.title}>
            {title}
          </motion.h1>
          <motion.p variants={fadeUp} className={styles.subtitle}>
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className={styles.actions}>
            {primaryCta && (
              <Button href={primaryCta.to} size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.to} size="lg" variant="outline">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {stats && stats.length > 0 && (
        <motion.div
          className={styles.badges}
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.id} className={`${styles.badge} ${index === 0 ? styles.badgeStart : styles.badgeEnd}`}>
              <span className={styles.badgeValue}>
                {stat.value}
                {stat.suffix}
              </span>
              <span className={styles.badgeLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

export default Hero;
