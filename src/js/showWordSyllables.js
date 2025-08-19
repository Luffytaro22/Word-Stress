import hyphen from 'hyphen/en/index.js';
import { checkStress } from './selectSyllable';
import { selectedWord } from '../main';

export async function hyphenWord(word) {
  //Hyphen the word
  const result = await hyphen.hyphenate(word, {
    hyphenChar: "-"
  });
  //Obtain each syllable
  const wordHyphen = result.split("-");
  const container = document.getElementById("syllables-container");
  container.innerHTML = '';
  //Insert each syllable in the button items.
  for(let i = 0; i < wordHyphen.length; i++){
    
    const syllablePlaceholder = document.createElement("button");
    syllablePlaceholder.className = "syllable";
    syllablePlaceholder.textContent = wordHyphen[i];
    syllablePlaceholder.addEventListener('click', () => checkStress(selectedWord, i));
    container.appendChild(syllablePlaceholder);
  }
};
