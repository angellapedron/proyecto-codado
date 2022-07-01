import React from 'react'
import styles from './InformativeFlayer.module.css'
import { Link } from 'react-router-dom'

export default function InformativeFlayer({ title, button, text, marginLeft, marginRight,link }) {
  return (
    <div className={styles.containerFlayer} style={{marginLeft: marginLeft, marginRight: marginRight}}>
        <h1 className={styles.titleFlayer}>{title}</h1>
        <p className={styles.textFlayer}>{text}</p>
        <Link to={`/${link}`} reloadDocument><button className={styles.buttonFlayer}>{button}</button></Link>
    </div>
  )
}
