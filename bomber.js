class Bomber{
    constructor(color){
        this.color = color;
        // this.x = x;
        // this.y = y;
        // this.height = height;
        // this.width = width;
        this.moveUp;
        this.moveDown;
        this.moveRight;
        this.moveLeft;
        this.speed = 4;
    }

    move(){
        if(this.moveUp){
            this.y -= this.speed;
        }
        if(this.moveDown){
            this.y += this.speed;
        }
        if(this.moveLeft){
            this.x -= this.speed;
        }
        if(this.moveRight){
            this.x += this.speed;
        }
    }
}