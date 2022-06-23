import React from 'react';
import styles from './Copyright.module.css'

export default function Copyright({ text }) {
  return (
    <div className={styles.containerCopyright}>
        <p className={styles.textCopyright}>{text}</p>
    </div>
  )
}
