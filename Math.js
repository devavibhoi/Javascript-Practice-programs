// console.log(Math);
// console.log(Math.E);
// console.log(Math.abs(-10));

// let x= 5.5
// console.log(Math.floor(x));
// console.log(Math/.cell(x));
// console.log(Math.round(x));
// console.log(Math.trunc(x));
// console.log(Math.sign(-100));
// console.log(Math.max(100, 3000, 200, 10, 500));
// console.log(Math.min(100, 3000, 200, 10, 500));
// console.log(Math.sqrt(5));

// let x = Math.random() * 9000 * 1000
// console.log(Math.trunc(x));
let x;
let generateOtp=() => {
    // console.log("Function called");
    let a= document.getElementById("otpnumber");
    console.log(a);

    
    let x = Math.random() * 9000 + 1000
    alert(`Your OTP is ${Math.trunc(x)}`)
    console.log(Math.trunc(x));
    a.value= Math.trunc(x)
}

let homePage= () => {
    // console.log("Function called");
    console.log(x);
    if(x){
        // console.log("Yes");
        window.location.href= "home.html"
    }
    else{
        console.log("Please fill the otp"); 
    }
}




