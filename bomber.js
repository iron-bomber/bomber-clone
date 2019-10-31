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
        this.iGrid = 2;
        this.jGrid = 2;
    }


    gridPlacer () {
        let xMin = 0;
        let xMax = 50;
        let yMin = 0;
        let yMax = 50;
        // Iterates through the 2d array
        for (let i = 0; i < bomberLocations.length; i++) {
            for (let j = 0; j < bomberLocations.length; j++) {
                if (this.x >= xMin && this.x < xMax && this.y >= yMin && this.y < yMax) {
                    bomberLocations[i][j] = `${this.color}`;
                    this.iGrid = i;
                    this.jGrid = j;
                    alert(`${i}, ${j}`);
                }
                xMin += 50;
                xMax += 50;
            }
            yMin += 50;
            yMax += 50;
            xMin = 0;
            xMax = 50;
        }
    }

    wallDetector () {
        let theWalls = {};
        if(bombMap[this.iGrid][this.jGrid+1] === 'free') {
            theWalls.right = true;
        } else {
            theWalls.right = false;
        }
        if(bombMap[this.iGrid][this.jGrid-1] === 'free') {
            theWalls.left = true;
        } else {
            theWalls.left = false;
        }
        if(bombMap[this.iGrid+1][this.jGrid] === 'free') {
            theWalls.down = true;
        } else {
            theWalls.down = false;
        }
        if(bombMap[this.iGrid-1][this.jGrid] === 'free') {
            theWalls.up = true
        } else {
            theWalls.up = false;
        }
        return theWalls;
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