const body = document.body
const outerDiv = document.querySelector('.outer-div');
const buttonDiv = document.querySelector('.button-div')
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', game);
const decision = document.querySelector('#decision');
const score = document.querySelector('#score');
const result = document.querySelector('#result');

const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.classList.add('rps-button');

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.classList.add('rps-button');

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.classList.add('rps-button');

let myScore = 0
let computerScore = 0

function game() {   
  let question = prompt('Do you wanna play Rock Paper Scissors with me?');
  decide()
  function decide() {
    if (question !== null) {
      let answer = question.toLowerCase()
    
      if (answer == 'no') {
        alert('Hmph. Then maybe don\'t go around clicking things, idiot.')
      }
    
      else if (answer == 'yes') {
        
        decision.textContent = 'Alright. So.. what will it be: Rock, Paper or Scissors?';
        
        body.setAttribute('id', 'body');
        outerDiv.setAttribute('id', 'outer-div');
        buttonDiv.setAttribute('id', 'button-div')
        buttonDiv.append(rock);
        
        buttonDiv.append(paper);
        
        buttonDiv.append(scissors);
        
        const buttons = document.querySelectorAll('.rps-button');

        buttons.forEach(button => {
          button.addEventListener('click', (e) => { 
            playRound(e.target.textContent, restart);
          })
        })
        
        function restart() {
          startButton.remove();
          myScore = 0;
          computerScore = 0;
          score.textContent = `You - ${myScore} : ${computerScore} - Me`;
          rock.disabled = false;
          paper.disabled = false;
          scissors.disabled = false;
          result.textContent = ''
        }
        restart()  
      }
  
      else if (answer == '') {
        question = prompt('You there? You wanna play or not??');
        decide()
      }

      else {
        question = prompt('I\'m not sure I understand. Do you wanna play or not?')
        decide()
      }
    }         
    else alert('Don\'t waste my time please!')
  } 
}
  
function getRandomNum() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
  let randomNum = getRandomNum();
  if (randomNum == 1) return 'Rock';
  else if (randomNum == 2) return 'Paper';
  else return 'Scissors';
}

function playRound(playerSelection, restart) {     
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {            
    result.textContent = `${computerSelection}. It's a tie.`
  }
  
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Rock')   {           
    result.textContent = `${computerSelection}. ugh, you win this one. ${playerSelection} beats ${computerSelection}.`
    myScore++
  }

  else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
    computerSelection === 'Scissors' && playerSelection === 'Paper' ||
    computerSelection === 'Paper' && playerSelection === 'Rock') {       
    result.textContent = `${computerSelection}. That's right, ${computerSelection} beats ${playerSelection}.`
    computerScore++
  }   
  score.textContent = `You - ${myScore} : ${computerScore} - Me`;
  if (myScore === 5 || computerScore === 5) {
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true;
    startButton.textContent = 'Click me again'
    body.append(startButton)
    startButton.removeEventListener('click', game)
    startButton.addEventListener('click', restart)
  }

  if (myScore === 5) {
    result.textContent = 'Wait how did you.. That\'s not fair!! I wanna play again, click me click me click meeee.'
    
  }
  else if (computerScore === 5) {
    result.textContent = 'Haha yes, I beat you. I\'m so good at this- oh what\'s that? ...You wanna have your butt kicked again? if you say so, click me.'
  }
 
}


