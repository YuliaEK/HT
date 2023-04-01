const list = [
  "yulia",
  "jack",
  "newton",
  "yulia",
  "yulia",
  "yulia",
  "jack",
  "newton",
  "jack",
  "newton",
  "yulia",
];

let dummy = [];
let count = [];
for (let i = 0; i < list.length; i++) {
  if (!dummy.includes(list[i])) {
    count.push(1);
    dummy.push(list[i]);
  } else {
    count[dummy.indexOf(list[i])]++;
  }
}
console.log(dummy);
console.log(count);

let max = count[0];
for (let i = 0; i < count.length; i++) {
  if (list[i] > max) {
    max = list[i];
  }
}
console.log(max, dummy[count.indexOf(5)]);

// how much is 5% of 300?

let num = 300;
let pres = 0.05;

let result = num * pres;
console.log(result);

// how many even numbers are there between 15 inclusive and 67 exclusive

let start = 15;
let end = 67;
let evenNumb = Math.floor(end - start) / 2;
console.log(evenNumb);
// odd numbers
// 67 - 15 = 52 ---> 26 even and 26 odd

// what if end is 70 exclusive
// 70 - 15 = 55 ---> 28 odd and 27 even

let evenCount = 0;
let oddCount = 0;
for (let i = 15; i < 70; i++) {
  if (i % 2 === 0) {
    // even
    evenCount++;
  } else if (i % 2 !== 0) {
    // odd
    oddCount++;
  }
}
console.log("even", evenCount, "odd", oddCount);

// 'australia' how many

let countVow = 0;
let country = "Australia";
let vowels = "aeiou";

for (let i = 0; i < country.length; i++) {
  if (vowels.includes(country.toLowerCase()[i])) {
    //country[i] === 'a' || country[i] === 'e' || country[i] === 'i' || country[i] === 'o' || country[i] === 'u'
    countVow++;
  }
}
console.log(countVow);

// correct  "([{}])"  "(([()]))" "{[]}()" "()[]{}"
// incorrect "([{]})" "([})" "([{" ")[]" "}])"
// data structure called stack  --- first IN last OUT - last IN first OUT

// time complexity and memory complexity

// list --- push and pop
let pattern = ")}]";
let stack = [];
let patternResult = true;
for (let i = 0; i < pattern.length; i++) {
  if ("([{".includes(pattern[i])) {
    stack.push(pattern[i]);
  } else {
    // what if stack is empty
    if (stack.length === 0) {
      patternResult = false;
      break;
    } else {
      const close = pattern[i];
      const open = stack.pop();
      if (
        !(
          (open === "(" && close === ")") ||
          (open === "[" && close === "]") ||
          (open === "{" && close === "}")
        )
      ) {
        patternResult = false;
        break;
      }
    }
  }
}
if (patternResult) {
  console.log("Correct String");
} else {
  console.log("Incorrect String");
}

// Index
// [3,0,1,4,2]
// start with index 0 ---  342103
const seq = [3, 0, 1, 4, 2];
let generated = "" + seq[0];
let index = seq[0];
while (index > 0) {
  generated += seq[index];
  index = seq[index];
}
console.log(generated);

// Identifying a palindrome sequence
// not my version
// const isPalindrome = (num) => {
//   const numStr = num.toString();
//   return numStr === numStr.split('').reverse().join('');
// };

// const isPalindrome = x => +String(x).split('').reverse().join('') === x;

//Mine

function isPalindrome (string){

    const revToArr = string.split("");

    const reverse = revToArr.reverse();

    const revToString = reverse.join("");

    if (string === revToString){
        console.log ("It's a palindrome")
    }
    else {
        console.log ("It's not a palindrome")
    }

}
// counting number of prime numbers in a range ---> how many prime numbers between 15inclusive and 67exclusive

function isPrime(num) {   // num = 2
  if (num <= 1) 
  return false;
  
  for (let i = 2; i < num; i++) {   // i = 2, 2 < 2? false means end loop
  if (num % i === 0)                // 2 % 2 === 0?
    return false;             // false
  }

  return true;
}

let count1 = 0;
let i = 15;
while (i<67){  // iterator is i which changes in each iteration // i = 16, count1 = 1
// for (let i = 15; i < 67; i++) {
  if (isPrime(i)) count1++;  // isPrime(2) , count1 = 2
  i+=1;           // i = 17
}

console.log("The number of prime numbers between 15 and 67 is:", count1);

// classification ---> list of items - ['toyota', 'apple', 'honda', 'orange', 'eifel tower', 'opera house', 'sydney', 'new york'] ---
// classify into cars, fruits, buildings, cities
// cars ['toyota', 'honda'], fruits ['apple', 'orange'], buildings ['eifel tower', 'opera house'], cities ['sydney', 'new york']

