
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
  for (const li of resultArea){
    li.remove();
  }
};
// Button Function for biggify
const handleBiggify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(biggify(Number(inputBox.value)));
  };

//Click addEventListener call handleBiggify Function
const biggifyButton = document.querySelector('.biggify');
biggifyButton.addEventListener('click', handleBiggify);


//Click clearInputbox
const clearInputBox = function() {
  document.querySelector('#user-input').value = '';
  document.querySelector('#user-input').focus();

};

clearInputBox();

biggifyButton.addEventListener('click', clearInputBox);

const handleNasafy = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(nasafy(inputBox.value));
  };
const nasafyButton = document.querySelector('.nasafy');


nasafyButton.addEventListener('click', handleNasafy);
nasafyButton.addEventListener('click', clearInputBox);

const handleCrazify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(crazify(inputBox.value));
  };
const crazifyButton = document.querySelector('.crazify');
crazifyButton.addEventListener('click', handleCrazify);
crazifyButton.addEventListener('click', clearInputBox);

const handleReversify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(reversify(inputBox.value));
  };
const reversifyButton = document.querySelector('.reversify');
reversifyButton.addEventListener('click', handleReversify);
reversifyButton.addEventListener('click', clearInputBox);


const handleTitleify = function(){
  const inputBox = document.querySelector('#user-input');
  clearResults()
printValue(titleify(inputBox.value));
  };
const titleifyButton = document.querySelector('.titleify');
titleifyButton.addEventListener('click', handleTitleify);
titleifyButton.addEventListener('click', clearInputBox);


