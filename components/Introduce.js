import styles from '../styles/Introduce.module.scss'

const Introduce = () => {
    return(
        <section className={styles.introduce}>
          <div className="container">
            <h3 className="title">Few words about us</h3>
            <p>
            With teams and capabilities spanning the entire Amazon 
            retail ecosystem, Netrush removes the need for brands to work with multiple agencies, offering a scalable, fully integrated suite of services that work together seamlessly.
            </p>
            <p>
            The result is a partnership that gives your brand the infrastructure, technology, and proven strategies to reach 
            customers and drive consistent growth. Working with a community of committed brands gives us access to data, resources, and experiences crucial for learning and testing – allowing us to invest ahead of change.
            </p>
          </div>   
        </section>
    )
}

export default Introduce;