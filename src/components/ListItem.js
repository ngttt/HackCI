import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Pagination } from 'antd';

const { Meta } = Card;

export default class ListItem extends Component {
  render() {
    return (
      <div id="container">
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          
        </Divider>
        <Row gutter={[24, 16]} justify="space-around" style={{ margin: 6 }}>
          <Col className="gutter-row" span={3}>
            <div>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="Europe Street beat" />
                <div style={{ marginTop: 6 }}>
                  <StarOutlined twoToneColor="#eb2f96" />
                  <span>number</span>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
        <Pagination style={{textAlign: "center"}} defaultCurrent={1} total={50} />
      </div>
    );
  }
}
