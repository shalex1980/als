import { useState } from 'react'
import TabHead from './TabHead'
import TabPanels from './TabPanels'
import styles from '../../styles/Tabs.module.scss'

const Tabs = (props) => {
  const [ indexTab, setIndexTab ] = useState(0)

    return (
      <section className={styles.tabs}> 
        <section className={styles.tab_head}>
          <TabHead setIndexTab={setIndexTab} />
        </section>
        <section className={styles.pan_tabs}>
          <TabPanels indexTab={indexTab}/>
        </section>
      </section>
    )
}

export default Tabs

/*function splitString (str) {
  let tmp = str.split(' ').map(item => (
    <>
      {item}
      <br></br>
    </>
  ));
  return tmp
}*/