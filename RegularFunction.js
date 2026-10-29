let mainName = "Regular Fuctions"
console.log(mainName);

console.log(1);
function greet(name){
    return `Hello ${name}`
}
let greete = greet("Avinash");
console.log(greete);

console.log(2);
function welcome(name){
    return `welcome ${name}`
}
let welcomee =welcome("Avinash");
console.log(welcomee);

console.log(3);
function adds( a , b ){
    return a + b ;
}
let sum = adds(26 ,63);
console.log(sum);

console.log(4);
function sub(a,b){
    return a - b;
}
let subs =sub(8754,83);
console.log(subs);

console.log(5);
function mul(a,b){
    return a*b;
}
let multi =mul(8,7);
console.log(multi);

console.log(6);
function square(a){
    return a*a;
}
let sq =square(12);
console.log(sq);

console.log(7);
function isEven(num){
    if(num%2 ==0)
        return "Even "
    return "Odd"
}
let evenOdd =isEven(682);
console.log(evenOdd);

console.log(8);
function largestOfTwo (a,b){
    if(a>b)
        return `${a} is greter`
    return `${b} is greater`
}
let largest =largestOfTwo(87632,782);
console.log(largest);

console.log(9);
function area  (l , w){
    return l*w;
}
let areaa =area(12,22);
console.log(areaa);

console.log(10);
function percentge (num,outof){
    return num *(outof/100)
}
let per = percentge(76.8 , 100)
console.log(per);

