import OfferArticle from './OfferArticle'
import styles from '../styles/Offer.module.scss'
import offer from '../data/offer.json'

const Offer = () => {
    return (
      <section className={styles.offer}>
        <div className="container">
          <h3 className="title">What We Offer</h3>
          <section className={styles.container}>
             <article className={styles.offer_article}>
              <h4 className="subtitle">Brand Service</h4>
              <ul className={styles.offer_list}>
                <li>Brand Protection</li>
                <li>Brand Presentation</li>
                <li>Price Monitoring</li>
                <li>Optimize listing</li>
              </ul>
            </article>
            <article className={styles.offer_article}>
              <h4 className="subtitle">Ads & Promotion</h4>
              <ul className={styles.offer_list}>
                <li> Amazon Advertise</li>
                <li> Sponsored Product</li>
                <li> Rating & Reviews</li>
              </ul>
             
            </article>
            <article className={styles.offer_article}>
              <h4 className="subtitle">Analyse & Improve</h4>
              <ul className={styles.offer_list}>
                <li>Utilize third-party software to analyze</li>
                <li>Adding new services</li>
                <li>Logistic</li>
                <li>Light and Smile</li>
                <li>Bundles products</li>
              </ul>
            </article> 
            {/*
              offer.map((item, i) => <OfferArticle offer={item} key={i}/>)
            */}
          </section>
        </div>
        </section>
    )
}

export default Offer