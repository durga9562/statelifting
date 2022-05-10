import Counter from './components/Counter';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>State Lifting</h1>
          </div>
          <div className="card-body">
            <Counter
              counter={this.state.counter}
              increment={this.increment}
              decrement={this.decrement}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;


