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
  alert(n);
}

alert("!!!");
