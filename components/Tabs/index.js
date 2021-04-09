import { useState } from 'react'
import Tab from './Tab'
import TabPanel from './TabPanel'
import styles from '../../styles/Tabs.module.scss'

const Tabs = () => {
  const [ indexTab, setIndexTab ] = useState(0)

    return (
      <section className={styles.tabs}> 
        <section className={styles.app_tabs}>
          <Tab index={0}>First Item</Tab>
          <Tab index={1} >Second Item</Tab>
          <Tab index={2}>Third Item</Tab>
        </section>
        <section className={styles.pan_tabs}>
          <TabPanel actTab={indexTab} index={0}>This first content</TabPanel>
          <TabPanel actTab={indexTab} index={1}>This second content</TabPanel>
          <TabPanel actTab={indexTab} index={2}>This third content</TabPanel>
        </section>
      </section>
    )
}

export default Tabs