import './style.css'
import { setupShowGameSection } from './js/showGameSection.js';
import { getRandomWord } from './js/showWords';
import { hyphenWord } from './js/showWordSyllables.js';
export let selectedWord; //Global word to select

document.querySelector('#app').innerHTML = `
  <div>
    <div id="overlay"></div>
    <section id="gretting">
    <h1>WELCOME TO THE WORD-STRESS GAME!</h1>
    <h2>PRESS START!</h2>
    <button id="start-button">
      <p>START</p>
    </button>
    </section>
    <section id="game">
    <p>Select the syllable with the stress</p>
    <div id="syllables-container"></div>
    <div id="result-container">
    <p id="result"></p>
    <button id="continue-bn">Continue</button>
    </div>
    </section>
  </div>
`

export function setSelectedWord(word){
  selectedWord = word;
}

setupShowGameSection();
await getRandomWord();
hyphenWord(document.getElementById("word").textContent);
