import React, { useEffect, useState } from "react";
import List from "./List";
import AuthModal from "../auth/AuthModal";
import queryString from "query-string";
import Axios from "axios";
import { endpoint } from "../../config/apiConfig";
import MoviesRating from "./MoviesRating";

function Home({ display, handleDisplay, setUser, location }) {
    const [movieList, setMovieList] = useState({});

    useEffect(() => {
        const query = queryString.parse(location.search);

        const fetchData = async (query) => {
            try {
                const res = await Axios.get(endpoint.search(query));

                const { data } = res;

                if (data.results) {
                    setMovieList(data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        if (query.query) {
            fetchData(query.query);
        }
    }, [location.search]);

    return (
        <div>
            <AuthModal
                display={display}
                handleDisplay={handleDisplay}
                setUser={setUser}
            />
            {location.search ? (
                <MoviesRating
                    genre_id="Kết quả tìm kiếm"
                    spanNumber={6}
                    moviesRating={movieList}
                />
            ) : (
                <List genre="Phim mới nhất" />
            )}
        </div>
    );
}

export default Home;
