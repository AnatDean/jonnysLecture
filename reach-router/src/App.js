import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    textContent: 'I am special'
  };
  render() {
    return (
      <div className="App">
        <Border extraStyle="blue-background">
          <Paragraph textContent={this.state.textContent} />
        </Border>
        <Border prop1="iamprop1">
          <p>So am I</p>
        </Border>
      </div>
    );
  }
}

function Border({ children, extraStyle }) {
  return <div className={`special-border ${extraStyle}`}>{children}</div>;
}

function Paragraph({ textContent }) {
  return <p>{textContent}</p>;
}

export default App;
