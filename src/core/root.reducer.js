import {combineReducers} from "redux";
import paginationReducer from './pagination/pagination.reducer'
import artistReducer from './artist/artist.reducer'
import tracksReducer from './tracks/tracks.reducer'

export default combineReducers({
    pagination: paginationReducer,
    artist: artistReducer,
    tracks: tracksReducer
})
