import Form from '../components/Form'
import company from '../data/company.json'
import styles from '../styles/Contact.module.scss'


const Contact = () => {
    return (
      <section className={`${styles.contact} section`}>
        <div className="container">
          <h3 className="title">Contact</h3>
          <div className={styles.wrap}>
            <article className={styles.article_form}>
              <h4 className={styles.title}>HAVE A QUESTION ? </h4>
              <Form />
            </article>
            <article className={styles.article_adr}>
              <h4 className={styles.title}>ADDRESS</h4>
              <p>{company.address}</p>
              <p>{company.phone}</p>
            </article>
          </div>

        </div>
      </section>
    )
}

export default Contact