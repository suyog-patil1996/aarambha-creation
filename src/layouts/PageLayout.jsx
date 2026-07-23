import styles from './PageLayout.module.css';

function PageLayout({ title, subtitle, children }) {
  return (
    <>
      {(title || subtitle) && (
        <header className={styles.pageHeader}>
          <div className="container">
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </header>
      )}
      {children}
    </>
  );
}

export default PageLayout;
