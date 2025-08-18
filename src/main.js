import './style.css'
import './js/index'
import { setupShowGameSection } from './js/showGameSection.js';
import { getRandomWord } from './js/showWords';

document.querySelector('#app').innerHTML = `
  <div>
    <section id="gretting">
    <h1>WELCOME TO THE WORD-STRESS GAME!</h1>
    <h2>PRESS START!</h2>
    <button id="start-button">
      <p>START</p>
    </button>
    </section>
    <section id="game">
    <p>Select the syllable with the stress</p>
    
    </section>
  </div>
`

setupShowGameSection();
getRandomWord();
