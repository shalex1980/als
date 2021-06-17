import Image from 'next/image'
import styles from '../styles/About.module.scss'

const About = () => {
    return (
       <section className={styles.about}>
          <div className="container">
            <h3 className="title">ABOUT US</h3>
            <div className={styles.about_wrap}>
               <article className={styles.about_tx}>
                  <p>Our company has four years' experience in the USA market. We specialize in creating additional sales and increasing conversions through listing optimizations across multiple platforms (Shopify, Amazon). We sell products on our eCommerce store
                     Our in-house staff has experience in professional product photography, photo editing, and writing copy that converts.
                  </p>
                  <p>Recent events show how rapidly everything is changing in the world of e-commerce. And what worked a year ago does not bring the desired result at present.
                     We carefully monitor new changes in e-commerce and try to accept them in our work.
                  </p>
                  <p>We go above and beyond just selling someone's products by helping them address their problems to strengthen their 
                     brand which, is a win/win for both the brand owner and us. We like to build trusting relationships with our clients. 
                     We don't want to be just consumers and only seek benefits, but we want to change this world for the better.
                  </p>
               </article>
               <article className={styles.about_img}>
                  <Image
                     src="/images/about.jpg"
                     width={800}
                     height={500}
                   />
               </article>
            </div>
            
          </div>
       </section>
    )
}

export default About