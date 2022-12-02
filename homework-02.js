"use strict";

// Exercise 1: Given two objects. Write a function that performs shallow compare.
function shallowCompare(obj1, obj2) {
  let longestObjKeys = [];
  let otherObjKeys = [];
  for (const key in obj1) {
    longestObjKeys.push(key);
  }
  for (const key in obj2) {
    otherObjKeys.push(key);
  }
  console.log(longestObjKeys, otherObjKeys);
  const longestObj = longestObjKeys.length > otherObjKeys.length ? obj1 : obj2;
  const otherObj = longestObjKeys.length > otherObjKeys.length ? obj2 : obj1;
  for (const key in longestObj) {
    if (!otherObj.hasOwnProperty(key) || longestObj[key] !== otherObj[key]) {
      return false;
    }
  }
  return true;
}

// Exercise 2: Determine if a word or phrase is an isogram. An isogram (also known as a "non-pattern word") is a word or phrase without a repeating letter.(prabelnery krknutyuny el isogram chi)
function checkIsogram(str) {
  let charArr = [];
  for (let i = 0; i < str.length; i++) {
    if (charArr.includes(str[i])) {
      return "This string is not an isogram";
    }
    charArr.push(str[i]);
  }
  return "This string is an isogram";
}

// Exercise 3: Given a number n ( n&gt;= 0 ). Print n-th Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function printFibonacci(num) {
  let sum = [0, 1];
  if (num < 2) {
    return sum[num];
  }
  for (let i = 2; i <= num; i++) {
    sum.push(sum[i - 1] + sum[i - 2]);
    if (i === num) {
      console.log(sum);
      return sum[sum.length - 1];
    }
  }
}

// Exercise 4: Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
function calcQuitOrRem(num) {
  if (num === 0) {
    return "Cannot calculate";
  }
  let stringifiedNum = num.toString();
  let product = 1;
  let sum = 0;
  for (let i = 0; i < stringifiedNum.length; i++) {
    product *= +stringifiedNum[i] === 0 ? 1 : +stringifiedNum[i];
    sum += +stringifiedNum[i];
  }
  if (product % sum === 0) {
    return `Quitonent is ${product / sum}`;
  } else if (product % sum !== 0) {
    return `Remainder is ${product % sum}`;
  }
}

// Exercise 5: Write a program to print X star pattern series
function printMatrix(num) {
  let num1 = num;
  let sumString = "";
  for (let i = 1; i <= num; i++) {
    for (let n = 1; n <= num; n++) {
      if (n === i || n === num1) {
        sumString += "*";
      } else {
        sumString += " ";
      }
    }
    sumString += "\n";
    num1--;
  }
  console.log(sumString);
}
