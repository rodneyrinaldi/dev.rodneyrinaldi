import Link from 'next/link'
import React from 'react';

import styles from './menu.module.css';

function Menu({ url, alt, pic, title, description }) {
  return (
    <Link href={url}>
      <a href={url} className={styles.card}>
        <img src={pic} alt={alt} className={styles.logo} />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </Link>
  );
}

export default Menu