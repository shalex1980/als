import { useState, createRef } from 'react'
import fetch from 'isomorphic-fetch'
import styles from '../styles/Form.module.scss'

const fetching = async( obj) => {
  await fetch('http://localhost:3000/api/post',{
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }

  })
} 

const defaultForm = { 
  name: "",
  email: "",
  message: ""
  
}
const Form = () => {
  const [form, setForm] = useState(defaultForm)
  const [sendValue, setValue] = useState('SEND');

  const [empty, setEmpty] = useState({
    name: "",
    email: "",
    message: "", 
  })

  const handleSendValue  = () => {
    setValue("DONE")
    setTimeout(()=> {
      setValue("SEND")
    }, 3000)
  }

  const handleChange = (ev) => {
    const target = ev.target
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('Sending')

    if(checkEmpty()) {
      fetching(form)
      .then(result => {
        setForm(defaultForm)
        setEmpty(defaultForm)
        handleSendValue()
        console.log("SEND")
      })
    }
    return false
  }

  const checkEmpty = () => {

    if (form.name.length < 2) {
      setEmpty({name: "block"});
      return false
    } 
    if(!ValidateEmail(form.email)) {
      setEmpty({email: "block"});
      return false
    }

    if (form.message.length < 2 ) {
      setEmpty({ message: "block"});
      return false
    } 

    return true
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
        <input className={styles.send} type="submit"  value={sendValue} /> 
      </form>
    )
}

export default Form

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  } 
    return (false)
}