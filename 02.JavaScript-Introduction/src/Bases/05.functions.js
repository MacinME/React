const greet = function(name){
    return `Hello ${ name }`
}

// Arrow function
const greet2 = (name) => `Hello ${ name }`

const getUser =() => {
    return {
        uid: "DFG341",
        username: 'TheMacin'
    }
}

const getAvtiveUSer = () => ({uid: "FDE231", username: "El_papi1023"});

console.log( greet('Goku') );
console.log( greet2('Vegeta') );
console.log( getUser() );
console.log( getAvtiveUSer() )