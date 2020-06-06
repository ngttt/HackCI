import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";

const { Meta } = Card;

export default class MoviesRating extends Component {
    renderMoviesRating = () => {
        if (this.props.moviesRating.results) {
            const { results } = this.props.moviesRating;
            return results.map((e) => {
                const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
                const title = e.title;
                return (
                    <React.Fragment key={e.title}>
                        <Col
                            className="gutter-row"
                            span={this.props.spanNumber}
                        >
                            <div>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={urlImg} />}
                                >
                                    <Meta title={title} />
                                    <div>
                                        <StarOutlined twoToneColor="#eb2f96" />
                                        <span>number</span>
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
                    <p>{this.props.genre_id}</p>
                </Divider>
                <Row gutter={[4, 6]} justify="space-around">
                    {this.renderMoviesRating()}
                </Row>
            </React.Fragment>
        );
    }
}
