import React from 'react';

const fps = 200; //milliseconds

class Animation extends React.Component {
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
      return <GameSelectCanvas mode={this.props.mode}/>;
    }
  }

  class GameSelectCanvas extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
    
    componentDidUpdate() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      console.log(this.mode);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      if(this.props.mode === 0) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "orange";
        if(this.props.mode === 1) {
          ctx.fillRect(150, 425, 50, 40);
        } else if (this.props.mode === 2) {
          ctx.fillRect(350, 425, 50, 40);
        } else if (this.props.mode === 3) {
          ctx.fillRect(600, 425, 50, 40);
        }
        ctx.fillStyle = "white";
      } 
      
      ctx.font = "80px sans-serif";
      ctx.fillText("Select Game", 250, 200);

      ctx.font = "25px serif";
      ctx.fillText("Snake", 175, 450);

      ctx.fillText("Coming Soon", 375, 450);
      ctx.fillText("Coming Soon", 625, 450);
    }
      
    render() {
      return <canvas width="900" height="600" ref={this.canvasRef}></canvas>;
    }
  }

export default Animation;