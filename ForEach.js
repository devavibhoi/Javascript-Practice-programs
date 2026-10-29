//  Print all elements
let arr1 = [10, 20, 30, 40, 50];
arr1.forEach((val)=>{
     console.log(val);
});

//  Print each number doubled
let arr2 = [2, 4, 6, 8, 10];
arr2.forEach((num)=>{
    console.log(num * 2);
});

// Print only even numbers
let arr3 = [11, 20, 35, 42, 57, 60];
arr3.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

//  Calculate the sum
let arr4 = [10, 20, 30, 40];
let sum = 0;
arr4.forEach((num) => {
    sum = sum + num;
});
console.log(sum);

// Count numbers greater than 50
let arr5 = [25, 70, 45, 90, 55, 30];
let count = 0;
arr5.forEach((num) => {
    if (num > 50) {
        count++;
    }
});
console.log(count);

// Calculate total prices
let prices = [100, 250, 150, 300];
let total = 0;
prices.forEach((price) => {
    total = total + price;
});
console.log(total);

//  Print numbers with their squares
let arr7 = [2, 3, 4, 5, 6];
arr7.forEach((num) => {
    console.log(num, num * num);
});