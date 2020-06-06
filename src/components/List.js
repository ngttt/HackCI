import React, { Component } from "react";
import ListItem from "./ListItem";
import { Layout } from "antd";
import { Row, Col, Divider, Table } from "antd";
import WatchedMovies from "./WatchedMovies";
import MoviesRating from "./MoviesRating";
const themovie_api = "0a6d26d952bdd58d29ef7b7cb82a59db";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: {},
      movies_rating: {},
    };
  }
  componentDidMount() {
    this.getMovies();
    this.getMoviesRating();
  }

  getMovies = async () => {
    try {
      const url = ` https://api.themoviedb.org/3/trending/movie/week?api_key=${themovie_api}&language=vi-VN`;
      const respone = await fetch(url);
      const responeJson = await respone.json();
      this.setState({
        listMovies: responeJson,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getMoviesRating = async () => {
    try {
      const url = `  https://api.themoviedb.org/3/movie/top_rated?api_key=${themovie_api}&language=vi-VN`;
      const respone = await fetch(url);
      const responeJson = await respone.json();
      this.setState({
        movies_rating: responeJson,
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
            <MoviesRating
              spanNumber={12}
              genre_id="Phim sắp khởi chiếu"
              moviesRating={this.state.movies_rating}
            />
          </div>
        </div>
      </div>
    );
  }
}
