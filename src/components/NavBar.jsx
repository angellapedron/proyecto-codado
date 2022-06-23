import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import logo from '../images/Logo-Codado_d400.png';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.divLogoCodado}>
        <Link to='/'><img className={styles.logoCodado} src={logo} alt="logo"/></Link>
      </div>
      <div>
        <ul className={styles.links}>
            <Link to="/cursos" className={styles.linkNavbar} ><li>Cursos</li></Link>
            <Link to='/' className={styles.linkNavbar} ><li>Enlace 2</li></Link>
            <Link to='/cursos' className={styles.linkNavbar} ><li>Enlace 3</li></Link>
            <Link to='/cursos' className={styles.linkNavbar} ><li>Enlace 4</li></Link>
            <Link to='/' className={styles.linkNavbar} ><li>Enlace 5</li></Link>
        </ul>
      </div>
    </nav>
  )
}
