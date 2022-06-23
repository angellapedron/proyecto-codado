import React from 'react'
import styles from './TextHover.module.css'

export default function TextHover({ title, text, direction }) {
  return (
    <>
      <div className={styles.divHover} style={direction==="right" ? {left: "270px"} : {right: "270px"}}>
        <div className={styles.triangulo} style={direction==="right" ? {right: "300px", borderRight: "20px solid rgba(217, 217, 217, 0.93)"} : {left: "300px", borderLeft: "20px solid rgba(217, 217, 217, 0.93)"}}></div>
          <h2 className={styles.titleHover}>{title}</h2>
          <p className={styles.textHover}>{text}</p>
      </div>
    </>
  )
}
