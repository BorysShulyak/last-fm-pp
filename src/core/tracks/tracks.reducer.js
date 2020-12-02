import {tracksAPI} from "../../api/tracksAPI";
import {setCurrentPage, setTotalPagesCount} from "../pagination/pagination.action";
import {
    SET_SEARCH_FIELD,
    SET_SEARCH_RESULTS,
    SET_TOP_TRACKS, SET_TRACKS_ERROR,
    setSearchField,
    setSearchResults,
    setTopTracks, setTracksError
} from "./tracks.action";

const initialState = {
    topTracks: [],
    searchField: '',
    searchResults: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_TRACKS:
            return {
                ...state,
                topTracks: action.payload
            }
        case SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            }
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload
            }
        case SET_TRACKS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const requestTopTracks = (page = 1, pageSize = 10) => async (dispatch) => {
    dispatch(setCurrentPage(page))
    try {
        const data = await tracksAPI.getTopTracks(page, pageSize)
        dispatch(setTotalPagesCount(data.tracks['@attr'].totalPages))
        dispatch(setTopTracks(data.tracks.track))
        dispatch(setTracksError(null))
    }
    catch (err) {
        dispatch(setTracksError(err.toString()))
    }
}

export const requestSearchTracks = (page = 1, track = '', pageSize = 10) => async (dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(setSearchField(track))
    try {
        const data = await tracksAPI.search(page, pageSize, track)
        const totalItemsCount = data.results['opensearch:totalResults']
        const totalPagesCount = Math.ceil(totalItemsCount / pageSize);
        dispatch(setTotalPagesCount(totalPagesCount))
        dispatch(setSearchResults(data.results.trackmatches.track))
        dispatch(setTracksError(null))
    }
    catch (err) {
        dispatch(setTracksError(err.toString()))
    }
}