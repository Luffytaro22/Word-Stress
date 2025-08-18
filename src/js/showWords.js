import { dictionary } from 'cmu-pronouncing-dictionary';
export function showWords(){
  const min = 100;
  const max = 100000;
  const randomNumber = Math.random() * (max - min) + min;
  const wordPlaceholder = document.createElement('p');
  const gameSection = document.getElementById("game");

  wordPlaceholder.textContent = Object.keys(dictionary).at(randomNumber);

  gameSection.appendChild(wordPlaceholder);
}
