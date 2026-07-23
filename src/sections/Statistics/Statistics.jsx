import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { STATISTICS } from '../../data/statistics';
import styles from './Statistics.module.css';

function Counter({ value, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame;
    const duration = 1500;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Statistics({ stats = STATISTICS }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className={styles.section}>
      <motion.div
        ref={ref}
        className={`container ${styles.grid}`}
        variants={staggerContainer}
        {...scrollReveal(0.3)}
      >
        {stats.map((stat) => (
          <motion.div key={stat.id} variants={fadeUp} className={styles.stat}>
            <p className={styles.value}>
              <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
            </p>
            <p className={styles.label}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Statistics;
