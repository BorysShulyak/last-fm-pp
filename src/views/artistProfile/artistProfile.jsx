import * as React from 'react'
import classNames from 'classnames'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArtistData} from "../../core/artist/artist.selector";
import {ArtistInfo} from "../../components/artistInfo/artistInfo";
import styles from './artistProfile.module.css'
import {requestArtist} from "../../core/artist/artist.reducer";
import {useQuery} from "../../hooks/useQuery";

export const ArtistProfile = ({
    classes
}) => {
    const dispatch= useDispatch()
    const query = useQuery()
    const artistInfo = useSelector(getArtistData)

    useEffect(() => {
        const name = query.get('name')
        dispatch(requestArtist(name))
    } ,[])

    return (
        <article className={classNames(styles.ArtistPage, classes)}>
            <ArtistInfo
                artistName={artistInfo.name}
                img={artistInfo.img}
                tags={artistInfo.tags}
                description={artistInfo.description}
            />
        </article>
    )
}