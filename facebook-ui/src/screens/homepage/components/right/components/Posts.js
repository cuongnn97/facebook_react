import icon_more from '../images/icon_more.jpg'
import icon_like from '../images/icon_like.jpg'
import icon_comment from '../images/icon_comment.png'
import icon_share from '../images/icon_share.jpg'
import React, {Component} from 'react';
import Comments from './Comments';
import Post from "./Post";

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    function getReactions(data, post_id) {
      var reactions = [];
      for (var i = 0, l = data.length; i < l; i++) {
        var obj = data[i];
        if (obj.user_id == localStorage.getItem('user_id') && obj.post_id == post_id) {
          reactions.push(obj);
        }
      }
      return reactions;
    }

    return (
      <div>
        {this.props.posts.map(
          (post) => (
            post,
            this.props.comments && (
              <Post
                reactions={getReactions(this.props.reactions, post.id)}
                post={post}
                comments={this.props.comments}
              />
            )
          )
        )}
      </div>
    );
  }
}

export default Posts;
