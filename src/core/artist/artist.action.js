export const SET_ARTIST_INFO = 'ARTIST/SET_ARTIST_INFO'
export const SET_ARTIST_ERROR = 'ARTIST/SET_ERROR'

export const setArtistInfo = (artistInfo) => ({type: SET_ARTIST_INFO, payload: artistInfo})
export const setArtistError = (error) => ({type: SET_ARTIST_ERROR, payload: error})