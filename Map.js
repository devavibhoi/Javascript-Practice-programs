// Double every number
let arr8 = [5, 10, 15, 20];
let result8 = arr8.map((num) => {
    return num * 2;
});
console.log(result8);

//  Add 10 to every number
let arr9 = [10, 20, 30, 40];
let result9 = arr9.map((num) => {
    return num + 10;
});
console.log(result9);

// Convert marks to percentage
// Add 5 bonus marks to every value
let marks = [45, 60, 75, 80, 90];
let result10 = marks.map((mark) => {
    return mark + 5;
});
console.log(result10);

//  Calculate squares
let arr11 = [2, 4, 6, 8];
let result11 = arr11.map((num) => {
    return num * num;
});
console.log(result11);

// 12. Convert hours to minutes
let hours = [1, 2, 3, 4, 5];
let result12 = hours.map((hour) => {
    return hour * 60;
});
console.log(result12);

// 13. Increase salaries by ₹2,000
let salaries = [20000, 25000, 30000, 35000];

let result13 = salaries.map((salary) => {
    return salary + 2000;
});
console.log(result13);

// Convert Celsius to Fahrenheit
// F = (C × 9/5) + 32
let celsius = [0, 10, 20, 30, 40];
let result14 = celsius.map((c) => {
    return (c * 9 / 5) + 32;
});
console.log(result14);


// let arr= [19,223,2,1,21,4,543,465,12]
// console.log(arr.filter(val=>{
//     return val%2==0;
// }).filter(val=>{
//     return val>20
// }))
