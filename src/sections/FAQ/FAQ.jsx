import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import SectionTitle from '../../components/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { FAQS } from '../../data/faq';
import styles from './FAQ.module.css';

function FAQ({
  tag = 'FAQ',
  title = 'Frequently Asked Questions',
  subtitle = 'Answers to the questions we hear most often.',
  faqs = FAQS,
}) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.list} variants={staggerContainer} {...scrollReveal(0.2)}>
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div key={faq.id} variants={fadeUp} className={styles.item}>
              <button
                type="button"
                className={styles.question}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span>{faq.question}</span>
                <HiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={styles.answerWrap}
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default FAQ;
