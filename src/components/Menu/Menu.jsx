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
          Home
        </NavLink>
        <NavLink to="rent" className={styles.menuLink}>
          Rent
        </NavLink>
        <NavLink to="buysell" className={styles.menuLink}>
          BuySell
        </NavLink>
        <NavLink to="architecture" className={styles.menuLink}>
          Architecture
        </NavLink>
     </div>
     <AuthButtons className={styles.lastLink}/>
</nav>
  
     
    );
}

export default Menu
