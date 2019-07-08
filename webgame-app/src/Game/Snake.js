class SnakeNode{
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.next = null;
        this.prev = null;
    }
}

export default class Snake{
    constructor(startPosX, startPosY) {
        this.head = new SnakeNode(startPosX, startPosY);
        this.tail = this.head;
    }

    growHead(dx, dy) {
        const newSnakeNode = new SnakeNode(this.head.posX + dx, this.head.posY + dy);
        newSnakeNode.next = this.head;
        this.head.prev = newSnakeNode;
        this.head = newSnakeNode;
    }

    removeTail() {
        const tempSnake = this.tail.prev;
        tempSnake.next = null;
        this.tail = tempSnake;
    }
}