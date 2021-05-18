function sumAndMultiply(firstNumber, secondNumber) {
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    console.log(false);
  } else {
    console.log(firstNumber + secondNumber, firstNumber * secondNumber);
  }
}

sumAndMultiply(3, "14");

function sumOfLengthStrings(firstString, secondString) {
  if (typeof firstString !== "string" || typeof secondString !== "string") {
    console.log(false);
  } else {
    console.log(firstString.length + secondString.length);
  }
}

function sumDigitOfNumber() {
  const number = +prompt("Input three-digit number", 100);
  if (Number.isNaN(number) || number < 100 || number > 999) {
    console.log(false);
  } else {
    const thirdDigit = number % 10;
    const secondDigit = (number - (number % 100)) / 100;
    const firstDigit = (number - secondDigit * 100 - thirdDigit) / 10;

    console.log(firstDigit + secondDigit + thirdDigit);
  }
}

export { sumAndMultiply, sumDigitOfNumber, sumOfLengthStrings };
