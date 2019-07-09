import React from 'react';

export default class SnakeCanvas extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.snake = this.props.snake;
      this.snacc = {
          posX: this.props.snaccPosX,
          posY: this.props.snaccPosY
      }
    }
    
    componentDidUpdate() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = 10;
      const height = 10;

      if (this.props.gameOver === true) {
        ctx.font = "80px serif";
        ctx.fillText("GAME OVER", canvas.width/3.7, canvas.height/2, 300000);
      } 
      else {
        
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        var currSnake = this.snake.head;
        while (currSnake != null) {
          ctx.fillStyle = "white";
          ctx.fillRect(currSnake.posX * width + 1, currSnake.posY * height + 1, 9, 9);
          currSnake = currSnake.next;
        }
  
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.snacc.posX * width + 1, this.snacc.posY * height + 1, 9, 9);
      }
    }
      
    render() {
      return <canvas width="900" height="600" ref={this.canvasRef}></canvas>;
    }
  }