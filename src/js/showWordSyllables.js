import hyphen from 'hyphen/en/index.js';
export async function hyphenWord(word) {
  //Hyphen the word
  const result = await hyphen.hyphenate(word, {
    hyphenChar: "-"
  });
  //Obtain each syllable
  const wordHyphen = result.split("-");
  //Insert each syllable in the p items.
  for(let i = 0; i < wordHyphen.length; i++){
    const syllablePlaceholder = document.createElement("button");
    syllablePlaceholder.className = "syllable";
    syllablePlaceholder.textContent = wordHyphen[i];
    const container = document.getElementById("syllables-container");
    container.appendChild(syllablePlaceholder);
  }
};
