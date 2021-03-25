import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" className={styles.logo1} />
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />

        <code className={styles.code}>
          <h1>{"{sustentability=ethical*((bpm*(journey*(crm*(clt)+hr(usr)))))}"}</h1>
          <h2>{"{sustentability=ethical*journey}"}</h2>
        </code>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <img src="/manifesto.png" alt="manifesto" className={styles.logo3} />
            <p>Publibicização dos princípios e conceitos vivenciados objetivando necessariamente à evolução ética eficiente e sustentável.</p>
          </a>

          <a href="/curriculum" className={styles.card}>
            <img src="/curriculo.png" alt="curriculo" className={styles.logo3} />
            <p>Coder & Dba & Lawyer. Direito digital e civil. Tecnologias Microsoft, Oracle e Javascript. Codando em ReactJS, React Native, Node.js.</p>
          </a>

          <a href="#" className={styles.card}>
            <img src="/portfolio.png" alt="portfolio" className={styles.logo3} />
            <p>Consultoria, projetos, arquitetura de software e trabalhos desenvolvidos.</p>
          </a>

          <a href="#" className={styles.card}>
            <img src="/editorial.png" alt="editorial" className={styles.logo3} />
            <p>Publicações, cursos e materiais educacionais desenvolvidos.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>

    </div>
  )
}
