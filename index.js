let questionOne = document.querySelectorAll(".Q1");
let answerOne = document.querySelectorAll(".A1");

function faqOne() {
  answerOne.style.display = "block";
}

for (e = 0; e < answerOne.length; e++) {
  answerOne[e].style.display = "block";
}

for (i = 0; i < questionOne.length; i++) {
  questionOne[i].addEventListener("click", faqOne);
}
