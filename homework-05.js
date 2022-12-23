// 1: Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)
function removeFirstElRec(arr, curElIndex = 0) {
  if (curElIndex !== arr.length - 1 && arr.length !== 0) {
    arr[curElIndex] = arr[curElIndex + 1];
    removeFirstElRec(arr, curElIndex + 1);
  } else if (curElIndex === arr.length - 1) {
    arr.pop();
  }
  return arr;
}

// 2: Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function flatArray(arr, flattenedArr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") {
      flattenedArr.push(arr[i]);
    } else if (typeof arr[i] === "object") {
      flatArray(arr[i], flattenedArr);
    }
  }
  return flattenedArr;
}

// 3: Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function digitSum(num) {
  let sum = 0;
  const uniqueDigits = Array.from(new Set(num.toString().split("")));
  uniqueDigits.forEach((num) => (sum += +num));
  return sum;
}

// 4: Given the list of the following readers:
// [
//     { book: "Catcher in the Rye", readStatus: true, percent: 40},
//     { book: "Animal Farm", readStatus: true, percent: 20},
//     { book: "Solaris", readStatus: false, percent: 90 },
//     { book: "The Fall", readStatus: true, percent: 50 },
//     { book: "White Nights", readStatus: false, percent: 60 } ,
//     { book: "After Dark", readStatus: true, percent: 70 }
// ];

function sortBooks(bookArr) {
  const sortedBookArr = bookArr
    .filter((book) => book.readStatus === true)
    .sort((a, b) => b.percent - a.percent);
  sortedBookArr.forEach((book) => (book.percent += "%"));
  return sortedBookArr;
}
