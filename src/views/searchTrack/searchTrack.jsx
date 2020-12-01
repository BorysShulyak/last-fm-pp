import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {getSearchField, getSearchResults} from "../../core/tracks/tracks.selector";
import {requestSearchTracks} from "../../core/tracks/tracks.reducer";
import {getCurrentPage, getTotalPagesCount} from "../../core/pagination/pagination.selector";
import {Pagination} from "../../components/common/pagination/pagination";
import {Track} from "../../components/trackList/track/track";
import {Input} from "../../components/common/input/input";

export const SearchTrack = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const searchField = useSelector(getSearchField)
    const searchResults = useSelector(getSearchResults)

    const totalPagesCount = useSelector(getTotalPagesCount)
    const currentPage = useSelector(getCurrentPage)

    const [inputValue, setInputValue] = useState(null)

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
        history.push({search: `?page=${currentPage}${searchField && `&track=${searchField}`}`})
    }, [currentPage, searchField])

    return (
        <article>
                <Input
                    value={inputValue}
                    handleChange={handleInputChange}
                    placeholder='Введите название трека'
                />
                <button type='submit' onClick={handleSubmit}>
                    Найти
                </button>

            <Pagination
                totalPagesCount={totalPagesCount}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <ul>
                {searchResults.map((track, index) => (
                    <Track
                        img={track.image[2]['#text']}
                        trackName={track.name}
                        artistName={track.artist.name}
                        artistHref={track.artist.url}
                        key={index}
                    />))
                }
            </ul>
        </article>
    )
}