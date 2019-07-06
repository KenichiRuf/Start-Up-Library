import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import Navigation from './Navigation';
import SubmissionForm from './SubmissionForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/submit/" component={SubmissionForm} />
      </div>
    </Router>
  );
}

export default App;
