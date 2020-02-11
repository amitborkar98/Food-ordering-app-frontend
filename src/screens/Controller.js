import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../common/header/Header';


class Controller extends Component {

  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Header {...props} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;