import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Container, Grid } from '@mui/material';

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Antonio Martinez</title>
      </Head>
      
      <main className={styles.main}>
        <Grid container
              spacing={0}
              direction="row"
              alignItems="center"
              className={styles.namedesc}>
                
          <Grid item xl={3}>
            <div className={styles.topdiv}>
              <p style={{display: 'inline', alignItems: 'center'}}>&#9675;</p>
              <div className={styles.another}>
                
                <p className={styles.navlist}>Robots</p> 
              </div>
            </div>
            <div className={styles.topdiv}>
              <div className={styles.another}>
                <p className={styles.navlist}>Miscellaneous</p> 
              </div>
            </div>
            <div className={styles.topdiv}>
              <div className={styles.another}>
                <p className={styles.navlist}>Animations</p> 
              </div>
            </div>
            <div className={styles.topdiv}>
              <div className={styles.another}>
                <p className={styles.navlist}>About Me</p> 
              </div>
            </div>
          </Grid>

          <Grid item xs={3}>
            <h1 className={styles.nametext}>Antonio Martinez</h1>
            <p className={styles.nametext}>A 3D and Animation Portfolio</p>
          </Grid>

          <Grid item xs={3}>
            <img src="farmer_boy_test.png" width="60%" />
          </Grid>

        </Grid>
          

        {/* Navbar with links to other pages
        <Navbar />
        */}

      </main>

      {/*<Footer />*/}

    </div>

  )
}
