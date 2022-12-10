// Exercise 1: Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

function findViolation(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] < arr[i + 1])) {
      return arr.indexOf(arr[i]) + 1;
    }
  }
  return -1;
}

// Exercise 2: Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array

function getArrofSums(arr) {
  const arrOfSums = [];
  arr.forEach((el) => {
    let sum = 0;
    el.forEach((num) => (sum += num));
    arrOfSums.push(sum);
  });
  return arrOfSums;
}

// Exercise 3: Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length

function getOddNumArr(arr) {
  return arr
    .filter((el) => el % 2 === 1 || el % 2 === -1)
    .map((el, _, arr) => el * arr.length);
}

// Exercise 4: Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.

function spaceNumbers(a, b, step) {
  const spacedArr = [];
  for (let i = a; i <= b; i += step) {
    spacedArr.push(i);
  }
  return spacedArr;
}

// Exercise 5: Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function printFrequency(arr) {
  let cycledNums = [];
  arr.forEach((num, _, arr) => {
    if (!cycledNums.includes(num)) {
      cycledNums.push(num);
      const numOfOccurences = arr.filter((el) => el === num).length;
      console.log(`${num}: ${numOfOccurences / arr.length}`);
    }
  });
}
