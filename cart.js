  (function(){
      const btnRock = document.getElementById('btn-rock');
      const btnPaper = document.getElementById('btn-paper');
      const btnScissors = document.getElementById('btn-scissors');
      const resultEl = document.getElementById('result');
      const choices = ['rock','paper','scissors'];

      function getComputerMove(){
        return choices[Math.floor(Math.random() * choices.length)];
      }

      function decide(user, computer){
        if(user === computer) return 'It is a tie!';
        if(
          (user === 'rock' && computer === 'scissors') ||
          (user === 'paper' && computer === 'rock') ||
          (user === 'scissors' && computer === 'paper')
        ) return 'You win';
        return 'You lose';
      }

      function play(userMove){
        userMove = userMove.toLowerCase();
        const computerMove = getComputerMove();
        const result = decide(userMove, computerMove);
        const message = `You picked ${userMove}, computer picked ${computerMove}: ${result}`;
        resultEl.textContent = message;
        alert(message);
      }

      btnRock.addEventListener('click', () => play('rock'));
      btnPaper.addEventListener('click', () => play('paper'));
      btnScissors.addEventListener('click', () => play('scissors'));
    })();