const items = [
  "toyota",
  "apple",
  "honda",
  "orange",
  "eifel tower",
  "opera house",
  "sydney",
  "new york",
];

const cars = [];
const fruits = [];
const buildings = [];
const cities = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item === "toyota" || item === "honda") {
    cars.push(item);
  } else if (item === "apple" || item === "orange") {
    fruits.push(item);
  } else if (item === "eifel tower" || item === "opera house") {
    buildings.push(item);
  } else if (item === "sydney" || item === "new york") {
    cities.push(item);
  }
}
console.log("Cars:", cars);
console.log("Fruits:", fruits);
console.log("Buildings:", buildings);
console.log("Cities:", cities);

// index sequence problem [3,0,1,4,2]
// index 0 --> 34210
// index 1 --> 03421
// index 2 --> 10342
// index 3 --> 42103
// index 4 --> 21034
// which index generates largest number

function generateLargestNumber(arr) {  // [3,0,1,4,2]
    
    let maxNum = -Infinity;
    let maxIndex = -Infinity;
    
  // MEMORY
  // arr = [3,0,1,4,2]
  // i = 0
  // num = "34210" 
  // j=

  // TIME
  // 5ns --> 1 < 5
  //  !== 0

    for (let i = 0; i < arr.length; i++) { // i=0, i<5
      let num = "" + arr[i];   // num="3"
      
      let j = arr[i];   // j= 0  //
      while (j !== i){  //  !== 0
        num += arr[j];  // num=""
        j = arr[j];     // j = 
      }
      
      // generate number for each index
      // for (let j = 0; j < arr.length; j++) { // j=1, j<5
      //   num += arr[(i + j) % arr.length]; // num=30
      // }
      
      num = parseInt(num);
      console.log(num);
      // check if number is greater than current maximum
      if (num > maxNum) {
        maxNum = num;
        maxIndex = i;
      }
    }
    
    return maxIndex;
  }
  
  const arr = [3, 0, 1, 4, 2];
  const maxIndex = generateLargestNumber(arr);
  
  console.log("The largest number:", maxIndex);

  

  // Grid - 2D array 
  //[[3,5,1],  
  //[4,7,5],
  //[9,7,0]]   -- rows and columns  --> 1 is at 0 row,2 column
  // transpose ---> interchanging rows and columns ---> [[3,4,9],[5,7,7],[1,5,0]]

  const array = [[3,5,1],[4,7,5],[9,7,0]];
  const transposed = [];
  
  for (let i = 0; i < array[0].length; i++) { // i = colum; 
    transposed[i] = [];                       //  for each column i in arr create a new row.
    for (let j = 0; j < array.length; j++) {
      transposed[i][j] = array[j][i];         // transposed[0][0]= arr[0][0], which is 3. The second time i = 0 but j = 1, so we set transposed[0][1] = arr[1][0], which is 4. The third time i = 0 but j is 2, so we set transposed[0][2] = arr[2][0], which is 9. [3,4,9] - done; return to the outer loop and move on to the second iteration. This time, i = 1.
    }
  }
  
  console.log(transposed); // [[3,4,9],[5,7,7],[1,5,0]]
  

  // pattern recognition
  // 'abaababbbabababaaaaabbbaabbbbbbabab'  ---> which letter has highest consecutive repetition and number of times repeted

  function maxRepeating(str){
  
    let currentChar = str[0];
    let currentCount = 1;// need to count the first occurrence of the character.
    let maxChar = '';
    let maxCount = 0;
  
    for (let i = 1; i < str.length; i++) {   //let us to compare the first character with the second character
      if (str[i] === currentChar) {   
        currentCount++;
        if (currentCount > maxCount) {
          maxChar = currentChar;
          maxCount = currentCount;
        }
      } else {
        currentChar = str[i];
        currentCount = 1;    // When we reach the first 'b' ---> compare it with the previous 'a', which is differen ---> assign the current character 'b' to currentChar and set currentCount to 1 ---> start counting again from the current character 'b'.
      }
    }
  
    return `The letter "${maxChar}" has the highest consecutive repetition of ${maxCount}.`;
  }

  console.log(maxRepeating('abaababbbabababaaaaabbbaabbbbbbabab'))

  // 'a' 'b' 'c'   ---> combinations  -->  'ab'  'bc'  'abc' 'bac' 'cab' // 'a', 'ab', 'abc', 'b', 'bc', 'c', 'ba', 'cab', 'ca', 'cb', 'bac', 'bca'

  // pancake sorting

  var pancakeSort = function(arr) {
    const result = [];
    const reversePancake = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start += 1;
            end -= 1;
        }
    };

    for (let n = arr.length; n > 0; n--) {
        const target = arr.findIndex(pancake => pancake === n);

        reversePancake(0, target);
        result.push(target + 1);
        reversePancake(0, n - 1);
        result.push(n);
    }
    return result;
};