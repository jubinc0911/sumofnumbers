const test = [1, 3, 5, 7];

function sumFor(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(test));

function sumWhile(arr) {
  let sum = 0;
  let index = 0;
  while (arr.length > index) {
    sum += arr[index];
    index++;
  }
  return sum;
}

console.log(sumWhile(test));

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; });
}

console.log(sumTheSimpleWay(test));
