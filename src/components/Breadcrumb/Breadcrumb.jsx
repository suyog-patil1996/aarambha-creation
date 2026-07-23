import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi2';
import styles from './Breadcrumb.module.css';

function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {isLast || !item.to ? (
                <span aria-current={isLast ? 'page' : undefined} className={styles.current}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              )}
              {!isLast && <HiChevronRight className={styles.separator} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
