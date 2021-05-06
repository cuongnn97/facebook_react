import red_camera from '../../assets/images/red_camera.png'
import icon_picture from '../../assets/images/icon_picture.png'
import icon_emotion from '../../assets/images/icon_emotion.jpg'
import React, { Component } from "react";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideForm: false,
    };
  }

  showComponent() {
    this.props.showComponent();
  }

  render() {
    return (
      <div>
        <div className="new_post">
          <img
            src={
              "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=_VSNg5DMUVAAX_TlG2m&_nc_ht=scontent-hkg4-2.xx&tp=27&oh=922c0ccac22b6a8162ea389a34896e17&oe=60B86482"
            }
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "20px",
              float: "left",
            }}
            alt="submit"
          />
          <input
            onClick={() => this.showComponent()}
            className="search-bar"
            type="text"
            placeholder="Bạn đang nghĩ gì thế?"
            style={{
              marginLeft: "10px",
              width: "85%",
              height: "35%",
              borderRadius: "15px",
              backgroundColor: "#f0f2f5",
              border: "1px solid #f0f2f5",
              marginTop: "10px",
            }}
          />
          <div className="more_post">
            <div className="live_video">
              <img
                style={{
                  marginLeft: "8px",
                }}
                src={red_camera}
                width="15%"
                alt="submit"
              />
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "-22px",
                  marginLeft: "35px",
                }}
              >
                <b>Video trực tiếp</b>
              </p>
            </div>
            <div className="picture_video">
              <img
                style={{
                  marginLeft: "8px",
                }}
                src={icon_picture}
                width="15%"
                alt="submit"
              />
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "-22px",
                  marginLeft: "35px",
                }}
              >
                <b>Ảnh/Video</b>
              </p>
            </div>
            <div className="emotion_activities">
              <img
                style={{
                  marginLeft: "8px",
                }}
                src={icon_emotion}
                width="15%"
                alt="submit"
              />
              <p
                style={{
                  color: "#65676b",
                  fontSize: "15px",
                  marginTop: "-22px",
                  marginLeft: "35px",
                }}
              >
                <b>Cảm xúc/ Activity</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
