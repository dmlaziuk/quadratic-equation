module.exports = function solveEquation(equation) {
  const re = /(-?\d+)\s?\*\s?x\^2\s?([+-]\s?\d+)\s?\*\s?x\s?([+-]\s?\d+)/;
  const a = Number(re.exec(equation)[1]);
  const b = Number(re.exec(equation)[2].replace(' ', ''));
  const c = Number(re.exec(equation)[3].replace(' ', ''));
  const d = Math.sqrt((b ** 2) - 4 * a * c);
  const x1 = Math.round((-b + d) / (2 * a));
  const x2 = Math.round((-b - d) / (2 * a));
  return [x1, x2].sort((left, right) => left - right);
};
