// Do the below programs in anonymous function & IIFE & Arrowed

// A) Print odd numbers in an array

// ANONYMOUS

var value = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = function (num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      console.log(num[i]);
    }
  }
};

a(value);

//IIFE

var IIFE = (function (num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      console.log(num[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ARROWED

var b = (num) => {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      console.log(num[i]);
    }
  }
};

b(value);

// -------------------------------------------------//

// B) Convert all the strings to title caps in a string array

// ANONYMOUS

var upper = function (val) {
  val = val.toLowerCase().split(" ");
  for (var i = 0; i < val.length; i++) {
    val[i] = val[i].charAt(0).toUpperCase() + val[i].slice(1);
  }
  return val.join(" ");
};

let output = upper(`suresh kumar`);
console.log(output);

//IIFE

(function (val) {
  val = val.toLowerCase().split(" ");
  for (var i = 0; i < val.length; i++) {
    val[i] = val[i].charAt(0).toUpperCase() + val[i].slice(1);
  }
  console.log(val.join(" "));
})("suresh kumar");

// ARROWED

var upper = (val) => {
  val = val.toLowerCase().split(" ");
  for (var i = 0; i < val.length; i++) {
    val[i] = val[i].charAt(0).toUpperCase() + val[i].slice(1);
  }
  return val.join(" ");
};
let outputValue = upper(`suresh kumar`);
console.log(outputValue);

// -------------------------------------------------//

// C) Sum of all numbers in an array

// ANONYMOUS

let sumNumber = function (val) {
  let add = 0;
  for (var i = 0; i < val.length; i++) {
    add = add + val[i];
  }
  return add;
};
let Sumout = sumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(Sumout);

//IIFE

(function (val) {
  let add = 0;
  for (var i = 0; i < val.length; i++) {
    add = add + val[i];
  }
  console.log(add);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ARROWED

let arrSum = (val) => {
  let add = 0;
  for (var i = 0; i < val.length; i++) {
    add = add + val[i];
  }
  return add;
};
let arrOutSum = sumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(arrOutSum);

// --------------------------------------------------//

// D) Return all the prime numbers in an array

// ANONYMOUS

let primeArr = function (arr) {
  function isPrime(testNo) {
    var result = false;
    for (var n = testNo - 1; n > 1; n--) {
      result += testNo % n === 0;
    }

    if (result === 0 && testNo > 1) {
      return true;
    }
    return false;
  }

  var newArr = [];

  for (n = 0; n < arr.length; n++) {
    if (isPrime(arr[n])) {
      newArr.push(arr[n]);
    }
  }

  return newArr;
};

let primeOut = primeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(primeOut);

// ARROWED

let primeArray = (arr) => {
  function isPrime(testNo) {
    var result = false;
    for (var n = testNo - 1; n > 1; n--) {
      result += testNo % n === 0;
    }

    if (result === 0 && testNo > 1) {
      return true;
    }
    return false;
  }

  var newArr = [];

  for (n = 0; n < arr.length; n++) {
    if (isPrime(arr[n])) {
      newArr.push(arr[n]);
    }
  }

  return newArr;
};

let primeOutput = primeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(primeOutput);

// IIFE

(function (arr) {
  function isPrime(testNo) {
    var result = false;
    for (var n = testNo - 1; n > 1; n--) {
      result += testNo % n === 0;
    }

    if (result === 0 && testNo > 1) {
      return true;
    }
    return false;
  }

  var newArr = [];

  for (n = 0; n < arr.length; n++) {
    if (isPrime(arr[n])) {
      newArr.push(arr[n]);
    }
  }

  console.log(newArr);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

//------------------------------------------------------//

// E)  Return all the palindromes in an array

// ANONYMOUS

let isPalindrome = function (str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return rev;
  } else {
    return rev;
  }
};

let str1 = isPalindrome([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(str1);

// ARROW

let arrowPoli = function (str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return rev;
  } else {
    return rev;
  }
};

let str2 = arrowPoli([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(str2);

// IIFE

(function (str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev != str) {
    console.log(rev);
  } else {
    console.log(false);
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// F) Return median of two sorted arrays of the same size.

// ANONYMOUS

const medianArr = function (firstArr, secountArr, input) {
  var a = 0;
  var b = 0;
  var first = -1;
  var secound = -1;

  for (var i = 0; i <= input; i++) {
    if (firstArr[a] <= secountArr[b]) {
      first = secound;
      secound = firstArr[a];
      a++;
    } else {
      first = secound;
      secound = secountArr[b];
      b++;
    }
  }
  return (first + secound) / 2;
};
const firstArr = [1, 2, 3, 4, 5];
const secountArr = [7, 8, 9, 10, 11];
const firstOut = firstArr.length;
const secoundOut = secountArr.length;

if (firstOut == secoundOut) {
  console.log(medianArr(firstArr, secountArr, firstOut));
} else {
  console.log(`Not get any value`);
}

// IIFE



// G) Remove duplicates from an array

// ANONYMOUS

const fruit = ["apple", "orange", "banana", "mango", "apple", "mango"];

let duplicateArray = function (fruit) {
  return fruit.filter((arr, index) => fruit.indexOf(arr) === index);
};

console.log(duplicateArray(fruit));

// IIFE

(function (fruit) {
  fruit.filter((arr, index) => fruit.indexOf(arr) === index);

  console.log(duplicateArray(fruit));
})(["apple", "orange", "banana", "mango", "apple", "mango"]);

// H) Rotate an array by k times

// ANONYMOUS

let solution = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.unshift(arr.pop());
    console.log(arr) ;
  }
};
solution([1, 2, 3, 4, 5]);



// IIFE

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.unshift(arr.pop());
    console.log(arr);
  }
})([1, 2, 3, 4, 5]);
