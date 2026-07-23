import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { TIMELINE } from '../../data/timeline';
import styles from './Timeline.module.css';

function Timeline({
  tag = 'Our Journey',
  title = 'Milestones Along the Way',
  subtitle = 'A look back at the moments that shaped who we are today.',
  events = TIMELINE,
}) {
  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.timeline} variants={staggerContainer} {...scrollReveal(0.1)}>
        {events.map((event) => (
          <motion.div key={event.id} variants={fadeUp} className={styles.event}>
            <div className={styles.marker} />
            <span className={styles.year}>{event.year}</span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Timeline;
