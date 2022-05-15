let questionOne = document.getElementById("Q1");
let answerOne = document.querySelector(".A1");
let arrowOne = document.querySelector(".arrow1");

let questionTwo = document.getElementById("Q2");
let answerTwo = document.querySelector(".A2");
let arrowTwo = document.querySelector(".arrow2");

let questionThree = document.getElementById("Q3");
let answerThree = document.querySelector(".A3");
let arrowThree = document.querySelector(".arrow3");

let questionFour = document.getElementById("Q4");
let answerFour = document.querySelector(".A4");
let arrowFour = document.querySelector(".arrow4");

//

questionOne.addEventListener("click", faqQOne);

function faqQOne() {
  if (answerOne.style.display == "none") {
    answerOne.style.display = "block";
    arrowOne.style.rotate = "180deg";
  } else {
    answerOne.style.display = "none";
    arrowOne.style.rotate = "0deg";
  }
}
//

questionTwo.addEventListener("click", faqQTwo);

function faqQTwo() {
  if (answerTwo.style.display == "none") {
    answerTwo.style.display = "block";
    arrowTwo.style.rotate = "180deg";
  } else {
    answerTwo.style.display = "none";
    arrowTwo.style.rotate = "0deg";
  }
}

//

questionThree.addEventListener("click", faqQThree);

function faqQThree() {
  if (answerThree.style.display == "none") {
    answerThree.style.display = "block";
    arrowThree.style.rotate = "180deg";
  } else {
    answerThree.style.display = "none";
    arrowThree.style.rotate = "0deg";
  }
}

//

questionFour.addEventListener("click", faqQFour);

function faqQFour() {
  if (answerFour.style.display == "none") {
    answerFour.style.display = "block";
    arrowFour.style.rotate = "180deg";
  } else {
    answerFour.style.display = "none";
    arrowFour.style.rotate = "0deg";
  }
}
