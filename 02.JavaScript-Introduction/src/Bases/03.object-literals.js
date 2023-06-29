const person = {
    name: 'Drake',
    lastName: 'Holland',
    age: 26,
    direction: {
        country: 'New York',
        zip: 121232,
        lat: 13.342324,
        lng: 93.34324
    }
}

// Memory reference
const person2 = person;
person2.name = 'Barry'

// Copy all object properties
const p3 = Object.assign({}, person);
p3.name = 'Jake';

// spread
const p4 = {...person};
p4.name = 'Fany';

console.log( person );
console.log( person2 );
console.log( p3 );
console.log( p4 );

console.log( person === p3)