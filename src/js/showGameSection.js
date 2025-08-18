const gameSection = document.getElementById("game");
const greetingSection = document.getElementById("gretting");
const startButton = document.getElementById("start-button");

function changeGameGreetingState(){
  greetingSection.style.display = "none";
  gameSection.style.display = "flex";
}

startButton.addEventListener('click', changeGameGreetingState);
