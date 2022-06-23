import React from 'react';
import styles from './ImageBanner.module.css';

export default function ImageBanner({ children, image, direction }) {
  return (
    <div className={styles.formBanner} style={{backgroundImage: `url(${image})`, justifyContent: direction}} >
        {children}
    </div>
  )
}
