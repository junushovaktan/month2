const a = "1";
let b =  2;

for (let key of []){
    console.log(key)
}

while (1 < 0){

}

if (a === b) {

}

// function sayHello() {
//     console.log("hello!")
// }
// sayHello();

function getFullName(user, age) {
    if (age < 18){
        console.log("CLOSE")

    }else {
        console.log("open")
    }
}

const user = {
    first_name : "John",
    last_name: "kia"
}
const user2 = {
    first_name : "Aktan",
    last_name: "batman"
}
const user3 = {
    first_name : "Atabek",
    last_name: "super_rovno"
}
getFullName(user, "20");
getFullName(user2, '16');
getFullName(user3, '15');

// console.log(user.first_name, user.last_name);
// console.log(user2.first_name, user2.last_name);
// console.log(user3.first_name, user3.last_name);

function lnumber(num, num2) {
       if (num > num2){
           alert("num Больше")
       }else if (num2 > num){
           alert("num2 Больше")
       }
}
const num = 2
const num2 = 3

lnumber(num, num2)