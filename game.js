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


function mainLoop(){
    ctx.clearRect(0, 0, 800, 600);
    g.createPlayer('red');
}


document.querySelector('#start-game').onclick = () =>{
    mainLoop();
}