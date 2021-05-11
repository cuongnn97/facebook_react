import React, { Component } from 'react';

import UserContext from './UserContext'

class UserProvider extends Component {
  render() {
    return (
      <UserContext.Provider value={{
        userId: localStorage.getItem("user_id"),
        userName: localStorage.getItem("username")
      }
      }>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;
