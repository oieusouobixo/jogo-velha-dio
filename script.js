let selectedPlayer = document.querySelector('#selected-player');
let selectedWinner = document.querySelector('#selected-winner');

let player, winner = null;

changePlayer('X');

function chooseSquare(id) {
    if (winner !== null) {
        return;
    }

    let square = document.getElementById(id);
    if (square.textContent !== '-') {
        return;
    }

    square.textContent = player;
    square.style.color = '#000000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.textContent = player;
}

function checkWinner() {
    let squareOne = document.querySelector('#1');
    let squareTwo = document.querySelector('#2');
    let squareThree = document.querySelector('#3');
    let squareFour = document.querySelector('#4');
    let squareFive = document.querySelector('#5');
    let squareSix = document.querySelector('#6');
    let squareSeven = document.querySelector('#7');
    let squareEight = document.querySelector('#8');
    let squareNine = document.querySelector('#9');

    if (checkSequence(squareOne, squareTwo, squareThree)) {
        changeSquareColor(squareOne, squareTwo, squareThree);
        changeWinner(squareOne);
        return;
    }
    
    if (checkSequence(squareFour, squareFive, squareSix)) {
        changeSquareColor(squareFour, squareFive, squareSix);
        changeWinner(squareFour);
        return;
    }
    
    if (checkSequence(squareSeven, squareEight, squareNine)) {
        changeSquareColor(squareSeven, squareEight, squareNine);
        changeWinner(squareSeven);
        return;
    }
    
    if (checkSequence(squareOne, squareFour, squareSeven)) {
        changeSquareColor(squareOne, squareFour, squareSeven);
        changeWinner(squareOne);
        return;
    }
    
    if (checkSequence(squareTwo, squareFive, squareEight)) {
        changeSquareColor(squareTwo, squareFive, squareEight);
        changeWinner(squareTwo);
        return;
    }
    
    if (checkSequence(squareThree, squareSix, squareNine)) {
        changeSquareColor(squareThree, squareSix, squareNine);
        changeWinner(squareThree);
        return;
    }
    
    if (checkSequence(squareOne, squareFive, squareNine)) {
        changeSquareColor(squareOne, squareFive, squareNine);
        changeWinner(squareOne);
        return;
    }
    
    if (checkSequence(squareThree, squareFive, squareSeven)) {
        changeSquareColor(squareThree, squareFive, squareSeven);
        changeWinner(squareThree);
    }
}

function changeWinner(square) {
    winner = square.textContent;
    selectedWinner.textContent = winner;
}

function changeSquareColor(squareOne, squareTwo, squareThree) {
    squareOne.style.background = '#00ff00';
    squareTwo.style.background = '#00ff00';
    squareThree.style.background = '#00ff00';
}

function checkSequence(squareOne, squareTwo, squareThree) {
    let isequal = false;

    if (squareOne.textContent !== '-' && squareOne.textContent === squareTwo.textContent && squareTwo.textContent === squareThree.textContent) {
        isequal = true;
    }

    return isequal;
}

function restart() {
    winner = null;
    selectedWinner.textContent = '';

    for (let i = 1; i <= 9; i++) {
        let square = document.getElementById(i);
        square.style.background = '#eeeeee';
        square.style.color = '#eeeeee';
        square.textContent = '-';
    }
    
    changePlayer('X');
}