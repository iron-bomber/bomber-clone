class Bomb {
    constructor(owner, iGrid, jGrid, power) {
        this.owner = owner;
        this.iGrid = iGrid;
        this.jGrid = jGrid;
        this.power = power;
        this.exploding = false;
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
                        bombMap[this.iGrid-i][this.jGrid] = 'boom';
                        rockCollide.up = true;
                    } else {
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
                        bombMap[this.iGrid+i][this.jGrid] = 'boom';
                        rockCollide.down = true;
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
                        bombMap[this.iGrid][this.jGrid+i] = 'boom';
                        rockCollide.right = true;
                    } else {
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
                        bombMap[this.iGrid][this.jGrid-i] = 'boom';
                        rockCollide.left = true;
                    } else {
                        rockCollide.left = true;
                    }
                } else {
                    rockCollide.left = true
                }
            }
        }
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