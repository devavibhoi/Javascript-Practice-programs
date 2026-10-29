let arr = [5, 12, -3, 8, 15, -10, 20, 7, 30, 2];

console.log("Array:", arr);

//  Sum of all numbers
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("1. Sum:", sum);


//  Product of all numbers
let product = arr.reduce((acc, num) => acc * num, 1);
console.log("2. Product:", product);


//  Sum of all even numbers
let evenSum = arr.reduce((acc, num) => {
    return num % 2 === 0 ? acc + num : acc;
}, 0);
console.log("3. Sum of even numbers:", evenSum);


//  Sum of all odd numbers
let oddSum = arr.reduce((acc, num) => {
    return num % 2 !== 0 ? acc + num : acc;
}, 0);
console.log("4. Sum of odd numbers:", oddSum);


//  Count numbers greater than 10
let greaterThan10 = arr.reduce((acc, num) => {
    return num > 10 ? acc + 1 : acc;
}, 0);
console.log("5. Count greater than 10:", greaterThan10);


//  Count numbers less than 10
let lessThan10 = arr.reduce((acc, num) => {
    return num < 10 ? acc + 1 : acc;
}, 0);
console.log("6. Count less than 10:", lessThan10);


//  Find largest number
let largest = arr.reduce((acc, num) => {
    return num > acc ? num : acc;
}, arr[0]);
console.log("7. Largest number:", largest);


//  Find smallest number
let smallest = arr.reduce((acc, num) => {
    return num < acc ? num : acc;
}, arr[0]);
console.log("8. Smallest number:", smallest);


//  Sum of numbers divisible by 5
let sumDivisibleBy5 = arr.reduce((acc, num) => {
    return num % 5 === 0 ? acc + num : acc;
}, 0);
console.log("9. Sum divisible by 5:", sumDivisibleBy5);


//  Count numbers divisible by 3
let countDivisibleBy3 = arr.reduce((acc, num) => {
    return num % 3 === 0 ? acc + 1 : acc;
}, 0);
console.log("10. Count divisible by 3:", countDivisibleBy3);


//  Sum of numbers between 10 and 50
let sumBetween10And50 = arr.reduce((acc, num) => {
    return num >= 10 && num <= 50 ? acc + num : acc;
}, 0);
console.log("11. Sum between 10 and 50:", sumBetween10And50);


// Sum of all positive numbers
let positiveSum = arr.reduce((acc, num) => {
    return num > 0 ? acc + num : acc;
}, 0);
console.log("12. Sum of positive numbers:", positiveSum);


// Sum of all negative numbers
let negativeSum = arr.reduce((acc, num) => {
    return num < 0 ? acc + num : acc;
}, 0);
console.log("13. Sum of negative numbers:", negativeSum);


// Count positive numbers
let positiveCount = arr.reduce((acc, num) => {
    return num > 0 ? acc + 1 : acc;
}, 0);
console.log("14. Count positive numbers:", positiveCount);


// Count negative numbers
let negativeCount = arr.reduce((acc, num) => {
    return num < 0 ? acc + 1 : acc;
}, 0);
console.log("15. Count negative numbers:", negativeCount);


//  Average of all numbers
let average = arr.reduce((acc, num) => acc + num, 0) / arr.length;
console.log("16. Average:", average);


//  Sum of numbers at even indexes
let evenIndexSum = arr.reduce((acc, num, index) => {
    return index % 2 === 0 ? acc + num : acc;
}, 0);
console.log("17. Sum at even indexes:", evenIndexSum);


//  Sum of numbers at odd indexes
let oddIndexSum = arr.reduce((acc, num, index) => {
    return index % 2 !== 0 ? acc + num : acc;
}, 0);
console.log("18. Sum at odd indexes:", oddIndexSum);


//  Total marks and average marks
let marks = [80, 75, 90, 85, 70];
let totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
let averageMarks = totalMarks / marks.length;
console.log("19. Total Marks:", totalMarks);
console.log("19. Average Marks:", averageMarks);


// Total bill after adding 18% GST
let prices = [100, 200, 300, 400];
let totalBill = prices.reduce((acc, price) => acc + price, 0);
let gst = totalBill * 18 / 100;
let finalBill = totalBill + gst;

console.log("20. Total Bill:", totalBill);
console.log("20. GST (18%):", gst);
console.log("20. Final Bill:", finalBill);