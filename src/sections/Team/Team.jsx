import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { TEAM } from '../../data/team';
import styles from './Team.module.css';

function Team({
  tag = 'Our Team',
  title = 'Meet the People Behind the Work',
  subtitle = 'A small, dedicated team focused on doing great work for our clients.',
  members = TEAM,
}) {
  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div className={styles.grid} variants={staggerContainer} {...scrollReveal(0.15)}>
        {members.map((member) => (
          <motion.div key={member.id} variants={fadeUp} className={styles.card}>
            <div className={styles.photoWrap}>
              {member.photo ? (
                <img src={member.photo} alt={member.name} loading="lazy" />
              ) : (
                <div className={styles.placeholder} aria-hidden="true">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
              )}
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {member.social && (
              <div className={styles.social}>
                {member.social.linkedin && (
                  <a href={member.social.linkedin} aria-label={`${member.name} on LinkedIn`}>
                    <FaLinkedinIn />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} aria-label={`${member.name} on Twitter`}>
                    <FaTwitter />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Team;
