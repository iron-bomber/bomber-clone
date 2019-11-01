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

class Game {

    constructor(){
        this.playerArr = [];
        this.bombArr = [];
    }

    generatePowerUps(){


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

    createPlayer(color) {
        this.playerArr.push(new Bomber(color)); 
        console.log('player created')
    }

    //Draws a background based on the 2d Array bombMap
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
                } else if (bombMap[i][j] === 'boom') {
                    // ctx.fillStyle = 'green';
                    // ctx.fillRect(xCoord, yCoord, 50, 50);
                    //explosion orange
                    ctx.fillStyle = '#FF9900';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
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

    drawPowers() {
        let xCoord = 50;
        let yCoord = 50;
        for(let i = 1; i < bomberLocations.length -1; i++) {
            for (let j = 1; j < bomberLocations.length -1; j++) {
                if (bomberLocations[i][j] === 'bombpower' || bomberLocations[i][j] === 'extrabomb' || bomberLocations[i][j] === 'speed') {
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                } else {
                    xCoord += 50;
                }
            }
            yCoord += 50;
            xCoord = 50;
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
// Randomly generate rocks on map
// g.generateRocks();
mainLoop();



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
    g.drawPowers();

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
    let frameRate = g.playerArr[0].speed / 2;
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
            ctx.drawImage(idleDecider, 0, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
            ctx.drawImage(p1Right, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
            ctx.drawImage(p1Left, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);

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
            ctx.drawImage(p1Up, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
            ctx.drawImage(p1Down, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 18, g.playerArr[0].y - 28, spriteWidth*spriteScale, spriteHeight*spriteScale);
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
    if(e.keyCode === 32){
        if(g.playerArr[0].bombAmmo > 0){
            if (bombMap[g.playerArr[0].iGrid][g.playerArr[0].jGrid] === 'free') {
                let newBomb = (new Bomb(g.playerArr[0], g.playerArr[0].iGrid, g.playerArr[0].jGrid, g.playerArr[0].bombPower));
                newBomb.gridPlacer();
                newBomb.timerExplode();
                g.bombArr.push(newBomb);
                console.log(g.bombArr);
                g.playerArr[0].bombAmmo -= 1;
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
}