import React, { Component } from "react";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram-sketched.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube (1).png";
import "../../index.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="social-links">
                    <a href="/">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="/">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="/">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="/">
                        <img src={Youtube} alt="" />
                    </a>
                </div>
                <div className="member-footer">
                    <ul className="member-footer-links">
                        <div className="wrapper">
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Âm thanh và phụ đề</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Mô tả âm thanh</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Trung tâm trợ giúp</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Thẻ quà tặng</span>
                                </a>
                            </li>
                        </div>

                        <div className="wrapper">
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Trung tâm đa phương tiện</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Quan hệ với nhà đầu tư</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Việc làm</span>
                                </a>
                            </li>
                        </div>
                        <div className="wrapper">
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Điều khoản sử dụng</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Quyền riêng tư</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Thông báo pháp lý</span>
                                </a>
                            </li>
                        </div>
                        <div className="wrapper">
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Tùy chọn cookie</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Thông tin doanh nghiệp</span>
                                </a>
                            </li>
                            <li className="member-footer-link-wrapper">
                                <a href="/">
                                    <span>Liên hệ với chúng tôi</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <span>© 1997-2020 Netflix, Inc.</span>
                </div>
            </div>
        );
    }
}
