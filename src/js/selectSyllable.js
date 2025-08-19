export function checkStress(wordObject, userIndex) {
  const resultElement = document.getElementById("result");

  //Show a message depending if the syllable is correct or not.
  if(wordObject.stressedIndex === userIndex){
    resultElement.textContent = "Correct!";
    resultElement.parentElement.style.backgroundColor = "rgba(13, 138, 6)";
  }else{
    const container = document.getElementById("syllables-container");
    for(let i = 0; i < container.children.length; i++){
      const child = container.children[i];
      if(i === (wordObject.stressedIndex)){
        resultElement.textContent = `Incorrect! The syllable is "${child.textContent}"`;
        resultElement.parentElement.style.backgroundColor = "rgba(126, 0, 0)";
      }
    }
  }
  resultElement.parentElement.style.display = "flex";
}
