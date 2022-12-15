// 1: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function returnLargestProduct(arr) {
    let largestProd = -Infinity;
    for(let i = 0; i < arr.length - 1; i++) {
        if(largestProd < arr[i] * arr[i + 1]) {
            largestProd = arr[i] * arr[i + 1];
        }
    };
    return largestProd;
};

// 2: Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function findMissingNumAmount(arr) {
    let smallestNum = Infinity;
    let biggestNum = -Infinity;
    arr.forEach(el => {
        if(el < smallestNum) {
            smallestNum = el;
        } else if(el > biggestNum) {
            biggestNum = el;
        }
    });
    return biggestNum - smallestNum - 1;
};

// 3: Implement built in array sort method using bubble sort algorithm.
function mySort() {
  for (let i = 0; i < this.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        let next = this[j + 1];
        this[j + 1] = this[j];
        this[j] = next;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return this;
}

// 4: Insert a n positive number. Print the n-st prime number.

// Chgitem
