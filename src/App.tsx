import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/header/header';
import Routes from './routes';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
