class Game {

    constructor(){
        this.playerArr = [];
        this.spriteArr = [];
        this.bombMap = [];
    }

    // Randomly generates rocks into the 2d Array m.bombMap
    generateRocks() {
        for (let i = 1; i < m.bombMap.length-1; i++) {
            for(let j = 1; j < m.bombMap.length-1; j++) {
                if (m.bombMap[i][j] === 'wall') {
                    continue;
                }else if ((j < 3 || j > 13) && (i === 1 || i === 15)) {
                    continue;
                } else if ((i < 3 || i > 13) && (j === 1 || j === 15)) {
                    continue;
                } else {
                    if (Math.random() > 0.25) {
                        m.bombMap[i][j] = 'rock';
                    }
                }
            }
        }

    }
    // Creates bomber and places him in bomber array
    createPlayer(color, x, y, iGrid, jGrid, num) {
        this.playerArr.push(new Bomber(color, x, y, iGrid, jGrid, num)); 
    }

    // Creates a sprite for each bomber
    createSprite(left, right, up, down, death, lastPressed, bomberID, height) {
        this.spriteArr.push(new Sprite(left, right, up, down, death, lastPressed, bomberID, height));
    }

    //Draws the map based on the 2d Array m.bombMap
    createMap() {
        var leftWall = new Image();
        leftWall.src="./Images/leftWall.png";
        var rock = new Image();
        rock.src="./Images/rock.png";
        let xCoord = 0;
        let yCoord = 0;
        for(let i = 0; i < m.bombMap.length; i++) {
            for (let j = 0; j < m.bombMap.length; j++) {
                if (m.bombMap[i][j] === 'wall') {
                    ctx.drawImage(rock, 256, 128, 64, 64, xCoord, yCoord, 50, 50);
                    xCoord += 50;
                } else if (m.bombMap[i][j] === 'rock') {
                    ctx.drawImage(rock, 0, 128, 64, 64, xCoord, yCoord, 50, 50);
                    xCoord += 50;
                }else if (typeof m.bombMap[i][j] === 'object') {
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    //bomb Gray
                    ctx.fillStyle = '#C0C0C0';
                    ctx.beginPath();
                    ctx.arc(xCoord + 25, yCoord + 25, 12, 0, 2 * Math.PI);
                    ctx.fill();
                    xCoord += 50;
                } else if (typeof m.bombMap[i][j] === 'number') {
                    // ctx.fillStyle = 'green';
                    // ctx.fillRect(xCoord, yCoord, 50, 50);
                    //explosion orange
                    ctx.fillStyle = '#FF9900';
                    ctx.fillRect(xCoord, yCoord, 50, 50);
                    xCoord += 50;
                } else if(m.bombMap[i][j] === 'bombpower'){
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'red';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;
                }
                else if(m.bombMap[i][j] === 'extrabomb'){
                    ctx.drawImage(rock, 128, 64, 64, 64, xCoord, yCoord, 50, 50);
                    ctx.fillStyle = 'cyan';
                    ctx.fillRect(xCoord+15, yCoord+15, 20, 20);
                    xCoord += 50;
                }
                else if(m.bombMap[i][j] === 'speed'){
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

function mainLoop(){

    console.log(playersLeft)
    if (playersLeft === 1) {
        for(let i = 0; i < g.playerArr.length; i++) {
            if (typeof g.playerArr[i] === 'object') {
                playerScores[`p${i+1}`] += 1;
                for (let j = 0; j < numOfPlayers; j++) {
                    console.log(`Player ${j+1} score: ${playerScores[`p${j+1}`]}`);
                }
            }
        }

        playersLeft = 0;
        setTimeout(()=>{
            initializeGame();
        }, 5000)
    }
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
        g.spriteArr[0].drawDeath(playerOneX, playerOneY);
    }
    if (playerTwoDead) {
        g.spriteArr[1].drawDeath(playerTwoX, playerTwoY);
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
    if(e.key === "s" || e.key === "S"){
        g.playerArr[0].moveDown = true;
    }
    if(e.key === "w" || e.key === "W"){
        g.playerArr[0].moveUp = true;
    }
    if(e.key === "a" || e.key === "A"){
        g.playerArr[0].moveLeft = true;
    }
    if(e.key === "d" || e.key === "D"){
        g.playerArr[0].moveRight = true;
    }
    // Drop bomb
    if(e.keyCode === 32){
        e.preventDefault();
        if(g.playerArr[0].bombAmmo > 0){
            if (m.bombMap[g.playerArr[0].iGrid][g.playerArr[0].jGrid] === 'free') {
                // Create new bomb (player, player Y, player X, player bomb power, bomb ID)
                let newBomb = (new Bomb(g.playerArr[0], g.playerArr[0].iGrid, g.playerArr[0].jGrid, g.playerArr[0].bombPower, bombIDs));
                bombIDs++;
                newBomb.gridPlacer();
                newBomb.timerExplode();
                g.playerArr[0].bombAmmo -= 1;
            }
        }
    }
    
}

document.onkeydown = function(e){
        //P2
        if(e.key === "ArrowDown"){
            e.preventDefault()
            g.playerArr[1].moveDown = true;
        }
        if(e.key === "ArrowUp"){
            e.preventDefault()
            g.playerArr[1].moveUp = true;
        }
        if(e.key === "ArrowLeft"){
            g.playerArr[1].moveLeft = true;
        }
        if(e.key === "ArrowRight"){
            g.playerArr[1].moveRight = true;
        }
        if(e.keyCode === 16){
            e.preventDefault();
            if(g.playerArr[1].bombAmmo > 0){
                if (m.bombMap[g.playerArr[1].iGrid][g.playerArr[1].jGrid] === 'free') {
                    let newBomb = (new Bomb(g.playerArr[1], g.playerArr[1].iGrid, g.playerArr[1].jGrid, g.playerArr[1].bombPower, bombIDs));
                    bombIDs++;
                    newBomb.gridPlacer();
                    newBomb.timerExplode();
                    g.playerArr[1].bombAmmo -= 1;
                }
            }
        }
}

document.onkeyup = function(e){
    if(e.key === "s" || e.key === "S"){
        g.playerArr[0].moveDown = false;
        g.spriteArr[0].lastPressed = "down";
    }
    if(e.key === "w" || e.key === "W"){
        g.playerArr[0].moveUp = false;
        g.spriteArr[0].lastPressed = "up";
    }
    if(e.key === "a" || e.key === "A"){
        g.playerArr[0].moveLeft = false;
        g.spriteArr[0].lastPressed = "left"
    }
    if(e.key === "d" || e.key === "D"){
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

let g;
let m;
function initializeGame() {
    g = new Game();
    m = new BombMap();
    playerOneDead = false;
    playerTwoDead = false;
    g.createPlayer('red', 60, 75, 1, 1, 1);
    g.createSprite(p1Left, p1Right, p1Up, p1Down, p1Death, 'down', 0, spriteHeight1);
    g.createPlayer('blue', 760, 760, 15, 15, 2);
    g.createSprite(p2Left, p2Right, p2Up, p2Down, p2Death, 'down', 1, spriteHeight2);
    numOfPlayers = g.playerArr.length;
    playersLeft = g.playerArr.length;
    g.generateRocks();
}

initializeGame();
mainLoop();




