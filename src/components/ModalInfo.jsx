import React from 'react';
import styles from './ModalInfo.module.css';

export default function ModalInfo({ title, text }) {
  return (
    <div>
        <h2 className={styles.titleModal}>{title}</h2>
        <p className={styles.textModal}>{text}</p>
    </div>
  )
}
