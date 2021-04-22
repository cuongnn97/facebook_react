import React, { Component } from "react";
import ReactDOM from "react-dom";

class HiddenForm extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    this.state = {
      create_time: date,
      content: "",
      user_id: localStorage.getItem("user_id"),
      username: localStorage.getItem("username"),
    };
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  closeForm = (event) => {
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector(".hidden_form");
    child.style.visibility = "hidden";
    this.removeItem();
  };

  removeItem = () => {
    this.props.showComponent();
  };

  handleSubmit = (event) => {
    fetch("http://localhost:8000/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(function (response) {
      return response.json();
    });
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className="hidden_form">
          <form onSubmit={this.handleSubmit}>
            <img
              onClick={(e) => this.closeForm()}
              src={
                "https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
              }
              style={{
                top: "12px",
                zIndex: "2",
                position: "absolute",
                right: "10px",
                height: "24px",
              }}
            ></img>
            <div className="_52lp">
              <div
                className="_52lq"
                style={{ textAlign: "center", fontSize: "20px" }}
              >
                Tạo bài viết
              </div>
              <br />
            </div>
            <div className="_8fgl">
              <textarea
                style={{
                  width: "100%",
                }}
                rows="4"
                placeholder="Cuong ơi bạn đang nghĩ gì thế "
                value={this.state.value}
                name="content"
                onChange={this.handleChange}
              />
            </div>
            <button
              style={{
                width: "87%",
                marginLeft: "3%",
              }}
              type="submit"
              className="positive ui button"
            >
              Đăng
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HiddenForm;
