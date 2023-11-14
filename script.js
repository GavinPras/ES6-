// let word1 = 'Gavin' ;
// let word2 = 'Prakasa' ;
// let num1 = 10 ;
// let num2 = 20 ;

// let example = `${word1}
// ${word2}
// `;
// let fullWorld2 = `${word1+word2}`;
// let num = `${num1 + num2}`;

// document.getElementById('example').innerHTML = example;
// console.log(example);

// OBJECT

// const personalInformation = {
//   firstname: "Gavin",
//   lastname: "Prakasa",
//   age: 16,
//   adress: "Japan",
//   number: "03423425",
// };

// console.log(personalInformation.firstname + " " + personalInformation.lastname);

// const { firstname: fn, lastname: ln, age, adress: adr, number: num } = personalInformation;
// console.log(`Full Name : ${fn} ${ln}
// Age : ${age}
// Addres : ${adr}
// Number : ${num}`);

// ARRAY

// let [firstName, lastName, diologue] = ['Gavin', 'Prakasa', 'Hello World'];

// console.log(firstName + " " + lastName + " say" + " " + "'" +  diologue + "'");

// OBJECT LITERAL

// function information(email, number) {
//   const newInformation = { email, number };

//   console.log(newInformation);
// }

// console.log(information("gavinprakasa@email.com", "0283203280392"));
// addressMaker({city : 'indonesia', state : 'Jakarta', country : 'Japan'})

// function addressMaker(address) {
//     if (address && address.city && address.state && address.country) {
//         const {city, state, country} = address;
//         const newAddress = {city, state, country};
//         return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
//     } else {
//         return 'Incomplete address data';
//     }
// }

// const data1 = {
//     city : "Jakarta Selatan",
//     state : "Selatan",
//     country : "Indonesia"
// }

// function addressMaker(address) {
//   const { city, state, country } = address;
//   const newAddress = { city, state, country };
//   return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
// }

// let inputCity = document.getElementById("input-city");
// let inputState = document.getElementById("input-state");
// let inputCountry = document.getElementById("input-country");

// inputCity.addEventListener("input", updateAddress);
// inputState.addEventListener("input", updateAddress);
// inputCountry.addEventListener("input", updateAddress);

// function updateAddress() {
//   const city = inputCity.value;
//   const state = inputState.value;
//   const country = inputCountry.value;
//   const address = { city, state, country };
//   return address;
// }

// inputCity.addEventListener("keypress", function () {
//   const address = updateAddress();
//   console.log(addressMaker(address));
// });
// inputState.addEventListener("input", function () {
//   const address = updateAddress();
//   console.log(addressMaker(address));
// });
// inputCountry.addEventListener("input", function () {
//   const address = updateAddress();
//   console.log(addressMaker(address));
// });

// const dataBase = [
//   { name: "Gavin Prakasa", age: 16, gender: "Male", division: 6, phoneNumber: 2930810391 },
//   { name: "Tokisaki Kurumi", age: 16, gender: "Female", division: 10, phoneNumber: 2013981209 },
//   { name: "William James", age: 40, gender: "Male", division: 1, phoneNumber: 903498938 },
//   { name: "Prakasan Vins", age: 23, gender: "Male", division: 7, phoneNumber: 209482309 },
// ];

// function formOutput(personalData) {
//   const { name, age, gender, division, phoneNumber } = personalData;
//   const newPorsonalData = { name, age, gender, division, phoneNumber };
//   return `${newPorsonalData.name}, ${newPorsonalData.age}, ${newPorsonalData.gender}, ${newPorsonalData.division}, ${newPorsonalData.phoneNumber}`;
// }

// for (let i = 0; i < dataBase.length; i++) {
//   const personalData = dataBase[i];
//   console.log(formOutput(personalData));
// }

// const names = "My name is Gavin Prakasa";

// for (const char of names) {
//  console.log(char);
// }

// const incomes = [2323,323131,43466];
// let total = 0;

// for (let income of incomes) {
//   income += 5000;
// }
// console.log(incomes)

// let arr1 = [1,2,3,4,5,6,7] ;
// let arr2 = [...arr1];
// arr2.push('hellow')
// console.log(arr2);

// let obj1 = {
//   firtsName : 'Gavin Prakasa',
//   LastsName : 'dasasd',
//   gender : 'male'
// }

// let obj2 = {
//   LastsName : 'WOasi',
//   ...obj1.gender
// }
// console.log(obj2);

// function add(num) {
//   console.log(arguments);
// }

// add(10,23,5,6,64,1)

// function adds(...nums) {
//   console.log(nums)
// }

// adds(1,20,203,234,403,410,21);

// arrow function

// let add = (...num) => {
//   let total = num.reduce((x, y) => x + y )
//   console.log(total);
// }
// add(10, 20, 30, 40);

// function multiply(...num) {
//   let result = num.reduce((x,y) => {
//     return x*y;
//   });
//   console.log(result);
// };
// multiply(1,2,3,5)

// document.addEventListener("DOMContentLoaded", () => {
//   let btn = document.getElementById("btn");
//   let kotak = document.querySelector(".kotak");

//   btn.addEventListener("click", () => kotak.style.backgroundColor = "red")
// });

// let add = (numArray) => {
//   let total = 0;
//   numArray.forEach(element => {
//     total += element;
//   });
//   console.log(total);
// };
// let arr = [1,2,3,4] ;
// add(arr);

// let arrt = [1,2,3,4,5];
// console.log(arrt.includes(1));
// console.log(arrt.indexOf(0));

// if (false) {
//     let example = 5;
// }
// console.log(example);

// const example = [];
// example.push(5);
// console.log(example);

// const name = {};
// name.fistName = "Gavin";
// console.log(name)
// export const data = [1,2,3] 

import { biodata } from "./script1.js"

console.log(biodata);