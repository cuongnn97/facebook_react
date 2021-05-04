import avatar from '../../assets/images/avatar.jpg'
import icon_arrow from "../../assets/images/icon_arrow.png";
const Left = () => {

  function handleClick() {
    window.location.href = "/homepage?user_id=" + localStorage.getItem("user_id");
  }

  return (
    <div className="content_left">
      <div
        onClick={(e) => handleClick()}
        className="left_item_username"
      >
        <div className="icon_setting">
          <img src={avatar} width="8%" alt="submit" />
        </div>
        <div className="content_setting">
          <p>{localStorage.getItem("username")}</p>
        </div>
      </div>

      <div className="left_item">
        <div className="icon_setting">
          <img
            src={"https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"}
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Bạn bè</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_setting">
          <img
            src={"https://www.facebook.com/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"}
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Trò chơi</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_setting">
          <img
            src={"https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"}
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Nhóm</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_setting">
          <img
            src={"https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"}
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Marketplace</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_setting">
          <img src={icon_arrow} width="8%" alt="submit" />
        </div>
        <div className="content_setting">
          <p>Xem thêm</p>
        </div>
      </div>

      <hr
        style={{
          marginLeft: "6px",
          marginBottom: "15px",
          marginTop: "15px",
          marginRight: "20px",
          color: "#e4e6eb",
        }}
      />

      <span
        style={{
          color: "#65676b",
          fontSize: "17px",
          marginLeft: "6px",
        }}
      >
        <b>Lối tắt của bạn</b>
      </span>

      <div className="left_item">
        <div className="icon_shortcut">
          <img
            src={
              "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-0/cp0/c41.0.50.50a/p50x50/156849540_10225460114589005_4026230267528171063_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ca434c&_nc_ohc=2O4sCoC0JtsAX-nIh7z&_nc_ht=scontent.fhan3-1.fna&tp=27&oh=4b96395e3498bff708aafeede06a1a07&oe=60B6EE0A"
            }
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Bắn cá ăn xu</p>
        </div>
      </div>

      <div className="left_item">
        <div className="icon_shortcut">
          <img
            src={
              "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-0/cp0/c23.0.50.50a/p50x50/106713300_1432113066992353_8505186567515993124_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ca434c&_nc_ohc=QR5j-JvGI5UAX-zSLOX&_nc_ht=scontent-hkg4-2.xx&tp=27&oh=81ec1a883e35ee1fc7ba86ebee9ce95b&oe=60B7CF7F"
            }
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Tiến lên miền nam</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_shortcut">
          <img
            src={
              "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-0/cp0/c4.0.50.50a/p50x50/145371535_1772495146244976_6559662564807282019_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ca434c&_nc_ohc=su87cKTyiykAX_xM5nq&_nc_ht=scontent-hkg4-2.xx&tp=27&oh=b54f6ced2201b9ff4a9147c20c1f9b33&oe=60B75CA2"
            }
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Phỏm - Tá lả</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_shortcut">
          <img
            src={
              "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.2081-6/c6.6.31.31a/p36x36/19284820_1368347046564416_6513969240469405696_n.png?_nc_cat=103&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=tOLDLIlN2OIAX_Htx9i&_nc_ht=scontent-hkg4-1.xx&tp=30&oh=6c0ef683141d1a85580023e971d5b2b8&oe=60B6B501"
            }
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Pokerist Texas Holdem Poker</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_shortcut">
          <img
            src={
              "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-0/cp0/c6.0.50.50a/p50x50/142368821_1921163731368264_7191663041765257350_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=ANaBS-RqOf0AX-iblWX&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=2da54200985242f6d9d54f1f0c8b9208&oe=60B630FB"
            }
            width="8%"
            alt="submit"
          />
        </div>
        <div className="content_setting">
          <p>Chelchesnal Madrid FC</p>
        </div>
      </div>
      <div className="left_item">
        <div className="icon_setting">
          <img src={icon_arrow} width="8%" alt="submit" />
        </div>
        <div className="content_setting">
          <p>Xem thêm</p>
        </div>
      </div>

      <div className="more_option">
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          Quyền riêng tư -{" "}
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          {" "}
          Điều khoản -
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          Quảng cáo -
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          {" "}
          Lựa chọn quảng cáo -{" "}
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          Cookie -
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          Xem thêm -{" "}
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
          href="/"
        >
          {" "}
          Facebook © 2021
        </a>
      </div>
    </div>
  );
};

export default Left;
