
// Treaditinal Way

// let arr = [10, 20, 30, 40]
// console.log(arr);
// let a = arr[0]
// console.log(a);

// let b = arr[1]
// console.log(b);

// let c = arr[2]
// console.log(c);

// let d = arr[3]
// console.log(d);


// let arr = [10, 20, 30, 40]
// let [ x] = arr //can pass empty values=
// console.log(x);

// let [ ,y, ,x] = arr
// console.log(x, y );

// let arr2= ["Avii", "Sonu", 10, 20, true, false]
// let [s1, s2, n1, n2, b1, b2 ]= arr2
// console.log(b1);

// let obj1 = {
//     brand : "IPhone",
//     price : 800000,
//     RAM : "8GB",
//     color : "Black"
// }

// let {brand, price, RAM, color} = obj1
// // let {color}= obj1
// console.log(brand, color, RAM, price);



//rest---> ...

// let arr3= ["Avii", "Sonu", 10, 20, true, false]
// let [s,...b]= arr3
// console.log(b);
// let obj1 = {
//     brand : "IPhone",
//     price : 800000,
//     RAM : "8GB",
//     color : "Black"
// }

// let {...obj2} = obj1
// console.log(obj2);
 
// let {price, ...specifications}=obj1
// console.log(specifications);


//Spread-----> ...

let arr = [10, 20, 30, 40]
let arrr = [50, 60, 70, 80]
let x = [...arr, ...arrr]
console.log(x);

let y = [arr, arrr]
console.log(y.flat(1));


let mobile1={
    brand :"Samsung",
    price : 900000
}
let mobile2={
    color : "black",
    ram : "8GB"
}

let newMobile= {...mobile1,...mobile2}
console.log(newMobile);

