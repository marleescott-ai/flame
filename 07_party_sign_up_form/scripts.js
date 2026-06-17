function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
  let security = document.getElementById("securityInput").value
  let birthday = document.getElementById("birthInput").value
  let fear = document.getElementById("fearInput").value

  let message = `Welcome offically to the party ${name}! \n This is the fine print of the Pattinson Party. \n Can we confirm this is your region ${region}? \n Can we confirm this is your soical security number ${security}? \n Can we confirm this is your birthday ${birthday} \n Can we confirm this is your fear? ${fear} \n Amazing! You are offically in the PP party! Now an acceptance letter will come by carrier pigeon in the next few months. \n Now Remember \n YOU CAN NEVER LEAVE NOW. \n We Know Your Every Move. \n We Know Everything About You \n And King Patti Is Hungry. \n So Don't Step Out Of Line Or You Might Find Yourself in the JAWS OF DOOM`
  document.getElementById("output").innerText = message; 
}

document.getElementById("signupButton").onclick = showSignupMessage
