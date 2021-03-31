import styles from '../styles/Offer.module.scss'

const OfferArticle = ({offer}) => {
    return (
      <article className={styles.offer_article}>
        <h4 className="subtitle">{offer.title}</h4>
        <p>{offer.text}</p>
      </article>
    )
}

export default OfferArticle