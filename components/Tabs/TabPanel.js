import styles from '../../styles/Tabs.module.scss'

const TabPanel = (props) => {
    const { index, actTab } = props

    return (
      <div style={{'display': `${index === actTab ? '' : 'none'}`}}>
        <article className={styles.tabpanel}>
          {props.children}
        </article>
      </div>
      
    )
}

export default TabPanel