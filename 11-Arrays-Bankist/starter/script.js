'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMovements=function(movements){
  containerMovements.innerHTML='';
  movements.forEach(function(mov,i){
      const type=mov>0?'deposit':'withdrawal';
      const html=`
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
      containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}
// displayMovements(account1.movements);
const calcDisplayBalance=function(acc){
    acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0);
     labelBalance .textContent=`${acc.balance} €`;
}

const calcDisplaySummary=function(acc){
      const incomes=acc.movements.
                    filter(mov=>mov>0)
                    .reduce((acc,mov)=>acc+mov,0);
      labelSumIn.textContent=`${incomes} €`;
      const withdrawal=acc.movements.
                       filter(mov=>mov<0)
                       .reduce((acc,mov)=>acc+mov,0);
      labelSumOut.textContent=`${Math.abs(withdrawal)}€` 
      const interest=acc.movements
                     .filter(mov=>mov>0)
                     .map(deposit=>(deposit*acc.interestRate)/100)
                     .filter((int,i,arr)=>{
                      //  console.log(arr);
                       return int>=1;
                     })
                     .reduce((acc,curr)=>acc+curr,0);
      labelSumInterest.textContent=`${interest} €`;
};

const createUsername=function(accs){
      accs.forEach(function(mov){
          mov.user=mov.owner.toLowerCase().split(" ").map(ele=>ele[0]).join("");
      });
}
createUsername(accounts);
const updateUI=function(currentAccount){
  
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  // console.log(accounts);
  currentAccount=accounts.find(acc=>acc.user===inputLoginUsername.value);
  console.log(currentAccount.pin,inputLoginPin.value);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)){
      labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(" ")[0]}`;
      containerApp.style.opacity=100;
      inputLoginUsername.value=inputLoginPin.value='';
      inputLoginPin.blur();
      updateUI(currentAccount);
 }
});
btnTransfer.addEventListener('click',function(e){
     e.preventDefault();
     const amount=Number(inputTransferAmount.value);
     const receiverAc=accounts.find(
         acc=>acc.user===inputTransferTo.value
     )
    //  console.log(currentAccount);
     if(receiverAc && amount>0 && currentAccount.balance>=amount && currentAccount.user!==receiverAc.user){
      inputTransferTo.value=inputTransferAmount.value='';
         currentAccount.balance-=amount;
        
          receiverAc.movements.push(amount);
         currentAccount.movements.push(-amount);
         updateUI(currentAccount);
     }
})
// const Julia=[9,16,6,8,3];
// const shallowCopy=Julia.splice(0);
// const Kate=newFunction();
// Kate.forEach(function(movement,i){
//    for(let index=0;index<shallowCopy.length;index++){
//      if(movement==shallowCopy[index]){
//          shallowCopy.splice(index,1);
//          index--;
//      }
//    }
// });

// shallowCopy.forEach(function(movement,i){
//      movement>3?console.log(`Dog Number ${i+1} is an adult`):console.log(`Dog Number ${i+1} is an puppy`);
// })

// function newFunction() {
//   return [10, 5, 6, 1, 4];
// }
// const Julia=[9,16,6,8,3];
// const kate=[10,5,6,1,4];

// const euroToUsd=1.1;
// const movementsUSD=movements.map(function(mov){
//   return mov*euroToUsd;
// })
// console.log(movementsUSD);
// const movementsUSDToarr=movements.map(mov=>mov*euroToUsd)
// console.log(movementsUSDToarr);
// const movementDescription=movements.map((mov,i)=>mov>0?`Movement ${i+1}:You deposited ${Math.abs(mov)}`:`Movements ${i+1} :You withdrew ${Math.abs(mov)}`);
// console.log(movementDescription);
// const createUsername=function(accs){
//     accs.forEach(function(mov){
//         mov.user=mov.owner.toLowerCase().split(" ").map(ele=>ele[0]).join("");
//     });
// }

// createUsername(accounts);
// console.log(accounts);
// const withdrawal=movements.filter(mov=>mov<0);
// console.log(withdrawal);
// const getages=function(arr){
//     const ages=arr.map(curr=>curr<=2?2*curr:16+curr*4);
//     console.log(ages);
// }
// const getHumanages=function(arr){
//     const ages=arr.map(mov=>mov<=2?2*mov:mov*4+16).filter(mov=>mov>=18).reduce((acc,mov,i,arr)=>acc+mov/arr.length,0);
//     return ages;
// }
// // const averageAges=function(arr){

// // }
// // getages([5,2,4,1,15,8,3]);
// // getages([16,6,10,5,6,1,4]);
// console.log(getHumanages([5,2,4,1,15,8,3]));
// console.log(getHumanages([16,6,10,5,6,1,4]));

// const euroToUsd=1.1;
// // console.log(movements);
// const totalDepositsUsd=movements
//                   .filter(mov=>mov>0)
//                   .map((mov,i,arr)=>{
//                        return mov*euroToUsd;
//                   })
//                   .reduce((acc,mov)=>acc+mov,0);
// console.log(totalDepositsUsd);



