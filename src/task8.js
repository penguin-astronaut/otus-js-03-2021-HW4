function getDayByDate() {
  const date = prompt("Input date in format dd.mm.yyyy");

  const result = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!result) {
    return "Incorrect date";
  }

  const day = result[1];
  const month = result[2];
  const year = result[3];

  const dateObj = new Date(`${year}-${month}-${day}`);

  const daysName = [
    "Восересенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const curDay = dateObj.getDay();
  if (Number.isNaN(curDay)) {
    return "Incorrect month or day";
  }

  return daysName[curDay];
}

export { getDayByDate };
