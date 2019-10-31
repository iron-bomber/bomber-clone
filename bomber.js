class Bomber{
    constructor(color){
        this.color = color;
        this.x = 25;
        this.y = 25;
        this.width = 20;
        this.height = 20;
        this.moveUp;
        this.moveDown;
        this.moveRight;
        this.moveLeft;
        this.speed = 3;
        this.iGrid = 0;
        this.jGrid = 0;
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
        //Checks if there is a wall to the right
        if(this.jGrid === 14) {
            theWalls.right = true;
        }else if(bombMap[this.iGrid][this.jGrid+1] !== 'free') {
            theWalls.right = true;
        } else if(this.y + this.height > this.iGrid * 50 + 50) {
            if (bombMap[this.iGrid+1][this.jGrid-1] !== 'free'){
                theWalls.right = true;
            }
        }else{
            theWalls.right = false;
        }

        // Checks if there is a wall to the left
        if (this.jGrid === 0) {
            theWalls.left = true;
        }else if(bombMap[this.iGrid][this.jGrid-1] !== 'free') {
            theWalls.left = true;
        } else if (this.y + this.height > this.iGrid * 50 + 50) {
            if (bombMap[this.iGrid+1][this.jGrid-1] !== 'free') {
                theWalls.left = true;
            }
        } else{
            theWalls.left = false;
        }

        // Checks if there is a wall below
        if(this.iGrid === 14) {
            theWalls.down = true;
        } else if (bombMap[this.iGrid+1][this.jGrid] !== 'free') {
            theWalls.down = true;
        } else if (this.x + this.width > this.jGrid * 50 + 50) {
            if (bombMap[this.iGrid+1][this.jGrid+1] !== 'free') {
                theWalls.down = true;
            }
        }       
        else {
            theWalls.down = false;
        }

        // Checks if there is a wall above
        if (this.iGrid === 0) {
            theWalls.up = true;
        }else if(bombMap[this.iGrid-1][this.jGrid] !== 'free') {
            theWalls.up = true
        }else if (this.x + this.width > this.jGrid * 50 + 50){
            if (bombMap[this.iGrid-1][this.jGrid + 1] !== 'free') {
                theWalls.up = true;
            }  
        } else {
            theWalls.up = false;
        }
        return theWalls;
    }


    // move(){
    //     let theWalls = this.wallDetector();
    //     //Move Right OOB Check
    //     if(this.x + this.speed + this.width > 750){
    //         for(let i = 0; i < this.speed; i++){
    //             if(this.x + this.width < 750){
    //                 this.x++;
    //             }
    //         }
    //     }else{
    //         if(this.moveRight){
    //             this.x += this.speed;
    //         }
    //     }
    //     //Move Left OOB Check
    //     if(this.x - this.speed < 0){ 
    //         for(let i = 0; i < this.speed; i++){
    //             if(this.x > 0){
    //                 this.x--;
    //             }
    //         }
    //     }else{
    //         if(this.moveLeft){
    //             this.x -= this.speed;
    //         }
    //     }
    //     //Move Down OOB Check
    //     if(this.y  + this.height + this.speed > 750){
    //         for(let i = 0; i < this.speed; i++){
    //             if(this.y + this.height < 750){
    //                 this.y++;
    //             }
    //         }
    //     }else{
    //         if(this.moveDown){
    //             this.y += this.speed;
    //         }
    //     }
    //     //Move Up OOB Check
    //     if(this.y - this.speed < 0){
    //         for(let i = 0; i < this.speed; i++){
    //             if(this.y > 0){
    //                 this.y--;
    //             }
    //         }
    //     }else{
    //         if(this.moveUp){
    //             this.y -= this.speed;
    //         }
    //     }
    // }


    // if (rect1.x < rect2.x + rect2.width &&
    //     rect1.x + rect1.width > rect2.x &&
    //     rect1.y < rect2.y + rect2.height &&
    //     rect1.y + rect1.height > rect2.y) {
    move(){
        let theWalls = this.wallDetector();
        //Move Right OOB Check
        if(theWalls.right){
            if(this.x + this.speed + this.width > (this.jGrid * 50) + 50 ) {
                for(let i = 0; i < this.speed; i++){
                    if(this.x + this.width < (this.jGrid * 50) + 50){
                        this.x++;
                    }
                }
            }else{
                if(this.moveRight){
                    this.x += this.speed;
                }
            }
        }else{
            if(this.moveRight){
                this.x += this.speed;
            }
        }

        //Move Left OOB Check
        if(theWalls.left){ 
            if(this.x - this.speed < (this.jGrid * 50)) {
                for(let i = 0; i < this.speed; i++){
                    if(this.x > (this.jGrid * 50)){
                        this.x--;
                    }
                }
            }else{
                if(this.moveLeft){
                    this.x -= this.speed;
                }
            }
        }else{
            if(this.moveLeft){
                this.x -= this.speed;
            }
        }

        //Move Down OOB Check
        if(theWalls.down){
            if(this.y  + this.height + this.speed > (this.iGrid * 50) + 50) {
                for(let i = 0; i < this.speed; i++){
                    if(this.y + this.height < (this.iGrid * 50) + 50){
                        this.y++;
                    }
                }
            }else{
                if(this.moveDown){
                    this.y += this.speed;
                }
            }
        }else{
            if(this.moveDown){
                this.y += this.speed;
            }
        }

        //Move Up OOB Check
        if(theWalls.up){
            if(this.y - this.speed < this.iGrid * 50) {
                for(let i = 0; i < this.speed; i++){
                    if(this.y > (this.iGrid * 50)){
                        this.y--;
                    }
                }
            }else{
                if(this.moveUp){
                    this.y -= this.speed;
                }
            }
        }else{
            if(this.moveUp){
                this.y -= this.speed;
            }
        }

    }
}