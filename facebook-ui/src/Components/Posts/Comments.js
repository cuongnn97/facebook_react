import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  backToHomepage() {
    window.location.href = "/homepage?user_id=" + this.props.comment.user_id;
  }

  render() {

    let nameClass = this.props.comment.parent_id !== "0"
        ?"comment_child"
        : "comment_line";

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
            "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/176948940_1247789222307089_9205108023586285197_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=ZibN5QVQfL4AX81UqXW&_nc_ht=scontent.fhan3-2.fna&tp=27&oh=8230c06ae3d5bc31f8d69f7309040053&oe=60B52A00"
          }
          width="5%"
          alt="submit"
        />
        <span className="comment_username"
          onClick={() => this.backToHomepage()}
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
