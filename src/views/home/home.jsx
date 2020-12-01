import * as React from 'react'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory }   from 'react-router-dom'
import {requestTopTracks} from "../../core/tracks/tracks.reducer";
import {getTopTracks} from "../../core/tracks/tracks.selector";
import {Pagination} from "../../components/common/pagination/pagination";
import {getCurrentPage, getTotalPagesCount} from "../../core/pagination/pagination.selector";
import {Track} from "../../components/trackList/track/track";
import styles from './home.module.css'
import {TrackList} from "../../components/trackList/trackList";
import {useQuery} from "../../hooks/useQuery";

export const Home = () => {
    const history = useHistory()
    const query = useQuery()
    const topTracks = useSelector(getTopTracks)
    const totalPagesCount = useSelector(getTotalPagesCount)
    const currentPage = useSelector(getCurrentPage)
    const dispatch = useDispatch()
    const handlePageChange = (pageNumber) => {
        dispatch(requestTopTracks(pageNumber))
    }
    useEffect(() => {
        const initialPage = parseInt(query.get('page'))
        dispatch(requestTopTracks(initialPage || 1))
    }, [])
    useEffect(() => {
        history.push({search: `?page=${currentPage}`})
    }, [currentPage])


    return (
        <main className={styles.Home}>
            <h1>Популярные треки:</h1>
            <Pagination
                classes={styles.Pagination}
                totalPagesCount={totalPagesCount}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <TrackList>
                {topTracks.map((track, index) => (
                    <Track
                        classes={styles.Track}
                        img={track.image[2]['#text']}
                        trackName={track.name}
                        artistName={track.artist.name}
                        artistHref={track.artist.url}
                        key={index}
                    />))
                }
            </TrackList>
        </main>
    )
}