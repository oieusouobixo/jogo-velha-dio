var selectedPlayer = document.getElementById('selected-player');
var selectedWinner = document.getElementById('selected-winner');

var player, winner = null;

changePlayer('X');

function chooseSquare(id) {
    if (winner !== null) {
        return;
    }

    var square = document.getElementById(id);
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
    var squareOne = document.getElementById(1);
    var squareTwo = document.getElementById(2);
    var squareThree = document.getElementById(3);
    var squareFour = document.getElementById(4);
    var squareFive = document.getElementById(5);
    var squareSix = document.getElementById(6);
    var squareSeven = document.getElementById(7);
    var squareEight = document.getElementById(8);
    var squareNine = document.getElementById(9);

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
    var isequal = false;

    if (squareOne.textContent !== '-' && squareOne.textContent === squareTwo.textContent && squareTwo.textContent === squareThree.textContent) {
        isequal = true;
    }

    return isequal;
}

function restart() {
    winner = null;
    selectedWinner.textContent = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#eeeeee';
        square.style.color = '#eeeeee';
        square.textContent = '-';
    }
    
    changePlayer('X');
}