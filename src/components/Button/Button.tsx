import React from 'react';
import { ButtonProps } from './types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.btn}>{label}TEST</button>;
};

export default Button;
