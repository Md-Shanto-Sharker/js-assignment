function calculateSleepTime(times) {
  if (!Array.isArray(times) || times.some((time) => typeof time !== "number")) {
    return "Invalid";
  }
  let totalSeconds = times.reduce((sum, time) => sum + time, 0);

  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;

  return { hour, minute, second };
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime([1000, 2000, 725]));
console.log(calculateSleepTime([100, 3800]));
console.log(calculateSleepTime([]));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([100, 3800, "90"]));
