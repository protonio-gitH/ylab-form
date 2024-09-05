import React, {memo} from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick, ...props }) => {
  return (
    <button className={styles.blueButton} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default memo(Button);
