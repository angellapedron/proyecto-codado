import React from 'react'
import styles from './MainSlider.module.css';

export default function MainSlider({ image, title, text, width, height }) {
  return (
    <div className={styles.banner} style={{backgroundImage: `url(${image})`}}>
        <div className={styles.message} style={{width: `${width}`, height: `${height}`}}>
          <div>
            <h1>
                {title}
            </h1>
            <p>{text}</p>
          </div>
        </div> 
    </div>
  )
}
