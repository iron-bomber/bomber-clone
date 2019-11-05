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

    //RESETTING THE GAME
    console.log(gameComplete)
    if (playersLeft === 1) {
        for(let i = 0; i < g.playerArr.length; i++) {
            if (typeof g.playerArr[i] === 'object') {
                playerScores[`p${i+1}`] += 1;
                for (let j = 0; j < numOfPlayers; j++) {
                }
            }
        }
        for(let i = 0; i < g.playerArr.length; i++) {
            if (typeof g.playerArr[i] === 'object') {
                if(playerScores[`p${i+1}`] > 0){
                    gameComplete = true;
                }
            }
        }
        playersLeft = 0;
        gameReset = true;
        if (gameComplete == true){
            commands();
        }else{
            setTimeout(()=>{
                initializeGame();
            }, 5000)
        }
    }//END RESETTING

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
    // Updates player attributes
    for (let i = 0; i < g.playerArr.length; i++) {
        document.getElementById(`p${i+1}-pwr`).innerText = `Bomb Power: ${g.playerArr[i].bombPower}`;
        document.getElementById(`p${i+1}-bmb`).innerText = `Total Bombs: ${g.playerArr[i].bombAmmo}`;
        document.getElementById(`p${i+1}-spd`).innerText = `Speed: ${g.playerArr[i].speed}`;
    }

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
    if(gameComplete == true){
        //EVENTUALLY GO TO SCORE SCREEN
        console.log('happ')
        ctx.font = "30px Arial";
        ctx.fillText(`Space to restart :)`, 350, 400);
        //////
    }

    //Loop this function 60fps
    if(!stopMainLoop){
        requestAnimationFrame(mainLoop);
    }
}// END OF MAIN LOOP




// document.querySelector('#start-game').onclick = () =>{
//     mainLoop();
// }s

