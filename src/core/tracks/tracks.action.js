export const SET_TOP_TRACKS = 'TRACKS/SET_TOP_TRACKS'
export const SET_SEARCH_RESULTS= 'TRACKS/SET_SEARCH_RESULTS'
export const SET_SEARCH_FIELD = 'TRACKS/SET_SEARCH_FIELD'
export const SET_TRACKS_ERROR = 'TRACKS/SET_ERROR'

export const setTopTracks = (topTacks) => ({type: SET_TOP_TRACKS, payload: topTacks})
export const setSearchField = (searchField) => ({type: SET_SEARCH_FIELD, payload: searchField})
export const setSearchResults = (searchResults) => ({type: SET_SEARCH_RESULTS, payload: searchResults})
export const setTracksError = (error) => ({type: SET_TRACKS_ERROR, payload: error})