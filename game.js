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

    // generateRocks() {
    //     for (let i = 0; i < bombMap.length; i++) {
    //         for(let j = 0; j < bombMap.length; j++) {
    //             if ((j < 2 || j > 17) && (i === 0 || i === 19)
    //         }
    //     }

    // }

    createPlayer(color) {
        this.playerArr.push(new Bomber(color)); 
        console.log('player created')
    }

    createMap() {
        let xCoord = 0;
        let yCoord = 0;
        for(let i = 0; i < bombMap.length; i++) {
            for (let j = 0; j < bombMap.length; j++) {
                if (bombMap[i][j] === 'free') {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                } else {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                }
            }
            yCoord += 50;
            xCoord = 0;
        }
    }
}


let g = new Game();
g.createPlayer('red');

//SPRITE VARS
let frameCounter = 0;
let ssNum = 1;
let p1Moving;

mainLoop()

function mainLoop(){
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









    //DRAWING SPRITE

    
    var p1Sheet = new Image();
    
    p1Sheet.src="./Images/scp.png";


    let spriteWidth = 108;
    let spriteHeight = 134;
    let spriteScale = .6;
    let frameRate = 20;
    let totalFrames = frameRate * 7;

    if(gplayerArr[0].moveRight == true){
        p1Moving = 4;        
    }

    function drawImg(){
        console.log(ssNum)
        if(frameCounter < totalFrames){
            ctx.drawImage(p1Sheet, spriteWidth*ssNum, 0, spriteWidth, spriteHeight, g.playerArr[0].x - 20, g.playerArr[0].y - 50, spriteWidth*spriteScale, spriteHeight*spriteScale);
        }
        if(frameCounter % frameRate == 0){
            console.log('counting')
            ssNum++;
        }
        if(frameCounter == totalFrames - 1){
            ssNum = 1;
            frameCounter = 0;
        }
        frameCounter++;
    }


    drawImg()










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
    }
    if(e.key === "w"){
        g.playerArr[0].moveUp = false;
    }
    if(e.key === "a"){
        g.playerArr[0].moveLeft = false;
    }
    if(e.key === "d"){
        g.playerArr[0].moveRight = false;
    }
}