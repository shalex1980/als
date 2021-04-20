import Tabs from './Tabs'
import styles from '../styles/Service.module.scss'

const Service = (props) => {
    return (
      <article>
        <Tabs services={props.services} />
      </article>
    )
}


export default Service