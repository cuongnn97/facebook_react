import avatar from '../../assets/images/avatar.jpg';
import facebooklogo from '../../assets/images/facebook_logo.png'
import icon_arrow from '../../assets/images/icon_arrow.png'
import icon_bell from '../../assets/images/icon_bell.png'
import icon_group from '../../assets/images/icon_group.png'
import icon_gaming from '../../assets/images/icon_gaming.png'
import icon_home from '../../assets/images/icon_home.png'
import icon_mess from '../../assets/images/icon_mess.png'
import icon_watch from '../../assets/images/icon_watch.png'
import icon_plus from '../../assets/images/icon_plus.svg'
import LogoutForm from '../LogoutForm/index'
import React from "react";
import SearchForm from './SearchForm'
import {withRouter} from 'react-router-dom'
import UserContext from '../UserContext/UserContext'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showSearchForm: false,
      users: []
    };
    this.usersFromDb = [];
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then(data => {
        this.setState({ users: data });
        this.usersFromDb = data;
      });
    document.addEventListener('click', this.onBlurSearch)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onBlurSearch)
  }

  handleClick() {
    this.setState({ showComponent: !this.state.showComponent });
  }

  backToNewfeed() {
    this.props.history.push("/");
  }

  onFocusSearch() {
    this.setState({ showSearchForm: true });
  }

  getUsers(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.usersFromDb;
      newList = currentList.filter((item) => {
        const userName = item.username.toLowerCase();
        const searchString = e.target.value.toLowerCase();
        return userName.includes(searchString);
      });
    } else {
      newList = this.usersFromDb;
    }
    this.setState({
      users: newList
    });
  }

  onBlurSearch = (event) => {
    const { target } = event
    if (!this.wrapperRef.current.contains(target)) {
      if (event.path[0].className !== 'search-bar')
        this.setState({ showSearchForm: false });
    }
  }

  render() {
    const showSearchForm = this.state.showSearchForm;
    return (
      <div>
        <nav className="navbar">
          <div ref={this.wrapperRef}>
            {showSearchForm && <SearchForm users={this.state.users} />}
          </div>
          <img
            onClick={(e) => this.backToNewfeed()}
            src={facebooklogo}
            width="40px"
            alt="Logo"
          />
          <input
            className="search-bar"
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            style={{
              marginLeft: "10px",
              width: "15%",
              height: "250%",
              borderRadius: "15px",
              backgroundColor: "#f0f2f5",
              border: "0px",
            }}
            onChange={(e) => { this.getUsers(e) }}
            onFocus={() => { this.onFocusSearch() }}
          />
          <div className="middle-links">
            <div className="middle-button">
              <img src={icon_home} width="30%" alt="Logo" />
            </div>
            <div className="middle-button">
              <img src={icon_watch} width="30%" alt="Logo" />
            </div>
            <div className="middle-button">
              <img src={icon_group} width="30%" alt="Logo" />
            </div>
            <div className="middle-button">
              <img src={icon_gaming} width="30%" alt="Logo" />
            </div>
          </div>
          <div className="links">
            <div className="right_button">
              <button className="icon_right" type="submit">
                <img
                  onClick={(e) => this.backToNewfeed()}
                  src={avatar}
                  width="100%"
                  alt="Logo"
                  style={{
                    backgroundColor: "white",
                  }}
                />
              </button>
              <UserContext.Consumer>
                {context =>
                <span
                  style={{
                    marginRight: "15px",
                    fontWeight: "bold",
                    height: "100%",
                  }}
                >
                    {context.userName}
                </span>}
              </UserContext.Consumer>
              <button className="icon_right" type="submit">
                <img src={icon_plus} width="80%" alt="Logo" />
              </button>
              <button className="icon_right" type="submit">
                <img src={icon_mess} width="80%" alt="Logo" />
              </button>
              <button className="icon_right" type="submit">
                <img src={icon_bell} width="80%" alt="Logo" />
              </button>
              <button
                onClick={this.handleClick}
                className="icon_right"
                type="submit"
              >
                <img src={icon_arrow} width="80%" alt="Logo" />
              </button>
            </div>
          </div>
        </nav>
        {this.state.showComponent && <LogoutForm />}
      </div>
    );
  }
}

export default withRouter(Navbar);
