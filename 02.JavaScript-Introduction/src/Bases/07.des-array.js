const characters= ['SpiderMan', 'IronMan', 'SuperMan', 'Thor'];

const [, , , p4] = characters;
console.log( p4 );

const returnArray = () => {
    return ['Apple', 2000, true, 'JavaScript']
}

const [ ps1, ps2, , ps3 ] = returnArray();
console.log( ps1, ps2, ps3);

// Task
const onState = ( value ) => {
    return [ value , () => console.log('Hello World!')];
}

const [ name, setName ] = onState('Learning JavaScript');
console.log( name );
setName();