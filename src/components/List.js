import React, { Component } from "react";
import ListItem from "./ListItem";

const themovie_api = "0a6d26d952bdd58d29ef7b7cb82a59db";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: {},
      moviesRating: {},
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
        moviesRating: responeJson,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container">
        <ListItem genre_id={this.props.genre} movies={this.state.listMovies} />
      </div>
    );
  }
}
