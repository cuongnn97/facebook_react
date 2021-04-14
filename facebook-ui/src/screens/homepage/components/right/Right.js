import NewPost from "./components/NewPost"
import GetData from "./components/GetData"
import Posts from "./components/Posts";

const Right = () => {
  const { data: posts } = GetData('http://localhost:8000/posts');
  const { data: comments } = GetData('http://localhost:8000/comments');

  function sortByParentId(sortList) {
    if(sortList != null){
      var sort = sortList.sort((a,b) => (parseInt(a.parent_id) > parseInt(b.parent_id)) ? 1 : -1);
      console.log(sort);
      return sort;
    } else {
      return null;
    }
  }

  function sortByDate(sortList) {
    if(sortList != null){
      return sortList.sort((a,b) => (a.create_time > b.create_time) ? 1 : -1);
    } else {
      return null;
    }
  }

  return (
    <div className="right_content">
      <NewPost />
      { posts, comments && <Posts posts={sortByDate(posts.filter((post) => post.user_id === 'Cuong Nguyen Nhat'))} comments={sortByParentId(comments)}/> }
    </div>
  );
}

export default Right;
