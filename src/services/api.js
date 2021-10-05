import axios from 'axios';

// URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3
//https://api.themoviedb.org/3/movie/now_playing?api_key=8fdf4098c0e22b2a27fdf30d4c89189a&language=pt-BR&page=1

export const key = '8fdf4098c0e22b2a27fdf30d4c89189a';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;