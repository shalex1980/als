import styles from '../styles/About.module.scss'

const About = () => {
    return (
       <section className={styles.about}>
          <div className="container">
            <h3 className="title">ABOUT US</h3>
            <p>Our company has 3 years experience on the USA market.
  We specialize in creating additional sales and increasing
conversions through listing optimizations across multiple platforms.
Our in-house staff has experience in professional product photography, 
photo editing, and writing copy that converts.</p>
            <p>Recent events show how rapidly everything is changing in the world of e-commerce.
And what worked a year ago does not bring the desired result at present.
We carefully monitor new changes in e-commerce and try to accept them in our work.</p>
<p>We love to grow, develop and win.
We like to build trusting relationships with our clients.
We don't want to be just consumers and only seek benefits, but we want to change this world for the better.</p>
          </div>
       </section>
    )
}

export default About