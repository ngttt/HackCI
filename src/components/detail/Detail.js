import React, { useState, useEffect } from "react";
import Axios from "axios";
import { endpoint } from "../../config/apiConfig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const DetailPage = ({ match }) => {
    const [movieInfo, setMovieInfo] = useState({});
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieRes = await Axios.get(
                    endpoint.movieId(match.params.id)
                );
                const { data: movieData } = movieRes;

                if (movieData.id) {
                    const castRes = await Axios.get(
                        endpoint.cast(movieData.id)
                    );

                    const { data: castData } = castRes;

                    setCast(castData.cast);
                }

                setMovieInfo(movieData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [match.params.id]);

    if (!movieInfo.backdrop_path) return <div></div>;
    return (
        <div className="movieinfo-page">
            <div className="movieinfo-content-container">
                <div className="movieinfo-thumb">
                    <img
                        src={endpoint.getImage(movieInfo.backdrop_path)}
                        alt=""
                    />
                </div>

                <div className="movieinfo-content color-white">
                    <h1 className="color-white"> {movieInfo.title} </h1>
                    <div className="color-white">
                        Ngày ra mắt: {movieInfo.release_date}
                    </div>
                    <div className="color-white">
                        Thể loại:
                        {movieInfo.genres.map((genre) => {
                            return <span key={genre.id}> {genre.name}, </span>;
                        })}
                    </div>
                    <p className="color-white">{movieInfo.overview}</p>
                    <div className="imdb-rating">
                        <div className="voting-meter">
                            <meter
                                min="0"
                                max="10"
                                optimum="10"
                                low="4"
                                high="7"
                                value={movieInfo.vote_average}
                            ></meter>
                        </div>
                        <div className="rmdb-rating color-white">
                            {movieInfo.vote_average}
                        </div>
                    </div>
                </div>
            </div>

            <div className="movieinfo-actor-container color-white">
                <h2 className="color-white">Diễn viên</h2>
                <div className="movie-info-actor">
                    <Slider {...sliderSettings}>
                        {cast.map((actor) => {
                            console.log(actor);
                            return (
                                <div
                                    className="actor-container"
                                    key={actor.cast_id}
                                >
                                    <div className="actor-image-thumbnail">
                                        <img
                                            src={endpoint.getImage(
                                                actor.profile_path
                                            )}
                                            alt=""
                                        />
                                    </div>
                                    <div className="actor-info">
                                        <div className="actor-name">
                                            {actor.name} -{" "}
                                            <i className="color-white">
                                                {actor.character}
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
