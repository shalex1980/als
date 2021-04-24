import TabPanel from './TabPanel'
import Image from 'next/image'
import styles from '../../styles/Tabs.module.scss'

const TabPanels = (props) => {
    return (
      <>
       <TabPanel actTab={props.indexTab} index={0}>
        <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
            <p>We study and analyze all the possibilities of Amazon for product promotion.
            Based on the data, we are looking for new strategies for promotion.
             Using Amazon statistics, we create new bundles of popular products to provide convenience and value to buyers.</p>
           </div>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/analyze_girl.jpg"
              width={800}
              height={500}
           />
           </div>
        </article>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={1}>
         <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
             <p>Detail pages are where customers make their buying decision. 
           And high quality listings make it easier to discover evaluate and purchase your products.</p>
           </div>
           <div className={styles.tabpanel_img}>
             <Image 
            src="/images/tools.jpg"
            width={800}
            height={500}
           />
           </div>
         </article>
         <article className={styles.tabpanel_wrap}>
          <div className={styles.tabpanel_img}>
            <Image 
              src="/images/sticky.jpg"
              width={800}
              height={500}
           />
           </div>
           <div className={`${styles.tabpanel_tx} tx_right`}>
             <h4>Search ranking</h4>
             <p>We analyze the listing’s rank for specific, high-performing keywords.</p>
           </div>
         </article>
         <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
             <h4>Title </h4>
             <p>The title is a major aspect of the product listing.
      It's a first thing customers see.
      A concise relevant title will drive the most traffic to your detail page.
      We analyze the title for specific keywords and utilize that according to Amazon’s title rules.</p>
           </div>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/writing-title.jpg"
              width={800}
              height={500}
           />
           </div>
         </article>
         <article className={styles.tabpanel_wrap}>
          <div className={styles.tabpanel_img}>
              <Image 
                src="/images/photocoper.jpg"
                width={800}
                height={500}
            />
            </div>           
            <div className={`${styles.tabpanel_tx} tx_right`}>
             <h4>Pictures</h4>
             <p>Product images are one of your most valuable marketing tools. 
      Good images make it easy for customers to evaluate the product.
      We use third-party services to take photos of the required quality and rules.</p>
           </div>
         </article>
         <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
             <h4>Bullet points</h4>
             <p>The key product features are integral to conversion provide customers with a snapshot view of the product. 
     We use them to call out the most important information about your product that you want to make sure customers read.</p>
           </div>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/bullet.jpg"
              width={800}
              height={500}
           />
           </div>
         </article>
         <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/description.jpg"
              width={800}
              height={500}
           />
           </div>           
           <div className={`${styles.tabpanel_tx} tx_right`}>
             <h4>Descriptions</h4>
             <p>The product description is a way that you can draw organic traffic through indexing, as well as help
      create a better customer shopping experience. It is important that customers know what they will be
      receiving when they make a purchase, and a good description vibrantly describes and sells, but also sets
      proper expectations for the product.</p>
           </div>

         </article>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={2}>
        <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
             <p>Amazon Advertise & Promotion tools include some great services (PPC, Sponsored Products, Deals, Coupons, etc...). 
    Utilize it help us increase traffic to your products in the short-term and also contribute to increased exposure, traffic, and conversions over the long-term.</p>
           </div>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/advertising.jpg"
              width={800}
              height={500}
           />
           </div>
        </article>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={3}>
          <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
             <p>The constant availability of a product greatly influences the perception of a brand.
  Using Amazon services, third-party programs, we predict the required quantity of goods to be always in stock.</p>
           </div>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/logistic.jpg"
              width={800}
              height={500}
           />
           </div>
        </article>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={4}>
        <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
          <p> We build bridge between our customers and brand owners. 
            </p>
            <ul>
              <li>We execute Q&A monitoring.</li>
              <li>Rule refunds, returns, exchanges.</li>
              <li>Provide email, phone support.</li>
            </ul>
          </div>
          <div className={styles.tabpanel_img}>
            <Image 
              src="/images/customer_support.jpg"
              width={800}
              height={500}
           />
           </div>  
         </article>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={5}>
        <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
           <p>Working with the brand products on Amazon, we monitor the cleanliness of the product catalog.
            We are tracking and removing duplicate listings,  monitor the compliance of product information.
            Using  Amazon's support, we fix accidental or deliberate violations.
            (Mistakes in titles, inconsistencies in the description, etc.)</p>
           </div>
           <div className={styles.tabpanel_img}>
            <Image 
              src="/images/catalog.jpg"
              width={800}
              height={500}
           />
           </div>
        </article>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={6}>
         <p>"The most effective content is supported and validated by positive reviews."
      This one is about social proof. Product reviews, both the quantity of them and the quality, are huge
  influencers on if people are going to buy a product. Many people compare products not only on
  Amazon is based on reviews, but they will even pull up their phone and check Amazon reviews before they
  buy the product in store. That is a big thing companies should be aware of! So, reviews are important.
  We firmly believe that all reviews should be monitored and responded to. This shows a level of care, and
  a strong review follow-up system can be used to curtail the accumulation of poor reviews.
  We can further increase the review score by going through and requesting removal for feedback that
  doesn't follow the Amazon guidelines. Typically, these types of reviews are related to product
  fulfillment and are a violation of Amazon's review guidelines.</p>
       </TabPanel>
       <TabPanel actTab={props.indexTab} index={7}>
          <article className={styles.tabpanel_wrap}>
           <div className={styles.tabpanel_tx}>
            <p>Enforcing minimum advertised prices (MAP) policy is very important for us.
              If you have a MAP agreement, we strictly adhere to it.</p>
            </div>
            <div className={styles.tabpanel_img}>
             <Image 
              src="/images/money.jpg"
              width={800}
              height={500}
            />
           </div>
          </article>
       </TabPanel>
      </>
    )
}

export default TabPanels