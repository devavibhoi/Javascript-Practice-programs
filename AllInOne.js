// 1
let a1 = [10, 20, 30, 40, 50];
console.log(a1.every(n => n > 5));
a1.forEach(n => console.log(n));

// 2
let a2 = [2, 4, 6, 8, 10];
let b2 = a2.map(n => n * 2);
console.log(b2);
console.log(b2.every(n => n % 2 === 0));

// 3
let a3 = [5, 10, 15, 20, 25];
let b3 = a3.filter(n => n > 10);
console.log(b3);
console.log(b3.every(n => n % 5 === 0));

// 4
let a4 = [10, 20, 30, 40, 50];
let total4 = a4.reduce((sum, n) => sum + n, 0);
console.log(total4);
console.log(a4.every(n => n < 100));

// 5
let a5 = [3, 6, 9, 12, 15];
let b5 = a5.map(n => n * 2);
console.log(b5);
console.log(b5.every(n => n > 5));

// 6
let a6 = [12, 18, 24, 31, 42];
let b6 = a6.filter(n => n % 2 === 0);
console.log(b6);
console.log(b6.every(n => n % 2 === 0));


// 7
let a7 = [10, 15, 22, 35, 40];
console.log(a7.some(n => n % 2 === 0));
a7.forEach(n => console.log(n));

// 8
let a8 = [5, 10, 15, 20, 25];
let b8 = a8.filter(n => n > 15);
console.log(b8);
console.log(b8.some(n => n > 20));

// 9
let a9 = [2, 4, 6, 8, 11];
console.log(a9.some(n => n % 2 !== 0));
let b9 = a9.map(n => n * 3);
console.log(b9);

// 10
let a10 = [10, 20, 30, 40, 50];
let total10 = a10.reduce((sum, n) => sum + n, 0);
console.log(total10);
console.log(a10.some(n => n > 45));

// 11
let a11 = [7, 14, 21, 25, 28];
let b11 = a11.filter(n => n % 7 === 0);
console.log(b11);
console.log(b11.some(n => n > 20));

// 12
let a12 = [3, 6, 9, 12, 15];
let b12 = a12.map(n => n + 5);
console.log(b12);
console.log(b12.some(n => n > 15));


// 13
let a13 = [10, 15, 22, 35, 40];
console.log(a13.find(n => n > 20));

// 14
let a14 = [5, 7, 9, 12, 15, 18];
console.log(a14.find(n => n % 2 === 0));
a14.forEach(n => console.log(n));

// 15
let a15 = [10, 20, 25, 30, 35, 40];
let b15 = a15.filter(n => n > 20);
console.log(b15.find(n => n % 5 === 0));

// 16
let a16 = [2, 5, 8, 11, 14, 17];
let b16 = a16.map(n => n * 2);
console.log(b16.find(n => n > 20));

// 17
let a17 = [10, 15, 20, 25, 30];
console.log(a17.reduce((sum, n) => sum + n, 0));
console.log(a17.find(n => n > 18));

// 18
let a18 = [3, 8, 12, 17, 21, 25];
let b18 = a18.filter(n => n % 2 === 0);
console.log(b18.find(n => n > 10));


// 19
let a19 = [50, 20, 40, 10, 30];
a19.sort((a, b) => a - b);
a19.forEach(n => console.log(n));

// 20
let a20 = [5, 2, 9, 1, 7, 3];
a20.sort((a, b) => b - a);
console.log(a20.map(n => n * 2));

// 21
let a21 = [10, 25, 5, 40, 15, 30];
a21.sort((a, b) => a - b);
console.log(a21.filter(n => n > 15));

// 22
let a22 = [50, 10, 30, 20, 40];
a22.sort((a, b) => a - b);
console.log(a22.reduce((sum, n) => sum + n, 0));

// 23
let a23 = [15, 5, 25, 10, 20, 30];
a23.sort((a, b) => b - a);
console.log(a23.find(n => n < 20));

// 24
let a24 = [12, 45, 7, 23, 18, 31];
a24.sort((a, b) => a - b);
console.log(a24.some(n => n > 40));


// 25
let a25 = [10, 20, 30, 40, 50];
let b25 = a25.map(n => n * 2);
let c25 = b25.filter(n => n > 50);
let total25 = c25.reduce((sum, n) => sum + n, 0);
console.log(b25);
console.log(c25);
console.log(total25);

// 26
let a26 = [5, 10, 15, 20, 25, 30];
let b26 = a26.filter(n => n % 2 === 0);
console.log(b26.every(n => n % 2 === 0));
b26.forEach(n => console.log(n));

// 27
let a27 = [3, 7, 12, 18, 21, 25];
let b27 = a27.filter(n => n > 10);
console.log(b27.find(n => n % 3 === 0));
console.log(b27.reduce((sum, n) => sum + n, 0));

// 28
let a28 = [40, 10, 70, 20, 90, 30, 60];
a28.sort((a, b) => a - b);
let b28 = a28.filter(n => n > 30);
console.log(a28);
console.log(b28);
console.log(a28.some(n => n > 80));

// 29
let a29 = [2, 5, 8, 11, 14, 17, 20];
let b29 = a29.map(n => n * 2);
let c29 = b29.filter(n => n > 20);
console.log(c29);
console.log(c29.every(n => n % 2 === 0));
console.log(c29.reduce((sum, n) => sum + n, 0));

// 30
let a30 = [15, 8, 25, 4, 30, 12, 40];
a30.sort((a, b) => a - b);

let b30 = a30.filter(n => n > 10);
let c30 = b30.map(n => n * 2);

console.log(a30);
console.log(b30);
console.log(c30);
console.log(c30.find(n => n > 40));
console.log(c30.reduce((sum, n) => sum + n, 0));
console.log(c30.some(n => n > 60));