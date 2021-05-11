function checkDate() {
  const string = prompt("input date");
  return /^\d{2}[.\-/]\d{2}[.\-/]\d{4,}$/.test(string);
}

function checkEmail() {
  const string = prompt("input email");
  return /^[\da-z.]+@[\da-z]+\.[a-z]+$/.test(string);
}

export { checkDate, checkEmail };
