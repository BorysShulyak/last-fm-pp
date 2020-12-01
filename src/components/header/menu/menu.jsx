import * as React from "react";
import classNames from 'classnames'
import {MenuItem} from "./menuItem/menuItem";
import styles from "./menu.module.css";

export const Menu = ({classes}) => {
    return (
        <nav className={classNames(styles.Menu, classes)}>
            <ul className={styles.MenuList}>
                <MenuItem href='/' classes={styles.HomeLink}><p className={styles.LinkText}>Главная</p></MenuItem>
                <MenuItem href='/searchTrack'><p className={styles.LinkText}>Поиск трека</p></MenuItem>
            </ul>
        </nav>
    )
}
