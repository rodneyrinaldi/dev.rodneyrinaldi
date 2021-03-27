import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'

import styles from '../styles/manifesto.module.css'

export default function Manifesto() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" className={styles.logo1} />
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />

        <h1>MANIFESTO INSTITUCIONAL</h1>

        <div className={styles.grid}>
          <p>
            Com este manifesto dá-se publicidade ao comprometimento primordial em seguir as melhores e possíveis
            políticas de pesquisa, desenvolvimento, comercialização e suporte a todos os produtos e serviços
            desempenhados isolada ou compartilhadamente
          </p>
          <p>
            Possuindo como valores essenciais vivenciados em todas as atividades:
            a) o respeito aos clientes, aos colaboradores e a sociedade;
            b) o respeito a aplicabilidade das normas, das leis, das convenções e dos costumes;
            c) o respeito a concorrência legal, ética e justa;
            d) o respeito a precificação justa, sustentável e competitiva.
          </p>
          <p>
            Aplicando como princípios em todas as interações:
            a) necessáriamente ouvir primeiro a necessidade do cliente antes de sugirir soluções;
            b) sempre registrar interações e especificações de forma simples e eficiêntes;
            c) se comprometer com o bom especificado em seu tempo, entregar o ótimo quando possível, e nunca entregar o ruim desjustificado;
            d) fazer primeiro e cobrar depois, sempre que possível trabalhar com provas de conceito primeiramente.
          </p>
        </div>

      </main>

      <session className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
      </session>

      <footer className={styles.footer}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>

    </div>
  )
}
