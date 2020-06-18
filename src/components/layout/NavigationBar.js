import React, { useState } from "react";
import {
    NavDropdown,
    Navbar,
    Form,
    FormControl,
    Button,
    Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-netflix.png";

function NavigationBar({
    searchString,
    handleSearchChange,
    handleSearchSubmit,
}) {
    return (
        <Navbar className="navbar navbar-dark bg-dark" bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">
                        <img
                            src={logo}
                            style={{ width: 120, height: "100%" }}
                            alt=""
                        />
                    </Nav.Link>
                    <NavDropdown
                        title="Thể loại"
                        title-color="white"
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item>
                            <Link to="/movies/action">Hành động</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/movies/romance">Tình cảm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/movies/horror">Kinh dị</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline onSubmit={handleSearchSubmit}>
                    <FormControl
                        type="text"
                        placeholder="Tìm kiếm"
                        className="mr-sm-2"
                        value={searchString}
                        onChange={handleSearchChange}
                    />
                    <Button variant="danger">Tìm kiếm</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
