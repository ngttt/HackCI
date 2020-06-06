import React, { Component } from "react";
import {
    NavDropdown,
    Navbar,
    Form,
    FormControl,
    Button,
    Nav,
} from "react-bootstrap";

import logo from "../../assets/logo-netflix.png";

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar
                className="navbar navbar-dark bg-dark"
                bg="light"
                expand="lg"
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">
                            <img
                                src={logo}
                                style={{ width: 120, height: "100%" }}
                            />
                        </Nav.Link>
                        <NavDropdown
                            title="Thể loại"
                            title-color="white"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="/movies/actions">
                                Hành động
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/movies/romance">
                                Tình cảm
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/movies/horror">
                                Kinh dị
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Tìm kiếm"
                            className="mr-sm-2"
                        />
                        <Button variant="danger">Tìm kiếm</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
