import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import Navigation from './Navigation';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Navigation} />
        </div>
      </Router>
    );
  }
}

export default App;
