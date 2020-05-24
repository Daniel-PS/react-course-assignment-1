import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    usernames: [
      { username: 'John'},
      { username: 'Sarah'}
    ]
  }

  userNameChangerHandler = (event) => {
    this.setState({
      usernames: [
        { username: 'John'},
        { username: event.target.value}
    ]})
  }

  render() {
    const style = {
      padding: '8px',
      textAlign: 'center',
      fontSize: '20pt'
    }

    return (
      <div style={style}>
        <UserOutput
          username={this.state.usernames[0].username}
        />
        <UserOutput
          username={this.state.usernames[1].username}
          changed={this.userNameChangerHandler}
        />
        <UserInput
          username={this.state.usernames[1].username}
          changed={this.userNameChangerHandler}
        />
      </div>
    )
  }
}

export default App;
