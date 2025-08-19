export function checkStress(wordObject, userIndex) {
  const resultContainer = document.getElementById("result");

  //Show a message depending if the syllable is correct or not.
  if(wordObject.stressedIndex === userIndex){
    resultContainer.textContent = "Correct!";
  }else{
    const container = document.getElementById("syllables-container");
    for(let i = 0; i < container.children.length; i++){
      const child = container.children[i];
      if(i === (result.stressedIndex)){
        resultContainer.textContent = `Incorrect!\nThe syllable is "${child.textContent}"`;
      }
    }
  }
  
}
