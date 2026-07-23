import styles from './SectionTitle.module.css';

function SectionTitle({ tag, title, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]} ${className}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
