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
    "Воскресенье",
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

function minutsOfDay() {
  const dateStart = new Date();
  dateStart.setHours(0, 0, 0, 0);

  return Math.ceil((Date.now() - dateStart.getTime()) / 60000);
}

function dateDifference(firstBirthDay, secondBirthDay) {
  const bdFirst = firstBirthDay.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  const bdSecond = secondBirthDay.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);

  if (!bdFirst || !bdSecond) {
    return "Incorrect dates";
  }

  const dayFirst = bdFirst[1];
  const monthFirst = bdFirst[2];
  const yearFirst = bdFirst[3];

  const daySecond = bdSecond[1];
  const monthSecond = bdSecond[2];
  const yearSecond = bdSecond[3];

  const dateFirst = new Date(`${yearFirst}-${monthFirst}-${dayFirst}`);
  const dateSecond = new Date(`${yearSecond}-${monthSecond}-${daySecond}`);

  if (Number.isNaN(dateFirst) || Number.isNaN(dateSecond)) {
    return "Incorrect month or day";
  }

  return dateFirst.getTime() - dateSecond.getTime() > 0
    ? "second user is younger"
    : "first user is younger";
}

export { getDayByDate, minutsOfDay, dateDifference };
