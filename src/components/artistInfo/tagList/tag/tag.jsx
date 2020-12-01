import * as React from 'react'
import classNames from 'classnames'
import styles from './tag.module.css'

export const Tag = ({url, classes, children}) => {
    return (
        <a className={classNames(styles.Tag, classes)} href={url} target='_blank'>
            {children}
        </a>
    )
}