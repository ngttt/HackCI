import React from "react";
import "./index.css";
import Header from "./components/layout/Header";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import NavigationBar from "./components/layout/NavigationBar";
import DetailPage from "./components/detail/Detail";
import MovieList from "./components/movie_list/MovieList";
import { useState } from "react";

function App({ history }) {
    const [user, setUser] = useState({});
    const [display, setDisplay] = useState("none");
    const [searchString, setSearchString] = useState("");

    const handleUserChange = (userInfo) => {
        setUser(userInfo);
    };

    const handleDisplay = (display) => {
        setDisplay(display);
    };

    const handleSearchChange = (e) => {
        setSearchString(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("searchString", searchString);
        if (searchString === "") {
            history.push("/");
        }

        history.push({
            pathname: "/",
            search: `?query=${searchString}`,
        });
    };

    return (
        <div className="App">
            <NavigationBar
                searchString={searchString}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
            />
            <Header user={user} handleDisplay={handleDisplay} />
            <Route
                exact
                path={["/", "/home"]}
                render={(routeProps) => (
                    <Home
                        {...routeProps}
                        display={display}
                        handleDisplay={handleDisplay}
                        setUser={handleUserChange}
                    />
                )}
            />
            <Route path="/movies/:genre" component={MovieList} />
            <Route path="/detail/:id" component={DetailPage} />
        </div>
    );
}

export default withRouter(App);
