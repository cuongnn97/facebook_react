import Navbar from './Components/Navbar/index';
import Home from './Components/Homepage/index';
import Login from './Components/Login/index';
import Newfeed from "./Components/Newfeed/index";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  function getUser() {
    var user_id = localStorage.getItem("user_id");
    if (user_id != null){
      return true;
    }else {
      return false;
    };
  }
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              {getUser() && (
                <div>
                  <Navbar />
                  <Newfeed />
                </div>
              )}
              {!getUser() && <Login />}
            </Route>
            <Route path="/homepage">
              {getUser() && (
                <div>
                  <Navbar />
                  <Home />
                </div>
              )}
              {!getUser() && <Login />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
