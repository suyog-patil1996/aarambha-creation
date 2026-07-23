import styles from './Card.module.css';

function Card({
  image,
  imageAlt = '',
  title,
  description,
  footer,
  children,
  hoverEffect = true,
  className = '',
  ...rest
}) {
  const classes = [styles.card, hoverEffect ? styles.hover : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {image && <img src={image} alt={imageAlt} className={styles.image} loading="lazy" />}
      <div className={styles.body}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

export default Card;
