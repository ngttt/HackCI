import React, { useState, useEffect } from "react";
import Actor from "../../assets/poster.jpg";
import "../../index.css";
import Axios from "axios";
import { endpoint } from "../../config/apiConfig";

const DetailPage = ({ match }) => {
    const [movieInfo, setMovieInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios.get(endpoint.movieId(match.params.id));
                const { data } = res;

                console.log(data);

                setMovieInfo(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [match.params.id]);

    if (!movieInfo.backdrop_path) return <div></div>;
    return (
        <div className="rmdb-movieinfo">
            <div className="rmdb-movieinfo-content">
                <div className="rmdb-movieinfo-thumb">
                    <img src={endpoint.backdrop(movieInfo.backdrop_path)} />
                </div>
                <div className="rmdb-movieinfo-text color-white">
                    <h1 className="color-white"> {movieInfo.title} </h1>
                    <h6 className="color-white">{movieInfo.release_date} </h6>
                    <p className="color-white">{movieInfo.overview}</p>
                    <div className="rmdb-rating color-white">
                        {movieInfo.vote_average}
                    </div>
                </div>
            </div>

            <div className="rmdb-movieinfo-actor color-white">
                <br></br> <h2>Diễn viên</h2> <br></br>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="image-thumbnail">
                            <img src={Actor} />
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="image-thumbnail">
                            <img src={Actor} />
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="image-thumbnail">
                            <img src={Actor} />
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="image-thumbnail">
                            <img src={Actor} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
