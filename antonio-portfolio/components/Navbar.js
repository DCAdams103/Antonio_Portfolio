import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        
        <div>
            
            <nav className={styles.nav}>

                {/* Links to different pages in the pages folder */}
                <Link href='/robots' >
                    <a>3D Robots</a>
                </Link>
                <>  ||  </>
                <Link href='/misc' >
                    <a>3D Misc.</a>
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
            
        </div>
    )
}