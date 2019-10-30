import React from 'react';
// import './App.css';

// #region import components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// #endregion import components

export default class App extends React.Component{
  // #region .ctor
  constructor(){
    super();
    this.state = {
      type: "",
      id: "",
      pass: "",
      token: "",
    }
    this.changeType = this.changeType.bind(this);
    this.changeId = this.changeId.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.generateToken = this.generateToken.bind(this);
    this.copyText = this.copyText.bind(this);
  }
  // #endregion .ctor
  // #region methods
  changeType(val){
    this.setState({
      type: val
    });
  }
  changeId(e){
    this.setState({
      id: e.target.value
    });
  }
  changePassword(e){
    this.setState({
      pass: e.target.value
    });
  }
  generateToken() {
    const token = this.state.type === "auth" ? `${this.state.id}:${this.state.pass}` : `BASIC ${this.state.id}:${this.state.pass}`;
    this.setState({
      token: btoa(token)
    });
  }
  copyText(){
    console.log(this.state.token);
  }
  // #endregion methods
  render(){
      return (
        <div className="App">
          <Header />
          <Main 
            state={this.state}
            changeType={this.changeType}
            changeId={this.changeId} 
            changePassword={this.changePassword} 
            generateToken={this.generateToken} 
            copyText={this.copyText} 
          />
          <Footer />
        </div>
    );
  }
}
