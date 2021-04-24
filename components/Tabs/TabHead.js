import Tab from './Tab'
import { FaRocket } from 'react-icons/fa'
import { AiFillThunderbolt, AiFillNotification, AiFillTool, AiFillRocket, AiFillCustomerService, AiFillFolderOpen, AiFillStar, AiFillControl  } from 'react-icons/ai'
import styles from '../../styles/Tabs.module.scss'

const TabHead = (props) => {
    return (
      <>
        <Tab index={0}
          setActiv={props.setIndexTab}
        >
          <p><AiFillControl className={styles.icon} /> </p>
          <h4>ANALIZE  IMPROVING</h4>
        </Tab> 
        <Tab index={1}
          setActiv={props.setIndexTab}
        >
          <p><AiFillTool className={styles.icon} /> </p>
          <h4>OPTIMIZE LISTING</h4>
        </Tab>
        <Tab index={2}
          setActiv={props.setIndexTab}
        >
          <p><AiFillNotification className={styles.icon} /> </p>
          <h4>ADVERTIZIN  PROMOTION</h4>
        </Tab>
        <Tab index={3}
          setActiv={props.setIndexTab}
        >
          <p><AiFillRocket className={styles.icon} /> </p>
          <h4>LOGISTIC</h4>
        </Tab>
        <Tab index={4}
          setActiv={props.setIndexTab}
        >
          <p><AiFillCustomerService className={styles.icon} /> </p>
          <h4>CUSTOMER SUPPORT</h4>
        </Tab>
        <Tab index={5}
          setActiv={props.setIndexTab}
        >
          <p><AiFillFolderOpen className={styles.icon} /> </p>
          <h4>CATALOG MANAGEMENT</h4>
        </Tab>
        <Tab index={6}
          setActiv={props.setIndexTab}
        >
          <p><AiFillStar className={styles.icon} /> </p>
          <h4>RATING  REVIEWS</h4>
        </Tab>
        <Tab index={7}
          setActiv={props.setIndexTab}
        ><p><AiFillThunderbolt className={styles.icon} /> </p> 
          <h4>MAP POLICY</h4>
        </Tab>
      </>
    )
}

export default TabHead