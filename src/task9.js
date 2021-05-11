function checkRectangularTriangle(sideOne, sideTwo, sideThree) {
  if (
    typeof sideOne !== "number" ||
    typeof sideTwo !== "number" ||
    typeof sideThree !== "number"
  ) {
    return "Incorrect side values";
  }

  if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
    return "side must be positive";
  }

  if (sideOne > sideTwo && sideOne > sideThree) {
    return sideOne ** 2 === sideOne ** 2 + sideThree ** 2;
  }
  if (sideTwo > sideOne && sideTwo > sideThree) {
    return sideTwo ** 2 === sideOne ** 2 + sideThree ** 2;
  }

  return sideThree ** 2 === sideOne ** 2 + sideTwo ** 2;
}

function getCircleInfo(radius) {
  if (typeof radius !== "number" || radius <= 0) {
    console.log("Incorrect radius value");
    return;
  }

  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius ** 2;

  console.log(+circumference.toFixed(2), +area.toFixed(2));
}

export { checkRectangularTriangle, getCircleInfo };
