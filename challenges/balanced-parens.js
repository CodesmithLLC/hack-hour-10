// Determines if a string has balanced () [] {}
function balancedParens(input) {
  const stack = [], array = Array.from(input);
  for (let i = 0; i < array.length; i += 1) {
    switch (char = array[i]) {
      case '(': case '[': case '{': stack.push(char); break;
      case ')': if (stack.pop() !== '(') return false; break;
      case ']': if (stack.pop() !== '[') return false; break;
      case '}': if (stack.pop() !== '{') return false; break;
    }
  }
  return stack.length ? false : true;
}

module.exports = balancedParens;
