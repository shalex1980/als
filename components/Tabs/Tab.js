import styles from '../../styles/Tabs.module.scss'

const Tab = (props) => {
    return (
        <button className={styles.tab}>
          {props.children}
        </button>
    )
}

export default Tab