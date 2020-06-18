import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { Card } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

class UpcomingMovie extends Component {
    changeRoute = (id) => {
        this.props.history.push(`/detail/${id}`);
    };

    renderUpcoming = () => {
        if (this.props.upcomingMovies.results) {
            const { results } = this.props.upcomingMovies;
            return results.map((e) => {
                const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
                const title = e.title;
                return (
                    <React.Fragment key={e.id}>
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

export default withRouter(UpcomingMovie);
