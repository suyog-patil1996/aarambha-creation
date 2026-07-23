import styles from './Container.module.css';

function Container({ children, size = 'xl', as: Tag = 'div', className = '' }) {
  return <Tag className={`${styles.container} ${styles[size]} ${className}`}>{children}</Tag>;
}

export default Container;
