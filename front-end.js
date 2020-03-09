
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
  console.log(resultArea)
  for (const li of resultArea){
    li.remove();
    console.log(li.remove);
  }
}
/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/



/**************************
 * SET UP EVENT LISTENERS *
 **************************/



