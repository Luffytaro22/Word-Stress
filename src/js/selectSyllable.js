export function checkStress(wordObject, userIndex) {
  const resultElement = document.getElementById("result");

  //Show a message depending if the syllable is correct or not.
  if(wordObject.stressedIndex === userIndex){
    resultElement.innerHTML = `<i class="fa-solid fa-check"></i> Correct!`;
    resultElement.parentElement.style.backgroundColor = "rgba(13, 138, 6)";
  }else{
    const container = document.getElementById("syllables-container");
    for(let i = 0; i < container.children.length; i++){
      const child = container.children[i];
      if(i === (wordObject.stressedIndex)){
        resultElement.innerHTML = `<i class="fa-solid fa-xmark"></i> The syllable is "${child.textContent}"`;
        resultElement.parentElement.style.backgroundColor = "rgba(126, 0, 0)";
      }
    }
  }
  document.getElementById("overlay").style.display = "block";
  resultElement.parentElement.style.display = "flex";
  resultElement.parentElement.classList.add("scale-in-hor-center");
}
