/* so globalna promenliva, ama ne e dobra praksa
let c;

function add(a, b) {
  c = a + b;
}

add(2, 2);
console.log("c: " + c);
*/

//Ova e Pure function
function add(a, b) {
  return a + b;
}

let c = add(2, 2);
console.log(c);

//drug primer
function add(a, b) {
  return a + b;
}

let sum = add(2, 2);

console.log(sum);

/* Try to find why the following function is impure, and after that
convert the same function to pure function.
*/
let house = "";
let houseParts = ["basement", "floor", "attic", "roof"];
function buildHouse(a, b, c, d) {
  for (part of houseParts) {
    if (part === houseParts[houseParts.length - 1]) {
      house += part;
    } else {
      house += part + "--";
    }
  }
}

buildHouse();

console.log(house);

/* Declare a function which will have two parameters and after its 
execution will return the concatenatenated string from the 
given arguments. Try to check if the arguments are really strings.
If they are not return "Sorry, wrong parmeters given!"
*/

function twoPar(prv, vtor) {}

twoPar();

let proba = twoPar;

for (let prv in proba) {
  if (typeof twoPar[prv] === "string") {
    console.log("issa " + "string," + "yo");
  } else {
    console.log("dsads");
  }
}
// console.log(typeof "prv");

// if (typeof twoPam == "string")
// let nesto = twoPam(a, b);

// console.log(nesto);

// /* Try to find out and also analize what would be the output of the following code block
//  */

// let a = ["one", "two", "three"];

// function oneTwoThree() {
//   let a = [1, 2, 3];

//   return function () {
//     return a;
//   };
// }

// // Why do we have two execution statements after the name of the function
// let countToThree = oneTwoThree()();
// // What if we remove the array a inside the function
// console.log(countToThree); // console.log(countToThree) --> ???
// // Make the function oneTwoThree a pure function

// var languages = {
//   english: "Hello!",
//   french: "Bonjour!",
//   notALanguage: 4,
//   spanish: "Hola!",
// };

// // print hello in the 3 different languages
// for (var hello in languages) {
//   var value = languages[hello];
//   if (typeof value === "string") {
//     console.log(value);
//   }
// }

// for (let n in twoPar) {
//   if (typeof twoPar[n] === "string") {
//     console.log(twoPar[n]);
//   }
// }
