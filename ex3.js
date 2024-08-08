function rps(p1, p2) {

    const possibleOptions = ['rock', 'scissors', 'paper'];

    if (!possibleOptions.includes(p1)) {
        throw new Error('Error! The first player did not provide a valid choice.');
    }

    if (!possibleOptions.includes(p2)) {
        throw new Error('Error! The second player did not provide a valid choice.');
    }


    if (p1 === p2) {
        return "Draw!";
    } else if (p1 === "rock" && p2 === "scissors") {
        return "Player 1 won!";
    } else if (p1 === "scissors" && p2 === "paper") {
        return "Player 1 won!";
    } else if (p1 === "paper" && p2 === "rock") {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

console.log(rps('rock', 'scissors')); // "Player 1 won!"
console.log(rps('scissors', 'paper')); // "Player 1 won!"
console.log(rps('paper', 'rock')); // "Player 1 won!"

console.log(rps('scissors', 'scissors')); // "Draw!"
console.log(rps('paper', 'rock')); // "Player 1 won!"

/** Descomenta uno a uno y lanza la excepción correspodiente */

// console.log(rps('', 'scissors')); // "Error! The first player did not provide a valid choice."

console.log(rps('scissors', 'cuchara')); // "Error! The second player did not provide a valid choice."
