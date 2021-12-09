import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ModelPages.module.css'

export default function Animations() {

    return ( 
        <div className={styles.container}>

            <Head>
                <title>Antonio Martinez - Animations</title>
            </Head>

            <main>

                <h1 className={styles.aniName}>Antonio Martinez</h1>

                {/* Link to Youtube */}
                <a className={styles.parent} href='https://www.youtube.com/channel/UCQ6qG4efaJe78iZ8xrTpx4w' target='_blank'>
                    <p className={styles.aniDesc}>View my Youtube</p>
                    <img className={styles.yt} src='yt.png' width='50' height='35' />
                </a>

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
                    <>  ||  </>
                    <Link href='/about' >
                        <a>About Me</a>
                    </Link>
                </nav>

                <br/><br/>

                {/* Embeded Youtube video */}
                <div className={styles.parent}> 
                    <div className={styles.iFrameParent}>
                        <iframe className={styles.iframe}
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/JPFQWmdfvxw`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="The Dos Show - Episode Uno"
                        />
                    </div>
                </div>
                
            </main>



        </div>
    )

}