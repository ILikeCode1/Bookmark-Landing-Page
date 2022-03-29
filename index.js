let questionOne = document.getElementById("Q1");
let answerOne = document.querySelector(".A1");

let questionTwo = document.getElementById("Q2");
let answerTwo = document.querySelector(".A2");

let questionThree = document.getElementById("Q3");
let answerThree = document.querySelector(".A3");

let questionFour = document.getElementById("Q4");
let answerFour = document.querySelector(".A4");

//

questionOne.addEventListener("click", faqQOne);

function faqQOne() {
  if (answerOne.style.display == "none") {
    answerOne.style.display = "block";
  } else {
    answerOne.style.display = "none";
  }
}
//

questionTwo.addEventListener("click", faqQTwo);

function faqQTwo() {
  if (answerTwo.style.display == "none") {
    answerTwo.style.display = "block";
  } else {
    answerTwo.style.display = "none";
  }
}

//

questionThree.addEventListener("click", faqQThree);

function faqQThree() {
  if (answerThree.style.display == "none") {
    answerThree.style.display = "block";
  } else {
    answerThree.style.display = "none";
  }
}

//

questionFour.addEventListener("click", faqQFour);

function faqQFour() {
  if (answerFour.style.display == "none") {
    answerFour.style.display = "block";
  } else {
    answerFour.style.display = "none";
  }
}
