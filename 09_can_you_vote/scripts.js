// Instructions in the CSS

function checkAge() {
  let age = Number(document.getElementById("ageBox").value);
  let message = "";

  if (age == '') {
    message = "Enter An Age, Please - Queen Elj"
  } else if (age >= 100) {
    message = "We Cannot Accpet You. Time is of the Essence. But Your To Frail And Old To Feed To King Patti";
  } else if (age >= 18) {
    message = "You Can Join Without Any Issues!";
  } else if (age >= 14) {
    message = "You Can Enter Our Youth Program.";
  } else {
    message = "Hungry? King Patti is.";
  }

  document.getElementById("results").innerHTML = message;
}

document.getElementById("submit").onclick = checkAge
