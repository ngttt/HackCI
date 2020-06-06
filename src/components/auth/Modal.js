// state ={display: }

// div style={{display}}
// span class close
// signinsignup

import React, { Component } from "react";
import SignInSignUp from './SignInSignUp';


export default class Modal extends Component {
    render() {
        return (
            <div style={{display: this.props.display}}>
                <button className="myBtn" onClick={() => {this.props.handleDisplay("none")}}>Đăng Nhập</button>
                <div className="myModal" className="modal">
                    <div className="modal-content">
                    <span className="close">&times;</span>
                    <SignInSignUp />
                    </div>

                </div>
            </div>
        );
    }
}

