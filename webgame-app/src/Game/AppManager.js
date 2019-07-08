import React from 'react';
import '../css/App.css';
import GameSelectAnimation from '../Animations/GameSelect';

class AppManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      select: 0
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
        if(this.state.select === 0) {
          this.setState({select: 1});
        }
        else if(this.state.select > 1) {
          this.setState({select: this.state.select - 1});
        }
        break;
      case 38:
        if(this.state.select === 0) {
          this.setState({select: 1});
        }
        break;
      case 39:
        if(this.state.select === 0) {
          this.setState({select: 1});
        }
        else if(this.state.select < 3) {
          this.setState({select: this.state.select + 1});
        }
        break;
      case 40:
        if(this.state.select === 0) {
          this.setState({select: 1});
        }
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
    if (this.state.select > 3 || this.state.select < 0) {
      this.changeScreen = "SOMETHING WENT WRONG";
    } else if (this.state.screen === 1) {
      // this.changeScreen = 
    } else {
      this.changeScreen = <GameSelectAnimation screen={this.state.screen} mode={this.state.select}/>;
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
