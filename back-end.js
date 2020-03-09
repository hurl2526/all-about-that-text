const biggify = function(num) {
  return num + 9000;
}

const nasafy = function(num) {
  const countdown = [];
  let current = num;

  while (current >= 1) {
    countdown.push(current);
    current--;
  }

  countdown.push('Blast off!');

  return countdown;
}

const reversify = function(str) {
  return str.split('').reverse().join('');
}

const titleify = function(str) {
  let titleCasedWords = [];
  for (const word of str.split(' ')) {
    titleCasedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return titleCasedWords.join(' ');
}

const crazify = function(str) {
  let crazified = '';
  let crazyI = 0;
  for (const character of str) {
    if (character === ' ') {
      crazified += ' ';
    } else {
      crazified += crazyI % 2 === 1
        ? character.toUpperCase()
        : character.toLowerCase();
      crazyI++;
    }
  }

  return crazified;
}

const emailify = function (name) {
  let answer = '';
  for (let i = 0; i < name.length; i++){
    if(name[i] === ' ') {
      answer = answer + '.';
    } else {
      answer = answer + name[i];
    }
  }
  return answer.toLowerCase() + '@codeimmersives.com';
}

if (typeof module === 'undefined') {
  module = {};
}

module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
  emailify,
}
