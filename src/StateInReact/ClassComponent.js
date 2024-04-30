import React from "react";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <>
        <h1>I Love to Speak english🤗💖❤️❤️ </h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment.bind(this)}> Increment </button>

        <button onClick={this.decrement.bind(this)}> Decrement </button>
      </>
    );
  }
}

export default ClassComponent;
