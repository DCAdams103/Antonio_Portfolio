import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Antonio Martinez</title>
      </Head>
      
      <main className={styles.main}>

        <h1 className={styles.name}>Antonio Martinez</h1>
        <p className={styles.desc}>A 3D and Animation Portfolio</p>

        {/* Navbar with links to other pages */}
        <Navbar />

      </main>

      <Footer />

    </div>

  )
}
