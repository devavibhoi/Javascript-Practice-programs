let student ={
    name : "Avinash" ,
    age : 23 , 
    course : "Java FullSatck" ,
    batchCode : "E26" , 
    javac : ()=>{
        console.log("Java");
        console.log("Javascript");
        console.log("SQL");
        console.log("Web");
    } 
}
console.log(student);
console.log(student.javac());



let car ={
    brand : "TATA" ,
    model : "NANO" ,
    noOfSeats : 4 , 
    color: "Baby Pink" , 
    price : 200000 , 
    accelerate : ()=>{
        let topSpeed = "100 km/hr"
        console.log(topSpeed);
    } 
}
console.log(car);
console.log(car.accelerate());



let smartPhone = {
    brand : "apple" ,
    model : "iphone15" ,
    color : "Black" ,
    ram : 8 ,
    storage : 128 ,
    camera : ()=>{
        console.log("Click Photo and Video");
    }
}
console.log(smartPhone);
console.log(smartPhone.camera());

let strb
console.log(String.fromCodePoint("a"))