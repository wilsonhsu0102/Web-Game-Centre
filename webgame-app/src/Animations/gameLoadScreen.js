import React from 'react';

const fps = 200; //milliseconds

class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.state;
      this.updateAnimationState = this.updateAnimationState.bind(this);
    //   this.keyPress = this.keyPress.bind(this);
      this.delayFunction = this.delayFunction.bind(this);
    }
    
    componentDidMount() {
    //   document.addEventListener("keydown", this.keyPress, false);
      this.rAF = requestAnimationFrame(this.updateAnimationState);
      setInterval(this.delayFunction, fps);
    }
    
    componentWillUnmount() {
    //   document.removeEventListener("keydown", this.keyPress, false);
      cancelAnimationFrame(this.rAF);
    }

    delayFunction() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateState(state) {

    }

    updateAnimationState() {
        // this.setState(prevState => ({ game: prevState.game, dx: prevState.dx, dy: prevState.dy, test: prevState.test }));
        this.setState(prevState => ({ game: prevState.game, dx: prevState.dx, dy: prevState.dy, test: prevState.test }));

    }
    
    render() {
        if(this.state.game === "Snake") {
            console.log("1:" + this.state);
            return <Canvas dx={this.state.dx} dy={this.state.dy} mode={1}/>;
        }
        else {
            console.log("2:" + this.state);
            return <Canvas dx={this.state.dx} dy={this.state.dy} mode={2}/>;
        }
    }
  }

class Canvas extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.pos = {dx: this.props.dx, dy: this.props.dy};
      this.mode = this.props.mode;
    }
    
    componentDidUpdate() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if(this.mode === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if(this.mode === 2){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    
      ctx.fillStyle = "white";
      ctx.fillRect(this.pos.dx, this.pos.dy, 10, 10);
    }
      
    render() {
      return <canvas width="900" height="600" ref={this.canvasRef}></canvas>;
    }
  }

  export default Animation;