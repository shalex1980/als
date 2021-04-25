import OfferArticle from './OfferArticle'
//import { AiFillCaretDown } from "react-icons/ai"
import styles from '../styles/Offer.module.scss'
import offer from '../data/offer.json'

const Offer = () => {
  console.log(offer)
    return (
      <section className={styles.offer}>
        <div className="container">
          <h3 className="title">What We Offer</h3>
          <section className={styles.container}>
              {offer.map((item, i) => <OfferArticle offer={item} key={i}/>)}           
          </section>
        </div>
        </section>
    )
}

export default Offer