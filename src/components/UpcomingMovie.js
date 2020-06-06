import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";

const { Meta } = Card;

export default class UpcomingMovie extends Component {
  renderUpcoming = () => {
    if (this.props.upcomingMovies.results) {
      const { results } = this.props.upcomingMovies;
      return results.map((e) => {
        const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
        const title = e.title;
        return (
          <React.Fragment>
            <Col className="gutter-row" span={this.props.spanNumber}>
              <div>
                <Card hoverable cover={<img alt="example" src={urlImg} />}>
                  <div className="content">
                    <Meta title={title} />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></div>
                  </div>
                </Card>
              </div>
            </Col>
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
          <h4 style={{ color: "#fff" }}>{this.props.genre_id}</h4>
        </Divider>
        <Row gutter={[14, 12]}>{this.renderUpcoming()}</Row>
      </React.Fragment>
    );
  }
}
