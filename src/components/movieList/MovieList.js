import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import genreData from "../../config/genre_data";
import Axios from "axios";
import API_KEY from "../../config/apiConfig";

function MovieList({ match }) {
    const [genreCode, setGenreCode] = useState(null);
    const [movies, setMovies] = useState([]);
    console.log(movies);
    useEffect(() => {
        for (let genre of genreData) {
            if (genre.name.toLowerCase() === match.params.genre.toLowerCase()) {
                setGenreCode(genre.id);
                break;
            }
        }
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

                let movies = [];
                for (let movie of results) {
                    if (movie.genre_ids.includes(genreCode)) {
                        movies.push(movie);
                    }
                }

                setMovies(movies);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovie();
    }, [genreCode]);

    return (
        <div>
            Hello
            <Movie />
        </div>
    );
}

export default MovieList;
