import React from 'react';

class SnakeCanvas extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.snake = this.props.snake;
      this.snacc = this.props.snacc;
    }
    
    componentDidUpdate() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = 10;
      const height = 10;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      var currSnake = this.snake.head;
      console.log(currSnake.posX, currSnake.posY);
      while (currSnake != null) {
        ctx.fillStyle = "white";
        ctx.fillRect(currSnake.posX * width + 1, currSnake.posY * height + 1, 9, 9);
        currSnake = currSnake.next;
      }

      ctx.fillStyle = "yellow";
      ctx.fillRect(this.snacc.randomPosX * width + 1, this.snacc.randomPosY * height + 1, 9, 9);
    
    }
      
    render() {
      return <canvas width="900" height="600" ref={this.canvasRef}></canvas>;
    }
  }

class GameOverCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    console.log("got here");
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "yellow";
    ctx.font = "80px serif";
    ctx.fillText("GAME OVER", 225, 250);
    ctx.font = "26px sans-serif";
    ctx.fillText("Score: " + this.props.score, 400, 375);
  }

  render() {
    return <canvas width="900" height="600" ref={this.canvasRef}></canvas>
  }
}

export {SnakeCanvas, GameOverCanvas};