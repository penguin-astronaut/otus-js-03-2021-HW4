const arr = [2, 3, 5, 10, 12, 56, -45, 0, 1000, 234];

const arrNew = arr.map((item) => item * 2);

const maxItem = Math.max(...arr);
const minItem = Math.min(...arr);

export { arrNew, maxItem, minItem };
