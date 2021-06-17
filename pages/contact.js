import Image from 'next/image'
//import Form from '../components/Form'
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
              {/*<h4 className={styles.title}>HAVE A QUESTION ? </h4>
               <Form /> */}
               <Image 
                src="/images/contact_us.jpg"
                width={800}
                height={500}
              />
            </article>
            <article className={styles.article_adr}>
              <h4 className={styles.title}>ADDRESS</h4>
              <p className={styles.adr_info}>
                <AiOutlineEnvironment className={styles.icon} />
                <span className={styles.adr_tx}>{company.address}</span>
              </p>
              <p className={styles.adr_info}> 
                <AiOutlinePhone className={styles.icon} />
                <span className={styles.adr_tx}>{company.phone}</span>
              </p>
              <p className={styles.adr_info}>
                <AiOutlineMail className={styles.icon}/>
                <span className={styles.adr_tx}>{company.email}</span>
              </p>
            </article>
          </div>

        </div>
      </section>
    )
}

export default Contact