import React, { Component } from "react";
import ListItem from "./ListItem";
import { Layout } from "antd";
import { Row, Col, Divider, Table } from "antd";

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
      <div>
        <div className="listItemCenter">
          <div className="itemNewMovie">
            <ListItem
              genre_id="Phim mới nhất"
              spanNumber={6}
              movies={this.state.listMovies}
            />
          </div>
          <div className="itemRatMovie">
            <ListItem
              spanNumber={12}
              genre_id="Phim co rating nhieu nhat"
              movies={this.state.moviesRating}
            />
          </div>
        </div>
      </div>
    );
  }
}
