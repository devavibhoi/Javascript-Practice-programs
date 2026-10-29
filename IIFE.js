let mainName = "IIFE ";
console.log(mainName);

console.log(1);

((name) => {
    console.log(`Hello ${name}`);
})("Avinash");


console.log(2);

((name) => {
    console.log(`Welcome ${name}`);
})("Avinash");


console.log(3);

((a, b) => {
    console.log(a + b);
})(26, 63);


console.log(4);

((a, b) => {
    console.log(a - b);
})(8754, 83);


console.log(5);

((a, b) => {
    console.log(a * b);
})(8, 7);


console.log(6);

((a) => {
    console.log(a * a);
})(12);


console.log(7);

((num) => {
    if (num % 2 == 0)
        console.log("Even");
    else
        console.log("Odd");
})(682);


console.log(8);

((a, b) => {
    if (a > b)
        console.log(`${a} is greater`);
    else
        console.log(`${b} is greater`);
})(87632, 782);


console.log(9);

((l, w) => {
    console.log(l * w);
})(12, 22);


console.log(10);

((num, outof) => {
    console.log(num * (outof / 100));
})(76.8, 100);