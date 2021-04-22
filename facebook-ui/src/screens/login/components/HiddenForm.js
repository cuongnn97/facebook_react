import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import ReactModal from "react-modal";

class HiddenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  closeForm = (event) => {
    this.render();
  };

  handleSubmit = (event) => {
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(function (response) {
      return response.json();
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="register_form">
        <form onSubmit={this.handleSubmit}>
          <img
            onClick={(e) => this.closeForm()}
            src={"https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"}
            style={{
              top: "12px",
              zIndex: "2",
              position: "absolute",
              right: "10px",
              height: "24px",
            }}
          ></img>
          <div className="_52lp">
            <div className="_52lq">Đăng ký</div>
            <div className="_52lr">Nhanh chóng và dễ dàng.</div>
            <div className="_8fgl">
              <div className="ui input">
                <input
                  placeholder="Tên tài khoản"
                  type="text"
                  value={this.state.value}
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <br /> <br />
              <div className="ui input">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={this.state.value}
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <br /> <br />
              <p className="_58mv">
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                <a href="#" id="terms-link" target="_blank" rel="nofollow">
                  Điều khoản
                </a>
                ,{" "}
                <a href="#" id="privacy-link" target="_blank" rel="nofollow">
                  Chính sách dữ liệu
                </a>{" "}
                và{" "}
                <a href="#" id="cookie-use-link" target="_blank" rel="nofollow">
                  Chính sách cookie
                </a>{" "}
                của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua
                SMS và hủy nhận bất kỳ lúc nào.
              </p>
              <div
                className="register_button"
                style={{
                  textAlign: "center",
                }}
              >
                <button type="submit" className="positive ui button">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default HiddenForm;
