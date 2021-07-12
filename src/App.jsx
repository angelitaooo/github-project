import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import GistDetail from './components/GistDetail/GistDetail';


function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
const App = () => { 
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">GIST FINDER</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gist-detail/:id" component={GistDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
