import React, { useState } from 'react';
import styles from './Section.module.css';
import TextHover from './TextHover';

export default function Section({ title, image, direction, titleHover, text }) {
  const [showText, setShowText] = useState(false);
  const handleMouseOver = e => {
    setShowText(true)
  }
  const handleMouseLeave = e => {
    setShowText(false)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${image})`}}>
          <h3 className={styles.titleSection}>{title}</h3>
      </div>
      {showText && <TextHover 
      title={titleHover}
      text={text}
      direction={direction}
      /> }
    </div>
  )
}
