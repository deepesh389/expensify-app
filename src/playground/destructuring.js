// Object Destructuring

// const person = {
//     name: 'Deepesh',
//     age: 21,
//     location: {
//         city: 'Bisalpur',
//         temp: 37
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// Array Destructuring

const address = ['suraj colony', 'Bisalpur', 'UP', '262201'];
const [ , city, state, zip ] = address;
console.log(`You are in  ${city} ${state} ${zip}`)

const item = ['Coffee (hot)', '15', '25', '35'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)