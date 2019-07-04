import React from 'react';
import '../css/App.css';
import Animation from '../Animations/gameLoadScreen';

const fps = 200; //ms

class AppManager extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress, false);
  }

  keyPress(event) {
    switch (event.keyCode) {
      case 37:
          break;
      case 38:
          break;
      case 39: 
          break;
      case 40: 
          break;
      case 13: 
          break;
      default:
    } 
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default AppManager;
