import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getReactions(post_id){
    var reactions = [];
    for (var i = 0, l = this.props.reactions.length; i < l; i++) {
      var obj = this.props.reactions[i];
      if ((obj.user_id === localStorage.getItem('user_id') && obj.post_id === post_id)) {
        reactions.push(obj);
      }
    }
    return reactions;
  }
  filterCommentByPostId(post_id){
    var comments = [];
    comments = this.props.comments.filter((comment) => comment.post_id === post_id)
    return comments;
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          (post, this.filterCommentByPostId(post.id) && <div key={post.id}><Post reactions={this.getReactions(post.id)} post={post} comments={this.filterCommentByPostId(post.id)}/></div>)
         ) ) }
      </div>
    );
  }
}

export default Posts;
