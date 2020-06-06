import React, { Component } from "react";
import ListItem from "./ListItem";
import { Layout } from "antd";
import { Row, Col, Divider, Table } from "antd";
import WatchedMovies from "./WatchedMovies";
import MoviesRating from "./MoviesRating";
import UpcomingMovie from "./UpcomingMovie";
import API_KEY from "../config/apiConfig";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovies: {},
            movies_rating: {},
            upcoming_movies: {},
        };
    }
    componentDidMount() {
        this.getMovies();
        this.getMoviesRating();
        this.getUpcomming();
    }

    getMovies = async () => {
        try {
            const url = ` https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=vi-VN`;
            const respone = await fetch(url);
            const responeJson = await respone.json();
            this.setState({
                listMovies: responeJson,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // getActionMovie = async () =>{
    //   try {
    //       const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${themovie_api}&language=vi-VN`;

    //   }
    // }

    getMoviesRating = async () => {
        try {
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=vi-VN`;
            const respone = await fetch(url);
            const responeJson = await respone.json();
            this.setState({
                movies_rating: responeJson,
            });
        } catch (error) {
            console.log(error);
        }
    };

    getUpcomming = async () => {
        try {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=vi-VN`;
            const respone = await fetch(url);
            const responeJson = await respone.json();
            this.setState({
                upcoming_movies: responeJson,
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div>
                <WatchedMovies
                    genre_id={this.props.genre}
                    watchedMovies={this.state.listMovies}
                />
                <div className="listItemCenter">
                    <div className="itemNewMovie">
                        <MoviesRating
                            genre_id="Phim có rating cao nhất"
                            spanNumber={6}
                            moviesRating={this.state.movies_rating}
                        />
                    </div>
                    <div className="itemRatMovie">
                        <UpcomingMovie
                            spanNumber={12}
                            genre_id="Phim sắp khởi chiếu"
                            upcomingMovies={this.state.upcoming_movies}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
