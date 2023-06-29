const character = {
    name: 'SpiderMan',
    age: 30,
    power: 'Fly on the buildings'
}

const { name, age, power } = character;

console.log(name, age, power);

const getCharacter = ( character ) => {
    const { name, power, age } = character;

    // console.log( name, power, age)

    return {
        keyName: name,
        ability: power,
        details: {
            height: 1.78,
            weight: 79
        }
    }
}

const { keyName, ability, details: { height, weight }} = getCharacter( character );
console.log( keyName, ability, height, weight )