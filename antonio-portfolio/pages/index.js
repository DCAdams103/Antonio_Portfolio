import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ShowTest } from '../components/showModels.jsx'
import { ShowTest2 } from '../components/showModels.jsx'


export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Antonio Martinez</title>
      </Head>
      
      <main className={styles.main}>

        <h1 className={styles.name}>Antonio Martinez</h1>
        <p className={styles.desc}>A 3D and Animation Portfolio</p>

        <div className={styles.rowOne}>
          <div className={styles.showcaseLeft}>
            <ShowTest />
          </div>

          <div className={styles.showcaseRight}>
            <ShowTest />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>

    </div>

  )
}