import React from 'react';
import Snake from './Snake';
import Snacc from './Snacc';
import {SnakeCanvas, GameOverCanvas} from '../Animations/Snake';

const fps = 200; //milliseconds

class SnakeManager extends React.Component{
    constructor(props) {
        super(props);
        this.width = 90;
        this.height = 60;
        this.snake = new Snake(this.width/2, this.height/2);
        this.snacc = new Snacc(this.width, this.height);
        this.state = {
            score: 0,
            dx: 0,
            dy: 0,
            gameOver: false
        }

        this.updateAnimationState = this.updateAnimationState.bind(this);
        this.delayFunction = this.delayFunction.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
        document.addEventListener("keydown", this.keyPress, false);
        this.intervalId = setInterval(this.delayFunction, fps);
    }
      
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPress, false);
        cancelAnimationFrame(this.rAF);
    }

    keyPress(event){
        switch(event.keyCode) {
            case 37:
                this.setState({dx: -1, dy: 0});
                break;
            case 38:
                this.setState({dx: 0, dy: -1});
                break;
            case 39:
                this.setState({dx: 1, dy: 0});
                break;
            case 40:
                this.setState({dx: 0, dy: 1});
                break;
            default:
        }
        this.moveSnake(this.state.dx, this.state.dy);
        if (this.isSnaccGone(this.state.dx, this.state.dy)) {
            this.setState(prevState => ({score: prevState.score + 1}));
        }
    }

    delayFunction() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
        
    }

    updateAnimationState() {
        if (this.snakeCommittedSuicide() || this.snakeOutOfBound()) {
            this.setState({dx: 0, dy: 0, gameOver: true});
            clearInterval(this.intervalId);
        } else if (this.isSnaccGone(this.state.dx, this.state.dy)) {
            this.setState(prevState => ({score: prevState.score + 1}));
            console.log("Score:" + this.state.score);
        } 
        this.setState(prevState => ({dx: prevState.dx, dy:prevState.dy}));
        this.moveSnake(this.state.dx, this.state.dy);
    }

    isSnaccGone(dx, dy) {
        if (this.snake.head.posX === this.snacc.randomPosX && this.snake.head.posY === this.snacc.randomPosY) {
            this.snacc.makeSnacc();
            this.snake.growHead(dx, dy)
            return true;
        }
        return false;
    }

    moveSnake(dx, dy) {
        this.snake.growHead(dx, dy);
        this.snake.removeTail();
    }

    snakeOutOfBound() {
        const posX = this.snake["head"].posX;
        const posY = this.snake["head"].posY;
        if (posX >= (this.width - 1) || posX <= 0) {
            return true;
        }
        if (posY >= (this.height - 1) || posY <= 0) {
            return true;
        }
        return false;
    }

    snakeCommittedSuicide() {
        var currSnake = this.snake["head"].next;
        while (currSnake != null) {
            if (this.snake["head"].posX === currSnake.posX && this.snake["head"].posY === currSnake.posY) {
                return true;
            }
            currSnake = currSnake.next;
        }
        return false;
    }

    render() {
        if (this.state.gameOver === true) {
            this.screen = <GameOverCanvas score={this.state.score}/>;
        } else {
            this.screen = <SnakeCanvas gameOver={this.state.gameOver} snake={this.snake} snacc={this.snacc}/>;
        }
        return (<div> 
            {this.screen}
            <div> Score: {this.state.score} </div>
            </div>
            )
    }
}

export default SnakeManager;