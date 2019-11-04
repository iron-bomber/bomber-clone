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