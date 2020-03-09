
/************************
 * DOM HELPER FUNCTIONS *
 ************************/
/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/
/**************************
 * SET UP EVENT LISTENERS *
 **************************/

const printValue = function(str){
  const listItem = document.createElement('li');
  const resultArea = document.querySelector('.result');
  listItem.innerText = str;
  return resultArea.appendChild(listItem);
};

const clearResults = function(){
  const resultArea = document.querySelectorAll('.result li');
  console.log(resultArea);
  for (const li of resultArea){
    li.remove();
    console.log(li.remove);
  }
};
const handleBiggify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(biggify(inputBox.value));
  };
const biggifyButton = document.querySelector('.biggify');
biggifyButton.addEventListener('click', handleBiggify);

const handleNasafy = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(nasafy(inputBox.value));
  };
const nasafyButton = document.querySelector('.nasafy');
nasafyButton.addEventListener('click', handleNasafy);

const handleCrazify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(crazify(inputBox.value));
  };
const crazifyButton = document.querySelector('.crazify');
crazifyButton.addEventListener('click', handleCrazify);

const handleReversify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(reversify(inputBox.value));
  };
const reversifyButton = document.querySelector('.reversify');
reversifyButton.addEventListener('click', handleReversify);

const handleTitleify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(titleify(inputBox.value));
  };
const titleifyButton = document.querySelector('.titleify');
titleifyButton.addEventListener('click', handleTitleify);



