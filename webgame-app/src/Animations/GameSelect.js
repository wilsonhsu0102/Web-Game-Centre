import React from 'react';

const fps = 200; //milliseconds

class GameSelect extends React.Component {
    constructor(props) {
      super(props);
      this.updateAnimationState = this.updateAnimationState.bind(this);
      this.delayFunction = this.delayFunction.bind(this);
    }
    
    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
      setInterval(this.delayFunction, fps);
    }
    
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }

    delayFunction() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateAnimationState() {
    }
    
    render() {
      console.log("props:" + this.props.mode);
      return <Canvas mode={this.props.mode}/>;
    }
  }

class Canvas extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
    
    componentDidUpdate() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      console.log(this.mode);
      
      if(this.props.mode === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if(this.props.mode === 2){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    
      ctx.fillStyle = "white";
      ctx.fillRect(1, 1, 10, 10);
    }
      
    render() {
      return <canvas width="900" height="600" ref={this.canvasRef}></canvas>;
    }
  }

  export default GameSelect;