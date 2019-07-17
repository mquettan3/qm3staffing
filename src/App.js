import React, { Component } from 'react';
import Main from './components/Main/Main.js';
import Candidates from './components/Candidates/Candidates.js';
import Employers from './components/Employers/Employers.js';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/candidates" component={Candidates}/>
            <Route exact path="/employers" component={Employers}/>
            <Redirect to={{pathname: "/"}} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
