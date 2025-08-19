import wordsData from "../../words.json";
import { selectedWord } from "../main";

export async function getRandomWord() {
  const wordPlaceholder = document.createElement('p');
  wordPlaceholder.id = "word";
  const gameSection = document.getElementById("game");
  //Select a random index.
  const index = Math.random() * 300;
  //Select a random word
  const word = wordsData.words[index].word;
  selectedWord = wordsData.words[index];
  wordPlaceholder.textContent = word;
  gameSection.insertBefore(wordPlaceholder, gameSection.firstChild);
}
