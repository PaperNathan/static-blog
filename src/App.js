import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Nav from './components/Nav';
import Articles from './components/Articles'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Articles />
      </div>
    );
  }

}

export default App;
