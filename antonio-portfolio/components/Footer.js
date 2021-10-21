import React from 'react'
import styles from '../styles/Home.module.css'

export default function Footer() {

    return ( 
        <div>

            <footer className={styles.footer}>
                <h2>Everything made in Blender</h2>
                {/* Blender Logo */}
                <a href='https://www.blender.org/' target='_blank'>
                <img className={styles.blenderLogo} src='blender_logo.png' width='200' height='75' alt="Blender Logo" />
                </a>
            </footer>

        </div>
    )

}