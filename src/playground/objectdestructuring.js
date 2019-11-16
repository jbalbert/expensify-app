// const person  = {
//     name : "John Doe",
//     age : 21,
//     location : {
//         city : "manila",
//         temp : 76
//     }
// };

// const {name : firstname = 'anonymous', age} = person;

// console.log(`${firstname} is ${age}`);

// const {city,  temp : temperature} = person.location;
// console.log(`It's ${temperature} degrees in ${city} `);

const book = {
    title: "Ego is the Enemy",
    author : "Ryan Holiday",
    publisher : {
        name : "Penguin"
    }
};

const { name : publisherName = 'self-published' } = book.publisher;

console.log(publisherName);