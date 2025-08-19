import wordsData from "../../words.json";
import { setSelectedWord } from "../main";

export async function getRandomWord() {
  const wordPlaceholder = document.createElement('p');
  wordPlaceholder.id = "word";
  const gameSection = document.getElementById("game");
  //Select a random index.
  const index = Math.floor(Math.random() * wordsData.words.length);
  //Select a random word
  const word = wordsData.words[index].word;
  setSelectedWord(wordsData.words[index]);
  wordPlaceholder.textContent = word;
  gameSection.insertBefore(wordPlaceholder, gameSection.firstChild);
}
