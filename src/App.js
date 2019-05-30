import React, { Component } from 'react';
import logo from './logo.png';
import './normalize.css';
import './App.css';

import MerchantList from './components/merchant/MerchantList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <MerchantList max={7} />
      </div>
    );
  }
}

export default App;
