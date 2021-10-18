import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PlantsModel } from '../components/showModels.jsx'
import { FishModel } from '../components/showModels.jsx'

function Divider() {

  return (
    <div className={styles.divider}>
    </div>
  )

}

function VertDivider() {

  return (
    <div className={styles.vertDivider}>
      
    </div>
  )

}

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Antonio Martinez</title>
      </Head>
      
      <main className={styles.main}>

        <h1 className={styles.name}>Antonio Martinez</h1>
        <p className={styles.desc}>A 3D and Animation Portfolio</p>

        <div className={styles.row}>
          <div className={styles.showcaseLeft}>
            <PlantsModel />
          </div>

          {/* <VertDivider /> */}

          <div className={styles.showcaseRight}>
            <FishModel />
          </div>
        </div>

        {/* <Divider /> */}

        <div className={styles.row}>
          <div className={styles.showcaseLeft}>
      
          </div>

          {/* <VertDivider /> */}

          <div className={styles.showcaseRight}>
            
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        
      </footer>

    </div>

  )
}
