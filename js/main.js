"use strict";
/*

// we can select an element in this way
console.log(document.querySelector(".message"));
// we can select the element text content
console.log(document.querySelector(".message").textContent);

// we can set a text content to this element with the help of dom manupulation

console.log(
  (document.querySelector(".message").textContent = "Yoy have win !! 💥💥💥")
);

// we can select an input also can manipulate it
console.log((document.querySelector(".guess").value = 22));
console.log(document.querySelector(".guess").value);


*/
/*
// lets build the game logic here

let randomvalue = parseInt(Math.random() * 20 + 1);
console.log(randomvalue);
//console.log(typeof randomvalue);
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.fontSize = "6rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomvalue = parseInt(Math.random() * 20 + 1);
  console.log(randomvalue);
});
document.querySelector(".check").addEventListener("click", function () {
  // -------- with the help of addEvent lisener we can do some logical change in web site -----------
  //console.log(document.querySelector(".guess").value);
  // document.querySelector(".message").textContent = "Yoy have win !! 💥💥💥";

  let guess = Number(document.querySelector(".guess").value);
  //console.log(typeof guess);

  let message = document.querySelector(".message");
  let number = document.querySelector(".number");
  let bgbody = document.querySelector("body");

  if (!guess) {
    message.textContent = "please enter a number 🤨🤨";
  } else if (guess > 20 || guess < 1) {
    message.textContent = "please enter a number Between 1 and 20 🤨🤨";
  } else if (guess > randomvalue + 5) {
    if (score > 1) {
      message.textContent = "Number is Too big 😥😥😥";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You loose the game 😥😥😥";
    }
  } else if (guess > randomvalue) {
    if (score > 1) {
      message.textContent = "Number is big 😥😥😥";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You loose the game 😥😥😥";
    }
  } else if (guess < randomvalue - 5) {
    if (score > 1) {
      message.textContent = "Number is Too small 😥😥😥";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You loose the game 😥😥😥";
    }
  } else if (guess < randomvalue) {
    if (score > 1) {
      message.textContent = "Number is small 😥😥😥";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You loose the game 😥😥😥";
    }
  } else if (guess == randomvalue) {
    message.textContent = "You have win !! 💥💥💥";
    number.textContent = guess;
    bgbody.style.backgroundColor = "#60b347";
    number.style.fontSize = "7rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});
*/

// lets build the game logic again throw the don't repeate your self consept here
let randomvalue = parseInt(Math.random() * 20 + 1);
// console.log(randomvalue);
//console.log(typeof randomvalue);
let score = 20;
var highscore = localStorage.getItem("high_score");

// let's short the code making some function
let displaymassege = function (message) {
  return (document.querySelector(".message").textContent = message);
};
let setbodybgcolor = function (color) {
  return (document.querySelector("body").style.backgroundColor = color);
};
let setnumberclassvalue = function (numbervalue) {
  return (document.querySelector(".number").textContent = numbervalue);
};
let setguessvalue = function (guessvalue) {
  return (document.querySelector(".guess").value = guessvalue);
};
let setnumberfontsize = function (fontsizevalue) {
  return (document.querySelector(".number").style.fontSize = fontsizevalue);
};
let setscorevalue = function (scorevalue) {
  return (document.querySelector(".score").textContent = scorevalue);
};
let sethighscorevalue = function (highscorevalue) {
  return (document.querySelector(".highscore").textContent = highscorevalue);
};

document.querySelector(".again").addEventListener("click", function () {
  displaymassege("Start guessing...");
  setbodybgcolor("#222222");
  setnumberclassvalue("?");
  setguessvalue("");
  setnumberfontsize("6rem");
  score = 20;
  setscorevalue(score);
  randomvalue = parseInt(Math.random() * 20 + 1);
  console.log(randomvalue);
});
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //console.log(typeof guess);

  if (!guess) {
    displaymassege("please enter a number 🤨🤨");
  } else if (guess > 20 || guess < 1) {
    displaymassege("please enter a number Between 1 and 20 🤨🤨");
  } else if (guess == randomvalue) {
    displaymassege("You have win !! 💥💥💥");
    setnumberclassvalue(guess);
    setbodybgcolor("#60b347");
    setnumberfontsize("7rem");
    if (score > highscore) {
      highscore = score;
      sethighscorevalue(highscore);
      localStorage.setItem("high_score", highscore);
    }
  } else if (guess !== randomvalue) {
    if (score > 1) {
      score--;
      setscorevalue(score);
      if (guess > randomvalue) {
        guess > randomvalue + 5
          ? displaymassege("Number is Too big 😥😥😥")
          : displaymassege("Number is big 😥😥😥");
      } else {
        guess < randomvalue - 5
          ? displaymassege("Number is Too small 😥😥😥")
          : displaymassege("Number is small 😥😥😥");
      }
    } else {
      displaymassege("You loose the game 😥😥😥");
    }
  }
  // we have shorted the code

  /*
   else if (guess > randomvalue + 5) {
    if (score > 1) {
     displaymassege( "Number is Too big 😥😥😥");
      score--;
     setscorevalue(score);
    } else {
     displaymassege( "You loose the game 😥😥😥");
    }
  } else if (guess > randomvalue) {
    if (score > 1) {
       displaymassege( "Number is big 😥😥😥");
      score--;
      setscorevalue(score);
    } else {
       displaymassege( "You loose the game 😥😥😥");
    }
  } else if (guess < randomvalue - 5) {
    if (score > 1) {
     displaymassege(  "Number is Too small 😥😥😥");
      score--;
      setscorevalue(score);
    } else {
      displaymassege(  "You loose the game 😥😥😥");
    }
  } else if (guess < randomvalue) {
    if (score > 1) {
     displaymassege( "Number is small 😥😥😥");
      score--;
      setscorevalue(score);
    } else {
     displaymassege( "You loose the game 😥😥😥");
    }
  }
  */
});
sethighscorevalue(highscore);
