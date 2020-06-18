import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import genreData from "../../config/genre_data";
import Axios from "axios";
import API_KEY from "../../config/apiConfig";
import capitalize from "../../helpers/capitalize";

function MovieList({ match }) {
    const [genreCode, setGenreCode] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const genre = capitalize(match.params.genre);
        setGenreCode(genreData[genre]);
    }, [match.params.genre]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await Axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=vi-VN`
                );

                const {
                    data: { results },
                } = res;

                let moviesData = [];
                for (let movie of results) {
                    if (movie.genre_ids.includes(genreCode)) {
                        moviesData.push(movie);
                    }
                }

                setMovies(moviesData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovie();
    }, [genreCode]);

    return (
        <div>
            <Movie movies={movies} />
        </div>
    );
}

export default MovieList;
