import cover_image from '../../assets/images/cover_image.png'
import icon_more from '../../assets/images/icon_more.jpg'
import icon_find from '../../assets/images/icon_find.jpg'
import icon_eye from '../../assets/images/icon_eye.png'
import icon_edit from '../../assets/images/icon_edit.png'
import { useState } from "react";


const Header = (props) => {

  const [username, setUsername] = useState(null);
  function getUserName() {
    fetch("http://localhost:8000/users/" + props.user_id)
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.username);
      });
    return username;
  }
  return (
    <div className="header_homepage">
      <div className="cover_image">
        <img src={cover_image} width="100%" alt="Logo" style={{
          borderRadius: '10px',
          zIndex: '1'
        }} />
        <img src={'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-1/p200x200/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=_VSNg5DMUVAAX_TlG2m&_nc_ht=scontent-hkg4-2.xx&tp=6&oh=8ca06f787f3354343b15c7289a83d98f&oe=60B6FD98'} width="20%" alt="Logo" style={{
          borderRadius: '50%',
          zIndex: '2',
          border: '4px solid white',
          marginTop: '-15%',
          marginLeft: '40%'
        }} />
      </div>
      <div className="user_name">
        <h1><b>{getUserName()}</b></h1>
        <a href="/"><b>Thêm tiểu sử</b></a>
      </div>
      <div className="menu_home">
        <div className="menu_home_left">
          <div className="left_button">
            <span><b>Bài viết</b></span>
          </div>
          <div className="left_button">
            <span><b>Giới thiệu</b></span>
          </div>
          <div className="left_button">
            <span><b>Bạn bè</b></span>
          </div>
          <div className="left_button">
            <span><b>Xem thêm</b></span>
          </div>
        </div>
        <div className="menu_home_right">
          <div className="right_action">
            <button className="button_right">
              <img src={icon_more} width="70%" alt="submit" />
            </button>
          </div>
          <div className="right_action">
            <button className="button_right">
              <img src={icon_find} width="70%" alt="submit" />
            </button>
          </div>
          <div className="right_action">
            <button className="button_right">
              <img src={icon_eye} width="70%" alt="submit" />
            </button>
          </div>
          <div className="right_action">
            <button className="button_right" style={{
              width: '192px'
            }}>
              <img src={icon_edit} width="10%" alt="submit" /> <b>Chỉnh sửa trang</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
