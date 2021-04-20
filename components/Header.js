import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
          <div className={`container ${styles.container}`}>
              <h2 className='logo'><Link href="/"><a>alispolin</a></Link></h2>
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
        </header>
    )
}

export default Header