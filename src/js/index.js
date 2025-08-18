import { dictionary } from 'cmu-pronouncing-dictionary';
import hyphen from 'hyphen/en/index.js';



/**
 * Convierte una transcripción fonética en sílabas con stress
 * @param {string} phonemes - string de fonemas CMUdict, ej: "F OW1 T AH0 G R AE2 F"
 */
function parseSyllables(phonemes) {
  const parts = phonemes.split(' ');
  let syllables = [];
  let current = [];

  parts.forEach((ph) => {
    current.push(ph.replace(/[0-9]/, '')); // quitamos el número
    if (/[0-9]/.test(ph)) {
      syllables.push({
        text: current.join(''),
        stress: ph.includes('1') ? 1 : ph.includes('2') ? 2 : 0
      });
      current = [];
    }
  });

  if (current.length > 0) {
    syllables[syllables.length - 1].text += current.join('');
  }

  return syllables;
}

/**
 * Divide una palabra en sílabas y marca la acentuada
 * @param {string} word - palabra en inglés
 */
function syllabify(word) {
  const entry = dictionary[word.toLowerCase()];
  if (!entry) {
    return { error: `La palabra "${word}" no está en el diccionario.` };
  }

  const syllables = parseSyllables(entry);

  // Formato visual
  const marked = syllables.map((s) => (s.stress === 1 ? s.text.toUpperCase() : s.text));

  return {
    word,
    syllables,
    markedWord: marked.join('-'),
    stressedIndex: syllables.findIndex((s) => s.stress === 1) + 1 // índice humano (1-based)
  };
}

/**
 * Verifica si la sílaba dada es la acentuada
 * @param {string} word - palabra en inglés
 * @param {number} userIndex - número de sílaba (1-based)
 */
function checkStress(word, userIndex) {
  const result = syllabify(word);
  if (result.error) return result;

  return {
    ...result,
    userAnswer: userIndex,
    correct: result.stressedIndex === userIndex
  };
}

// -------------------------
// Ejemplos
// -------------------------
/* console.log(syllabify('photograph'));
// → { word: 'photograph', syllables: [...], markedWord: 'PHO-to-graph', stressedIndex: 1 }

console.log(syllabify('photography'));
// → { word: 'photography', syllables: [...], markedWord: 'pho-TOG-ra-phy', stressedIndex: 2 }

console.log(checkStress('photograph', 1));
// → correcto ✅

console.log(checkStress('photograph', 2));
// → incorrecto ❌

(async () => {
  const word = "photography";

  const result = await hyphen.hyphenate(word, {
    hyphenChar: "-"
  });
  console.log(result); // → "pho­to­graph"
})();
 */
