import Contact from '../components/contact'
import styles from '../styles/manifesto.module.css'

export default function Manifesto() {
  function handlePhone() {
    alert('11 98141.7040')
  }

  return (
    <div id='toppage' className={styles.container}>

      <Contact showback='yes' />

      <div className={styles.line}>
        <h1><strong>Manifesto</strong></h1>
      </div>

      <div className={styles.line}>
      </div>


      <div className={styles.back}><a href="#toppage">INICIO</a></div>

    </div>
  )
}
