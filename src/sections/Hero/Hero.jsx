import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollY } = useScroll();
  // The top badge sits just below the fixed navbar. As soon as the page scrolls,
  // it starts sliding up behind the (higher stacking-order) navbar and gets visually
  // clipped — so fade it out early, before that overlap becomes visible.
  const badgeStartOpacity = useTransform(scrollY, [0, 80], [1, 0]);

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
        <div className={styles.badges}>
          {stats.map((stat, index) => {
            const badge = (
              <motion.div
                className={`${styles.badge} ${index === 0 ? styles.badgeStart : styles.badgeEnd}`}
                variants={zoomIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span className={styles.badgeValue}>
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className={styles.badgeLabel}>{stat.label}</span>
              </motion.div>
            );

            return index === 0 ? (
              <motion.div key={stat.id} style={{ opacity: badgeStartOpacity }}>
                {badge}
              </motion.div>
            ) : (
              <div key={stat.id}>{badge}</div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Hero;
