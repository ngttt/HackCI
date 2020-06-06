import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
// import { Pagination } from "antd";

const { Meta } = Card;

export default class ListItem extends Component {
  renderMovie = () => {
    if (this.props.movies.results) {
      const { results } = this.props.movies;
      console.log(results);
      return results.map((e) => {
        const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
        const title = e.title;
        return (
          <React.Fragment>
            <Col className="gutter-row" span={6}>
              <div>
                <Card hoverable cover={<img alt="example" src={urlImg} />}>
                  <Meta title={title} />
                  <div>
                    <StarOutlined twoToneColor="#eb2f96" />
                    <span>number</span>
                  </div>
                </Card>
              </div>
            </Col>
            ;
          </React.Fragment>
        );
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal", padding: 0 }}
        >
          <h2>{this.props.genre_id}</h2>
        </Divider>
        <Row gutter={[4, 6]} justify="space-around">
          {this.renderMovie()}
        </Row>
      </React.Fragment>
    );
  }
}
