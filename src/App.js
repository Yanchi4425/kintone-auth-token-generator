import React from 'react';
// import './App.css';

// #region import components
import Header from './components/Header';
import {Auth} from './components/Auth';
import Footer from './components/Footer';
// #endregion import components

export default class App extends React.Component{
  render(){
      return (
        <div className="App">
          <Header />
          <Auth />
          <Footer />
        </div>
    );
  }
}
