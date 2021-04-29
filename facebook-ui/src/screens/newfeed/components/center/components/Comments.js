import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    function backToHomepage(id) {
      window.location.href = "/homepage?user_id=" + id;
    }
    let nameClass = "";
    if (
      this.props.comment.parent_id !== "0"
        ? (nameClass = "comment_child")
        : (nameClass = "comment_line")
    );

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
        <span className="comment_username"
          onClick={(e) => backToHomepage(this.props.comment.user_id)}
        >{this.props.comment.username}</span>
        <div
          style={{
            float: "left",
            color: "black",
            fontSize: "15px",
            marginTop: "2.5%",
            marginLeft: "-7%",
            width: "80%",
          }}
        >
          {this.props.comment.content}
        </div>
      </div>
    );
  }
}

export default Comments;
