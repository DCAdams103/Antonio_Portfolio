import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ModelPages.module.css'
import Footer from '../components/Footer'

export default function About() {

    return ( 
        <div className={styles.container}>
            <Head>
                <title>Antonio Martinez - Animations</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet"></link>
            </Head>

            <main>
                <h1 className={styles.aniName}>Antonio Martinez</h1>

                {/* Navbar with links to other pages */}
                <nav className={styles.nav}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <> || </>
                    <Link href='/robots' >
                        <a>3D Robots</a>
                    </Link>
                    <>  ||  </>
                    <Link href='/misc' >
                        <a>3D Misc.</a>
                    </Link>
                </nav>

                <br/><br/>
                
                {/* Paragraph about Antonio */}
                <h1 className={styles.about}>About Me</h1>
                <p className={styles.aboutDesc}>Hey my name is Antonio, I'm a self taught 3D Modeler <br/>
                and sculpter with some animation experience. I plan on learning texturing, <br/> uv mapping, lighting and better rigging. <br/>
                I'm currently using blender as a hobby for now but <br/> I'm looking into freelancing and creating my own animated films in the future.
                </p>
            </main>

            <footer className={styles.aboutFooter}>
                {/* Link to Youtube */}
                <a className={styles.parent} href='https://www.youtube.com/channel/UCQ6qG4efaJe78iZ8xrTpx4w' target='_blank' rel="noreferrer">
                    <p className={styles.ytText}>View my Youtube</p>
                    <img className={styles.yt} src='yt.png' width='50' height='35' />
                </a>
                
                <h2>Everything made in Blender</h2>
                {/* Blender Logo */}
                <a href='https://www.blender.org/' target='_blank' rel="noreferrer">
                    <img className={styles.blenderLogo} src='blender_logo.png' width='200' height='75' alt="Blender Logo" />
                </a>

            </footer>
            
        </div>
    )

}