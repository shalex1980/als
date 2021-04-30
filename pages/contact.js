import Form from '../components/Form'
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai"
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
              <p>
                <AiOutlineEnvironment className={styles.icon} />
                {company.address}</p>
              <p> 
                <AiOutlinePhone className={styles.icon} />
                {company.phone}
              </p>
              <p>
                <AiOutlineMail className={styles.icon}/>
                {company.email}</p>
            </article>
          </div>

        </div>
      </section>
    )
}

export default Contact