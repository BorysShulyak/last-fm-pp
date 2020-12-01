import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useQuery} from "../../hooks/useQuery";
import {getSearchField, getSearchResults} from "../../core/tracks/tracks.selector";
import {requestSearchTracks} from "../../core/tracks/tracks.reducer";
import {getCurrentPage, getTotalPagesCount} from "../../core/pagination/pagination.selector";
import {Pagination} from "../../components/common/pagination/pagination";
import {Input} from "../../components/common/input/input";
import {TrackList} from "../../components/trackList/trackList";
import {TrackShortInfo} from "../../components/trackList/trackShortInfo/trackShortInfo";
import {setSearchField} from "../../core/tracks/tracks.action";
import styles from './searchTrack.module.css'

export const SearchTrack = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const query = useQuery()
    const searchField = useSelector(getSearchField)
    const searchResults = useSelector(getSearchResults)
    const totalPagesCount = useSelector(getTotalPagesCount)
    const currentPage = useSelector(getCurrentPage)

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = () => {
        dispatch(requestSearchTracks(1, inputValue))
    }
    const handlePageChange = (pageNumber) => {
        dispatch(requestSearchTracks(pageNumber, searchField))
    }

    useEffect(() => {
        const initialPage = parseInt(query.get('page'))
        const initialSearchValue = query.get('track')
        dispatch(requestSearchTracks(initialPage, initialSearchValue))
        return () => {
            dispatch(setSearchField(''))
        }
    }, [])
    useEffect(() => {
        history.push({search: searchField && `?page=${currentPage}$&track=${searchField}`})
    }, [currentPage, searchField])

    return (
        <article className={styles.SearchTrackPage}>
            <div>
                <Input
                    value={inputValue || searchField}
                    handleChange={handleInputChange}
                    placeholder='Введите название трека'
                />
                <button className={styles.SearchBtn} type='submit' onClick={handleSubmit}>
                    Найти
                </button>
            </div>
            {searchField && (
                <>
                    <Pagination
                        classes={styles.Pagination}
                        totalPagesCount={totalPagesCount}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                    <TrackList>
                        {searchResults.map((track, index) => (
                            <TrackShortInfo
                                classes={styles.TrackShortInfo}
                                trackName={track.name}
                                artistName={track.artist}
                                key={index}
                            />))
                        }
                    </TrackList>
                </>
            )}
        </article>
    )
}