const guessForm = document.querySelector("#guessForm")
const guessInput = document.querySelector("#guessInput")
const message = document.querySelector("#message")
const attemptsText = document.querySelector("#attempts")
const resetBtn = document.querySelector("#resetBtn")


let secretNumber = Math.floor(Math.random() * 100) + 1

let attempts = 0 ;

let gameOver = false;

guessForm.addEventListener("submit" , function(event){
    event.preventDefault();

    if(gameOver){
        message.textContent = "Game Over! Try again!";
        return ;
    }

    const userGuess = Number(guessInput.value);

    if(userGuess <1 || userGuess > 100){
        message.textContent = "Please enter a number between 1 and 100!";
        return ;
    }

    attempts++ ;
  attemptsText.textContent = attempts;




  if(userGuess === secretNumber){
    message.textContent = "Congratulations! You guessed the number in " + attempts + " attempts!";
    gameOver = true ;
    guessInput.disabled = true ;
  }

  else if(userGuess < secretNumber){
    message.textContent = "Too low! Try again!";
  }else{
    message.textContent = "Too high! Try again!";
  }

  guessInput.value = "";
  guessInput.focus();

})

git add .
git commit -m "Added number guessing game functionality"
git push origin main

resetBtn.addEventListener("click" , function(){

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0 ;
    gameOver = false ;
    attemptsText.textContent = attempts;
    message.textContent = "Start guessing...";
    guessInput.disabled = false ;
    guessInput.value = "";
    guessInput.focus();
})