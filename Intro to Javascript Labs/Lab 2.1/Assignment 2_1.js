"use strict";
// Problem 1 - Total number of characters in the text box
let textBox1 = document.getElementById("string1").innerText;
let answer1 = document.getElementById("answer1");
answer1.innerText = textBox1.length;

//Problem 2
let textBox2 = document.getElementById("string2").innerText;
let whereIsSpain = textBox2.indexOf("Spain");
let answer2 = document.getElementById("answer2");
answer2.innerText = whereIsSpain;

//Problem 3
let textBox3 = document.getElementById("string3").innerText;
let answer3 = document.getElementById("answer3");
answer3.innerText = textBox3.toUpperCase();

//Problem 4
let textBox4 = document.getElementById("string4").innerText;
let answer4 = document.getElementById("answer4");
answer4.innerText = textBox4.includes("hiddenword").toString();

//Problem 5
let textBox5 = document.getElementById("string5").innerText;
let answer5 = document.getElementById("answer5");
answer5.innerText = textBox5.slice(46 , 94);

//Problem 6
let textBox6 = document.getElementById("string6").innerText;
let answer6 = document.getElementById("answer6");
answer6.innerText = textBox6.slice(0, 41) + ".";