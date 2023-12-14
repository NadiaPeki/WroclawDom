import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contacts}>
        <p>Connect with us:<br /></p>
        <div className={styles.footerLinks}>
        <Link to="mailto:your-email@example.com"><img src='/img/icons/emailIcon.png' alt='email' width={40} height={40}/></Link>
        </div>
        </div>
        <div className={styles.details}>
        <p>© Wroclaw Dom - twój przewodnik w świecie nieruchomości {new Date().getFullYear()}</p>
        <p>Operated by Nadia P. Corporation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;