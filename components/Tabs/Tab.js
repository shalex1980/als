import styles from '../../styles/Tabs.module.scss'

const Tab = (props) => {
    const { index , setActiv } = props
    const handleClick = () => {
      setActiv(index)
    }
    return (
        <div className={styles.tab}
          onClick={handleClick}
        >
          {props.children}
        </div>
    )
}

export default Tab