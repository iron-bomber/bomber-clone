class Bomber{
    constructor(color, x, y, iGrid, jGrid, num){
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.moveUp = false;
        this.moveDown = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.speed = 2;
        this.iGrid = iGrid;
        this.jGrid = jGrid;
        this.bombPower = 1;
        this.bombAmmo = 2;
        this.num = num - 1 ;
    }

    deathCheck(){
        for (let i = 1; i < bomberLocations.length-1; i++) {
            for (let j = 1; j < bomberLocations.length-1; j++) {
                if (bombMap[this.iGrid][this.jGrid] === "boom"){
                    this.die();
                }
            }
        }
    }

    die(){
        ssNum = 0;
        var p1Right = new Image();
        p1Right.src="./Images/p1/p1WalkRight.png";
        function p1death(){
            let spriteWidth = 64;
            let spriteHeight = 50;
            let spriteScale = 1.3;
            let frameRate = (-g.playerArr[this.num].speed * 2) + 10;
            let totalFrames = frameRate * 8;
            if(frameCounter < totalFrames){
                ctx.drawImage(p1Right, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[this.num].x - 22, g.playerArr[this.num].y - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
            }
            if(frameCounter % frameRate == 0){
                ssNum++;
            }
            if(frameCounter == totalFrames - 1){
                ssNum=0;
                frameCounter = 0;
            }
            frameCounter++;
        }
        p1death();
        g.playerArr.splice(this.num, 1, '');
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
                    bomberLocations[i][j] = g.playerArr[this.num];
                    this.iGrid = i;
                    this.jGrid = j;
                }else if(bomberLocations[i][j] === "wall" ||bomberLocations[i][j] === "bombpower" || bomberLocations[i][j] === "extrabomb" || bomberLocations[i][j] === "speed" || bomberLocations[i][j] !== g.playerArr[this.num]){}
                 else {
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
//////////////////////////////////////////////////// BUGFIX
        if(theWalls.up == false && theWalls.left == false && this.moveLeft == true && this.moveUp == true){
            if(this.x - this.speed < this.jGrid * 50 && this.y-this.speed < this.iGrid * 50){
                this.x -= this.speed;
                theWalls.up = true;
                theWalls.left = true;
            }
        }
        if(theWalls.up == false && theWalls.right == false && this.moveRight == true && this.moveUp == true){
            if(this.x + this.width + this.speed > this.jGrid * 50 + 50 && this.y+this.speed < this.iGrid * 50){
                theWalls.up = true;
                theWalls.right = true;
            }
        }
        if(theWalls.down == false && theWalls.left == false && this.moveLeft == true && this.moveDown == true){
            if(this.x - this.speed < this.jGrid * 50 && this.y- this.height - this.speed > this.iGrid * 50 + 50){
                theWalls.down = true;
                theWalls.left = true;
            }
        }
        if(theWalls.down == false && theWalls.right == false && this.moveRight == true && this.moveDown == true){
            if(this.x - this.speed > this.jGrid * 50 && this.y-this.speed > this.iGrid * 50){
                this.y += this.speed;
                theWalls.down = true;
                theWalls.right = true;
            }
        }
////////////////////////////////////////////////////////

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





