import React from 'react'
import styles from './CourseName.module.css'

export default function CourseName({ title }) {
  return (
    <>
        <div className={styles.courseContainer} >
            <h2 className={styles.courseTitle}>{title}</h2>
        </div>
    </>
  )
}
