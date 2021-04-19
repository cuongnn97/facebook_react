import Navbar from './components/Navbar';
import Home from './screens/homepage/Home';
import Newfeed from "./screens/newfeed/Newfeed";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/newfeed">
              <Newfeed />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
