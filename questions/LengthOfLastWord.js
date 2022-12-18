var lengthOfLastWord = function (s) {
  const arrayList = s.trim().split(" ");

  const lastWord = arrayList[arrayList.length - 1].length;

  return lastWord;
};
