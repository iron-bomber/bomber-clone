const ctx = document.getElementById('main-game-board').getContext('2d');
ctx.imageSmoothingEnabled = false;

let bombIDs = 0;

class Game {

    constructor(){
        this.playerArr = [];
        this.bombArr = [];
        this.spriteArr = [];
    }

    // Randomly generates rocks into the 2d Array bombMap
    generateRocks() {
        for (let i = 1; i < bombMap.length-1; i++) {
            for(let j = 1; j < bombMap.length-1; j++) {
                if (bombMap[i][j] === 'wall') {
                    continue;
                }else if ((j < 3 || j > 13) && (i === 1 || i === 15)) {
                    continue;
                } else if ((i < 3 || i > 13) && (j === 1 || j === 15)) {
                    continue;
                } else {
                    if (Math.random() > 0.25) {
                        bombMap[i][j] = 'rock';
                    }
                }
            }
        }

    }
    // Creates bomber and places him in bomber array
    createPlayer(color, x, y, iGrid, jGrid, num) {
        let theBomber = new Bomber(color, x, y, iGrid, jGrid, num);
        this.playerArr.push(theBomber); 
    }

    // Creates a sprite for each bomber
    createSprite(left, right, up, down, lastPressed, bomberID, height) {
        let bomberSprite = new Sprite(left, right, up, down, lastPressed, bomberID, height);
        this.spriteArr.push(bomberSprite);
    }

