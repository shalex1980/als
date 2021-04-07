import styles from '../styles/Welcome.module.scss'

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <h1 className={styles.welcome_title}>Let`s grow toghether! {/*We build the Future*/}</h1>
            {/* <h4 className={styles.welcome_subtitl}>Let`s grow with us</h4> */}
        </section>
    )
}

export default Welcome