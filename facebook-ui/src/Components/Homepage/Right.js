import NewPost from "./NewPost";
import GetData from "../GetData/index";
import Posts from "../Posts/Posts";

const Right = (props) => {
  const { data: posts } = GetData("http://localhost:8000/posts");
  const { data: comments } = GetData("http://localhost:8000/comments");
  const { data: reactions } = GetData("http://localhost:8000/reactions");

  function sortByParentId(sortList) {
    if (sortList != null) {
      var sorted = sortList.sort((a, b) =>
        parseInt(a.parent_id) > parseInt(b.parent_id) ? 1 : -1
      );
      return sorted;
    } else {
      return null;
    }
  }

  function sortByDate(sortList) {
    if (sortList != null) {
      return sortList.sort((a, b) => (a.create_time > b.create_time ? 1 : -1));
    } else {
      return null;
    }
  }

  return (
    <div className="right_content">
      <NewPost showComponent={props.showComponent} />
      {
        (posts,
        comments,
        reactions && (
          <Posts
            posts={sortByDate(
              posts.filter((post) => post.user_id === props.user_id)
            )}
            comments={sortByParentId(comments)}
            reactions={reactions}
          />
        ))
      }
    </div>
  );
};

export default Right;
