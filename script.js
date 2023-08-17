function getRandomNum() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
  let randomNum = getRandomNum();
  if (randomNum == 1) return 'Rock';
  else if (randomNum == 2) return 'Paper';
  else return 'Scissors';
}

function playRound(victory, defeat, tie) {
  let playerSelection = prompt('So.. what will it be: Rock, Paper or Scissors?');

  return compare()    
  function compare() {   
    if (playerSelection !== null) {
       playerSelection = (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1);
      let computerSelection = getComputerChoice();

      if (playerSelection === computerSelection) {            
        return `${computerSelection}. ${tie}`
      }
      
      else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
          playerSelection === 'Scissors' && computerSelection === 'Paper' ||
          playerSelection === 'Paper' && computerSelection === 'Rock')   {           
        return `${computerSelection}. ${victory}, ${playerSelection} beats ${computerSelection}`
      }

      else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
          computerSelection === 'Scissors' && playerSelection === 'Paper' ||
          computerSelection === 'Paper' && playerSelection === 'Rock') {       
        return `${computerSelection}. ${defeat}, ${computerSelection} beats ${playerSelection}`
      }   

      else if (playerSelection == '') {
        playerSelection = prompt('Umm... are you sleeping? Make your move.');
        if (playerSelection !== null) {
          playerSelection = playerSelection.toLowerCase()
          if (playerSelection == 'yes') {
            playerSelection = prompt('Okay then wake up and make your move!!')
          }
          if (playerSelection == 'no') {
            playerSelection = prompt('Then why are you quiet???')
          }
          return compare()
        }
        else return inputNull();
        
      }
      else {
        let randomSelection = playerSelection
        playerSelection = prompt(`"${randomSelection}"..? Are you messing with me?`)
        if (playerSelection!== null) {
          playerSelection = playerSelection.toLowerCase();
          if (playerSelection == 'yes') {
            playerSelection = prompt('Then stop it and make your move.')
          }
          if (playerSelection == 'no') {
            playerSelection = prompt(`Then wth is "${randomSelection}"??`);
          }
          return compare();
        }
        
        else return inputNull();
      }
    }
    
    else {
      return inputNull()
    }
  }

  function inputNull() {
    playerSelection = prompt('Who said you could leave? Make your move.');
    return compare()
  }
}
    
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
        
          alert('Alright. Click "OK" or press Enter so we can start');
  
          let victory = 'Ugh, you win this one';
          let defeat = 'That\'s right';
          let tie = 'It\'s a tie';
            
          for (myScore = 0, computerScore = 0; myScore < 5 && computerScore < 5;) {
          round = playRound(victory, defeat, tie);
          console.log(round);
  
          if (round.includes(victory)) {
              myScore++;
              console.log(myScore + ' - ' + computerScore);
            }
                        
          else if (round.includes(defeat)) {
              computerScore++;
              console.log(myScore + ' - ' + computerScore);
          }
  
          else if (round.includes(tie)) {
            console.log(myScore + ' - ' + computerScore);
          }
        }
  
          if (myScore >= 5) {
            console.log('Wait how did you.. That\'s not fair!! I wanna play again, click me click me click meeee.')
          }  
          else if (computerScore >= 5) {
            console.log('Haha yes, I beat you. I\'m so good at this- oh what\'s that? ...You want to me to kick your butt again? Huhu if you say so, click me.')
          }
              
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
  

        
        
      
