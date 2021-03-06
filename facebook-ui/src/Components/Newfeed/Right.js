import FriendsReq from "./FriendsReq"
import ListFriends from "./ListFriends"
import RightAds from "./RightAds"

const Right = () => {
  return (
    <div className="content_right">
      <span
        style={{
          color: "#65676b",
          fontSize: "17px",
          marginLeft: "6px",
        }}><b>Được tài trợ</b></span>
      <br/><br/>
      <RightAds />

      <FriendsReq />
      <ListFriends />
    </div>
  );
}

export default Right;
