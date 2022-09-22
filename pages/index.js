import Head from 'next/head'
import styles from '../styles/Home.module.css'
import RomanConverter from '../components/conv'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Converter</title>
        <meta name="description" content="An Arabic to Roman Numeral Converter." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Roman Numeral Converter
        </h1>

        <p className={styles.description}>
          Convert your arabic numbers to roman numerals.
        </p>
        <p>
          &copy; <a href="https://aebibtech.com" target="_blank" rel="noreferrer noopener">Aebibtech</a>
        </p>

        <div className={styles.grid}>
          <RomanConverter />
        </div>
      </main>
    </div>
  )
}
