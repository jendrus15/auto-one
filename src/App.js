import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import merchData from './data';
// import Merchant from './components/merchant/Merchant';
import MerchantList from './components/merchant/MerchList';
// import { connect } from 'tls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <MerchantList data={merchData} />
      </div>
    );
  }
}

export default App;
