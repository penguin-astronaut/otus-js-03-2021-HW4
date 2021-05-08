function diff(firstNumber, secondNumber) {
  return firstNumber > secondNumber
    ? firstNumber - secondNumber
    : secondNumber - firstNumber;
}

function isWord(string) {
  return !/\s+/.test(string);
}

function pow(number, degree) {
  if (degree === 0) {
    return 1;
  }

  let res = number;
  while (degree > 1) {
    res *= number;
  }

  return res;
}

export { diff, isWord, pow };
