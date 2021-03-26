import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
          <div className={`container ${styles.container}`}>
              <h2 className='logo'>alispolin</h2>
              <nav>
                <a className="item">Home</a>
                <a className="item">About Us</a>
                <a className="item">Services</a>
                <a className="item">Contact</a>
              </nav> 
          </div>
        </header>
    )
}

export default Header