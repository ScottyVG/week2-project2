/*
=======================================================

** Week 2 - Project 2 **
*** Looping & Conditionals ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Loops and Iteration Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

or If...Else Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

or While Loop Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


BASIC TRACK: 1-15
ADVANCED TRACK: 16-20
=======================================================
*/


// // 1. Output each item in the following Array to your console:
// var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
// for (var i = 0; i < livingRoom.length; i++) {
//   console.log(livingRoom[i]);
// }
//
// // 2. Using a loop, log numbers 22-33 in the console.
// for (var i = 22; i <=33; i++) {
//   console.log(i);
// }
//
// // 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
// for (var i = 75; i <= 100; i+=5) {
//   console.log(i);
// }
//
// // 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
// for (var i = 0; i <= 4; i++) {
//   console.log("This is how a professional loops.");
// }
//
// // 5. Separately, use both a for loop and while loop to do the same thing.
// //     Print out the sentence "At home, I have _____ cats."
// //     The numbers should range from 10 to 110, in increments of 25.
// for (var i = 10; i <= 110; i+=25) {
//   console.log("At home, I have "+i+" cats.");
// }
//
// var counter = 10;
// var num = 10;
// console.log("At home, I have "+counter+" cats.");
//
// while (num <= 110) {  // condition
//   num += num;         // statement
//   counter+=25;
//   console.log("At home, I have "+counter+" cats.");
// }

// 6. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'

// var numArray = [2, 17, 9, 24, 8];

// for (var i = 0; i < numArray.length; i++) {
//   if ((numArray[i] % 2 == 0) && (numArray[i] > 10)) {
//     console.log(numArray[i] + " Even and greater than 10");
//   } else if (numArray[i] % 2 == 0) {
//       console.log(numArray[i] + " Even");
//     }
//     else {
//       console.log(numArray[i] + " Odd");
//     }
// }

// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
// var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]
// var numThrees = [];
//
// for (var i = 0; i < numArray.length; i++)
//   if (numArray[i] % 10 == 3) {
//     numThrees.unshift(numArray[i]);
//   }
// console.log(numThrees.reverse());

// 8. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// var hashtag = "";
//
// for (var i = 0; i < 7; i++){
//   var hashtag = hashtag.concat("#");
//   console.log(hashtag);
// }

// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

// for (var i = 0; i <=100; i++) {
//   if ((i%3 === 0) && (i%5 === 0)) {
//     console.log("FizzBuzz");
//   } else if ((i%3 === 0) || (i%5 === 0)) {
//     if (i%5 !== 0) {
//       console.log("Fizz");
//     } else {
//       console.log("Buzz");
//     }
//   } else {
//     console.log(i);
//   }
// }

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.

// var human = prompt("Choose rock, paper or scissors");

// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.

// var computer = Math.random();
// console.log(computer);

// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"

// if ((computer >= 0) && (computer <= 0.33)) {
//     var computerChoice = 'rock';
// }  else if ((computer > 0.33) && (computer <= 0.66)) {
//     var computerChoice = 'paper';
// }  else if ((computer > 0.66) && (computer <= 1)) {
//     var computerChoice = 'scissors';
//   }
// console.log(computerChoice);

// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.

// if (computerChoice == human) {
//     var result = "The outcome of the match was a draw. Refresh the page to play again!";
// }  else if ((computerChoice == "rock") && (human == "scissor")){
//     var result = "The computer wins.";
// }  else if ((computerChoice == "paper") && (human == "rock")){
//     var result = "The computer wins.";
// }  else if ((computerChoice == "scissor") && (human == "paper")){
//     var result = "The computer wins.";
// }  else if ((human == "rock") && (computerChoice == "scissor")){
//     var result = "You won!!!";
// }  else if ((human == "paper") && (computerChoice == "rock")){
//     var result = "You won!!!";
// }  else if ((human == "scissor") && (computerChoice == "paper")){
//     var result = "You won!!!";
// }  else {
//     var result = "I'm sorry. " + human + " is not a valid response. Please refresh the page to play again!";
// }

// 14. After comparing, determine who has won; the computer or the human!
// alert(result);
// 15. Give yourself a high five for completing your first javascript game!

// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
// var largestNum = [-5, -2, -6, 0, -1];
// var max = Math.max(...largestNum);
// console.log(max);
// utilized spread operator from MDN page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// also there is this... rofl
// for (var i = 0; i < largestNum.length; i++) {
//   if (largestNum[i] > max) {
//     var max = largestNum[i];
//   }
// }
// console.log(max);
// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:

//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 18. Use a do/while loop to keep flipping the coin until you get tails.

// var i = 0;
// do {
//    i += 1;
//    var coin = Math.floor(Math.random() * 2);
//     if ((coin == 1)) {
//         var coin = 'heads';
//     }  else if ((coin == 0)) {
//         var coin = 'tails';
//       }
//    console.log(i);
//    console.log(coin);
// } while (coin == "heads");

// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// var hashtag = "";
//
// for (var i = 0; i < 8; i++){
//   if (i % 2 == 0) {
//       var hashtag = hashtag.concat(" ");
//   } else if (i % 2 == 1) {
//       var hashtag = hashtag.concat("#");
//   }
// }
//
// function reverse(s){
//     return s.split("").reverse().join("");
// }
//
// for (var i = 0; i < 8; i++){
//   if (i % 2 == 0) {
//       console.log(hashtag);
//   } else if (i % 2 == 1) {
//       console.log(reverse(hashtag));
//   }
// }
//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

// var hashtag = "";
// var length = prompt("What is the length?");
// var heigth = prompt("What is the height?");
//
// for (var i = 0; i < length; i++){
//   if (i % 2 == 0) {
//       var hashtag = hashtag.concat(" ");
//   } else if (i % 2 == 1) {
//       var hashtag = hashtag.concat("#");
//   }
// }
//
// function reverse(s){
//     return s.split("").reverse().join("");
// }
//
// for (var i = 0; i < heigth; i++){
//   if (i % 2 == 0) {
//       console.log(hashtag);
//   } else if (i % 2 == 1) {
//       console.log(reverse(hashtag));
//   }
// }
