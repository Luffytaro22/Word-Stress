export function pressRestartButton(){
  const restartBn = document.getElementById("restart");
  const gameSection = document.getElementById("game");
  const grettingSection = document.getElementById("gretting");

  restartBn.addEventListener('click', () => {
    gameSection.style.display = "none";
    grettingSection.style.display = "flex";
  });
}
