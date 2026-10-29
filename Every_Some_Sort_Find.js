// ==========================================
// every() — 8 Tasks
// ==========================================

console.log("EVERY() TASKS");

// 1. Check whether all numbers are greater than 5
let arr1 = [10, 20, 30, 40, 50];
console.log("1.", arr1.every(num => num > 5));

// 2. Check whether all numbers are even
let arr2 = [12, 18, 25, 31, 42];
console.log("2.", arr2.every(num => num % 2 === 0));

// 3. Check whether every number is divisible by 5
let arr3 = [5, 10, 15, 20, 25];
console.log("3.", arr3.every(num => num % 5 === 0));

// 4. Check whether every number is greater than 20
let arr4 = [21, 24, 27, 30, 33];
console.log("4.", arr4.every(num => num > 20));

// 5. Check whether all numbers are less than 15
let arr5 = [2, 4, 6, 8, 10];
console.log("5.", arr5.every(num => num < 15));

// 6. Check whether every number is a multiple of 10
let arr6 = [10, 20, 30, 41, 50];
console.log("6.", arr6.every(num => num % 10 === 0));

// 7. Check whether every number is >= 15
let arr7 = [15, 25, 35, 45, 55];
console.log("7.", arr7.every(num => num >= 15));

// 8. Check whether every number is divisible by 3
let arr8 = [3, 6, 9, 12, 15];
console.log("8.", arr8.every(num => num % 3 === 0));


// ==========================================
// some() — 8 Tasks
// ==========================================

console.log("\nSOME() TASKS");

// 9. Check whether at least one number is even
let arr9 = [10, 15, 22, 35, 40];
console.log("9.", arr9.some(num => num % 2 === 0));

// 10. Check whether at least one number is greater than 10
let arr10 = [5, 7, 9, 11, 13];
console.log("10.", arr10.some(num => num > 10));

// 11. Check whether at least one number is divisible by 5
let arr11 = [12, 18, 25, 31, 44];
console.log("11.", arr11.some(num => num % 5 === 0));

// 12. Check whether at least one number is odd
let arr12 = [2, 4, 6, 8, 11];
console.log("12.", arr12.some(num => num % 2 !== 0));

// 13. Check whether at least one number is greater than 45
let arr13 = [10, 20, 30, 40, 50];
console.log("13.", arr13.some(num => num > 45));

// 14. Check whether at least one number is divisible by 7
let arr14 = [3, 6, 12, 15, 21];
console.log("14.", arr14.some(num => num % 7 === 0));

// 15. Check whether at least one number is not divisible by 8
let arr15 = [8, 16, 24, 32, 41];
console.log("15.", arr15.some(num => num % 8 !== 0));

// 16. Check whether at least one number is greater than 400
let arr16 = [100, 200, 300, 450, 500];
console.log("16.", arr16.some(num => num > 400));


// ==========================================
// find() — 7 Tasks
// ==========================================

console.log("\nFIND() TASKS");

// 17. Find the first number greater than 20
let arr17 = [10, 15, 25, 30, 12, 40];
console.log("17.", arr17.find(num => num > 20));

// 18. Find the first even number
let arr18 = [5, 7, 9, 12, 15, 18];
console.log("18.", arr18.find(num => num % 2 === 0));

// 19. Find the first number divisible by 5
let arr19 = [3, 7, 11, 14, 20, 25];
console.log("19.", arr19.find(num => num % 5 === 0));

// 20. Find the first number greater than 50
let arr20 = [10, 25, 45, 55, 70, 80];
console.log("20.", arr20.find(num => num > 50));

// 21. Find the first number less than 10
let arr21 = [15, 20, 13, 8, 5, 12];
console.log("21.", arr21.find(num => num < 10));

// 22. Find the first odd number
let arr22 = [2, 4, 6, 8, 11, 13, 15];
console.log("22.", arr22.find(num => num % 2 !== 0));

// 23. Find the first number divisible by 3
let arr23 = [10, 14, 17, 22, 27, 30];
console.log("23.", arr23.find(num => num % 3 === 0));


// ==========================================
// sort() — 7 Tasks
// ==========================================

console.log("\nSORT() TASKS");

// 24. Sort in ascending order
let arr24 = [50, 20, 40, 10, 30];
console.log("24.", arr24.sort((a, b) => a - b));

// 25. Sort in descending order
let arr25 = [5, 2, 9, 1, 7, 3];
console.log("25.", arr25.sort((a, b) => b - a));

// 26. Sort from smallest to largest
let arr26 = [100, 25, 75, 50, 10];
console.log("26.", arr26.sort((a, b) => a - b));

// 27. Sort from largest to smallest
let arr27 = [12, 45, 7, 23, 18, 31];
console.log("27.", arr27.sort((a, b) => b - a));

// 28. Sort ascending and print
let arr28 = [90, 10, 50, 30, 70, 20];
arr28.sort((a, b) => a - b);
console.log("28.", arr28);

// 29. Sort descending and print
let arr29 = [15, 5, 25, 10, 20, 30];
arr29.sort((a, b) => b - a);
console.log("29.", arr29);

// 30. Sort ascending and find first number greater than 45
let arr30 = [40, 10, 80, 20, 60, 30, 50, 70];

arr30.sort((a, b) => a - b);

let result30 = arr30.find(num => num > 45);

console.log("30. Sorted array:", arr30);
console.log("30. First number greater than 45:", result30);