import React from 'react';
import { createPortal } from 'react-dom';
import { GrFormClose } from 'react-icons/gr';
import styles from './Portal.module.css';

// const portalRoot = ReactDOM.createPortal (document.getElementById('portal'));

export default function Portal({ children, open, onClose }) {
  if(!open) return null;
  return createPortal(
    <>
        <div className={styles.overlay}></div>
        <div className={styles.popup}>
          <div className={styles.closeContainer}>
            <button className={styles.closeButton} onClick={onClose}><GrFormClose style={{height:"30px", width:"30px", color:"rgba(217, 217, 217, 0.93)"}}/></button>
          </div>
          <div className={styles.informationOfCourse}>
            {children}
          </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
