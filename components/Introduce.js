import Image from 'next/image'
import styles from '../styles/Introduce.module.scss'

const Introduce = () => {
    return(
        <section className={styles.introduce}>
          <div className="container">
            
            <section className={styles.success}>
              <article>
                <h3 className="title">What is success based on?</h3>
                <p className={styles.sub_title}>
                  We believe that success is made up of small parts done right.
                  We are attentive to the little things.
                </p> 
              </article>
              <article>
                <Image 
                  src="/images/kubik_cartoon.jpeg"
                  width={660}
                  height={440}
                  className={styles.img}
                />
              </article>
              
            </section>
            
            
          </div>   
        </section>
    )
}

export default Introduce;