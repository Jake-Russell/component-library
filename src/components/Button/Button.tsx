import React from 'react';
import { ButtonProps } from './types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.btn}>{label}</button>;
};

export default Button;
