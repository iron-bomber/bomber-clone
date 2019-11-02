class Bomber{
    constructor(color){
        this.color = color;
        this.x = 75;
        this.y = 75;
        this.width = 20;
        this.height = 20;
        this.moveUp = false;
        this.moveDown = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.speed = 2;
        this.iGrid = 1;
        this.jGrid = 1;
        this.bombPower = 1;
        this.bombAmmo = 1;
    }

    wallDetection(){
        
        //Move Right OOB Check
        if(this.x + this.speed + this.width > 850){
            for(let i = 0; i < this.speed; i++){
                if(this.x + this.width < 850){
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
        if(this.y  + this.height + this.speed > 850){
            for(let i = 0; i < this.speed; i++){
                if(this.y + this.height < 850){
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

    gridPlacer () {
        let xMin = 50;
        let xMax = 100;
        let yMin = 50;
        let yMax = 100;

        // Iterates through the 2d array
        for (let i = 1; i < bomberLocations.length-1; i++) {
            for (let j = 1; j < bomberLocations.length-1; j++) {
                if (this.x+this.width/2 >= xMin && this.x-this.width/2 < xMax && this.y+this.height/2 >= yMin && this.y-this.height/2 < yMax) {
                    if(bomberLocations[i][j] == "bombpower"){
                        this.bombPower++;
                    }
                    if(bomberLocations[i][j] == "extrabomb"){
                        this.bombAmmo++;
                    }
                    if(bomberLocations[i][j] == "speed"){
                        if(this.speed < 6){
                            this.speed += 1
                        }
                    }
                    bomberLocations[i][j] = g.playerArr[0];
                    this.iGrid = i;
                    this.jGrid = j;
                }else if(bomberLocations[i][j] === "wall" ||bomberLocations[i][j] === "bombpower" || bomberLocations[i][j] === "extrabomb" || bomberLocations[i][j] === "speed"){}
                else{
                    bomberLocations[i][j] = "free";
                }
                xMin += 50;
                xMax += 50;
            }
            yMin += 50;
            yMax += 50;
            xMin = 50;
            xMax = 100;
        }
    }

    wallDetector () {
        let theWalls = {};
        //Checks if there is a wall to the right
        if(this.jGrid === 15) {
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
        if (this.jGrid === 1) {
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
        if(this.iGrid === 15) {
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
        if (this.iGrid === 1) {
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





