 //es6
// let a = 10;
// let b = 5;
//
// //es5
// var c = 20
// c = "hello";
// console.log(c);

//  const first_name = 'jack'
// const last_name = 'Barbaro';
//
// console.log(first_name + " " + last_name) //es5

// console.log(`${first_name} ${last_name}`);
// const getFullNAme = (user) => {
//     // return "first Name: " + user.first_name + "\n" + "last name: "  + user.last_name;
//     return `first name: ${user.first_name} "\n" last name: ${user.last_name}`
// }
// const  user = {
//     first_name: 'jack',
//     last_name: 'barbaro'
// }
// console.log(getFullNAme(user))//

 //spread operator

 // const mass = [1, 2, 3, 4, 5]
 // const mass2 = [...mass]

 // console.log(mass2)



 // for (let i = 0; i <mass.length; i++) {
 //     mass2.push(mass[i])
 // }
 // console.log(mass2)

//  const obj = {
//      username: 'jack',
//      age: 19,
//      last_name: 'barbaro',
//      full_name: 'jack barbaro'
//  }
//
//  const obj2 = {
//     ...obj,
//      key: 'value',
//      key2: 'value2'
// }
//
//  console.log(obj2)

 //деструктуризация

 const props = {
    onsubmit: () => {
        console.log("Submit")
    },
     data: [
         {
             key: 'value'
         },
          {
             key: 'value'
         },
          {
             key: 'value'
         }
     ]
 }

 const {data, onsubmit} = props;

console.log(data)
onsubmit();
