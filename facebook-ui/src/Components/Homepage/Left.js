import Friends from "./Friends"
import Introduction from "./Introduction"
import Pictures from "./Pictures"

const Left = (props) => {
  return (
    <div className="left_content">
      <Introduction />
      <Pictures />
      <Friends />
    </div>
  );
}

export default Left;
