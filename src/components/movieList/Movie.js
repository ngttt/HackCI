import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Pagination } from "antd";
import { withRouter } from "react-router-dom";
import "react-bootstrap";

const { Meta } = Card;

function Movie({ movies, match }) {
  console.log(movies);
  return (
    <div id="container">
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      >
        <h2 style={{ color: "white" }}> {match.params.genre} movie </h2>
      </Divider>
      <Row gutter={[24, 16]} justify="space-around" style={{ margin: 6 }}>
        {movies.map((movie) => {
          return (
            <Col className="gutter-row" span={6} key={movie.id}>
              <div>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`}
                    />
                  }
                >
                  <Meta title={movie.title} />
                  <div style={{ marginTop: 6 }}>
                    <StarOutlined twoToneColor="#eb2f96" />
                    <span> {movie.vote_average} </span>
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default withRouter(Movie);
