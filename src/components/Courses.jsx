import React from 'react';
import styles from './Courses.module.css';
import CourseName from './CourseName';

export default function Courses({ title, image, onClick }) {
  return (
    <div className={styles.course} style={{backgroundImage: `url(${image})`}} onClick={onClick}>
      <CourseName title={title}/>
    </div>
  )
}
