let mobileNav = document.getElementById("mobileNav");
let oMobileMenu = document.getElementById("openMobileMenu");
let cMobileMenu = document.getElementById("closeMobileMenu");
let mainLogo = document.querySelector(".header-logo");

// Activates mobile menu
oMobileMenu.addEventListener("click", openMobileMenu);

function openMobileMenu() {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
    oMobileMenu.style.display = "none"; //removes menu button when menu is shown
    mainLogo.style.display = "none";
  } else {
    mobileNav.style.display = "none";
  }
}

// Closes mobile menu
cMobileMenu.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  if (mobileNav.style.display == "block") {
    mobileNav.style.display = "none";
    oMobileMenu.style.display = "block"; //adds menu button after closing
    mainLogo.style.display = "block";
  } else {
    oMobileMenu.style.display = "none";
  }
}

// Prevents mobile menu from appearing in desktop site
var e = window.matchMedia("(min-width: 950px)");
e.addListener(mediaQuery);

function mediaQuery(e) {
  if (e.matches) {
    mobileNav.style.display = "none";
    mainLogo.style.display = "block";
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

// FEATURES section
let featuresSelector1 = document.getElementById("features-selector-1");
let featuresTab1 = document.querySelector(".feature-tab-1");

var featuresSelector2 = document.getElementById("features-selector-2");
let featuresTab2 = document.querySelector(".feature-tab-2");

let featuresSelector3 = document.getElementById("features-selector-3");
let featuresTab3 = document.querySelector(".feature-tab-3");

featuresSelector1.addEventListener("click", tabOne);

function tabOne() {
  if (featuresTab1.style.display == "none") {
    featuresTab1.style.display = "flex";
    featuresSelector1.style.color = "hsl(229, 31%, 21%)";
    featuresSelector1.style.borderBottom = "0.4rem solid hsl(0, 94%, 66%)";
    featuresTab2.style.display = "none";
    featuresSelector2.style.color = "hsl(229, 8%, 60%)";
    featuresSelector2.style.borderBottom = "0.1rem solid lightgrey";
    featuresTab3.style.display = "none";
    featuresSelector3.style.color = "hsl(229, 8%, 60%)";
    featuresSelector3.style.borderBottom = "0.1rem solid lightgrey";
  } else {
    featuresTab1.style.display = "flex";
    featuresSelector1.style.color = "hsl(229, 31%, 21%)";
    featuresSelector1.style.borderBottom = "0.4rem solid hsl(0, 94%, 66%)";
    featuresTab2.style.display = "none";
    featuresSelector2.style.color = "hsl(229, 8%, 60%)";
    featuresSelector2.style.borderBottom = "0.1rem solid lightgrey";
    featuresTab3.style.display = "none";
    featuresSelector3.style.color = "hsl(229, 8%, 60%)";
    featuresSelector3.style.borderBottom = "0.1rem solid lightgrey";
  }
}

featuresSelector2.addEventListener("click", tabTwo);

function tabTwo() {
  if (featuresTab2.style.display == "none") {
    featuresTab2.style.display = "flex";
    featuresSelector2.style.color = "hsl(229, 31%, 21%)";
    featuresSelector2.style.borderBottom = "0.4rem solid hsl(0, 94%, 66%)";
    featuresTab1.style.display = "none";
    featuresSelector1.style.color = "hsl(229, 8%, 60%)";
    featuresSelector1.style.borderBottom = "none";
    featuresTab3.style.display = "none";
    featuresSelector3.style.color = "hsl(229, 8%, 60%)";
    featuresSelector3.style.borderBottom = "0.1rem solid lightgrey";
  } else {
    featuresTab2.style.display = "flex";
    featuresSelector2.style.color = "hsl(229, 31%, 21%)";
    featuresSelector2.style.borderBottom = "0.4rem solid hsl(0, 94%, 66%)";
    featuresTab1.style.display = "none";
    featuresSelector1.style.color = "hsl(229, 8%, 60%)";
    featuresSelector1.style.borderBottom = "none";
    featuresTab3.style.display = "none";
    featuresSelector3.style.color = "hsl(229, 8%, 60%)";
    featuresSelector3.style.borderBottom = "0.1rem solid lightgrey";
  }
}

featuresSelector3.addEventListener("click", tabThree);

function tabThree() {
  if (featuresTab3.style.display == "none") {
    featuresTab3.style.display = "flex";
    featuresSelector3.style.color = "hsl(229, 31%, 21%)";
    featuresSelector3.style.borderBottom = "0.4rem solid hsl(0, 94%, 66%)";
    featuresTab2.style.display = "none";
    featuresSelector2.style.color = "hsl(229, 8%, 60%)";
    featuresSelector2.style.borderBottom = "0.1rem solid lightgrey";
    featuresTab1.style.display = "none";
    featuresSelector1.style.color = "hsl(229, 8%, 60%)";
    featuresSelector1.style.borderBottom = "0.1rem solid lightgrey";
  } else {
    featuresTab3.style.display = "flex";
    featuresSelector3.style.color = "hsl(229, 31%, 21%)";
    featuresSelector3.style.borderBottom = "0.4rem solid hsl(0, 94%, 66%)";
    featuresTab2.style.display = "none";
    featuresSelector2.style.color = "hsl(229, 8%, 60%)";
    featuresSelector2.style.borderBottom = "0.1rem solid lightgrey";
    featuresTab1.style.display = "none";
    featuresSelector1.style.color = "hsl(229, 8%, 60%)";
    featuresSelector1.style.borderBottom = "0.1rem solid lightgrey";
  }
}
