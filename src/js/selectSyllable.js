import { dictionary } from 'cmu-pronouncing-dictionary';

/**
 * Obtains the index of the stress syllable (1-based)
 * @param {string} word
 */
function getStressedIndex(word) {
  const entry = dictionary[word.toUpperCase()];
  if (!entry) return { error: `The word "${word}" is not in the dictionary.` };

  const phonemes = entry.split(' ');
  const stressedIndex = phonemes.findIndex(ph => ph.includes('1')) + 1; // index
  return { stressedIndex };
}

/**
 * Verifiy is the given syllable is correct
 * @param {string} word
 * @param {number} userIndex
 * @param {syllableElement} the syllable button element
 */
export function checkStress(word, userIndex) {
  const result = getStressedIndex(word);
  const resultContainer = document.getElementById("result");
  if (result.error) resultContainer.textContent = result.error;

  //Show a message depending if the syllable is correct or not.
  if(result.stressedIndex === userIndex){
    resultContainer.textContent = "Correct!";
  }else{
    const container = document.getElementById("syllables-container");
    for(let i = 0; i < container.children.length; i++){
      const child = container.children[i];
      if(i === (result.stressedIndex - 1)){
        resultContainer.textContent = `Incorrect!\nThe syllable is "${child.textContent}"`;
      }
    }
  }
  
}
