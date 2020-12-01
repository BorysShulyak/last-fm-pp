import axios from "axios";

export const API_KEY = 'af1761973a5b9e479ae3c286ede7b024'

export const instance = axios.create({
    baseURL: ' http://ws.audioscrobbler.com/2.0/',
    headers: {
        'API-KEY': API_KEY
    }
})
