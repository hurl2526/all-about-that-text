
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


//Click clearInputbox Function for each button and user input
const clearInputBox = function() {
  document.querySelector('#user-input').value = '';
  document.querySelector('#user-input').focus();

};

const clearInputBox2 = function() {
  document.querySelector('#user-input2').value = '';
  document.querySelector('#user-input2').focus();

};

const clearInputBox3 = function() {
  document.querySelector('#user-input3').value = '';
  document.querySelector('#user-input3').focus();

};

const clearInputBox4 = function() {
  document.querySelector('#user-input4').value = '';
  document.querySelector('#user-input4').focus();

};

const clearInputBox5 = function() {
  document.querySelector('#user-input5').value = '';
  document.querySelector('#user-input5').focus();

};

const clearInputBox6 = function() {
  document.querySelector('#user-input6').value = '';
  document.querySelector('#user-input6').focus();

};


biggifyButton.addEventListener('click', clearInputBox);

const handleNasafy = function(){
  const inputBox = document.querySelector('#user-input2');
  clearResults()
printValue(nasafy(inputBox.value));
  };
const nasafyButton = document.querySelector('.nasafy');


nasafyButton.addEventListener('click', handleNasafy);
nasafyButton.addEventListener('click', clearInputBox2);

const handleCrazify = function(){
  const inputBox = document.querySelector('#user-input3');
  clearResults()
printValue(crazify(inputBox.value));
  };
const crazifyButton = document.querySelector('.crazify');
crazifyButton.addEventListener('click', handleCrazify);
crazifyButton.addEventListener('click', clearInputBox3);

const handleReversify = function(){
  const inputBox = document.querySelector('#user-input4');
  clearResults()
printValue(reversify(inputBox.value));
  };
const reversifyButton = document.querySelector('.reversify');
reversifyButton.addEventListener('click', handleReversify);
reversifyButton.addEventListener('click', clearInputBox4);


const handleTitleify = function(){
  const inputBox = document.querySelector('#user-input5');
  clearResults()
printValue(titleify(inputBox.value));
  };
const titleifyButton = document.querySelector('.titleify');
titleifyButton.addEventListener('click', handleTitleify);
titleifyButton.addEventListener('click', clearInputBox5);

const handleemailify = function(){
  const inputBox = document.querySelector('#user-input6');
  clearResults()
printValue(emailify(inputBox.value));
  };
const emailifyButton = document.querySelector('.emailify');
emailifyButton.addEventListener('click', handleemailify);
emailifyButton.addEventListener('click', clearInputBox6);

