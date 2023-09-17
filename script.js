"use strict";
let n = 13;

while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches (1 - 3)!");
  /* 
to do
isNaN
m <= 3 m >0
*/
  n -= m;
  //const matche = "|";
  let str = "";
  // ||||||||||||||
  alert(n + str);
  /* if n <= 0  You win*/

  alert("My turn!");
  let random = Math.floor(Math.random() * n + 1);
  /* забрати random сірників
 if n <= 0  I win*/
}

alert("!!!");
