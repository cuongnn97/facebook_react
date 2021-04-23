import React, { Component } from "react";
import avatar from "./images/avatar.jpg";
import icon_feedback from "./images/icon_feedback.png";
import icon_settings from "./images/icon_settings.png";
import icon_right_arrow from "./images/icon_right_arrow.png";
import icon_help from "./images/icon_help.png";
import icon_dark from "./images/icon_dark.png";
import icon_logout from "./images/icon_logout.png";

class LogoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  handleClick() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    return (
      <div className="logout_form">
        <div className="content_messenger">
          <div className="avatar_mess_logout">
            <img
              style={{
                borderRadius: "50%",
                marginLeft: "10px",
              }}
              src={avatar}
              width="90%"
              alt="submit"
            />
          </div>
          <div className="content_mess">
            <div className="content_homepage_logout">
              <span
                style={{
                  color: "#050505",
                  fontSize: "17px",
                }}
              >
                <b>Cuong Nguyen Nhat</b>
              </span>
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                }}
              >
                Xem trang cá nhân của bạn
              </p>
            </div>
          </div>
        </div>
        <hr
          style={{
            marginBottom: "15px",
            marginTop: "15px",
          }}
        />
        <div
          className="logout_option"
          style={{
            width: "345px",
            height: "53px",
          }}
        >
          <div className="icon_plus">
            <img src={icon_feedback} width="80%" alt="submit" />
          </div>
          <div className="content_plus">
            <span
              style={{
                color: "#050505",
                fontSize: "15px",
              }}
            >
              Đóng góp ý kiến
            </span>
            <p
              style={{
                color: "#65676b",
                fontSize: "13px",
              }}
            >
              Góp phần cải thiện phiên bản Facebook mới.
            </p>
          </div>
        </div>
        <hr
          style={{
            marginBottom: "15px",
          }}
        />
        <div
          className="logout_option"
          style={{
            width: "100%",
            height: "53px",
          }}
        >
          <div className="icon_setting_logout">
            <img src={icon_settings} width="80%" alt="submit" />
          </div>
          <div className="content_setting_logout">
            <span
              style={{
                color: "#050505",
                fontSize: "15px",
              }}
            >
              Cài đặt và quyền riêng tư
            </span>
          </div>
          <div className="small_icon_setting">
            <img
              style={{
                borderRadius: "50%",
                marginLeft: "5px",
                backgroundColor: "white",
              }}
              src={icon_right_arrow}
              width="100%"
              alt="submit"
            />
          </div>
        </div>
        <div
          className="logout_option"
          style={{
            width: "100%",
            height: "53px",
          }}
        >
          <div className="icon_setting_logout">
            <img src={icon_help} width="80%" alt="submit" />
          </div>
          <div className="content_setting_logout">
            <span
              style={{
                color: "#050505",
                fontSize: "15px",
              }}
            >
              Trợ giúp & hỗ trợ
            </span>
          </div>
          <div className="small_icon_setting">
            <img
              style={{
                borderRadius: "50%",
                marginLeft: "5px",
                backgroundColor: "white",
              }}
              src={icon_right_arrow}
              width="100%"
              alt="submit"
            />
          </div>
        </div>
        <div
          className="logout_option"
          style={{
            width: "100%",
            height: "53px",
          }}
        >
          <div className="icon_setting_logout">
            <img src={icon_dark} width="80%" alt="submit" />
          </div>
          <div className="content_setting_logout">
            <span
              style={{
                color: "#050505",
                fontSize: "15px",
              }}
            >
              Màn hình và trợ năng
            </span>
          </div>
          <div className="small_icon_setting">
            <img
              style={{
                borderRadius: "50%",
                marginLeft: "5px",
                backgroundColor: "white",
              }}
              src={icon_right_arrow}
              width="100%"
              alt="submit"
            />
          </div>
        </div>
        <div
          onClick={(e) => this.handleClick()}
          className="logout_option"
          style={{
            width: "100%",
            height: "53px",
          }}
        >
          <div className="icon_setting_logout">
            <img src={icon_logout} width="80%" alt="submit" />
          </div>
          <div className="content_setting_logout">
            <span
              style={{
                color: "#050505",
                fontSize: "15px",
              }}
            >
              Đăng xuất
            </span>
          </div>
          <div className="small_icon_setting">
            <img
              style={{
                borderRadius: "50%",
                marginLeft: "5px",
                backgroundColor: "white",
              }}
              src={icon_right_arrow}
              width="100%"
              alt="submit"
            />
          </div>
        </div>
        <div className="more_option_logout">
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Quyền riêng tư
          </a>{" "}
          -
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Điều khoản
          </a>{" "}
          -
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Quảng cáo
          </a>{" "}
          -
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Lựa chọn quảng cáo
          </a>{" "}
          -
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Cookie
          </a>{" "}
          -
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Xem thêm
          </a>{" "}
          -
          <a
            style={{
              color: "#65676B",
              fontSize: "13px",
            }}
            href="#"
          >
            Facebook © 2021
          </a>
        </div>
      </div>
    );
  }
}

export default LogoutForm;
