const firstName = 'Drake';
const lastName = 'Zucker';

const fullName = firstName + lastName;
const fullName2 = `${ firstName } ${ lastName }`;

console.log({ fullName, fullName2 });

function onGetting(name){
    return 'Hello ' + name;
}

console.log(` This is a text: ${ onGetting(firstName) } `);