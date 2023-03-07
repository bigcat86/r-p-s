let userInput;
let computerInput;
let userScore = 0;
let computerScore = 0;
let ties = 0;

function getUserInput() {
    userInput = prompt('Choose: R? P? S?');
    userInput = userInput.toUpperCase();
    if (userInput === 'R' || userInput === 'P' || userInput === 'S') {
        return userInput;
    }else {
        alert('Invalid Input');
        getUserInput();
    }
}

function getComputerInput() {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 0) {
        return computerInput = 'R';
    }else if (randomNumber == 1) {
        return computerInput = 'P';
    }else {
        return computerInput = 'S';
    }
}

function playGame() {
    if (userInput === computerInput) {
        alert('Tie!');
        return ties++;
    }else if (userInput === 'R') {
        if (computerInput === 'P') {
            alert('Computer Wins!');
            return computerScore++;
        }else {
            alert('User Wins!');
            return userScore++;
        }
    }else if (userInput === 'P') {
        if (computerInput === 'S') {
            alert('Computer Wins!');
            return computerScore++;
        }else {
            alert('User Wins!');
            return userScore++;
        }    
    }else {
        if (computerInput === 'R') {
            alert('Computer Wins!');
            return computerScore++;
        }else {
            alert('User Wins!');
            return userScore++;
        }
    }
}

function displayScore() {
    alert(`User: ${userScore}, Computer: ${computerScore}, Ties: ${ties}`);
    let answer = prompt('Do you want to play again? y/n');
    if (answer === 'y') {
        getUserInput();
        getComputerInput();
        playGame();
        displayScore();
    }else if (answer === 'n') {
        alert('Thanks for playing!');
    }else {
        alert('Invalid, try again');
        displayScore();
    }
}

getUserInput();
getComputerInput();
playGame();
displayScore();
