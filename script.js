
let isOn = false;
let filmCount = 5;
let photoCount = 0;
let photoState = "hidden";
let developTimer;

//power
const powerButton = document.getElementById("powerButton");

powerButton.addEventListener("click", function() {
  if (isOn === false) {
    isOn = true;
    powerStatus.textContent = "Power: ON";
    statusMessage.textContent = "Camera is ready!";
  } else {
    isOn = false;
    powerStatus.textContent = "Power: OFF";
    statusMessage.textContent = "Camera is off.";
  }
});


const powerStatus = document.getElementById("powerStatus");
const statusMessage = document.getElementById("statusMessage");

//shutter
const shutterButton = document.getElementById("shutterButton");
const filmStatus = document.getElementById("filmStatus");
const photoCountDisplay = document.getElementById("photoCount");


shutterButton.addEventListener("click", function() {

  if (isOn === false) {
    statusMessage.textContent = "Turn on the camera first!";

  } else if (filmCount === 0) {
    statusMessage.textContent = "Out of film!";

  } else {
    filmCount = filmCount - 1;
    photoCount = photoCount + 1;

    filmStatus.textContent = "Film Remaining: " + filmCount;
    photoCountDisplay.textContent = "Photos Taken: " + photoCount;

    statusMessage.textContent = "Photo taken!";
    
 
    
    
    photoState = "developing";
    photoArea.style.display = "flex";
    photoImage.classList.remove("developed");

    clearInterval(countdownTimer);
    timeLeft = 5;
    developStatus.textContent = "Developing... " + timeLeft + "s";


    countdownTimer = setInterval(function() {
    timeLeft = timeLeft - 1;

    if (timeLeft > 0) { 
    developStatus.textContent = "Developing... " + timeLeft + "s";} 
    
    else {
    clearInterval(countdownTimer);
    photoState = "developed";
    photoImage.classList.add("developed");
    developStatus.textContent = "Photo developed!";}}, 1000); }

});


//reload
const reloadButton = document.getElementById("reloadButton");

reloadButton.addEventListener("click", function() {

  if (isOn === true) {
    statusMessage.textContent = "Turn off the camera before reloading!";

  } else {
    filmCount = 5;
    filmStatus.textContent = "Film Remaining: " + filmCount;
    statusMessage.textContent = "Film reloaded successfully!";

  }

});

//photo showing

const photoArea = document.getElementById("photoArea");
const developStatus = document.getElementById("developStatus");


photoArea.style.display = "none";

const photoImage = document.getElementById("photoImage");


//photo showing countdown
let countdownTimer;
let timeLeft = 5;

