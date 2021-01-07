'use strict'
const score1=document.querySelector('#score--0');
const score2=document.querySelector('#score--1');
const diceEl=document.querySelector('.dice');
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1');

// starting conditions
score1.textContent=0;
score2.textContent=0;
diceEl.classList.add("hidden");
let activePlayer=0;
let currentScore=0;
let score=[0,0];
let playing=true;
const switchPlayer=function(){
    document.querySelector(`#current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer===1?0:1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentScore=0;
}
// Rolling dice functionality
btnRoll.addEventListener('click',function(){
    //1.Generating the random number
    if(playing){
        let dice=Math.trunc(Math.random()*6)+1;
        //removing the hidden class list from dice;
        diceEl.src=`dice-${dice}.png`;
        //3.check for rolled 1
        if(dice!==1){
            currentScore+=dice;  
            document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
        }
        else{
            switchPlayer();   
        }
    }
})
btnHold.addEventListener('click',function(){
    //1.Add the score to the current player score
    score[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer];
    if(score[activePlayer]>=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing=false;
    }
    switchPlayer();
})
btnNew.addEventListener('click',function(){
    console.log('New game button clicked');
    score=[0,0];
    if(player0El.classList.contains('player--winner')){
         player0El.classList.remove('player--winner');
    }
    if(!player0El.classList.contains('player--active')){
        player0El.classList.add('player--winner');
    }
    if(player1El.classList.contains('player--winner')){
        player1El.classList.remove('player--winner');
    }
    if(player1El.classList.contains('player--active')){
        player1El.classList.remove('player--active');
    }
    diceEl.src="dice-0.jpg";
    activePlayer=0;
    currentScore=0;
    score1.textContent=0;
    score2.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    playing=true;
})