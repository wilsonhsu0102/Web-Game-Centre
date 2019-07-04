import React from 'react';
import '../css/App.css';
import GameSelect from '../Animations/GameSelect';

class AppManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "GameSelect",
      select: "GameSelect"
    }
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
        this.setState({select: "Left"});
        break;
      case 38:
        this.setState({select: "Up"});
        break;
      case 39:
        this.setState({select: "Right"});
        break;
      case 40:
        this.setState({select: "Down"});
        break;
      case 13:
        if(this.state.screen !== this.state.select) {
          this.setState({screen: this.state.select});
        }

        break;
      default:
    } 
  }

  render() {
    if (this.state.screen === "GameSelect") {
      this.changeScreen = <GameSelect mode={0}/>;
    } else if (this.state.screen === "Left" || this.state.screen === "Right") {
      this.changeScreen = <GameSelect mode={1}/>;
    } else if (this.state.screen === "Up" || this.state.screen === "Down") {
      this.changeScreen = <GameSelect mode={2}/>;
    } else {
      this.changeScreen = "SOMETHING WENT WRONG";
    }
    return (
      <div>
        <header className="App-header">
          <div> {this.changeScreen} </div>
          <div> screen: {this.state.screen} </div>
          <div> select: {this.state.select} </div>
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
