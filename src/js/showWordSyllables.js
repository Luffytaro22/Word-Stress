import nlp from 'compromise'
import speechPlugin from 'compromise-speech'
import { checkStress } from './selectSyllable';
import { selectedWord } from '../main';
nlp.plugin(speechPlugin)

export async function hyphenWord(word) {
  //Hyphen the word
  const result = nlp(word);
  
  //Obtain each syllable
  const wordHyphen = result.syllables()[0];
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
