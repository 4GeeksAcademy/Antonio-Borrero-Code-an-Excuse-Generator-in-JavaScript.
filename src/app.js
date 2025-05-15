import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["my dog ", "my grandad ", "the neighbour ", "superman "];
  let action = ["ate ", "peed ", "burned ", "broke "];
  let what = ["my homework ", "my car ", "the street "];
  let when = ["this morning ", "yesterday ", "during lunch ", "the weekend "]

  let whorandom = Math.floor(Math.random()*who.length);
  let actionrandom = Math.floor(Math.random()*action.length);
  let whatrandom = Math.floor(Math.random()*what.length);
  let whenrandom = Math.floor(Math.random()*when.length);

  document.querySelector("#excuse").innerHTML = 
  (who[whorandom] + action[actionrandom] + what[whatrandom] + when[whenrandom]);
};