    //Draws the map based on the 2d Array bombMap
    createMap() {
        var leftWall = new Image();
        leftWall.src="./Images/leftWall.png";
        var rock = new Image();
        rock.src="./Images/rock.png";
        let xCoord = 0;
        let yCoord = 0;
        for(let i = 0; i < bombMap.length; i++) {
            for (let j = 0; j < bombMap.length; j++) {
                if (bombMap[i][j] === 'wall') {
                    ctx.drawImage(rock, 256, 128, 64, 64, xCoord, yCoord, 50, 50);
                    xCoord += 50;
                } else if (bombMap[i][j] === 'rock') {
                    ctx.drawImage(rock, 64, 64, 64, 64, xCoord, yCoord, 50, 50);
                    xCoord += 50;
                }else if (typeof bombMap[i][j] === 'object') {
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    //bomb Gray
                    ctx.fillStyle = '#C0C0C0';
                    ctx.beginPath();
                    ctx.arc(xCoord + 25, yCoord + 25, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    xCoord += 50;
                } else if (typeof bombMap[i][j] === 'number') {
                    // ctx.fillStyle = 'green';
                    // ctx.fillRect(xCoord, yCoord, 50, 50);
                    //explosion orange
                    ctx.fillStyle = '#FF9900';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                } else if(bombMap[i][j] === 'bombpower'){
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'red';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;
                }
                else if(bombMap[i][j] === 'extrabomb'){
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'cyan';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;
                }
                else if(bombMap[i][j] === 'speed'){
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;    
                }
                else {
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    xCoord += 50;
                }
            }
            yCoord += 50;
            xCoord = 0;
        }

    }

    drawPlayer(u) {
        ctx.fillStyle = u.color;
        ctx.fillRect(u.x, u.y, u.width, u.height)
    }
}

// Death
let p1Death = new Image();
let p2Death = new Image();

p2Death.src="./Images/p2/p2Death.png";
p1Death.src="./Images/p1/p1Death.png";

function mainLoop(){
    
    //GRID PLACER & MoveCheck
    for (let i = 0; i < g.playerArr.length; i++) {
        if(g.playerArr[i] !== ''){
            g.playerArr[i].gridPlacer();
            if(g.playerArr[i].moveUp || g.playerArr[i].moveDown || g.playerArr[i].moveLeft || g.playerArr[i].moveRight){
                g.playerArr[i].move();
            }
        }
    }
    //Clear canvas
    ctx.clearRect(0, 0, 750, 750);
    g.createMap();

    //Drawing Player
    // for (let i = 0; i < g.playerArr.length; i++) {
    //     g.drawPlayer(g.playerArr[i]);
    // }
    if (playerOneDead) {
        let spriteWidth = 64;
        let spriteHeight = 50;
        let spriteScale = 1.3;
        let frameRate = 6;
        let totalFrames = frameRate * 12;
        if(!deathDone){
            if(ssNum < 6){
                if(frameCounter < totalFrames){
                    ctx.drawImage(p1Death, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, playerOneX - 22, playerOneY - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
                }
            }else{
                ctx.drawImage(p1Death, spriteWidth*5, 0, spriteWidth, spriteHeight, playerOneX - 22, playerOneY - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
            }


        }
        if(frameCounter % frameRate == 0){
            ssNum++;
        }
        if(frameCounter == totalFrames - 1){
            deathDone = true;
        }
        frameCounter++;
    }
    if (playerTwoDead) {
        let spriteWidth = 64;
        let spriteHeight = 53;
        let spriteScale = 1.3;
        let frameRate = 6;
        let totalFrames = frameRate * 12;
        if(!deathDone2){
            if(ssNum2 < 6){
                if(frameCounter2 < totalFrames){
                    ctx.drawImage(p2Death, spriteWidth*ssNum2, 0, spriteWidth, spriteHeight, playerTwoX - 22, playerTwoY - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
                }
            }else{
                ctx.drawImage(p2Death, spriteWidth*5, 0, spriteWidth, spriteHeight, playerTwoX - 22, playerTwoY - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
            }


        }
        if(frameCounter2 % frameRate == 0){
            ssNum2++;
        }
        if(frameCounter2 == totalFrames - 1){
            deathDone2 = true;
        }
        frameCounter2++;
    }

    //PLAYER SPRITES
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    for (let i = 0; i < g.playerArr.length; i++) {
        if (g.playerArr[i].moveLeft == true && g.playerArr[i].moveRight == true && g.playerArr[i].moveUp == true){
            g.spriteArr[i].drawImgUp();
        }
        else if (g.playerArr[i].moveLeft == true && g.playerArr[i].moveRight == true && g.playerArr[i].moveDown == true){
            g.spriteArr[i].drawImgDown()
        }else if  
            (  g.playerArr[i].moveLeft == true && g.playerArr[i].moveRight == true
            || g.playerArr[i].moveUp == true && g.playerArr[i].moveDown == true
            || g.playerArr[i].moveLeft == true && g.playerArr[i].moveRight == true && g.playerArr[i].moveUp == true && g.playerArr[i].moveDown == true
            || g.playerArr[i].moveLeft == true && g.playerArr[i].moveRight == true && g.playerArr[i].moveUp == true && g.playerArr[i].moveDown == true
            || g.playerArr[i].moveLeft == false && g.playerArr[i].moveRight == false && g.playerArr[i].moveUp == false && g.playerArr[i].moveDown == false
        ){
            g.spriteArr[i].drawImgIdle()
        }
        else if(g.playerArr[i].moveLeft == true){
            g.spriteArr[i].drawImgLeft()
        }else if(g.playerArr[i].moveRight == true){
            g.spriteArr[i].drawImgRight()
        }else if(g.playerArr[i].moveUp == true){
            g.spriteArr[i].drawImgUp()
        }else if(g.playerArr[i].moveDown == true){
            g.spriteArr[i].drawImgDown()
        }
    }

    //Loop this function 60fps
    requestAnimationFrame(mainLoop);

}// END OF MAIN LOOP




// document.querySelector('#start-game').onclick = () =>{
//     mainLoop();
// }s

//PLAYER COMMANDS
document.onkeypress = function(e){
    if(e.key === "s"){
        g.playerArr[0].moveDown = true;
    }
    if(e.key === "w"){
        g.playerArr[0].moveUp = true;
    }
    if(e.key === "a"){
        g.playerArr[0].moveLeft = true;
    }
    if(e.key === "d"){
        g.playerArr[0].moveRight = true;
    }
    // Drop bomb
    if(e.keyCode === 32){
        if(g.playerArr[0].bombAmmo > 0){
            if (bombMap[g.playerArr[0].iGrid][g.playerArr[0].jGrid] === 'free') {
                // Create new bomb (player, player Y, player X, player bomb power, bomb ID)
                let newBomb = (new Bomb(g.playerArr[0], g.playerArr[0].iGrid, g.playerArr[0].jGrid, g.playerArr[0].bombPower, bombIDs));
                bombIDs++;
                newBomb.gridPlacer();
                newBomb.timerExplode();
                g.bombArr.push(newBomb);
                g.playerArr[0].bombAmmo -= 1;
            }
        }
    }
}

document.onkeydown = function(e){
        //P2
        if(e.key === "ArrowDown"){
            g.playerArr[1].moveDown = true;
        }
        if(e.key === "ArrowUp"){
            g.playerArr[1].moveUp = true;
        }
        if(e.key === "ArrowLeft"){
            g.playerArr[1].moveLeft = true;
        }
        if(e.key === "ArrowRight"){
            g.playerArr[1].moveRight = true;
        }
        if(e.keyCode === 16){
            if(g.playerArr[1].bombAmmo > 0){
                if (bombMap[g.playerArr[1].iGrid][g.playerArr[1].jGrid] === 'free') {
                    let newBomb = (new Bomb(g.playerArr[1], g.playerArr[1].iGrid, g.playerArr[1].jGrid, g.playerArr[1].bombPower, bombIDs));
                    bombIDs++;
                    newBomb.gridPlacer();
                    newBomb.timerExplode();
                    g.bombArr.push(newBomb);
                    g.playerArr[1].bombAmmo -= 1;
                }
            }
        }
}

document.onkeyup = function(e){
    if(e.key === "s"){
        g.playerArr[0].moveDown = false;
        g.spriteArr[0].lastPressed = "down";
    }
    if(e.key === "w"){
        g.playerArr[0].moveUp = false;
        g.spriteArr[0].lastPressed = "up";
    }
    if(e.key === "a"){
        g.playerArr[0].moveLeft = false;
        g.spriteArr[0].lastPressed = "left"
    }
    if(e.key === "d"){
        g.playerArr[0].moveRight = false;
        g.spriteArr[0].lastPressed = "right"
    }
    
    //P2
    if(e.key === "ArrowDown"){
        g.playerArr[1].moveDown = false;
        g.spriteArr[1].lastPressed = "down";
    }
    if(e.key === "ArrowUp"){
        g.playerArr[1].moveUp = false;
        g.spriteArr[1].lastPressed = "up";
    }
    if(e.key === "ArrowLeft"){
        g.playerArr[1].moveLeft = false;
        g.spriteArr[1].lastPressed = "left"
    }
    if(e.key === "ArrowRight"){
        g.playerArr[1].moveRight = false;
        g.spriteArr[1].lastPressed = "right"
    }
} //END PLAYER 1 COMMANDS


let g = new Game();
//Player one
g.createPlayer('red', 60, 75, 1, 1, 1);
let p1Left = new Image();
let p1Right = new Image();
let p1Up = new Image();
let p1Down = new Image();

let spriteHeight1 = 50;
p1Left.src ="./Images/p1/p1WalkLeft.png";
p1Right.src="./Images/p1/p1WalkRight.png";
p1Up.src="./Images/p1/p1WalkUp.png";
p1Down.src="./Images/p1/p1WalkDown.png";

g.createSprite(p1Left, p1Right, p1Up, p1Down, 'down', 0, spriteHeight1);
//Player two
g.createPlayer('blue', 760, 760, 15, 15, 2);
let spriteHeight2 = 53;
let p2Left = new Image();
let p2Right = new Image();
let p2Up = new Image();
let p2Down = new Image();

p2Left.src ="./Images/p2/p2WalkLeft.png";
p2Right.src="./Images/p2/p2WalkRight.png";
p2Up.src="./Images/p2/p2WalkUp.png";
p2Down.src="./Images/p2/p2WalkDown.png";

g.createSprite(p2Left, p2Right, p2Up, p2Down, 'down', 1, spriteHeight2);
// Randomly generate rocks on map
g.generateRocks();
mainLoop();
