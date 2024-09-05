import React, { memo,forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({label,id,type,error,...props},ref) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${styles.inputField} ${error ? styles.error : ''}`}
        type={type}
        id={id}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default memo(Input);
