import icon_like from "../../assets/images/icon_like.jpg";
import icon_comment from "../../assets/images/icon_comment.png";
import icon_share from "../../assets/images/icon_share.jpg";
import React from "react";
import Comments from "./Comments";
import { withRouter } from 'react-router-dom'


class Post extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    this.localUserId = this.props.userInfo.userId;
    this.localUserName = this.props.userInfo.userName;
    const url = new URL(window.location.href);
    this.userId = url.searchParams.get("user_id");
    this.state = {
      content: "",
      parent_id: "0",
      showReplyField: false,
      reactions: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      parent_id: "0"
    });
  };

  commentChild = (event, parent_id) => {
    this.setState({
      content: event.target.value,
      parent_id: parent_id
    });

  };

  modifyTask = () => {
    const newComments = {
      create_time: this.date,
      content: this.state.content,
      user_id: this.localUserId,
      username: this.localUserName,
      post_id: this.props.post.id,
      parent_id: this.state.parent_id
    }
    fetch("http://localhost:8000/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComments),
    }).then(function (response) {
      return response.json();
    });
  };

  showReplyField = () => {
    this.setState({ showReplyField: !this.state.showReplyField });
  };

  onDelete = () => {
    fetch("http://localhost:8000/posts/" + this.props.post.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(function (response) {
      window.location.reload();
    });
  };

  reactionAction = (event, reaction, post_id) => {
    if (reaction.length !== 0) {
      fetch("http://localhost:8000/reactions/" + reaction[0].id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then(function (response) {
        window.location.reload();
      });
    } else {
      fetch("http://localhost:8000/reactions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: this.localUserId,
          post_id: post_id,
        }),
      }).then(function (response) {
        window.location.reload();
      });
    }
  };

  countComments() {
    const getCount = this.props.comments.length;
    return getCount;
  }

  backToHomepage() {
    this.props.history.push("/homepage?user_id=" + this.props.post.user_id);
    window.location.reload();
  }

  render() {

    return (
      <div>
        <div className="content_post" style={{ width: "100%" }}>
          <div className="post_user">
            <div className="icon_post">
              <img
                src={
                  "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=_VSNg5DMUVAAX_TlG2m&_nc_ht=scontent-hkg4-2.xx&tp=27&oh=922c0ccac22b6a8162ea389a34896e17&oe=60B86482"
                }
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
                alt="submit"
              />
            </div>
            <div
              onClick={() => this.backToHomepage()}
              className="user_post"
            >
              <p
                style={{
                  color: "#050505",
                  fontSize: "15px",
                }}
              >
                <b>{this.props.post.username}</b>
              </p>
              <p
                style={{
                  color: "#65676b",
                  fontSize: "13px",
                  marginTop: "-15px",
                }}
              >
                {this.props.post.create_time}
              </p>
            </div>
            <div
              className={
                this.props.post.user_id !== this.localUserId
                  ? "small_icon_post_hidden"
                  : "small_icon_post"
              }
            >
              <img
                onClick={() => {
                  if (
                    window.confirm("Are you sure want to delete this post?")
                  )
                    this.onDelete();
                }}
                style={{
                  borderRadius: "50%",
                  marginLeft: "5px",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
                src={
                  "https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                }
                width="50%"
                alt="submit"
              />

            </div>
          </div>
          <br />
          <div className="post_content">
            <p
              style={{
                color: "#050505",
                fontSize: "15px",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              {this.props.post.content}
            </p>
          </div>
          <div className="post_like">
            <div className="liked_user">
              <img
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                height="18px"
                src={
                  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                }
                width="18px"
                alt="submit"
              />
              Tung, Thu, Ha
            </div>
            <div className="comment_user">
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
              >
                {this.countComments()} b??nh
                lu???n
              </p>
            </div>
          </div>
          <div className="post_action">
            <div
              className={
                this.props.reactions.length !== 0
                  ? "live_video_liked"
                  : "live_video"
              }
              onClick={(e) =>
                this.reactionAction(e, this.props.reactions, this.props.post.id)
              }
            >
              <img
                style={{
                  float: "left",
                  marginLeft: "20%",
                  marginTop: "5%",
                }}
                src={icon_like}
                width="15%"
                alt="submit"
              />
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "5%",
                }}
              >
                <b>Th??ch</b>
              </p>
            </div>
            <div className="picture_video">
              <img
                style={{
                  float: "left",
                  marginLeft: "20%",
                  marginTop: "5%",
                }}
                src={icon_comment}
                width="15%"
                alt="submit"
              />
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "5%",
                }}
              >
                <b>B??nh lu???n</b>
              </p>
            </div>
            <div className="emotion_activities">
              <img
                style={{
                  float: "left",
                  marginLeft: "20%",
                  marginTop: "5%",
                }}
                src={icon_share}
                width="15%"
                alt="submit"
              />
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "5%",
                }}
              >
                <b>Chia s???</b>
              </p>
            </div>
          </div>
          <br />
          <div className="comments_post">
            {this.props.comments
              .filter(
                (comment_parent) =>
                  comment_parent.post_id === this.props.post.id &&
                  comment_parent.parent_id === "0"
              )
              .map((comment_parent) => (
                <div key={comment_parent.id}>
                  <Comments comment={comment_parent} />
                  <button
                    onClick={() => this.showReplyField()}
                  >
                    Tra loi
                  </button>
                  {this.props.comments
                    .filter(
                      (comment) =>
                        parseInt(comment.parent_id) === comment_parent.id
                    )
                    .map((comment) => (
                      <div key={comment.id}>
                        <Comments comment={comment} />
                      </div>
                    ))}
                  {this.state.showReplyField && (
                    <div className={"reply_field_" + comment_parent.id}>
                      <img
                        src={
                          "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/176948940_1247789222307089_9205108023586285197_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=ZibN5QVQfL4AX81UqXW&_nc_ht=scontent.fhan3-2.fna&tp=27&oh=8230c06ae3d5bc31f8d69f7309040053&oe=60B52A00"
                        }
                        style={{
                          width: "6%",
                          float: "left",
                          marginLeft: "1%",
                          marginTop: "1%",
                          borderRadius: "50%",
                        }}
                        alt="submit"
                      />
                      <form onSubmit={this.modifyTask}>
                        <input
                          onChange={(e) =>
                            this.commentChild(
                              e,
                              comment_parent.id
                            )
                          }
                          type="text"
                          placeholder="Tr??? l???i....."
                          style={{
                            float: "left",
                            color: "black",
                            fontSize: "15px",
                            marginTop: "1%",
                            marginLeft: "2%",
                            borderRadius: "15px",
                            backgroundColor: "#f0f2f5",
                            border: "1px solid #f0f2f5",
                            width: "80%",
                          }}
                        />
                      </form>
                    </div>
                  )}
                </div>
              ))}
            <img
              src={
                "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=_VSNg5DMUVAAX_TlG2m&_nc_ht=scontent-hkg4-2.xx&tp=27&oh=922c0ccac22b6a8162ea389a34896e17&oe=60B86482"
              }
              style={{
                width: "6%",
                height: "32px",
                marginLeft: "20px",
                float: "left",
                borderRadius: "50%",
              }}
              alt="submit"
            />
            <form onSubmit={this.modifyTask}>
              <input type="hidden" name="user_id" value={this.userId}/>
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                placeholder="Vi???t b??nh lu???n...."
                style={{
                  width: "83%",
                  height: "37px",
                  borderRadius: "15px",
                  backgroundColor: "#f0f2f5",
                  border: "1px solid #f0f2f5",
                  marginLeft: "-5%",
                }}
              />
            </form>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(Post);
