import icon_more from '../images/icon_more.jpg'
import icon_like from '../images/icon_like.jpg'
import icon_comment from '../images/icon_comment.png'
import icon_share from '../images/icon_share.jpg'
import React, {Component} from 'react';
import Comments from './Comments';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    var today = new Date(),
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    this.state = {
      create_time: date,
      content: '' ,
      user_id: '1',
      post_id: '',
      parent_id: '0',
      replyField: false
    }
  }

  handleChange = (event,id) => {
    this.setState({content: event.target.value});
    this.setState({post_id: id});
    this.setState({parent_id: '0'});
  }

  commentChild = (event,id,parent_id) => {
    this.setState({content: event.target.value});
    this.setState({post_id: id});
    this.setState({parent_id: parent_id});
  }

  modifyTask = (event) => {

    fetch('http://localhost:8000/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(function(response) {
      return response.json();
    });
    window.location.reload();
  }

  replyField = (event, id) => {
    this.setState({ replyField: !this.state.replyField });
  }

  render() {
    function countComments(data, id) {
      const getCount =  data.filter((comment) => comment.post_id == id).length;
      return getCount;
    }

    return (
      <div>
        {this.props.posts.map(post => (
          <div className="content_post">
            <div className="post_user">
              <div className="icon_post">
                <img
                  src={'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=FOpKfZS8x6kAX8OOoGH&_nc_ht=scontent.fhan3-1.fna&tp=27&oh=335c1a79cf78eacd809cb7365e10457e&oe=6088EE82'}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%'
                  }} alt="submit" />
              </div>
              <div className="user_post">
                <p style={{
                  color: '#050505',
                  fontSize: '15px'
                }}><b>{ post.user_id }</b></p>
                <p style={{
                  color: '#65676b',
                  fontSize: '13px',
                  marginTop: '-15px'
                }}>{ post.create_time }</p>
              </div>
              <div className="small_icon_post">
                <img style={{
                  borderRadius: '50%',
                  marginLeft: '5px',
                  backgroundColor: 'white',
                  marginTop: '10px'
                }}
                  src={icon_more} width="50%" alt="submit" />
              </div>
            </div><br/>
            <div className="post_content">
                <p style={{
                  color: '#050505',
                  fontSize: '15px',
                  textAlign: 'left',
                  marginBottom: '10px'
                }}>{ post.content }</p>
            </div>
            <div className="post_like">
              <div className="liked_user">
                <img style={{
                  marginTop: '10px',
                  marginRight: '10px'
                }} height="18px"
                  src={"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"}
                  width="18px" alt="submit" />
                Tung, Thu, Ha
              </div>
              <div className="comment_user">
                <p style={{
                  color: '#65676b',
                  fontSize: '15px',
                  marginTop: '10px'
                }}>{countComments(this.props.comments,post.id)} bình luận</p>
              </div>
            </div>
            <div className="post_action">
              <div className="live_video">
                <img style={{
                  float: 'left',
                  marginLeft: '20%',
                  marginTop: '5%'
                }} src={icon_like} width="15%" alt="submit" />
                <p style={{
                  color: '#65676b',
                  fontSize: '15px',
                  marginTop: '5%'
                }}><b>Thích</b></p>
              </div>
              <div className="picture_video">
                <img style={{
                  float: 'left',
                  marginLeft: '20%',
                  marginTop: '5%'
                }} src={icon_comment} width="15%" alt="submit" />
                <p style={{
                  color: '#65676b',
                  fontSize: '15px',
                  marginTop: '5%'
                }}><b>Bình luận</b></p>
              </div>
              <div className="emotion_activities">
                <img style={{
                  float: 'left',
                  marginLeft: '20%',
                  marginTop: '5%'
                }} src={icon_share} width="15%" alt="submit" />
                <p style={{
                  color: '#65676b',
                  fontSize: '15px',
                  marginTop: '5%'
                }}><b>Chia sẻ</b></p>
              </div>
            </div>
            <div className="comments_post">

              {this.props.comments.filter((comment_parent) => (comment_parent.post_id == post.id && comment_parent.parent_id == "0")).map(comment_parent => (
                <div>
                  <Comments comment={comment_parent}/>
                  <button onClick={(e)=>this.replyField(e,comment_parent.id)}>Tra loi</button>
                  {this.props.comments.filter((comment) => (parseInt(comment.parent_id) == comment_parent.id)).map(comment => (
                    <Comments comment={comment}/>
                  ))
                  }
                  {this.state.replyField &&
                    <div className={"reply_field_" + comment_parent.id} >
                      <img
                        src={'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=FOpKfZS8x6kAX8OOoGH&_nc_ht=scontent.fhan3-1.fna&tp=27&oh=335c1a79cf78eacd809cb7365e10457e&oe=6088EE82'}
                        style={{
                          width: '6%',
                          float: 'left',
                          marginLeft: '1%',
                          marginTop: '1%',
                          borderRadius: '50%',
                        }} alt="submit" />
                      <form onSubmit={this.modifyTask}>
                        <input onChange={(e)=>this.commentChild(e,post.id,comment_parent.id)} type="text" placeholder="Trả lời....."
                          style={{
                            float: 'left',
                            color: 'black',
                            fontSize: '15px',
                            marginTop: '1%',
                            marginLeft: '2%',
                            borderRadius: '15px',
                            backgroundColor: '#f0f2f5',
                            border: '1px solid #f0f2f5',
                            width: '80%'
                        }} />
                      </form>
                    </div>
                  }
                </div>
              ))
              }
              <img
                src={'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=FOpKfZS8x6kAX8OOoGH&_nc_ht=scontent.fhan3-1.fna&tp=27&oh=335c1a79cf78eacd809cb7365e10457e&oe=6088EE82'}
                style={{
                  width: '6%',
                  height: '32px',
                  marginLeft: '20px',
                  float: 'left',
                  borderRadius: '50%',
                }} alt="submit" />
              <form onSubmit={this.modifyTask}>
                <input onChange={(e)=>this.handleChange(e,post.id)} type="text" placeholder="Viết bình luận...." style={{
                  width: '83%',
                  height: '37px',
                  borderRadius: '15px',
                  backgroundColor: '#f0f2f5',
                  border: '1px solid #f0f2f5',
                  marginLeft: '-5%',
                }} />
              </form>
            </div><br/>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
