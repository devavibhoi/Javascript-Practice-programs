let date = new Date()
console.log(Date());
console.log(date.getDate());
// console.log(date.getDay());
switch (date.getDay()) {
    case 0:  console.log("Sunday");
        break;
    case 1:  console.log("Monday");
        break;
    case 2:  console.log("Tuesday");
        break;
    case 3:  console.log("Wednesday");
        break;
    case 4:  console.log("Thusday");
        break;
    case 5:  console.log("Friday");
        break;
    case 6:  console.log("Saturday");
        break;
    default:  console.error("Invalid input")
        break;
}
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());//
console.log(Date.now());
console.log(dsate);




