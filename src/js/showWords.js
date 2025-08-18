export async function getRandomWord() {
  const wordPlaceholder = document.createElement('p');
  wordPlaceholder.id = "word";
  const gameSection = document.getElementById("game");
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    if (!response.ok) {
      throw new Error('Error in the API response');
    }
    const word = await response.json();
    wordPlaceholder.textContent = word;
    gameSection.insertBefore(wordPlaceholder, gameSection.firstChild);
  } catch (error) {
    console.error('Error obtaining the word: ', error);
  }
}
