//declaring points variable to 0 to use it for increments//
let points = 0;
const correctPoints = 1;
const wrongPoints = 0;
// VALIDATION FUNCTIONS

function validateAnswer(answer) {
  if (isNaN(answer) == true) {
    alert("Please enter an integer");
    return false;
  } else if (answer < 0) {
    alert("Answer cannot be negative!");
    return false;
  } else {
    return true;
  }
}
function validateYear(year) {
  if (isNaN(year)) {
    alert("Please enter an integer ");
  } else if (year.length < 4) {
    alert("The Year must be a four digit number!");
  } else if (year < 0) {
    alert("The Year cannot be negative!");
    return false;
  } else {
    return true;
  }
}
function validateDecimal(answer) {
  const s = String(answer);
  if (isNaN(answer) == true) {
    alert("You cannot enter an integer");
  } else if (answer <= 0) {
    alert("the answer cannot be negative!");
  } else if (!s.includes(".")) {
    alert("You must include a decimal point");
  } else {
    return true;
  }
}

// all prompts//
let userAgeAnswer = parseInt(
  prompt("How old is Billie? ( Enter a 2 digit number like 30)"),
);
//if statements to use increments to score the users input/
if (validateAnswer(userAgeAnswer) && userAgeAnswer == 24) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

let userHeightAnswer = parseFloat(
  prompt(
    "How tall is Billie? (Enter a 2 digit number with a decimal point like 5.6) ",
  ),
);

if (validateDecimal(userHeightAnswer) && userHeightAnswer == 5.3) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

let userOscarsAnswer = parseInt(
  prompt("How Many Oscars does she have? (Enter a whole number)"),
);

if (validateAnswer(userOscarsAnswer) && userOscarsAnswer == 2) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

let userGrammyAnswer = parseInt(
  prompt("How Many Grammy Awards has Billie Won? (Provide a whole number) "),
);

if (validateAnswer(userGrammyAnswer) && userGrammyAnswer == 9) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

let userBirthYearAnswer = parseInt(
  prompt("What year was she born ? (Enter a 4 digit number) "),
);

if (validateYear(userBirthYearAnswer) && userBirthYearAnswer == 2001) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

let userDonationAnswer = parseFloat(
  prompt(
    "How much did she donate from her Hit Me Hard and Soft Tour ? (Enter a number with a decimal point like 11.8) ",
  ),
);

if (validateDecimal(userDonationAnswer) && userDonationAnswer == 11.5) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

let userSongLengthAnswer = parseFloat(
  prompt(
    "How long is her longest song? (Enter a 2 digit number with a decimal point like 5.6) ",
  ),
);

if (validateDecimal(userSongLengthAnswer) && userSongLengthAnswer == 5.41) {
  points += correctPoints;
} else {
  points -= wrongPoints;
}

// if else statements to give feedback based on score//
if (points == 7) {
  alert("You scored " + points + " Perfect score! You're a superfan! 🎉");
} else if (points >= 5) {
  alert(
    "You scored " + points + " points" + " Great job! You know your stuff! 👍",
  );
} else if (points >= 4) {
  alert("You scored " + points + " Not bad! You're getting there! 📚");
} else {
  alert("You scored " + points + " Keep studying! You'll get better! 💪")}
  