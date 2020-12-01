import * as React from 'react'
import {Link} from "react-router-dom";
import classNames from 'classnames'
import {useDispatch} from "react-redux";
import {requestArtist} from "../../../core/artist/artist.reducer";
import styles from './track.module.css'

export const Track = ({
    img,
    trackName,
    artistName,
    artistHref,
    classes
}) => {
    return (
        <li className={classNames(styles.Track, classes)}>
            {img && <img src={img} alt=""/>}
            <h1>Название трека: {trackName}</h1>
            <Link
                to={`artistInfo?name=${artistName}`}
            >
                <p className={styles.Artist}>Исполнитель: {artistName}</p>
            </Link>
            <a className={styles.ArtistLink} href={artistHref} target="_blank">
                Ссылка на страницу исполнителя на сервисе Last.fm
            </a>
        </li>
    )
}
