import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
import company from '../data/company.json'

const Footer  = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.row}>
                  <div className={styles.wrap}>
                    <h3 className={`logo ${styles.logo}`}>alispolin</h3>
                    <nav>
                      <Link href="/">
                        <a className="item">Home</a>
                      </Link>
                      <Link href="/about">
                        <a className="item">About Us</a>
                      </Link>
                      <Link href="/services">
                        <a className="item">Services</a>
                      </Link>
                      <Link href="/contact">
                        <a className="item">Contact</a>
                      </Link>
                    </nav>
                  </div>
                  <div className={styles.contact}>
                    <p>{company.address}</p>
                    <p>{company.phone}</p>
                  </div>
                </div>
                <div className={styles.copy}>
                  <span>&copy; WebStudio A_Web 2021</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer