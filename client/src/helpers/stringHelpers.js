export const makeCapital = word => {
  let words = word.split(' ');
  let newWord = '';

  if(words.length > 1) {
    for (var value of words) {
      newWord += (capitalizeWord(value) + ' ')
    }
  } else {
    newWord = capitalizeWord(word)
  }

  return newWord;
}

const capitalizeWord = word => {
  let myWord = word.charAt(0).toUpperCase() + word.slice(1)
  return myWord;
}