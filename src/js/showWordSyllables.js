import nlp from 'compromise';
import plg from 'compromise-speech'
import { checkStress } from './selectSyllable';
import { selectedWord } from '../main';
nlp.extend(plg)

export async function hyphenWord(word) {
  //Hyphen the word
  const result = await nlp(word);
  //Obtain each syllable
  const wordSyllables = result.syllables()[0];
  const container = document.getElementById("syllables-container");
  container.innerHTML = '';
  //Insert each syllable in the button items.
  for(let i = 0; i < wordSyllables.length; i++){
    
    const syllablePlaceholder = document.createElement("button");
    syllablePlaceholder.className = "syllable";
    syllablePlaceholder.textContent = wordSyllables[i];
    syllablePlaceholder.addEventListener('click', () => checkStress(selectedWord, i));
    container.appendChild(syllablePlaceholder);
  }
};
