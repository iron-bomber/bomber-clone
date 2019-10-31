const ctx = document.getElementById('main-game-board').getContext('2d'); 
class Game {

    constructor(){
        this.playerArr = [];
    }

    generatePowerUps(){


    }

    generateRocks() {


    }

    createPlayer(color) {
        this.playerArr.push(new Bomber(color)); 
        console.log('player created')
    }

    createMap() {


    }
}


let g = new Game();
g.createPlayer('red');

mainLoop()

function mainLoop(){

    //Player 1 Movecheck
    if(g.playerArr[0].moveUp || g.playerArr[0].moveDown || g.playerArr[0].moveLeft || g.playerArr[0].moveRight){
        g.playerArr[0].move();
    }

    //Clear canvas
    ctx.clearRect(0, 0, 750, 750);

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