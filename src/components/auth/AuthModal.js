import React, { Component } from "react";
import SignInSignUp from "./SignInSignUp";

export default class Modal extends Component {
    render() {
        return (
            <div style={{ display: this.props.display }} className="modal">
                <div className="modal-content">
                    <div className="close-button-container">
                        <button
                            onClick={() => {
                                this.props.handleDisplay("none");
                            }}
                            className="close"
                        >
                            &times;
                        </button>
                    </div>
                    <SignInSignUp
                        setUser={this.props.setUser}
                        handleDisplay={this.props.handleDisplay}
                    />
                </div>
            </div>
        );
    }
}
