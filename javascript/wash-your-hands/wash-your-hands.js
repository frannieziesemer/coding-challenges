const washYourHands = (n, nM) => {
  const secondsPerMonth = (n * 21 * 30);
  const totalMins = (secondsPerMonth * nM) / 60;
  const seconds = (totalMins % 1) * 60;
  let mins;
  if (seconds > 0) {
    mins = totalMins.toString().slice(0, -2);
  } else {
    mins = totalMins;
  }
  return `${mins} minutes and ${seconds} seconds`;
}
washYourHands(8, 7);


module.exports = washYourHands;