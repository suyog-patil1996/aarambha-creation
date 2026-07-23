import styles from './Loader.module.css';

function Loader({ size = 'md', fullScreen = false, label = 'Loading' }) {
  const spinner = (
    <span className={`${styles.loader} ${styles[size]}`} role="status" aria-label={label} />
  );

  if (fullScreen) {
    return <div className={styles.fullScreen}>{spinner}</div>;
  }

  return spinner;
}

export default Loader;
