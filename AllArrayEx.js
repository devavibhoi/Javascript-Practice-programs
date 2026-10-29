let arr1=[10, 20 , 30]
arr1.push(40)
console.log(arr1)

let arr2= [5, 10, 15, 20]
arr2.pop()
console.log(arr2);

let arr3= [11, 22, 33, 44]
arr2.shift()
console.log(arr3);

let arr4= [20, 30, 40]
arr2.unshift()
console.log(arr4);

let arr5= [10, 20, 30, 40, 50]
console.log(arr5.indexOf(30));

let arr6=[10, 20, 25, 30, 40].     
console.log(arr6.includes(25));

let arr7=[100, 200, 300, 400]
console.log(arr7.at(-1));

let arr8=[10, 20, 30, 40, 50]
console.log(arr8.slice(1,3));

let arr9=[10, 20, 30, 40, 50]
console.log(arr9.sort((n,c)=>{
    return c-n;
}))

let arr10=[1, 2, 3]
let newarr= arr10.concat([4, 5, 6])
console.log(newarr)

let arr11= [1, 2, 3, 4, 5]
console.log(arr11.map((val)=>{
    return
}))

let arr12= [ 2, 3, 4, 5]
console.log(arr11.map((val)=>{
    return val*val;
}))

let arr13= [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr13.filter((val)=>{
    return val%2==0;
}))

let arr14=[10, 60, 45, 80, 25, 90]
console.log(arr14.filter((val) =>{
    return val>49;
}))

let arr15 =[10, 20, 30, 40, 50]
arr15.forEach(element => {
   console.log(element);
   
})

let arr16=[3, 7, 8, 10, 12]
console.log(arr16.find((val)=>{
    return val%2==0;
}))


let arr17=[10, 20, -5, 30]
let a=(arr17.some((val)=>{
    return val<0;
}))
if(a){
    console.log("Negative numbers");  
}

let arr18=[1, 2, 3, 4, 5]
let b=(arr18.every((val)=>{
    return val>0;
}))
if(a){
    console.log("All Positive numbers");  
}

let arr19=[1, 2, [3, 4], [5, 6]]
console.log(arr19.flat(2))

let arr20=[10, 20, 30, 40, 50]
console.log(arr20.reduce((acc,val)=>{
    return acc+=val;
}))

let arr21=[10, 20, 30, 40, 50]
console.log(arr21.reduce((acc,val)=>{
    return acc*=val;
}))

let arr22=[25, 70, 15, 90, 45]
arr22.sort((n,c)=>{
    return n-c;
})
// console.log(arr22.at(-1))
// console.log(arr22.reduce((acc,val,ind) => {
//     retrun acc  
// }))

let arr23= [50, 10, 40, 20, 30]
console.log(arr23.sort((n,c)=>{
    return c-n;
}))
console.log(arr23.sort((n,c)=>{
    return n-c
}))

let arr24=[10, 20, 30, 40, 50]
arr24.splice(2,1)
console.log(arr24);

let arr25=[100, 200, 300, 400]
arr25.splice(arr25.indexOf(300),1,999)
console.log(arr25);

let arr26=[10, 20, 30, 40]
arr26.splice(2,0,25)
console.log(arr26);

let arr27 =[1, 2, 3, 4, 5, 6]
console.log(arr27.filter(val=>val%2==0).map(val=>val*2));

let arr28 =[10, 15, 20, 25, 30, 35]
console.log(arr28.filter(val=>val%2==0).reduce((acc,val)=>{ return acc+=val}));


