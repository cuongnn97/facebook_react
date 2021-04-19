import avatar from "../images/avatar.jpg";

const FriendsReq = () => {
  return (
    <div className="right_friend_req">
      <p>Lời mời kết bạn</p>
      <div className="friend_request">
        <div className="content_messenger">
          <div className="avatar_mess">
            <img
              style={{
                borderRadius: "50%",
                marginLeft: "5px",
                float: "left",
              }}
              src={avatar}
              width="15%"
              alt="submit"
            />
          </div>
          <div className="content_noti">
            <div className="content_plus">
              <span
                style={{
                  color: "#050505",
                  fontSize: "15px",
                  marginLeft: "10px",
                }}
              >
                <b>Thu</b> đã gửi cho bạn lời mời kết bạn
              </span>
              <p
                style={{
                  color: "#65676b",
                  fontSize: "13px",
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="button_request">
          <button
            style={{
              width: "108px",
              height: "36px",
              backgroundColor: "#1877F2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
            type="submit"
          >
            <b>Xác nhận</b>
          </button>
          <button
            style={{
              width: "108px",
              height: "36px",
              backgroundColor: "#E4E6EB",
              border: "none",
              borderRadius: "5px",
              marginLeft: "5px",
            }}
            type="submit"
          >
            <b>Xóa</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendsReq;
