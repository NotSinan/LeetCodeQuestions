var isPalindrome = function (x) {
  const number = x.toString(); // 121 into "121"
  let reversedNumber = "";

  // number.length returns the amount of elements rather than the index
  // say 121 = 3
  // 0 1 2 = 3 chars

  for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber += number[i];
  }

  //convert back to integer

  if (parseInt(reversedNumber) === x) {
    return true;
  }

  return false;
};
