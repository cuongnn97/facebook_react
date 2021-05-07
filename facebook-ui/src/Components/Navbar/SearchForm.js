const SearchForm = (props) => {

  function homepageLink(id) {
    window.location.href = "/homepage?user_id=" + id;
  }

  return (
    <div>
      <div className="search_form">
        {props.users !== null ? props.users.map((user) =>(
          <div onClick={(e) => homepageLink(user.id)} className="searchedUser" key={user.id}>
            <div className="searchAvatar">
              <img src={"https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-0/cp0/c41.0.50.50a/p50x50/102829146_3717386538277860_4042170838126952448_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=70495d&_nc_ohc=x-RtcH6xyyYAX--LqTQ&_nc_ht=scontent-hkg4-2.xx&tp=27&oh=83b0315cd97f18c870ce2fe16040e73e&oe=60BAA0F6"} alt="submit" />
            </div>
            <div className="searchName">
              <span>{user.username}</span>
            </div>
          </div>
        )) : <div></div>}
      </div>
    </div>
  );
}

export default SearchForm;