//PLAYER COMMANDS
function commands(){
    if(gameRunning == false){ //Startscreen commands
        document.onkeydown = function(e){
            if(e.key === "s" || e.key === "S"){
                
                s.movePosition(s.p1, "s");
            }
            if(e.key === "w" || e.key === "W"){
                s.movePosition(s.p1, "w");
            }
            if(e.key === "a" || e.key === "A"){
                s.movePosition(s.p1, "a");
            }
            if(e.key === "d" || e.key === "D"){
                s.movePosition(s.p1, "d");
            }
            // Drop bomb
            if(e.keyCode === 32){
                e.preventDefault();
                s.movePosition(s.p1, "spacebar");
            }
            if(e.key === "ArrowDown"){
                e.preventDefault()
                s.movePosition(s.p2, "s");
                console.log('p2 s')
            }
            if(e.key === "ArrowUp"){
                e.preventDefault()
                s.movePosition(s.p2, "w");
            }
            if(e.key === "ArrowLeft"){
                s.movePosition(s.p2, "a");
            }
            if(e.key === "ArrowRight"){
                s.movePosition(s.p2, "d");
            }
            if(e.keyCode === 16){
                e.preventDefault();
                s.movePosition(s.p2, "spacebar");
            }
            
        }
    }else{ //In game commands
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
            if(!gameComplete){
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
            }else{
                if(e.keyCode === 32){
                    e.preventDefault();
                    restartSession();
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
    
    }
}


let g;
let m;
function initializeGame() {
    console.log('initializeGame')
    g = new Game();
    m = new BombMap();
    playerOneDead = false;
    playerTwoDead = false;
    
    spriteChooser();
    g.createPlayer('red', 60, 75, 1, 1, 1);
    console.log(p11, p12, p13, p14, p15)
    g.createSprite(p11, p12, p13, p14, p15, 'down', 0, spriteHeight1);
    g.createPlayer('blue', 760, 760, 15, 15, 2);
    g.createSprite(p21, p22, p23, p24, p25, 'down', 1, spriteHeight2);
    numOfPlayers = g.playerArr.length;
    playersLeft = g.playerArr.length;
    g.generateRocks();
    setTimeout(() => {
        gameReset = false;
    }, 2999);
}

function mainLoopable(){
    console.log('mainloopable')
    if(gameRunning == false){
        stopMainLoop = false;
        mainLoop();
    }
}

function invisStartButton(){
    document.querySelector('.startbutton').disabled = true;
}

class Startscreen{
    constructor(){
        this.p1 = {
            exists: true,
            position: 1
        };
        this.p2 = {
            exists: true,
            position: 1
        };
        this.p3 = {
            exists: false,
            position: 1
        };
        this.p4 = {
            exists: false,
            position: 1
        };
        this.sprite1 = true;
        this.sprite2 = true;
        this.sprite3 = true;
        this.sprite4 = true;

    }

    movePosition(player, input){
        
        switch(input){
            case "w":
                
                if(player.position == 3){
                    player.position = 1;
                }
                if(player.position == 4){
                    player.position = 2;
                }
                if(player.position == 5){
                    player.position = 3;
                }
                if(player.position == 6){
                    player.position = 4;
                }
                break;
            case "a":
                
                if(player.position == 2){
                    player.position = 1;
                }
                if(player.position == 4){
                    player.position = 3;
                }
                if(player.position == 6){
                    player.position = 5;
                }
                break;
            case "s":
                
                if(player.position == 1){
                    player.position = 3;
                }
                else if(player.position == 2){
                    player.position = 4;
                }
                else if(player.position == 3){
                    player.position = 5;
                }
                else if(player.position == 4){
                    player.position = 6;
                }
                break;
            case "d":
                
                if(player.position == 1){
                    player.position = 2;
                }
                if(player.position == 3){
                    player.position = 4;
                }
                if(player.position == 5){
                    player.position = 6;
                }
                break;
            case "spacebar":
                
                
                if(player.exists == true){
                    if(player.position == 1 && this.sprite1 == true){
                        this.sprite1 = false;
                        player.exists = false;
                        //The Player.id gets that sprite
                    }
                    if(player.position == 2  && this.sprite2 == true){
                        this.sprite2 = false;
                        player.exists = false;
                        //The Player.id gets that sprite
                    }
                    if(player.position == 3  && this.sprite3 == true){
                        this.sprite3 = false;
                        player.exists = false;
                        //The Player.id gets that sprite
                    }
                    if(player.position == 4  && this.sprite4 == true){
                        this.sprite4 = false;
                        player.exists = false;
                        //The Player.id gets that sprite
                    }
                }
                break;
        }
    }

    drawBorder(player){
        
        if(player.exists == true){
            if(player.position == 1){
                ctx.drawImage(border, 0, 0, 560, 939, 170, 125, 190, 180);//Top Left
            }
            if(player.position == 2){
                ctx.drawImage(border, 0, 0, 560, 939, 468, 125, 190, 180);//Top Right
            }
            if(player.position == 3){
                ctx.drawImage(border, 0, 0, 560, 939, 170, 325, 190, 180);//Bottom Left
            }
            if(player.position == 4){
                ctx.drawImage(border, 0, 0, 560, 939, 468, 325, 190, 180);//Bottom Right
            }
            if(player.position == 5){
                ctx.drawImage(border2, 0, 0, 940, 560, 268, 545, 320, 140);//Ready button
            }
            if(player.position == 6){
                ctx.drawImage(border2, 0, 0, 940, 560, 268, 545, 320, 140);//Ready button
            }
        }
    }

    drawIcons(){
        if(this.sprite1){
            ctx.drawImage(p1Icon, 0, 0, iconWidth, spriteHeight1, 200, 150, 150, 130);
        }else{
            ctx.globalAlpha = .5;
            ctx.drawImage(p1Icon, 0, 0, iconWidth, spriteHeight1, 200, 150, 150, 130);
            ctx.globalAlpha = 1;
        }
        if(this.sprite2){
            ctx.drawImage(p2Icon, 0, 0, iconWidth, spriteHeight2, 505, 150, 150, 130);
        }else{
            ctx.globalAlpha = .5;
            ctx.drawImage(p2Icon, 0, 0, iconWidth, spriteHeight2, 505, 150, 150, 130);
            ctx.globalAlpha = 1;
        }
        if(this.sprite3){
            ctx.drawImage(p3Icon, 0, 0, iconWidth, spriteHeight1, 205, 350, 150, 130);
        }else{
            ctx.globalAlpha = .5;
            ctx.drawImage(p3Icon, 0, 0, iconWidth, spriteHeight1, 205, 350, 150, 130);
            ctx.globalAlpha = 1;
        }
        if(this.sprite4){
            ctx.drawImage(p4Icon, 0, 0, iconWidth, spriteHeight1, 500, 350, 150, 130);
        }else{
            ctx.globalAlpha = .5;
            ctx.drawImage(p4Icon, 0, 0, iconWidth, spriteHeight1, 500, 350, 150, 130);
            ctx.globalAlpha = 1;
        }
    }
}

function spriteChooser(){
    console.log('choosing')
    switch (s.p1.position){
        case 1:
            p11 = p1Left;
            p12 = p1Right;
            p13 = p1Up;
            p14 = p1Down;
            p15 = p1Death;
            break;
        case 2:
            p11 = p2Left;
            p12 = p2Right;
            p13 = p2Up;
            p14 = p2Down;
            p15 = p2Death;
            break;
        case 3:
            p11 = p3Left;
            p12 = p3Right;
            p13 = p3Up;
            p14 = p3Down;
            p15 = p3Death;
            break;
        case 4:
            p11 = p4Left;
            p12 = p4Right;
            p13 = p4Up;
            p14 = p4Down;
            p15 = p4Death;
            break;
    }
    switch (s.p2.position){
        case 1:
            p21 = p1Left;
            p22 = p1Right;
            p23 = p1Up;
            p24 = p1Down;
            p25 = p1Death;
            break;
        case 2:
            p21 = p2Left;
            p22 = p2Right;
            p23 = p2Up;
            p24 = p2Down;
            p25 = p2Death;
            break;
        case 3:
            p21 = p3Left;
            p22 = p3Right;
            p23 = p3Up;
            p24 = p3Down;
            p25 = p3Death;
            break;
        case 4:
            p21 = p4Left;
            p22 = p4Right;
            p23 = p4Up;
            p24 = p4Down;
            p25 = p4Death;
            break;
    }
    switch (s.p3.position){
        case 1:
            p31 = p1Left;
            p32 = p1Right;
            p33 = p1Up;
            p34 = p1Down;
            p35 = p1Death;
            break;
        case 2:
            p31 = p2Left;
            p32 = p2Right;
            p33 = p2Up;
            p34 = p2Down;
            p35 = p2Death;
            break;
        case 3:
            p31 = p3Left;
            p32 = p3Right;
            p33 = p3Up;
            p34 = p3Down;
            p35 = p3Death;
            break;
        case 4:
            p31 = p4Left;
            p32 = p4Right;
            p33 = p4Up;
            p34 = p4Down;
            p35 = p4Death;
            break;
    }
    switch (s.p4.position){
        case 1:
            p41 = p1Left;
            p42 = p1Right;
            p43 = p1Up;
            p44 = p1Down;
            p45 = p1Death;
            break;
        case 2:
            p41 = p2Left;
            p42 = p2Right;
            p43 = p2Up;
            p44 = p2Down;
            p45 = p2Death;
            break;
        case 3:
            p41 = p3Left;
            p42 = p3Right;
            p43 = p3Up;
            p44 = p3Down;
            p45 = p3Death;
            break;
        case 4:
            p41 = p4Left;
            p42 = p4Right;
            p43 = p4Up;
            p44 = p4Down;
            p45 = p4Death;
            break;
    }
}



function startLoop(){
    console.log('start loop')
    ctx.clearRect(0, 0, 850, 850);
    ctx.drawImage(desertBG, 0, 0, 750, 992, 0, 0, 850, 850);

    //Draw Icons
    s.drawIcons()

    //Draw player borders
    for(let i = 0; i < 4; i++){
        s.drawBorder(s[`p${i+1}`]);
        // s.drawBorder(s.p4)
        
    }
    console.log(gameRunning)
    
    //Draw start button
    ctx.drawImage(startBtn, 0, 0, 380, 170, 270, 550, 300, 130);
    if(gameRunning == false){
        requestAnimationFrame(startLoop);
    }
}

function restartSession(){
    for(let i = 0; i < g.playerArr.length; i++) {
        
        playerScores[`p${i+1}`] = 0;
        
    }
    s = new Startscreen();
    gameRunning = false;
    gameComplete = false;
    stopMainLoop = true;
    document.querySelector('.startbutton').disabled = false;
    startLoop();
    commands();
}

let s = new Startscreen();
startLoop();
commands();