import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Link to="/">主页</Link><Link to="/user">个人中心</Link>
            {
              routes.map(function({path, component}, index, array) {
                  return <Route path={path} exact={path === '/' ? true : false} component={component} key={"route-"+index}></Route>
              })
            }
        </div>
      </Router>
    );
  }
}

export default App;
