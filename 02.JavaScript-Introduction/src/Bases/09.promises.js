import { getHeroByID } from './Bases/08.exp-imp';

// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // console.log('2 seconds after');
//         const hero = getHeroByID(2);
//         resolve( hero );
//     });
// });

// promise.then( (character) => console.log(`The hero ${ character.name }`))


const getHeroByIDAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroByID(id);
            hero 
                ? resolve( hero )
                : reject('Hero not found')
        });
    });
}

getHeroByIDAsync(2)
    .then(console.log)
    .catch( (err) => console.error( err ))