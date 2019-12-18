
//get the on-click function for the squares
//set-up the colors for the squares and make sure they are aligned
//make sure the squares are random each time. EX: 0 equals X, 1 equals O
//if a == b & a == c, display WIN above all boxes
//remember to add float to boxes so they align properly

var tic = document.querySelectorAll('.box')
var win_or_draw = document.getElementById('win_or_draw')
var gameboard = document.getElementsByClassName('board')
var player = 1

for (let i = 0; i < tic.length; i++) {

    tic[i].addEventListener('click', function() {

        if(tic[i].innerText == 'X' || tic[i].innerText == 'O'){
            return;

        }else {

            if(player == 1) {
                tic[i].classList.add('X_val')
                tic[i].innerText = 'X';
                player = 0;


            }else if(player == 0) {
                tic[i].classList.add('O_val')
                tic[i].innerText = 'O';
                player = 1
            }
            
        } 

        var zero = tic[0].innerText
        var one = tic[1].innerText
        var two = tic[2].innerText
        var three = tic[3].innerText
        var four = tic[4].innerText
        var five = tic[5].innerText
        var six = tic[6].innerText
        var seven = tic[7].innerText
        var eight = tic[8].innerText

        //All winning possibilities
        var winnings = [[zero, one, two], [three, four, five], [six, seven, eight], [zero, three, six], [one, four, seven], [two, five, eight], [zero, four, eight], [two, four, six]];

        // if (gameboard == winnings[j] && gameboard != '') {
        //     win_or_draw.classList.add("winner");
        //     win_or_draw.innerText = "WINNER!";
        //     return;
        // }
        
        // else {
        //     //if nothing matches: 
        //     win_or_draw.classList.add("draw")
        //     win_or_draw.innerText = "DRAW"
        // }

        
    })
    

}




// //All winning possibilites

// if(tic[i].innerText == 'X' || tic[i].innerText == 'O') {

//     if(tic[0].innerText == tic[1].innerText && tic[0].innerText == tic[2].innerText){

//         win_or_draw.classList.add("winner");
//         win_or_draw.innerText = "WINNER!";
//         return;

//     }
    
//     if(tic[3].innerText == tic[4].innerText && tic[3].innerText == tic[5].innerText){

//         win_or_draw.classList.add("winner");
//         win_or_draw.innerText = "WINNER!";
//         return;

//     }

// }

// if(tic[6].innerText == tic[7].innerText && tic[6].innerText == tic[8].innerText) {

//     win_or_draw.classList.add("winner")
//     win_or_draw.innerText = "WINNER!"

// }

// if(tic[0].innerText == tic[3].innerText && tic[0].innerText == tic[6].innerText) {

//     win_or_draw.classList.add("winner")
//     win_or_draw.innerText = "WINNER!"

// }

// if(tic[1].innerText == tic[4].innerText && tic[1].innerText == tic[7].innerText){

//     win_or_draw.classList.add("winner")
//     win_or_draw.innerText = "WINNER!"

// }

// if(tic[2].innerText == tic[5].innerText && tic[2].innerText == tic[8].innerText){

//     win_or_draw.classList.add("winner")
//     win_or_draw.innerText = "WINNER!"

// }

// if(tic[0].innerText == tic[4].innerText && tic[0].innerText == tic[8].innerText){

//     win_or_draw.classList.add("winner")
//     win_or_draw.innerText = "WINNER!"

// }

// if(tic[2].innerText == tic[4].innerText && tic[2].innerText == tic[6].innerText) {

//     win_or_draw.classList.add("winner")
//     win_or_draw.innerText = "WINNER!"

// }