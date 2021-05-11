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
  if (typeof sideOne !== "number") {
    console.log("Incorrect radius value");
    return;
  }

  if (radius <= 0) {
    console.log("radius must be positive");
    return;
  }

  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius ** 2;

  console.log(circumference.toFixed(2), area.toFixed(2));
}

function getQuadraticRoots(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    console.log("Incorrect side values");
    return;
  }

  if (a === 0) {
    console.log('"a" can\'t be null');
    return;
  }

  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    console.log("no roots of the equation");
    return;
  }
  if (d === 0) {
    console.log(-b / (2 * a));
    return;
  }
  console.log(Math.sqrt(d).toFixed(2));
  const x1 = (-b - Math.sqrt(d)) / (2 * a);
  const x2 = (-b + Math.sqrt(d)) / (2 * a);

  console.log(x1, x2);
}

export { checkRectangularTriangle, getQuadraticRoots, getCircleInfo };
