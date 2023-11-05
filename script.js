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

//OBJECT LITERAL

// function information(email, number) {
//   const newInformation = { email, number };

//   console.log(newInformation);
// }

// console.log(information("gavinprakasa@email.com", "0283203280392"));
// addressMaker({city : 'indonesia', state : 'Jakarta', country : 'Japan'})


function addressMaker(address) {
    const {city, state, country} = address;
    const newAdress = {city, state, country};

    console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.country}`);
}

