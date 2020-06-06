import React, { Component } from "react";
import "./index.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NavigationBar from "./components/navbar/NavigationBar";
import Footer from "./components/footer/Footer";

class App extends Component {
    constructor() {
        super();

        this.state = {
            user: {},
            display: "none",
        };
    }

    setUser = (userInfo) => {
        this.setState({
            user: userInfo,
        });
    };

    handleDisplay = (display) => {
        console.log("hello");
        this.setState({
            display,
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavigationBar />
                    <Header
                        user={this.state.user}
                        handleDisplay={this.handleDisplay}
                    />
                    <Route
                        exact
                        path={["/", "/home"]}
                        render={(routeProps) => (
                            <Home
                                {...routeProps}
                                display={this.state.display}
                                handleDisplay={this.handleDisplay}
                                setUser={this.setUser}
                            />
                        )}
                    />
                    {/* <Route path="/movies/:genre" component={} /> */}
                    {/* <Route path="/detail/:id" component={DetailPage} /> */}
                    <Footer />
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
