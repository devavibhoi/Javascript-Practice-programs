// Find even numbers
let arr15 = [10, 15, 20, 25, 30, 35, 40];
let result15 = arr15.filter((num) => {
    return num % 2 === 0;
});
console.log(result15);

// Find numbers greater than 50
let arr16 = [25, 60, 45, 80, 35, 90];
let result16 = arr16.filter((num) => {
    return num > 50;
});
console.log(result16);

// Find numbers less than 30
let arr17 = [10, 45, 20, 35, 15, 50];
let result17 = arr17.filter((num) => {
    return num < 30;
});
console.log(result17);

// Find passing marks
// Passing marks are greater than or equal to 35
let marks18 = [25, 45, 32, 67, 29, 80, 55];
let result18 = marks18.filter((mark) => {
    return mark >= 35;
})
console.log(result18);

//  Find positive numbers
let arr19 = [-10, 20, -5, 30, -2, 40];
let result19 = arr19.filter((num) => {
    return num > 0;
});
console.log(result19);

// 20. Find numbers divisible by 5
let arr20 = [12, 15, 20, 23, 30, 37, 45, 52];
let result20 = arr20.filter((num) => {
    return num % 5 === 0;
});

console.log(result20);