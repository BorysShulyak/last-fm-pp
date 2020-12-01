import * as React from 'react'
import {Menu} from "./menu/menu";
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.Header}>
            <Menu/>
        </header>
    )
}