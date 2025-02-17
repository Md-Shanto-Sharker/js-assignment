function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let passCount = 0;
  let failCount = 0;
  for (let mark of marks) {
    if (mark >= 50) {
      passCount++;
    } else {
      failCount++;
    }
  }
  return passCount > failCount;
}
console.log(willSuccess([60, 70, 80, 40, 30]));
console.log(willSuccess([48, 48, 92, 100]));
console.log(willSuccess([48, 48, 50, 50, 100]));
console.log(willSuccess([]));
console.log(willSuccess([90]));
console.log(willSuccess([90, 99, 87, 48, 34, 49]));
console.log(willSuccess("100 , 100"));
console.log(willSuccess(90));
