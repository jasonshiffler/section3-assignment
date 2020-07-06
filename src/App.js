import React, { Component } from 'react';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

import './App.css';

class App extends Component {
  state = {
    username: 'Steve-O',
  };

  //Update the state when we receive a click
  clickHandler = () => {
    this.setState({
      username: 'Steve-U',
    });
  };

  //Update the username to the value recieved from the event target (input field)
  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className='App'>
        <UserInput changed={this.nameChangedHandler}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default App;
