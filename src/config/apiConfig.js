const API_KEY = "0a6d26d952bdd58d29ef7b7cb82a59db";

export const endpoint = {
    movieId: (id) => {
        return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    },
    backdrop: (path) => {
        return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${path}`;
    },
};

export default API_KEY;
