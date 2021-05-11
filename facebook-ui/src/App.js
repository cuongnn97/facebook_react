import Navbar from './Components/Navbar/index';
import Home from './Components/Homepage/index';
import Login from './Components/Login/index';
import Newfeed from "./Components/Newfeed/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import UserProvider from './Components/UserContext/UserProvider'

function App() {

  function getExistUser() {
    var user_id = localStorage.getItem("user_id");
    if (user_id != null) {
      return true;
    } else {
      return false;
    };
  }
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                {getExistUser() && (
                  <div>
                    <Navbar />
                    <Newfeed />
                  </div>
                )}
                {!getExistUser() && <Login />}
              </Route>
              <Route path="/homepage">
                {getExistUser() && (
                  <div>
                    <Navbar />
                    <Home />
                  </div>
                )}
                {!getExistUser() && <Login />}
              </Route>
            </Switch>
          </div>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
