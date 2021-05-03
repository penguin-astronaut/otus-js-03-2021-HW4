function greatesNumber(firstNumber, secondNumber) {
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    console.log(false);
  } else if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}

function showMonth(monthNumber) {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  if (!Number.isInteger(monthNumber)) {
    console.log(false);
  } else if (monthNumber < 1 || monthNumber > 12) {
    console.log("Incorrect number");
  } else {
    console.log(months[monthNumber - 1]);
  }
}

function circleInSquare(circleArea, squareArea) {
  const diameter = 2 * Math.sqrt(circleArea / 3.14);
  const sideSquare = Math.sqrt(squareArea);

  if (diameter <= sideSquare) {
    console.log(true);
  } else {
    console.log(false);
  }
}

export { greatesNumber, showMonth, circleInSquare };
