import {API_KEY, instance} from './api';

export const artistsAPI = {
    getInfo(artist) {
        return instance
            .get(`?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`)
            .then(res => res.data)
    },
}