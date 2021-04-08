import Friends from "./components/Friends"
import Introduction from "./components/Introduction"
import Pictures from "./components/Pictures"

const Left = () => {
  return (
    <div className="left_content">
      <Introduction />
      <Pictures />
      <Friends />
    </div>
  );
}

export default Left;
