import Navbar from './components/Navbar';
import Home from './screens/homepage/Home';
import Login from './screens/login/Login';
import Newfeed from "./screens/newfeed/Newfeed";
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
