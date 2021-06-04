import React, { Component } from 'react';
import './style.css';
import FancyButton from './FancyButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  buttonClick(index) {
    console.log('current:', this.myRef.current);
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p
          onClick={() => {
            this.buttonClick();
          }}
        >
          Start editing to see some magic happen :)
        </p>
        <FancyButton ref={this.myRef}> Hello </FancyButton>
      </div>
    );
  }
}
