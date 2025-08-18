export function setupShowGameSection() {
  const gameSection = document.getElementById("game");
  const greetingSection = document.getElementById("gretting");
  const startButton = document.getElementById("start-button");

  if (!startButton) return; // evita errores

  startButton.addEventListener('click', () => {
    greetingSection.style.display = "none";
    gameSection.style.display = "flex";
  });
}
