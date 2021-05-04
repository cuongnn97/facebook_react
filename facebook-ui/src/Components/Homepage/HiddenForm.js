import React from "react";

class HiddenForm extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    this.state = {
      content: "",
    };
    this.userId =  localStorage.getItem("user_id");
    this.username =  localStorage.getItem("username");
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  closeForm = () => {
    this.props.showComponent();
  };

  handleSubmit = () => {
    const newPost = {
      create_time: this.date,
      content: this.state.content,
      user_id: this.userId,
      username: this.username,
    }
    fetch("http://localhost:8000/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then(function (response) {
      window.location.reload();
    });
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
              alt="closeForm"
            ></img>
            <div className="_52lp">
              <div
                className="_52lq"
                style={{ textAlign: "center", fontSize: "20px" }}>
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
                onChange={this.handleChange}/>
            </div>
            <button
              style={{
                width: "87%",
                marginLeft: "3%",
              }}
              type="submit"
              className="positive ui button">
              Đăng
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HiddenForm;
