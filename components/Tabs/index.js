import { useState } from 'react'
import Tab from './Tab'
import TabPanel from './TabPanel'
import { FaRocket } from 'react-icons/fa'
import styles from '../../styles/Tabs.module.scss'

const Tabs = (props) => {
  const [ indexTab, setIndexTab ] = useState(0)
  const { services } = props

    console.log(indexTab)
    return (
      <section className={styles.tabs}> 
        <section className={styles.app_tabs}>
          {/* <Tab index={0} setActiv={setIndexTab}>First Item</Tab>
          <Tab index={1} setActiv={setIndexTab}>Second Item</Tab>
          <Tab index={2} setActiv={setIndexTab}>Third Item</Tab> */}
          { services.map((item, index) => (
              <Tab index={index} 
                  setActiv={setIndexTab}
              > 
                <p>
                  <FaRocket className={styles.icon} />
                </p> 
                <h4 className={styles.tab_title}>
                  {splitString(item.title)}
                </h4>
              </Tab>))
          }
        </section>
        <section className={styles.pan_tabs}>
          {/* <TabPanel actTab={indexTab} index={0}>This first content</TabPanel>
          <TabPanel actTab={indexTab} index={1}>This second content</TabPanel>
          <TabPanel actTab={indexTab} index={2}>This third content</TabPanel> */}
          {services.map((item, index) => (
            <TabPanel actTab={indexTab} index={index}>
              {item.fullText}
            </TabPanel>
          ))}
        </section>
      </section>
    )
}

export default Tabs

function splitString (str) {
  let tmp = str.split(' ').map(item => (
    <>
      {item}
      <br></br>
    </>
  ));
  return tmp
  // return (
  //   <span>
  //     {tmp}
  //   </span>
  // )
}