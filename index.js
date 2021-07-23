var readlineSync = require ("readline-sync");

var score = 0;

console.log("Welcome to play Quiz on Avengers!");

var userName = readlineSync.question("Please Enter your name! ");

console.log("Hi!", userName , "Let's see if you are an Marvel Fan!");

var questions = [
	{
		question: `
    Who is the strongest Avenger?
    a: Thor
    b: Hulk
    c: Iron Man\n`,
		answer: "b"
	},
  {
    question: `
    When was the first Avenger?
    a: Steve Rogers
    b: Tony Stark
    c: Natasha\n`,
    answer: "a"
  },
  {
    question:`
    Who is the leader of S.H.I.E.L.D?
    a: Nick Fury
    b: Tony Stark
    c: Steve Rogers\n`,
    answer: "a"
  },
  {
    question:`
    What is Clint Barton's superhero name?
    a: Black Panther
    b: I'm Groot
    c: Hawkeye\n`,
    answer: "c"
  },
  {
    question:`
    What is the name of the blue glowing square that Loki uses as a weapon?
    a: The Tesseract
    b: The Forever Cube
    c: The Soulstone\n`,
    answer: "a"
  }];
 
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Yay you are right!!");
    score = score +1;
  }
  else{
  console.log("Oops you are Wrong!");
}

  console.log("Your score is: ", score);
  console.log("--------");  
}

function game(){
  for (var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

game();

console.log("Thanks for playing the Quiz!")
console.log("Your final score is: ", score);