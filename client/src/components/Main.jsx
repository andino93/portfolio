import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   info: props,
  //   // };
  // }
  render() {
    return (
      <div className="app">
        <div>Hello World {this.props.test}</div>
      </div>
    );
  }
}

const test = 'this is some prop stuff'
render(<App test={test} />, document.getElementById('root'));
