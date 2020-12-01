import * as React from 'react'
import styles from './artistInfo.module.css'
import {TagList} from "./tagList/tagList";

export const ArtistInfo = ({
    artistName,
    img,
    tags = [],
    description
}) => {
    return (
        <section>
            <h1 className={styles.ArtistName}>{artistName}</h1>
            <div className={styles.MediaContainer}>
                <img src={img}/>
                <div className={styles.TagsContainer}>
                    <h1>Теги:</h1>
                    <TagList tags={tags} classes={styles.TagList}/>
                </div>
            </div>
            <h1>Биография артиста</h1>
            <p className={styles.Description}>{description}</p>
        </section>
    )
}