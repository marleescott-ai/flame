let nameInput = document.getElementById("nameInput"); 
let roleInput = document.getElementById("roleInput"); 
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output"); 

function sayHello() {
  let name = nameInput.value; //takes the name//
  let role = roleInput.value;
  let bank = bankInput.value;
  let place = placeInput.value;
  output.innerText = " Welcome, " + name + " the " + role + " to the Pattinson Party or PP for short. We'll be withdrawing $1000 every day from " + bank + " for your daily fee's. We will be sending spam mail to " + place + ". Have a Great day, We'll see you soon.😏👣🔥🥚 " ; //Makes the message//
}

greetButton.onclick = sayHello; //prints the prints the message on the page//
