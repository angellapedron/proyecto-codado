import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.firstSection}>
            <hr />
            <div className={styles.infoFooter}>
                <h3 className={styles.subtitlesFooter}>VISÍTANOS</h3>
                <p className={styles.textInfo}>Direccion</p>
            </div>
        </div>
        <div className={styles.titleFooter}> 
            <h1>CONTÁCTANOS</h1>
            <div >
                <h3 className={styles.subtitlesFooter}>LLÁMANOS</h3>
                <p className={styles.textInfo}>0000-000000</p>
            </div>
        </div>
        <div className={styles.secondSection}>
            <hr />
            <div className={styles.infoFooter}>
                <h3 className={styles.subtitlesFooter}>ENLACES DE INTERÉS</h3>
                <a href="#enlace">Enlace 1</a><br />
                <a href="#enlace">Enlace 2</a><br />
                <a href="#enlace">Enlace 3</a><br />
                <a href="#enlace">Enlace 4</a>
            </div>
        </div>
    </footer>
  )
}
