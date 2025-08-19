import { getRandomWord } from "./showWords";
import { hyphenWord } from "./showWordSyllables";

export function pressContinueButton(){
  const continueBn = document.getElementById("continue-bn");
  const resultContainer = document.getElementById("result-container");
  const overlay = document.getElementById("overlay");

  continueBn.addEventListener('click', () => {
    resultContainer.style.display = "none";
    overlay.style.display = "none";
    getRandomWord();
    hyphenWord(document.getElementById("word").textContent);
  });

}
