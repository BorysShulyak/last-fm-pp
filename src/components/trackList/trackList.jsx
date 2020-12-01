import * as React from 'react'
import classNames from 'classnames'
import styles from './trackList.module.css'

export const TrackList = ({classes, children}) => {
    return (
        <ul
            className={classNames(styles.TrackList, classes)}
        >
            {children}
        </ul>
    )
}