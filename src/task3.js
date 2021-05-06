function sumNumbers() {
  let sum = 0;

  for (let i = 50; i <= 100; i += 1) {
    sum += i;
  }

  console.log(sum);
}

function multiplicationTableForSeven() {
  for (let i = 1; i < 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

function average() {
  const max = prompt("Input number");

  if (!Number.isInteger(max)) {
    console.log(false);
  } else if (max < 1) {
    console.log("Number must be positive");
  } else {
    let sum = 0;
    for (let number = 0; number <= max; number += 1) {
      sum += number % 2 ? number : 0;
    }

    console.log(sum);
  }
}

export { sumNumbers, multiplicationTableForSeven, average };
