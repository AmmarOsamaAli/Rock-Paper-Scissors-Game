/*------------------------ Cached Element References ------------------------*/

const resultDisplayElement = document.querySelector('#result-display')
const rockBtn = document.querySelector('#ROCK')
const paperBtn = document.querySelector('#PAPER')
const scissorsBtn = document.querySelector('#SCISSORS')
const playAgainBtn = document.querySelector('#play-again')

/*-------------------------------- Constants --------------------------------*/

const choices = ['ROCK', 'PAPER', 'SCISSORS']

/*-------------------------------- Variables --------------------------------*/

let myChoice
let computerChoice
let message

/*-------------------------------- Functions --------------------------------*/

function getPlayerChoice(event) {
    myChoice = event.target.id
}

function getComputerChoise() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}


function compareChoices(event) {
    if (myChoice === computerChoice) {
        message = "Draw!"
        resultDisplayElement.style.color = 'grey'
    }
    else if ((myChoice === 'ROCK' && computerChoice === 'PAPER') ||
        (myChoice === 'PAPER' && computerChoice === 'SCISSORS') ||
        (myChoice === 'SCISSORS' && computerChoice === 'ROCK')) {

        message = "You Lose!"
        resultDisplayElement.style.color = 'red'

    }
    else {
        message = "You Win!"
        resultDisplayElement.style.color = 'green'

    }
}

function displayResult() {
    resultDisplayElement.textContent = `${message} You picked ${myChoice} and computer picked ${computerChoice}`
}

function playAgain() {
    if (event.target.id === 'play-again') {
        myChoice = null
        computerChoice = null
        message = null
        resultDisplayElement.textContent = null
    }
}

function play(event) {

    getPlayerChoice(event)
    getComputerChoise()
    compareChoices(event)
    displayResult()
    playAgain()

}

/*----------------------------- Event Listeners -----------------------------*/

rockBtn.addEventListener('click', play)
paperBtn.addEventListener('click', play)
scissorsBtn.addEventListener('click', play)
playAgainBtn.addEventListener('click', play)
