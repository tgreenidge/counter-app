import React from 'react';
import {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  
  handleVoteUpClick = e => {
    e.preventDefault();
    let counter =  this.state.counter + 1;
    this.setState({counter});
  }

  handleVoteDownClick = e => {
    e.preventDefault();
    let counter =  this.state.counter > 0 ? this.state.counter - 1 : 0;
    this.setState({counter});
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleVoteUpClick}>Vote Up</button>
        <button onClick={this.handleVoteDownClick}>Vote Down</button>
      </div>
    );
  }

};

class App extends Component {
  render() {
    return (
      <Counter/>
    );
  }
}
export default App;
