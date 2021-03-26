import styles from '../styles/Footer.module.scss'

const Footer  = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.row}>
                  <div className={styles.wrap}>
                    <h3 className={`logo ${styles.logo}`}>alispolin</h3>
                    <nav>
                        <a className="item">Home</a>
                        <a className="item">About us</a>
                        <a className="item">Services</a>
                        <a className="item">Contact</a>
                    </nav>
                  </div>
                  <div className={styles.contact}>
                    <p>800 SE 4TH AVE SUITE 121 HALLANDALE BEACH, FL. 33009 US</p>
                    <p>TEL: 80023456789</p>
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