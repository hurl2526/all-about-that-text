
/************************
 * DOM HELPER FUNCTIONS *
 ************************/
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

const biggifyButton = document.querySelector('.biggify btn btn-primary')

biggifyButton.addEventListener('click', handleBiggify)

printValue(biggify(inputBox.value))

}
;

handleBiggify()




// const ols = document.querySelectorAll('ol li');

// const lineThrough = function(event){
//   event.target.style.textDecoration = 'line-through';
// };

// for (const li of ols){
//   li.addEventListener('click',lineThrough);
// }

/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/



/**************************
 * SET UP EVENT LISTENERS *
 **************************/



