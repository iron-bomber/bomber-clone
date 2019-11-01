const ctx = document.getElementById('main-game-board').getContext('2d');
const bombMap = [
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']
];

const bomberLocations = [
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free', 'wall', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']
];

class Game {

    constructor(){
        this.playerArr = [];
    }

    generatePowerUps(){


    }

    generateRocks() {
        for (let i = 0; i < bombMap.length; i++) {
            for(let j = 0; j < bombMap.length; j++) {
                if (bombMap[i][j] === 'wall') {
                    continue;
                }else if ((j < 2 || j > 12) && (i === 0 || i === 14)) {
                    continue;
                } else if ((i < 2 || i > 12) && (j === 0 || j === 14)) {
                    continue;
                } else {
                    if (Math.random() > 0.25) {
                        bombMap[i][j] = 'rock';
                    }
                }
            }
        }

    }

    createPlayer(color) {
        this.playerArr.push(new Bomber(color)); 
        console.log('player created')
    }

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
                }else {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                }
            }
            yCoord += 50;
            xCoord = 0;
        }
    }
}

//SPRITE VARS
let frameCounter = 0;
let ssNum = 0;
let idleDecider;
let lastPressed = 'down';


let g = new Game();
g.createPlayer('red');
// g.generateRocks();
mainLoop()



function mainLoop(){
    
    //GRID PLACER
    g.playerArr[0].gridPlacer();
    //Player 1 Movecheck
    if(g.playerArr[0].moveUp || g.playerArr[0].moveDown || g.playerArr[0].moveLeft || g.playerArr[0].moveRight){
        g.playerArr[0].move();
    }


    //Clear canvas
    ctx.clearRect(0, 0, 750, 750);
    g.createMap();

    //Draw player function
    function drawSelf(u){
        ctx.fillStyle = u.color;
        ctx.fillRect(u.x, u.y, u.width, u.height)
    }


    //Drawing Player
    drawSelf(g.playerArr[0]);

    //P1 SPRITES

    var p1Right = new Image();
    var p1Left = new Image();
    var p1Up = new Image();
    var p1Down = new Image();

    
    p1Right.src="./Images/p1/p1WalkRight.png";
    p1Left.src ="./Images/p1/p1WalkLeft.png";
    p1Up.src="./Images/p1/p1WalkUp.png";
    p1Down.src="./Images/p1/p1WalkDown.png"


    let spriteWidth = 64;
    let spriteHeight = 50;
    let spriteScale = 1;
    let frameRate = 8;
    let totalFrames = frameRate * 8;

//P1 ANIMATIONS
    //IDLE ANIMATION
    function drawImgIdle(){
        console.log('drawing idle')
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
            ctx.drawImage(idleDecider, 0, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        if(frameCounter == totalFrames - 1){
            console.log('resetting')
            ssNum=0;
            frameCounter = 0;
        }
        frameCounter++;
    }
    //WALK RIGHT
    function drawImgRight(){
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Right, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        if(frameCounter % frameRate == 0){
            ssNum++;
        }
        if(frameCounter == totalFrames - 1){
            console.log('resetting')
            ssNum=0;
            frameCounter = 0;
        }
        frameCounter++;
    }
    //WALK LEFT
    function drawImgLeft(){
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Left, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);

        }
        console.log(ssNum)
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
            ctx.drawImage(p1Up, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        console.log(ssNum)
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
            ctx.drawImage(p1Down, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        console.log(ssNum)
        if(frameCounter % frameRate == 0){
            console.log('counting')
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










    //Loop this function 60fps
    requestAnimationFrame(mainLoop);

}



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
    if(e.key === "t"){
        g.playerArr[0].gridPlacer();
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
}