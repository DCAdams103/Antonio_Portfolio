import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ModelPages.module.css'
import { GeetarModel } from '../components/showModels.jsx' 
import { CircleModel } from '../components/showModels.jsx'

export default function Robots() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Antonio Martinez - 3D Robots</title>
            </Head>

            <main>

                <h1 className={styles.name}>Antonio Martinez</h1>
                <p className={styles.desc}>A 3D and Animation Portfolio</p>

                {/* Navbar with links to other pages */}
                <nav className={styles.nav}>
                    <Link href='/robots' >
                        <a>3D Robots</a>
                    </Link>
                    <>  ||  </>
                    <Link href='/animations' >
                        <a>3D Animations</a>
                    </Link>
                    <>  ||  </>
                    <Link href='/about' >
                        <a>About Me</a>
                    </Link>
                </nav>

                <h2 className={styles.instruction}>Left click & drag to rotate<br/>Right click & drag to move side to side<br/>Mouse wheel to zoom </h2>

                <div className={styles.row}>
                    <div className={styles.showcaseLeft}>
                        <GeetarModel />
                    </div>

                    <div className={styles.showcaseRight}>
                        <CircleModel />
                    </div>
                </div>

            </main>

            <footer className={styles.footer}>
                <h2>Everything made in Blender</h2>
                {/* Blender Logo */}
                <a href='https://www.blender.org/' target='_blank' rel='noreferrer'>
                <img className={styles.blenderLogo} src='blender_logo.png' width='200' height='75' alt="Blender Logo" />
                </a>
            </footer>

        </div>
    )
}