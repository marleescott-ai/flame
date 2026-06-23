function matchRole() {
  let positionElement = document.querySelector('input[name="alignment"]:checked');
  let message = "";
  let patti = document.getElementById('patti')
  patti.hidden = false
  let elj = document.getElementById('elj')
  elj.hidden = false
  let wizard = document.getElementById('wizard')
  wizard.hidden = false

  if (!positionElement) {
    message = "Please choose a party alignment.";
  } else {
    let position = positionElement.value;
    let selectedIssues = [];

    let issueBoxes = document.querySelectorAll('.issue');
    for (let i = 0; i < issueBoxes.length; i++) {
      if (issueBoxes[i].checked) {
        selectedIssues.push(issueBoxes[i].value);
      }
    }

    if (selectedIssues.length == 0) {
      message = "Please Select At Least One Element You Desire.";
    } else if (position == "progressive" && selectedIssues.includes("environment")) {
      message = "🔥 You’d be perfect for the Hot Team.";
    } else if (position == "moderate" && selectedIssues.includes("economy")) {
      message = "🛣️ You’d Make A Great Road Laying Team Member."
    } else if (position == "traditional" || selectedIssues.includes("education")) {
      message = "🧼 You’d Bring Valuable Perspective To JAWS OF DOOM Cleaning Squad.";
    } else if (position == "traditional" || selectedIssues.includes("housing")) {
      message = "🏰 You’d Be The Best At Building The New Castle.";
    } else {
      message = "🧪 You Bring No Value To The Party... The Wizard will take you for expermination!";
    }
  }

  document.getElementById("matchResult").innerText = message;
}

document.getElementById("matchButton").onclick = matchRole;
