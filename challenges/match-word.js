function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function matchWord(str) {
  const wordStore = [];
  if (str.length === 0) return true;
  let currWordStack = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.toUpperCase().charCodeAt(i);

    if ((charCode >= 65) && (charCode <= 90)) {
      currWordStack += str[i].toUpperCase();
      // console.log(currWordStack);
      // console.log(str[i]);
    }
    else {
      if (currWordStack.length > 0) wordStore.push(currWordStack);
      currWordStack = '';
    }
  }
  wordStore.push(currWordStack);
  const wordStack = [wordStore[0]];
  const runLength = wordStore.length;
  for (var i = 1; i < runLength; i++) {
    if (reverse(wordStore[i]) === wordStack[wordStack.length - 1]) {
      wordStack.pop();
    }
    else wordStack.push(wordStore[i]);
  }
  const result = [];
  wordStack.forEach(word => {
    if (word !== '') result.push(word);
  });
  return (result.length === 0)
}

module.exports = matchWord;
