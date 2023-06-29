import heroes, { owner } from '../data/heroes';

export const getHeroByID = ( uid ) => heroes.find( ({ id }) => id === uid);
// console.log( getHeroByID(4) );

const getHerosByOwner = ( text ) => heroes.filter( ({ owner }) => owner === text);
// console.log( getHerosByOwner('Marvel') );

// console.log(owner);