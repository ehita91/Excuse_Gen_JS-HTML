/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let subject = [
    "THE STUDENT",
    "THE CAR",
    "THE DOG",
    "THE COUNTRY",
    "THE HOUSE",
    "THE COMPUTER"
  ];
  let adjetive = [
    "IS BIG",
    "IS SLOW",
    "IS SMALL",
    "IS INTELIGENT",
    "IS FAST",
    "IS CAPITALIST"
  ];
  let verb = ["RUN", "JUMP", "STUDING"];

  function generateExcuses() {
    document.getElementById("excuse").innerHTML =
      subject[Math.floor(Math.random() * subject.length)] +
      " " +
      adjetive[Math.floor(Math.random() * adjetive.length)] +
      " " +
      verb[Math.floor(Math.random() * verb.length)];
  }
  document.getElementById("btn").addEventListener("click", generateExcuses);

  console.log("Hello Rigo from the console!");
};
