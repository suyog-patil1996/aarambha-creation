import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import styles from './About.module.css';

function About({
  id,
  tag = 'About Us',
  title = 'A team dedicated to your success',
  description = 'We combine design and technology to build digital experiences that help businesses grow.',
  features = [],
  image,
  imageAlt = '',
  reverse = false,
}) {
  return (
    <section id={id} className="container">
      <div className={`${styles.grid} ${reverse ? styles.reverse : ''}`}>
        {image && (
          <motion.div
            className={styles.imageWrap}
            variants={reverse ? slideInRight : slideInLeft}
            {...scrollReveal(0.3)}
          >
            <img src={image} alt={imageAlt} loading="lazy" />
          </motion.div>
        )}
        <motion.div className={styles.content} variants={staggerContainer} {...scrollReveal(0.3)}>
          <motion.span variants={fadeUp} className={styles.tag}>
            {tag}
          </motion.span>
          <motion.h2 variants={fadeUp}>{title}</motion.h2>
          {(Array.isArray(description) ? description : [description]).map((paragraph) => (
            <motion.p key={paragraph} variants={fadeUp} className={styles.description}>
              {paragraph}
            </motion.p>
          ))}
          {features.length > 0 && (
            <motion.ul variants={fadeUp} className={styles.features}>
              {features.map((feature) => (
                <li key={feature}>
                  <FiCheckCircle className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
