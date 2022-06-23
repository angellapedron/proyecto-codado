import React from 'react'
import { useState } from 'react'
import styles from './Information.module.css'

export default function Information({ title, text }) {
  const [showText, setShowText] = useState(false);
  const [style, setStyle] = useState({opacity: '1'});
  const handleMouseOver = () => {
    setShowText(true);
    setStyle({opacity: '0.1'});
  }
  const handleMouseLeave = () => {
    setShowText(false);
    setStyle({opacity: '1'})
  }
  return (
    <div className={styles.info} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <h3 className={styles.infoTitle} style={style}>{title}</h3>
        {showText && <p className={styles.infoText}>{text}</p>}
    </div>
  ) 
}
