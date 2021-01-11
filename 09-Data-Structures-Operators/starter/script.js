'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(startIndex,EndIndex){
    return [this.starterMenu[startIndex],this.starterMenu[EndIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// const [i,,[j,k=1]]=[2,4,[6]];
// console.log(i,j,k);
// let [main,start]=[2,4];
// [main,start]=[start,main];
// console.log(main,start);
// const [starter,mainCourse]=restaurant.order(2,0);
// console.log(starter,mainCourse);
// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);
// const {name:restaurantName,openingHours:hours,categories:tags}=restaurant;
// console.log(restaurantName,hours,tags);
// const {menu=[],starterMenu:starters=[]}=restaurant;
// console.log(menu,starters);
// let a={};
// let b={};
// const obj={a:23,b:7,c:14};
// ({a,b}=obj);
// console.log(a,b);
// const {fri}=openingHours;
// console.log(fri);
// const {fri:{open,close}}=openingHours;
// console.log(open,close);
// const arr=[7,8,9];
// const badNewArr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);
// const newArr=[1,2,...arr];
// console.log(newArr);
// console.log(...newArr);
// const newArr=[...restaurant.mainMenu,'Gnocci'];
// console.log(newArr);
// const mainMenu=[...restaurant.mainMenu];
// join 2 array
// const menu=[...newArr,...restaurant.starterMenu];
// console.log(menu);
// const newRestaurant={"foundedIn":1998,...restaurant,"founder":"Guisepppe"};
// console.log(newRestaurant);
// const restaurantCopy={... restaurant};
// console.log(restaurantCopy);
// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);
// const [pizza,risoto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(pizza,risoto,otherFood);
// const {sat,...weekdays}=restaurant.openingHours;
// console.log(weekdays);
// const add=function(...numbers){
//      let sum=0;
//      for(let i=0;i<numbers.length;i++)
//          sum+=numbers[i];
//      console.log(sum);
// }
// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2);
// const x=[23,5,7];
// add(...x);
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const scored=[... game.scored]
// // console.log(scored);
// //console.log(game.scored);
// for (const player of scored)
//    console.log(player);
// let sum=0,count=0;
// const odd=game.odds;
// for(const val of Object.values(odd)){
//      sum+=val;
//      count++;
// }
// console.log(sum/count);
// for(const [key,val] of Object.entries(odd)){
//   const team=key==='x'?"draw":game[key];
//   console.log(`Odd of Victory ${team}:${val}`);
// }

const gameEvents=new Map([
  [17,'🥅 GOAL'],
  [36,'Substitution'],
  [47,'GOAL'],
  [61,'Substitution'],
  [64,'Yellow Card'],
  [69,'Red Card]'],
  [70,'Substitution'],
  [72,'Substitution'],
  [76,'GOAL'],
  [80,'GOAL'],
  [92,'Yellow Card'],
]);
gameEvents.delete(64);
console.log(gameEvents);
// const orderSet=new Set(['Football','Badminton','Cricket','Soccer']);
// console.log(orderSet);
console.log(`An event happened on average, every ${90/gameEvents.size} minutes`)
const time=[...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);
for(const [min,event] of gameEvents){
  const half=min<=45?'First':'Second';
  console.log(`[${half} Half] ${min}:${event}`);
}









