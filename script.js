const choices = ["Rock", "Paper", "Scissors"];

let computerPoints = 0;
let userPoints = 0;

function PlayRound(computerChoice, userChoice) {
    let comp = computerChoice();
    let p1 = capitalize(userChoice());

    if (comp === p1) {
        console.log("Draw");
    } else if (comp === "Rock" && p1 === "Paper") {
        console.log("User wins");
        console.log("Computer chose: " + comp);
        userPoints++;
    } else if (comp === "Paper" && p1 === "Rock") {
        console.log("Computer wins");
        console.log("Computer chose: " + comp);
        computerPoints++;
    } else if (comp === "Rock" && p1 === "Scissors") {
        console.log("Computer wins");
        console.log("Computer chose: " + comp);
        computerPoints++;
    } else if (comp === "Scissors" && p1 === "Rock") {
        console.log("User wins");
        console.log("Computer chose: " + comp);
        userPoints++;
    } else if (comp === "Paper" && p1 === "Scissors") {
        console.log("User wins");
        console.log("Computer chose: " + comp);
        userPoints++;
    } else if (comp === "Scissors" && p1 === "Paper") {
        console.log("Computer wins");
        console.log("Computer chose: " + comp);
        computerPoints++;
    }
    else{
        console.log("Input a valid option");
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function userChoice() {
    return prompt("Enter your choice (Rock, Paper, Scissors):");
}

function capitalize(str) {
    if (typeof str !== 'string' || !str) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
for(let i =0 ; i < 5;i++){
    PlayRound(computerChoice, userChoice);
    console.log("User Points: " + userPoints);
    console.log("Computer Points: " + computerPoints);
}
