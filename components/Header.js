import { useState } from 'react'
import Link from 'next/link'
//import { AiOutlineMenu } from "react-icons/ai";
import { BsList, BsX } from "react-icons/bs"
import styles from '../styles/Header.module.scss'

const Header = () => {
    const [activ, setActive] = useState(false)

    const handleClick = () => {
      setActive(!activ)
    }

    return (
        <header className={styles.header}>
          <div className={`container ${styles.container}`}>
            <h2 className='logo'><Link href="/"><a>alispolin</a></Link></h2>
            <nav onClick={handleClick}
              className={`${styles.menu} ${activ ? styles.menu_activ : ''}`}>
              <div 
              className={`${styles.burger} ${activ ? styles.burger_activ : ''}`}
              >
                <BsList className={styles.icon_burg}/>
                <BsX className={styles.icon_x}/>
              </div>
              <Link href="/">
                <a className={"item"}>Home</a>
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