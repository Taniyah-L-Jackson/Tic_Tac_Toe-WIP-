var win_or_draw = document.getElementById('win_or_draw')
var gameboard = document.getElementById('board')
var player = 1

gameboard.classList.add('gameboard')
gameboardSize = 9

for (let i = 0; i < gameboardSize; i++) {

    var tile = document.createElement('div');

    tile.classList.add('tile');

    gameboard.appendChild(tile); 

    tile.addEventListener('click', X_or_O)
    
}

//variable list
var X = 'X'
var O = 'O'
var X_or_O = []
var win = false;

//store X and O in an array
X_or_O.push(X)
X_or_O.push(O)

function X_or_O() {

    var random = X_or_O[Math.floor(Math.random() * X_or_O.length)]

    if (!win) {

        if (this.className == 'tile') { 
            
            if (random == X) {

                this.classList.add('X_val')
                this.innerText = 'X'
                
            }else if (random == O) {
                
                this.classList.add('O_val')
                this.innerText = 'O'

            }
        
        } else {
            //if square is full, dont overwrite it
            return;
        } 

    }

}

//All winning possibilities
// var winnings = [[zero, one, two], [three, four, five], [six, seven, eight], [zero, three, six], [one, four, seven], [two, five, eight], [zero, four, eight], [two, four, six]];        

// if (gameboard == winnings[j] && gameboard != '') {
//     win_or_draw.classList.add("winner");
//     win_or_draw.innerText = "WINNER!";
//     return;
// }

//find out how to get the X and O's from the game board
//enable the win statements
//if the win statements show up on the board, the user wins and ends game
