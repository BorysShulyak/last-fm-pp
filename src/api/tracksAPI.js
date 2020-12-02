import {API_KEY, instance} from './api';

export const tracksAPI = {
    getTopTracks(page = 1, pageSize = 10) {
        return instance
            .get(`?method=chart.gettoptracks&api_key=${API_KEY}&format=json&page=${page}&limit=${pageSize}`)
            .then(res => res.data)
    },
    search(page = 1, pageSize= 10, track = '') {
        return instance
            .get(`?method=track.search&track=${track}&page=${page}&limit=${pageSize}&api_key=${API_KEY}&format=json`)
            .then(res => res.data)
    }
}