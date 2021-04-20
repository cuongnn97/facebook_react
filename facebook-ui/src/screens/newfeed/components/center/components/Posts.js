import React, { Component } from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    function getReactions(data,post_id){
      var reactions = [];
      for (var i = 0, l = data.length; i < l; i++) {
        var obj = data[i];
        if ((obj.user_id == localStorage.getItem('user_id') && obj.post_id == post_id)) {
          reactions.push(obj);
        }
      }
      return reactions;
    }
    return (
      <div>
        {this.props.posts.map((post) => (
          (post,this.props.comments && <Post reactions={getReactions(this.props.reactions,post.id)} post={post} comments={this.props.comments}/>)
        ))}
      </div>
    );
  }
}

export default Posts;
