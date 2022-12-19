var reverseWords = function (s) {
  let words = s.trim().replace(/ +/g, " ").split(" ");
  let reversedSentence = "";

  for (let i = words.length - 1; i >= 0; i--) {
    if (i === 0) {
      reversedSentence += words[i];
    } else {
      reversedSentence += words[i] + " ";
    }
  }

  console.log(reversedSentence);
  return reversedSentence;
};
