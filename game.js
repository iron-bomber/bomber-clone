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
        this.bombArr = [];
    }

    generatePowerUps(){


    }

    // Randomly generates rocks into the 2d Array bombMap
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
}


let g = new Game();
g.createPlayer('red');
// Randomly generate rocks on map
g.generateRocks();

console.log(bombMap);
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

    //Loop this function 60fps
    requestAnimationFrame(mainLoop);

}


// document.querySelector('#start-game').onclick = () =>{
//     mainLoop();
// }


//PLAYER COMMANDS
document.onkeypress = function(e){
    console.log(e.keyCode);
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
        if (bombMap[g.playerArr[0].iGrid][g.playerArr[0].jGrid] === 'free') {
            let newBomb = (new Bomb('red', g.playerArr[0].iGrid, g.playerArr[0].jGrid, 1));
            newBomb.gridPlacer();
            newBomb.timerExplode();
            g.bombArr.push(newBomb);
        }
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