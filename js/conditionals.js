/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/

let a = 3,
  b = 4,
  c = 5;

if (a && b && c) {
  console.log(a + b + c);
} else {
  console.log("Sorry, you are missing at least one value");
}

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/
let d = 10,
  e = 20,
  f = 7;

if (d && e && f) {
  console.log("All variables are defined");
} else if (d && (e || f)) {
  console.log("Only two variables are defined");
} else {
  console.log("Sorry, you are missing at least one value");
}

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

let g = "green",
  h = "blue",
  i = "yellow";

switch ("color") {
  case "green":
    console.log("You have selected the green model");
    break;
  case "blue":
    console.log("You have selected the blue model");
    break;
  case "yellow":
    console.log("You have selected the yellow model");
    break;
  default:
    console.log("You must select a color");
}
