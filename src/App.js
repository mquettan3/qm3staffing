import React, { Component } from 'react';
import Main from './components/Main/Main.js';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Redirect to={{pathname: "/"}} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
