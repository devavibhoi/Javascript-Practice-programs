let traversArray = (arr , printer)=>{
    for(let i = 0 ; i < arr.length ; i++)
    {
        let num = printer(arr[i])
        console.log(num);
        
    }
}
traversArray([10,20,30,40] , (args)=>{
    return args ;
})



let greet = (name , cbFun)=>{
   cbFun(name)
}
greet("Avii", (name)=>{
    console.log(`Hello ${name}`);
})


let repeatTwice = (num , cb)=>{
    for (let n = 0 ; n <= num ; n++ )
    {
        cb(n)
    }
}
repeatTwice(5 , (n)=>{ 
    console.log(n);
})