import NewPost from "./components/NewPost"
import GetData from "./components/GetData"
import Posts from "./components/Posts";
import Test from "../left/components/test";

const Right = () => {
  const { data: posts } = GetData('http://localhost:8000/posts');
  const { data: comments } = GetData('http://localhost:8000/comments');

  function sortByDate(sortList) {
    return sortList.sort((a,b) => (a.create_time > b.create_time) ? 1 : -1);
  }

  return (
    <div className="right_content">
      <NewPost />
      { posts, comments && <Posts posts={sortByDate(posts.filter((post) => post.user_id === 'Cuong Nguyen Nhat'))} comments={sortByDate(comments)}/> }
      <Test />
    </div>
  );
}

export default Right;
