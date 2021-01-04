'use strict';
// console.log(document.querySelector('.number').value)
let secretNumber,score=20,highscore=0;
secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let flag=false;
const Winner=function(){
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('.message').textContent="👍 You won the match";   
    document.querySelector('body').style.backgroundColor="#90ee90";
    document.querySelector('.number').style.width="20rem";
    document.querySelector('.number').style.height="10rem";
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    flag=true;
}
const check_high_bound=function(guess){
    if(score>1){
        document.querySelector('.message').textContent="⬆️it's too high";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        if(score>0)
           score--;
        document.querySelector('.message').textContent="👎 You loss the match";
        document.querySelector('.score').textContent=score;
    }
}
const check_low_bound=function(guess){
    if(score>1){
        document.querySelector('.message').textContent="⬇️ it's too low";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        if(score>0)
            score--;
        document.querySelector('.message').textContent="👎 You loss the match";
        document.querySelector('.score').textContent=score;
    }
}
if(!flag){
    document.querySelector('.check').addEventListener('click',function(){
        let guess=parseInt(document.querySelector('.guess').value);
        if(!guess){
            document.querySelector('.message').textContent="🛑 No Number";
        }
        if(guess===secretNumber){
            console.log("Correct Answer");
            Winner();
        }
        else if(guess>secretNumber){
             check_high_bound(guess);
        }
        else if(guess<secretNumber){
             check_low_bound(guess);
        }
    });
}
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    document.querySelector('.score').textContent=score;

});