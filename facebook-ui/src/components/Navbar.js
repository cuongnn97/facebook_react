import icon_home from './images/icon_home.png'
import icon_watch from './images/icon_watch.png'
import icon_group from './images/icon_group.png'
import icon_gaming from './images/icon_gaming.png'
import icon_plus from './images/icon_plus.svg'
import icon_mess from './images/icon_mess.png'
import icon_bell from './images/icon_bell.png'
import icon_arrow from './images/icon_arrow.png'
import facebooklogo from './images/facebook_logo.png'
import avatar from './images/avatar.jpg'
import LogoutForm from './LogoutForm'
import React, { Component } from "react";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  handleClick() {
    this.setState({ showComponent: !this.state.showComponent });
  }

  backToHomepage() {
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <img
            onClick={(e) => this.backToHomepage()}
            src={facebooklogo}
            width="40px"
            alt="Logo"
          />
          <input
            className="search-bar"
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            style={{
              marginLeft: "10px",
              width: "15%",
              height: "250%",
              borderRadius: "15px",
              backgroundColor: "#f0f2f5",
              border: "0px",
            }}
          />
          <div className="middle-links">
            <div className="middle-button">
              <img src={icon_home} width="30%" alt="Logo" />
            </div>
            <div className="middle-button">
              <img src={icon_watch} width="30%" alt="Logo" />
            </div>
            <div className="middle-button">
              <img src={icon_group} width="30%" alt="Logo" />
            </div>
            <div className="middle-button">
              <img src={icon_gaming} width="30%" alt="Logo" />
            </div>
          </div>
          <div className="links">
            <div className="right_button">
              <button className="icon_right" type="submit">
                <img
                  src={avatar}
                  width="100%"
                  alt="Logo"
                  style={{
                    backgroundColor: "white",
                  }}
                />
              </button>
              <span
                style={{
                  marginRight: "15px",
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                {localStorage.getItem("username")}
              </span>
              <button className="icon_right" type="submit">
                <img src={icon_plus} width="80%" alt="Logo" />
              </button>
              <button className="icon_right" type="submit">
                <img src={icon_mess} width="80%" alt="Logo" />
              </button>
              <button className="icon_right" type="submit">
                <img src={icon_bell} width="80%" alt="Logo" />
              </button>
              <button
                onClick={(e) => this.handleClick()}
                className="icon_right"
                type="submit"
              >
                <img src={icon_arrow} width="80%" alt="Logo" />
              </button>
            </div>
          </div>
        </nav>
        {this.state.showComponent && <LogoutForm />}
      </div>
    );
  }
}

export default Navbar;
