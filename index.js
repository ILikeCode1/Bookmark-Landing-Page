let mobileMenu = document.getElementById("mobileMenu");
let mobileNav = document.getElementById("mobileNav");

mobileMenu.addEventListener("click", mobileMenuF);

// Activates mobile menu
function mobileMenuF() {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
}

// Prevents mobile menu from appearing in desktop site
var e = window.matchMedia("(min-width: 1500px)");
e.addListener(mediaQuery);

function mediaQuery(e) {
  if (e.matches) {
    mobileNav.style.display = "none";
  }
}

// FAQ section
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

//
let featuresSelector1 = document.getElementById("features-selector-1");
let featuresTab1 = document.querySelector(".feature-tab-1");

var featuresSelector2 = document.getElementById("features-selector-2 ");
let featuresTab2 = document.querySelector(".feature-tab-2");

let featuresSelector3 = document.getElementById("features-selector-3");
let featuresTab3 = document.querySelector(".feature-tab-3");

featuresSelector1.addEventListener("click", tabOne);

function tabOne() {
  if (featuresTab1.style.display == "none") {
    featuresTab1.style.display = "flex";
    featuresTab2.style.display = "none";
    featuresTab3.style.display = "none";
  } else {
    featuresTab1.style.display = "flex";
    featuresTab2.style.display = "none";
    featuresTab3.style.display = "none";
  }
}
