const ctx = document.getElementById('main-game-board').getContext('2d');

const bombMap = [
    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
];

const bomberLocations = [
    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall'],
    ['wall', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'wall'],
    ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
];

let bombIDs = 0;

class Game {

    constructor(){
        this.playerArr = [];
        this.bombArr = [];
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

    //Draws the map based on the 2d Array bombMap
    createMap() {
        let xCoord = 0;
        let yCoord = 0;
        for(let i = 0; i < bombMap.length; i++) {
            for (let j = 0; j < bombMap.length; j++) {
                if (bombMap[i][j] === 'wall') {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;

                } else if (bombMap[i][j] === 'rock') {
                    ctx.fillStyle = 'brown';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                }else if (typeof bombMap[i][j] === 'object') {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
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
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'red';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;
                }
                else if(bombMap[i][j] === 'extrabomb'){
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'cyan';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;
                }
                else if(bombMap[i][j] === 'speed'){
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;    
                }
                else {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
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

let playerOneDead = false;
let playerTwoDead = false;
let playerOneX;
let playerOneY;
let playerTwoX;
let playerTwoY;
// SPRITE VARS
let frameCounter = 0;
let frameCounter2 = 0;
let ssNum = 0;
let ssNum2 = 0;
let idleDecider;
let idleDecider2;
let lastPressed = 'down';
let lastPressed2 = 'ArrowDown';


let g = new Game();
g.createPlayer('red', 60, 75, 1, 1, 1);
g.createPlayer('blue', 760, 760, 15, 15, 2);
// Randomly generate rocks on map
g.generateRocks();
mainLoop();



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


    var p1Right = new Image();
    var p1Left = new Image();
    var p1Up = new Image();
    var p1Down = new Image();


    p1Right.src="./Images/p1/p1WalkRight.png";
    p1Left.src ="./Images/p1/p1WalkLeft.png";
    p1Up.src="./Images/p1/p1WalkUp.png";
    p1Down.src="./Images/p1/p1WalkDown.png"
    //Drawing Player
    for (let i = 0; i < g.playerArr.length; i++) {
        g.drawPlayer(g.playerArr[i]);
    }
    if (playerOneDead) {
        let spriteWidth = 64;
        let spriteHeight = 50;
        let spriteScale = 1.3;
        let frameRate = 10;
        let totalFrames = frameRate * 8;
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Right, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, playerOneX - 22, playerOneY - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
    if (playerTwoDead) {
        let spriteWidth = 64;
        let spriteHeight = 50;
        let spriteScale = 1.3;
        let frameRate = (-bomberSpeed * 2) + 10;
        let totalFrames = frameRate * 8;
        if(frameCounter2 < totalFrames){
            ctx.drawImage(p1Right, spriteWidth*ssNum2, 0, spriteWidth, spriteHeight, playerTwoX - 22, playerTwoY - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        if(frameCounter2 % frameRate == 0){
            ssNum2++;
        }
        if(frameCounter2 == totalFrames - 1){
            ssNum2=0;
            frameCounter2 = 0;
        }
        frameCounter2++;
    }



    //P1 SPRITES
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////




    let spriteWidth = 64;
    let spriteHeight = 50;
    let spriteScale = 1.3;
    let frameRate = (-g.playerArr[0].speed * 1.5) + 10;
    let totalFrames = frameRate * 8;

    //P1 ANIMATIONS
    //IDLE ANIMATION
    function drawImgIdle(){
        switch(lastPressed){
            case "up":
                idleDecider = p1Up;
                break;
            case "down":
                idleDecider = p1Down;
                break;
            case "left":
                idleDecider = p1Left;
                break;
            case "right":
                idleDecider = p1Right;
                break;
        }
        if(frameCounter < totalFrames){
            ctx.drawImage(idleDecider, 0, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 22, g.playerArr[0].y - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        if(frameCounter == totalFrames - 1){
            ssNum=0;
            frameCounter = 0;
        }
        frameCounter++;
    }
    //WALK RIGHT
    function drawImgRight(){
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Right, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 22, g.playerArr[0].y - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
    //WALK LEFT
    function drawImgLeft(){
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Left, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 22, g.playerArr[0].y - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);

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
    //WALK UP
    function drawImgUp(){
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Up, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 22, g.playerArr[0].y - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
    //WALK DOWN
    function drawImgDown(){
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Down, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 22, g.playerArr[0].y - 34, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
    //END P1 ANIMATIONS

    if (g.playerArr[0].moveLeft == true && g.playerArr[0].moveRight == true && g.playerArr[0].moveUp == true){
        drawImgUp()
    }
    else if (g.playerArr[0].moveLeft == true && g.playerArr[0].moveRight == true && g.playerArr[0].moveDown == true){
        drawImgDown()
    }else if  
        (  g.playerArr[0].moveLeft == true && g.playerArr[0].moveRight == true
        || g.playerArr[0].moveUp == true && g.playerArr[0].moveDown == true
        || g.playerArr[0].moveLeft == true && g.playerArr[0].moveRight == true && g.playerArr[0].moveUp == true && g.playerArr[0].moveDown == true
        || g.playerArr[0].moveLeft == true && g.playerArr[0].moveRight == true && g.playerArr[0].moveUp == true && g.playerArr[0].moveDown == true
        || g.playerArr[0].moveLeft == false && g.playerArr[0].moveRight == false && g.playerArr[0].moveUp == false && g.playerArr[0].moveDown == false
    ){
        drawImgIdle()
    }
    else if(g.playerArr[0].moveLeft == true){
        drawImgLeft()
    }else if(g.playerArr[0].moveRight == true){
        drawImgRight()
    }else if(g.playerArr[0].moveUp == true){
        drawImgUp()
    }else if(g.playerArr[0].moveDown == true){
        drawImgDown()
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    //P2 SPRITES
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    var p2Right = new Image();
    var p2Left = new Image();
    var p2Up = new Image();
    var p2Down = new Image();


    p2Right.src="./Images/p2/p2WalkRight.png";
    p2Left.src ="./Images/p2/p2WalkLeft.png";
    p2Up.src="./Images/p2/p2WalkUp.png";
    p2Down.src="./Images/p2/p2WalkDown.png"


    let spriteWidth2 = 64;
    let spriteHeight2 = 53;
    let spriteScale2 = 1.3;
    let frameRate2 = (-g.playerArr[1].speed * 1.5) + 10;
    let totalFrames2 = frameRate2 * 8;

    //P2 ANIMATIONS
    //IDLE ANIMATION
    function drawImgIdle2(){
        switch(lastPressed2){
            case "ArrowUp":
                idleDecider2 = p2Up;
                break;
            case "ArrowDown":
                idleDecider2 = p2Down;
                break;
            case "ArrowLeft":
                idleDecider2 = p2Left;
                break;
            case "ArrowRight":
                idleDecider2 = p2Right;
                break;
        }
        if(frameCounter2 < totalFrames2){
            ctx.drawImage(idleDecider2, 0, 0, spriteWidth2, spriteHeight2, g.playerArr[1].x - 22, g.playerArr[1].y - 34, spriteWidth2*spriteScale2, spriteHeight2*spriteScale2);
        }
        if(frameCounter2 == totalFrames2 - 1){
            ssNum2=0;
            frameCounter2 = 0;
        }
        frameCounter2++;
    }
    //WALK RIGHT
    function drawImgRight2(){
        if(frameCounter2 < totalFrames2){
            ctx.drawImage(p2Right, spriteWidth2*ssNum2, 0, spriteWidth2, spriteHeight2, g.playerArr[1].x - 22, g.playerArr[1].y - 34, spriteWidth2*spriteScale2, spriteHeight2*spriteScale2);
        }
        if(frameCounter2 % frameRate2 == 0){
            ssNum2++;
        }
        if(frameCounter2 == totalFrames2 - 1){
            ssNum2=0;
            frameCounter2 = 0;
        }
        frameCounter2++;
    }
    //WALK LEFT
    function drawImgLeft2(){
        if(frameCounter2 < totalFrames2){
            ctx.drawImage(p2Left, spriteWidth2*ssNum2, 0, spriteWidth2, spriteHeight2, g.playerArr[1].x - 22, g.playerArr[1].y - 34, spriteWidth2*spriteScale2, spriteHeight2*spriteScale2);

        }
        if(frameCounter2 % frameRate2 == 0){
            ssNum2++;
        }
        if(frameCounter2 == totalFrames2 - 1){
            ssNum2=0;
            frameCounter2 = 0;
        }
        frameCounter2++;
    }
    //WALK UP
    function drawImgUp2(){
        if(frameCounter2 < totalFrames2){
            ctx.drawImage(p2Up, spriteWidth2*ssNum2, 0, spriteWidth2, spriteHeight2, g.playerArr[1].x - 22, g.playerArr[1].y - 34, spriteWidth2*spriteScale2, spriteHeight2*spriteScale2);
        }
        if(frameCounter2 % frameRate2 == 0){
            ssNum2++;
        }
        if(frameCounter2 == totalFrames2 - 1){
            ssNum2=0;
            frameCounter2 = 0;
        }
        frameCounter2++;
    }
    //WALK DOWN
    function drawImgDown2(){
        if(frameCounter2 < totalFrames2){
            ctx.drawImage(p2Down, spriteWidth2*ssNum2, 0, spriteWidth2, spriteHeight2, g.playerArr[1].x - 22, g.playerArr[1].y - 34, spriteWidth2*spriteScale2, spriteHeight2*spriteScale2);
        }
        if(frameCounter2 % frameRate2 == 0){
            ssNum2++;
        }
        if(frameCounter2 == totalFrames2 - 1){
            ssNum2=0;
            frameCounter2 = 0;
        }
        frameCounter2++;
    }
    //END P2 ANIMATIONS

    if (g.playerArr[1].moveLeft == true && g.playerArr[1].moveRight == true && g.playerArr[1].moveUp == true){
        drawImgUp2()
    }
    else if (g.playerArr[1].moveLeft == true && g.playerArr[1].moveRight == true && g.playerArr[1].moveDown == true){
        drawImgDown2()
    }else if  
        (  g.playerArr[1].moveLeft == true && g.playerArr[1].moveRight == true
        || g.playerArr[1].moveUp == true && g.playerArr[1].moveDown == true
        || g.playerArr[1].moveLeft == true && g.playerArr[1].moveRight == true && g.playerArr[1].moveUp == true && g.playerArr[1].moveDown == true
        || g.playerArr[1].moveLeft == true && g.playerArr[1].moveRight == true && g.playerArr[1].moveUp == true && g.playerArr[1].moveDown == true
        || g.playerArr[1].moveLeft == false && g.playerArr[1].moveRight == false && g.playerArr[1].moveUp == false && g.playerArr[1].moveDown == false
    ){
        drawImgIdle2()
    }
    else if(g.playerArr[1].moveLeft == true){
        drawImgLeft2()
    }else if(g.playerArr[1].moveRight == true){
        drawImgRight2()
    }else if(g.playerArr[1].moveUp == true){
        drawImgUp2()
    }else if(g.playerArr[1].moveDown == true){
        drawImgDown2()
    }

    // // //DEATH CHECKS
    // if(g.playerArr[0] !== ''){
    //     g.playerArr[0].deathCheck();
    // }
    // if(g.playerArr[1] !== ''){
    //     g.playerArr[1].deathCheck();
    // }




    //END P2
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////




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
        ssNum = 0;
        frameCounter = 0;
        lastPressed = "down";
    }
    if(e.key === "w"){
        g.playerArr[0].moveUp = false;
        ssNum = 0;
        frameCounter = 0;
        lastPressed = "up";
    }
    if(e.key === "a"){
        g.playerArr[0].moveLeft = false;
        ssNum = 0;
        frameCounter = 0;
        lastPressed = "left"
    }
    if(e.key === "d"){
        g.playerArr[0].moveRight = false;
        ssNum = 0;
        frameCounter = 0;
        lastPressed = "right"
    }
    
    //P2
    if(e.key === "ArrowDown"){
        g.playerArr[1].moveDown = false;
        ssNum2 = 0;
        frameCounter2 = 0;
        lastPressed2 = "ArrowDown";
    }
    if(e.key === "ArrowUp"){
        g.playerArr[1].moveUp = false;
        ssNum2 = 0;
        frameCounter2 = 0;
        lastPressed2 = "ArrowUp";
    }
    if(e.key === "ArrowLeft"){
        g.playerArr[1].moveLeft = false;
        ssNum2 = 0;
        frameCounter2 = 0;
        lastPressed2 = "ArrowLeft"
    }
    if(e.key === "ArrowRight"){
        g.playerArr[1].moveRight = false;
        ssNum2 = 0;
        frameCounter2 = 0;
        lastPressed2 = "ArrowRight"
    }
} //END PLAYER 1 COMMANDS
