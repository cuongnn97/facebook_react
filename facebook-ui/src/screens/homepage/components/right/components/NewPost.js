import red_camera from '../images/red_camera.png'
import icon_picture from '../images/icon_picture.png'
import icon_emotion from '../images/icon_emotion.jpg'
import React, { Component } from "react";
import HiddenForm from './HiddenForm';
class NewPost extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideForm: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    this.setState({ showHideForm: !this.state.showHideForm });
  }

  render() {
    const { showHideForm} = this.state;

    return (
      <div>
        {showHideForm && <HiddenForm />}
        <hr/>
        <div className="new_post">
          <img
            src={'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=FOpKfZS8x6kAX8OOoGH&_nc_ht=scontent.fhan3-1.fna&tp=27&oh=335c1a79cf78eacd809cb7365e10457e&oe=6088EE82'}
            style={{
              width: '40px',
              height: '40px',
              marginLeft: '20px',
              float: 'left'
            }} alt="submit" />
          <input onClick={() => this.hideComponent()} className="search-bar" type="text" placeholder="Bạn đang nghĩ gì thế?" style={{
            marginLeft: '10px',
            width: '85%',
            height: '35%',
            borderRadius: '15px',
            backgroundColor: '#f0f2f5',
            border: '1px solid #f0f2f5',
            marginTop: '10px'
          }} />
          <div className="more_post">
            <div className="live_video">
              <img style={{
                marginLeft: '8px'
              }} src={red_camera} width="15%" alt="submit" />
                  <p style={{
                    color: '#65676b',
                    fontSize: '15px',
                    marginTop: '-22px',
                    marginLeft: '35px'
                  }}><b>Video trực tiếp</b></p>
            </div>
            <div className="picture_video">
              <img style={{
                marginLeft: '8px'
              }} src={icon_picture} width="15%" alt="submit" />
                  <p style={{
                    color: '#65676b',
                    fontSize: '15px',
                    marginTop: '-22px',
                    marginLeft: '35px'
                  }}><b>Ảnh/Video</b></p>
            </div>
            <div className="emotion_activities">
              <img style={{
                marginLeft: '8px'
              }} src={icon_emotion} width="15%" alt="submit" />
                  <p style={{
                    color: '#65676b',
                    fontSize: '15px',
                    marginTop: '-22px',
                    marginLeft: '35px'
                  }}><b>Cảm xúc/ Activity</b></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
