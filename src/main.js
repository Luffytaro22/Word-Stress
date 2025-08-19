import './style.css'
import { setupShowGameSection } from './js/showGameSection.js';
import { getRandomWord } from './js/showWords';
import { hyphenWord } from './js/showWordSyllables.js';
import { pressContinueButton } from './js/continueButton.js';
import { pressRestartButton } from './js/restartButton.js';
export let selectedWord; //Global word to select

document.querySelector('#app').innerHTML = `
  <div>
    <div id="overlay"></div>
    <section id="gretting">
    <h1 class="typewriter">WELCOME TO THE WORD-STRESS GAME!</h1>
    <h2>PRESS START!</h2>
    <button id="start-button" class="hide">
      <p>START</p>
    </button>
    </section>
    <section id="game">
    <button id="restart">Restart</button>
    <p id="word"></p>
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
pressContinueButton();
pressRestartButton();

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const startBn = document.getElementById("start-button");

h1.addEventListener('animationend', () => {
  h2.classList.add("typewriter");
  h2.style.animation = "typing-h2 1.5s steps(30, end) forwards, blink-caret .75s step-end infinite";
  h1.style.borderRight = "none";
});

h2.addEventListener('animationend', () => {
  startBn.classList.remove("hide");
});
