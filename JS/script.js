//get a random number between 0 and maxnumber
function getRandomnumber(maxnumber) {
    return Math.floor(Math.random() * maxnumber)
}
//get a random play from array
function getComputerplay() {
    let plays = ['rock', 'paper', 'scissors'];
    return plays[getRandomnumber(plays.length)];
}
//function that gets the result of game person vs pc
function getWinner(userplay, pcplay) {
    if (userplay === pcplay) {
        return 'tie'
    }
    else if (userplay === 'rock' && pcplay === 'scissors') {
        return 'win';
    }
    else if (userplay === 'rock' && pcplay === 'paper') {
        return 'lose';
    }
    else if (userplay === 'scissors' && pcplay === 'rock') {
        return 'lose';
    }
    else if (userplay === 'scissors' && pcplay === 'paper') {
        return 'win';
    }
    else if (userplay === 'paper' && pcplay === 'rock') {
        return 'win';
    }
    else if (userplay === 'paper' && pcplay === 'scissors') {
        return 'lose';
    }
}

//create a function to validate winner if wins are > than loses user won, otherwise they lost, if equal then tie
function getResults(wincount, losecount, tiecounter) {
    if (wincount > losecount) {
        return `Final result : You won ${wincount} - ${losecount} and ${tieCounter} tie(s)`;
    } else if (wincount < losecount) {
        return `Final result : You lost ${wincount} - ${losecount} and ${tieCounter} tie(s)`;
    } else
        return `Final result : Tie ${wincount} - ${losecount} and ${tieCounter} tie(s)`;
}

function printResult(roundResult) {
    let resultDiv = document.getElementById("showResult");
    if (resultDiv)
        resultDiv.remove();
    const container = document.querySelector('#result');
    const content = document.createElement('div');
    const att = document.createAttribute("id");
    att.value = "showResult";
    content.setAttributeNode(att);
    content.textContent = roundResult;
    container.appendChild(content);
}
function game(event) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    gameCounter++;
    if (gameCounter <= 5) {
        let userplay = event.target.attributes.value.value;
        let pcplay = getComputerplay();
        let roundResult = getWinner(userplay, pcplay);
        switch(roundResult){
            case "win":
            roundResult = `You won, PC played ${pcplay}`;
            winCounter++;
            break;
            case "lose":
            roundResult = `You lost, PC played ${pcplay}`;
            loseCounter++;
            break;
            case "tie":
            roundResult = `Tie, PC played ${pcplay}`;
            tieCounter++;
            break;
        }
        printResult(roundResult);
    }
    else {
        let totalResult = getResults(winCounter, loseCounter, tieCounter);
        printResult(totalResult);
        gameCounter = 0;
        winCounter = 0;
        loseCounter = 0;
        tieCounter=0;
    }
}
//starts game
let gameCounter = 0;
let winCounter = 0;
let loseCounter = 0;
let tieCounter=0;
const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', game);





