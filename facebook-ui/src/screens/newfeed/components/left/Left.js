import avatar from './images/avatar.jpg'
import icon_arrow from "./images/icon_arrow.png";
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
              "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.2081-6/c6.6.31.31a/p36x36/72186750_1377171662436470_268893303808720896_n.png?_nc_cat=1&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=EgkLjBSq9l4AX9ZhCqL&_nc_ht=scontent.fhan3-3.fna&_nc_tp=30&oh=6c225c815862d2d12f623f19b2bd82d8&oe=6088E428"
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
              "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.2081-6/c6.6.31.31a/p36x36/51609293_615720298867953_886030755069689856_n.png?_nc_cat=1&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=rDQi_88B_6gAX-cBdxP&_nc_ht=scontent.fhan3-3.fna&_nc_tp=30&oh=3a9eeadeaa2ec9718ad964c250e6d29c&oe=60858C69"
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
              "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.2081-6/c6.6.31.31a/p36x36/55980279_2642186042519987_3356159987092029440_n.png?_nc_cat=1&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=wE9DCGpsCcoAX_dXLJg&_nc_ht=scontent.fhan3-3.fna&_nc_tp=30&oh=298d5acef2e5fb6cd58d94b980aa67ae&oe=60868C82"
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
              "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.2081-6/c6.6.31.31a/p36x36/19284820_1368347046564416_6513969240469405696_n.png?_nc_cat=1&ccb=1-3&_nc_sid=eaa83b&_nc_ohc=OuZFDlge8M4AX9utMrD&_nc_ht=scontent.fhan3-3.fna&_nc_tp=30&oh=6f55ac9645838bb0d7b168fb83b0b6c3&oe=60873F01"
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
              "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-0/cp0/c6.0.50.50a/p50x50/142368821_1921163731368264_7191663041765257350_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=2EiKcyHZQPoAX8rl4sV&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=8c18092fee75a212de0031a592ac3c10&oe=6086314B"
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
        >
          Quyền riêng tư -{" "}
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
        >
          {" "}
          Điều khoản -
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
        >
          Quảng cáo -
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
        >
          {" "}
          Lựa chọn quảng cáo -{" "}
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
        >
          Cookie -
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
        >
          Xem thêm -{" "}
        </a>
        <a
          style={{
            color: "#65676B",
            fontSize: "13px",
          }}
        >
          {" "}
          Facebook © 2021
        </a>
      </div>
    </div>
  );
};

export default Left;
