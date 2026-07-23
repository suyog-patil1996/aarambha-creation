import { useId } from 'react';
import styles from './Input.module.css';

function Input({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  helperText,
  required = false,
  as = 'input',
  rows = 4,
  className = '',
  id,
  ...rest
}) {
  const autoId = useId();
  const inputId = id || `${name || 'field'}-${autoId}`;
  const Component = as === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`${styles.group} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      <Component
        id={inputId}
        name={name}
        type={as === 'input' ? type : undefined}
        rows={as === 'textarea' ? rows : undefined}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={`${styles.field} ${error ? styles.fieldError : ''}`}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className={styles.helperText}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
