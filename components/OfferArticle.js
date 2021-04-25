import { useState } from 'react'
import { AiFillCaretDown } from "react-icons/ai"
import styles from '../styles/Offer.module.scss'

const OfferArticle = ({offer}) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
     
      <article className={styles.offer_article}>
        <h4 className={styles.title}
          onClick={handleClick}
        >
          {offer.title} <AiFillCaretDown className={`${styles.icon} ${open ? styles.icon_open : ' '}` }/></h4>
        <ul className={styles.offer_list} style={{"opacity": `${open ? '100': ''} `,"height": `${open ? 'auto': ''} `}}>
          { offer.items.map((item, index) => <li key={index}>{item}</li> ) }
        </ul>
        
      </article>
    )
}

export default OfferArticle