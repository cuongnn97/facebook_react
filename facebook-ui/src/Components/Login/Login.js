import facebook from "../../assets/images/facebook.svg";
import avatar from "../../assets/images/avatar.jpg";
import new_user from "../../assets/images/new_user.png";

import React from "react";
import HiddenForm from "./HiddenForm";

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

  showComponent = () => {
    this.setState({ showHideForm: false });
  };

  hideComponent() {
    this.setState({ showHideForm: !this.state.showHideForm });
  }

  handleClick = () => {
    fetch("http://localhost:8000/users/")
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0, l = data.length; i < l; i++) {
          var obj = data[i];
          if (
            obj.username === this.state.username &&
            obj.password === this.state.password
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
        <div className="container" style={{opacity: this.state.showHideForm ? '0.5' : '1'}}>
          <div className="left-half">
            <div className="content-left">
              <img
                src={facebook}
                style={{
                  width: "200px",
                  paddingTop: "100px",
                  marginLeft: "-80px",
                }}
                alt="facebookAvatar"
              />
              <p className="p1">Đăng nhập gần đây</p>
              <p className="p2">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
              <div className="ui-link-card">
                <div className="card">
                  <div className="image">
                    <img src={avatar} width="160rem" height="160rem" alt="facebookAvatar" />
                    <div className="content">
                      <div className="header">Cuong</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src={new_user} alt="facebookAvatar" width="160rem" height="160rem" />
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
                  className="login_button"
                  onClick={(e) => this.handleClick()}
                >
                  Đăng nhập
                </button>
                <a
                  href="/"
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
