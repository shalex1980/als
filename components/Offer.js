import styles from '../styles/Offer.module.scss'

const Offer = () => {
    return (
      <section className={styles.offer}>
        <div className="container">
          <h3 className="title">What We Offer</h3>
          <section className={styles.container}>
            <article className={styles.offer_article}>
              <h4 className="subtitle">INVESTMENT PRODUCTS</h4>
              <p>When considering the area of financial services, there are two things that come in all shapes and sizes...investments and investors. We understand that knowing and understanding you, the investor, is the key to making your investing experience meaningful and rewarding. Do you need a little assistance or a lot of help?</p>
            </article>
            <article className={styles.offer_article}>
              <h4 className="subtitle">LIFE EVENTS</h4>
            <p>Life is full of surprises. Planning for life's major changes can help bring peace of mind, and help you to address your financial goals. This section of our website provides suggestions on how to prepare for these events (College; Inheritance, 401(k); Retirement).</p>
            </article>
            <article className={styles.offer_article}>
              <h4 className="subtitle">INVESTMENT SERVICES</h4>
              <p>Dealing with financial events on your own can seem perplexing, but when teamed with a professional, the strategies make perfect sense. If you’re facing any financial uncertainty right now, we hope it will be worthwhile for you to “test-drive” our services.</p>
            </article>
          </section>
        </div>
        </section>
    )
}

export default Offer