function balancingParentheses(string) {
  let stack = [], additional = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(string[i]);
    } else {
      if (stack.length === 0) {
        additional++;
      } else {
        stack.pop();
      }
    }
  }
  return additional + stack.length;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
