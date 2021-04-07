// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";
import cover_image from './images/cover_image.png'
import icon_more from './images/icon_more.jpg'
import icon_find from './images/icon_find.jpg'
import icon_eye from './images/icon_eye.png'
import icon_edit from './images/icon_edit.png'
import { Link } from 'react-router-dom';


const Header = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/posts')

  return (
    <div className="header_homepage">
      <div className="cover_image">
        <img src={cover_image} width="100%" alt="Logo" style={{
          borderRadius: '10px',
          zIndex: '1'
        }}/>
        <img src={'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/p200x200/120420815_3065716766873179_4307096642786528104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=FOpKfZS8x6kAX8TYhln&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=33de68a5c667eab64722e821ec219090&oe=60878798'} width="20%" alt="Logo" style={{
          borderRadius: '50%',
          zIndex: '2',
          border: '4px solid white',
          marginTop: '-15%',
          marginLeft: '40%'
        }}/>
      </div>
      <div className="user_name">
        <h1><b>Cuong Nguyen Nhat</b></h1>
        <Link href="/a"><b>Thêm tiểu sử</b></Link>
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
