import { dictionary } from 'cmu-pronouncing-dictionary';
const randomNumber = Math.random() * 1000;
const wordPlaceholder = document.createElement('p');
const gameSection = document.getElementById("game");

wordPlaceholder.textContent = Object.keys(dictionary).at(randomNumber);

gameSection.appendChild(wordPlaceholder);
