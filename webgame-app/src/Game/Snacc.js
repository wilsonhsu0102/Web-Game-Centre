export default class Snacc {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.makeSnacc();
    }
    
    makeSnacc() {
        this.randomPosX = Math.ceil((Math.random() * (this.width - 3)) + 1);
        this.randomPosY = Math.ceil((Math.random() * (this.height - 3)) + 1);
    }

    snakeGotSnacc() {
        this.randomPosX = -1;
        this.randomPosY = -1;
        this.makeSnacc();
    }

    isGone() {
        if (this.randomPosX < 0 && this.randomPosY < 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
