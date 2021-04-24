import styles from '../styles/Welcome.module.scss'

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.welcome_wrap}>
                <h1 className={styles.welcome_title}>Let`s grow toghether! {/*We build the Future*/}</h1>
                <h4 className={styles.welcome_subtitl}>We do not have a goal to work with the best,<br/> but those we work with are the best.</h4>  
            </div>
     
        </section>
    )
}

export default Welcome