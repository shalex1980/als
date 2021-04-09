import Service from '../components/Service'
import styles from '../styles/Service.module.scss'
import services from '../data/services.json'

const Services = () => {
    return (
      <section className={styles.services}>
        <div className="container">
          <h3 className="title">Services</h3>
          <Service services={services} />
        </div>
      </section>
    )
}

export default Services