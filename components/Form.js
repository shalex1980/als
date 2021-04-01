import { useState } from 'react'
import styles from '../styles/Form.module.scss'

const defaultForm = { 
  name: "",
  email: "",
  message: ""
  
}
const Form = () => {
  const [form, setForm] = useState(defaultForm)

  const [empty, setEmpty] = useState({
    send: false,
    name: "",
    email: "",
    message: "", 
  })

  const handleChange = (ev) => {
    const target = ev.target
    setForm({...form, [target.name]: target.value})
    console.log(form)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    checkEmpty()
    if(!empty.send) return
    console.log("SEND")

    setForm(defaultForm)
  }

  const checkEmpty = () => {
    let tmp = {
      send: true,
      name: "",
      email: "",
      message: "",
    }

    if (form.name.length < 2) {
      tmp.name = "block"
      tmp.send = false
    } 
    if (form.message.length < 2 ) {
      tmp.message = "block"
      tmp.send = false
    } 

    setEmpty({...empty, ...tmp})
  }

    return ( 
      <form className={styles.form} onSubmit={handleSubmit}>
        <article className={styles.form_article}>
          <h5 className={styles.tips}>Your Name</h5>
          <input className={styles.input} type="text" name="name" value={form.name} onChange={handleChange}/>
          <span className={styles.empty} style={{display:`${empty.name}`}}>Field can't be empty or less 2 letter</span>
        </article>
        <article className={styles.form_article}>
          <h5 className={styles.tips}>Your Email</h5>
          <input className={styles.input} type="email" name="email" value={form.email} onChange={handleChange}/>
          <span className={styles.empty} style={{display:`${empty.email}`}}>Field can`t be empty </span>
        </article>
        <article className={styles.form_article}>
          <h5 className={styles.tips}>Message</h5>
          <textarea className={styles.textarea} name="message" value={form.message} onChange={handleChange}> </textarea>
          <span className={styles.empty} style={{display:`${empty.message}`}}>Field can`t be empty or less 2 letter</span>
        </article>
        <input className={styles.send} type="submit" onClick={handleSubmit} value="SEND" /> 
      </form>
    )
}

export default Form