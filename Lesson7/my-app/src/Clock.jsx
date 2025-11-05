import React from 'react';
import './index.css';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log('Component Did mount is called');
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount is called');

    clearInterval(this.timerId);
  }
  render() {
    console.log('render is called');

    return (
      <div className="App">
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
