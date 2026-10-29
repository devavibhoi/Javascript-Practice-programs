let arr =[10,20,30,40,50]
let res = arr.reduce(((sum,element)=>{
    return sum+element
}),0)
console.log(res)

console.log(arr.reduce((prod,elem)=>{
    return prod*elem
},1));
