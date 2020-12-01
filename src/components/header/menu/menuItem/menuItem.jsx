import {Link} from "react-router-dom";
import classNames from 'classnames'
import styles from './menuItem.module.css'

export const MenuItem = ({href, classes, children}) => {
    return (
        <li className={classNames(styles.MenuItem, classes)}>
            <Link to={href}>{children}</Link>
        </li>
    )
}