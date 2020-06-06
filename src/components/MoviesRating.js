import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

class MoviesRating extends Component {
    changeRoute = (id) => {
        this.props.history.push(`/detail/${id}`);
    };

    renderMoviesRating = () => {
        if (this.props.moviesRating.results) {
            const { results } = this.props.moviesRating;
            return results.map((e) => {
                const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
                const title = e.title;
                return (
                    <React.Fragment key={title}>
                        <Col
                            className="gutter-row"
                            span={this.props.spanNumber}
                        >
                            <div>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={urlImg} />}
                                    onClick={() => {
                                        this.changeRoute(e.id);
                                    }}
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
            <div className="center">
                <Divider
                    orientation="left"
                    style={{ color: "#333", fontWeight: "normal", padding: 0 }}
                >
                    <h2 style={{ color: "#fff" }}>{this.props.genre_id}</h2>
                </Divider>
                <Row gutter={[14, 12]}>{this.renderMoviesRating()}</Row>
            </div>
        );
    }
}

export default withRouter(MoviesRating);
