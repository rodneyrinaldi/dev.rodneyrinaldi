import React from 'react';
import { useRouter } from 'next/router'

import styles from './contact.module.css';

function Contact(props) {
  const router = useRouter()
  const wapp = 'https://api.whatsapp.com/send?phone=+5511981417040&text=Olá, gostaria de obter maiores informações.'

  return (
    <session className={styles.wrapper}>
      <a href={wapp} target='_blank'>
        <img src="/whatsapp.svg" alt="whatsapp" className={styles.icon} target="_blank" />
      </a>
      <a onClick={() => router.push('/')}>
        <img src="/arroba.svg" alt="whatsapp" className={styles.icon} />
      </a>
      <a href='#toppage'>
        <img src="/top.svg" alt="go top" className={styles.icon} />
      </a>
      {props.showback === 'yes'
        ? <a onClick={() => router.back()}>
          <img src="/back.svg" alt="go back" className={styles.icon} /></a>
        : <></>
      }
    </session>
  );
}

export default Contact;