// Exercise 1
function lastDigitToStart(num) {
  let stringifiedNum = "" + num; // num.toString()
  let lastChar = stringifiedNum[stringifiedNum.length - 1];
  if (lastChar === "0") return num;
  return +`${lastChar}${stringifiedNum.slice(
    0, -1)}`; // stringifiedNum.substring(0, stringifiedNum.length - 1)
}

// Exercise 2
function sortNums(num1, num2, num3) {
  if (num1 < num2 && num2 < num3) return `${num1}, ${num2}, ${num3}`;
  else if (num1 < num2 && num3 < num2) return `${num1}, ${num3}, ${num2}`;
  else if (num2 < num1 && num1 < num3) return `${num2}, ${num1}, ${num3}`;
  else if (num2 < num1 && num3 < num1) return `${num2}, ${num3}, ${num1}`;
  else if (num3 < num1 && num1 < num2) return `${num3}, ${num1}, ${num2}`;
  else if (num3 < num1 && num2 < num1) return `${num3}, ${num2}, ${num1}`;
  else return "Error!";
}

// Exercise 3
var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
  j += 1;
}

// Exercise 4
function calculateSurfaceArea(shape, num1, num2) {
  // const shape = prompt("Please type in the shape");
  // const num1 = +prompt("Please type in the first number");
  // const num2 = +prompt("Please type in the second number");
  if (num1 > 0 && num2 > 0) {
    if (shape === "triangle")
      return `Square of the traingle is ${(num1 * num2) / 2}`;
    else if (shape === "rectangle")
      return `Square of the rectangle is ${num1 * num2}`;
    else return "Please enter a valid shape";
  } else {
    return "The numbers must be positive";
  }
}

// Exercise 5
function invertObject(obj) {
  const newObj = {};
  for (let key in obj) {
    if (newObj[obj[key]]) {
      // let valueArr = [];
      // valueArr.push(newObj[obj[key]]);
      // valueArr.push(key);
      // newObj[obj[key]] = valueArr;
      newObj[obj[key]] = [newObj[obj[key]], key];
    } else newObj[obj[key]] = key;
  }
  return newObj;
}

invertObject({ a: 0, b: 1, c: 2, d: 2, e: 1 });
