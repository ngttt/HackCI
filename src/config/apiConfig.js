const API_KEY = "0a6d26d952bdd58d29ef7b7cb82a59db";

export const endpoint = {
    movieId: (id, lang = "vi-VN") => {
        return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${lang}`;
    },
    cast: (id) => {
        return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
    },
    search: (query = "", lang = "vi-VN", page = 1, include_adults = false) => {
        return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&page=${page}&include_adult=${include_adults}&query=${query}`;
    },
    getImage: (path) => {
        return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${path}`;
    },
};

export default API_KEY;
