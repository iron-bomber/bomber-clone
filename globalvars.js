let playerOneDead = false;
let playerTwoDead = false;
let playerOneX;
let playerOneY;
let playerTwoX;
let playerTwoY;
let numOfPlayers;
let playersLeft;
let playerScores = {p1: 0, p2: 0, p3: 0, p4: 0};
// SPRITE VARS
let lastPressed = 'down';
let lastPressed2 = 'ArrowDown';
const ctx = document.getElementById('main-game-board').getContext('2d');
// ctx.imageSmoothingEnabled = false;

let bombIDs = 0;

    //Player one
    
    const p1Left = new Image();
    const p1Right = new Image();
    const p1Up = new Image();
    const p1Down = new Image();
    const p1Death = new Image();
    
    
    const spriteHeight1 = 50;
    p1Left.src ="./Images/p1/p1WalkLeft.png";
    p1Right.src="./Images/p1/p1WalkRight.png";
    p1Up.src="./Images/p1/p1WalkUp.png";
    p1Down.src="./Images/p1/p1WalkDown.png";
    p1Death.src="./Images/p1/p1Death.png";
    
    
    
    //Player two
    
    const spriteHeight2 = 53;
    const p2Left = new Image();
    const p2Right = new Image();
    const p2Up = new Image();
    const p2Down = new Image();
    const p2Death = new Image();
    
    p2Death.src="./Images/p2/p2Death.png";
    p2Left.src ="./Images/p2/p2WalkLeft.png";
    p2Right.src="./Images/p2/p2WalkRight.png";
    p2Up.src="./Images/p2/p2WalkUp.png";
    p2Down.src="./Images/p2/p2WalkDown.png";
    
    
    // Randomly generate rocks on map

let bombMap = [
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

let bomberLocations = [
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

const bombMapTemp = [
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

const bomberLocationsTemp = [
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