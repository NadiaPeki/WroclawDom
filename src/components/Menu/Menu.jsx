import { NavLink } from 'react-router-dom';
import AuthButtons from '../Buttons/AuthButtons';
import styles from './Menu.module.css'

  const Menu = () => {
    return (
       <nav className={styles.menu}>
        
       <NavLink to="/" end className={`${styles.menuLink} ${styles.logo} ${styles.firstLink}`}>
        <img src='/img/photos/logo.png' alt='logo' />
      </NavLink>
     
      <div className={styles.menuLeft}>
      <NavLink
          end
          to="/"
          className={styles.menuLink}
        >
          Główna
        </NavLink>
        <NavLink to="buysell" className={styles.menuLink}>
        Zakup i Sprzedaż
        </NavLink>
        <NavLink to="rent" className={styles.menuLink}>
        Wynajem
        </NavLink>
        <NavLink to="architecture" className={styles.menuLink}>
        Design i Architektura
        </NavLink>
     </div>
     <AuthButtons className={styles.lastLink}/>
</nav>
  
     
    );
}

export default Menu
