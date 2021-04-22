import facebook from "./images/facebook.svg";
import avatar from "./images/avatar.jpg";
import new_user from "./images/new_user.png";

import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import HiddenForm from "./components/HiddenForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showHideForm: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  showComponent = (event) => {
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector(".container");
    child.style.opacity = "1";
    this.setState({ showHideForm: !this.state.showHideForm });
  };

  hideComponent() {
    this.setState({ showHideForm: !this.state.showHideForm });
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector(".container");
    if (this.state.showHideForm) {
      child.style.opacity = "1";
    } else {
      child.style.opacity = "0.5";
    }
  }

  handleClick = (event) => {
    fetch("http://localhost:8000/users/")
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0, l = data.length; i < l; i++) {
          var obj = data[i];
          if (
            obj.username == this.state.username &&
            obj.password == this.state.password
          ) {
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("password", this.state.password);
            localStorage.setItem("user_id", obj.id);
            window.location.reload();
            break;
          }
        }
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { showHideForm } = this.state;
    return (
      <div>
        <div className="container">
          <div className="left-half">
            <div className="content-left">
              <img
                src={facebook}
                style={{
                  width: "200px",
                  paddingTop: "100px",
                  marginLeft: "-80px",
                }}
              />
              <p className="p1">Đăng nhập gần đây</p>
              <p className="p2">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
              <div className="ui-link-card">
                <div className="card">
                  <div className="image">
                    <img src={avatar} width="160rem" height="160rem" />
                    <div className="content">
                      <div className="header">Cuong</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src={new_user} width="160rem" height="160rem" />
                    <div className="content">
                      <div className="header2">Thêm tài khoản</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-half">
            <div className="content-right">
              <div className="login_form">
                <div className="ui-input">
                  <input
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="username"
                    type="text"
                    placeholder="Email hoặc số điện thoại"
                  />

                  <input
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                  />
                </div>
                <button
                  class="login_button"
                  onClick={(e) => this.handleClick()}
                >
                  Đăng nhập
                </button>
                <a
                  href="#"
                  style={{
                    color: "#1877f2",
                    fontSize: "14px",
                  }}
                >
                  Quên mật khẩu?
                </a>
                <div className="_8icz"></div>
                <button
                  onClick={() => this.hideComponent()}
                  className="positive ui button"
                >
                  Tạo tài khoản mới
                </button>
              </div>
            </div>
          </div>
        </div>
        {showHideForm && <HiddenForm showComponent={this.showComponent} />}
      </div>
    );
  }
}

export default Login;
