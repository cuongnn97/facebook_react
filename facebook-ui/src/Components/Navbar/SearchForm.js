const SearchForm = (props) => {

    return (
      <div>
        <div className="search_form">
          {props.users !== null ? props.users.map((user) =>(
            <div key={user.id}>
              <a href={"/homepage?user_id=" + user.id} >
                {user.username}
              </a>
            </div>
          )) : <div></div>}
        </div>
      </div>
    );
}

export default SearchForm;
