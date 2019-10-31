class Bomber{
    constructor(color){
        this.color = color;
        this.x = 100;
        this.y = 100;
        this.width = 20;
        this.height = 20;
        this.moveUp;
        this.moveDown;
        this.moveRight;
        this.moveLeft;
        this.speed = 18;
    }

    move(){
        //Move Right OOB Check
        if(this.x + this.speed + this.width > 750){
            for(let i = 0; i < this.speed; i++){
                if(this.x + this.width < 750){
                    this.x++;
                }
            }
        }else{
            if(this.moveRight){
                this.x += this.speed;
            }
        }
        //Move Left OOB Check
        if(this.x - this.speed < 0){ 
            for(let i = 0; i < this.speed; i++){
                if(this.x > 0){
                    this.x--;
                }
            }
        }else{
            if(this.moveLeft){
                this.x -= this.speed;
            }
        }
        //Move Down OOB Check
        if(this.y  + this.height + this.speed > 750){
            for(let i = 0; i < this.speed; i++){
                if(this.y + this.height < 750){
                    this.y++;
                }
            }
        }else{
            if(this.moveDown){
                this.y += this.speed;
            }
        }
        //Move Up OOB Check
        if(this.y - this.speed < 0){
            for(let i = 0; i < this.speed; i++){
                if(this.y > 0){
                    this.y--;
                }
            }
        }else{
            if(this.moveUp){
                this.y -= this.speed;
            }
        }
    }
}