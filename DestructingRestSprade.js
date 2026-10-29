const number = [10, 20, 30, 40]
let [first, second ] = number 
console.log(first, second);

const student = {
    name : "Avii",
    age : 21,
    city : "Pune"
}
let{name, age} = student
console.log(name, age);

const user = {
    id : "Avii"
}
let{id, role = "Developer"} = user
console.log(id, role);

const values = [5, 10, 15, 20, 25]
let [head, ...tail] = values
console.log(head, tail);

const userr = {
    name : "Avii",
    age : 22, 
    password : "ABC123"
}
let {password, ...details} = userr
console.log(details , `Password : ${password}`);

const arr = [1, 2, 3, 4];
let [...copy ]= arr
console.log(copy);

const a = [1, 2, 3, 4]
const b = [5, 6, 7, 8]
let result = [...a,...b]
console.log(result);

const aa = {
    name : "Avii"
}
const bb = {
    age : 23, 
    city : "Pune"
}
let res = {...aa,...bb}
console.log(res);

let sum = ( ...numbers)=>{
    return numbers.reduce((total,num) => total + num, 0);
}
console.log(sum(1234,6675));

