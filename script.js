const body = document.body;
const container = document.querySelector('.container');
const startBtn = document.querySelector('.start-button');
startBtn.addEventListener('click', game);
const restartBtn = document.querySelector('.restart-button');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const images = document.querySelectorAll('img')
images.forEach(image => {
  image.ondragstart = () => {
    return false;
  }
})
body.removeChild(container)

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
        startBtn.remove();
        body.appendChild(container);   
        
        restartBtn.addEventListener('click', restart)
        const weapons = document.querySelectorAll('.image-div');

        weapons.forEach(weapon => {
          let playerSelection = weapon.id.charAt(0).toUpperCase() + weapon.id.slice(1);
          weapon.addEventListener('click', ()=> {       
            if (myScore == 5 || computerScore == 5) {
              return;
            }
            playRound(playerSelection, restart)
          })
          weapon.addEventListener('mousedown', () => {
            weapon.classList.add('clicked') 
          })
          container.addEventListener('mouseup', ()=> {
            weapon.classList.remove('clicked')
          })
        })
        
        function restart() {
          restartBtn.classList.add('hidden');
          myScore = 0;
          computerScore = 0;
          score.textContent = `You - ${myScore} : ${computerScore} - Me`;
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
    result.textContent = `${computerSelection}. Ugh, you win this one. ${playerSelection} beats ${computerSelection}.`
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
    restartBtn.classList.remove('hidden')
  }
  
  if (myScore === 5) {
    result.textContent = 'Wait how did you.. That\'s not fair!! I wanna play again, click me click me click meeee.'
    
  }
  else if (computerScore === 5) {
    result.textContent = 'Haha yes, I beat you. I\'m so good at this- oh what\'s that? ...You wanna have your butt kicked again? if you say so, click me.'
  } 
}


