//This function is for computer to select the rock paper scissor randomly
function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random()* choice.length) 
    return random,choice[random];
}

function singleRound(playerSelection, computerSelection){
    const selectGame=prompt("Enter Rock, Paper or Scissor to play the game")
    const randomSelect = getComputerChoice()

    if (selectGame==="rock" && randomSelect === "scissor"){
        console.log("Rock beats Scissor, 'You Win'!!")
    }
    else if (selectGame ==="paper" && randomSelect ==="rock"){
        console.log("Paper beats Rock, 'You Win'")
    }
    else if(selectGame==="scissor" && randomSelect ==="paper"){
        console.log("Scissor beats Paper, 'You Win'")
    }
    else if(randomSelect==="scissor" && selectGame ==="paper"){
        console.log("Scissor beats Paper, 'Computer Win'")
    }
    else if(randomSelect==="paper" && selectGame ==="rock"){
        console.log("Paper beat Rock, 'Computer Win'")
    }
    else if(randomSelect==="rock" && selectGame ==="scissor"){
        console.log("Rock beats Scissor, 'Computer Win'")
    }
    else {
        console.log("It's a TIE both you and computer")
    }
}

function playGame() {
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
console.log(singleRound())
}

playGame()