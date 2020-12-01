import {SET_ARTIST_ERROR, SET_ARTIST_INFO, setArtistError, setArtistInfo,} from "./artist.action";
import {artistsAPI} from "../../api/artistsAPI";

const initialSate = {
    artistData: {},
    error: null
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SET_ARTIST_INFO:
            return {
                ...state,
                artistData: action.artistInfo
            }
        case SET_ARTIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const requestArtist = (artist) => async (dispatch) => {
    try{
        const data = await artistsAPI.getInfo(artist)
        const artistsInfo = {
            name: data.artist.name,
            img: data.artist.image[2]['#text'],
            tags: data.artist.tags.tag,
            description: data.artist.bio.content
        }
        dispatch(setArtistInfo(artistsInfo))
        dispatch(setArtistError(null))
    }
    catch (err) {
        dispatch(setArtistError(err.toString()))
    }
}