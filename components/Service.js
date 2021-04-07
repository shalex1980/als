import Image from 'next/image'
import styles from '../styles/Service.module.scss'

const Service = (props) => {
    return (
        <article className={styles.service}>
            <h4>Service</h4>
            <img src={props.img} className={styles.image} />
        </article>
    )
}

export default Service