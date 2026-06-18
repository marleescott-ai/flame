let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10! Queen Elj is still sad though.";

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 NICE! You might not end up in the JAWS OF DOOM... for now!";
  } else if (totalDonations >= 100) {
    message = "🚀 YOU DID IT! King Patti is pleased!";
  }

  document.getElementById("thankYouMessage").innerText = message;
}

document.getElementById("giveButton").onclick = giveTenDollars


function takeTenDollars() {
  totalDonations = totalDonations - 10;

  let message = "HOW DARE YOU! THE JAWS OF DOOM AWAIT YOUR TRIAL!.";

if (totalDonations < 0) {
  totalDonations = 0
}

 document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;
 
  document.getElementById("thankYouMessage").innerText = message;
  document.getElementById('woody')['src'] = './woody.jpg'
 }

document.getElementById("refundButton").onclick = takeTenDollars
