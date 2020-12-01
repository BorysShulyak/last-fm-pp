import * as React from 'react'
import classNames from 'classnames'
import styles from './trackShortInfo.module.css'

export const TrackShortInfo = ({trackName, artistName, classes}) => {
    return (
        <div className={classNames(styles.TrackShortInfo, classes)}>
            <h1 className={styles.TrackName}>{trackName}</h1>
            <h1 className={styles.ArtistName}>{artistName}</h1>
        </div>
    )
}