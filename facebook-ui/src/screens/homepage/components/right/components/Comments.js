import React, { Component } from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let nameClass = "";
    if (this.props.comment.parent_id != "0" ? (nameClass = "comment_child") : (nameClass = "comment_line"));

    return (
      <div className={nameClass}>
        <img
          style={{
            float: "left",
            marginLeft: "1%",
            marginTop: "1%",
            borderRadius: "50%",
          }}
          src={
            "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=FOpKfZS8x6kAX8OOoGH&_nc_ht=scontent.fhan3-1.fna&tp=27&oh=335c1a79cf78eacd809cb7365e10457e&oe=6088EE82"
          }
          width="5%"
          alt="submit"
        />
        <p
          style={{
            float: "left",
            color: "black",
            fontSize: "15px",
            marginTop: "1%",
            marginLeft: "2%",
            width: "80%",
          }}
        >
          {this.props.comment.content}
        </p>
      </div>
    );
  }
}

export default Comments;
