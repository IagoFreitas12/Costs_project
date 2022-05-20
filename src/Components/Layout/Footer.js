import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa' 
import styles from './Footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <ul className={styles.item}>
                <li >    
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                </li>
                <li >
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                </li>
                <li >
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </li>
            </ul>
            <p className={styles.copyright}>
              <span>Costs</span> &copy; 2021  
            </p>  
        </footer>
    )
}

export default Footer