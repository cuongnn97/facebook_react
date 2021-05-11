import React from "react";
import Post from "./Post";
import UserContext from '../UserContext/UserContext'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getReactions(post_id){
    var reactions = [];
    for (var i = 0, l = this.props.reactions.length; i < l; i++) {
      if (this.props.reactions !== null) {
        var obj = this.props.reactions[i];
        if ((obj.user_id === this.props.userInfo.userId && obj.post_id === post_id)) {
          reactions.push(obj);
        }
      }
    }
    return reactions;
  }
  filterCommentByPostId(post_id){
    var comments = [];
    if (this.props.comments !== null){
      comments = this.props.comments.filter((comment) => comment.post_id === post_id)
    }
    return comments;
  }

  render() {
    return (
      <div>
        {this.props.posts !== null ?this.props.posts.map((post) => (
          (post, this.filterCommentByPostId(post.id) &&
          <div key={post.id}>
            <UserContext.Consumer>
              {context => (<Post userInfo={context} reactions={this.getReactions(post.id)} post={post} comments={this.filterCommentByPostId(post.id)} />)}
            </UserContext.Consumer>
          </div>
          )
         ) ) : null}
      </div>
    );
  }
}

export default Posts;
