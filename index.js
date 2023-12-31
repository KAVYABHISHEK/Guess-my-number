'use strict'

alert("Are you smart enough to guess the secret number 😎?");
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '5';

document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

 
document.querySelector('.check ').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess){
        document.querySelector('.message').textContent='⛔ NO Number'; 
    }
    else if (guess === secretNumber){
        document.querySelector('.message').textContent='Congratulataions!🏆';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        
        document.querySelector('.number').style.width = '30rem';

       if(score>highscore){
        highscore = score ;
        document.querySelector('.highscore').textContent = highscore;

       }

    }
    else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent='Too High 📈';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '🥹 You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#660000';
        }
    }
    else if (guess < secretNumber){ 
        if(score > 1){
            document.querySelector('.message').textContent='Too Low📉';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '🥹 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
       
    } 

}) 
document.querySelector('.again').addEventListener('click', function(){
    
score = 20;
secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.number').style.width = '15rem';
document.querySelector('.guess').value = '';
})