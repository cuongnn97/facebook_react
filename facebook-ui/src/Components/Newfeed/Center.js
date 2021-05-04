import NewPost from "./NewPost"
import Posts from "../Posts/index"
import Story from "./Story"
import GetData from "../GetData/GetData";

const Center = () => {

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
    <div className="content_center">
      <Story />
      <NewPost />
      {
        (posts,
        comments,
        reactions && (
          <Posts
            posts={sortByDate(posts)}
            comments={sortByParentId(comments)}
            reactions={reactions}
          />
        ))
      }
    </div>
  );
}

export default Center;
