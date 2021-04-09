import styles from '../../styles/Tabs.module.scss'

const TabPanel = (props) => {
    return (
      <article className={styles.tabpanel}>
          {props.children}
      </article>
    )
}

export default TabPanel