function checkDate() {
  const string = prompt("input date");
  return /^\d{2}[.\-/]\d{2}[.\-/]\d{4,}$/.test(string);
}

function checkEmail() {
  const string = prompt("input email");
  return /^[\dA-zА-я]+@[\dA-zА-я]+\.[A-zА-я]+$/.test(string);
}

export { checkDate, checkEmail };
