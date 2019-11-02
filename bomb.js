class Bomb {
    constructor(owner, iGrid, jGrid, power) {
        this.owner = owner;
        this.iGrid = iGrid;
        this.jGrid = jGrid;
        this.power = power;
        this.exploding = false;
        this.powerupLocation;
        this.puPositions = []
        this.type = 'bomb';
    }

    placeRandomPowerup(x, y){
        let random = Math.floor(Math.random() * 3);
        let powers = [
            "speed",
            "speed",
            "speed"
        ]
        if(0.1 < Math.random()){
            bomberLocations[x][y] = powers[random];
        }
    }


    explode() {
        bombMap[this.iGrid][this.jGrid] = 'boom';
        let rockCollide = {up: false, down: false, left: false, right: false};
       for (let i = 1; i < this.power+1; i++){
            // Explode above
            if (!rockCollide.up) {
                if (this.iGrid-i >= 0) {
                    if (bombMap[this.iGrid-i][this.jGrid] === 'free') {
                        bombMap[this.iGrid-i][this.jGrid] = 'boom';
                    } else if (bombMap[this.iGrid-i][this.jGrid] === 'rock') {
                        this.puPositions.push([this.iGrid-i])
                        this.puPositions.push([this.jGrid])
                        bombMap[this.iGrid-i][this.jGrid] = 'boom';
                        rockCollide.up = true;
                    } else if (typeof bombMap[this.iGrid-i][this.jGrid] === 'object') {
                        if (bombMap[this.iGrid-i][this.jGrid].type === 'bomb') {
                            bombMap[this.iGrid-i][this.jGrid].exploding = true;
                            bombMap[this.iGrid-i][this.jGrid].explode();
                            rockCollide.up = true;
                        }
                    }else {
                        rockCollide.up = true;
                    }
                } else {
                    rockCollide.up = true
                }
            }
            // Explode below
            if (!rockCollide.down) {
                if (this.iGrid+i < 15) {
                    if (bombMap[this.iGrid+i][this.jGrid] === 'free') {
                        bombMap[this.iGrid+i][this.jGrid] = 'boom';
                    } else if (bombMap[this.iGrid+i][this.jGrid] === 'rock') {
                        this.puPositions.push([this.iGrid+i])
                        this.puPositions.push([this.jGrid])
                        bombMap[this.iGrid+i][this.jGrid] = 'boom';
                        rockCollide.down = true;
                    }else if (typeof bombMap[this.iGrid+i][this.jGrid] === 'object') {
                        if (bombMap[this.iGrid+i][this.jGrid].type === 'bomb') {
                            bombMap[this.iGrid+i][this.jGrid].exploding = true;
                            bombMap[this.iGrid+i][this.jGrid].explode();
                            rockCollide.down = true;
                        }
                    } else {
                        rockCollide.down = true;
                    }
                } else {
                    rockCollide.down = true
                }
            }
            // Explode right
            if (!rockCollide.right) {
                if (this.jGrid+i < 15) {
                    if (bombMap[this.iGrid][this.jGrid+i] === 'free') {
                        bombMap[this.iGrid][this.jGrid+i] = 'boom';
                    } else if (bombMap[this.iGrid][this.jGrid+i] === 'rock') {
                        this.puPositions.push([this.iGrid])
                        this.puPositions.push([this.jGrid+i])
                        bombMap[this.iGrid][this.jGrid+i] = 'boom';
                        rockCollide.right = true;
                    } else if (typeof bombMap[this.iGrid][this.jGrid+i] === 'object') {
                        if (bombMap[this.iGrid][this.jGrid+i].type === 'bomb') {
                            bombMap[this.iGrid][this.jGrid+i].exploding = true;
                            bombMap[this.iGrid][this.jGrid+i].explode();
                            rockCollide.right = true;
                        }
                    }else {
                        rockCollide.right = true;
                    }
                } else {
                    rockCollide.right = true
                }
            }
            // Explode left
            if (!rockCollide.left) {
                if (this.jGrid-i >= 0) {
                    if (bombMap[this.iGrid][this.jGrid-i] === 'free') {
                        bombMap[this.iGrid][this.jGrid-i] = 'boom';
                    } else if (bombMap[this.iGrid][this.jGrid-i] === 'rock') {
                        this.puPositions.push([this.iGrid])
                        this.puPositions.push([this.jGrid-i])
                        bombMap[this.iGrid][this.jGrid-i] = 'boom';
                        rockCollide.left = true;
                    } else if (typeof bombMap[this.iGrid][this.jGrid-i] === 'object') {
                        if (bombMap[this.iGrid][this.jGrid-i].type === 'bomb') {
                            bombMap[this.iGrid][this.jGrid-i].exploding = true;
                            bombMap[this.iGrid][this.jGrid-i].explode();
                            rockCollide.left = true;
                        }
                    }else {
                        rockCollide.left = true;
                    }
                } else {
                    rockCollide.left = true
                }
            }
        }
        this.owner.bombAmmo +=1;
        setTimeout(() => {
            bombMap[this.iGrid][this.jGrid] = 'free';
            let rockCollide = {up: false, down: false, left: false, right: false};
            for (let i = 1; i < this.power+1; i++){
                // Clear above
                if (!rockCollide.up) {
                    if (this.iGrid-i >= 0) {
                        if (bombMap[this.iGrid-i][this.jGrid] === 'boom') {
                            bombMap[this.iGrid-i][this.jGrid] = 'free';
                        } else {
                            rockCollide.up = true;
                        }
                    } else {
                        rockCollide.up = true
                    }
                }
                // Clear below
                if (!rockCollide.down) {
                    if (this.iGrid+i < 15) {
                        if (bombMap[this.iGrid+i][this.jGrid] === 'boom') {
                            bombMap[this.iGrid+i][this.jGrid] = 'free';
                        } else {
                            rockCollide.down = true;
                        }
                    } else {
                        rockCollide.down = true
                    }
                }
                // Clear right
                if (!rockCollide.right) {
                    if (this.jGrid+i < 16) {
                        if (bombMap[this.iGrid][this.jGrid+i] === 'boom') {
                            bombMap[this.iGrid][this.jGrid+i] = 'free';
                        } else {
                            rockCollide.right = true;
                        }
                    } else {
                        rockCollide.right = true
                    }
                }
                // Clear left
                if (!rockCollide.left) {
                    if (this.jGrid-i >= 0) {
                        if (bombMap[this.iGrid][this.jGrid-i] === 'boom') {
                            bombMap[this.iGrid][this.jGrid-i] = 'free';
                        } else {
                            rockCollide.left = true;
                        }
                    } else {
                        rockCollide.left = true
                    }
                }
            }
            console.log(this.puPositions)
            switch(this.puPositions.length){
                case 2:
                    this.placeRandomPowerup(this.puPositions[0], this.puPositions[1]);
                    break;
                case 4:
                    this.placeRandomPowerup(this.puPositions[0], this.puPositions[1]);
                    this.placeRandomPowerup(this.puPositions[2], this.puPositions[3]);
                    break;
                case 6: 
                    this.placeRandomPowerup(this.puPositions[0], this.puPositions[1]);
                    this.placeRandomPowerup(this.puPositions[2], this.puPositions[3]);
                    this.placeRandomPowerup(this.puPositions[4], this.puPositions[5]);
                    break;
                case 8: 
                    this.placeRandomPowerup(this.puPositions[0], this.puPositions[1]);
                    this.placeRandomPowerup(this.puPositions[2], this.puPositions[3]);
                    this.placeRandomPowerup(this.puPositions[4], this.puPositions[5]);
                    this.placeRandomPowerup(this.puPositions[6], this.puPositions[7]);
                    break;
            }
            delete this;
        }, 300)
    }


    timerExplode () {
        setTimeout(() => {
            if (!this.exploding) {
                this.explode();
            }
        }, 3000)       
    }

    gridPlacer () {
        bombMap[this.iGrid][this.jGrid] = this;
    }

}