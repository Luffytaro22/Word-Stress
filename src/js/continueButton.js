import { getRandomWord } from "./showWords";
import { hyphenWord } from "./showWordSyllables";

export function pressContinueButton(){
  const continueBn = document.getElementById("continue-bn");
  const resultContainer = document.getElementById("result-container");
  const overlay = document.getElementById("overlay");

  continueBn.addEventListener('click', () => {
    resultContainer.classList.remove("scale-in-hor-center");
    resultContainer.classList.add("scale-out-horizontal");
    setTimeout(() => {
      resultContainer.style.display = "none";
      resultContainer.classList.remove("scale-out-horizontal");
    }, 500);
    overlay.style.display = "none";
    getRandomWord();
    hyphenWord(document.getElementById("word").textContent);
  });

}
