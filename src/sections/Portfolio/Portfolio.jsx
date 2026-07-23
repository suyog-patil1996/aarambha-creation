import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '../../data/portfolio';
import styles from './Portfolio.module.css';

function Portfolio({
  tag = 'Our Work',
  title = 'Recent Projects',
  subtitle = 'A selection of work across industries and disciplines.',
  items = PORTFOLIO,
  categories = PORTFOLIO_CATEGORIES,
}) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(
    () => (activeCategory === 'All' ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items]
  );

  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />

      <div className={styles.filters} aria-label="Filter portfolio by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className={styles.grid} variants={staggerContainer} {...scrollReveal(0.1)}>
        {filteredItems.map((item) => (
          <motion.article key={item.id} variants={fadeUp} className={styles.item}>
            <div className={styles.imageWrap}>
              {item.image ? (
                <img src={item.image} alt={item.title} loading="lazy" />
              ) : (
                <div className={styles.placeholder} aria-hidden="true" />
              )}
              <span className={styles.badge}>{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Portfolio;
